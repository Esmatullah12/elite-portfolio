import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar container">
      <h1 className="navbar-logo">Esmat</h1>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`} to="/news" onClick={() => setIsOpen(false)}>News</Link></li>
          <li><Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
