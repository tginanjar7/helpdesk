/**
 * data.jsx
 * -------------------------------------------------------------------
 * Seluruh data contoh (konten, statistik, tabel pengaduan, FAQ, dll.)
 * dikumpulkan di satu berkas agar mudah diganti dengan API sungguhan.
 * -------------------------------------------------------------------
 */

export const identitas = {
  nama: 'LAPOR-DAERAH',
  subnama: 'Aspirasi & Pengaduan Rakyat',
  tagline: 'Layanan Aspirasi dan Pengaduan Online Rakyat Daerah',
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1UcoyJMl1SF86eu29kk-xGJdk5S1V8UPE1u-pkRh4oca9TDJX4MlYfAgrB9Neg5Iy5tWmcFWeVKfMOMBVw8FE7c93bd9H40vSFyY_bo0iFYbjix0fNgxO-73jzbm5wXVSWV1jElSZLPFj3S6SEgb2rrOyQbvMAaX01FWWbE0l83caFVIicOue8t9aM8h5X_dSdAqLdlIOj8WTwlHhSo7V9sfVR_uZw5lyoV9216bGyyhWvoG1UW8oBhzW6i',
  avatarPetugas:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDtH3tztfOEx39L738V4Oy7E3d5otRzORbDxvtsT_NP5LfxM4QObQeWuyOCOUjvoiSHvnx-nj-EEZqkOaJCPe69bYSstId8dXS0hULn7L8F51DsqxwKUyCu6_4qWE6ARjg5EJ-TSlDXjSYgU2YL7qGPmEDxRvJVxlhMRM9NnNSZLhazzRWwEIkaAONJ_yks0EUXZEzGfLNz6mL7Ue7ZzRf4YoNfa4vM9F9n-KyPF_8ol2zCFWTIP6h8Rg',
}

/* ----------------------------- Navigasi ----------------------------- */

export const navPublic = [
  { label: 'Beranda', path: 'beranda', href: '#hero' },
  { label: 'Lacak Pengaduan', path: 'lacak-pengaduan', href: '#lacak-aduan' },
  { label: 'Laporan Terbuka', path: 'laporan-terbuka', href: '#laporan-terbuka' },
  { label: 'Alur & FAQ', path: 'alur-dan-faq', href: '#alur-faq' },
  { label: 'Hubungi Kami', path: 'hubungi-kami', href: '#kontak' },
]

export const navAdmin = [
  { label: 'Ringkasan & Metrik', icon: 'dashboard', path: 'ringkasan-metrik' },
  { label: 'Daftar Pengaduan', icon: 'inbox', path: 'daftar-pengaduan', badge: '28' },
  { label: 'Verifikasi Tiket', icon: 'fact_check', path: 'verifikasi-tiket' },
  { label: 'Disposisi Instansi', icon: 'assignment_return', path: 'disposisi-instansi' },
  { label: 'Master Kategori & OPD', icon: 'account_tree', path: 'master-kategori-opd' },
  { label: 'Rekapitulasi & Ekspor', icon: 'analytics', path: 'rekapitulasi-ekspor' },
  { label: 'Pengaturan Akun', icon: 'settings', path: 'pengaturan-akun' },
]

/* -------------------------- Statistik Publik ------------------------- */

export const statistik = {
  sinkronisasi: 'Sinkronisasi Terakhir: Hari ini, 09:15 WIB',
  metrik: [
    {
      label: 'Total Aduan Masuk',
      icon: 'inbox',
      nilai: '14.820+',
      catatan: 'Sejak awal tahun anggaran berjalan',
      kaki: { label: 'Pertumbuhan', nilai: '+12% bln ini', icon: 'trending_up' },
    },
    {
      label: 'Laporan Selesai',
      icon: 'task_alt',
      nilai: '13.940',
      nilaiTambahan: '(94.1%)',
      catatan: 'Ditindaklanjuti & diverifikasi tuntas',
      progres: 94.1,
      progresLabel: 'Target Daerah: 90%',
    },
    {
      label: 'Sedang Diproses',
      icon: 'pending_actions',
      nilai: '620',
      catatan: 'Dalam pengerjaan tim teknis OPD',
      kaki: { label: '260 dalam tahap verifikasi akhir', icon: 'sync', warna: 'text-secondary' },
    },
    {
      label: 'Rata Waktu Tanggap',
      icon: 'hourglass_bottom',
      nilai: '2.8',
      satuan: 'Hari',
      catatan: 'Standar SLA maksimal: 5 hari kerja',
      kaki: { label: '1.2 Hari lebih cepat dari standar', icon: 'check_circle', warna: 'text-primary' },
    },
    {
      label: 'Indeks Kepuasan (IKM)',
      icon: 'stars',
      nilai: '4.8',
      satuan: '/ 5.0',
      bintang: 4.5,
      kaki: 'Dari 8.420 ulasan warga terverifikasi',
    },
  ],
}

/* ---------------------------- Hero Section --------------------------- */

export const hero = {
  labelKanal: 'Kanal Pengaduan Warga Mandiri',
  labelDaerah: 'Kabupaten / Kota Ramah & Akuntabel',
  judul: 'Sampaikan Aspirasi & Keluhan Anda untuk Daerah yang Lebih Baik',
  deskripsi:
    'Portal pengaduan terpadu resmi pemerintah daerah. Suara Anda langsung diteruskan ke instansi terkait dengan transparansi pelacakan berkas, aman tanpa rasa takut, dan tuntas hingga lapangan.',
  placeholderCari: 'Masukkan Nomor Tiket (cth: TKT-2024-0892)',
  keunggulan: [
    { icon: 'speed', judul: 'Respon Cepat', detail: '< 24 Jam Verifikasi' },
    { icon: 'security', judul: '100% Rahasia', detail: 'Privasi Terlindungi' },
    { icon: 'hub', judul: '34 OPD Daerah', detail: 'Terintegrasi Langsung' },
  ],
  foto:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBMdunc03V7REnMsPDDjjp2rCWIvozxdOMuUvllLuk0w8O_L6GqOX4fIWB4W17nBUwucTMD1jrMp3OuyoRb0jJAkZvM7HHxPYpDdgBcI5NhdpY0IyDzN5ll5n9kkHTVsCK9uS97h3tCpxX5lqqqq2Vx2TlAOvdmzJ0J_-XUz2GkrvsyFjWNZdcGY5Uqqx9mKeOncNQ_iNLWZ_-kNBbLcxF-13uV4PeqFbYbO0fdx4MhnUTYDtfb4j5mgA',
  fotoBadge: 'Tindak Lapangan Nyata',
  fotoJudul: 'Perbaikan Saluran & Akses Jalan Sukamaju',
  fotoKeterangan: 'Dinas PUPR menindaklanjuti laporan warga dalam waktu 48 jam.',
  kartuMini: [
    {
      icon: 'verified_user',
      badge: 'Tersertifikasi',
      judul: 'Ombudsman',
      detail: 'Kepatuhan Standar Pelayanan Publik Tinggi',
      tone: 'lowest',
    },
    {
      icon: 'support_agent',
      badge: 'Aktif 24/7',
      judul: 'Layanan 112',
      detail: 'Panggilan Kedaruratan Bebas Pulsa Daerah',
      tone: 'high',
    },
  ],
}

/* ------------------ Data Formulir Pengaduan (Publik) ------------------ */

export const jenisLaporan = [
  { label: 'Pengaduan Masalah', value: 'Pengaduan', icon: 'report_problem' },
  { label: 'Aspirasi & Gagasan', value: 'Aspirasi', icon: 'lightbulb' },
  { label: 'Permintaan Informasi', value: 'Permintaan Informasi', icon: 'contact_support' },
]

export const kategoriLayanan = [
  {
    nilai: 'Infrastruktur Jalan & Jembatan',
    label: 'Infrastruktur Jalan, Jembatan & Saluran Air',
    opd: 'PUPR',
  },
  {
    nilai: 'Pelayanan Kependudukan/Dukcapil',
    label: 'Pelayanan Kependudukan (KTP-el, KK, Akta - Dukcapil)',
    opd: 'Disdukcapil',
  },
  {
    nilai: 'Kebersihan & Lingkungan Hidup',
    label: 'Kebersihan, Sampah Liar & Lingkungan Hidup (DLH)',
    opd: 'DLH',
  },
  {
    nilai: 'Kesehatan & Puskesmas',
    label: 'Kesehatan, RSUD & Puskesmas',
    opd: 'Kesehatan',
  },
  {
    nilai: 'Ketertiban Umum',
    label: 'Ketertiban Umum & Ketenteraman (Satpol PP)',
    opd: 'Satpol PP',
  },
  {
    nilai: 'Bantuan Sosial',
    label: 'Bantuan Sosial, PKH & Kesejahteraan Rakyat',
    opd: 'Sosial',
  },
]

/* --------------------- Daftar OPDunitas Tujuan ---------------------- */

export const daftarOpd = [
  {
    kode: 'PUPR',
    nama: 'Dinas Pekerjaan Umum dan Penataan Ruang (PUPR)',
    bidang: 'Bidang Bina Marga',
  },
  {
    kode: 'Dishub',
    nama: 'Dinas Perhubungan (Dishub)',
    bidang: 'Bidang Sarana dan Prasarana Lalu Lintas',
  },
  {
    kode: 'DLH',
    nama: 'Dinas Lingkungan Hidup (DLH)',
    bidang: 'Unit Kebersihan Pasar',
  },
  {
    kode: 'Satpol PP',
    nama: 'Satuan Polisi Pamong Praja (Satpol PP)',
    bidang: 'Seksi Ketertiban dan Ketenteraman',
  },
  {
    kode: 'Kesehatan',
    nama: 'Dinas Kesehatan',
    bidang: 'Bidang Pelayanan Kesehatan',
  },
  {
    kode: 'Disdukcapil',
    nama: 'Dinas Kependudukan dan Catatan Sipil (Disdukcapil)',
    bidang: 'Bidang Pelayanan Administrasi Penduduk',
  },
  {
    kode: 'Hukum',
    nama: 'Bagian Hukum Setda',
    bidang: 'Bidang Mediasi Sengketa',
  },
]


/* --------------------- Contoh Tiket untuk Pelacakan -------------------- */

export const contohTiket = {
  kode: 'TKT-2024-0892',
  status: 'SELESAI DITANGANI',
  judul: 'Perbaikan Pipa Distribusi PDAM Tirta Mulia yang Bocor',
  lokasi: 'Jl. Merdeka Barat No. 12, Kel. Kencana',
  waktu: 'Dilaporkan: 18 Mei 2024, 08:30 WIB',
  opd: 'PDAM Tirta Mulia',
  penanggungJawab: 'Ir. Hendra Gunawan',
  tanggapan:
    'Terima kasih atas laporan warga. Tim teknis distrik wilayah barat telah memperbaiki kebocoran sambungan pipa 6 inch di depan Toko Rejeki Jl. Merdeka Barat. Pasokan debit air normal kembali per tanggal 20 Mei 2024 pukul 15.30 WIB. Mohon maaf atas ketidaknyamanan sementara selama proses galian.',
  linimasa: [
    {
      tahap: 'TAHAP 1: BARU',
      judul: 'Laporan Masuk',
      detail:
        'Tiket diterima dan terdaftar otomatis dalam antrean sistem.',
      waktu: '18 Mei 2024, 08:30 WIB',
      selesai: true,
    },
    {
      tahap: 'TAHAP 2: VERIFIKASI',
      judul: 'Diverifikasi Admin',
      detail: 'Data dicek tim inspeksi dan diteruskan ke PDAM Tirta Mulia.',
      waktu: '18 Mei 2024, 11:15 WIB',
      selesai: true,
    },
    {
      tahap: 'TAHAP 3: PROSES',
      judul: 'Tindak Lanjut Lapangan',
      detail: 'Regu darurat teknis PDAM mengganti segel katup pipa utama.',
      waktu: '19 Mei 2024, 14:00 WIB',
      selesai: true,
    },
    {
      tahap: 'TAHAP 4: SELESAI',
      judul: 'Penyelesaian Berkas',
      detail: 'Aliran air kembali normal, berita acara ditandatangani RT.',
      waktu: '20 Mei 2024, 16:45 WIB',
      selesai: true,
    },
  ],
  foto: [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlrRGfmwOSp_-a8QuZrvDkWVKsAq-T61CKVzS05jrMWHjrQYK2TW0MjgV_OB432ZOBpNpPd8QupJ_QzUEgds9q7nfVZlw80MZUOOkE8ZYa-Hl3M2NWxYHjIc3pDbEKq37YiXW9PlHsYmBBAq5b5QtDL7TFtt5p7PivgidHxstI94UtQ6YzcG6PsXY3XPTyw5zisKLtXOmBQRza4xNrg7jl9cRPnxLMe2v8w_svYNIefvoI56AISR5p4Q',
      label: 'Lihat Foto',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaR-wANDsHggRiqejOHTanvP3PHVWrr5QlLuki_A494MoZh3w5BcbThlYMIWFD9UFs22h1sKNDoXs7Dda2cfQQthkdwwmC96_fhiuv0GwamTm4tQ8Uqat6Jj1x1m8EdZuyWfCnAuNJ0QKv81FxrY-KEsjcrhxAfGmR_5HRfCRz6vDH9xvmEUSbYKhIzLfQutz7MqGGtVgx5Gcm05LmgKfTRcLISLAov8mjJnSbLNaYWu0_9CzKWbc6gQ',
      label: 'Selesai Aspal',
    },
  ],
}

export const labelRating = [
  '',
  '1.0 / 5.0 (Sangat Tidak Puas)',
  '2.0 / 5.0 (Kurang Puas)',
  '3.0 / 5.0 (Cukup)',
  '4.0 / 5.0 (Puas)',
  '5.0 / 5.0 (Sangat Puas)',
]

/* ------------------- Daftar Pengaduan Terbuka (Publik) --------------- */

export const laporanTerbuka = [
  {
    kode: 'TKT-2024-0912',
    status: 'SELESAI',
    tone: 'selesai',
    judul: 'Jalan Berlubang Parah di Depan SDN Sukajaya 01',
    ringkasan:
      'Lubang sedalam 15cm membahayakan murid sekolah dan pengendara motor terutama saat malam dan hujan lebat. Mohon segera dilakukan pengaspalan darurat.',
    kategori: ['Infrastruktur', 'Kec. Sukajaya'],
    instansi: 'Dinas PUPR',
    rating: 5,
    peninjau: 'Bpk. Ahmad S.',
    ulasan:
      'Terima kasih respon sangat cepat, aspal sudah diperbaiki dalam 3 hari! Anak sekolah lebih aman melintas.',
  },
  {
    kode: 'TKT-2024-0905',
    status: 'DIPROSES',
    tone: 'diproses',
    judul: 'Penumpukan Sampah Liar di Saluran Irigasi Pasar Pagi',
    ringkasan:
      'Sampah plastik dan limbah sayur menyumbat gorong-gorong irigasi persawahan warga. Menimbulkan bau menyengat serta memicu genangan air saat hujan.',
    kategori: ['Kebersihan Lingkungan', 'Kec. Wetan'],
    instansi: 'Dinas Lingkungan Hidup (DLH)',
    progres: {
      judul: 'Armada Truk Pengangkut Sedang Diterjunkan',
      detail:
        'Progres lapangan: 60% sampah di pintu air telah diangkat manual, dilanjutkan pembersihan total saluran air dan penjagaan area sekitar.',
    },
  },
  {
    kode: 'TKT-2024-0899',
    status: 'SELESAI',
    tone: 'selesai',
    judul: 'Antrean Perekaman KTP-el Mengular Tanpa Nomor Urut',
    ringkasan:
      'Mesin cetak antrean digital di kantor pelayanan kecamatan mati mendadak menyebabkan kericuhan antrean lansia dan ibu hamil sejak pukul 07.00.',
    kategori: ['Kependudukan (Dukcapil)', 'Kec. Bintang'],
    instansi: 'Disdukcapil & Bag. Organisasi',
    progres: {
      judul: 'Tindakan Selesai dalam 4 Jam',
      detail:
        'Mesin antrean diganti unit cadangan, dibuka loket prioritas khusus kelompok rentan dan lansia.',
    },
  },
]



/* --------------------------- Alur Pengaduan -------------------------- */

export const alurPengaduan = [
  {
    judul: 'Tulis Laporan',
    detail:
      'Isi formulir pengaduan secara jelas, sertakan lokasi presisi dan bukti foto/dokumen pendukung.',
  },
  {
    judul: 'Verifikasi Petugas',
    detail:
      'Tim inspeksi memvalidasi kelayakan berkas maksimal dalam 1x24 jam kerja sebelum diteruskan.',
  },
  {
    judul: 'Tindak Lanjut OPD',
    detail:
      'Dinas terkait melakukan pengecekan lapangan dan tindakan solutif sesuai Standar Pelayanan Minimal.',
  },
  {
    judul: 'Penyelesaian Berkas',
    detail:
      'Hasil pengerjaan dikonfirmasi, status berganti Selesai, dan bukti PDF resmi siap diunduh.',
  },
  {
    judul: 'Beri Ulasan Warga',
    detail:
      'Pelapor memberikan rating kepuasan (1-5 bintang) untuk mengukur mutu pelayanan aparatur daerah.',
  },
]

/* -------------------------------- FAQ -------------------------------- */

export const faq = [
  {
    tanya: 'Apakah identitas saya benar-benar aman jika melaporkan pungutan liar atau oknum?',
    jawab:
      'Sangat aman. Sistem LAPOR-DAERAH menyediakan fitur Lapor Anonim dan Laporan Rahasia. Data NIK dan kontak Anda hanya digunakan oleh sistem verifikasi keamanan pusat untuk mencegah spam dan terenkripsi secara otomatis. Oknum atau pihak terlapor tidak memiliki akses sama sekali ke identitas pribadi Anda sesuai UU Perlindungan Data Pribadi (UU PDP).',
  },
  {
    tanya: 'Berapa lama estimasi penanganan aduan hingga selesai?',
    jawab:
      'Standar Pelayanan Minimal (SLA) daerah menetapkan batas waktu maksimal 1x24 jam untuk verifikasi awal. Untuk penanganan teknis ringan (seperti sampah liar atau lampu padam), estimasi penyelesaian adalah 1-3 hari kerja. Sedangkan untuk pekerjaan fisik berskala menengah (jalan berlubang besar atau jembatan), dinas akan memberikan jadwal tindak lanjut pengerjaan fisik selambat-lambatnya 5-7 hari kerja.',
  },
  {
    tanya: 'Dokumen apa saja yang wajib dilampirkan agar laporan cepat diproses?',
    jawab:
      'Anda disarankan melampirkan minimal satu foto jelas atau video singkat kondisi lapangan beserta patokan lokasi yang mudah dikenali (seperti nama toko terdekat, kilometer jalan, atau nomor rumah). Jika laporan menyangkut pelayanan administrasi, lampirkan tangkapan layar berkas atau nomor resi pengurusan.',
  },
  {
    tanya:
      'Bagaimana jika laporan saya dinyatakan selesai namun di lapangan belum tuntas?',
    jawab:
      'Pada halaman pelacakan tiket aduan Anda, terdapat opsi "Kirim Tanggapan / Sanggahan" yang aktif selama 3 hari setelah status dinyatakan selesai. Jika hasil di lapangan belum memuaskan, Anda dapat mengajukan sanggahan disertai foto terbaru. Laporan akan otomatis dinaikkan derajat urgensinya ke Inspektorat Daerah untuk audit lapangan.',
  },
]

/* ------------------------------ Footer ------------------------------- */

export const footer = {
  deskripsi:
    'Kanal aspirasi dan pengaduan resmi pemerintah daerah untuk mewujudkan pelayanan publik yang partisipatif, transparan, dan akuntabel.',
  kontak: [
    {
      icon: 'location_on',
      teks: 'Gedung Pelayanan Publik Lt. 2, Jalan Pemuda Mandiri No. 45',
    },
    { icon: 'call', teks: '(021) 555-0199 / 112 (Bebas Pulsa)' },
    { icon: 'mail', teks: 'pengaduan@lapor-daerah.go.id' },
  ],
  kanal: [
    { label: 'Beranda Pelayanan', href: '#hero' },
    { label: 'Pelacakan Status Tiket', href: '#lacak-aduan' },
    { label: 'Katalog Laporan Publik', href: '#laporan-terbuka' },
    { label: 'Pedoman Pengaduan & FAQ', href: '#alur-faq' },
    { label: 'Portal Operator OPD', href: '/manajemen-pengaduan' },
  ],
  darurat: {
    judul: 'Call Center 112',
    detail:
      'Hubungi nomor darurat terpadu daerah untuk laporan kedaruratan medis, damkar, dan bencana 24 Jam.',
  },
  copyright:
    '(c) 2025 Pemerintah Daerah. Hak Cipta Dilindungi Undang-Undang. Sesuai UU No. 25 Tahun 2009 tentang Pelayanan Publik.',
  tautanLegal: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Aksesibilitas'],
}
