import React from 'react';
import { motion } from 'framer-motion';
import './Manufacturing.css';
import mfgHeroImg from '../assets/mfg_hero_bg.png';
import mfgLaserImg from '../assets/mfg_laser_cutting.png';
import mfgInspirationImg from '../assets/mfg_inspiration.png';

export default function Manufacturing() {
  const processSteps = [
    {
      num: '01',
      title: 'Design & Engineering',
      desc: 'CAD modeling and structural analysis for optimal performance'
    },
    {
      num: '02',
      title: 'Material Selection',
      desc: 'Premium grade aluminum and steel sourced from certified suppliers'
    },
    {
      num: '03',
      title: 'Precision Manufacturing',
      desc: 'State-of-the-art machinery for cutting, bending, and welding'
    },
    {
      num: '04',
      title: 'Quality Control',
      desc: 'Multi-stage testing and inspection at every production phase'
    },
    {
      num: '05',
      title: 'Surface Treatment',
      desc: 'Advanced coating processes for durability and aesthetics'
    },
    {
      num: '06',
      title: 'Final Assembly',
      desc: 'Precision assembly with integrated lighting and smart systems'
    }
  ];

  return (
    <div className="page-wrapper-mfg">
      {/* Dinamoo Style Hero */}
      <section className="mfg-hero-d">
        <div className="mfg-hero-content-d">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Precisely Manufactured Poles
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            State-of-the-art facility combining precision engineering with sustainable manufacturing practices.
          </motion.p>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="dinamoo-section">
        <div className="container">
          <div className="intro-grid-d">
            <motion.div 
              className="intro-text-d"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label-d">Manufacturing Unit</span>
              <h2 className="dinamoo-heading">Capacity Exceeding 50,000 Poles Annually.</h2>
              <p className="dinamoo-text">
                Visit our manufacturing facility to witness the precision, technology, and craftsmanship that goes into every JCAB product. From raw materials to finished poles, experience the journey of innovation.
              </p>
              <p className="dinamoo-text">
                Every JCAB creation is backed by advanced engineering and meticulous craftsmanship — from raw metal to finished masterpiece.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={mfgLaserImg} alt="Laser Cutting Facility" className="intro-img-d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="dinamoo-section dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <span className="section-label-d">Capabilities</span>
            <h2 className="dinamoo-heading">Core Capabilities</h2>
            <p className="dinamoo-text">Every JCAB creation is backed by advanced engineering and meticulous craftsmanship — from raw metal to finished masterpiece.</p>
          </motion.div>

          <div className="capabilities-grid-d">
            <motion.div className="cap-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3>Shot Blasting</h3>
              <p>Advanced surface preparation ensuring optimal coating adhesion and longevity. Automated shot blasting chambers with recycling systems.</p>
            </motion.div>
            <motion.div className="cap-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3>Laser Cutting</h3>
              <p>Precision cutting up to 15 meters with micron-level accuracy. Fiber laser cutting with automated material handling.</p>
            </motion.div>
            <motion.div className="cap-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3>Powder Coating</h3>
              <p>Multi-stage coating process for superior weather resistance. Electrostatic powder coating with UV protection.</p>
            </motion.div>
            <motion.div className="cap-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <h3>CNC Bending</h3>
              <p>Complex geometries achieved through advanced CNC bending technology. 6-axis CNC bending with real-time quality control.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section (Modular Grid) */}
      <section className="dinamoo-section gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
          >
            <span className="section-label-d">Mastering Materials</span>
            <h2 className="dinamoo-heading">Our Process</h2>
            <p className="dinamoo-text">From concept to creation, every step reflects precision and purpose.</p>
          </motion.div>

          <div className="process-grid-d">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="process-card-d"
              >
                <div className="process-num-d">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design First Approach - Parallax Banner */}
      <section className="img-banner-d bg-design bg-dark">
        <div className="container">
          <motion.div className="text-banner-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label-d" style={{color: '#fff'}}>Philosophy</span>
            <h2 className="dinamoo-heading" style={{color: '#fff'}}>Design First Approach</h2>
            <p>
              At JCAB, we believe that lighting poles are not just functional structures but artistic statements that enhance the character of any space. Our bespoke and designer poles combine cutting-edge engineering with sophisticated aesthetics, offering solutions that are as durable as they are beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="dinamoo-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <span className="section-label-d">Future Ready</span>
            <h2 className="dinamoo-heading">Manufacturing Excellence</h2>
            <p className="dinamoo-text">State-of-the-art facility combining precision engineering with sustainable manufacturing practices.</p>
          </motion.div>

          <div className="excellence-grid-d">
            <motion.div className="exc-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4>Solar Integration</h4>
              <p>Advanced photovoltaic systems with intelligent energy management</p>
              <ul>
                <li>High-efficiency panels</li>
                <li>MPPT controllers</li>
                <li>Lithium battery storage</li>
                <li>Weather-resistant design</li>
              </ul>
            </motion.div>
            <motion.div className="exc-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4>Wind Power</h4>
              <p>Hybrid wind-solar solutions for maximum energy generation</p>
              <ul>
                <li>Vertical axis turbines</li>
                <li>Low wind speed operation</li>
                <li>Quiet operation design</li>
                <li>Integrated control systems</li>
              </ul>
            </motion.div>
            <motion.div className="exc-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4>5G/6G Ready</h4>
              <p>Future-ready infrastructure for next-generation connectivity</p>
              <ul>
                <li>Small cell integration</li>
                <li>Fiber optic pre-wiring</li>
                <li>Equipment mounting</li>
                <li>EMI shielding</li>
              </ul>
            </motion.div>
            <motion.div className="exc-card-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4>Smart Controls</h4>
              <p>IoT-enabled monitoring and control systems</p>
              <ul>
                <li>Remote monitoring</li>
                <li>Automated scheduling</li>
                <li>Energy optimization</li>
                <li>Predictive maintenance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R&D Stats - Parallax Banner */}
      <section className="img-banner-d bg-rd bg-dark">
        <div className="container">
          <motion.div className="text-banner-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label-d" style={{color: '#fff'}}>Innovation</span>
            <h2 className="dinamoo-heading" style={{color: '#fff'}}>Research & Development</h2>
            <p>
              Our entire range of products and systems are the results of continuous innovation, and research & development. We can provide competitive products in the market, thanks to our modern and automated production facilities and high-quality standards.
            </p>
          </motion.div>

          <div className="stats-grid-d" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div className="stat-card-d" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3>200+ km/h</h3>
              <p>Wind Load Resistance</p>
            </motion.div>
            <motion.div className="stat-card-d" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3>IP65/IP66</h3>
              <p>IP Protection Rating</p>
            </motion.div>
            <motion.div className="stat-card-d" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3>2000 Hrs</h3>
              <p>QUV UV Resistance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Inspiration */}
      <section className="dinamoo-section gray">
        <div className="container">
          <motion.div className="text-banner-d" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label-d">Trusted</span>
            <h2 className="dinamoo-heading">Certifications</h2>
            <p className="dinamoo-text">
              Excellence is never self-proclaimed, it’s certified. Accreditations from leading government bodies and global agencies reflect the trust we’ve built. For our clients, partners, and the cities we illuminate, these certifications guarantee that JCAB poles are designed with care, tested with rigor, and built to endure.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Inspiration Split Grid */}
      <section className="dinamoo-section">
        <div className="container">
          <div className="intro-grid-d">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={mfgInspirationImg} alt="City street illuminated" className="intro-img-d" />
            </motion.div>
            <motion.div 
              className="intro-text-d"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label-d">Vision</span>
              <h2 className="dinamoo-heading">Inspiration that Balances Function and Beauty</h2>
              <p className="dinamoo-text">
                The city is our canvas, and every pole we create is a masterstroke. JCAB takes inspiration from India’s streets, its skylines, and its timeless ability to blend tradition with progress. Each pole is designed as more than infrastructure; it is a meeting point of strength and elegance, of utility and art.
              </p>
              <p className="dinamoo-text">
                Like sculptures for the urban landscape, our poles rise to illuminate, to guide, and to inspire. They stand not only as structures of light but as symbols of the environments they belong to, resilient, graceful, and alive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
