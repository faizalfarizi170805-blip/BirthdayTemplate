# 🎉 Birthday Template

Template website ucapan ulang tahun interaktif berbasis Vue.js. Dibuat sebagai kado digital personal — cocok dipakai untuk mengucapkan selamat ulang tahun ke orang terdekat dengan cara yang lebih berkesan dibanding ucapan biasa.

## 📌 Tentang Proyek

Website ini mengajak pengunjung (si penerima ucapan) menyusuri sebuah "perjalanan" berisi kenangan, alasan-alasan untuk bersyukur, dan pesan personal, dilengkapi animasi, musik, dan confetti agar terasa lebih hangat dan spesial.

Alur halaman:

1. **Home** — Halaman pembuka dengan ucapan selamat ulang tahun, foto, dan efek confetti saat halaman dibuka.
2. **Memories** — Galeri momen/kenangan dalam bentuk timeline kartu bergambar, muncul dengan animasi scroll-reveal.
3. **Reasons** — Daftar alasan-alasan mengapa sosok tersebut spesial, ditampilkan dalam bentuk kartu grid.
4. **Messages** — Surat pesan personal dengan efek animasi mengetik (typewriter effect).

## ✨ Fitur

- 🎊 Animasi confetti saat halaman pertama dibuka
- 🎵 Musik latar yang otomatis diputar saat interaksi pertama
- 🖼️ Galeri foto kenangan dengan animasi scroll-reveal (Intersection Observer)
- 💌 Efek mengetik (typewriter) untuk pesan personal
- 📱 Desain responsif, nyaman diakses lewat HP
- 🎨 Tema warna hangat (coklat, gold, pink) yang mudah dikustomisasi

## 🛠️ Tech Stack

- **Vue 3** (Composition API — `<script setup>`)
- **Vue Router** — navigasi antar halaman
- **Tailwind CSS** — styling
- **canvas-confetti** — efek confetti
- **Intersection Observer API** — animasi saat elemen masuk ke layar

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run serve

# Build untuk production
npm run build
```

## 🎨 Cara Kustomisasi

Template ini dibuat generic supaya gampang dipakai ulang untuk siapa saja:

- **Ganti foto** — tambahkan file gambar ke folder `src/assets/` lalu isi field `image: require("@/assets/nama-file.png")` di masing-masing data array (`DaftarMemories`, dst).
- **Ganti teks** — edit langsung array `DaftarMemories`, `DaftarReasons`, dan `messages` di masing-masing halaman sesuai cerita dan pesan yang ingin disampaikan.
- **Ganti nama** — cari placeholder `[Name]` dan `[Your Name]` di setiap halaman.
- **Ganti warna** — sesuaikan kelas warna Tailwind (`bg-[#412C19]`, `bg-[#D4AF37]`, dll) sesuai tema yang diinginkan.

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan personal.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
