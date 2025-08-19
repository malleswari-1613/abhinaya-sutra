import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Types
type NavLink = {
  path: string;
  label: string;
  exact?: boolean;
};

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
  onNavLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isMenuOpen, 
  toggleMenu, 
  navLinks,
  onNavLinkClick 
}) => {
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    if (isMenuOpen && onNavLinkClick) {
      onNavLinkClick();
    }
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav-menu') && !target.closest('.menu-icon')) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, toggleMenu]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string, exact: boolean = false) => {
    return exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Kala Sharadhi</span>
          <span className="logo-subtext">School of Classical Dance</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li 
              key={link.path} 
              className={`nav-item ${isActive(link.path, link.exact) ? 'active' : ''}`}
            >
              <Link 
                to={link.path} 
                className="nav-links"
                onClick={onNavLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="cta-button">
            <Link to="/contact" className="nav-cta" onClick={onNavLinkClick}>
              Join Us Today
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;