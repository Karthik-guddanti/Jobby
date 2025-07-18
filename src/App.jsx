import { Routes, Route } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobDetails from './Components/JobDetails'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
     
      <Route path="/login" element={<LoginForm />} />

    
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs/:id"
        element={
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        }
      />

      {/* Catch-all for invalid routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
