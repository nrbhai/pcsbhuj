import React from 'react';
import './ProductPage.css';

function Networking() {
  const services = [
    {
      title: 'Network Setup & Installation',
      items: [
        'LAN Setup (Wired & Wireless)',
        'Network Design & Planning',
        'Router & Switch Configuration',
        'WiFi Installation',
        'Network Cable Installation',
        'Network Rack Setup'
      ]
    },
    {
      title: 'Server Solutions',
      items: [
        'Windows Server Installation',
        'Linux Server Setup',
        'Domain Controller Setup',
        'Active Directory Configuration',
        'File Server Setup',
        'Print Server Configuration',
        'Backup Server Setup'
      ]
    },
    {
      title: 'Network Security',
      items: [
        'Firewall Configuration',
        'VPN Setup',
        'Network Security Audit',
        'Access Control',
        'Network Monitoring',
        'Intrusion Detection'
      ]
    }
  ];

  const products = [
    'Network Switches (8, 16, 24, 48 Port)',
    'Managed & Unmanaged Switches',
    'Routers (Home & Enterprise)',
    'WiFi Routers & Access Points',
    'Mesh WiFi Systems',
    'Network Cards (Wired & Wireless)',
    'Network Cables (Cat5e, Cat6, Cat6a)',
    'Patch Panels',
    'Cable Testers',
    'Network Racks & Cabinets',
    'Patch Cords',
    'RJ45 Connectors & Tools'
  ];

  const serverProducts = [
    'Tower Servers',
    'Rack Mount Servers',
    'Blade Servers',
    'Storage Servers (NAS, SAN)',
    'Server RAM & Storage',
    'RAID Controllers',
    'Server Power Supplies',
    'UPS for Servers'
  ];

  const maintenance = [
    'Network AMC',
    'Regular Maintenance',
    'Network Troubleshooting',
    'Performance Optimization',
    'Network Upgrades',
    'Cable Management',
    'Documentation',
    '24/7 Support'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <img 
          src="/images/hero-networking.jpg" 
          alt="Networking Hero" 
          className="hero-bg-image"
        />
        <div className="container">
          <h1 className="page-title">Networking & Server Solutions</h1>
          <p className="page-subtitle">Complete networking infrastructure and server solutions for businesses in Bhuj, Kutch. Setup, configuration, and maintenance.</p>
        </div>
      </div>

      <div className="container">
        <section className="networking-services-section">
          <h2>Our Networking Services</h2>
          <div className="networking-services-grid">
            {services.map((service, index) => (
              <div key={index} className="networking-service-card">
                <h3>{service.title}</h3>
                <ul className="networking-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="products-services-row">
          <div className="products-column">
            <h2>Networking Products</h2>
            <div className="list-grid">
              {products.map((product, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{product}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-column">
            <h2>Server Products</h2>
            <div className="list-grid">
              {serverProducts.map((product, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{product}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="maintenance-section">
          <h2>Maintenance & Support</h2>
          <div className="maintenance-grid">
            {maintenance.map((item, index) => (
              <div key={index} className="maintenance-item">
                <span className="check-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Our Network Services?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🔧</div>
              <h3>Expert Team</h3>
              <p>Certified network engineers with 30+ years experience</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏢</div>
              <h3>Enterprise Grade</h3>
              <p>Professional-grade equipment and solutions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Installation</h3>
              <p>Quick and efficient network deployment</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support for critical infrastructure</p>
            </div>
          </div>
        </section>

        <section className="use-cases-section">
          <h2>Ideal For</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">🏢</div>
              <h3>Offices</h3>
              <p>Complete office networking with file sharing and printing</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🏪</div>
              <h3>Retail Stores</h3>
              <p>POS systems networking with centralized management</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🏫</div>
              <h3>Schools</h3>
              <p>Campus-wide WiFi and lab networking solutions</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">🏭</div>
              <h3>Industries</h3>
              <p>Industrial networking with secure access control</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Need Network or Server Setup?</h2>
          <p>Contact us for a free site survey and consultation</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Request Quote</a>
            <a href="https://wa.me/919825034580?text=Hi, I need networking/server solutions" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Networking;
