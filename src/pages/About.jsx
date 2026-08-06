import React from 'react';
import { motion } from 'framer-motion';
import PoleSvg from '../components/PoleSvg';
import './About.css';

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Crafting the Future of Urban Lighting
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JCAB (Marudhar Electricals): Engineered Brilliance from the Logistical Heart of South India
          </motion.p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-text"
            >
              <span className="section-label">Our Story</span>
              <h2>We Don't Just Manufacture Poles, We Craft Stories.</h2>
              <p>
                At JCAB, our success is built on a solid foundation of understanding our clients' requirements in design, functionality, sustainability, and reliability. With functionality and durability at the core, we go beyond the ordinary—breaking monotony and enhancing aesthetics through our innovative urban cityscape range, featuring sleek and elegant conical and tubular lighting solutions.
              </p>
              <p>
                Our vision is to contribute to smarter, more beautiful urban environments by integrating our Make in India products into your projects. At JCAB, we aim to consistently add value, elevate design, and enhance the visual appeal of spaces across the nation.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-visual"
            >
              <PoleSvg model="JCAB-024" height={8000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="about-vision-mission">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="vision-mission-box"
            >
              <h3>Our Vision</h3>
              <p>
                To make JCAB a globally admired organization, while maintaining the highest ethical standards, leveraging our integrated team of dedicated visualizers, designers, and craftsmen to create lighting solutions that captivate and inspire generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vision-mission-box"
            >
              <h3>Our Mission</h3>
              <p>
                Our mission is to redefine outdoor illumination. Through meticulous design, environmentally conscious practices, and cutting-edge innovations, we illuminate spaces with style and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Core Advantages */}
      <section className="about-cards-section">
        <div className="container">
          <div className="flagship-header">
            <span className="section-label">Competitive Edge</span>
            <h2>Why Choose JCAB</h2>
            <p>We leverage advanced logistics and material craftsmanship to offer unparalleled value.</p>
          </div>

          <div className="about-cards-grid">
            <div className="about-card">
              <h3>Location Advantage</h3>
              <p>
                Our state-of-the-art facility in Bangalore, Karnataka, positions JCAB at a key logistical and resource hub. Strategically located near major industrial corridors, we benefit from efficient access to raw materials and seamless nationwide distribution. This translates into lower costs, faster delivery, and superior value for our customers.
              </p>
            </div>

            <div className="about-card">
              <h3>Mastering Materials</h3>
              <p>
                Steel pipes and lighting components are transformed into crafted excellence. Rusted pipes are renewed through high-pressure shot-blasting, while polymer coatings are oven-cured for long-lasting protection. Our fibre-laser machines enable intricate, customizable designs—whether for branding, structure, or aesthetics.
              </p>
            </div>

            <div className="about-card">
              <h3>Design Versatility</h3>
              <p>
                We collaborate with architects, lighting designers, and electrical contractors to integrate light into their projects, ranging from bespoke designs to a wide range of lighting solutions. The entire design, development, and production process is managed in-house to maintain strict quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
