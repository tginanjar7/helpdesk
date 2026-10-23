import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { signIn } from './auth.js'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email, password)
      const redirect = location.state?.from || '/manajemen-pengaduan'
      navigate(redirect, { replace: true })
    } catch (err) {
      setError('Email atau kata sandi salah.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-gutter">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-surface-container-lowest rounded-xl p-gutter-lg shadow-sm space-y-space-md">
        <h1 className="font-headline-md text-headline-md text-on-surface">Masuk</h1>
        {error && <p className="text-error text-body-sm">{error}</p>}
        <input className="w-full border border-outline-variant rounded-lg px-space-md py-space-sm" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full border border-outline-variant rounded-lg px-space-md py-space-sm" type="password" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button disabled={loading} className="w-full bg-primary text-on-primary rounded-lg py-space-sm font-label-lg">{loading ? 'Memproses...' : 'Masuk'}</button>
        <p className="text-body-sm text-on-surface-variant">Belum punya akun? <Link to="/register" className="text-primary">Daftar</Link></p>
      </form>
    </div>
  )
}