import { statistik } from '../../data.jsx'
import Icon from '../Icon.jsx'
import Stars from '../ui/Stars.jsx'

/**
 * StatistikPublik.jsx
 * Grid 5 metrik kinerja pelayanan publik (agregat pengaduan).
 */
export default function StatistikPublik() {
  return (
    <section className="w-full py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider mb-1">
              <Icon name="analytics" className="text-[16px]" />
              <span>Transparansi Kinerja Pelayanan Publik</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Statistik Ringkas Penyelesaian Aduan
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Data agregat kinerja penanganan aspirasi &amp; aduan seluruh OPD diperbarui secara berkala.
            </p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {statistik.sinkronisasi}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statistik.metrik.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-on-surface-variant mb-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wide">{m.label}</span>
                <Icon name={m.icon} className="text-[20px] text-primary" />
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-display text-on-surface tracking-tight">{m.nilai}</span>
                  {m.nilaiTambahan ? (
                    <span className="font-title-md text-title-md text-primary font-bold">{m.nilaiTambahan}</span>
                  ) : null}
                  {m.satuan ? (
                    <span className="font-title-md text-title-md text-on-surface-variant">{m.satuan}</span>
                  ) : null}
                </div>
                {m.bintang ? (
                  <Stars nilai={m.bintang} ukuran="text-[16px]" className="mt-1" />
                ) : null}
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{m.catatan}</p>
              </div>

              {m.progres !== undefined ? (
                <div className="mt-4 pt-3">
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${m.progres}%` }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5 block text-right">
                    {m.progresLabel}
                  </span>
                </div>
              ) : null}

              {m.kaki ? (
                typeof m.kaki === 'string' ? (
                  <div className="mt-4 pt-3 text-label-sm font-label-sm text-on-surface-variant border-t border-surface-container">
                    <span>{m.kaki}</span>
                  </div>
                ) : (
                  <div className="mt-4 pt-3 flex items-center gap-1.5 text-label-sm font-label-sm">
                    <Icon name={m.kaki.icon} className="text-[16px]" />
                    <span className={m.kaki.warna ?? 'text-primary'}>{m.kaki.nilai}</span>
                  </div>
                )
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
