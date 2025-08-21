import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/spotify-remix-logo-img.png"
        alt="website logo"
        className="sidebar-logo"
        onClick={() => navigate('/')}
      />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;