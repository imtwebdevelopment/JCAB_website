import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BespokeBuilder.css';

const moodboards = [
  {
    id: 'ram',
    title: 'Ram-Inspired Pole',
    subtitle: 'Strength in Stillness',
    desc: 'Drawing inspiration from the bow and arrow of Lord Ram, this design captures the poise before motion — that quiet tension between strength and serenity. Its graceful arc and linear precision reflect purpose in form, turning devotion into design that stands tall with meaning.',
    img: '/moodboard_ram.png',
    tag: 'Heritage Series',
  },
  {
    id: 'balloon',
    title: 'Balloon-Inspired Pole',
    subtitle: 'Lightness Meets Structure',
    desc: 'Lightness meets structure. Inspired by the effortless buoyancy of balloons, this design celebrates lift, joy, and movement — turning steel into a symbol of playfulness and possibility.',
    img: '/moodboard_balloon.png',
    tag: 'Whimsy Series',
  },
  {
    id: 'geometry',
    title: 'Geometry & Stone-Inspired Pole',
    subtitle: 'Rhythm in Repetition',
    desc: 'Born from the meeting of geometry and nature, this design finds rhythm in repetition and beauty in balance. Its sculpted layers echo the texture of carved stone — grounded, timeless, and quietly powerful — reminding us that even the hardest materials can hold poetry in their form.',
    img: '/moodboard_geometry.png',
    tag: 'Nature Series',
  },
  {
    id: 'hawa',
    title: 'Hawa Mahal-Inspired Pole',
    subtitle: 'Heritage Breathes Again',
    desc: 'An ode to Jaipur\'s wind-carved wonder. This pole reinterprets the rhythmic patterns and royal symmetry of Hawa Mahal, blending heritage with modern minimalism to let tradition breathe again.',
    img: '/moodboard_hawa.png',
    tag: 'Royal Series',
  },
];

const yearTabs = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];

const clients = {
  '2016': [
    { name: 'Bengaluru Metro Rail Corporation', project: 'Station Area Lighting', city: 'Bengaluru' },
    { name: 'Karnataka Urban Infrastructure', project: 'Highway Pole Supply', city: 'Mysuru' },
    { name: 'Prestige Group', project: 'Township Landscape Lighting', city: 'Bengaluru' },
  ],
  '2017': [
    { name: 'Sobha Developers', project: 'Residential Campus', city: 'Bengaluru' },
    { name: 'BBMP', project: 'Street Light Modernisation', city: 'Bengaluru' },
    { name: 'Namma Metro Phase 2', project: 'Platform Illumination', city: 'Bengaluru' },
  ],
  '2018': [
    { name: 'Embassy Group', project: 'IT Park Lighting', city: 'Bengaluru' },
    { name: 'Mantri Developers', project: 'Signature Poles – Mall Campus', city: 'Bengaluru' },
    { name: 'L&T Infrastructure', project: 'Commercial Zone', city: 'Mangaluru' },
  ],
  '2019': [
    { name: 'KIADB Industrial Park', project: 'Factory Zone Lighting', city: 'Dharwad' },
    { name: 'Puravankara Limited', project: 'Bespoke Residential Poles', city: 'Bengaluru' },
    { name: 'GVK BIO', project: 'Campus Architectural Lighting', city: 'Hyderabad' },
  ],
  '2020': [
    { name: 'Manipal Group', project: 'University Campus Poles', city: 'Manipal' },
    { name: 'BESCOM', project: 'Smart Lighting Pilot', city: 'Bengaluru' },
  ],
  '2021': [
    { name: 'National Highway Authority', project: 'NH-275 Pole Refresh', city: 'Karnataka' },
    { name: 'RMZ Corp', project: 'Corporate Park Lighting', city: 'Bengaluru' },
    { name: 'Brigade Group', project: 'Commercial Complex', city: 'Bengaluru' },
  ],
  '2022': [
    { name: 'Mysuru Municipal Corporation', project: 'Heritage Zone Lighting', city: 'Mysuru' },
    { name: 'Intel India Campus', project: 'Bespoke Feature Poles', city: 'Bengaluru' },
    { name: 'Phoenix Marketcity', project: 'Mall Perimeter Lighting', city: 'Bengaluru' },
  ],
};

const certs = [
  { code: 'IS:2713', title: 'Street Light Poles', body: 'Bureau of Indian Standards' },
  { code: 'IS:5', title: 'Colours for Ready Mixed Paints', body: 'BIS Certified Finish' },
  { code: 'IS:209', title: 'Hot-Dip Zinc Coating', body: 'Galvanising Standard' },
  { code: 'CE Mark', title: 'European Conformity', body: 'EU Safety & Compliance' },
  { code: 'MSME', title: 'Micro Enterprise Certified', body: 'Govt. of Karnataka' },
  { code: 'ISO 9001', title: 'Quality Management System', body: 'Marudhar Electricals' },
];

export default function BespokeBuilder() {
  const [activeYear, setActiveYear] = useState('2022');
  const [activeMoodboard, setActiveMoodboard] = useState(null);

  return (
    <div className="bb-page">

      {/* ── Hero ── */}
      <section className="bb-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bb-hero-inner"
        >
          <span className="section-label">Bespoke Poles</span>
          <h1 className="bb-hero-title">
            Our designs are inspired by<br />
            <em>places, people, and the poetry of everyday life.</em>
          </h1>
          <p className="bb-hero-sub">
            Each pole is a collaboration between craft and culture — shaped by the stories of the spaces they illuminate.
          </p>
        </motion.div>
      </section>

      {/* ── Moodboards ── */}
      <section className="bb-moodboards">
        <div className="container">
          <div className="bb-section-header">
            <span className="section-label">Artistic Explorations</span>
            <h2>Visual Moodboards</h2>
            <p>Artistic explorations that capture the essence of our design philosophy.</p>
          </div>

          <div className="bb-grid">
            {moodboards.map((m, i) => (
              <motion.div
                key={m.id}
                className={`bb-card ${i % 2 !== 0 ? 'bb-card--reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="bb-card-img-wrap">
                  <img src={m.img} alt={m.title} className="bb-card-img" />
                  <span className="bb-card-tag">{m.tag}</span>
                </div>
                <div className="bb-card-body">
                  <span className="bb-card-subtitle">{m.subtitle}</span>
                  <h3 className="bb-card-title">{m.title}</h3>
                  <p className="bb-card-desc">{m.desc}</p>
                  <Link to="/contact" className="btn-secondary bb-card-cta">
                    Request This Design →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bb-certs">
        <div className="container">
          <div className="bb-section-header">
            <span className="section-label">Quality Assurance</span>
            <h2>Certifications</h2>
            <p>
              Excellence is never self-proclaimed, it's certified. Accreditations from leading government bodies and
              global agencies reflect the trust we've built. These certifications guarantee that our poles are designed
              with care, tested with rigor, and built to endure.
            </p>
          </div>

          <div className="bb-certs-grid">
            {certs.map((c) => (
              <motion.div
                key={c.code}
                className="bb-cert-card"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bb-cert-code">{c.code}</div>
                <div className="bb-cert-title">{c.title}</div>
                <div className="bb-cert-body">{c.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients by year ── */}
      <section className="bb-clients">
        <div className="container">
          <div className="bb-section-header">
            <span className="section-label">Our Track Record</span>
            <h2>Clients</h2>
            <p>Over the years, we have worked with a diverse set of clients on various projects nationally.</p>
          </div>

          {/* Year tabs */}
          <div className="bb-year-tabs">
            {yearTabs.map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`bb-year-tab ${activeYear === y ? 'active' : ''}`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Client cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="bb-clients-grid"
            >
              {(clients[activeYear] || []).map((cl, idx) => (
                <div key={idx} className="bb-client-card">
                  <div className="bb-client-year-badge">{activeYear}</div>
                  <h4 className="bb-client-name">{cl.name}</h4>
                  <p className="bb-client-project">{cl.project}</p>
                  <span className="bb-client-city">{cl.city}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bb-cta-banner">
        <div className="container">
          <motion.div
            className="bb-cta-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Start Your Project</span>
            <h2>Have a Design in Mind?</h2>
            <p>
              Every great installation begins with a conversation. Share your vision and our engineering team
              will craft a bespoke pole that brings it to life.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Get a Custom Quote</Link>
              <Link to="/products" className="btn-secondary">Browse Catalogue</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
