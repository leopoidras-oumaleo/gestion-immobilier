import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-logo">🏠</span>
                <span className="navbar-title">ImmoTracker</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/immobilier" className={location.pathname === '/immobilier' ? 'active' : ''}>
                        Immobilier
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;