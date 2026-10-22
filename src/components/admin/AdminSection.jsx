/**
 * AdminSection.jsx
 * Layout generik untuk sekansi sekansi manajemen pengaduan yang masih
 * dalam bentuk kerangka (stub): judul, subtitul, dan penampung konten.
 */
export default function AdminSection({ judul, subjudul, aktifLabel, children }) {
  return (
    <div className="space-y-space-lg">
      <div className="flex items-center justify-between gap-space-sm">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">{judul}</h2>
          {subjudul ? (
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">{subjudul}</p>
          ) : null}
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
          {aktifLabel}
        </span>
      </div>
      <div className="space-y-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-surface-variant/30">
        {children}
      </div>
    </div>
  )
}
