import React from 'react';
import './ProductPage.css';

function Development() {
  const services = [
    {
      title: 'Custom Software Development',
      icon: '💻',
      items: [
        'Desktop Applications',
        'Business Management Software',
        'Inventory Management Systems',
        'Billing & Accounting Software',
        'School/Hospital Management',
        'CRM Solutions',
        'Custom ERP Solutions'
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      items: [
        'Business Websites',
        'E-commerce Websites',
        'Portfolio Websites',
        'Corporate Websites',
        'Landing Pages',
        'Web Applications',
        'Content Management Systems'
      ]
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      items: [
        'Android Apps',
        'iOS Apps',
        'Cross-Platform Apps',
        'E-commerce Apps',
        'Business Apps',
        'Utility Apps',
        'App Maintenance'
      ]
    }
  ];

  const technologies = [
    'React.js',
    'Node.js',
    'Python',
    'PHP',
    'MySQL',
    'MongoDB',
    'React Native',
    'Flutter',
    'Java',
    'C#/.NET',
    'WordPress',
    'Bootstrap'
  ];

  const features = [
    'Requirement Analysis',
    'UI/UX Design',
    'Database Design',
    'Custom Development',
    'Testing & QA',
    'Deployment',
    'Training & Documentation',
    'Maintenance & Support',
    'Bug Fixes',
    'Feature Updates',
    'Performance Optimization',
    'Security Updates'
  ];

  const projectTypes = [
    'Retail Management Software',
    'Restaurant POS Systems',
    'Hotel Management Systems',
    'School Management Software',
    'Hospital Management Systems',
    'Warehouse Management',
    'Gym Management Software',
    'Real Estate Management',
    'Travel Booking Systems',
    'Attendance Systems',
    'Library Management',
    'Transport Management'
  ];

  return (
    <div className="product-page">
      <div className="product-hero">
        <div className="container">
          <h1 className="page-title">Software Development Services</h1>
          <p className="page-subtitle">Custom software solutions tailored for your business needs. Web, Mobile, and Desktop applications developed in Bhuj, Kutch.</p>
        </div>
      </div>

      <div className="container">
        <section className="dev-services-section">
          <h2>Our Development Services</h2>
          <div className="dev-services-grid">
            {services.map((service, index) => (
              <div key={index} className="dev-service-card">
                <div className="dev-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul className="dev-list">
                  {service.items.map((item, idx) => (
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

        <section className="technologies-section">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="products-services-row">
          <div className="products-column">
            <h2>Development Process</h2>
            <div className="list-grid">
              {features.map((feature, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-column">
            <h2>Sample Projects</h2>
            <div className="list-grid">
              {projectTypes.map((project, index) => (
                <div key={index} className="list-item">
                  <span className="check-icon">✓</span>
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Our Development Services?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Custom Solutions</h3>
              <p>Tailored software designed specifically for your business</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Development</h3>
              <p>Quick turnaround with agile development methodology</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Cost-effective solutions that fit your budget</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h3>Ongoing Support</h3>
              <p>Maintenance and updates after project delivery</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Have a software project in mind?</h2>
          <p>Let's discuss your requirements and build something amazing together</p>
          <div className="cta-buttons">
            <a href="/#contact" className="btn-primary">Get Started</a>
            <a href="https://wa.me/919825034580?text=Hi, I need software development services" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Development;
