const { createClient } = require('@supabase/supabase-js');
const multipart = require('parse-multipart-data');

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

  const adminPassword = req.headers['authorization'];
  if (adminPassword !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  try {
    const boundary = multipart.getBoundary(req.headers['content-type']);
    const parts = multipart.parse(req.body, boundary);
    const file = parts[0];

    if (!file) return res.status(400).json({ error: 'Aucun fichier reçu' });

    const ext = file.filename.split('.').pop().toLowerCase();
    if (!['mp3', 'wav'].includes(ext)) {
      return res.status(400).json({ error: 'Format non supporté. MP3 ou WAV uniquement.' });
    }

    const filename = `audio/${Date.now()}_${file.filename.replace(/\s+/g, '_')}`;

    const { error } = await supabase.storage
      .from('beats')
      .upload(filename, file.data, {
        contentType: file.type,
        upsert: false
      });

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from('beats')
      .getPublicUrl(filename);

    return res.status(200).json({
      success: true,
      url: urlData.publicUrl,
      filename
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
