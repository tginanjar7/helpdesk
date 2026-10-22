/**
 * dataAdminExtra.jsx
 * -------------------------------------------------------------------
 * Data pendukung halaman "Manajemen Pengaduan": template tanggapan,
 * beban kerja OPD, target SLA, dan riwayat aktivitas operator.
 * -------------------------------------------------------------------
 */

/* ------------------- Template Tanggapan Cepat Admin ------------------- */

export const templateRespons = [
  {
    id: 'terima-kasih',
    label: 'Terima Kasih dan Proses',
    isi: 'Halo Bapak/Ibu, laporan Anda dengan nomor tiket {KODE} telah kami terima dan diteruskan ke tim teknis {INSTANSI}. Kami akan memperbarui informasi terbaru secara berkala.',
  },
  {
    id: 'verifikasi-lapangan',
    label: 'Dalam Verifikasi Lapangan',
    isi: 'Terima kasih atas laporan Anda. Tim inspeksi sedang melakukan verifikasi lapangan atas laporan dengan nomor tiket {KODE}. Mohon kesabaran, proses verifikasi maksimal 1x24 jam kerja.',
  },
  {
    id: 'selesai',
    label: 'Penyelesaian Tiket',
    isi: 'Laporan Anda dengan nomor tiket {KODE} telah selesai ditangani oleh {INSTANSI}. Appointments have been scheduled with the local unit. Silakan kembali melapor bila ada kendala serupa.',
  },
  {
    id: 'ditolak',
    label: 'Penolakan Pengaduan',
    isi: 'Terima kasih atas laporan Anda dengan nomor tiket {KODE}. Berdasarkan hasil verifikasi, laporan ini tidak dapat diproses karena di luar ranah pelayanan pemerintah daerah.',
  },
  {
    id: 'mohon-tunggu',
    label: 'Menunggu Peninjauan Lapangan',
    isi: 'Laporan Anda dengan nomor tiket {KODE} telah kami terima dan sedang menunggu jadwal peninjauan lapangan oleh {INSTANSI}. Mohon kesabaran, kami akan memberi tahu progresnya.',
  },
]

/* -------------------------- Riwayat Aktivitas -------------------------- */

export const riwayatAktivitas = [
  {
    waktu: 'Hari ini, 08:12',
    teks: 'Sistem menerima 4 pengaduan baru melalui Web Portal.',
    ikon: 'inbox',
    warna: 'text-primary',
  },
  {
    waktu: 'Hari ini, 07:45',
    teks: 'TKT-2024-0960 ditutup dengan rating 5.0 / 5.',
    ikon: 'star',
    warna: 'text-amber-500',
  },
  {
    waktu: 'Kemarin, 16:30',
    teks: 'TKT-2024-0978 didisposisikan ke Dinas Lingkungan Hidup.',
    ikon: 'assignment_turned_in',
    warna: 'text-secondary',
  },
  {
    waktu: 'Kemarin, 14:02',
    teks: 'Rekapitulasi mingguan dimuat ke dalam dashboard.',
    ikon: 'analytics',
    warna: 'text-primary',
  },
]

/* --------------------------- Target SLA OPD ---------------------------- */

export const targetSlaOpd = [
  { opd: 'Dinas PUPR', target: '5 Hari Kerja', progres: 88, warna: 'bg-primary' },
  { opd: 'Dinas Lingkungan Hidup', target: '3 Hari Kerja', progres: 94, warna: 'bg-secondary' },
  { opd: 'Satpol PP', target: '2 Hari Kerja', progres: 97, warna: 'bg-surface-tint' },
  { opd: 'Dinas Kesehatan', target: '5 Hari Kerja', progres: 81, warna: 'bg-primary-fixed-dim' },
]
