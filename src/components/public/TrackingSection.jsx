import { useState } from 'react'
import { contohTiket, labelRating } from '../../data.jsx'
import Icon from '../Icon.jsx'

/**
 * TrackingSection.jsx
 * Pelacakan status pengaduan: pencarian tiket, linimasa progres,
 * tanggapan resmi OPD, bukti foto, dan ulasan kepuasan warga.
 */
export default function TrackingSection({ kodeCari, setKodeCari, hasilCari }) {
  const [rating, setRating] = useState(0)
  const [ulasan, setUlasan] = useState('')
  const [terkirim, setTerkirim] = useState(false)

  const kirimUlasan = (e) => {
    e.preventDefault()
    setTerkirim(true)
    setUlasan('')
  }

  return (
    <section className="w-full py-16 bg-surface-container-low" id="lacak-aduan">
      <div className="max-w-5xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            Transparansi Publik
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Pelacakan Status Pengaduan Mandiri
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Pantau sejauh mana laporan Anda ditangani oleh dinas berwenang secara transparan. Anda juga dapat
            mengunduh bukti tanda terima atau memberikan ulasan hasil penanganan.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 mb-8">
          <form
            className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
            onSubmit={(e) => {
              e.preventDefault()
              hasilCari()
            }}
          >
            <div className="sm:col-span-8 md:col-span-9 relative">
              <Icon name="search" className="absolute left-3.5 top-3 text-[22px] text-outline" />
              <input
                className="w-full h-12 pl-11 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                placeholder="Ketik Kode Tiket (cth: TKT-2024-0892) atau 16 digit NIK"
                type="text"
                value={kodeCari}
                onChange={(e) => setKodeCari(e.target.value)}
              />
            </div>
            <div className="sm:col-span-4 md:col-span-3">
              <button
                className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <Icon name="manage_search" className="text-[20px]" />
                <span>Cari Tiket</span>
              </button>
            </div>
          </form>
        </div>


        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 sm:p-8 space-y-8" id="tracking-result-panel">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-surface-container">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-headline-sm font-bold text-primary">#{contohTiket.kode}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {contohTiket.status}
                </span>
              </div>
              <p className="font-title-md text-title-md text-on-surface mt-1 font-semibold">{contohTiket.judul}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-1 flex-wrap">
                <Icon name="pin_drop" className="text-[16px]" />
                {contohTiket.lokasi}
                <span>&bull;</span>
                <Icon name="schedule" className="text-[16px]" />
                {contohTiket.waktu}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              >
                <Icon name="download" className="text-[18px] text-primary" />
                <span>Unduh Berkas PDF</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-title-md text-title-md text-on-surface mb-6 flex items-center gap-2">
              <Icon name="timeline" className="text-[20px] text-primary" />
              Linimasa Progres Penanganan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {contohTiket.linimasa.map((t) => (
                <div
                  key={t.tahap}
                  className={`flex flex-col p-4 rounded-xl relative ${
                    t.selesai ? 'bg-surface-container-low' : 'bg-surface-container-high/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-semibold mb-2">
                    <Icon name={t.selesai ? 'check_circle' : 'schedule'} className="text-[18px]" />
                    <span>{t.tahap}</span>
                  </div>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">{t.judul}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">{t.detail}</span>
                  <span
                    className={`font-label-sm text-label-sm mt-3 ${
                      t.selesai ? 'text-primary font-medium' : 'text-outline'
                    }`}
                  >
                    {t.waktu}
                  </span>
                </div>
              ))}
            </div>
          </div>


          <div className="p-5 rounded-xl bg-surface-container-low">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Icon name="account_balance" className="text-[20px] text-primary" />
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Tanggapan Resmi {contohTiket.opd}
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-highest text-on-surface-variant">
                Penanggung Jawab: {contohTiket.penanggungJawab}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              &ldquo;{contohTiket.tanggapan}&rdquo;
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {contohTiket.foto.map((f) => (
                <div key={f.src} className="relative rounded-lg overflow-hidden group">
                  <img className="w-full h-24 object-cover" src={f.src} alt={f.label} />
                  <div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-on-primary font-label-sm text-label-sm">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-container-high/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-title-md text-title-md text-on-surface">Beri Ulasan &amp; Rating Layanan</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Rating membantu pemerintah daerah meningkatkan kualitas pelayanan aduan warga.
                </p>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    aria-label={`Beri rating ${n} bintang`}
                    className={`text-[28px] leading-none transition-colors ${
                      n <= rating ? 'text-amber-500' : 'text-surface-variant hover:text-amber-300'
                    }`}
                  >
                    <Icon name="star" filled />
                  </button>
                ))}
                <span className="ml-2 font-label-sm text-label-sm text-on-surface-variant">
                  {rating > 0 ? labelRating[rating] : 'Belum ada penilaian'}
                </span>
              </div>
            </div>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={kirimUlasan}>
              <input
                className="flex-1 h-10 px-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                placeholder="Tuliskan tanggapan atau ulasan Anda mengenai hasil pengerjaan tim dinas..."
                type="text"
                value={ulasan}
                onChange={(e) => setUlasan(e.target.value)}
              />
              <button
                type="submit"
                disabled={rating === 0}
                className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Kirim Ulasan Warga
              </button>
            </form>
            {terkirim ? (
              <div className="text-label-sm font-label-sm text-primary flex items-center gap-1">
                <Icon name="check" className="text-[16px]" />
                Ulasan Anda berhasil dicatat dalam Indeks Kepuasan Masyarakat.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
