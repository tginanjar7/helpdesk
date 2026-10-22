/**
 * AdminHeader.jsx
 * Header panel operator: breadcrumb, judul sekansi, indikator sinkronisasi,
 * dan toolbar aksi (periode, ekspor, tambah pengaduan manual).
 */
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'

export default function AdminHeader({ judul, subjudul, aktifLabel }) {
  return (
    <header className="border-b border-surface-variant/30 bg-surface/80 backdrop-blur-md sticky top-0 z-40">
      <div className="p-space-md">
        <nav className="flex items-center gap-1 mb-2">
          <Link
            to="/manajemen-pengaduan"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Admin
          </Link>
          <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
            chevron_right
          </span>
          <span className="font-semibold text-primary">{aktifLabel}</span>
        </nav>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-sm">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{judul}</h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Real-time Sync
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">{subjudul}</p>
        </div>
        <div className="mt-space-md flex flex-wrap items-center gap-space-sm shrink-0">
          <div className="relative">
            <button
              type="button"
              className="h-10 px-space-sm py-2 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-space-xs font-label-lg text-label-lg text-on-surface hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
              <span>Bulan Ini (Mei 2024)</span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_drop_down</span>
            </button>
          </div>
          <button
            type="button"
            className="h-10 px-space-md rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container flex items-center gap-space-xs transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
            <span>Ekspor Rekapitulasi</span>
          </button>
          <button
            type="button"
            className="h-10 px-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container active:scale-[0.98] flex items-center gap-space-xs transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>+ Tambah Pengaduan Manual / Walk-in</span>
          </button>
        </div>
      </div>
    </header>
  )
}
