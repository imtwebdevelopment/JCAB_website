import React from 'react';
import { motion } from 'framer-motion';
import './Manufacturing.css';

export default function Manufacturing() {
  const processSteps = [
    {
      num: '01',
      title: 'Design & Engineering',
      desc: 'CAD modeling and structural analysis for optimal wind resistance and load balance.'
    },
    {
      num: '02',
      title: 'Material Selection',
      desc: 'Premium grade steel pipes and structural raw components sourced from ISO-certified suppliers.'
    },
    {
      num: '03',
      title: 'Precision Cutting & Bending',
      desc: 'State-of-the-art fibre laser cutters for micrometer precision and computer-aided bending.'
    },
    {
      num: '04',
      title: 'Shot-Blasting (Surface Prep)',
      desc: 'Raw steel pipes are subjected to high-pressure shot-blasting to remove rust and prepare for painting.'
    },
    {
      num: '05',
      title: 'Surface Treatment (Curing)',
      desc: 'Double or triple-layered powder coatings baked inside high-temperature curing ovens for a flawless finish.'
    },
    {
      num: '06',
      title: 'Quality Check & Assembly',
      desc: 'Multi-stage quality diagnostics and integration of luminaires, wiring, and smart system chips.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="mfg-hero">
        <div className="container">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Precisely Manufactured Poles
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            With over 1 Lakh+ Sq.Ft of advanced space, JCAB turns raw steel into custom structures built to last.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="mfg-intro-section">
        <div className="container">
          <div className="mfg-intro-grid">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mfg-intro-text"
            >
              <span className="section-label">Production Power</span>
              <h2>Capacity Exceeding 50,000 Poles Annually.</h2>
              <p>
                At JCAB, our biggest strength lies in our dedicated in-house design and development team, supported by advanced engineering, product design, and manufacturing capabilities. This enables us to develop innovative products that are more efficient, reliable, and easier to manufacture, helping our customers accelerate project execution and market delivery.
              </p>
              <p>
                Rusted pipes are renewed through high-pressure shot-blasting, while polymer coatings are oven-cured for long-lasting protection. Our fibre-laser machines enable intricate, customizable designs—whether for branding, structure, or aesthetics—ensuring every pole and lighting fixture reflects precision and purpose.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mfg-intro-visual"
            >
              <img src="/factory_view.png" alt="Factory View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process steps */}
      <section className="mfg-process-section">
        <div className="container">
          <div className="process-header">
            <span className="section-label">Mastering Materials</span>
            <h2>Our Manufacturing Process</h2>
            <p>From concept to creation, every step reflects precision and purpose.</p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="process-step-card"
              >
                <span className="process-step-num">Step {step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
