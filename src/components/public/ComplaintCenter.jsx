import { useMemo, useState } from 'react'
import { laporanTerbuka } from '../../data.jsx'
import Icon from '../Icon.jsx'
import Stars from '../ui/Stars.jsx'
import Pagination from '../ui/Pagination.jsx'

const PER_HALAMAN = 3

/**
 * ComplaintCenter.jsx
 * Katalog laporan warga yang telah diverifikasi. Dilengkapi filter
 * kategori, pengurutan, dan pagination sederhana.
 */
export default function ComplaintCenter() {
  const [kategori, setKategori] = useState('Semua Kategori')
  const [urut, setUrut] = useState('Terbaru')
  const [halaman, setHalaman] = useState(1)

  const daftarKategori = useMemo(() => {
    const set = new Set()
    laporanTerbuka.forEach((l) => l.kategori.forEach((k) => set.add(k)))
    return ['Semua Kategori', ...Array.from(set)]
  }, [])

  const hasil = useMemo(() => {
    let data = laporanTerbuka.filter((l) =>
      kategori === 'Semua Kategori' ? true : l.kategori.includes(kategori)
    )
    if (urut === 'Rating Tertinggi') {
      data = [...data].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    } else if (urut === 'Status Selesai') {
      data = [...data].sort((a, b) => (a.tone === 'selesai' ? -1 : 1) - (b.tone === 'selesai' ? -1 : 1))
    }
    return data
  }, [kategori, urut])

  const totalHalaman = Math.max(1, Math.ceil(hasil.length / PER_HALAMAN))
  const halamanAman = Math.min(halaman, totalHalaman)
  const tampil = hasil.slice((halamanAman - 1) * PER_HALAMAN, halamanAman * PER_HALAMAN)

  const gantiHalaman = (n) => {
    setHalaman(Math.min(Math.max(1, n), totalHalaman))
  }

  return (
    <section className="w-full py-16 bg-surface" id="laporan-terbuka">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              Portal Keterbukaan Informasi
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
              Daftar Pengaduan Terbuka Warga
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Laporan warga yang telah diverifikasi dan disetujui publik demi mewujudkan transparansi tata kelola
              pemerintahan daerah.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Icon
                name="filter_list"
                className="absolute left-3 top-2.5 text-[18px] text-on-surface-variant pointer-events-none"
              />
              <select
                value={kategori}
                onChange={(e) => {
                  setKategori(e.target.value)
                  setHalaman(1)
                }}
                className="pl-9 pr-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface transition-colors appearance-none cursor-pointer"
              >
                {daftarKategori.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Icon
                name="sort"
                className="absolute left-3 top-2.5 text-[18px] text-on-surface-variant pointer-events-none"
              />
              <select
                value={urut}
                onChange={(e) => {
                  setUrut(e.target.value)
                  setHalaman(1)
                }}
                className="pl-9 pr-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface transition-colors appearance-none cursor-pointer"
              >
                <option>Terbaru</option>
                <option>Rating Tertinggi</option>
                <option>Status Selesai</option>
              </select>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tampil.length === 0 ? (
            <div className="md:col-span-3 p-10 rounded-2xl bg-surface-container-lowest shadow-sm text-center">
              <Icon name="search_off" className="text-[32px] text-outline" />
              <p className="font-title-md text-title-md text-on-surface mt-2">Belum ada laporan pada kategori ini</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Silakan pilih kategori lain atau ubah kata kunci pencarian Anda.
              </p>
            </div>
          ) : null}

          {tampil.map((l) => (
            <article
              key={l.kode}
              className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-label-md text-on-surface-variant font-semibold">#{l.kode}</span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                      l.tone === 'selesai'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-secondary-fixed text-on-secondary-fixed-variant'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {l.status}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary transition-colors">
                  {l.judul}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">{l.ringkasan}</p>
                <div className="pt-2 flex flex-wrap gap-2 text-label-sm font-label-sm text-on-surface-variant">
                  {l.kategori.map((k) => (
                    <span key={k} className="px-2 py-0.5 rounded bg-surface-container">
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container space-y-3">
                <div className="flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant font-medium">Instansi:</span>
                  <span className="font-semibold text-on-surface">{l.instansi}</span>
                </div>

                {l.rating ? (
                  <div className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Stars nilai={l.rating} />
                        <span className="ml-1 font-label-sm text-label-sm font-bold text-on-surface">
                          {l.rating}/5
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-outline">{l.peninjau}</span>
                    </div>
                    <p className="font-body-sm text-body-sm italic text-on-surface">
                      &ldquo;{l.ulasan}&rdquo;
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-surface-container-high/60 text-on-surface-variant space-y-1">
                    <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                      <Icon name="hourglass_top" className="text-[16px]" />
                      <span>{l.progres.judul}</span>
                    </div>
                    <p className="font-body-sm text-body-sm">{l.progres.detail}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {totalHalaman > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Halaman {halamanAman} dari {totalHalaman}
            </span>
            <Pagination
              halaman={halamanAman}
              totalHalaman={totalHalaman}
              onGanti={gantiHalaman}
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}
