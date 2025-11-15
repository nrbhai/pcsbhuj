import React from 'react';
import './ProductPage.css';

const services = [
  { name: 'New Laptop & Desktop Sales', icon: '💻' },
  { name: 'Branded & Assembled PCs', icon: '🖥️' },
  { name: 'Upgrades & Accessories', icon: '🔧' },
  { name: 'OS & Software Installation', icon: '💿' },
  { name: 'Data Backup & Recovery', icon: '💾' },
  { name: 'Annual Maintenance Contracts', icon: '📋' },
  { name: 'Onsite & Remote Support', icon: '🛠️' },
  { name: 'Networking Setup', icon: '🌐' },
  { name: 'Virus & Malware Removal', icon: '🛡️' },
  { name: 'Component Replacement', icon: '🔄' },
];

const repairDetails = [
  { detail: 'Comprehensive diagnostics (hardware & software)', icon: '🔍' },
  { detail: 'Component repair & replacement (motherboard, RAM, HDD/SSD, power supplies)', icon: '⚙️' },
  { detail: 'Screen, keyboard, and hinge repairs for laptops', icon: '📱' },
  { detail: 'Battery replacement and power-related fixes', icon: '🔋' },
  { detail: 'Thermal cleaning and cooling system maintenance', icon: '❄️' },
  { detail: 'Operating system reinstall, driver updates & performance tuning', icon: '🚀' },
  { detail: 'Data recovery and secure backup services', icon: '📁' },
  { detail: 'Virus, malware removal and security hardening', icon: '🔒' },
  { detail: 'On-site, in-shop and remote repair options', icon: '🏠' },
  { detail: 'Genuine parts and warranty-support assistance', icon: '✅' },
];

export default function ServiceComputersLaptops() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="hero-content">
          <h1 className="page-title">Computers & Laptops</h1>
          <p className="page-subtitle">
            Complete solutions for all your computing needs. From sales and upgrades to expert repair and support services.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="repair-section-main">
        <div className="container">
          <h2>Expert Repair & Maintenance</h2>
          <div className="repair-content">
            <div className="repair-description">
              <p>
                Our certified technicians provide fast, reliable repair services for all your computer and laptop needs. 
                We handle everything from minor fixes to complex system overhauls, using genuine parts and industry-standard practices.
              </p>
              <div className="repair-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Fast turnaround</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>Secure & reliable</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span>Expert technicians</span>
                </div>
              </div>
              <a
                className="btn-whatsapp request-repair-btn"
                href="https://wa.me/919825034580?text=Hi%2C%20I%20need%20repair%20service%20for%20my%20computer%20or%20laptop.%20Please%20assist%20with%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Repair Service
              </a>
            </div>
            <div className="repair-list-container">
              <h3>What We Repair</h3>
              <ul className="repair-list">
                {repairDetails.map((item, i) => (
                  <li key={i}>
                    <span className="repair-icon">{item.icon}</span>
                    {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
