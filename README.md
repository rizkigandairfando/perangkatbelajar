# EduSmart AI — versi sederhana

Landing page EduSmart AI berbasis Next.js App Router. Struktur sengaja dibuat ringkas agar mudah diunggah ke GitHub dan dideploy ke Vercel.

## Struktur

```text
edusmart-simple/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Jalankan secara lokal

Gunakan Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Deploy ke GitHub dan Vercel

1. Ekstrak ZIP ini.
2. Unggah **isi folder** ke root repository GitHub (folder `app` harus sejajar dengan `package.json`). Jangan unggah folder pembungkus yang membuat `app` berada satu tingkat terlalu dalam.
3. Commit perubahan.
4. Impor repository itu di Vercel atau tekan Redeploy.
5. Framework preset: Next.js. Root Directory: `./` (root repository).

## Batasan versi ini

Halaman dan pemilihan peran merupakan demo antarmuka. Form login belum memverifikasi akun, menyimpan kata sandi, atau menghubungkan siswa/guru ke database. Integrasi Supabase dan AI belum aktif; variabel di `.env.example` hanya contoh. Jangan gunakan kata sandi asli pada demo ini. Fitur autentikasi, chat AI, kelas, tugas, dan database perlu ditambahkan dan diuji sebelum digunakan sungguhan.
