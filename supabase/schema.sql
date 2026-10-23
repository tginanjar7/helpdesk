-- Schema untuk tabel pengaduan
-- Idempotent: bisa dijalankan berulang tanpa error

CREATE TABLE IF NOT EXISTS public.pengaduan (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nomor_tiket varchar NOT NULL UNIQUE,
  nama_pelapor varchar NOT NULL,
  identitas_pelapor varchar NOT NULL,
  kategori_layanan varchar NOT NULL,
  judul_laporan varchar NOT NULL,
  isi_laporan text NOT NULL,
  lokasi_kejadian varchar NOT NULL,
  lampiran_bukti varchar,
  catatan_tindak_lanjut text,
  status_aduan varchar NOT NULL DEFAULT 'baru',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT pengaduan_status_check CHECK (status_aduan IN ('baru','diverifikasi','diproses','selesai','ditolak'))
);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS pengaduan_set_updated_at ON public.pengaduan;
CREATE TRIGGER pengaduan_set_updated_at
  BEFORE UPDATE ON public.pengaduan
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Row Level Security
ALTER TABLE public.pengaduan ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "pengaduan_select_all" ON public.pengaduan;
CREATE POLICY "pengaduan_select_all" ON public.pengaduan
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "pengaduan_insert_all" ON public.pengaduan;
CREATE POLICY "pengaduan_insert_all" ON public.pengaduan
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "pengaduan_update_all" ON public.pengaduan;
CREATE POLICY "pengaduan_update_all" ON public.pengaduan
  FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "pengaduan_delete_all" ON public.pengaduan;
CREATE POLICY "pengaduan_delete_all" ON public.pengaduan
  FOR DELETE USING (true);

-- Contoh data (5 baris)
INSERT INTO public.pengaduan (nomor_tiket, nama_pelapor, identitas_pelapor, kategori_layanan, judul_laporan, isi_laporan, lokasi_kejadian, lampiran_bukti, catatan_tindak_lanjut, status_aduan)
VALUES
  ('TKT-2026-0001', 'Budi Santoso', '3201012345670001', 'Infrastruktur Jalan', 'Jalan berlubang di depan sekolah', 'Terdapat lubang besar di badan jalan yang membahayakan pengguna jalan.', 'Jl. Mawar No. 12, Kelurahan Sukamaju, Kecamatan Cilodong', 'https://example.com/bukti1.jpg', NULL, 'baru'),
  ('TKT-2026-0002', 'Siti Rahma', '3201012345670002', 'Pelayanan Kesehatan', 'Pelayanan puskesmas lambat', 'Antrean pengobatan di puskesmas sangat panjang dan lambat.', 'Puskesmas Cilodong, Jl. Kenanga No. 5', 'https://example.com/bukti2.jpg', 'Petugas akan menambah loket layanan.', 'diproses'),
  ('TKT-2026-0003', 'Agus Pratama', '198501012010011001', 'Kebersihan Lingkungan', 'Sampah menumpuk di sungai', 'Sampah rumah tangga menumpuk di aliran sungai dekat perumahan.', 'Sungai Ciliwung, RT 03 RW 05, Kelurahan Cilangkap', 'https://example.com/bukti3.jpg', 'Dinas kebersihan akan melakukan pembersihan.', 'diverifikasi'),
  ('TKT-2026-0004', 'Dewi Lestari', '3201012345670004', 'Keamanan dan Ketertiban', 'Lampu jalan mati', 'Lampu penerangan jalan di sepanjang gang mati sejak dua minggu lalu.', 'Gang Melati, Kelurahan Cilangkap, Kecamatan Tapos', 'https://example.com/bukti4.jpg', 'Perbaikan lampu selesai dilakukan.', 'selesai'),
  ('TKT-2026-0005', 'Rahmat Hidayat', '3201012345670005', 'Administrasi Kependudukan', 'KTP belum terbit', 'Pengajuan KTP elektronik belum diproses selama satu bulan.', 'Kantor Kecamatan Cilodong, Jl. Anggrek No. 8', 'https://example.com/bukti5.jpg', 'Permohonan ditolak karena berkas tidak lengkap.', 'ditolak')
ON CONFLICT (nomor_tiket) DO NOTHING;
