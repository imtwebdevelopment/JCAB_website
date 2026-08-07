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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Desktop nav */}
      <div className="header-inner">
        {/* Left nav links */}
        <nav className="nav-side nav-left">
          <ul className="nav-menu">
            {navLeft.map(({ to, label, end }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
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
          {allNav.map(({ to, label, end, isButton }) => (
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
          ))}
        </ul>
      </nav>
    </header>
  );
}
