/**
 * DashboardRingkasan.jsx
 * Kpi kartu metrik, beban kerja OPD, target SLA, dan riwayat aktivitas
 * untuk sekansi Ringkasan & Metrik.
 */
import { useState } from 'react'
import { adminStatistik, bebanKerjaOpd } from '../../dataAdmin.jsx'
import { targetSlaOpd, riwayatAktivitas } from '../../dataAdminExtra.jsx'
import Icon from '../Icon.jsx'
import Stars from '../ui/Stars.jsx'

export default function DashboardRingkasan() {
  const [pilihSla, setPilihSla] = useState(targetSlaOpd[0].opd)

  const kartuIcon = {
    total: 'inbox',
    baru: 'mark_chat_unread',
    diproses: 'pending_actions',
    selesai: 'task_alt',
    rating: 'stars',
  }

  const chipWarna = (key) => {
    if (key === 'total' || key === 'selesai' || key === 'rating') return 'text-primary bg-primary/10'
    if (key === 'diproses') return 'text-secondary bg-secondary/10'
    return 'text-tertiary bg-tertiary/10'
  }

  return (
    <div className="space-y-space-lg">
      {/* Judul sekansi */}
      <div className="flex items-center justify-between gap-space-sm">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">Ringkasan Metrik</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
            Gambaran umum volume dan kinerja penanganan pengaduan warga.
          </p>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
        {adminStatistik.map((k) => (
          <div
            key={k.key}
            className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{k.label}</span>
              <span className={`p-2 rounded-lg bg-surface-container ${chipWarna(k.key)} material-symbols-outlined text-[20px]`}>
                {kartuIcon[k.key]}
              </span>
            </div>
            <div className="mt-3">
              <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                {k.nilai}{k.satuan ? <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">{k.satuan}</span> : null}
              </div>
              {k.lencana && (
                <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm">
                  {k.lencana.ikon ? (
                    <span className="material-symbols-outlined text-[16px] text-primary">{k.lencana.ikon}</span>
                  ) : null}
                  <span className={`font-semibold ${k.lencana.tone === 'alert' ? 'text-tertiary' : k.lencana.tone === 'netral' ? 'text-on-surface-variant' : 'text-primary'}`}>
                    {k.lencana.nilai}
                  </span>
                  <span className="text-on-surface-variant font-normal">{k.lencana.teks || ''}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* Beban Kerja OPD */}
        <div className="lg:col-span-7 space-y-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Beban Kerja OPD</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Bulan ini</span>
            </div>
            <div className="space-y-3">
              {bebanKerjaOpd.map((b) => (
                <div key={b.nama} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface">{b.nama}</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{b.tiket} tiket</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2">
                    <div className={`${b.warna} rounded-full h-2`} style={{ width: `${b.persen}%` }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{b.persen}% kapasitas</span>
                </div>
              ))}
            </div>
          </div>

          {/* Riwayat Aktivitas */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Riwayat Aktivitas Operator</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Terkini</span>
            </div>
            <div className="space-y-space-sm">
              {riwayatAktivitas.map((a) => (
                <div key={a.waktu} className="flex items-start gap-space-sm">
                  <div className={`p-1.5 rounded-lg ${a.warna === 'text-primary' ? 'bg-primary/10' : a.warna === 'text-secondary' ? 'bg-secondary/10' : 'bg-amber-500/10'} shrink-0`}>
                    <Icon name={a.ikon} className="text-[16px]" style={{ color: a.warna === 'text-primary' ? '#36671c' : a.warna === 'text-secondary' ? '#4c662e' : '#9d3b3d' }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-body-sm text-body-sm text-on-surface">{a.teks}</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{a.waktu}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target SLA OPD */}
        <div className="lg:col-span-5 space-y-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Target SLA OPD</h3>
              <select
                className="text-label-sm text-label-sm text-on-surface bg-transparent font-medium focus:ring-0"
                value={pilihSla}
                onChange={(e) => setPilihSla(e.target.value)}
              >
                {targetSlaOpd.map((s) => (
                  <option key={s.opd} value={s.opd}>{s.opd}</option>
                ))}
              </select>
            </div>
            <div className="space-y-space-sm">
              {targetSlaOpd.map((s) => (
                <div key={s.opd} className={s.opd === pilihSla ? 'ring-1 ring-primary p-space-sm rounded-lg bg-surface-container' : 'p-space-sm rounded-lg bg-surface-container-low'}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-sm text-label-sm text-on-surface">{s.opd}</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{s.target}</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2">
                    <div className={`${s.warna} rounded-full h-2`} style={{ width: `${s.progres}%` }} />
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-1">
                    <span>Realisasi</span>
                    <span>{s.progres}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

