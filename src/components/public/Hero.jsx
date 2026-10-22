import { hero } from '../../data.jsx'
import Icon from '../Icon.jsx'

/**
 * Hero.jsx
 * Bagian hero portal warga: judul utama, CTA, kotak pelacakan cepat,
 * lencana keunggulan, dan foto dokumentasi layanan.
 */
export default function Hero({ kodeCari, setKodeCari, onCariTiket }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-surface-container-lowest pt-16"
      id="hero"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-surface-container-high/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-gutter relative py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md flex items-center gap-1.5">
                <Icon name="campaign" className="text-[16px]" />
                {hero.labelKanal}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                {hero.labelDaerah}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-headline-lg text-headline-lg lg:text-[40px] lg:leading-[48px] text-on-surface tracking-tight">
                {hero.judul}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {hero.deskripsi}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#form-pengaduan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all active:scale-[0.98]"
              >
                <Icon name="edit_document" className="text-[20px]" />
                <span>Tulis Laporan Sekarang</span>
              </a>
              <a
                href="#lacak-aduan"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors"
              >
                <Icon name="search" className="text-[20px] text-primary" />
                <span>Lacak Status Tiket</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low shadow-sm">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5 font-medium"
                htmlFor="quick-search-input"
              >
                Pelacakan Cepat Tiket Anda:
              </label>
              <form
                className="flex flex-col sm:flex-row items-stretch gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  onCariTiket()
                }}
              >
                <div className="relative flex-1">
                  <Icon
                    name="confirmation_number"
                    className="absolute left-3 top-2.5 text-[20px] text-outline"
                  />
                  <input
                    id="quick-search-input"
                    className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder={hero.placeholderCari}
                    type="text"
                    value={kodeCari}
                    onChange={(e) => setKodeCari(e.target.value)}
                  />
                </div>
                <button
                  className="px-5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  type="submit"
                >
                  <Icon name="travel_explore" className="text-[18px]" />
                  <span>Cek Tiket</span>
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {hero.keunggulan.map((k) => (
                <div key={k.judul} className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-container-low">
                  <Icon name={k.icon} className="text-[24px] text-primary shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface truncate">{k.judul}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{k.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container group">
              <img
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                src={hero.foto}
                alt="Petugas teknis dinas meninjau langsung perbaikan jalan aspal di lingkungan warga"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent flex flex-col justify-end p-5 text-on-primary">
                <span className="px-2.5 py-0.5 rounded-full bg-primary font-label-sm text-label-sm w-fit mb-1.5">
                  {hero.fotoBadge}
                </span>
                <p className="font-title-md text-title-md leading-tight">{hero.fotoJudul}</p>
                <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">{hero.fotoKeterangan}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {hero.kartuMini.map((k) => (
                <div
                  key={k.judul}
                  className={`p-4 rounded-xl shadow-sm flex flex-col justify-between ${
                    k.tone === 'high' ? 'bg-surface-container-high' : 'bg-surface-container-lowest'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      name={k.icon}
                      className={`text-[22px] ${k.tone === 'high' ? 'text-secondary' : 'text-primary'}`}
                    />
                    <span
                      className={`font-label-sm text-label-sm font-semibold ${
                        k.tone === 'high' ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {k.badge}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="font-headline-sm text-headline-sm text-on-surface block">{k.judul}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight block">
                      {k.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

