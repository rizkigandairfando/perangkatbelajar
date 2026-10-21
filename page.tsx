'use client';

import { useState } from 'react';

const features = [
  { icon: '📚', title: 'Materi Pembelajaran', text: 'Susun materi dan bagikan kepada siswa dalam satu tempat.' },
  { icon: '🤖', title: 'Asisten AI', text: 'Bantu guru menyiapkan ide pembelajaran dan menjawab pertanyaan.' },
  { icon: '📝', title: 'Tugas & LKPD', text: 'Kelola tugas, latihan, dan lembar kerja siswa dengan lebih rapi.' },
  { icon: '📊', title: 'Pantau Progres', text: 'Lihat ringkasan aktivitas belajar dan perkembangan siswa.' },
];

export default function Home() {
  const [role, setRole] = useState<'siswa' | 'guru'>('siswa');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      setNotice('Isi nama pengguna dan kata sandi terlebih dahulu.');
      return;
    }
    setNotice(`Tampilan demo ${role} siap. Login akun sungguhan perlu dihubungkan ke sistem autentikasi.`);
  }

  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#beranda"><span className="brand-icon">E</span> EduSmart<span className="ai">AI</span></a>
        <div className="nav-links"><a href="#fitur">Fitur</a><a href="#masuk">Masuk</a></div>
      </nav>

      <section className="hero container" id="beranda">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> BELAJAR LEBIH CERDAS DENGAN AI</div>
          <h1>Belajar lebih mudah.<br /><span>Mengajar lebih cerdas.</span></h1>
          <p>Ruang belajar digital untuk membantu guru dan siswa mengelola materi, tugas, serta aktivitas pembelajaran dalam satu platform.</p>
          <div className="hero-actions"><a className="button primary" href="#masuk">Mulai sekarang <span>→</span></a><a className="text-link" href="#fitur">Jelajahi fitur ↓</a></div>
          <div className="trust"><span className="avatars">👩🏻‍🏫 👨🏽‍🎓 👩🏼‍🎓</span><span>Untuk guru dan siswa</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi pembelajaran digital">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="study-card"><div className="study-top"><span className="mini-logo">E</span><span className="pill">RUANG BELAJAR</span></div><div className="study-title">Halo, pembelajar! <span>✦</span></div><div className="study-sub">Apa yang ingin kamu pelajari hari ini?</div><div className="progress-label"><span>Progres belajar</span><b>75%</b></div><div className="progress"><span /></div><div className="study-bottom"><div className="book-icon">📖</div><div><b>Akuntansi Dasar</b><small>Materi pembelajaran</small></div><span className="arrow">↗</span></div></div>
          <div className="floating-note note-ai"><span>✦</span><div><b>AI Assistant</b><small>Siap membantu belajar</small></div><i /></div>
          <div className="floating-note note-score"><span>✓</span><div><b>Belajar terarah</b><small>Langkah demi langkah</small></div></div>
        </div>
      </section>

      <section className="features-section" id="fitur"><div className="container"><div className="section-heading"><div className="eyebrow centered">FITUR UTAMA</div><h2>Semua kebutuhan belajar,<br /><span>dalam satu ruang.</span></h2><p>Mulai dari menyiapkan materi sampai memantau kegiatan belajar.</p></div><div className="feature-grid">{features.map((f) => <article className="feature-card" key={f.title}><div className="feature-icon">{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p><a href="#masuk">Pelajari <span>→</span></a></article>)}</div></div></section>

      <section className="login-section" id="masuk"><div className="container login-layout"><div className="login-copy"><div className="eyebrow">MULAI PERJALANANMU</div><h2>Satu akun untuk<br /><span>pengalaman belajar</span><br />yang lebih baik.</h2><p>Pilih peran untuk melihat contoh tampilan awal EduSmart. Formulir ini merupakan demo antarmuka, belum memverifikasi akun.</p><div className="login-points"><div>✓ <span>Antarmuka sederhana</span></div><div>✓ <span>Dirancang untuk pembelajaran</span></div><div>✓ <span>Dapat dikembangkan sesuai kebutuhan</span></div></div></div>
        <form className="login-card" onSubmit={handleLogin}><div className="login-card-head"><div className="mini-logo">E</div><div><h3>Selamat datang!</h3><p>Masuk ke ruang EduSmart kamu</p></div></div><label className="field-label">Masuk sebagai</label><div className="role-tabs"><button type="button" className={role === 'siswa' ? 'active' : ''} onClick={() => { setRole('siswa'); setNotice(''); }}>🎓 Siswa</button><button type="button" className={role === 'guru' ? 'active' : ''} onClick={() => { setRole('guru'); setNotice(''); }}>👩‍🏫 Guru</button></div><label className="field-label" htmlFor="username">Nama pengguna</label><input id="username" value={name} onChange={e => setName(e.target.value)} placeholder="Masukkan nama pengguna" autoComplete="username" /><label className="field-label" htmlFor="password">Kata sandi</label><input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Masukkan kata sandi" autoComplete="current-password" /><button className="button primary login-button" type="submit">Masuk sebagai {role === 'siswa' ? 'Siswa' : 'Guru'} <span>→</span></button>{notice && <div className="notice" role="status">{notice}</div>}<p className="demo-note">Demo tampilan • Belum menggunakan autentikasi sungguhan</p></form>
      </div></section>
      <footer><div className="container footer-inner"><a className="brand" href="#beranda"><span className="brand-icon">E</span> EduSmart<span className="ai">AI</span></a><span>© 2026 EduSmart AI. Platform pembelajaran digital.</span></div></footer>
    </main>
  );
}
