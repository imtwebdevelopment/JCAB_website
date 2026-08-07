import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutMfgImg from '../assets/about_manufacturing.png';
import aboutArchImg from '../assets/about_architectural.png';

export default function About() {
  return (
    <div className="page-wrapper">
      {/* Dinamoo Style Hero */}
      <section className="about-hero-d">
        <div className="about-hero-content-d">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Crafting the Future of Urban Lighting
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Engineered Brilliance from the Logistical Heart of South India
          </motion.p>
        </div>
      </section>

      {/* Our Story / Who We Are (Split Section) */}
      <section className="dinamoo-section">
        <div className="container">
          <div className="story-grid-d">
            <motion.div 
              className="story-text-d"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="dinamoo-heading">We Don't Just Manufacture Poles, We Craft Stories.</h2>
              <p className="dinamoo-text">
                At JCAB, our success is built on a solid foundation of understanding our clients' requirements in design, functionality, sustainability, and reliability. With functionality and durability at the core, we go beyond the ordinary—breaking monotony and enhancing aesthetics through our innovative urban cityscape range.
              </p>
              <p className="dinamoo-text">
                Our vision is to contribute to smarter, more beautiful urban environments by integrating our Make in India products into your projects. At JCAB, we aim to consistently add value, elevate design, and enhance the visual appeal of spaces across the nation.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutArchImg} alt="Architectural Lighting" className="story-img-d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Full Width Alternating Blocks) */}
      <section className="vm-grid-d">
        {/* Vision - Light Block */}
        <div className="vm-row-d">
          <div className="vm-content-d">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Vision</h2>
              <p>
                To make JCAB a globally admired organization, while maintaining the highest ethical standards, leveraging our integrated team of dedicated visualizers, designers, and craftsmen to create lighting solutions that captivate and inspire generations.
              </p>
            </motion.div>
          </div>
          <div>
            <img src={aboutMfgImg} alt="Manufacturing" className="vm-img-d" />
          </div>
        </div>

        {/* Mission - Dark Block (Reversed) */}
        <div className="vm-row-d reverse">
          <div className="vm-content-d">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Mission</h2>
              <p>
                Our mission is to redefine outdoor illumination. Through meticulous design, environmentally conscious practices, and cutting-edge innovations, we illuminate spaces with style and reliability.
              </p>
            </motion.div>
          </div>
          <div className="about-hero-d" style={{ height: '100%', minHeight: '500px' }}>
            {/* Using the hero image as background for mission visual */}
          </div>
        </div>
      </section>

      {/* Key Core Advantages / Why Choose JCAB */}
      <section className="dinamoo-section dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="dinamoo-heading" style={{ marginBottom: '1rem' }}>Why Choose JCAB</h2>
            <p className="dinamoo-subheading" style={{ color: '#aaa', fontWeight: 400 }}>
              We leverage advanced logistics and material craftsmanship to offer unparalleled value.
            </p>
          </motion.div>

          <div className="advantages-grid-d">
            <motion.div 
              className="adv-card-d"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3>Location Advantage</h3>
              <p>
                Our state-of-the-art facility in Bangalore, Karnataka, positions JCAB at a key logistical and resource hub. Efficient access to raw materials means lower costs, faster delivery, and superior value.
              </p>
            </motion.div>

            <motion.div 
              className="adv-card-d"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Mastering Materials</h3>
              <p>
                Steel pipes and lighting components are transformed into crafted excellence. Our fibre-laser machines enable intricate, customizable designs—whether for branding, structure, or aesthetics.
              </p>
            </motion.div>

            <motion.div 
              className="adv-card-d"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Design Versatility</h3>
              <p>
                We collaborate with architects and designers to integrate light into their projects, managing the entire design, development, and production process in-house to maintain strict quality standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
