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
      text: 'HSR Layout, Bangalore',
      url: 'https://maps.app.goo.gl/LMXmadcjdaiwL6wf6'
    },
    {
      icon: <FaPhone />,
      text: '+91 7013316050',
      url: 'tel:+917013316050'
    },
    {
      icon: <FaEnvelope />,
      text: 'smalleswari759@gmail.com',
      url: 'mailto:smalleswari759@gmail.com'
    },
    {
      icon: <FaClock />,
      text: 'Tue & Thu: 6:00 PM - 9:00 PM',
      url: ''
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          
          <div className="footer-widget">
            <h3 className="widget-title">Quick Links</h3>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
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

          <div className="footer-widget about-widget">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Abhinaya Sutra</span>
            </Link>
            <p className="about-text">
              Dedicated to preserving and celebrating the rich heritage of Indian classical dance—especially the Pandanallur and Thanjavur banis of Bharatanatyam—through rigorous training, evocative performances, and vibrant cultural events.
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            &copy; {currentYear} Abhinaya Sutra. All rights reserved.
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