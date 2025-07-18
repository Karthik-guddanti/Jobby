import { Link } from 'react-router-dom'
import './index.css'

function PageNotFound() {
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-desc">We’re sorry, the page you requested could not be found</p>
      <Link to="/">
        <button className="not-found-btn">Back to Home</button>
      </Link>
    </div>
  )
}

export default PageNotFound
