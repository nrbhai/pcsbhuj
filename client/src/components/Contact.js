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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:pioneerbhuj@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setStatus({ 
      type: 'success', 
      message: 'Opening your email client. Please send the message from there.' 
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Contact Us</span>
          <h2 className="section-title">Ready to <span className="text-highlight">Upgrade?</span></h2>
          <p className="section-subtitle">
            Experience the Pioneer difference. Whether you need a single laptop or a complete office infrastructure, 
            our experts are ready to design the perfect solution for you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Send us a message</h3>
            <p>Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="phone">Phone</label>
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
                <label htmlFor="message">Message</label>
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
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Visit Us</h4>
                  <p>
                    Dhatia Falia 3 Ways, Anam Ring Road<br/>
                    Bhuj, Gujarat - 370001
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+919825034580">+91 98250 34580</a><br/>
                    <a href="tel:+919512234395">+91 95122 34395</a>
                  </p>
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
          <h3>Find Us on Google Maps</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.8261234567!2d69.6684465!3d23.2526169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e3f714547545%3A0x34dc6f86bb0a6913!2sPIONEER%20COMPUTER%20SERVICES!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pioneer Computer Services Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
