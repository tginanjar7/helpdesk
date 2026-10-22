import { alurPengaduan } from '../../data.jsx'

/**
 * AlurPengaduan.jsx
 * Grid 5 langkah alur pengaduan masyarakat dari penulisan laporan
 * hingga pemberian ulasan warga.
 */
export default function AlurPengaduan() {
  return (
    <section className="w-full py-16 bg-surface-container-low" id="alur-faq">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            Alur Mudah 5 Langkah
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Tata Cara Pengaduan Hingga Tuntas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Kami menjamin setiap laporan masyarakat diproses secara terstruktur, terukur, dan dapat
            dipertanggungjawabkan di hadapan publik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {alurPengaduan.map((a, i) => (
            <div
              key={a.judul}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start relative group hover:-translate-y-1 transition-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center font-title-md font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-1">{a.judul}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
