import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Maximize2, ChevronRight } from 'lucide-react';
import './Home.css';

const flagshipPoles = [
  { model: 'JCAB-021', name: 'Graceful Arc', series: 'JCAB-021', img: '/moodboard_ram.png' },
  { model: 'JCAB-036', name: 'Halo Ring', series: 'JCAB-036', img: '/moodboard_hawa.png' },
  { model: 'JCAB-024', name: 'Sculptural Spiral', series: 'JCAB-024', img: '/moodboard_balloon.png' },
  { model: 'JCAB-005', name: 'Double Arm Post', series: 'JCAB-005', img: '/moodboard_geometry.png' },
];

const statsData = [
  { val: '47+', label: 'Pole Models' },
  { val: '19+', label: 'Cities Served' },
  { val: '150+', label: 'Expert Craftsmen' },
  { val: '1 Lakh', label: 'Sq.Ft Facility' },
];

const productCategories = [
  {
    num: '01',
    tag: 'Category 01',
    title: 'Architectural Light Poles',
    desc: 'Enhance urban aesthetics with architecturally crafted pole lights designed for modern landscapes — combining form, function, and durability.',
    link: '/products?category=architectural',
    img: '/home_prod_arch.png',
    align: 'normal',
  },
  {
    num: '02',
    tag: 'Category 02',
    title: 'Commercial Poles',
    desc: 'IS-compliant galvanized poles engineered for roads, highways, and industrial estates. Built tough, built to last.',
    link: '/products?category=commercial',
    img: '/home_prod_commercial.png',
    align: 'reverse',
  },
  {
    num: '03',
    tag: 'Category 03',
    title: 'Bespoke Heritage Poles',
    desc: "India's first theme-based outdoor lighting — custom carvings shaped by culture, space, and your architectural vision.",
    link: '/bespoke-poles',
    img: '/home_bespoke.png',
    align: 'normal',
  },
];

export default function Home() {
  const [heroTextVisible, setHeroTextVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroTextVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src="/hero_bg.png" alt="JCAB Premium Lighting Poles" className="home-hero-img" />
          <div className="home-hero-overlay" />
        </div>

        <div className="home-hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="home-hero-label"
          >
            <span className="hero-dot" />
            Bringing Design Revolution To India's Street Light Industry
          </motion.div>

          <motion.h1
            className="home-hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Premium Architectural<br />
            <span className="hero-title-accent">Lighting Poles <span style={{ fontFamily: 'Arial, sans-serif' }}>&amp;</span><br />Cables</span>
          </motion.h1>

          <motion.p
            className="home-hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          >
            Bespoke designs crafted with precision engineering for India's evolving urban cityscape, built to last.
          </motion.p>

          <motion.div
            className="home-hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <Link to="/products" className="btn-primary">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/bespoke-poles" className="btn-secondary">
              Bespoke Design
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="home-hero-scroll">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <section className="home-stats">
        <div className="container home-stats-inner">
          {statsData.map((s) => (
            <motion.div
              key={s.val}
              className="home-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="home-stat-val">{s.val}</span>
              <span className="home-stat-lbl">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT INTRO ── */}
      <section className="home-about">
        <div className="container home-about-inner">
          <motion.div
            className="home-about-img-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src="/home_about.png" alt="JCAB Architectural Poles" className="home-about-img" />
            <div className="home-about-img-badge">
              <span className="badge-num">47+</span>
              <span className="badge-lbl">Pole Models</span>
            </div>
          </motion.div>

          <motion.div
            className="home-about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="section-label">We Are JCAB</span>
            <h2>Lighting Crafted<br />for Every Space.</h2>
            <p>
              At JCAB, we design and manufacture bespoke poles and architectural lighting that transform streets, campuses, and cities into illuminated experiences built to last.
            </p>
            <p>
              Say goodbye to catalogue constraints. We offer tailored solutions for builders, architects, and governments — ensuring every project shines with a unique identity.
            </p>
            <div className="home-about-feats">
              {['IS:2713 Certified', 'Hot-Dip Galvanized', 'Custom CAD Design', 'Pan-India Delivery'].map(f => (
                <div key={f} className="home-about-feat">
                  <ChevronRight size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '1rem' }}>
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FLAGSHIP SHOWCASE ── */}
      <section className="home-flagship">
        <div className="container">
          <motion.div
            className="flagship-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Exclusive Range</span>
            <h2>Flagship Collection</h2>
            <p>Custom-engineered lighting poles that blend architecture, craftsmanship, and modern design.</p>
          </motion.div>

          <div className="flagship-grid">
            {flagshipPoles.map((p, i) => (
              <motion.div
                key={p.model}
                className="flagship-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flagship-card-img-wrap">
                  <img src={p.img} alt={p.name} className="flagship-card-img" />
                  <div className="flagship-card-overlay">
                    <Link to={`/products`} className="flagship-card-cta">
                      View Specs <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="flagship-card-info">
                  <h4>{p.name}</h4>
                  <span>{p.series}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn-secondary">View Full Catalogue</Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES (Checkerboard) ── */}
      <section className="home-categories">
        <div className="container">
          <motion.div
            className="categories-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Discover Categories</span>
            <h2>Featured Products</h2>
            <p>At JCAB, we create lighting structures that shape how cities live, move, and feel.</p>
          </motion.div>
        </div>

        {productCategories.map((cat, i) => (
          <motion.div
            key={cat.num}
            className={`cat-row ${cat.align === 'reverse' ? 'cat-row--reverse' : ''}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="cat-img-col">
              <img src={cat.img} alt={cat.title} className="cat-img" />
            </div>
            <div className="cat-text-col">
              <span className="section-label">{cat.tag}</span>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <Link to={cat.link} className="btn-secondary">
                View Series <ArrowRight size={14} />
              </Link>
              <span className="cat-big-num">{cat.num}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── MANUFACTURING SECTION ── */}
      <section className="home-mfg">
        <div className="container home-mfg-inner">
          <motion.div
            className="home-mfg-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="section-label">Bangalore Facility</span>
            <h2>Manufacturing<br />Excellence</h2>
            <p>
              Our state-of-the-art facility in Bengaluru combines precision engineering with sustainable manufacturing. From design to deployment, every stage is guided by innovation and performance.
            </p>
            <div className="mfg-stat-row">
              <div className="mfg-stat"><MapPin size={20} /><span>Bengaluru, KA</span></div>
              <div className="mfg-stat"><Users size={20} /><span>150+ Experts</span></div>
              <div className="mfg-stat"><Maximize2 size={20} /><span>1 Lakh Sq.Ft</span></div>
            </div>
            <Link to="/manufacturing" className="btn-secondary" style={{ marginTop: '1.5rem' }}>
              Explore Manufacturing
            </Link>
          </motion.div>

          <motion.div
            className="home-mfg-img-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src="/home_factory.png" alt="JCAB Manufacturing Facility" className="home-mfg-img" />
            <div className="mfg-img-caption">State-of-the-Art Bengaluru Facility</div>
          </motion.div>
        </div>
      </section>

      {/* ── BESPOKE CTA BANNER ── */}
      <section className="home-bespoke-banner">
        <img src="/home_bespoke.png" alt="Bespoke Poles" className="home-bespoke-bg" />
        <div className="home-bespoke-overlay" />
        <div className="container home-bespoke-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Art & Tradition</span>
            <h2>India's First<br />Theme-Based Outdoor Lighting</h2>
            <p>
              We design and engineer bespoke theme-based lighting systems featuring intricate carvings shaped by culture, space, and your architectural vision.
            </p>
            <Link to="/bespoke-poles" className="btn-primary" style={{ marginTop: '1rem' }}>
              Explore Bespoke Designs <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="home-contact-cta">
        <div className="container home-contact-cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Start Your Project</span>
            <h2>Have a Project in Mind?</h2>
            <p>Connect with our team and let's illuminate your vision together.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/products" className="btn-secondary">Browse Catalogue</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
