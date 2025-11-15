import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    
    // If we're not on the homepage, navigate to it first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="logo-image">
            <img 
              src="/images/logo.svg" 
              alt="Pioneer Computer Services Logo"
            />
          </div>
          <div className="logo-text">
            <h1>Pioneer Computer Services</h1>
            <p className="tagline">Since 1993</p>
          </div>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a onClick={() => handleNavClick('about')}>About</a></li>
            <li><a onClick={() => handleNavClick('services')}>Services</a></li>
            <li><a onClick={() => handleNavClick('brands')}>Products</a></li>
            <li><a onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
