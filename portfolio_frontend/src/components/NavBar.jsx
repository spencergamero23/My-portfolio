import { Link } from "react-router-dom";
import "../css/Navbar.css"
function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div className="navbar-links">
            <Link to="/contact" className="nav-link" style={{ textDecoration: 'none' }}>Contact Me</Link>
        </div>
    </nav>
}

export default NavBar