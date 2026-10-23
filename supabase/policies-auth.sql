-- Ganti policy tabel pengaduan: hanya pengguna login yang boleh insert/update/delete.
-- Select: izinkan semua orang (data tampil di halaman publik pelacakan aduan).

ALTER TABLE pengaduan ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "pengaduan_select_all" ON pengaduan;
DROP POLICY IF EXISTS "pengaduan_insert_auth" ON pengaduan;
DROP POLICY IF EXISTS "pengaduan_update_auth" ON pengaduan;
DROP POLICY IF EXISTS "pengaduan_delete_auth" ON pengaduan;

CREATE POLICY "pengaduan_select_all"
  ON pengaduan FOR SELECT
  USING (true);

CREATE POLICY "pengaduan_insert_auth"
  ON pengaduan FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "pengaduan_update_auth"
  ON pengaduan FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "pengaduan_delete_auth"
  ON pengaduan FOR DELETE
  TO authenticated
  USING (true);
EOF