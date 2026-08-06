import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in the required fields.');
      return;
    }
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="page-wrapper">
      <div className="container contact-container">
        {/* Hero */}
        <div className="contact-hero">
          <span className="section-label">Get In Touch</span>
          <h1 style={{ marginTop: '10px' }}>Contact Us</h1>
          <p>Have a project in mind or need custom specifications? Connect with our team.</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-info-section">
              <h3>Corporate Entity</h3>
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <span className="contact-detail-lbl">Parent Company</span>
                  <span className="contact-detail-val">Marudhar Electricals</span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-lbl">Office & Factory Address</span>
                  <span className="contact-detail-val">
                    Ground Floor No 54 4th Main 4th Cross Near<br />
                    Rudhrappa Garden Ashwath Katte Road Kasturiba Nagar<br />
                    Mysore Road, Bengaluru - 560026<br />
                    Karnataka, India
                  </span>
                </div>

              </div>
            </div>

            <div className="contact-info-section">
              <h3>Contact Points</h3>
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <span className="contact-detail-lbl">Direct Call</span>
                  <span className="contact-detail-val">
                    <a href="tel:+917204301107">+91 7204301107</a>
                  </span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-lbl">E-Mail Address</span>
                  <span className="contact-detail-val">
                    <a href="mailto:marudharelectricals11@gmail.com">marudharelectricals11@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            <h3>Send Message</h3>
            
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Project RFQ"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      required
                      rows="5"
                      placeholder="Tell us about your project lighting requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem 0' }}
                >
                  <Check size={40} style={{ color: 'var(--success-color)', backgroundColor: 'rgba(34,197,94,0.05)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(34,197,94,0.1)' }} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. A representative from Marudhar Electricals will contact you shortly.</p>
                  <button onClick={handleReset} className="btn-secondary">
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Map Placeholder Block */}
        <div className="contact-map-block">
          <MapPin size={32} style={{ color: 'var(--accent-gold)' }} />
          <h3>Visit Our Facility</h3>
          <p>Ground Floor No 54 4th Main 4th Cross Near Rudhrappa Garden, Mysore Road, Bengaluru</p>
          <a 
            href="https://maps.google.com/?q=Rudhrappa+Garden+Mysore+Road+Bengaluru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
