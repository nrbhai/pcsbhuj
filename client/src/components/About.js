import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    fetch('/api/company-info')
      .then(response => response.json())
      .then(data => setCompanyInfo(data))
      .catch(error => console.error('Error fetching company info:', error));
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img 
                src="/images/office.jpg" 
                alt="Pioneer Computer Services Office"
              />
            </div>
            <div className="image-overlay-badge">
              <span>📍 Located in Bhuj, Kutch</span>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-badge">Our Legacy</div>
            <h3>Pioneering IT <span className="text-highlight">Excellence</span> in Kutch</h3>
            <p>
              Since 1993, <strong>Pioneer Computer Services</strong> has stood as the benchmark for technology solutions in the region. 
              We don't just supply hardware; we engineer comprehensive IT ecosystems that empower businesses to thrive in a digital age.
            </p>
            <p>
              Our philosophy is rooted in a simple promise: <strong>uncompromising quality and lifetime support.</strong> 
              When you partner with Pioneer, you gain a dedicated technology ally committed to your long-term success.
            </p>

            <div className="highlights-grid">
              <div className="highlight-card">
                <span className="highlight-value">30+</span>
                <span className="highlight-label">Years of Trust</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-value">3000+</span>
                <span className="highlight-label">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <span className="icon">🖥️</span>
            <h4>100+</h4>
            <p>Servers Deployed</p>
          </div>
          <div className="stat-box">
            <span className="icon">📹</span>
            <h4>500+</h4>
            <p>CCTV Projects</p>
          </div>
          <div className="stat-box">
            <span className="icon">⭐</span>
            <h4>{companyInfo?.rating || '4.8'}</h4>
            <p>Google Rating</p>
          </div>
           <div className="stat-box">
            <span className="icon">🏢</span>
            <h4>500+</h4>
            <p>Business Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
