import React from 'react';
import { Link } from 'react-router-dom';
import './Brands.css';

function Brands() {
  const brandCategories = [
    {
      category: 'Computers & Laptops',
      description: 'High-performance workstations and daily drivers.',
      link: '/computers-laptops',
      color: 'blue',
      image: '/images/brand-computers.jpg',
      brands: [
        'Lenovo ThinkPad', 'HP Pavilion', 'Dell XPS', 'Asus ROG', 'Acer Nitro'
      ]
    },
    {
      category: 'CCTV Security',
      description: 'Advanced surveillance for complete peace of mind.',
      link: '/cctv',
      color: 'purple',
      image: '/images/brand-cctv.jpg',
      brands: [
        'CP Plus', 'Hikvision', 'Dahua', 'EZVIZ', 'Honeywell'
      ]
    },
    {
      category: 'Peripherals',
      description: 'Premium accessories to boost your productivity.',
      link: '/accessories',
      color: 'green',
      image: '/images/brand-accessories.jpg',
      brands: [
        'Logitech', 'Razer', 'HyperX', 'TVS Gold', 'Microsoft'
      ]
    },
    {
      category: 'Printers & Ink',
      description: 'Reliable printing solutions for home and office.',
      link: '/printers',
      color: 'orange',
      image: '/images/brand-printers.jpg',
      brands: [
        'HP LaserJet', 'Canon Pixma', 'Epson EcoTank', 'Brother'
      ]
    },
    {
      category: 'Software',
      description: 'Genuine licenses for OS, Accounting, and Security.',
      link: '/software',
      color: 'pink',
      image: '/images/brand-software.jpg',
      brands: [
        'Tally Prime', 'Microsoft 365', 'Adobe CC', 'Quick Heal', 'Guardian'
      ]
    },
    {
      category: 'Networking',
      description: 'Enterprise-grade switching and routing hardware.',
      link: '/networking',
      color: 'teal',
      image: '/images/brand-servers.jpg',
      brands: [
        'Cisco', 'D-Link', 'TP-Link', 'Ubiquiti', 'Netgear'
      ]
    }
  ];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <h2 className="section-title">Dealing in <span className="text-highlight">Products</span></h2>
        <p className="section-subtitle">
          We partner with industry-leading brands to provide you with the best quality products and services
        </p>

        <div className="brands-grid">
          {brandCategories.map((item, index) => (
            <Link key={index} to={item.link} className={`brand-category-card card-${item.color}`}>
              <div className="brand-image-container">
                <img src={item.image} alt={item.category} className="brand-card-image" />
              </div>
              <div className="brand-content">
                <h3>{item.category}</h3>
                <p className="category-description">{item.description}</p>
                
                <div className="brand-tags">
                  {item.brands.map((brand, idx) => (
                    <span key={idx} className="brand-tag">
                      {brand}
                    </span>
                  ))}
                </div>
                
                <div className="view-details">Explore Catalog →</div>
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
