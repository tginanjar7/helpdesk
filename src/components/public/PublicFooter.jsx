import { Link } from 'react-router-dom'
import { identitas, footer } from '../../data.jsx'
import Icon from '../Icon.jsx'

/**
 * PublicFooter.jsx
 * Footer portal warga: profil kanal, kontak, tautan layanan, dan
 * informasi layanan tanggap darurat.
 */
export default function PublicFooter() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)]" id="kontak">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg mb-space-xl">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <img alt="Logo LAPOR-DAERAH" className="h-7 w-auto object-contain" src={identitas.logo} />
              <span className="font-title-md text-title-md text-on-surface">{identitas.nama}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {footer.deskripsi}
            </p>
            <div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant">
              <Icon name="verified" className="text-[18px]" />
              <span className="font-label-sm text-label-sm">Terintegrasi Sistem Informasi Daerah</span>
            </div>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">Pusat Pengaduan &amp; Kontak</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {footer.kontak.map((k) => (
                <li key={k.teks} className="flex items-start gap-space-xs">
                  <Icon name={k.icon} className="text-[18px] text-primary shrink-0" />
                  <span>{k.teks}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">Kanal Layanan</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              {footer.kanal.map((k) => (
                <li key={k.label}>
                  {k.href.startsWith('/') ? (
                    <Link
                      to={k.href}
                      className="text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                      {k.label}
                    </Link>
                  ) : (
                    <a href={k.href} className="text-on-surface-variant hover:text-on-surface transition-colors">
                      {k.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">Layanan Tanggap Darurat</h4>
            <div className="p-space-md rounded-xl bg-surface-container-high space-y-space-xs">
              <div className="flex items-center gap-space-xs">
                <Icon name="emergency" className="text-tertiary text-[20px]" />
                <span className="font-label-lg text-label-lg text-on-surface">{footer.darurat.judul}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{footer.darurat.detail}</p>
            </div>
          </div>
        </div>

        <div className="pt-space-md border-t border-surface-variant/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-label-sm text-label-sm text-on-surface-variant">{footer.copyright}</p>
          <div className="flex items-center gap-4">
            {footer.tautanLegal.map((t) => (
              <a
                key={t}
                href="#kontak"
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
