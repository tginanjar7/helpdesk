import { useState } from 'react'
import { faq } from '../../data.jsx'
import Icon from '../Icon.jsx'

/**
 * FaqAccordion.jsx
 * Akordeon pertanyaan umum: hanya satu jawaban yang terbuka pada
 * satu waktu agar tampilan tetap ringkas.
 */
export default function FaqAccordion() {
  const [terbuka, setTerbuka] = useState(0)

  return (
    <section className="w-full py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-gutter">
        <div className="text-center mb-10">
          <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            Pertanyaan Umum
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Jawaban atas pertanyaan seputar privasi, estimasi durasi, dan mekanisme pengaduan masyarakat.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((f, i) => {
            const aktif = terbuka === i
            return (
              <div key={f.tanya} className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setTerbuka(aktif ? -1 : i)}
                  aria-expanded={aktif}
                  className="w-full p-5 text-left flex items-center justify-between gap-3 font-title-md text-title-md text-on-surface font-semibold hover:bg-surface-container-low/50 transition-colors"
                >
                  <span>{f.tanya}</span>
                  <Icon
                    name="expand_more"
                    className={`text-[20px] text-outline transition-transform duration-200 shrink-0 ${
                      aktif ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {aktif ? (
                  <div className="p-5 pt-0 text-body-md font-body-md text-on-surface-variant border-t border-surface-container animate-fade-in">
                    {f.jawab}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
