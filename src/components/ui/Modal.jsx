import { useEffect } from 'react'
import Icon from '../Icon.jsx'

/**
 * Modal.jsx
 * Modal generik: klik area gelap atau tombol close untuk menutup,
 * tombol Escape juga menutup, dan scroll body dikunci saat terbuka.
 */
export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  icon,
  children,
  footer,
  maxWidth = 'max-w-2xl',
}) {
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
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`w-full ${maxWidth} bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : 'Dialog'}
      >
        <div className="p-space-md bg-surface-container-low flex items-center justify-between gap-3">
          <div className="flex items-center gap-space-sm">
            {icon ? (
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon name={icon} className="text-[20px]" />
              </div>
            ) : null}
            <div>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">{title}</h3>
              {subtitle ? (
                <p className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Tutup"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>
        <div className="p-space-lg overflow-y-auto space-y-space-md flex-1">{children}</div>
        {footer ? (
          <div className="p-space-md bg-surface-container-low flex items-center justify-end gap-space-sm">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}
