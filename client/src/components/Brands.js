import React from 'react';
import { Link } from 'react-router-dom';
import './Brands.css';

function Brands() {
  const brandCategories = [
    {
      category: 'Computers & Laptops',
      icon: '💻',
      image: 'brand-computers.jpg',
      link: '/computers-laptops',
      color: 'blue',
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
      link: '/cctv',
      color: 'purple',
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
      link: '/accessories',
      color: 'green',
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
      link: '/printers',
      color: 'orange',
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
      link: '/software',
      color: 'pink',
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
      category: 'Networking & Servers',
      icon: '🖥️',
      image: 'brand-servers.jpg',
      link: '/networking',
      color: 'teal',
      brands: [
        { name: 'Lenovo', logo: 'lenovo-logo.png' },
        { name: 'HP', logo: 'hp-logo.png' },
        { name: 'Dell', logo: 'dell-logo.png' },
        { name: 'Cisco', logo: 'cisco-logo.png' }
      ]
    }
  ];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-badge">Our Partners</div>
        <h2 className="section-title">Dealing In</h2>
        <p className="section-subtitle">
          We partner with industry-leading brands to provide you with the best quality products and services
        </p>

        <div className="brands-grid">
          {brandCategories.map((item, index) => (
            <Link key={index} to={item.link} className={`brand-category-card card-${item.color}`}>
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
                <div className="view-details">View Details →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="brands-footer">
          <div className="brand-badge">
            <span>✓ Dealing In</span>
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
