# DARKBEATS — Beat Store

## Stack
- **Frontend** : HTML/CSS/JS statique
- **Backend** : Vercel Serverless Functions
- **Base de données** : Supabase (PostgreSQL)
- **Stockage fichiers** : Supabase Storage
- **Paiements** : Stripe Payment Links

---

## 1. Setup Supabase

### Créer la table `beats`
Dans Supabase → SQL Editor, exécute ce script :

```sql
CREATE TABLE beats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  bpm INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  audio_url TEXT NOT NULL,
  cover_url TEXT,
  stripe_payment_link TEXT,
  stripe_product_id TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Autoriser la lecture publique
ALTER TABLE beats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read" ON beats
  FOR SELECT USING (active = true);

CREATE POLICY "Service role full access" ON beats
  USING (auth.role() = 'service_role');
```

### Créer le bucket Storage
Dans Supabase → Storage → Créer un bucket :
- Nom : `beats`
- Public : **OUI**

---

## 2. Variables d'environnement Vercel

Dans Vercel → Settings → Environment Variables, ajoute :

| Variable | Valeur |
|---|---|
| `SUPABASE_URL` | `https://seehcjbhjcltgmrinkld.supabase.co` |
| `SUPABASE_SERVICE_KEY` | Ta clé **service_role** (dans Supabase → Settings → API) |
| `STRIPE_SECRET_KEY` | `sk_live_...` (ta nouvelle clé après régénération) |
| `ADMIN_PASSWORD` | Un mot de passe de ton choix pour l'admin |
| `SITE_URL` | `https://ton-site.vercel.app` |

> ⚠️ Utilise la clé `service_role` de Supabase (pas la `anon`), elle permet d'écrire dans la base.

---

## 3. Déployer sur Vercel

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Installe Vercel CLI : `npm i -g vercel`
3. Dans le dossier du projet : `vercel`
4. Suis les instructions, ajoute les variables d'env
5. C'est en ligne !

Ou plus simple : uploade le dossier sur GitHub et connecte le repo dans Vercel.

---

## 4. Utiliser le panneau admin

Accède à : `https://ton-site.vercel.app/admin`

- Entre ton `ADMIN_PASSWORD`
- Upload un beat (MP3 ou WAV)
- Remplis titre / genre / BPM / prix
- Clique "Ajouter" → le beat apparaît sur le site ET le lien Stripe est créé automatiquement

---

## Structure du projet

```
beatstore/
├── api/
│   ├── add-beat.js        → Ajouter un beat + créer Payment Link Stripe
│   ├── get-beats.js       → Récupérer tous les beats
│   ├── delete-beat.js     → Supprimer un beat
│   └── upload-audio.js    → Upload fichier audio vers Supabase
├── public/
│   └── index.html         → Site public (beat store)
├── admin/
│   └── index.html         → Panneau admin
├── package.json
├── vercel.json
└── README.md
```
