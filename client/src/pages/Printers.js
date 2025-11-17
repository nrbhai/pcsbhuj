import React from 'react';
import './ProductPage.css';

function Printers() {
  const brands = [
    { name: 'HP', logo: '/images/logos/hp.png', description: 'LaserJet, DeskJet, OfficeJet, PageWide' },
    { name: 'Canon', logo: '/images/logos/canon.png', description: 'PIXMA, imageCLASS, maxify' },
    { name: 'Epson', logo: '/images/logos/epson.png', description: 'EcoTank, WorkForce, L-Series' },
    { name: 'Brother', logo: '/images/logos/brother.png', description: 'Laser & Inkjet Printers, Scanners' }
  ];

  const printerTypes = [
    {
      title: 'Inkjet Printers',
      items: ['Home & Office Printing', 'Color Photo Printing', 'All-in-One Functionality', 'Wireless Connectivity', 'Tank & Cartridge Models', 'Low Running Cost']
    },
    {
      title: 'Laser Printers',
      items: ['High-Speed Printing', 'Black & Color Laser', 'Network Printing', 'Duplex (Auto 2-Sided)', 'Large Paper Capacity', 'Low Cost Per Page']
    },
    {
      title: 'All-in-One Printers',
      items: ['Print, Scan, Copy', 'Fax Capability', 'Document Feeder', 'Mobile Printing', 'Cloud Printing', 'ID Card Copy']
    }
  ];

  const services = [
    'New Printer Sales',
    'Printer Installation',
    'Network Setup',
    'Driver Installation',
    'Printer Repairs',
    'Maintenance Service',
    'Toner Refilling',
    'Cartridge Replacement',
    'Spare Parts',
    'Annual Contracts',
    'Rental Options',
    'Trade-in Service'
  ];

  const supplies = [
    'Original Toner Cartridges',
    'Ink Cartridges',
    'Toner Refills',
    'Ink Tank Bottles',
    'Printing Paper (A4, A3)',
    'Photo Paper',
    'Specialty Paper',
    'Maintenance Kits'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <img 
          src="/images/hero-printers.jpg" 
          alt="Printers Hero" 
          className="hero-bg-image"
        />
        <div className="container">
          <h1 className="page-title">Printers & Scanners</h1>
          <p className="page-subtitle">Dealing in HP, Canon, Epson, and Brother printers in Bhuj, Kutch. Sales, service, and supplies all under one roof.</p>
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

        <section className="printer-types-section">
          <h2>Printer Types</h2>
          <div className="types-grid">
            {printerTypes.map((type, index) => (
              <div key={index} className="type-card">
                <h3>{type.title}</h3>
                <ul className="type-list">
                  {type.items.map((item, idx) => (
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
            <h2>Services We Offer</h2>
            <div className="list-grid">
              {services.map((service, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-column">
            <h2>Printing Supplies</h2>
            <div className="list-grid">
              {supplies.map((supply, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{supply}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Authorized Service</h3>
              <p>Official service center for major brands</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔧</div>
              <h3>Expert Technicians</h3>
              <p>30+ years of printer repair experience</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>Fast repair and maintenance turnaround</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Original Supplies</h3>
              <p>Genuine toners and cartridges at best prices</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Need a new printer or service?</h2>
          <p>Visit our showroom or contact us for best deals and service</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Contact Us</a>
            <a href="https://wa.me/919825034580?text=Hi, I need printer sales/service" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Printers;
