import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navbarLogo from '../img/logo_navbar.jpeg';
import navbarLogoLight from '../img/logo_navbar_light.jpeg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lightPages = ['/sobre-ofa', '/contacto', '/proyectos'];
  const isLightPage = lightPages.includes(location.pathname) || location.pathname.startsWith('/proyectos/');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLightPage ? 'navbar-light' : ''}`}>
      <Link to="/" className="navbar-logo">
        <img src={isLightPage ? navbarLogoLight : navbarLogo} alt="OFA Interiorismo" />
      </Link>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/sobre-ofa" onClick={() => setMenuOpen(false)}>Sobre OFA</Link></li>
        <li><Link to="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;