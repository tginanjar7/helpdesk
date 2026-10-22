import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { identitas, navPublic } from '../../data.jsx'
import Icon from '../Icon.jsx'

/**
 * PublicHeader.jsx
 * Header tetap (fixed) portal warga: logo, navigasi utama, dan CTA.
 * Navigasi aktif ditentukan lewat state `aktif` yang dikirim halaman induk
 * sehingga item yang diklik bisa di-scroll ke section terkait.
 */
export default function PublicHeader({ aktif, onNavigasi }) {
  const [menuTerbuka, setMenuTerbuka] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= 120) {
        const label = navPublic.find((n) => n.href === `#${id}`)
        if (label) window.dispatchEvent(new CustomEvent('nav-aktif', { detail: label.path }))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tautanKiri = (
    <div className="flex items-center gap-space-sm">
      <img
        alt="Logo LAPOR-DAERAH"
        className="h-8 w-auto object-contain"
        src={identitas.logo}
      />
      <div className="flex flex-col">
        <span className="font-title-md text-title-md text-on-surface tracking-tight leading-none">
          {identitas.nama}
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
          {identitas.subnama}
        </span>
      </div>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        <a href="#hero" onClick={() => onNavigasi('beranda')} className="shrink-0">
          {tautanKiri}
        </a>

        <nav className="hidden lg:flex items-center gap-space-lg">
          {navPublic.map((item) => (
            <a
              key={item.path}
              href={item.href}
              onClick={() => onNavigasi(item.path)}
              className={`py-2 transition-colors font-label-lg text-label-lg ${
                aktif === item.path
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            to="/manajemen-pengaduan"
            className="hidden sm:inline-flex items-center px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
          >
            Masuk Petugas
          </Link>
          <a
            href="#form-pengaduan"
            onClick={() => onNavigasi('buat-laporan')}
            className="inline-flex items-center px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all"
          >
            Buat Laporan
          </a>
          <img
            alt="Profil warga"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-variant hidden sm:block"
            src={identitas.avatarPetugas}
          />
          <button
            type="button"
            onClick={() => setMenuTerbuka((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Buka menu navigasi"
          >
            <Icon name={menuTerbuka ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {menuTerbuka ? (
        <nav className="lg:hidden bg-surface-container-lowest border-t border-surface-variant/30 px-gutter py-space-sm space-y-1 animate-fade-in">
          {navPublic.map((item) => (
            <a
              key={item.path}
              href={item.href}
              onClick={() => {
                onNavigasi(item.path)
                setMenuTerbuka(false)
              }}
              className={`block px-space-md py-space-sm rounded-lg font-label-lg text-label-lg ${
                aktif === item.path
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/manajemen-pengaduan"
            onClick={() => setMenuTerbuka(false)}
            className="block px-space-md py-space-sm rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container"
          >
            Masuk Petugas
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
