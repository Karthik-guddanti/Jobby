import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }

  return (
    <div className="header-container">
      <h1 className="header-title">Spotify Clone</h1>
      <button
        className="logout-button"
        onClick={handleLogout}
        data-testid="logout-button"
      >
        Logout
      </button>
    </div>
  )
}

export default Header
