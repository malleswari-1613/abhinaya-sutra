import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Classes from './pages/Classes/Classes';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

// Types
type NavLink = {
  path: string;
  label: string;
  exact?: boolean;
};

// Navigation links
const navLinks: NavLink[] = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/classes', label: 'Classes' },
  // { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          navLinks={navLinks} 
          onNavLinkClick={closeMenu} 
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/classes" element={<Classes />} />
            {/* <Route path="/events" element={<Events />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer navLinks={navLinks} />
      </div>
    </Router>
  );
}

export default App;
