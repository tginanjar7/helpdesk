/**
 * Icon.jsx
 * Wrapper tipis untuk Material Symbols Outlined agar gaya "filled"
 * (mis. ikon bintang) bisa dipakai tanpa menulis span berulang.
 */
export default function Icon({ name, className = '', filled = false, style }) {
  const gaya = filled ? { fontVariationSettings: "'FILL' 1", ...style } : style

  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={gaya}>
      {name}
    </span>
  )
}
