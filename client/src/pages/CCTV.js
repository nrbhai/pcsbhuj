import React from 'react';
import './ProductPage.css';

function CCTV() {
  const brands = [
    { name: 'CP Plus', logo: '/images/logos/cpplus.png', description: 'HD Cameras, DVR, NVR, IP Cameras' },
    { name: 'Hikvision', logo: '/images/logos/hikvision.png', description: 'Premium Security Solutions, AI Cameras' },
    { name: 'Dahua', logo: '/images/logos/dahua.png', description: 'Advanced Surveillance Systems' }
  ];

  const products = [
    'CCTV Cameras (HD, Full HD, 4K)',
    'Dome Cameras',
    'Bullet Cameras',
    'PTZ Cameras',
    'IP Cameras',
    'Wireless Cameras',
    'DVR (Digital Video Recorder)',
    'NVR (Network Video Recorder)',
    'Hard Disks (Surveillance Grade)',
    'Monitors & Displays',
    'Cables & Connectors',
    'Power Supplies'
  ];

  const services = [
    'Free Site Survey',
    'Professional Installation',
    'Camera Configuration',
    'Mobile App Setup',
    'Remote Viewing Setup',
    'Network Configuration',
    'AMC (Annual Maintenance)',
    'Repair & Service',
    'Camera Relocation',
    'System Upgrades',
    'Training & Support',
    'Warranty Support'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <img 
          src="/images/hero-cctv.jpg" 
          alt="CCTV Hero" 
          className="hero-bg-image"
        />
        <div className="container">
          <h1 className="page-title">CCTV Security Systems</h1>
          <p className="page-subtitle">Complete CCTV surveillance solutions for homes, offices, shops, and industries in Bhuj, Kutch.</p>
        </div>
      </div>

      <div className="container">
        <section className="brands-section">
          <h2>Authorized Brands</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-card">
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="products-services-row">
          <div className="products-column">
            <h2>Products We Offer</h2>
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
            <h2>Our Services</h2>
            <div className="list-grid">
              {services.map((service, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Our CCTV Solutions?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📹</div>
              <h3>High Quality</h3>
              <p>HD, Full HD, and 4K camera options for crystal clear footage</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Remote Access</h3>
              <p>View live footage on your phone from anywhere</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌙</div>
              <h3>Night Vision</h3>
              <p>Advanced IR technology for 24/7 surveillance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💾</div>
              <h3>Long Recording</h3>
              <p>Extended storage with high-capacity surveillance HDDs</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Need CCTV Installation?</h2>
          <p>Get a free site survey and quote for your security needs</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Request Quote</a>
            <a href="https://wa.me/919825034580?text=Hi, I need CCTV installation" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CCTV;
