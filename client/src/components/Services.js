


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesDark.css';

function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch services from API
    fetch('/api/services')
      .then(response => response.json())
      .then(data => {
        // Remove any 'Accessories' service returned by the API
        const filtered = Array.isArray(data)
          ? data.filter(s => !(s.title && /accessories/i.test(s.title)))
          : data;

        // Ensure a concise shortDescription exists for each service
        const mapped = (Array.isArray(filtered) ? filtered : [])
          .map((s) => {
            const desc = s.description || '';
            let short = s.shortDescription || '';
            if (!short) {
              const firstPeriod = desc.indexOf('. ');
              if (firstPeriod > -1 && firstPeriod < 120) short = desc.slice(0, firstPeriod + 1);
              else if (desc.length > 90) short = desc.slice(0, 87) + '...';
              else short = desc;
            }
            return { ...s, shortDescription: short };
          });

        setServices(mapped);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        // Fallback data if API is not available
        setServices([
          {
            id: 1,
            title: 'Computers & Laptops',
            shortDescription: 'High-performance rigs, sleek ultrabooks, and expert repairs.',
            description: 'Experience peak performance. We provide expert diagnostics, component-level repairs, and premium hardware upgrades for all major brands.',
            icon: '💻'
          },
          {
            id: 2,
            title: 'Smart Surveillance',
            shortDescription: 'Next-gen CCTV systems for 24/7 intelligent security.',
            description: 'Secure what matters most with AI-powered surveillance, remote monitoring, and professional installation.',
            icon: '📹'
          },
          {
            id: 3,
            title: 'Software Suite',
            shortDescription: 'Licensed enterprise software & custom digital solutions.',
            description: 'Empower your workflow with genuine software licenses, custom development, and robust support systems.',
            icon: '💿'
          }
        ]);
      });
  }, []);

  // Helper to produce a short, clear description for service cards
  const getCardDescription = (service) => {
    if (service.shortDescription) return service.shortDescription;
    const text = service.description || '';
    // Prefer first sentence if short
    const firstPeriod = text.indexOf('. ');
    if (firstPeriod > -1 && firstPeriod < 140) return text.slice(0, firstPeriod + 1);
    // Otherwise truncate to ~120 chars
    if (text.length > 120) return text.slice(0, 117) + '...';
    return text;
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">Our <span className="text-highlight">Services</span></h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to meet your business and personal technology needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.id === 1 ? 'clickable' : ''}`}
              onClick={service.id === 1 ? () => navigate('/service-computers-laptops') : undefined}
              style={service.id === 1 ? { cursor: 'pointer' } : {}}
            >
              <div className="service-image">
                {(() => {
                  let imgSrc = '/images/placeholder-service.svg';
                  if (/cctv/i.test(service.title)) imgSrc = '/images/cctv.jpg';
                  else if (/software/i.test(service.title)) imgSrc = '/images/software.jpg';
                  else if (/server/i.test(service.title)) imgSrc = '/images/server.jpg';
                  else if (/antivirus|security/i.test(service.title)) imgSrc = '/images/antivirus.jpg';
                  else if (/computer|laptop/i.test(service.title)) imgSrc = '/images/com-lap.jpg';
                  return (
                    <img src={imgSrc} alt={service.title} />
                  );
                })()}
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{/computer|laptop/i.test(service.title) ? 'Expert laptop & desktop repairs — fast, reliable on-site & in-shop service.' : getCardDescription(service)}</p>
                {service.id === 1 && (
                  <span className="service-link">
                    Learn More <span>→</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose">
            <h3>Why Choose <span className="text-highlight">Hari Tech?</span></h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <div className="feature-content">
                  <h4>30+ Years</h4>
                  <p>Trusted since 1993</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h4>Expert Team</h4>
                  <p>Skilled professionals</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛠️</div>
                <div className="feature-content">
                  <h4>Best Support</h4>
                  <p>Always here for you</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-content">
                  <h4>Fair Pricing</h4>
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
                  <h4>Quick Response</h4>
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

