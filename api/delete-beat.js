const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });

  const adminPassword = req.headers['authorization'];
  if (adminPassword !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  try {
    const { id } = req.body;

    // Récupérer le beat
    const { data: beat } = await supabase
      .from('beats')
      .select('*')
      .eq('id', id)
      .single();

    // Archiver le produit Stripe
    if (beat?.stripe_product_id) {
      await stripe.products.update(beat.stripe_product_id, { active: false });
    }

    // Supprimer le fichier audio dans Supabase Storage
    if (beat?.audio_url) {
      const filename = beat.audio_url.split('/').pop();
      await supabase.storage.from('beats').remove([`audio/${filename}`]);
    }

    // Désactiver dans la base
    const { error } = await supabase
      .from('beats')
      .update({ active: false })
      .eq('id', id);

    if (error) throw error;

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
