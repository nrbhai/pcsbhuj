
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Hero.css';

function Hero() {
  const [rating, setRating] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = Array.from({ length: 15 }, (_, i) => ({
    src: `/images/pic${i + 1}.jpg`,
    alt: `Product ${i + 1}`
  }));

  useEffect(() => {
    fetch('http://localhost:5000/api/company-info')
      .then(response => response.json())
      .then(data => setRating(data))
      .catch(error => console.error('Error fetching company info:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Helmet>
        <>
          <title>Pioneer Computer Services - Best Computer Shop in Bhuj, Kutch | Laptops, CCTV, Networking</title>
          <meta name="description" content="Leading IT solutions provider in Bhuj, Kutch since 1993. Authorized dealer for Lenovo, HP, Dell, Asus laptops, CCTV systems, networking, software solutions. Expert after-sales support." />
          <link rel="canonical" href="https://pioneercomputerservices.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pioneercomputerservices.com/" />
          <meta property="og:title" content="Pioneer Computer Services - Best Computer Shop in Bhuj, Kutch" />
          <meta property="og:description" content="Trusted IT solutions provider since 1993. Laptops, CCTV, Networking, Software. Expert support in Bhuj, Kutch." />
          <meta property="og:image" content="/images/logo.svg" />
          <meta property="og:locale" content="en_IN" />
          <meta property="og:site_name" content="Pioneer Computer Services" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pioneercomputerservices.com/" />
          <meta property="twitter:title" content="Pioneer Computer Services - Best Computer Shop in Bhuj, Kutch" />
          <meta property="twitter:description" content="Trusted IT solutions provider since 1993. Laptops, CCTV, Networking, Software. Expert support in Bhuj, Kutch." />
          <meta property="twitter:image" content="/images/logo.svg" />
        </>
      </Helmet>
      <section className="hero" id="home">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-top-row">
            <span className="company-name-band">
              <span className="company-name-highlight hero-company-name">
                Pioneer Computer Services
              </span>
            </span>
            <div className="hero-title-desc spaced-below">
              <h1 className="hero-title">
                <span className="metallic-text">Your Trusted Technology Partner</span>
              </h1>
              <p className="hero-description">
                Your one-stop destination for cutting-edge computers, laptops, CCTV systems, 
                and IT solutions in Bhuj. Trusted by 3000+ customers since 1993. 🚀
              </p>
              <div className="hero-cta" style={{ margin: '1.5rem 0 0.5rem 0' }}>
                <button className="btn btn-primary" onClick={scrollToContact}>
                  Contact
                  <span className="arrow">→</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">🏆</div>
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">😊</div>
                  <div className="stat-number">3000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">💻</div>
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Server Installs</div>
                </div>
              </div>
              <div className="carousel-wrapper">
                <div className="carousel-container">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-main-row">
            <div className="hero-content">
              {/* Only left column content remains here if needed */}
            </div>
          </div>
          <div className="hero-features hero-features-below">
            <div className="feature-badge">
              <span className="icon">💻</span>
              <span>Premium Laptops</span>
            </div>
            <div className="feature-badge">
              <span className="icon">📹</span>
              <span>CCTV Solutions</span>
            </div>
            <div className="feature-badge">
              <span className="icon">⚡</span>
              <span>Fast Support</span>
            </div>
          </div>
        </div>
	  </section>
    </div>
  );
}

export default Hero;

