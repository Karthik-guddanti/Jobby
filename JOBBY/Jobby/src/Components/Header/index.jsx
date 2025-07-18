import { Link, useNavigate, useLocation } from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const onLogout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  const isLoginPage = location.pathname === "/login"

  return (
    !isLoginPage && (
      <nav className="header-container">
        <div className="header-left">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </Link>
        </div>

      
        <ul className="header-center">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>

       
        <div className="header-right">
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>
    )
  )
}

export default Header
