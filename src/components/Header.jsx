import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Header.css';

const navLeft = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/manufacturing', label: 'Manufacturing Unit' },
  { to: '/products', label: 'Products' },
];

const navRight = [
  { to: '/bespoke-poles', label: 'Bespoke Poles' },
  { to: '/spaces', label: 'Spaces' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'Enquiry', isButton: true },
];

const allNav = [...navLeft, ...navRight];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [productsHover, setProductsHover] = useState(false);
  const [activeCategoryHover, setActiveCategoryHover] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, subRes] = await Promise.all([
          fetch(`${API_URL}/api/categories`),
          fetch(`${API_URL}/api/subcategories`)
        ]);
        const catData = await catRes.json();
        const subData = await subRes.json();
        setCategories(catData);
        setSubcategories(subData);
      } catch (error) {
        console.error('Error fetching categories for header:', error);
      }
    };
    fetchData();
  }, [API_URL]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Helper to get subs for a cat
  const getSubcategories = (catId) => {
    return subcategories.filter(sub =>
      (sub.parentCategory?._id || sub.parentCategory) === catId
    );
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Desktop nav */}
      <div className="header-inner">
        {/* Left nav links */}
        <nav className="nav-side nav-left">
          <ul className="nav-menu">
            {navLeft.map(({ to, label, end }) => {
              if (label === 'Products') {
                return (
                  <li
                    key={label}
                    className="nav-item-wrapper dropdown-wrapper"
                    onMouseEnter={() => setProductsHover(true)}
                    onMouseLeave={() => { setProductsHover(false); setActiveCategoryHover(null); }}
                  >
                    <NavLink to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                      {label}
                    </NavLink>
                    <div className={`dropdown-menu ${productsHover ? 'show' : ''}`}>
                      <ul className="dropdown-list">
                        {categories.map(cat => {
                          const subs = getSubcategories(cat._id);
                          const hasSubs = subs.length > 0;
                          return (
                            <li
                              key={cat._id}
                              className={`dropdown-list-item ${hasSubs ? 'has-subs' : ''}`}
                              onMouseEnter={() => setActiveCategoryHover(cat._id)}
                              onMouseLeave={() => setActiveCategoryHover(null)}
                            >
                              <Link to={`/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}`} className="dropdown-link">
                                {cat.name} {hasSubs && <span className="sub-arrow">›</span>}
                              </Link>

                              {hasSubs && (
                                <div className={`sub-dropdown-menu ${activeCategoryHover === cat._id ? 'show' : ''}`}>
                                  <ul className="dropdown-list">
                                    {subs.map(sub => (
                                      <li key={sub._id} className="dropdown-list-item">
                                        <Link to={`/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}/${encodeURIComponent(sub.name.replace(/\s+/g, '-'))}`} className="dropdown-link">
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={label} className="nav-item-wrapper">
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Centred logo */}
        <Link to="/" className="logo-container" onClick={closeMobileMenu}>
          <img src={logoImg} alt="JCAB" className="logo-img" />
        </Link>

        {/* Right nav links */}
        <nav className="nav-side nav-right">
          <ul className="nav-menu">
            {navRight.map(({ to, label, isButton }) => (
              <li key={label}>
                {isButton ? (
                  <NavLink to={to} className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                    {label}
                  </NavLink>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile slide-in nav */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {allNav.map(({ to, label, end, isButton }) => {
            if (label === 'Products') {
              return (
                <li key={label} className="mobile-dropdown-container">
                  <div 
                    className="nav-item" 
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileProductsOpen(!mobileProductsOpen);
                    }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', width: '100%' }}
                  >
                    <span>{label}</span>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s' 
                    }}>
                      ▼
                    </span>
                  </div>
                  {mobileProductsOpen && (
                    <ul className="mobile-sub-menu">
                      {categories.map(cat => {
                        const subs = getSubcategories(cat._id);
                        return (
                          <li key={cat._id}>
                            <Link to={`/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}`} className="mobile-sub-link" onClick={closeMobileMenu}>
                              - {cat.name}
                            </Link>
                            {subs.length > 0 && (
                              <ul className="mobile-nested-sub-menu">
                                {subs.map(sub => (
                                  <li key={sub._id}>
                                    <Link to={`/${encodeURIComponent(cat.name.replace(/\s+/g, '-'))}/${encodeURIComponent(sub.name.replace(/\s+/g, '-'))}`} className="mobile-nested-sub-link" onClick={closeMobileMenu}>
                                      -- {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={label}>
                {isButton ? (
                  <NavLink
                    to={to}
                    className="btn-primary"
                    onClick={closeMobileMenu}
                    style={{ display: 'inline-flex', marginTop: '1rem' }}
                  >
                    {label}
                  </NavLink>
                ) : (
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
