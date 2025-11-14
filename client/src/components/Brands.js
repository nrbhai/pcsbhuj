import React from 'react';
import './Brands.css';

function Brands() {
  const brandCategories = [
    {
      category: 'Computers & Laptops',
      icon: '💻',
      image: 'brand-computers.jpg',
      brands: [
        { name: 'Lenovo', logo: 'lenovo-logo.png' },
        { name: 'HP', logo: 'hp-logo.png' },
        { name: 'Dell', logo: 'dell-logo.png' },
        { name: 'Asus', logo: 'asus-logo.png' },
        { name: 'Acer', logo: 'acer-logo.png' }
      ]
    },
    {
      category: 'CCTV Systems',
      icon: '📹',
      image: 'brand-cctv.jpg',
      brands: [
        { name: 'CP Plus', logo: 'cpplus-logo.png' },
        { name: 'Hikvision', logo: 'hikvision-logo.png' },
        { name: 'Dahua', logo: 'dahua-logo.png' }
      ]
    },
    {
      category: 'Accessories',
      icon: '🖱️',
      image: 'brand-accessories.jpg',
      brands: [
        { name: 'Logitech', logo: 'logitech-logo.png' },
        { name: 'TVS', logo: 'tvs-logo.png' },
        { name: 'HP', logo: 'hp-logo.png' },
        { name: 'Dell', logo: 'dell-logo.png' }
      ]
    },
    {
      category: 'Printers',
      icon: '🖨️',
      image: 'brand-printers.jpg',
      brands: [
        { name: 'HP', logo: 'hp-logo.png' },
        { name: 'Canon', logo: 'canon-logo.png' },
        { name: 'Epson', logo: 'epson-logo.png' },
        { name: 'Brother', logo: 'brother-logo.png' }
      ]
    },
    {
      category: 'Softwares',
      icon: '💼',
      image: 'brand-software.jpg',
      brands: [
        { name: 'Tally', logo: 'tally-logo.png' },
        { name: 'Microsoft Office', logo: 'office-logo.png' },
        { name: 'Adobe', logo: 'adobe-logo.png' },
        { name: 'Quick Heal', logo: 'quickheal-logo.png' },
        { name: 'ESET', logo: 'eset-logo.png' },
        { name: 'NPAV', logo: 'npav-logo.png' }
      ]
    },
    {
      category: 'Software Development',
      icon: '💻',
      image: 'brand-development.jpg',
      brands: [
        { name: 'Custom Solutions', logo: 'custom-dev-logo.png' },
        { name: 'Web Development', logo: 'web-dev-logo.png' },
        { name: 'Mobile Apps', logo: 'mobile-dev-logo.png' }
      ]
    },
    {
      category: 'Server OS',
      icon: '🖥️',
      image: 'brand-servers.jpg',
      brands: [
        { name: 'Windows Server', logo: 'windows-logo.png' },
        { name: 'Linux', logo: 'linux-logo.png' }
      ]
    }
  ];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-badge">Our Partners</div>
        <h2 className="section-title">Authorized Dealers</h2>
        <p className="section-subtitle">
          We partner with industry-leading brands to provide you with the best quality products and services
        </p>

        <div className="brands-grid">
          {brandCategories.map((item, index) => (
            <div key={index} className="brand-category-card">
              <div className="brand-image-container">
                <img 
                  src={`/images/${item.image}`} 
                  alt={item.category}
                  className="brand-category-image"
                />
              </div>
              <div className="brand-content">
                <h3>{item.category}</h3>
                <div className="brand-logos">
                  {item.brands.map((brand, idx) => (
                    <div key={idx} className="brand-logo-item" title={brand.name}>
                      <img 
                        src={`/images/logos/${brand.logo}`} 
                        alt={`${brand.name} logo`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="brands-footer">
          <div className="brand-badge">
            <span>✓ Authorized Dealers</span>
          </div>
          <div className="brand-badge">
            <span>✓ Genuine Products</span>
          </div>
          <div className="brand-badge">
            <span>✓ Warranty Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
