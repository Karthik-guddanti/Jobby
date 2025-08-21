import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MegaMart</Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`nav-links${open ? " open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
        <li><Link to="/cart" onClick={() => setOpen(false)}>Cart</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;