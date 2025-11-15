import React from 'react';
import './ProductPage.css';

function Software() {
  const softwareCategories = [
    {
      title: 'Accounting Software',
      brand: 'Tally',
      logo: '/images/logos/tally.png',
      items: ['TallyPrime', 'Tally.ERP 9', 'TallyPrime Server', 'Multi-User License', 'Annual Renewal', 'Training & Support']
    },
    {
      title: 'Productivity Suite',
      brand: 'Microsoft Office',
      logo: '/images/logos/msoffice.png',
      items: ['Office 2021 Home & Student', 'Office 2021 Home & Business', 'Office Professional Plus', 'Microsoft 365 Subscription', 'Single & Multi-User License']
    },
    {
      title: 'Creative Software',
      brand: 'Adobe',
      logo: '/images/logos/adobe.png',
      items: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'Acrobat Pro DC', 'Creative Cloud']
    },
    {
      title: 'Antivirus Solutions',
      brand: 'Quick Heal, ESET, NPAV',
      logo: '/images/logos/quickheal.png',
      items: ['Quick Heal Antivirus', 'Quick Heal Total Security', 'ESET NOD32', 'ESET Internet Security', 'NPAV Antivirus', '1, 2, 3 Year License']
    }
  ];

  const services = [
    'Software Installation',
    'License Activation',
    'Software Configuration',
    'Data Migration',
    'Training & Support',
    'Annual Renewals',
    'Technical Support',
    'Remote Assistance',
    'Multi-User Setup',
    'Network Installation',
    'Bulk Licensing',
    'AMC Contracts'
  ];

  const osAndUtilities = [
    'Windows 10 & 11',
    'Windows Server',
    'Backup Software',
    'PDF Software',
    'Billing Software',
    'Inventory Management',
    'POS Software',
    'Barcode Software',
    'Data Recovery Tools',
    'System Utilities'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <div className="container">
          <h1 className="page-title">Software Solutions</h1>
          <p className="page-subtitle">Authorized dealer for Tally, Microsoft, Adobe, and leading antivirus software in Bhuj, Kutch. Genuine licenses with full support.</p>
        </div>
      </div>

      <div className="container">
        <section className="software-categories-section">
          <h2>Software We Offer</h2>
          <div className="software-grid">
            {softwareCategories.map((category, index) => (
              <div key={index} className="software-card">
                <div className="software-header">
                  <div className="software-logo">
                    <img src={category.logo} alt={category.brand} />
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p className="brand-name">{category.brand}</p>
                  </div>
                </div>
                <ul className="software-list">
                  {category.items.map((item, idx) => (
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
            <h2>Other Software</h2>
            <div className="list-grid">
              {osAndUtilities.map((item, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
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
          <h2>Why Buy Software From Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h3>100% Genuine</h3>
              <p>Original licenses directly from manufacturers</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Full Support</h3>
              <p>Installation, activation, and technical assistance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📋</div>
              <h3>Proper Documentation</h3>
              <p>Invoice and certificate for all licenses</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <h3>Easy Renewals</h3>
              <p>Hassle-free renewal reminders and process</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Need Software Solutions?</h2>
          <p>Contact us for genuine licenses and installation support</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Contact Us</a>
            <a href="https://wa.me/919825034580?text=Hi, I need software solutions" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Software;
