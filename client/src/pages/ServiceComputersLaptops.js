import React from 'react';
import './ServiceComputers.css';

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
  { detail: 'Component repair & replacement (motherboard, RAM, HDD/SSD)', icon: '⚙️' },
  { detail: 'Screen, keyboard, and hinge repairs for laptops', icon: '📱' },
  { detail: 'Battery replacement and power-related fixes', icon: '🔋' },
  { detail: 'Thermal cleaning and cooling system maintenance', icon: '❄️' },
  { detail: 'Operating system reinstall, driver updates & performance', icon: '🚀' },
  { detail: 'Data recovery and secure backup services', icon: '📁' },
  { detail: 'Virus, malware removal and security hardening', icon: '🔒' },
  { detail: 'On-site, in-shop and remote repair options', icon: '🏠' },
  { detail: 'Genuine parts and warranty-support assistance', icon: '✅' },
];

export default function ServiceComputersLaptops() {
  return (
    <div className="service-page-container">
      {/* Hero Section */}
      <section className="service-hero">
        <img 
          src="/images/hero-service-computers.jpg" 
          alt="Service Background" 
          className="service-hero-bg"
        />
        <div className="service-hero-content">
          <h1 className="service-hero-title">
            Computers & Laptops
          </h1>
          <p className="service-hero-subtitle">
            Experience superior performance with our premium range of devices and expert 
            technical support. Solutions tailored for home, business, and gaming.
          </p>
          <a
             href="https://wa.me/919825034580"
             className="cta-button-whatsapp"
             target="_blank"
             rel="noopener noreferrer"
          >
             Get a Quote <span style={{ fontSize: '1.2em' }}>→</span>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section-premium">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="repair-description-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We offer end-to-end solutions to keep your digital life running smoothly.
            </p>
          </div>
          
          <div className="services-grid-premium">
            {services.map((service, idx) => (
              <div className="service-card-premium" key={idx}>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Section */}
      <section className="repair-section-premium">
        <div className="container">
          <div className="repair-container">
            {/* Left Col: Info */}
            <div className="repair-info">
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                Expert Repair Hub
              </h2>
              <p className="repair-description-text">
                Facing issues with your device? Our certified technicians use advanced diagnostics 
                and genuine parts to bring your technology back to life. We prioritize data security 
                and speed without compromising on quality.
              </p>
              
              <div className="repair-features-grid">
                <div className="feature-box">
                  <span className="feature-box-icon">⚡</span>
                  <div className="feature-box-text">Fast Service</div>
                </div>
                <div className="feature-box">
                  <span className="feature-box-icon">🔒</span>
                  <div className="feature-box-text">Data Secure</div>
                </div>
                <div className="feature-box">
                  <span className="feature-box-icon">✅</span>
                  <div className="feature-box-text">Genuine Parts</div>
                </div>
              </div>

              <a
                className="cta-button-whatsapp"
                href="https://wa.me/919825034580?text=Hi%2C%20I%20need%20repair%20service%20for%20my%20computer%20or%20laptop."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book a Repair</span>
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>

            {/* Right Col: List */}
            <div className="repair-list-wrapper">
              <h3 className="repair-list-header">What We Fix</h3>
              <ul className="repair-list-items">
                {repairDetails.map((item, i) => (
                  <li key={i} className="repair-list-item">
                    <span className="repair-item-icon">{item.icon}</span>
                    <span>{item.detail}</span>
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
