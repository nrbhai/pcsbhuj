import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-badge">Contact Us</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have questions about our products or services? We're here to help! Reach out and we'll respond promptly.</p>

        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Send us a message</h3>
            <p>Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-image">
              <img 
                src="/images/contact.jpg" 
                alt="Contact Pioneer Computer Services"
              />
            </div>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Visit Us</h4>
                  <p>Pioneer Computer Services<br/>
                  Dhatia Falia 3 Ways, Anam Ring Road<br/>
                  Bhuj, Gujarat - 370001</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p><a href="tel:+919825034580">+91 98250 34580</a><br/>
                  <a href="tel:+919512234395">+91 95122 34395</a></p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p><a href="mailto:pioneerbhuj@gmail.com">pioneerbhuj@gmail.com</a></p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday<br/>10:00 AM - 8:30 PM</p>
                </div>
              </div>

              <a 
                href="https://wa.me/919825034580?text=Hello%20Pioneer%20Computer%20Services,%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-button"
              >
                <span className="whatsapp-icon">💬</span>
                <div className="whatsapp-text">
                  <span className="whatsapp-title">Chat on WhatsApp</span>
                  <span className="whatsapp-number">+91 98250 34580</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us on the Map</h3>
          
          <div className="reviews-badge">
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="rating-text">4.8/5</span>
            <span className="review-count">(125+ reviews)</span>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8261234567!2d69.6684465!3d23.2526169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e3f714547545%3A0x34dc6f86bb0a6913!2sPIONEER%20COMPUTER%20SERVICES!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pioneer Computer Services Location"
            ></iframe>
          </div>

          <a 
            href="https://www.google.com/maps/place/PIONEER+COMPUTER+SERVICES/@23.2526169,69.6684465,17z/data=!3m1!4b1!4m6!3m5!1s0x3950e3f714547545:0x34dc6f86bb0a6913!8m2!3d23.252617!4d69.6733174!16s%2Fg%2F1thvwp0x"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
