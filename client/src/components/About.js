import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/company-info')
      .then(response => response.json())
      .then(data => setCompanyInfo(data))
      .catch(error => console.error('Error fetching company info:', error));
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-badge">About Us</div>
        <h2 className="section-title">
          <span className="company-name-band">
            <span className="company-name-highlight">Pioneer Computer Services</span>
          </span>
        </h2>
        <p className="section-subtitle">Trusted technology partner serving Bhuj & Kutch since 1993</p>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/office.jpg" 
              alt="Pioneer Computer Services Office"
            />
            <div className="image-overlay">
              <p>📍 Located in Bhuj, Kutch</p>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Serving Bhuj & Kutch Since 1993</h3>
            <p>
              For over three decades, <span className="company-name-highlight">Pioneer Computer Services</span> has been the leading provider of 
              comprehensive IT solutions in Bhuj, Kutch, and surrounding regions. Our journey began 
              in 1993 with a simple mission: to bring cutting-edge technology to businesses and 
              individuals in our community.
            </p>
            <p>
              What sets us apart is our unwavering commitment to exceptional after-sales service. 
              We don't just sell products; we build lasting relationships with our clients by 
              providing ongoing support, maintenance, and consultation to ensure your technology 
              investments deliver maximum value.
            </p>
            <p>
              Our team of experienced professionals stays updated with the latest technology trends 
              and certifications, ensuring that we provide you with the best solutions tailored to 
              your specific needs.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">📅</div>
              <h4>30+ Years</h4>
              <p>of Excellence</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <h4>3000+</h4>
              <p>Customers Supported</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⭐</div>
              <h4>{companyInfo?.rating || '4.8'} Stars</h4>
              <p>Google Rating</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💬</div>
              <h4>{companyInfo?.totalReviews || '125'}+</h4>
              <p>Customer Reviews</p>
            </div>
          </div>

          <div className="stats-section">
            <h3>Our Track Record</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">🖥️</div>
                <div className="stat-content">
                  <h4>100+</h4>
                  <p>Server Installations</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">📹</div>
                <div className="stat-content">
                  <h4>100+</h4>
                  <p>CCTV Installations</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h4>3000+</h4>
                  <p>Total Customers Served</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🏢</div>
                <div className="stat-content">
                  <h4>500+</h4>
                  <p>Business Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
