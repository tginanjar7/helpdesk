/**
 * TiketDetail.jsx
 * Konten drawer detail tiket yang ditampilkan pada sekansi Daftar Pengaduan.
 * Menggunakan data dari dataAdmin.jsx & dataAdminExtra.jsx.
 */
import { useState } from 'react'
import { daftarPengaduan, statusGaya, opsiStatusBaru, daftarOpdTujuan } from '../../dataAdmin.jsx'
import { templateRespons } from '../../dataAdminExtra.jsx'
import Icon from '../Icon.jsx'
import Stars from '../ui/Stars.jsx'

export default function TiketDetail({ kode, onTutup, onStatusBerubah }) {
  const tiket = daftarPengaduan.find((t) => t.kode === kode)
  if (!tiket) return null

  const gaya = statusGaya[tiket.status] || { chip: 'bg-surface-container-high text-on-surface-variant', titik: 'bg-surface-variant' }
  const [pilihRespons, setPilihRespons] = useState('')
  const [balasan, setBalasan] = useState('')

  const chipClass = `px-2.5 py-0.5 rounded-full ${gaya.chip} font-label-md text-label-md uppercase font-semibold flex items-center gap-1`
  const titikClass = `w-1.5 h-1.5 rounded-full ${gaya.titik} shrink-0`

  return (
    <div className="space-y-space-md">
      <div className="flex items-center gap-2">
        <span className={`p-1.5 rounded-lg ${statusGaya[tiket.status] ? 'bg-primary/10' : 'bg-surface-container-high'} shrink-0`}>
          <Icon name="assignment" className="text-[18px] text-primary" />
        </span>
        <div className="min-w-0">
          <h3 className="font-title-md text-title-md text-on-surface font-bold">{tiket.kode}</h3>
          <span className={`inline-flex items-center gap-1 ${chipClass}`}>
            <span className={titikClass} />
            {tiket.status}
          </span>
        </div>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{tiket.isi}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md p-space-sm rounded-lg bg-surface-container-low border border-surface-variant/30">
        <div className="space-y-1">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pelapor</span>
          <span className="font-semibold text-on-surface">{tiket.nama}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{tiket.nik}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{tiket.telepon}</span>
        </div>
        <div className="space-y-1">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kategori</span>
          <span className="font-semibold text-on-surface">{tiket.kategori}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Instansi</span>
          <span className="font-semibold text-on-surface">{tiket.instansi}</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{tiket.bidang}</span>
        </div>
        <div className="space-y-1 sm:col-span-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lokasi</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{tiket.lokasi}</span>
        </div>
        <div className="space-y-1 sm:col-span-2">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tanggal Diterima</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{tiket.tanggal}</span>
        </div>
        <div className="space-y-1">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Bukti</span>
          <div className="flex items-center gap-1">
            <span className={`p-1 rounded-lg bg-surface-container ${statusGaya[tiket.status] ? 'text-primary' : 'text-on-surface-variant'} material-symbols-outlined text-[16px]`}>
              {tiket.bukti.icon}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{tiket.bukti.tipe}</span>
          </div>
        </div>
      </div>
      {/* Rating pelapor (jika sudah selesai) */}
      {tiket.rating && (
        <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-variant/30">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Rating Kepuasan</span>
            <Stars nilai={tiket.rating} ukuran="text-[16px]" />
            <span className="font-label-sm text-label-sm text-on-surface-variant">({tiket.rating} / 5)</span>
          </div>
          {tiket.ulasan && (
            <p className="font-body-sm text-body-sm text-on-surface italic">{tiket.ulasan}</p>
          )}
        </div>
      )}

      {/* Verifikasi & Disposisi */}
      <div className="p-space-md rounded-xl bg-primary/5 border border-primary/20">
        <h4 className="font-label-lg text-label-lg text-primary font-semibold mb-space-md flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
          Verifikasi &amp; Disposisi
        </h4>
        <div className="space-y-space-sm">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">Ubah Status Tiket:</label>
            <select
              className="w-full h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              value={tiket.status}
              onChange={(e) => onStatusBerubah(e.target.value)}
            >
              {opsiStatusBaru.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">Disposisi ke Instansi (OPD):</label>
            <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors">
              {daftarOpdTujuan.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">Catatan Instruksi Petugas:</label>
            <textarea
              className="w-full h-24 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              placeholder="Masukkan instruksi lanjutan bagi tim teknis lapangan..."
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">Template Tanggapan Cepat:</label>
            <select
              className="w-full h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              onChange={(e) => {
                const tmpl = templateRespons.find((t) => t.id === e.target.value)
                if (tmpl) setBalasan(tmpl.isi.replace('{KODE}', tiket.kode).replace('{INSTANSI}', tiket.instansi))
              }}
            >
              <option value="">-- Pilih Template --</option>
              {templateRespons.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">Tanggapan untuk Pelapor:</label>
            <textarea
              className="w-full h-24 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
              value={balasan}
              onChange={(e) => setBalasan(e.target.value)}
              placeholder="Ketik tangkapan Anda..."
            />
          </div>
          <div className="flex justify-end gap-space-sm mt-space-sm">
            <button
              type="button"
              onClick={onTutup}
              className="h-9 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              className="h-9 px-space-md rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container active:scale-[0.98] transition-all"
            >
              Simpan &amp; Kirim Tanggapan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

