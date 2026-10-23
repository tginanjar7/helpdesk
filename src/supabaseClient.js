import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function ambilSemuaPengaduan() {
  const { data, error } = await supabase
    .from('pengaduan')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function tambahPengaduan(payload) {
  const { data, error } = await supabase
    .from('pengaduan')
    .insert([payload])
    .select()
  if (error) throw error
  return data
}

export async function ubahPengaduan(id, payload) {
  const { data, error } = await supabase
    .from('pengaduan')
    .update(payload)
    .eq('id', id)
    .select()
  if (error) throw error
  return data
}

export async function hapusPengaduan(id) {
  const { error } = await supabase
    .from('pengaduan')
    .delete()
    .eq('id', id)
  if (error) throw error
  return true
}
