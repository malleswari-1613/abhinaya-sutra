import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaClock,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

// Types
type NavLink = {
  path: string;
  label: string;
  exact?: boolean;
};

interface FooterProps {
  navLinks?: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ navLinks = [] }) => {
  const currentYear = new Date().getFullYear();
  
  // Default navigation links if none provided
  const defaultNavLinks: NavLink[] = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/classes', label: 'Classes' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const links = navLinks.length > 0 ? navLinks : defaultNavLinks;
  
  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      url: 'https://facebook.com',
      label: 'Facebook'
    },
    { 
      icon: <FaInstagram />, 
      url: 'https://instagram.com',
      label: 'Instagram'
    },
    { 
      icon: <FaYoutube />, 
      url: 'https://youtube.com',
      label: 'YouTube'
    },
  ];
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: '123 Dance Street, Art District, City, 560001',
      url: 'https://maps.google.com'
    },
    {
      icon: <FaPhone />,
      text: '+91 98765 43210',
      url: 'tel:+919876543210'
    },
    {
      icon: <FaEnvelope />,
      text: 'info@kalasharadhi.com',
      url: 'mailto:info@kalasharadhi.com'
    },
    {
      icon: <FaClock />,
      text: 'Mon-Sat: 9:00 AM - 8:00 PM',
      url: ''
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-widget about-widget">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Kala Sharadhi</span>
              <span className="logo-subtext">School of Classical Dance</span>
            </Link>
            <p className="about-text">
              Dedicated to preserving and promoting the rich heritage of Indian classical dance through 
              quality education, performances, and cultural events.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Quick Links</h3>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <FaArrowRight className="link-icon" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Contact Info</h3>
            <ul className="contact-info">
              {contactInfo.map((item, index) => (
                <li key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  {item.url ? (
                    <a href={item.url} className="contact-link">
                      {item.text}
                    </a>
                  ) : (
                    <span className="contact-text">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Newsletter</h3>
            <p>Subscribe to our newsletter for updates on classes, workshops, and performances.</p>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="form-input"
                  required 
                />
                <button type="submit" className="form-button">
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            &copy; {currentYear} Kala Sharadhi. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;