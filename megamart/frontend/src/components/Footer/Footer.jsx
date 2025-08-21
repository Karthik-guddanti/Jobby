import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} MegaMart. All rights reserved.
    </footer>
  );
}

export default Footer;