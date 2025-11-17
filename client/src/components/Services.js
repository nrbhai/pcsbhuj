


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch services from API
    fetch('http://localhost:5000/api/services')
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
        console.log('Loaded services:', mapped);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        // Fallback data if API is not available
        setServices([
          {
            id: 1,
            title: 'Computers & Laptops Service Support',
            shortDescription: 'Expert laptop & desktop repairs — fast, reliable on-site & in-shop service.',
            description: 'Comprehensive repair and maintenance for computers and laptops — hardware diagnostics, component repairs and replacements, operating system and software troubleshooting, performance tuning, and reliable on-site or in-shop support.',
            icon: '💻'
          },
          {
            id: 2,
            title: 'CCTV Camera Solutions',
            shortDescription: 'Professional CCTV installation, monitoring & maintenance.',
            description: 'Complete surveillance systems with installation and maintenance',
            icon: '📹'
          },
          {
            id: 3,
            title: 'Software Solutions',
            shortDescription: 'Genuine software sales, installation and troubleshooting.',
            description: 'Licensed software, custom development, and software support',
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
        <div className="section-badge">What We Offer</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive IT solutions tailored to meet your business and personal technology needs
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            service.id === 1 ? (
              <div
                key={service.id}
                className="service-card clickable"
                onClick={() => navigate('/service-computers-laptops')}
                style={{ cursor: 'pointer' }}
                tabIndex={0}
                role="button"
                aria-label="View Computers & Laptops Service Details"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/service-computers-laptops'); }}
              >
                <div className="service-image">
                  <img src="/images/com-lap.jpg" alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{/computer|laptop/i.test(service.title) ? 'Expert laptop & desktop repairs — fast, reliable on-site & in-shop service.' : getCardDescription(service)}</p>
                </div>
              </div>
            ) : (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  {(() => {
                    let imgSrc = '/images/placeholder-service.svg';
                    if (/cctv/i.test(service.title)) imgSrc = '/images/cctv.jpg';
                    else if (/software/i.test(service.title)) imgSrc = '/images/software.jpg';
                    else if (/server/i.test(service.title)) imgSrc = '/images/server.jpg';
                    else if (/antivirus|security/i.test(service.title)) imgSrc = '/images/antivirus.jpg';
                    // fallback for computers/laptops
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
                </div>
              </div>
            )
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

