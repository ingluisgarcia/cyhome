import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import QrPage from './pages/QrPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/qr" element={<QrPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
