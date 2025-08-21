// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PlaylistDetails from './pages/PlaylistDetails'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute' // ✅ Import the new file

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/playlists/:id"
      element={
        <ProtectedRoute>
          <PlaylistDetails />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
