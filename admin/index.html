<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DARKBEATS — Admin</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--black:#000000;--dark:#202020;--navy:#000020;--slate:#8080A0;--mid:#404040;--teal:#80A0A0;--warm:#402020;--wine:#200000}
body{background:var(--black);color:var(--slate);font-family:'Barlow',sans-serif;min-height:100vh}

/* LOGIN */
#loginScreen{position:fixed;inset:0;background:var(--black);display:flex;align-items:center;justify-content:center;z-index:1000;flex-direction:column;gap:24px}
.login-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:32px;letter-spacing:8px;text-transform:uppercase;color:var(--teal)}
.login-sub{font-size:11px;letter-spacing:4px;color:var(--mid);text-transform:uppercase;margin-top:-16px}
.login-form{display:flex;flex-direction:column;gap:12px;width:320px;margin-top:16px}
.login-input{background:rgba(128,128,160,.05);border:1px solid rgba(128,128,160,.15);color:var(--slate);padding:14px 20px;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;outline:none;transition:border .2s}
.login-input:focus{border-color:var(--teal)}
.login-btn{background:var(--teal);border:none;color:var(--black);padding:14px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:12px;letter-spacing:5px;text-transform:uppercase;cursor:pointer;transition:background .2s}
.login-btn:hover{background:var(--slate)}
.login-error{color:rgba(200,80,80,.8);font-size:11px;letter-spacing:2px;text-align:center;display:none}
.login-error.show{display:block}

/* LAYOUT */
#app{display:none}
header{display:flex;align-items:center;justify-content:space-between;padding:0 40px;height:52px;border-bottom:1px solid rgba(128,128,160,.1);background:rgba(0,0,20,.9);position:sticky;top:0;z-index:100;backdrop-filter:blur(16px)}
.header-logo{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:16px;letter-spacing:6px;color:var(--teal);text-transform:uppercase}
.header-tag{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:4px;color:var(--mid);text-transform:uppercase}
.logout-btn{background:none;border:1px solid rgba(128,128,160,.2);color:var(--mid);padding:6px 16px;font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:all .2s}
.logout-btn:hover{border-color:var(--teal);color:var(--teal)}

main{max-width:1100px;margin:0 auto;padding:60px 40px}

/* ADD BEAT FORM */
.form-section{margin-bottom:80px}
.section-title{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:clamp(36px,5vw,64px);text-transform:uppercase;color:rgba(128,128,160,.7);letter-spacing:-1px;line-height:1;margin-bottom:40px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.form-full{grid-column:1/-1}
.field{display:flex;flex-direction:column;gap:8px}
.field label{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:4px;color:var(--mid);text-transform:uppercase}
.field input,.field select{background:rgba(128,128,160,.04);border:1px solid rgba(128,128,160,.12);color:var(--slate);padding:12px 16px;font-family:'Barlow',sans-serif;font-size:14px;outline:none;transition:border .2s;appearance:none;-webkit-appearance:none}
.field input:focus,.field select:focus{border-color:var(--teal)}
.field select option{background:var(--navy)}

/* UPLOAD ZONE */
.upload-zone{border:1px dashed rgba(128,128,160,.2);padding:40px;text-align:center;cursor:pointer;transition:all .2s;position:relative}
.upload-zone:hover,.upload-zone.drag{border-color:var(--teal);background:rgba(128,160,160,.03)}
.upload-zone input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.upload-icon{font-size:28px;margin-bottom:12px;opacity:.4}
.upload-title{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:3px;color:var(--mid);text-transform:uppercase;margin-bottom:6px}
.upload-sub{font-size:11px;letter-spacing:1px;color:var(--mid);opacity:.6}
.upload-progress{margin-top:16px;display:none}
.progress-bar{width:100%;height:2px;background:rgba(128,128,160,.1)}
.progress-fill{height:100%;background:var(--teal);width:0%;transition:width .3s}
.upload-filename{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;color:var(--teal);margin-top:8px;text-transform:uppercase}

.submit-btn{margin-top:24px;width:100%;background:var(--teal);border:none;color:var(--black);padding:18px;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:12px;letter-spacing:5px;text-transform:uppercase;cursor:pointer;transition:all .2s}
.submit-btn:hover{background:var(--slate);letter-spacing:7px}
.submit-btn:disabled{opacity:.4;cursor:not-allowed;letter-spacing:5px}

/* FEEDBACK */
.feedback{margin-top:16px;padding:14px 20px;font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;display:none}
.feedback.success{display:block;background:rgba(0,0,32,.8);border:1px solid rgba(128,160,160,.3);color:var(--teal)}
.feedback.error{display:block;background:rgba(32,0,0,.8);border:1px solid rgba(200,80,80,.3);color:rgba(200,120,120,.8)}

/* BEAT LIST */
.beats-section{}
.beats-table{width:100%;border-collapse:collapse}
.beats-table th{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;color:var(--mid);text-transform:uppercase;padding:8px 12px;text-align:left;border-bottom:1px solid rgba(128,128,160,.1)}
.beats-table td{padding:16px 12px;border-bottom:1px solid rgba(128,128,160,.06);vertical-align:middle}
.beat-row-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:16px;letter-spacing:2px;text-transform:uppercase;color:rgba(128,128,160,.8)}
.beat-row-sub{font-size:11px;letter-spacing:1px;color:var(--mid);margin-top:2px;text-transform:uppercase}
.tag{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;color:var(--mid);text-transform:uppercase;padding:3px 8px;border:1px solid rgba(128,128,160,.12)}
.price-cell{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:18px;color:rgba(128,128,160,.6)}
.link-cell a{font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:2px;color:var(--teal);text-decoration:none;border-bottom:1px solid rgba(128,160,160,.2)}
.link-cell a:hover{border-bottom-color:var(--teal)}
.delete-btn{background:none;border:1px solid rgba(128,128,160,.1);color:var(--mid);padding:6px 12px;font-family:'Barlow Condensed',sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s}
.delete-btn:hover{border-color:rgba(200,80,80,.4);color:rgba(200,100,100,.7)}
.empty-state{padding:60px 0;text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:4px;color:var(--mid);text-transform:uppercase}
.loading-state{padding:40px 0;text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;color:var(--mid);text-transform:uppercase}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="loginScreen">
  <div class="login-title">Darkbeats</div>
  <div class="login-sub">Panneau admin</div>
  <div class="login-form">
    <input class="login-input" type="password" id="pwdInput" placeholder="Mot de passe" onkeydown="if(event.key==='Enter')login()">
    <button class="login-btn" onclick="login()">Entrer</button>
    <div class="login-error" id="loginError">Mot de passe incorrect</div>
  </div>
</div>

<!-- APP -->
<div id="app">
  <header>
    <div>
      <div class="header-logo">Darkbeats</div>
    </div>
    <div class="header-tag">Admin</div>
    <button class="logout-btn" onclick="logout()">Déconnexion</button>
  </header>

  <main>
    <!-- ADD BEAT -->
    <div class="form-section">
      <div class="section-title">Ajouter<br>un beat</div>

      <div class="form-grid">
        <div class="field">
          <label>Titre du beat</label>
          <input type="text" id="fTitle" placeholder="NIGHT CRAWLER">
        </div>
        <div class="field">
          <label>Genre</label>
          <input type="text" id="fGenre" placeholder="Trap, Drill, Dark...">
        </div>
        <div class="field">
          <label>BPM</label>
          <input type="number" id="fBpm" placeholder="140" min="60" max="200">
        </div>
        <div class="field">
          <label>Prix (€)</label>
          <input type="number" id="fPrice" placeholder="29" min="1" step="0.01">
        </div>

        <!-- UPLOAD AUDIO -->
        <div class="field form-full">
          <label>Fichier audio (MP3 ou WAV)</label>
          <div class="upload-zone" id="uploadZone"
            ondragover="this.classList.add('drag');event.preventDefault()"
            ondragleave="this.classList.remove('drag')"
            ondrop="handleDrop(event)">
            <input type="file" id="audioFile" accept=".mp3,.wav" onchange="handleFileSelect(this)">
            <div class="upload-icon">🎵</div>
            <div class="upload-title" id="uploadTitle">Glisse ton fichier ici</div>
            <div class="upload-sub">MP3 ou WAV — max 50 Mo</div>
            <div class="upload-progress" id="uploadProgress">
              <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
              <div class="upload-filename" id="uploadFilename"></div>
            </div>
          </div>
        </div>
      </div>

      <button class="submit-btn" id="submitBtn" onclick="addBeat()">
        Ajouter le beat + créer le lien Stripe →
      </button>
      <div class="feedback" id="feedback"></div>
    </div>

    <!-- BEATS LIST -->
    <div class="beats-section">
      <div class="section-title">Catalogue</div>
      <div id="beatsTableWrap"><div class="loading-state">Chargement...</div></div>
    </div>
  </main>
</div>

<script>
const API = '/api';
let token = localStorage.getItem('admin_token') || '';
let audioUrl = null;

// ── AUTH ──
function login() {
  const pwd = document.getElementById('pwdInput').value;
  if (!pwd) return;
  token = pwd;
  // Tester le token en appelant l'API
  fetch(`${API}/get-beats`, { headers: { Authorization: `Bearer ${token}` } })
    .then(r => {
      if (r.ok) {
        localStorage.setItem('admin_token', token);
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        loadBeats();
      } else {
        document.getElementById('loginError').classList.add('show');
      }
    })
    .catch(() => document.getElementById('loginError').classList.add('show'));
}

function logout() {
  localStorage.removeItem('admin_token');
  token = '';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
}

// Auto-login si token sauvegardé
if (token) {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  loadBeats();
}

// ── UPLOAD ──
function handleFileSelect(input) {
  if (input.files[0]) uploadFile(input.files[0]);
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.remove('drag');
  const file = e.dataTransfer.files[0];
  if (file) uploadFile(file);
}

async function uploadFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (!['mp3', 'wav'].includes(ext)) {
    showFeedback('Format non supporté. MP3 ou WAV uniquement.', 'error');
    return;
  }

  document.getElementById('uploadProgress').style.display = 'block';
  document.getElementById('uploadTitle').textContent = 'Upload en cours...';
  document.getElementById('uploadFilename').textContent = file.name;
  document.getElementById('progressFill').style.width = '0%';

  const formData = new FormData();
  formData.append('file', file);

  // Simuler la progression
  let prog = 0;
  const interval = setInterval(() => {
    prog = Math.min(prog + Math.random() * 15, 90);
    document.getElementById('progressFill').style.width = prog + '%';
  }, 200);

  try {
    const res = await fetch(`${API}/upload-audio`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    const data = await res.json();

    clearInterval(interval);
    document.getElementById('progressFill').style.width = '100%';

    if (data.url) {
      audioUrl = data.url;
      document.getElementById('uploadTitle').textContent = '✓ Fichier uploadé';
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    clearInterval(interval);
    document.getElementById('uploadTitle').textContent = 'Glisse ton fichier ici';
    document.getElementById('uploadProgress').style.display = 'none';
    showFeedback('Erreur upload : ' + err.message, 'error');
    audioUrl = null;
  }
}

// ── ADD BEAT ──
async function addBeat() {
  const title = document.getElementById('fTitle').value.trim().toUpperCase();
  const genre = document.getElementById('fGenre').value.trim();
  const bpm = document.getElementById('fBpm').value;
  const price = document.getElementById('fPrice').value;

  if (!title || !genre || !bpm || !price) {
    showFeedback('Remplis tous les champs', 'error'); return;
  }
  if (!audioUrl) {
    showFeedback('Upload le fichier audio d\'abord', 'error'); return;
  }

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Création en cours...';

  try {
    const res = await fetch(`${API}/add-beat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, genre, bpm: +bpm, price: +price, audio_url: audioUrl })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    showFeedback(`✓ ${title} ajouté — Lien Stripe créé : ${data.payment_link}`, 'success');

    // Reset form
    document.getElementById('fTitle').value = '';
    document.getElementById('fGenre').value = '';
    document.getElementById('fBpm').value = '';
    document.getElementById('fPrice').value = '';
    document.getElementById('audioFile').value = '';
    document.getElementById('uploadTitle').textContent = 'Glisse ton fichier ici';
    document.getElementById('uploadProgress').style.display = 'none';
    audioUrl = null;

    loadBeats();
  } catch (err) {
    showFeedback('Erreur : ' + err.message, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Ajouter le beat + créer le lien Stripe →';
  }
}

// ── LOAD BEATS ──
async function loadBeats() {
  const wrap = document.getElementById('beatsTableWrap');
  try {
    const res = await fetch(`${API}/get-beats`);
    const data = await res.json();
    const beats = data.beats || [];

    if (!beats.length) {
      wrap.innerHTML = '<div class="empty-state">Aucun beat — ajoute le premier !</div>';
      return;
    }

    wrap.innerHTML = `
      <table class="beats-table">
        <thead>
          <tr>
            <th>Beat</th>
            <th>Genre</th>
            <th>BPM</th>
            <th>Prix</th>
            <th>Lien Stripe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${beats.map(b => `
            <tr>
              <td>
                <div class="beat-row-title">${b.title}</div>
                <div class="beat-row-sub">${new Date(b.created_at).toLocaleDateString('fr-FR')}</div>
              </td>
              <td><span class="tag">${b.genre}</span></td>
              <td><span class="tag">${b.bpm}</span></td>
              <td class="price-cell">${b.price}€</td>
              <td class="link-cell">
                <a href="${b.stripe_payment_link}" target="_blank">Voir le lien →</a>
              </td>
              <td>
                <button class="delete-btn" onclick="deleteBeat('${b.id}', '${b.title}')">
                  Supprimer
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } catch (e) {
    wrap.innerHTML = '<div class="empty-state">Erreur de chargement</div>';
  }
}

// ── DELETE ──
async function deleteBeat(id, title) {
  if (!confirm(`Supprimer "${title}" ? Cette action est irréversible.`)) return;
  try {
    const res = await fetch(`${API}/delete-beat`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id })
    });
    if (!res.ok) throw new Error();
    loadBeats();
  } catch {
    alert('Erreur lors de la suppression');
  }
}

// ── FEEDBACK ──
function showFeedback(msg, type) {
  const el = document.getElementById('feedback');
  el.textContent = msg;
  el.className = `feedback ${type}`;
}
</script>
</body>
</html>
