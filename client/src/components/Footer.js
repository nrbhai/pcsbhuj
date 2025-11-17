import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="company-name-highlight">Pioneer Computer Services</h3>
            <p>
              Transforming technology into success since 1993. We deliver cutting-edge IT solutions, 
              premium hardware, and unmatched after-sales support to businesses and individuals across Kutch.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/919825034580" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Computers & Laptops</a></li>
              <li><a href="#services">CCTV Solutions</a></li>
              <li><a href="#services">Networking</a></li>
              <li><a href="#services">Software Solutions</a></li>
              <li><a href="#services">After-Sales Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#brands">Our Partners</a></li>
              <li><a href="#contact">Get in Touch</a></li>
              <li><a href="#contact">Visit Our Store</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li><span className="contact-icon">📍</span> Dhatia Falia 3 Ways, Anam Ring Road<br/>Bhuj, Gujarat - 370001</li>
              <li><span className="contact-icon">📞</span> <a href="tel:+919825034580">+91 98250 34580</a><br/><a href="tel:+919512234395">+91 95122 34395</a></li>
              <li><span className="contact-icon">📧</span> <a href="mailto:pioneerbhuj@gmail.com">pioneerbhuj@gmail.com</a></li>
              <li><span className="contact-icon">🕒</span> Mon-Sat: 10:00 AM - 8:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom redesigned-footer-bottom">
          <div className="footer-bottom-content redesigned-footer-bottom-content">
            <span className="copyright">&copy; {currentYear} <span className="company-name-highlight">Pioneer Computer Services</span>. All rights reserved.</span>
            <span className="footer-divider-dot">|</span>
            <span className="tagline">Empowering Kutch with Technology Excellence for Over 30 Years</span>
            <span className="footer-divider-dot">|</span>
            <span className="footer-badges-inline">
              <span className="badge">✓ Dealing In</span>
              <span className="badge">✓ Expert Support</span>
              <span className="badge">✓ Genuine Products</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
