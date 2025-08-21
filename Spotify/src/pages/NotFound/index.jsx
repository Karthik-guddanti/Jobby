import { Link } from 'react-router-dom'
import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>We couldn’t find the page you were looking for.</p>
      <Link className="back-home-btn" to="/">Go to Home</Link>
    </div>
  )
}

export default NotFound
