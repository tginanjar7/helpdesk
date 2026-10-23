import { useState, useMemo, useEffect } from 'react'
import { ambilSemuaPengaduan, tambahPengaduan, ubahPengaduan, hapusPengaduan } from '../../supabaseClient.js'
import Icon from '../Icon.jsx'
import Pagination from '../ui/Pagination.jsx'

const STATUS_PILIHAN = ['baru', 'diverifikasi', 'diproses', 'selesai', 'ditolak']

const STATUS_LABEL = {
  baru: 'Baru',
  diverifikasi: 'Diverifikasi',
  diproses: 'Diproses',
  selesai: 'Selesai',
  ditolak: 'Ditolak',
}

const chipWarna = {
  baru: 'bg-error-container text-tertiary',
  diverifikasi: 'bg-secondary-container text-on-secondary-container',
  diproses: 'bg-surface-container-highest text-primary',
  selesai: 'bg-secondary-container text-on-secondary-container',
  ditolak: 'bg-error-container text-tertiary',
}
const titikWarna = {
  baru: 'bg-tertiary',
  diverifikasi: 'bg-secondary',
  diproses: 'bg-primary',
  selesai: 'bg-primary',
  ditolak: 'bg-tertiary',
}

export default function DaftarPengaduan({ onPilihTiket }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [keyword, setKeyword] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [halaman, setHalaman] = useState(1)
  const [modalTambah, setModalTambah] = useState(false)
  const [form, setForm] = useState({
    nomor_tiket: '',
    nama_pelapor: '',
    identitas_pelapor: '',
    kategori_layanan: '',
    judul_laporan: '',
    isi_laporan: '',
    lokasi_kejadian: '',
    lampiran_bukti: '',
    catatan_tindak_lanjut: '',
    status_aduan: 'baru',
  })
  const [saving, setSaving] = useState(false)
  const perPage = 10

  const loadData = async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await ambilSemuaPengaduan()
      setData(rows || [])
    } catch (e) {
      setError(e.message || 'Gagal memuat data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const filtered = useMemo(() => {
    return data.filter((t) => {
      const cocokKata =
        !keyword ||
        (t.nomor_tiket || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (t.nama_pelapor || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (t.isi_laporan || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (t.identitas_pelapor || '').toLowerCase().includes(keyword.toLowerCase())
      const cocokStatus = !statusFilter || t.status_aduan === statusFilter
      return cocokKata && cocokStatus
    })
  }, [data, keyword, statusFilter])

  const totalHalaman = Math.max(1, Math.ceil(filtered.length / perPage))
  const halamanSaatIni = Math.min(halaman, totalHalaman)
  const dataHalaman = filtered.slice((halamanSaatIni - 1) * perPage, halamanSaatIni * perPage)

  const handleTambah = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await tambahPengaduan(form)
      setModalTambah(false)
      setForm({
        nomor_tiket: '',
        nama_pelapor: '',
        identitas_pelapor: '',
        kategori_layanan: '',
        judul_laporan: '',
        isi_laporan: '',
        lokasi_kejadian: '',
        lampiran_bukti: '',
        catatan_tindak_lanjut: '',
        status_aduan: 'baru',
      })
      await loadData()
    } catch (err) {
      alert('Gagal menyimpan: ' + (err.message || err))
    } finally {
      setSaving(false)
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      await ubahPengaduan(id, { status_aduan: newStatus })
      await loadData()
    } catch (err) {
      alert('Gagal mengubah status: ' + (err.message || err))
    }
  }

  const handleHapus = async (id) => {
    if (!confirm('Hapus pengaduan ini?')) return
    try {
      await hapusPengaduan(id)
      await loadData()
    } catch (err) {
      alert('Gagal menghapus: ' + (err.message || err))
    }
  }

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
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setHalaman(1) }}
          >
            <option value="">Semua Status</option>
            {STATUS_PILIHAN.map((s) => (
              <option key={s} value={s}>{STATUS_LABEL[s] || s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
          <span>Menampilkan hasil terfilter:</span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high font-semibold text-on-surface">
            {filtered.length} dari {data.length} Tiket
          </span>
        </div>
        <button
          type="button"
          className="h-9 px-space-md rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors flex items-center gap-1"
          onClick={() => setModalTambah(true)}
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          <span>Tambah Data</span>
        </button>
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

        {loading && (
          <div className="py-10 text-center text-on-surface-variant font-label-sm text-label-sm">
            Memuat data...
          </div>
        )}

        {error && (
          <div className="py-10 text-center text-tertiary font-label-sm text-label-sm">
            Terjadi error: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-variant/40 bg-surface-container-low">
                  <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Tiket</th>
                  <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Pelapor</th>
                  <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Kategori</th>
                  <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Isi Laporan</th>
                  <th className="py-3 px-4 font-label-sm text-label-sm text-on-surface-variant">Lokasi</th>
                  <th className="py-3 px-3 font-label-sm text-label-sm text-on-surface-variant text-center">Status</th>
                  <th className="py-3 px-3 font-label-sm text-label-sm text-on-surface-variant text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataHalaman.map((t) => {
                  const chip = chipWarna[t.status_aduan] || 'bg-surface-container-high text-on-surface-variant'
                  const titik = titikWarna[t.status_aduan] || 'bg-surface-variant'
                  return (
                    <tr key={t.id} className="hover:bg-surface-container-low/70 transition-colors group border-b border-surface-variant/30 bg-surface-container-lowest/50">
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-mono font-bold text-primary group-hover:underline cursor-pointer">{t.nomor_tiket}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">{t.nama_pelapor}</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{t.identitas_pelapor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-3 align-top">
                        <span className="inline-flex px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">{t.kategori_layanan}</span>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <p className="line-clamp-2 text-on-surface font-medium leading-relaxed">{t.isi_laporan}</p>
                      </td>
                      <td className="py-4 px-3 align-top">
                        <div className="flex items-start gap-1">
                          <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0 mt-0.5">location_on</span>
                          <span className="text-on-surface-variant leading-snug">{t.lokasi_kejadian}</span>
                        </div>
                      </td>
                      <td className="py-4 px-3 align-top text-center">
                        <select
                          className="text-xs rounded-lg bg-surface-container-low px-2 py-1"
                          value={t.status_aduan}
                          onChange={(e) => handleStatusChange(t.id, e.target.value)}
                        >
                          {STATUS_PILIHAN.map((s) => (
                            <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                          ))}
                        </select>
                        <span className={`ml-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${chip} font-label-md text-label-md uppercase font-semibold`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${titik}`} />
                          {STATUS_LABEL[t.status_aduan]}
                        </span>
                      </td>
                      <td className="py-4 px-3 align-top text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            title="Hapus"
                            className="p-1.5 rounded-lg text-tertiary hover:bg-surface-container transition-colors"
                            onClick={() => handleHapus(t.id)}
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {dataHalaman.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-on-surface-variant font-label-sm text-label-sm">
                      Tidak ada pengaduan yang cocok dengan filter yang dipilih.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && data.length === 0 && (
          <div className="py-10 text-center text-on-surface-variant font-label-sm text-label-sm">
            Belum ada data pengaduan.
          </div>
        )}

        <div className="p-space-md border-t border-surface-variant/40 flex items-center justify-between gap-space-sm">
          <Pagination halaman={halamanSaatIni} totalHalaman={totalHalaman} onGanti={setHalaman} />
        </div>
      </div>

      {/* Modal Tambah */}
      {modalTambah && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="font-title-md text-title-md text-on-surface font-bold mb-space-md">Tambah Pengaduan</h3>
            <form onSubmit={handleTambah} className="space-y-space-sm">
              {[
                ['nomor_tiket', 'Nomor Tiket'],
                ['nama_pelapor', 'Nama Pelapor'],
                ['identitas_pelapor', 'Identitas Pelapor'],
                ['kategori_layanan', 'Kategori Layanan'],
                ['judul_laporan', 'Judul Laporan'],
                ['lokasi_kejadian', 'Lokasi Kejadian'],
                ['lampiran_bukti', 'Lampiran Bukti (URL)'],
                ['catatan_tindak_lanjut', 'Catatan Tindak Lanjut'],
              ].map(([field, label]) => (
                <div key={field}>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">{label}</label>
                  <input
                    type="text"
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required={['nomor_tiket', 'nama_pelapor', 'identitas_pelapor', 'kategori_layanan', 'judul_laporan', 'isi_laporan', 'lokasi_kejadian'].includes(field)}
                  />
                </div>
              ))}
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Isi Laporan</label>
                <textarea
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                  rows={3}
                  value={form.isi_laporan}
                  onChange={(e) => setForm({ ...form, isi_laporan: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Status</label>
                <select
                  className="w-full h-10 px-3 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
                  value={form.status_aduan}
                  onChange={(e) => setForm({ ...form, status_aduan: e.target.value })}
                >
                  {STATUS_PILIHAN.map((s) => (
                    <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="h-9 px-space-md rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                  onClick={() => setModalTambah(false)}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="h-9 px-space-md rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors disabled:opacity-50"
                >
                  {saving ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
