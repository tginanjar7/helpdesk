import Icon from '../Icon.jsx'

/**
 * Stars.jsx
 * Menampilkan deretan ikon bintang (versi filled) untuk nilai rating 0-5.
 */
export default function Stars({ nilai = 0, ukuran = 'text-[14px]', className = '' }) {
  const bulat = Math.round(nilai)

  return (
    <div className={`flex items-center text-primary ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= bulat) {
          return (
            <Icon key={i} name="star" filled className={ukuran} />
          )
        }
        if (i === bulat + 1 && nilai % 1 !== 0) {
          return <Icon key={i} name="star_half" filled className={ukuran} />
        }
        return <Icon key={i} name="star" className={`${ukuran} text-surface-variant`} />
      })}
    </div>
  )
}
