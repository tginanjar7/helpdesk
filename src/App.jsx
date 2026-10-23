import { Routes, Route, Navigate } from 'react-router-dom'
import PublicPortal from './pages/PublicPortal.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPortal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/manajemen-pengaduan" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
