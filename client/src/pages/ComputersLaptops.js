import React from 'react';
import './ProductPage.css';

function ComputersLaptops() {
  const brands = [
    { name: 'Lenovo', logo: '/images/logos/lenovo.png', description: 'ThinkPad, IdeaPad, Legion Gaming Series' },
    { name: 'HP', logo: '/images/logos/hp.png', description: 'ProBook, EliteBook, Pavilion, Omen Gaming' },
    { name: 'Dell', logo: '/images/logos/dell.png', description: 'Inspiron, Vostro, XPS, Alienware Gaming' },
    { name: 'Asus', logo: '/images/logos/asus.png', description: 'VivoBook, ZenBook, ROG Gaming Series' },
    { name: 'Acer', logo: '/images/logos/acer.png', description: 'Aspire, Swift, Predator Gaming Series' }
  ];

  const services = [
    'New Laptop Sales',
    'Desktop Computers',
    'Gaming PCs & Laptops',
    'Business Workstations',
    'Laptop Repairs & Upgrades',
    'RAM & SSD Upgrades',
    'Screen Replacement',
    'Data Recovery',
    'Software Installation',
    'Windows Installation',
    'Extended Warranty',
    'Trade-in Options'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <div className="container">
          <h1 className="page-title">Computers & Laptops</h1>
          <p className="page-subtitle">Authorized dealer for leading computer brands in Bhuj, Kutch. Get genuine products with warranty and expert support.</p>
        </div>
      </div>

      <div className="container">
        <section className="brands-section">
          <h2>Our Partner Brands</h2>
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

        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="check-icon">✓</span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Authorized Dealer</h3>
              <p>Official partner with genuine products and warranty</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with special offers and discounts</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h3>Expert Support</h3>
              <p>30+ years experience with professional after-sales service</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery across Bhuj and Kutch region</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Looking for the perfect laptop or computer?</h2>
          <p>Visit our showroom or contact us for expert guidance</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Contact Us</a>
            <a href="https://wa.me/919825034580?text=Hi, I'm interested in laptops and computers" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComputersLaptops;
