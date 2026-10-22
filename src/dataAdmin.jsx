/**
 * dataAdmin.jsx
 * -------------------------------------------------------------------
 * Data khusus halaman "Manajemen Pengaduan" (panel operator/OPD).
 * -------------------------------------------------------------------
 */

export const adminProfil = {
  nama: 'Dra. Siti Rahmawati, M.Si',
  jabatan: 'Admin Utama - Diskominfo',
  unit: 'Diskominfo',
  kontak: 'Ext. 204 / Diskominfo',
}

export const adminStatistik = [
  {
    key: 'total',
    label: 'Total Pengaduan',
    icon: 'inbox',
    nilai: '14.820',
    adorn: 'text-primary',
    lencana: { ikon: 'trending_up', nilai: '+8.4%', teks: 'vs bulan lalu' },
  },
  {
    key: 'baru',
    label: 'Laporan Baru',
    icon: 'mark_chat_unread',
    nilai: '48',
    satuan: 'Tiket',
    adorn: 'text-tertiary',
    lencana: { ikon: null, nilai: 'Perlu Verifikasi Segera', tone: 'alert' },
  },
  {
    key: 'diproses',
    label: 'Diproses Dinas / OPD',
    icon: 'pending_actions',
    nilai: '620',
    satuan: 'Tiket',
    adorn: 'text-secondary',
    lencana: { ikon: null, nilai: 'Tahap Pengerjaan', tone: 'netral' },
  },
  {
    key: 'selesai',
    label: 'Selesai Ditangani',
    icon: 'task_alt',
    nilai: '13.940',
    adorn: 'text-primary',
    lencana: { ikon: 'check_circle', nilai: '94.1% Tingkat Solusi' },
  },
  {
    key: 'rating',
    label: 'Kepuasan Warga',
    icon: 'stars',
    nilai: '4.8',
    satuan: '/ 5.0',
    adorn: 'text-primary',
    bintang: 4.5,
    lencana: { ikon: null, nilai: '8.420 ulasan', tone: 'netral' },
  },
]

export const adminFilterKategori = [
  'Infrastruktur',
  'Kependudukan',
  'Kebersihan',
  'Kesehatan',
  'Ketertiban',
  'Lainnya',
]

export const adminFilterOpd = [
  'PUPR',
  'Disdukcapil',
  'DLH',
  'Kesehatan',
  'Satpol PP',
  'Hukum',
]

export const adminFilterStatus = ['Baru', 'Diverifikasi', 'Diproses', 'Selesai', 'Ditolak']


export const daftarPengaduan = [
  {
    kode: 'TKT-2024-0985',
    waktuRelatif: '10 Menit lalu',
    tanggal: '14 Mei 2024 - 08:35 WIB',
    nama: 'Bambang Haryanto',
    nik: '327318••••••0004',
    telepon: '0812-3341-••••',
    kategori: 'Infrastruktur',
    isi: 'Jalan amblas sedalam 40cm pasca hujan deras membahayakan pengendara roda dua.',
    lokasi: 'Jl. Ahmad Yani Km 5, RT 02/04, Sukamaju',
    instansi: 'Dinas PUPR',
    bidang: 'Bid. Bina Marga',
    bukti: { tipe: 'JPG', icon: 'photo_camera' },
    status: 'Baru',
    rating: null,
    ulasan: null,
    alasan: null,
  },
  {
    kode: 'TKT-2024-0982',
    waktuRelatif: '2 Jam lalu',
    tanggal: '14 Mei 2024 - 06:12 WIB',
    nama: 'Nurul Hidayati',
    nik: '327305••••••0012',
    telepon: '0857-1980-••••',
    kategori: 'Kependudukan',
    isi: 'Pelayanan rekam KTP-el online tertolak sistem padahal data Dukcapil valid terdaftar.',
    lokasi: 'Kantor Kec. Mentari Barat',
    instansi: 'Disdukcapil',
    bidang: 'Pelayanan Adminduk',
    bukti: { tipe: 'PDF', icon: 'picture_as_pdf' },
    status: 'Diverifikasi',
    rating: null,
    ulasan: null,
    alasan: null,
  },
  {
    kode: 'TKT-2024-0978',
    waktuRelatif: '5 Jam lalu',
    tanggal: '13 Mei 2024 - 21:40 WIB',
    nama: 'Eko Prasetyo',
    nik: '327322••••••0009',
    telepon: '0813-8822-••••',
    kategori: 'Kebersihan',
    isi: 'Tumpukan sampah liar menutupi saluran drainase bau menyengat mengganggu toko sekitar.',
    lokasi: 'Pasar Induk Blok C-7',
    instansi: 'Dinas Lingkungan Hidup',
    bidang: 'Unit Kebersihan Pasar',
    bukti: { tipe: 'JPG', icon: 'photo_camera' },
    status: 'Diproses',
    rating: null,
    ulasan: null,
    alasan: null,
  },
  {
    kode: 'TKT-2024-0960',
    waktuRelatif: '1 Hari lalu',
    tanggal: '12 Mei 2024 - 14:15 WIB',
    nama: 'Siti Fatimah',
    nik: '327311••••••0021',
    telepon: '0819-0123-••••',
    kategori: 'Kesehatan',
    isi: 'Stok vaksin booster dan pelayanan rujukan puskesmas lambat.',
    lokasi: 'Puskesmas Kel. Mawar Indah',
    instansi: 'Dinas Kesehatan',
    bidang: 'Bidang Pelayanan Kesehatan',
    bukti: { tipe: 'JPG', icon: 'photo_camera' },
    status: 'Selesai',
    rating: 5,
    ulasan: 'Ditindaklanjuti cepat, terima kasih dinas terkait!',
    alasan: null,
  },
  {
    kode: 'TKT-2024-0954',
    waktuRelatif: '2 Hari lalu',
    tanggal: '11 Mei 2024 - 10:20 WIB',
    nama: 'Hendra Kusuma',
    nik: '327316••••••0015',
    telepon: '0821-7788-••••',
    kategori: 'Ketertiban',
    isi: 'Parkir liar trotoar mengganggu akses pejalan kaki & tunanetra di zebra cross.',
    lokasi: 'Depan RSUD Daerah',
    instansi: 'Satpol PP',
    bidang: 'Seksi Trantib',
    bukti: { tipe: 'JPG', icon: 'photo_camera' },
    status: 'Selesai',
    rating: 4,
    ulasan: 'Sudah ditertibkan Satpol PP hari berikutnya',
    alasan: null,
  },
  {
    kode: 'TKT-2024-0941',
    waktuRelatif: '3 Hari lalu',
    tanggal: '09 Mei 2024 - 09:05 WIB',
    nama: 'Anonim Warga',
    nik: 'Identitas Dirahasiakan',
    telepon: 'via Web Portal',
    kategori: 'Lainnya',
    isi: 'Isu sengketa tanah pribadi antar tetangga tanpa unsur publik.',
    lokasi: 'Kompleks Griya Asri',
    instansi: 'Bagian Hukum Setda',
    bidang: 'Mediasi Sengketa',
    bukti: { tipe: 'PDF', icon: 'description' },
    status: 'Ditolak',
    rating: null,
    ulasan: null,
    alasan: 'Bukan ranah pelayanan pemerintah daerah',
  },
]

export const statusGaya = {
  Baru: { chip: 'bg-error-container text-tertiary', titik: 'bg-tertiary' },
  Diverifikasi: { chip: 'bg-secondary-container text-on-secondary-container', titik: 'bg-secondary' },
  Diproses: { chip: 'bg-surface-container-highest text-primary', titik: 'bg-primary' },
  Selesai: { chip: 'bg-secondary-container text-on-secondary-container', titik: 'bg-primary' },
  Ditolak: { chip: 'bg-error-container text-tertiary', titik: 'bg-tertiary' },
}

/* --------------------- Beban Kerja OPD (Bulan Ini) --------------------- */

export const bebanKerjaOpd = [
  { nama: 'Dinas PUPR', tiket: 420, persen: 32, warna: 'bg-primary' },
  { nama: 'Dinas Lingkungan Hidup', tiket: 315, persen: 24, warna: 'bg-secondary' },
  { nama: 'Satpol PP', tiket: 260, persen: 19, warna: 'bg-surface-tint' },
  { nama: 'Dinas Kesehatan', tiket: 185, persen: 14, warna: 'bg-primary-fixed-dim' },
  { nama: 'Disdukcapil & Lainnya', tiket: 142, persen: 11, warna: 'bg-surface-variant' },
]

/* ------------------------ Opsi Disposisi Tiket ------------------------ */

export const opsiStatusBaru = [
  { value: 'Diverifikasi', label: 'Valid - Diverifikasi & Teruskan ke Dinas' },
  { value: 'Diproses', label: 'Langsung Tindak Lanjut Lapangan' },
  { value: 'Ditolak', label: 'Tolak Pengaduan (Tidak Memenuhi Syarat)' },
]

export const daftarOpdTujuan = [
  'Dinas Pekerjaan Umum & Penataan Ruang (PUPR)',
  'Dinas Perhubungan (Dishub)',
  'Dinas Lingkungan Hidup (DLH)',
  'Satuan Polisi Pamong Praja (Satpol PP)',
  'Dinas Kesehatan',
]

