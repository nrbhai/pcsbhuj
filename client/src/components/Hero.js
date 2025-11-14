import React, { useEffect, useState } from 'react';
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
    <section className="hero" id="home">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            {rating && (
              <>
                <span className="stars">⭐</span>
                <span>{rating.rating} Rating</span>
                <span className="divider">•</span>
                <span>{rating.totalReviews}+ Reviews</span>
              </>
            )}
          </div>
          
          <h1 className="hero-title">
            <span className="metallic-text">Your Trusted Technology Partner</span>
          </h1>
          
          <p className="hero-description">
            Your one-stop destination for cutting-edge computers, laptops, CCTV systems, 
            and IT solutions in Bhuj. Trusted by 3000+ customers since 1993. 🚀
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get Started
              <span className="arrow">→</span>
            </button>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">3000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Server Installs</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
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
          <div className="hero-features">
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
      </div>
    </section>
  );
}

export default Hero;
