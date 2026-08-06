import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand block */}
          <div className="footer-brand">
            <img src={logoImg} alt="JCAB" className="footer-logo" />
            <p>
              JCAB designs and manufactures premium architectural and industrial street light poles built to last. From smart cities to premium estates, we illuminate modern India.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/manufacturing">Manufacturing</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/bespoke-poles">Bespoke Poles</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="/products?category=architectural">Architectural Poles</Link></li>
              <li><Link to="/products?category=commercial">Commercial Poles</Link></li>
              <li><Link to="/products?category=brackets">Custom Brackets</Link></li>
              <li><Link to="/products?category=lamps">Head Lamps</Link></li>
              <li><Link to="/products?category=bollards">Bollards</Link></li>
              <li><Link to="/products?category=cast-iron">Cast Iron Series</Link></li>
            </ul>
          </div>

          {/* Find us / Contact */}
          <div className="footer-column">
            <h6>Contact Info</h6>
            <div className="footer-contact-info">
              <div className="contact-block">
                <h7>Corporate Office & Factory</h7>
                <p>
                  Marudhar Electricals<br />
                  Ground Floor No 54 4th Main 4th Cross Near<br />
                  Rudhrappa Garden Ashwath Katte Road<br />
                  Kasturiba Nagar Mysore Road<br />
                  Bengaluru, Karnataka - 560026
                </p>
              </div>
              <div className="contact-block">
                <h7>Business Inquiries</h7>
                <p>Contact: <a href="tel:+917204301107">+91 7204301107</a></p>
                <p>E-Mail: <a href="mailto:marudharelectricals11@gmail.com">marudharelectricals11@gmail.com</a></p>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 JCAB. All Rights Reserved. Manufactured & Distributed by Marudhar Electricals.</p>
          <p>Designed with Precision.</p>
        </div>

        {/* Back to top widget */}
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          <svg className="back-to-top-circle-text" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                back to top ○ back to top ○ back to top ○
              </textPath>
            </text>
          </svg>
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
