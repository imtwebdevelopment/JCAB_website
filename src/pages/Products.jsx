import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, ArrowRight } from 'lucide-react';
import PoleSvg from '../components/PoleSvg';
import './Products.css';

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const categories = [
    { id: 'all', label: 'All Series' },
    { id: 'architectural', label: 'Architectural Poles' },
    { id: 'commercial', label: 'Commercial Poles' },
    { id: 'brackets', label: 'Custom Brackets' },
    { id: 'lamps', label: 'Head Lamps & LEDs' },
    { id: 'bollards', label: 'Bollards' },
    { id: 'cast-iron', label: 'Cast Iron' },
    { id: 'high-mast', label: 'High Mast' }
  ];

  const productsData = [
    // Architectural
    {
      id: 'JCAB-001',
      code: 'JCAB-001',
      name: 'Minimalist T-Bar Pole',
      cat: 'architectural',
      desc: 'Sleek, contemporary design with a horizontal light bar. Ideal for campus walkways and modern avenues.',
      shape: 'Square',
      dims: '100mm / 120mm / 150mm',
      height: '3000mm - 9000mm',
      power: '30W / 40W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-002',
      code: 'JCAB-002',
      name: 'Linear Frame Pole',
      cat: 'architectural',
      desc: 'Refined structure with open-frame sides. Combines high visual interest with targeted downlight.',
      shape: 'Square',
      dims: '100mm / 120mm',
      height: '3000mm - 9000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-003',
      code: 'JCAB-003',
      name: 'Single Arm Pole',
      cat: 'architectural',
      desc: 'Balanced minimalism with a single cantilever outreach. Focused illumination for streets and pathways.',
      shape: 'Round / Conical',
      dims: '76.2mm / 88.9mm / 101.6mm',
      height: '3000mm - 9000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-005',
      code: 'JCAB-005',
      name: 'Double Arm Pole',
      cat: 'architectural',
      desc: 'Symmetric dual arms extending from a central post. Provides balanced double-sided lighting.',
      shape: 'Square',
      dims: '100mm / 120mm / 150mm',
      height: '3000mm - 9000mm',
      power: '30W / 40W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-006',
      code: 'JCAB-006',
      name: 'Y-Shaped Pole',
      cat: 'architectural',
      desc: 'Dual arms angled outward in a striking Y-shaped split. Ideal for architectural squares.',
      shape: 'Square',
      dims: '100mm / 120mm / 150mm',
      height: '3000mm - 9000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-007',
      code: 'JCAB-007',
      name: 'Inclined Spotlight Pole',
      cat: 'architectural',
      desc: 'Angled post arm providing directional focused beam illumination. Perfect for plazas.',
      shape: 'Square',
      dims: '100mm / 120mm',
      height: '3000mm - 6000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-008',
      code: 'JCAB-008',
      name: 'Angular Geometric Pole',
      cat: 'architectural',
      desc: 'Bold, geometric angles adding structural contrast to modern corporate parks.',
      shape: 'Square',
      dims: '100mm / 120mm / 150mm',
      height: '3000mm - 6000mm',
      power: '30W / 50W / 60W / 90W / 120W'
    },
    {
      id: 'JCAB-009',
      code: 'JCAB-009',
      name: 'Zigzag Light Pole',
      cat: 'architectural',
      desc: 'Distinctive sharp zigzag offsets. Combines artistic flair with direct, functional illumination.',
      shape: 'Square',
      dims: '100mm / 120mm',
      height: '3000mm - 6000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-010',
      code: 'JCAB-010',
      name: 'Cross Diamond Pole',
      cat: 'architectural',
      desc: 'Intersecting structural diamond profile. Casts premium architectural shadows.',
      shape: 'Square',
      dims: '100mm / 120mm',
      height: '3000mm - 6000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-013',
      code: 'JCAB-013',
      name: 'Slimline Street Pole',
      cat: 'architectural',
      desc: 'Streamlined single-arm curved round profile. Blends seamlessly into streetscapes.',
      shape: 'Round',
      dims: '76.2mm / 88.9mm / 101.6mm',
      height: '3000mm - 9000mm',
      power: '30W / 50W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-021',
      code: 'JCAB-021',
      name: 'Graceful Arc Pole',
      cat: 'architectural',
      desc: 'Elegant, sweeping curved top post. Brings a luxurious atmosphere to parks and walkways.',
      shape: 'Conical / Round',
      dims: '60mm Top / 140mm Bottom',
      height: '3000mm - 6000mm',
      power: '30W / 45W / 60W / 90W'
    },
    {
      id: 'JCAB-022',
      code: 'JCAB-022',
      name: 'Loop Light Pole',
      cat: 'architectural',
      desc: 'A futuristic looped shape at the top. Incorporates advanced LED module fixtures.',
      shape: 'Round',
      dims: '60.3mm / 76.2mm / 88.9mm',
      height: '3000mm - 6000mm',
      power: '30W / 45W / 60W'
    },
    {
      id: 'JCAB-023',
      code: 'JCAB-023',
      name: 'Curved Cone Pole',
      cat: 'architectural',
      desc: 'Conical profile head gently arching downwards. Perfect for pedestrian pathways.',
      shape: 'Round',
      dims: '42.4mm / 48.3mm / 60.3mm',
      height: '3000mm - 6000mm',
      power: '30W / 45W / 60W'
    },
    {
      id: 'JCAB-024',
      code: 'JCAB-024',
      name: 'Sculptural Spiral Pole',
      cat: 'architectural',
      desc: 'A gorgeous twisted spiral structure combining functional lighting and street art.',
      shape: 'Round (Design Pole)',
      dims: '48.3mm / 60.3mm / 76.2mm',
      height: '3000mm - 6000mm',
      power: '30W / 40W / 60W / 100W / 120W'
    },
    {
      id: 'JCAB-026',
      code: 'JCAB-026',
      name: 'Lattice Glow Pole',
      cat: 'architectural',
      desc: 'Features detailed, hollow lattice cutouts reflecting a decorative background glow.',
      shape: 'Square',
      dims: '100mm / 120mm / 150mm',
      height: '3000mm - 6000mm',
      power: '30W / 45W / 60W'
    },
    {
      id: 'JCAB-036',
      code: 'JCAB-036',
      name: 'Halo Ring Light Pole',
      cat: 'architectural',
      desc: 'Stunning floating circular ring glow. Perfect for urban roundabouts and parks.',
      shape: 'Round',
      dims: '60.3mm / 76.2mm / 88.9mm',
      height: '3000mm - 6000mm',
      power: '30W / 45W / 60W'
    },
    {
      id: 'JCAB-042',
      code: 'JCAB-042',
      name: 'Dual Spotlight Pole',
      cat: 'architectural',
      desc: 'Features twin adjustable spotlight projections from a cross arm. High flexibility.',
      shape: 'Round',
      dims: '88.9mm / 101.6mm / 114.3mm',
      height: '3000mm - 6000mm',
      power: '30W / 40W'
    },
    {
      id: 'JCAB-045',
      code: 'JCAB-045',
      name: 'Dual Cubical Light Pole',
      cat: 'architectural',
      desc: 'Directs light in multiple directions from dual cubical heads. Ultra-modern profile.',
      shape: 'Square',
      dims: '100mm / 114.3mm',
      height: '3000mm - 6000mm',
      power: '20W / 40W / 60W'
    },

    // Commercial
    {
      id: 'JCAB-OCT',
      code: 'Octagonal Poles',
      name: 'Premium Octagonal Series',
      cat: 'commercial',
      desc: 'IS-compliant hot-dip galvanized octagonal poles. Built for roads, highways, and industrial estates.',
      shape: 'Octagonal',
      dims: '70mm Top / 130mm Bottom (varies)',
      height: '3 Meters - 12 Meters',
      power: 'Compatible with all LED heads'
    },
    {
      id: 'JCAB-CON',
      code: 'Conical Poles',
      name: 'Sleek Conical Series',
      cat: 'commercial',
      desc: 'Tapered conical steel poles offering optimal wind resistance and a modern look.',
      shape: 'Conical Round',
      dims: '60mm Top / 150mm Bottom',
      height: '3 Meters - 12 Meters',
      power: 'Custom luminaire mounts'
    },
    {
      id: 'JCAB-SWG',
      code: 'Swaged Tubular',
      name: 'Swaged Tubular Series',
      cat: 'commercial',
      desc: 'Traditional swaged joint tubular poles engineered to IS-2713 standards.',
      shape: 'Stepped Round',
      dims: 'Multi-section diameters',
      height: '5 Meters - 15 Meters',
      power: 'Single/Double Arm bracket compatible'
    },

    // Brackets
    {
      id: 'AX-ARM',
      code: 'AX-ARM Series',
      name: 'Custom Outreach Brackets',
      cat: 'brackets',
      desc: 'Premium structural mounting arms (cantilever, bullhorn, staggered) crafted for bespoking.',
      shape: 'Custom curve/angle',
      dims: '33.4mm / 42.4mm / 48.3mm',
      height: 'Custom projection (0.5m - 2m)',
      power: 'N/A'
    },

    // Head Lamps
    {
      id: 'JCAB-LED',
      code: 'Luminaires',
      name: 'High Efficiency LED Heads',
      cat: 'lamps',
      desc: 'Aero-grade aluminum die-cast LED street fixtures featuring polycarbonate lens diffusers.',
      shape: 'Aerodynamic Cast',
      dims: 'Custom fit',
      height: 'N/A',
      power: '30W / 50W / 60W / 90W / 120W'
    },

    // Bollards
    {
      id: 'JCAB-BLD',
      code: 'Bollards',
      name: 'Architectural Bollards',
      cat: 'bollards',
      desc: 'Short, decorative pathway lighting bollards for gardens, plazas, and pedestrian walkways.',
      shape: 'Round / Square / Triangular',
      dims: '100mm / 140mm',
      height: '800mm - 1200mm',
      power: '10W / 15W / 20W'
    },

    // Cast Iron
    {
      id: 'JCAB-CI',
      code: 'Cast Iron Poles',
      name: 'Heritage Cast Iron Series',
      cat: 'cast-iron',
      desc: 'Classic, ornate street poles manufactured from premium heavy-duty cast iron. Perfect for heritage sites.',
      shape: 'Fluted Ornate',
      dims: 'Thick fluted sections',
      height: '3 Meters - 6 Meters',
      power: 'Compatible with post-top globes'
    },

    // High Mast
    {
      id: 'JCAB-HM',
      code: 'High Mast',
      name: 'High Mast / Stadium Mast',
      cat: 'high-mast',
      desc: 'High mast poles equipped with motorized lantern carriages. Ideal for intersections, ports, and stadiums.',
      shape: 'Polygonal (12/16/20 sides)',
      dims: 'Wide base foundation flange',
      height: '15 Meters - 30 Meters',
      power: 'Carries up to 12 floodlights'
    }
  ];

  const handleFilterChange = (cat) => {
    setActiveCategory(cat);
    navigate(`/products?category=${cat}`);
  };

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.cat === activeCategory);

  const openDetails = (prod) => {
    setSelectedProduct(prod);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const handleConfigureClick = (code) => {
    navigate(`/bespoke-poles?model=${code}`);
  };

  return (
    <div className="page-wrapper">
      <div className="container products-container">
        {/* Hero */}
        <div className="products-hero">
          <span className="section-label">Products Portfolio</span>
          <h1 style={{ marginTop: '10px' }}>Our Collection</h1>
          <p>Explore our premium architectural, commercial, and utility lighting poles.</p>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout 
          className="products-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(prod => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="product-card"
              >
                <div className="product-card-visual">
                  <PoleSvg model={prod.id} />
                </div>
                <div className="product-card-content">
                  <div className="product-card-meta">
                    <span className="product-card-cat">{prod.cat}</span>
                    <h3 className="product-card-name">{prod.name}</h3>
                    <p className="product-card-desc">{prod.desc.substring(0, 85)}...</p>
                  </div>
                  <div className="product-card-actions">
                    <span className="product-card-code">{prod.code}</span>
                    <button onClick={() => openDetails(prod)} className="product-card-btn">
                      View Specs <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="modal-overlay" onClick={closeDetails}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="modal-box" 
                onClick={e => e.stopPropagation()}
              >
                <button onClick={closeDetails} className="modal-close-btn" aria-label="Close modal">
                  <X size={20} />
                </button>

                <div className="modal-visual-panel">
                  <PoleSvg model={selectedProduct.id} />
                </div>

                <div className="modal-details-panel">
                  <div className="modal-header-info">
                    <span className="modal-cat">{selectedProduct.cat} Series</span>
                    <h2 className="modal-title">{selectedProduct.name}</h2>
                    <p className="modal-desc">{selectedProduct.desc}</p>
                  </div>

                  <table className="modal-specs-table">
                    <tbody>
                      <tr>
                        <td>Model Code</td>
                        <td>{selectedProduct.code}</td>
                      </tr>
                      <tr>
                        <td>Pole Profile</td>
                        <td>{selectedProduct.shape}</td>
                      </tr>
                      <tr>
                        <td>Dimensions</td>
                        <td>{selectedProduct.dims}</td>
                      </tr>
                      <tr>
                        <td>Height Limits</td>
                        <td>{selectedProduct.height}</td>
                      </tr>
                      <tr>
                        <td>Power Capacity</td>
                        <td>{selectedProduct.power}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="modal-actions">
                    {selectedProduct.cat === 'architectural' || selectedProduct.cat === 'commercial' ? (
                      <button 
                        onClick={() => handleConfigureClick(selectedProduct.id)} 
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        Configure this Pole
                      </button>
                    ) : (
                      <Link 
                        to="/contact" 
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        Request Quote
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
