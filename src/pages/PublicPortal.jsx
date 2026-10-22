import { useEffect, useState } from 'react'
import PublicHeader from '../components/public/PublicHeader.jsx'
import Hero from '../components/public/Hero.jsx'
import StatistikPublik from '../components/public/StatistikPublik.jsx'
import ReportForm from '../components/public/ReportForm.jsx'
import TrackingSection from '../components/public/TrackingSection.jsx'
import ComplaintCenter from '../components/public/ComplaintCenter.jsx'
import AlurPengaduan from '../components/public/AlurPengaduan.jsx'
import FaqAccordion from '../components/public/FaqAccordion.jsx'
import DaruratBanner from '../components/public/DaruratBanner.jsx'
import PublicFooter from '../components/public/PublicFooter.jsx'

/**
 * PublicPortal.jsx
 * Halaman publik portal pengaduan masyarakat. Menggabungkan seluruh
 * section: hero, statistik, formulir, pelacakan, katalog laporan
 * terbuka, alur pengaduan, FAQ, banner darurat, dan footer.
 */
export default function PublicPortal() {
  const [aktif, setAktif] = useState('beranda')
  const [kodeCari, setKodeCari] = useState('TKT-2024-0892')

  useEffect(() => {
    const onNavAktif = (e) => setAktif(e.detail)
    window.addEventListener('nav-aktif', onNavAktif)
    return () => window.removeEventListener('nav-aktif', onNavAktif)
  }, [])

  const onNavigasi = (path) => {
    setAktif(path)
  }

  const cariTiket = () => {
    const el = document.getElementById('lacak-aduan')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <PublicHeader aktif={aktif} onNavigasi={onNavigasi} />

      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col w-full">
          <Hero kodeCari={kodeCari} setKodeCari={setKodeCari} onCariTiket={cariTiket} />
          <StatistikPublik />
          <ReportForm />
          <TrackingSection kodeCari={kodeCari} setKodeCari={setKodeCari} hasilCari={cariTiket} />
          <ComplaintCenter />
          <AlurPengaduan />
          <FaqAccordion />
          <DaruratBanner />
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
