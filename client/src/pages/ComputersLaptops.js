import React, { useState, useEffect } from 'react';
import './ProductPage.css';

function ComputersLaptops() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const brands = [
    { 
      name: 'Lenovo', 
      logo: '/images/logos/lenovo-logo.png', 
      description: 'ThinkPad, IdeaPad, Legion Gaming Series',
      images: [
        '/images/products/lenovo1.jpg',
        '/images/products/lenovo2.jpg',
        '/images/products/lenovo3.jpg',
        '/images/products/lenovo4.jpg'
      ]
    },
    { 
      name: 'HP', 
      logo: '/images/logos/hp-logo.png', 
      description: 'ProBook, EliteBook, Pavilion, Omen Gaming',
      images: [
        '/images/products/hp1.jpg',
        '/images/products/hp2.jpg',
        '/images/products/hp3.jpg',
        '/images/products/hp4.jpg'
      ]
    },
    { 
      name: 'Dell', 
      logo: '/images/logos/dell-logo.png', 
      description: 'Inspiron, Vostro, XPS, Alienware Gaming',
      images: [
        '/images/products/dell1.jpg',
        '/images/products/dell2.jpg',
        '/images/products/dell3.jpg',
        '/images/products/dell4.jpg'
      ]
    },
    { 
      name: 'Asus', 
      logo: '/images/logos/Asus-logo.png', 
      description: 'VivoBook, ZenBook, ROG Gaming Series',
      images: [
        '/images/products/asus1.jpg',
        '/images/products/asus2.jpg',
        '/images/products/asus3.jpg',
        '/images/products/asus4.jpg'
      ]
    },
    { 
      name: 'Acer', 
      logo: '/images/logos/acer-logo.png', 
      description: 'Aspire, Swift, Predator Gaming Series',
      images: [
        '/images/products/acer1.jpg',
        '/images/products/acer2.jpg',
        '/images/products/acer3.jpg',
        '/images/products/acer4.jpg'
      ]
    }
  ];

  useEffect(() => {
    const initialIndices = {};
    brands.forEach((brand, index) => {
      initialIndices[index] = 0;
    });
    setCurrentImageIndex(initialIndices);

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndices = {};
        brands.forEach((brand, index) => {
          newIndices[index] = (prev[index] + 1) % brand.images.length;
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          <p className="page-subtitle">Dealing in leading computer brands in Bhuj, Kutch. Get genuine products with warranty and expert support.</p>
        </div>
      </div>

      <div className="container">
        <section className="brands-section">
          <h2>Our Partner Brands</h2>
          <div className="brands-grid-carousel">
            {brands.map((brand, index) => (
              <div key={index} className="brand-card-carousel">
                <div className="brand-carousel">
                  <img 
                    src={brand.images[currentImageIndex[index] || 0]} 
                    alt={`${brand.name} product ${currentImageIndex[index] + 1}`}
                    className="carousel-image"
                  />
                  <div className="carousel-dots">
                    {brand.images.map((_, dotIndex) => (
                      <span 
                        key={dotIndex} 
                        className={`dot ${dotIndex === currentImageIndex[index] ? 'active' : ''}`}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className="brand-info">
                  <div className="brand-logo-small">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                </div>
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
              <h3>Dealing In</h3>
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
