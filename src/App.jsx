import { Routes, Route, Navigate } from 'react-router-dom'
import PublicPortal from './pages/PublicPortal.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPortal />} />
      <Route path="/manajemen-pengaduan" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
