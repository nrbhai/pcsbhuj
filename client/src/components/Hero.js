
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Hero.css';

function Hero() {
  const [rating, setRating] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const productKeywords = ['Laptop', 'Desktop', 'Accessory', 'Peripheral', 'Networking', 'CCTV', 'Printer', 'Software'];
  const carouselImages = Array.from({ length: 15 }, (_, i) => ({
    src: `/images/pic${i + 1}.jpg`,
    alt: `Pioneer Computer Services - ${productKeywords[i % productKeywords.length]} ${i + 1}`
  }));

  useEffect(() => {
    fetch('/api/company-info')
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
          <title>Pioneer Computer Services - Best Computer Shop in Bhuj, Kutch</title>
          <meta name="description" content="Leading IT solutions provider in Bhuj, Kutch since 1993. Authorized dealer for laptops, CCTV, networking & software." />
        </>
      </Helmet>
      
      <section className="hero" id="home">
        {/* Background Elements */}
        <div className="hero-bg-glow"></div>
        <div className="hero-grid-pattern"></div>

        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                Since 1993 • Trusted IT Partner
              </div>
              
              <h1 className="hero-title">
                Empowering Your <br />
                Digital <span className="text-highlight">Potential</span>
              </h1>
              
              <p className="hero-subtitle">
                Experience the next generation of computing with Bhuj's premium technology partner. 
                From high-performance rigs to enterprise networking—we build the future.
              </p>
              
              <div className="hero-actions">
                <button className="btn-primary" onClick={scrollToContact}>
                  Get Started
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}>
                  Explore Services
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <h4>{rating?.rating || '4.8'}</h4>
                  <p>Google Rating</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <h4>30+</h4>
                  <p>Years Excellence</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <h4>3k+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card-wrapper">
                <div className="visual-card-glow"></div>
                <div className="visual-card">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  ))}
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span>Featured Products</span>
                      <h3>Latest Tech Arrival</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements for 3D feel */}
              <div className="floating-card pos-1">
                <span>⚡</span>
                <div>
                  <strong>Fast</strong>
                  <small>Service</small>
                </div>
              </div>
              <div className="floating-card pos-2">
                <span>🛡️</span>
                <div>
                  <strong>Secure</strong>
                  <small>Solutions</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

