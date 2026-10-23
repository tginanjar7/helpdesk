import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signUp } from './auth.js'

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')
    setLoading(true)
    try {
      await signUp(email, password)
      setInfo('Pendaftaran berhasil. Silakan cek email untuk konfirmasi.')
      setTimeout(() => navigate('/login', { replace: true }), 1500)
    } catch (err) {
      setError('Pendaftaran gagal. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-gutter">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-surface-container-lowest rounded-xl p-gutter-lg shadow-sm space-y-space-md">
        <h1 className="font-headline-md text-headline-md text-on-surface">Daftar</h1>
        {error && <p className="text-error text-body-sm">{error}</p>}
        {info && <p className="text-primary text-body-sm">{info}</p>}
        <input className="w-full border border-outline-variant rounded-lg px-space-md py-space-sm" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full border border-outline-variant rounded-lg px-space-md py-space-sm" type="password" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button disabled={loading} className="w-full bg-primary text-on-primary rounded-lg py-space-sm font-label-lg">{loading ? 'Memproses...' : 'Daftar'}</button>
        <p className="text-body-sm text-on-surface-variant">Sudah punya akun? <Link to="/login" className="text-primary">Masuk</Link></p>
      </form>
    </div>
  )
}