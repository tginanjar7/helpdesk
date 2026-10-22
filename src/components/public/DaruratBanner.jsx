import Icon from '../Icon.jsx'

/**
 * DaruratBanner.jsx
 * Ajakan menghubungi call center 112 untuk keadaan darurat.
 */
export default function DaruratBanner() {
  return (
    <section className="w-full py-10 bg-surface-container-high">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
            <Icon name="emergency" className="text-[32px]" />
          </div>
          <div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold">
              Keadaan Darurat &amp; Membutuhkan Pertolongan Segera?
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Gunakan layanan panggilan terpadu darurat Pemadam Kebakaran, Ambulans, dan Bencana Alam.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:112"
            className="px-6 py-3 rounded-lg bg-tertiary text-on-tertiary font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Icon name="call" className="text-[20px]" />
            <span>Hubungi Call Center 112 (Bebas Pulsa)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
