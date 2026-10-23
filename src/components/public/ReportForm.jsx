import { useMemo, useRef, useState } from 'react'
import { jenisLaporan, kategoriLayanan, daftarOpd } from '../../data.jsx'
import Icon from '../Icon.jsx'
import { tambahPengaduan } from '../../supabaseClient.js'

const FORM_AWAL = {
  kategori: '',
  judul: '',
  deskripsi: '',
  lokasi: '',
  nik: '',
  nama: '',
  wa: '',
  anonim: false,
  rahasia: true,
}

/**
 * ReportForm.jsx
 * Formulir pengaduan mandiri warga: pemilih jenis laporan, kategori
 * layanan, detail laporan, unggah lampiran, data identitas pelapor,
 * opsi anonim/rahasia, dan pengiriman laporan.
 */
export default function ReportForm({ onTerkirim }) {
  const [jenis, setJenis] = useState(jenisLaporan[0].value)
  const [form, setForm] = useState(FORM_AWAL)
  const [berkas, setBerkas] = useState([])
  const [mengirim, setMengirim] = useState(false)
  const [sukses, setSukses] = useState(null)
  const inputBerkas = useRef(null)

  const jumlahKarakter = form.deskripsi.trim().length
  const panjangValid = jumlahKarakter >= 50

  const opdTersedia = useMemo(() => {
    const kategori = kategoriLayanan.find((k) => k.nilai === form.kategori)
    if (!kategori) return daftarOpd
    const cocok = daftarOpd.find((o) => o.kode === kategori.opd)
    return cocok ? [cocok] : daftarOpd
  }, [form.kategori])

  const ubah = (field) => (e) => {
    const { value, type, checked } = e.target
    setForm((f) => ({ ...f, [field]: type === 'checkbox' ? checked : value }))
  }

  const tambahBerkas = (daftar) => {
    const baru = Array.from(daftar || []).map((f) => ({
      nama: f.name,
      ukuran: f.size,
    }))
    setBerkas((b) => [...b, ...baru])
  }

  const hapusBerkas = (index) => {
    setBerkas((b) => b.filter((_, i) => i !== index))
  }

  const kirim = async (e) => {
    e.preventDefault()
    if (!panjangValid) return
    setMengirim(true)
    try {
      const kode = `TKT-2025-${String(Math.floor(Math.random() * 9000) + 1000)}`
      await tambahPengaduan({
        nomor_tiket: kode,
        nama_pelapor: form.nama || 'Warga',
        identitas_pelapor: form.nik,
        kategori_layanan: form.kategori,
        judul_laporan: form.judul,
        isi_laporan: form.deskripsi,
        lokasi_kejadian: form.lokasi,
        lampiran_bukti: berkas.length ? berkas.map((b) => b.nama).join(', ') : null,
        catatan_tindak_lanjut: null,
        status_aduan: 'baru',
      })
      setSukses({ kode, nama: form.nama || 'Warga' })
      setForm(FORM_AWAL)
      setBerkas([])
      setJenis(jenisLaporan[0].value)
      onTerkirim?.({ kode, ...form })
    } catch (err) {
      alert('Gagal mengirim: ' + (err.message || err))
    } finally {
      setMengirim(false)
    }
  }

  const reset = () => {
    setForm(FORM_AWAL)
    setBerkas([])
    setJenis(jenisLaporan[0].value)
    setSukses(null)
    if (inputBerkas.current) inputBerkas.current.value = ''
  }

  return (
    <section className="w-full py-16 bg-surface" id="form-pengaduan">
      <div className="max-w-5xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            Pelayanan Terpadu
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Formulir Pengaduan Mandiri Warga
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Laporkan permasalahan sarana publik, birokrasi, atau sampaikan gagasan aspirasi Anda. Identitas
            pelapor dijamin aman dan dilindungi peraturan perundang-undangan.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 sm:p-10">
          <div className="mb-8">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide mb-2 font-medium">
              Pilih Kategori Laporan:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-xl bg-surface-container-low">
              {jenisLaporan.map((j) => (
                <button
                  key={j.value}
                  type="button"
                  onClick={() => setJenis(j.value)}
                  className={`py-3 px-4 rounded-lg font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 ${
                    jenis === j.value
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-lowest hover:bg-surface-dim'
                  }`}
                >
                  {j.label}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-6" id="public-report-form" onSubmit={kirim}>
            <input type="hidden" value={jenis} readOnly />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="form-category">
                  Instansi / Kategori Layanan <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    id="form-category"
                    required
                    value={form.kategori}
                    onChange={ubah('kategori')}
                    className="w-full h-[44px] px-3.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer pr-10"
                  >
                    <option value="" disabled>
                      Pilih Kategori Layanan Publik
                    </option>
                    {kategoriLayanan.map((k) => (
                      <option key={k.nilai} value={k.nilai}>
                        {k.label}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-3 top-3 text-[20px] text-outline pointer-events-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="form-title">
                  Judul Laporan Singkat <span className="text-error">*</span>
                </label>
                <input
                  id="form-title"
                  required
                  type="text"
                  value={form.judul}
                  onChange={ubah('judul')}
                  placeholder="Contoh: Lampu Penerangan Jalan Padam di Sukajaya"
                  className="w-full h-[44px] px-3.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="form-description">
                  Isi Detail Laporan <span className="text-error">*</span>
                </label>
                <span
                  className={`font-label-sm text-label-sm ${
                    panjangValid ? 'text-primary font-semibold' : 'text-on-surface-variant'
                  }`}
                >
                  {jumlahKarakter} / 50 min. karakter
                </span>
              </div>
              <textarea
                id="form-description"
                required
                rows={5}
                value={form.deskripsi}
                onChange={ubah('deskripsi')}
                placeholder="Jelaskan kronologi, dampak, dan apa yang Anda harapkan dari instansi terkait."
                className="w-full p-3.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline">
              </textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="form-location">
                  Lokasi / Alamat Kejadian <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Icon
                    name="location_on"
                    className="absolute left-3 top-3 text-[20px] text-outline pointer-events-none"
                  />
                  <input
                    id="form-location"
                    required
                    type="text"
                    value={form.lokasi}
                    onChange={ubah('lokasi')}
                    placeholder="Contoh: Jl. Melati No. 8, RW 05, Kel. Sukamaju, Kec. Bintang"
                    className="w-full h-[44px] pl-10 pr-3.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-2" htmlFor="form-opd">
                  Instansi Tujuan (OPD) <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    id="form-opd"
                    required
                    value={form.kategori ? opdTersedia[0]?.kode ?? '' : ''}
                    onChange={() => {}}
                    className="w-full h-[44px] px-3.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer pr-10 disabled:opacity-60"
                  >
                    {form.kategori ? (
                      opdTersedia.map((o) => (
                        <option key={o.kode} value={o.kode}>
                          {o.nama}
                        </option>
                      ))
                    ) : (
                      <option value="">Pilih kategori layanan terlebih dahulu</option>
                    )}
                  </select>
                  <Icon
                    name="expand_more"
                    className="absolute right-3 top-3 text-[20px] text-outline pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-2">
                Unggah Lampiran Bukti Dukung (Foto, Dokumen, atau Video)
              </label>
              <div
                className="p-6 rounded-xl bg-surface-container-low text-center cursor-pointer hover:bg-surface-container transition-colors group relative"
                onClick={() => inputBerkas.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  tambahBerkas(e.dataTransfer.files)
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') inputBerkas.current?.click()
                }}
              >
                <input
                  ref={inputBerkas}
                  accept="image/*,.pdf,.mp4"
                  className="hidden"
                  multiple
                  type="file"
                  onChange={(e) => tambahBerkas(e.target.files)}
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon name="cloud_upload" className="text-[28px]" />
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block">
                      Klik atau Seret Berkas ke Sini
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                      Format file yang didukung: JPG, PNG, PDF, atau MP4 (Maks. 10MB per berkas)
                    </span>
                  </div>
                  {berkas.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-2 w-full justify-center">
                      {berkas.map((b, i) => (
                        <span
                          key={`${b.nama}-${i}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface"
                        >
                          <Icon name="attach_file" className="text-[14px] text-primary" />
                          <span className="max-w-[180px] truncate">{b.nama}</span>
                          <button
                            type="button"
                            onClick={() => hapusBerkas(i)}
                            className="ml-2 p-1 rounded text-on-surface-variant hover:text-error">
                              <Icon name="delete" className="text-[14px]" />
                            </button>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

            <div className="p-5 rounded-xl bg-surface-container-low/70 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Icon name="badge" className="text-[20px] text-primary" />
                <h3 className="font-title-md text-title-md text-on-surface">Data Identitas Pelapor</h3>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  (Dibutuhkan untuk validasi dan notifikasi penanganan)
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1.5 font-medium" htmlFor="form-nik">
                    Nomor Induk Kependudukan (NIK) <span className="text-error">*</span>
                  </label>
                  <input
                    id="form-nik"
                    required
                    maxLength={16}
                    type="text"
                    inputMode="numeric"
                    value={form.nik}
                    onChange={ubah('nik')}
                    placeholder="16 digit NIK KTP Anda"
                    className="w-full h-[42px] px-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1.5 font-medium" htmlFor="form-name">
                    Nama Lengkap Warga <span className="text-error">*</span>
                  </label>
                  <input
                    id="form-name"
                    required
                    type="text"
                    value={form.nama}
                    onChange={ubah('nama')}
                    placeholder="Sesuai nama pada KTP"
                    className="w-full h-[42px] px-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1.5 font-medium" htmlFor="form-wa">
                    Nomor WhatsApp Aktif <span className="text-error">*</span>
                  </label>
                  <input
                    id="form-wa"
                    required
                    type="tel"
                    value={form.wa}
                    onChange={ubah('wa')}
                    placeholder="08xxxxxxxxxx"
                    className="w-full h-[42px] px-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm placeholder:text-outline"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.anonim}
                    onChange={ubah('anonim')}
                    className="w-4 h-4 rounded text-primary focus:ring-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Lapor Anonim</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Nama Anda tidak akan ditampilkan pada daftar laporan publik.
                    </span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.rahasia}
                    onChange={ubah('rahasia')}
                    className="w-4 h-4 rounded text-primary focus:ring-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Laporan Rahasia</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Rincian aduan hanya dapat dilihat oleh pelapor dan OPD penanggung jawab.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-container text-on-surface-variant text-body-sm font-body-sm">
              <div className="flex items-center gap-3">
                <Icon name="verified" className="text-[28px] text-primary" />
                <div>
                  <p className="font-semibold text-on-surface">Perlindungan Kerahasiaan Terjamin</p>
                  <p>Dilindungi Sistem Verifikasi Otomatis reCAPTCHA v3 &amp; Enkripsi Kominfo.</p>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant sm:text-right max-w-xs">
                Dengan mengirim, Anda menyatakan bahwa informasi yang diberikan adalah benar dan dapat
                dipertanggungjawabkan secara hukum.
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button
                type="reset"
                onClick={reset}
                className="px-5 py-3 rounded-lg bg-surface-container-high hover:bg-surface-dim text-on-surface font-label-lg text-label-lg transition-colors"
              >
                Reset Formulir
              </button>
              <button
                id="btn-submit-report"
                type="submit"
                disabled={mengirim || !panjangValid}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Icon name={mengirim ? 'refresh' : 'send'} className={`text-[20px] ${mengirim ? 'animate-spin' : ''}`} />
                <span>{mengirim ? 'Mengirim ke Server...' : 'Kirim Pengaduan Resmi'}</span>
              </button>
            </div>
          </form>

          {sukses ? (
            <div className="mt-6 p-5 rounded-xl bg-secondary-container text-on-secondary-container shadow-sm animate-fade-in">
              <div className="flex items-start gap-3">
                <Icon name="check_circle" className="text-[28px] text-primary shrink-0" />
                <div className="flex-1">
                  <h4 className="font-title-md text-title-md font-bold">Laporan Anda Berhasil Terkirim ke Sistem!</h4>
                  <p className="font-body-sm text-body-sm mt-1">
                    Kode Tiket Anda:{' '}
                    <strong className="font-mono text-base px-2 py-0.5 rounded bg-surface-container-lowest text-primary">
                      {sukses.kode}
                    </strong>
                    . Simpan kode ini untuk memantau status secara mandiri. Notifikasi konfirmasi juga telah dikirim
                    ke nomor WhatsApp Anda.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
