import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const [subcategories, setSubcategories] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const res = await fetch(`${API_URL}/api/subcategories`);
        if (res.ok) {
          const data = await res.json();
          setSubcategories(data);
        }
      } catch (error) {
        console.error('Error fetching subcategories for footer:', error);
      }
    };
    fetchSubcategories();
  }, [API_URL]);

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
              {subcategories.length > 0 ? (
                subcategories.map((subcat) => (
                  <li key={subcat._id}>
                    <Link to={`/${encodeURIComponent(subcat.name.replace(/\s+/g, '-'))}`}>
                      {subcat.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li>Loading categories...</li>
              )}
            </ul>
          </div>

          {/* Find us / Contact */}
          <div className="footer-column">
            <h6>Contact Info</h6>
            <div className="footer-contact-info">
              <div className="contact-block">
                <h6>Corporate Office & Factory</h6>
                <p>
                  Marudhar Electricals<br />
                  Ground Floor No 54 4th Main 4th Cross Near<br />
                  Rudhrappa Garden Ashwath Katte Road<br />
                  Kasturiba Nagar Mysore Road<br />
                  Bengaluru, Karnataka - 560026
                </p>
              </div>
              <div className="contact-block">
                <h6>Business Inquiries</h6>
                <p>Contact: <a href="tel:+917204301107">+91 7204301107</a></p>
                <p>E-Mail: <a href="mailto:info@jcabelectricals.com">info@jcabelectricals.com</a></p>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 JCAB. All Rights Reserved. Manufactured & Distributed by Marudhar Electricals.</p>
          <p>Developed by Innomatrics Technologies</p>
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
