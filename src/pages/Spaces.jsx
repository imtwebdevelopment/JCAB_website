import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Spaces.css';

import imgSmartCity from '../assets/space_smart_city.png';
import imgSacred from '../assets/space_sacred.png';
import imgEuropean from '../assets/space_european.png';
import imgModern from '../assets/space_modern.png';
import imgLandscape from '../assets/space_landscape.png';

const spacesData = [
  {
    id: 'smart-cities',
    title: 'Smart Cities',
    desc: "JCAB Architectural Lighting Poles go beyond mere illumination, they’re tailored solutions that define and enhance every space. For smart cities, we offer bespoke pole designs that integrate seamlessly with urban landscapes, combining cutting-edge technology, energy efficiency, and aesthetic elegance. Each pole is customized to match the city’s infrastructure, ensuring uniform lighting, enhanced safety, and a visually cohesive environment. From busy streets to expansive public areas, our poles adapt perfectly, transforming urban spaces into well-lit, intelligently designed, and inviting environments.",
    img: imgSmartCity,
    reverse: false
  },
  {
    id: 'sacred-spaces',
    title: 'Sacred Spaces',
    desc: "JCAB Architectural Lighting Poles for sacred spaces combine bespoke design with reverent functionality. Crafted to harmonize with temples, shrines, and spiritual grounds, each pole enhances the ambiance without overpowering the serenity of the environment. Thoughtfully engineered for soft, glare-free illumination, these poles guide visitors safely while complementing architectural and cultural elements. With custom finishes, tailored heights, and discreet lighting technology, JCAB ensures every sacred space is lit with elegance, safety, and timeless beauty, creating an atmosphere that honors both tradition and modern design.",
    img: imgSacred,
    reverse: true
  },

  {
    id: 'european-theme',
    title: 'European Theme',
    desc: "Every European-inspired street or plaza has a story, and JCAB Architectural Lighting Poles are designed to bring that story to life. Carefully crafted to blend timeless elegance with modern functionality, our bespoke poles complement every architectural detail while providing soft, welcoming illumination. They guide visitors safely, highlight the charm of the surroundings, and create spaces where people naturally gather, linger, and connect. With tailored finishes, refined proportions, and thoughtful design, JCAB turns European-themed spaces into living, breathing environments that feel both inviting and extraordinary.",
    img: imgEuropean,
    reverse: false
  },
  {
    id: 'modern-spaces',
    title: 'Modern Spaces',
    desc: "JCAB Architectural Lighting Poles for modern spaces are designed to enhance urban living with style and intelligence. Sleek, bespoke designs integrate seamlessly with plazas, commercial areas, and contemporary streetscapes, providing glare-free, uniform illumination that balances safety with aesthetic appeal. Every pole is thoughtfully engineered to guide people, highlight architectural lines, and create spaces where communities naturally gather and interact. With refined finishes and adaptable mounting options, JCAB transforms modern spaces into vibrant, inviting environments that feel both sophisticated and alive.",
    img: imgModern,
    reverse: true
  },
  {
    id: 'landscape',
    title: 'Landscape',
    desc: "JCAB Architectural Lighting Poles for landscaped spaces are designed to highlight nature’s beauty while guiding every step. From gardens and parks to open courtyards, each bespoke pole blends seamlessly with greenery, pathways, and water features, creating a welcoming and serene ambiance. Thoughtfully engineered for soft, glare-free illumination, they ensure safety while accentuating the textures, colors, and contours of the landscape. With elegant finishes and adaptable designs, JCAB turns outdoor spaces into living environments where people feel connected, comfortable, and inspired.",
    img: imgLandscape,
    reverse: false
  }
];

export default function Spaces() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">

      <section className="spaces-hero">
        <div className="spaces-hero-content">
          <p>Public Utility Space</p>
          <h1>Garden Area Pole Manufacturer</h1>
        </div>
      </section>

      {spacesData.map((space, idx) => (
        <section key={space.id} className="space-section">
          <div className="container">
            <div className={`space-grid ${space.reverse ? 'reverse' : ''}`}>
              <div className="space-text">
                <h2>{space.title}</h2>
                <p>{space.desc}</p>
                <p>Our Architectural Lighting Poles are more than just street-lights—they’re the sculptors of ambiance and elegance. Designed to harmonize with the architecture around them, these poles ensure a seamless aesthetic that elevates the entire project. Whether it’s creating a premium feel for luxury spaces or maintaining a uniform design language across sprawling developments, our poles adapt flawlessly to your vision.</p>
              </div>
              <div className="space-img-wrapper">
                <img src={space.img} alt={space.title} className="space-img" loading={idx > 0 ? "lazy" : "eager"} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="spaces-cta">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Looking for the perfect Customised or Bespoke Outdoor Lighting solutions for your project? Let us help turn your vision into reality.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
