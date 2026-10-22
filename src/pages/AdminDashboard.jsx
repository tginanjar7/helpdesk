/**
 * AdminDashboard.jsx
 * Halaman utama panel operator "Manajemen Pengaduan". Menggabungkan
 * AdminSidebar, header sekansi, dan seluruh konten sekansi navigasi:
 * ringkasan metrik, daftar pengaduan, verifikasi, disposisi, master data,
 * rekapitulasi, dan pengaturan akun.
 */
import { useState } from 'react'
import { navAdmin, identitas } from '../data.jsx'
import { adminProfil } from '../dataAdmin.jsx'
import AdminSidebar from '../components/admin/AdminSidebar.jsx'
import AdminHeader from '../components/admin/AdminHeader.jsx'
import DashboardRingkasan from '../components/admin/DashboardRingkasan.jsx'
import DaftarPengaduan from '../components/admin/DaftarPengaduan.jsx'
import TiketDetail from '../components/admin/TiketDetail.jsx'
import Drawer from '../components/ui/Drawer.jsx'
import AdminSection from '../components/admin/AdminSection.jsx'
import Icon from '../components/Icon.jsx'

const SEKANSI_LABEL = {
  'ringkasan-metrik': 'Ringkasan & Metrik',
  'daftar-pengaduan': 'Daftar Pengaduan',
  'verifikasi-tiket': 'Verifikasi Tiket',
  'disposisi-instansi': 'Disposisi Instansi',
  'master-kategori-opd': 'Master Kategori & OPD',
  'rekapitulasi-ekspor': 'Rekapitulasi & Ekspor',
  'pengaturan-akun': 'Pengaturan Akun',
}

export default function AdminDashboard() {
  const [terbuka, setTerbuka] = useState(true)
  const [aktif, setAktif] = useState('ringkasan-metrik')
  const [detailKode, setDetailKode] = useState(null)

  const onPilihTiket = (kode) => {
    setDetailKode(kode)
  }

  const handleStatusBerubah = () => {
    setDetailKode(null)
  }

  const aktifItem = navAdmin.find((item) => item.path === aktif)

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Overlay sidebar mobile */}
      {terbuka && (
        <div
          className="fixed inset-0 z-40 bg-on-surface/20 lg:hidden"
          onClick={() => setTerbuka(false)}
          aria-hidden="true"
        />
      )}
      {/* Sidebar */}
      <AdminSidebar
        aktif={aktif}
        onPilih={setAktif}
        terbuka={terbuka}
        onTutup={() => setTerbuka(false)}
      />
      {/* Konten halaman */}
      <div className={`flex-1 transition-all duration-200 ${terbuka ? 'lg:pl-72' : ''}`}>
        {/* Topbar mobile toggle + header */}
        <div className="flex items-center justify-between p-space-md border-b border-surface-variant/30 bg-surface/80 backdrop-blur-md sticky top-0 z-30 lg:hidden">
          <button
            type="button"
            onClick={() => setTerbuka(!terbuka)}
            className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Buka navigasi"
          >
            <Icon name="menu" className="text-[24px]" />
          </button>
          <AdminHeader
            judul={aktifItem ? SEKANSI_LABEL[aktifItem.path] : 'Manajemen Pengaduan'}
            subjudul="Pusat verifikasi, disposisi dinas teknis, dan pemantauan tindak lanjut laporan warga secara terpadu."
            aktifLabel="Admin / Manajemen Pengaduan"
          />
        </div>

        <main className="p-space-lg space-y-space-lg">
          {aktif === 'ringkasan-metrik' && (
            <>
              <AdminHeader
                judul="Ringkasan &amp; Metrik"
                subjudul="Gambaran umum volume dan kinerja penanganan pengaduan warga."
                aktifLabel="Admin / Manajemen Pengaduan"
              />
              <DashboardRingkasan />
            </>
          )}
          {aktif === 'daftar-pengaduan' && (
            <>
              <AdminHeader
                judul="Daftar Pengaduan Masuk"
                subjudul="Kelola, verifikasi, dan disposisikan setiap tiket pengaduan warga."
                aktifLabel="Admin / Manajemen Pengaduan"
              />
              <DaftarPengaduan onPilihTiket={onPilihTiket} />
            </>
          )}

          {aktif === 'verifikasi-tiket' && (
            <AdminSection
              judul="Verifikasi Tiket"
              subjudul="Verifikasi pengaduan baru sebelum diteruskan ke dinas teknis terkait."
              aktifLabel="Verifikasi Tiket"
            >
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Konten verifikasi tiket akan ditampilkan di sini. Pilih tiket dari
                  <span className="font-semibold text-on-surface">Daftar Pengaduan</span>
                  untuk memulai verifikasi dan disposisi.
                </p>
              </div>
            </AdminSection>
          )}

          {aktif === 'disposisi-instansi' && (
            <AdminSection
              judul="Disposisi Instansi"
              subjudul="Salurkan tiket yang sudah diverifikasi ke OPD / dinas teknis penanggung jawab."
              aktifLabel="Disposisi Instansi"
            >
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Konten disposisi instansi akan ditampilkan di sini. Atur rute
                  pengiriman tiket kepada dinas terkait berdasarkan kategori
                  pengaduan.
                </p>
              </div>
            </AdminSection>
          )}
          {aktif === 'master-kategori-opd' && (
            <AdminSection
              judul="Master Kategori &amp; OPD"
              subjudul="Kelola daftar kategori pengaduan dan instansi (OPD) tujuan disposisi."
              aktifLabel="Master Kategori & OPD"
            >
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Konten master kategori & OPD akan ditampilkan di sini. Kelola
                  daftar kategori dan instansi yang tersedia dalam sistem.
                </p>
              </div>
            </AdminSection>
          )}

          {aktif === 'rekapitulasi-ekspor' && (
            <AdminSection
              judul="Rekapitulasi &amp; Ekspor"
              subjudul="Buat laporan rekapitulasi dan ekspor data pengaduan dalam berbagai format."
              aktifLabel="Rekapitulasi & Ekspor"
            >
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Konten rekapitulasi & ekspor akan ditampilkan di sini. Buat
                  laporan bulanan dan ekspor data pengaduan ke format yang diinginkan.
                </p>
              </div>
            </AdminSection>
          )}

          {aktif === 'pengaturan-akun' && (
            <AdminSection
              judul="Pengaturan Akun"
              subjudul="Kelola profil dan pengaturan akun petugas operator."
              aktifLabel="Pengaturan Akun"
            >
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <img
                    alt="Avatar Petugas"
                    className="h-10 w-10 rounded-full object-cover"
                    src={identitas.avatarPetugas}
                  />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                      {adminProfil.nama}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {adminProfil.jabatan}
                    </span>
                  </div>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Pengaturan akun akan tersedia di versi selanjutnya.
                </p>
              </div>
            </AdminSection>
          )}
        </main>
      </div>

      {/* Drawer Detail Tiket */}
      {detailKode && (
        <Drawer
          open={!!detailKode}
          onClose={() => setDetailKode(null)}
          title="Detail Tiket"
          subtitle={detailKode}
          badge={detailKode}
        >
          <TiketDetail
            kode={detailKode}
            onTutup={() => setDetailKode(null)}
            onStatusBerubah={handleStatusBerubah}
          />
        </Drawer>
      )}
    </div>
  )
}


