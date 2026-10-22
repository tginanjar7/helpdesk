/**
 * DaftarPengaduan.jsx
 * Tabel daftar tiket pengaduan dengan filter, status chip, aksi cepat,
 * paginasi, dan drawer detail tiket.
 */
import { useState, useMemo } from 'react'
import { daftarPengaduan, statusGaya, adminFilterKategori, adminFilterOpd, adminFilterStatus } from '../../dataAdmin.jsx'
import Icon from '../Icon.jsx'
import Pagination from '../ui/Pagination.jsx'
import TiketDetail from './TiketDetail.jsx'

export default function DaftarPengaduan({ onPilihTiket }) {
  const [keyword, setKeyword] = useState('')
  const [kategori, setKategori] = useState('')
  const [opd, setOpd] = useState('')
  const [status, setStatus] = useState('')
  const [halaman, setHalaman] = useState(1)
  const perPage = 10

  const chipWarna = {
    Baru: 'bg-error-container text-tertiary',
    Diverifikasi: 'bg-secondary-container text-on-secondary-container',
    Diproses: 'bg-surface-container-highest text-primary',
    Selesai: 'bg-secondary-container text-on-secondary-container',
    Ditolak: 'bg-error-container text-tertiary',
  }
  const titikWarna = {
    Baru: 'bg-tertiary',
    Diverifikasi: 'bg-secondary',
    Diproses: 'bg-primary',
    Selesai: 'bg-primary',
    Ditolak: 'bg-tertiary',
  }

  const filtered = useMemo(() => {
    return daftarPengaduan.filter((t) => {
      const cocokKata =
        !keyword ||
        t.kode.toLowerCase().includes(keyword.toLowerCase()) ||
        t.nama.toLowerCase().includes(keyword.toLowerCase()) ||
        t.isi.toLowerCase().includes(keyword.toLowerCase()) ||
        (t.nik || '').toLowerCase().includes(keyword.toLowerCase())
      const cocokKategori = !kategori || t.kategori === kategori
      const cocokOpd = !opd || t.instansi === opd
      const cocokStatus = !status || t.status === status
      return cocokKata && cocokKategori && cocokOpd && cocokStatus
    })
  }, [keyword, kategori, opd, status])

  const totalHalaman = Math.max(1, Math.ceil(filtered.length / perPage))
  const halamanSaatIni = Math.min(halaman, totalHalaman)
  const dataHalaman = filtered.slice((halamanSaatIni - 1) * perPage, halamanSaatIni * perPage)

  return (
    <div className="space-y-space-lg">
      {/* Filter Toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
        <div className="lg:col-span-2 relative">
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2">search</span>
          <input
            type="text"
            className="w-full h-11 pl-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            placeholder="Cari nomor tiket, nama pelapor, isi laporan, atau NIK..."
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value); setHalaman(1) }}
          />
        </div>
        <div className="md:col-span-2">
          <select
            className="w-full h-11 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            value={kategori}
            onChange={(e) => { setKategori(e.target.value); setHalaman(1) }}
          >
            <option value="">Semua Kategori</option>
            {adminFilterKategori.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <select
            className="w-full h-11 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            value={opd}
            onChange={(e) => { setOpd(e.target.value); setHalaman(1) }}
          >
            <option value="">Semua Dinas (OPD)</option>
            {adminFilterOpd.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <select
            className="w-full h-11 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            value={status}
            onChange={(e) => { setStatus(e.target.value); setHalaman(1) }}
          >
            <option value="">Semua Status</option>
            {adminFilterStatus.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 relative">
          <input
            type="date"
            className="w-full h-11 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
          <span>Menampilkan hasil terfilter:</span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-semibold text-on-surface">
            {filtered.length} dari {daftarPengaduan.length} Tiket
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            type="button"
            className="h-9 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            <span>Reset Filter</span>
          </button>
          <button
            type="button"
            className="h-9 px-space-md rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">filter_list</span>
            <span>Terapkan Filter</span>
          </button>
        </div>
      </div>

      {/* Tabel Pengaduan */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[22px]">table_chart</span>
            <h2 className="font-title-md text-title-md text-on-surface font-bold">Daftar Pengaduan Masuk</h2>
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Terkini</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface-variant/40 bg-surface-container-low">
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Tiket</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Pelapor</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Kategori</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Isi Laporan</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Lokasi</th>
                <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Instansi / Bidang</th>
                <th className="py-3 px-3 font-label-sm text-label-sm text-on-surface-variant">Bukti</th>
                <th className="py-3 px-3 font-label-sm text-label-sm text-on-surface-variant text-center">Status</th>
                <th className="py-3 px-3 font-label-sm text-label-sm text-on-surface-variant text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataHalaman.map((t) => {
                const chip = chipWarna[t.status] || 'bg-surface-container-high text-on-surface-variant'
                const titik = titikWarna[t.status] || 'bg-surface-variant'
                return (
                  <tr key={t.kode} className="hover:bg-surface-container-low/70 transition-colors group border-b border-surface-variant/30 bg-surface-container-lowest/50">
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-primary group-hover:underline cursor-pointer">{t.kode}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{t.waktuRelatif}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <div className="flex flex-col">
                        <span className="font-semibold text-on-surface">{t.nama}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{t.nik}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{t.telepon}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="inline-flex px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">{t.kategori}</span>
                    </td>
                    <td className="py-4 px-4 align-top">
                      <p className="line-clamp-2 text-on-surface font-medium leading-relaxed">{t.isi}</p>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{t.tanggal}</span>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <div className="flex items-start gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5">location_on</span>
                        <span className="text-on-surface-variant leading-snug">{t.lokasi}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 align-top">
                      <span className="font-semibold text-on-surface block">{t.instansi}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{t.bidang}</span>
                    </td>
                    <td className="py-4 px-3 align-top text-center">
                      <button className="p-1 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-primary inline-flex items-center gap-1 font-label-sm text-label-sm px-2">
                        <span className="material-symbols-outlined text-[16px]">{t.bukti.icon}</span>
                        <span>{t.bukti.tipe}</span>
                      </button>
                    </td>
                    <td className="py-4 px-3 align-top text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${chip} font-label-md text-label-md uppercase font-semibold`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${titik}`} />
                        {t.status}
                      </span>
                    </td>
                    <td className="py-4 px-3 align-top text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          title="Disposisi Cepat"
                          className="p-1.5 rounded-lg text-primary hover:bg-surface-container transition-colors"
                          onClick={() => onPilihTiket(t.kode)}
                        >
                          <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                        </button>
                        <button
                          type="button"
                          title="Tanggapan"
                          className="p-1.5 rounded-lg text-secondary hover:bg-surface-container transition-colors"
                          onClick={() => onPilihTiket(t.kode)}
                        >
                          <span className="material-symbols-outlined text-[18px]">reply</span>
                        </button>
                        <button
                          type="button"
                          title="Detail Tiket"
                          className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                          onClick={() => onPilihTiket(t.kode)}
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
              {dataHalaman.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-10 text-center text-on-surface-variant font-label-sm text-label-sm">
                    Tidak ada pengaduan yang cocok dengan filter yang dipilih.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-space-md border-t border-surface-variant/40 flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Data per halaman</span>
            <select className="h-9 px-2 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40">
              {['10', '25', '50'].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <Pagination halaman={halamanSaatIni} totalHalaman={totalHalaman} onGanti={setHalaman} />
        </div>
      </div>
    </div>
  )
}


