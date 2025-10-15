import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-text">
            <span className="pnc">PNC</span>
            <span className="subtitle">Pamantasan ng Cabuyao</span>
          </div>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/courses" 
              className={location.pathname === '/courses' ? 'nav-link active' : 'nav-link'}
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/admission" 
              className={location.pathname === '/admission' ? 'nav-link active' : 'nav-link'}
            >
              Admission
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

