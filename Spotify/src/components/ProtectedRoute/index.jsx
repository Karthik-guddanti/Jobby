// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('jwt_token') // ✅ Read from cookies
  return token ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
