const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Auth check
  const adminPassword = req.headers['authorization'];
  if (adminPassword !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  try {
    const { title, genre, bpm, price, audio_url, cover_url } = req.body;

    if (!title || !genre || !bpm || !price || !audio_url) {
      return res.status(400).json({ error: 'Champs manquants' });
    }

    // 1. Créer le produit Stripe
    const product = await stripe.products.create({
      name: title,
      metadata: { genre, bpm: String(bpm) }
    });

    // 2. Créer le prix Stripe
    const stripePrice = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(price * 100),
      currency: 'eur'
    });

    // 3. Créer le Payment Link Stripe
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      after_completion: {
        type: 'redirect',
        redirect: { url: `${process.env.SITE_URL}?success=true` }
      },
      metadata: { beat_title: title }
    });

    // 4. Sauvegarder dans Supabase
    const { data, error } = await supabase
      .from('beats')
      .insert({
        title,
        genre,
        bpm: parseInt(bpm),
        price: parseFloat(price),
        audio_url,
        cover_url: cover_url || null,
        stripe_payment_link: paymentLink.url,
        stripe_product_id: product.id,
        active: true,
        created_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    return res.status(200).json({
      success: true,
      beat: data,
      payment_link: paymentLink.url
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
