import React from 'react';
import './ProductPage.css';

function Accessories() {
  const brands = [
    { name: 'Logitech', logo: '/images/logos/logitech.png', description: 'Keyboards, Mouse, Webcams, Headsets' },
    { name: 'TVS', logo: '/images/logos/tvs.png', description: 'Keyboards, Mouse, Barcode Scanners' },
    { name: 'HP', logo: '/images/logos/hp.png', description: 'Keyboards, Mouse, Headphones' },
    { name: 'Dell', logo: '/images/logos/dell.png', description: 'Keyboards, Mouse, Monitors' }
  ];

  const categories = [
    {
      title: 'Input Devices',
      items: ['Keyboards (Wired & Wireless)', 'Mouse (Optical, Laser, Gaming)', 'Webcams', 'Microphones', 'Graphics Tablets', 'Barcode Scanners']
    },
    {
      title: 'Storage Devices',
      items: ['External Hard Drives', 'USB Flash Drives', 'Memory Cards', 'Card Readers', 'NAS Storage', 'Portable SSDs']
    },
    {
      title: 'Connectivity',
      items: ['USB Hubs', 'USB Cables', 'HDMI Cables', 'VGA Cables', 'Network Cables (Cat5e, Cat6)', 'Adapters & Converters']
    },
    {
      title: 'Audio & Video',
      items: ['Headphones & Headsets', 'Speakers', 'Microphones', 'Webcams', 'HDMI Splitters', 'Audio Cables']
    },
    {
      title: 'Power & Protection',
      items: ['UPS Systems', 'Surge Protectors', 'Power Cables', 'Extension Cords', 'Laptop Chargers', 'Batteries']
    },
    {
      title: 'Others',
      items: ['Laptop Bags', 'Mouse Pads', 'Cleaning Kits', 'Monitor Stands', 'Laptop Cooling Pads', 'Cable Management']
    }
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <div className="container">
          <h1 className="page-title">Computer Accessories</h1>
          <p className="page-subtitle">Complete range of computer peripherals and accessories from leading brands in Bhuj, Kutch.</p>
        </div>
      </div>

      <div className="container">
        <section className="brands-section">
          <h2>Featured Brands</h2>
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

        <section className="categories-section">
          <h2>Product Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category.title}</h3>
                <ul className="category-list">
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

        <section className="why-choose">
          <h2>Why Shop With Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Wide Selection</h3>
              <p>Largest inventory of computer accessories in Bhuj</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h3>Genuine Products</h3>
              <p>100% authentic products with manufacturer warranty</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💵</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with bulk discounts available</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Instant Availability</h3>
              <p>Most items in stock for immediate purchase</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Looking for specific accessories?</h2>
          <p>Visit our showroom for a complete range or contact us for availability</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Contact Us</a>
            <a href="https://wa.me/919825034580?text=Hi, I need computer accessories" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Accessories;
