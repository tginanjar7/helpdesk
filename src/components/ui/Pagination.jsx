import Icon from '../Icon.jsx'

/**
 * Pagination.jsx
 * Navigasi halaman sederhana: Previous / nomor halaman / Next.
 */
export default function Pagination({
  halaman,
  totalHalaman,
  onGanti,
  disabled,
}) {
  const daftar = []
  const mulai = Math.max(1, Math.min(halaman - 1, totalHalaman - 2))
  const akhir = Math.min(totalHalaman, mulai + 2)

  for (let i = mulai; i <= akhir; i += 1) daftar.push(i)

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onGanti(halaman - 1)}
        disabled={disabled || halaman <= 1}
        className="h-9 px-3 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-sm text-label-sm flex items-center gap-1 disabled:opacity-50"
      >
        <Icon name="chevron_left" className="text-[16px]" />
        <span>Sebelumnya</span>
      </button>
      <div className="flex items-center gap-1 px-1">
        {daftar.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onGanti(n)}
            className={`w-8 h-8 rounded-lg font-label-sm text-label-sm transition-colors ${
              n === halaman
                ? 'bg-primary text-on-primary font-semibold'
                : 'text-on-surface hover:bg-surface-container'
            }`}
          >
            {n}
          </button>
        ))}
        {totalHalaman > akhir ? (
          <>
            <span className="px-1 text-on-surface-variant text-label-sm">...</span>
            <button
              type="button"
              onClick={() => onGanti(totalHalaman)}
              className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors"
            >
              {totalHalaman}
            </button>
          </>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => onGanti(halaman + 1)}
        disabled={disabled || halaman >= totalHalaman}
        className="h-9 px-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm flex items-center gap-1 disabled:opacity-50"
      >
        <span>Berikutnya</span>
        <Icon name="chevron_right" className="text-[16px]" />
      </button>
    </div>
  )
}
