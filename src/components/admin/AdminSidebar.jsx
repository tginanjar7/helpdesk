import { navAdmin, identitas } from '../../data.jsx'
import { adminProfil } from '../../dataAdmin.jsx'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'

/**
 * AdminSidebar.jsx
 * Navigasi samping panel operator: menu utama, status server, dan
 * ringkasan profil petugas yang sedang login.
 */
export default function AdminSidebar({ aktif, onPilih, terbuka, onTutup }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between ${
        terbuka ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } transition-transform duration-200`}
    >
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-md flex items-center justify-between border-b border-surface-variant/30">
          <div className="flex items-center gap-space-sm">
            <img alt="Logo LAPOR-DAERAH" className="h-8 w-auto object-contain" src={identitas.logo} />
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-on-surface leading-tight">
                {identitas.nama}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Pusat Pengendalian</span>
            </div>
          </div>
          <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wide">
            Petugas
          </span>
        </div>

        <div className="px-space-md py-space-sm">
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Status Server
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-semibold">Sinkron Aktif</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-space-md py-space-xs space-y-1">
          {navAdmin.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => {
                onPilih(item.path)
                onTutup?.()
              }}
              className={`w-full flex items-center justify-between px-space-md py-space-sm rounded-lg font-label-lg text-label-lg transition-all ${
                aktif === item.path
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              <span className="flex items-center gap-space-sm">
                <Icon name={item.icon} className="text-[20px]" />
                <span>{item.label}</span>
              </span>
              {item.badge ? (
                <span className="px-1.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="p-space-md border-t border-surface-variant/30">
          <div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <Icon name="account_circle" className="text-primary text-[20px]" />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none">
                  {adminProfil.nama}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                  {adminProfil.jabatan}
                </span>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="mt-3 inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon name="open_in_new" className="text-[16px]" />
            <span>Portal Publik</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}
