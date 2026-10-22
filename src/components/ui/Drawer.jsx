import { useEffect } from 'react'
import Icon from '../Icon.jsx'

/**
 * Drawer.jsx
 * Panel detail yang meluncur dari sisi kanan. Dipakai admin untuk
 * menampilkan rincian tiket pengaduan terpilih.
 */
export default function Drawer({ open, onClose, title, subtitle, badge, children, footer }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const overflowAwal = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflowAwal
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] bg-on-surface/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-xl bg-surface-container-lowest shadow-2xl flex flex-col animate-drawer-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Detail Tiket"
      >
        <header className="p-space-md bg-surface-container-low border-b border-surface-variant/40 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-title-md text-title-md text-on-surface font-bold truncate">{title}</h3>
              {badge ? (
                <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                  {badge}
                </span>
              ) : null}
            </div>
            {subtitle ? (
              <p className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors shrink-0"
            aria-label="Tutup detail"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto p-space-md space-y-space-md">{children}</div>
        {footer ? (
          <footer className="p-space-md bg-surface-container-low border-t border-surface-variant/40 flex items-center justify-end gap-space-sm">
            {footer}
          </footer>
        ) : null}
      </aside>
    </div>
  )
}
