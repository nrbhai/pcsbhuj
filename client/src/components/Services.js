import React, { useEffect, useState } from 'react';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from API
    fetch('http://localhost:5000/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => {
        console.error('Error fetching services:', error);
        // Fallback data if API is not available
        setServices([
          {
            id: 1,
            title: 'Computers & Laptops',
            description: 'Wide range of desktop computers and laptops from leading brands',
            icon: '💻'
          },
          {
            id: 2,
            title: 'CCTV Camera Solutions',
            description: 'Complete surveillance systems with installation and maintenance',
            icon: '📹'
          },
          {
            id: 3,
            title: 'Computer Accessories',
            description: 'All types of computer peripherals and accessories',
            icon: '🖱️'
          },
          {
            id: 4,
            title: 'Software Solutions',
            description: 'Licensed software and custom software solutions',
            icon: '💿'
          },
          {
            id: 5,
            title: 'Antivirus & Security',
            description: 'Enterprise and personal antivirus solutions',
            icon: '🛡️'
          },
          {
            id: 6,
            title: 'Server Solutions',
            description: 'Complete server setup, maintenance, and support',
            icon: '🖥️'
          }
        ]);
      });
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-badge">What We Offer</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive IT solutions tailored to meet your business and personal technology needs
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img 
                  src={`/images/${service.id === 1 ? 'com-lap' : service.id === 2 ? 'cctv' : service.id === 3 ? 'accessories' : service.id === 4 ? 'software' : service.id === 5 ? 'antivirus' : 'server'}.jpg`}
                  alt={service.title}
                />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose">
          <h3>Why Choose Us?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <div className="feature-content">
                <h4>30+ Years of Experience</h4>
                <p>Trusted since 1993</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <div className="feature-content">
                <h4>Expert Technical Team</h4>
                <p>Skilled professionals</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛠️</div>
              <div className="feature-content">
                <h4>Best After-Sales Support</h4>
                <p>We're always here</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <h4>Competitive Pricing</h4>
                <p>Best value guaranteed</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <div className="feature-content">
                <h4>Genuine Products</h4>
                <p>100% authentic</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h4>Quick Response Time</h4>
                <p>Fast & reliable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
