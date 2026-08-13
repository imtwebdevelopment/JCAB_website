import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, ArrowRight } from 'lucide-react';
import PoleSvg from '../components/PoleSvg';
import './Products.css';

export default function Products() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([{ id: 'all', label: 'All Series' }]);
  const [subcategories, setSubcategories] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const { categoryName, subcategoryName } = useParams();

  useEffect(() => {
    if (categories.length <= 1 && subcategories.length === 0) return; // wait for data to resolve correctly

    let newActiveCat = 'all';
    let newActiveSub = 'all';

    const decodedCat = categoryName ? decodeURIComponent(categoryName).replace(/-/g, ' ') : null;
    const decodedSub = subcategoryName ? decodeURIComponent(subcategoryName).replace(/-/g, ' ') : null;

    if (decodedCat) {
      // Check if it's a subcategory (like /Architectural-Pole-Lights)
      const isSubcategory = subcategories.some(s => s.name.toLowerCase() === decodedCat.toLowerCase());
      const isCategory = categories.some(c => c.label.toLowerCase() === decodedCat.toLowerCase());

      if (isSubcategory && !isCategory) {
        newActiveCat = 'all';
        newActiveSub = decodedCat;
      } else {
        newActiveCat = decodedCat;
        newActiveSub = decodedSub || 'all';
      }
    } else {
      newActiveCat = searchParams.get('category') ? searchParams.get('category').replace(/-/g, ' ') : 'all';
      newActiveSub = searchParams.get('subcategory') ? searchParams.get('subcategory').replace(/-/g, ' ') : 'all';
    }

    setActiveCategory(newActiveCat);
    setActiveSubcategory(newActiveSub);
  }, [categoryName, subcategoryName, searchParams, categories, subcategories]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch categories
        const catRes = await fetch(`${API_URL}/api/categories`);
        const catData = await catRes.json();
        const formattedCategories = [
          { id: 'all', label: 'All Series' },
          ...catData.map(c => ({ id: c._id, label: c.name }))
        ];
        setCategories(formattedCategories);

        // Fetch subcategories
        const subRes = await fetch(`${API_URL}/api/subcategories`);
        const subData = await subRes.json();
        setSubcategories(subData);

        // Fetch products
        const prodRes = await fetch(`${API_URL}/api/products`);
        const prodData = await prodRes.json();

        const formattedProducts = prodData.map(p => ({
          id: p._id,
          code: p.specifications?.Code || p.title.substring(0, 8).toUpperCase(),
          name: p.title,
          image: p.images && p.images.length > 0 ? p.images[0] : null,
          cat: p.category?._id || p.category,
          catName: p.category?.name || 'Unknown',
          subcat: p.subcategory?._id || p.subcategory,
          desc: p.description || '',
          shape: p.specifications?.Shape || 'N/A',
          dims: p.specifications?.Dimensions || 'N/A',
          height: p.specifications?.Height || 'N/A',
          power: p.specifications?.Power || 'N/A'
        }));
        setProductsData(formattedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  const handleFilterChange = (catName) => {
    setActiveCategory(catName);
    setActiveSubcategory('all');
    navigate(`/${encodeURIComponent(catName.replace(/\s+/g, '-'))}`);
  };

  const handleSubcatChange = (subcatId) => {
    const subObj = subcategories.find(s => s._id === subcatId || s.name === subcatId);
    if (subObj) {
      setActiveSubcategory(subObj.name);
      
      const catObj = categories.find(c => c.id === activeCategory || c.label === activeCategory);
      const catSlug = (catObj && catObj.id !== 'all') ? encodeURIComponent(catObj.label.replace(/\s+/g, '-')) : 'all';
      
      navigate(`/${catSlug}/${encodeURIComponent(subObj.name.replace(/\s+/g, '-'))}`);
    } else {
      setActiveSubcategory(subcatId);
      navigate(`/products?category=${activeCategory}&subcategory=${subcatId}`);
    }
  };

  const filteredProducts = productsData.filter(p => {
    const activeCatId = activeCategory === 'all' ? 'all' : (categories.find(c => c.id === activeCategory || c.label === activeCategory)?.id || activeCategory);
    const activeSubcatId = activeSubcategory === 'all' ? 'all' : (subcategories.find(s => s._id === activeSubcategory || s.name === activeSubcategory)?._id || activeSubcategory);
    const matchCat = activeCatId === 'all' || p.cat === activeCatId;
    const matchSubcat = activeSubcatId === 'all' || p.subcat === activeSubcatId;
    return matchCat && matchSubcat;
  });

  const openDetails = (prod) => {
    setSelectedProduct(prod);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const handleConfigureClick = (code) => {
    navigate(`/bespoke-poles?model=${code}`);
  };

  const activeSubcatObj = subcategories.find(s => s._id === activeSubcategory || s.name === activeSubcategory);
  const titleText = activeSubcatObj ? activeSubcatObj.name : (activeCategory === 'all' ? 'Our Collection' : (categories.find(c => c.id === activeCategory || c.label === activeCategory)?.label || activeCategory || 'Products'));
  const descText = activeSubcatObj?.description || "Explore our premium architectural, commercial, and utility lighting poles. They shape the way a space feels and lift the mood of any project.";

  // Map subcategory names to different banner images
  const getBannerImage = () => {
    if (!activeSubcatObj) return 'url("/images/hero_arch_pole_1786361761078.png")';
    const name = activeSubcatObj.name.toLowerCase();

    if (name.includes('architectural pole')) return 'url("/images/hero_arch_pole_1786361761078.png")';
    if (name.includes('poles')) return 'url("/images/hero_poles_1786361776963.png")';
    if (name.includes('bracket')) return 'url("/images/hero_brackets_1786361807870.png")';
    if (name.includes('head lamp')) return 'url("/images/hero_head_lamps_1786361832834.png")';
    if (name.includes('cast iron')) return 'url("/images/hero_cast_iron_1786361845290.png")';
    if (name.includes('designer area')) return 'url("/images/hero_designer_area_1786361857539.png")';
    if (name.includes('bollards')) return 'url("/images/hero_bollards_1786361868742.png")';
    if (name.includes('outdoor')) return 'url("/images/hero_outdoor_1786361893225.png")';
    if (name.includes('commercial')) return 'url("/images/hero_commercial_1786361910671.png")';
    if (name.includes('solar')) return 'url("/images/hero_commercial_1786361910671.png")'; // Fallback
    if (name.includes('conical')) return 'url("/images/hero_commercial_1786361910671.png")'; // Fallback

    return 'url("/images/hero_arch_pole_1786361761078.png")';
  };

  const getSubtitle = (name) => {
    if (!name) return "Precision-engineered lighting solutions that bring form and function together.";
    const lower = name.toLowerCase();
    if (lower.includes('bracket')) return "Precision-made brackets that bring form and function together.";
    if (lower.includes('head lamp')) return "High-performance illumination combined with modern styling.";
    if (lower.includes('commercial')) return "Premium octagonal poles built to perform and designed to impress.";
    if (lower.includes('pole')) return "Custom made light poles, shaped by your ideas.";
    return "Precision-engineered lighting solutions that bring form and function together.";
  };

  return (
    <div className="page-wrapper">
      <div className="products-container">
        {activeSubcategory === 'all' ? (
          <div className="catalog-list-fullwidth">
            {/* Intro Section with Hero Image */}
            <div className="dinamo-hero" style={{ backgroundImage: 'url("/images/hero_poles_1786361776963.png")' }}>
              <div className="dinamo-hero-content">
                <div className="red-dot"></div>
                <h1>Our Products</h1>
                <p className="hero-subtitle">
                  State-of-the-art facility in Raipur combining precision engineering with sustainable manufacturing practices.
                </p>
              </div>
            </div>

            {loading ? (
              <div style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>Loading catalog...</div>
            ) : (
              subcategories.map((sub, idx) => {
                const isDark = idx % 2 === 0;
                return (
                  <section className={`catalog-section ${isDark ? 'bg-dark' : 'bg-light'}`} key={sub._id}>
                    <div className="decor-left">
                      <PoleSvg model={sub.name} color={isDark ? '#e0e0e0' : '#333'} />
                    </div>
                    <div className={`catalog-center-content ${isDark ? 'text-light' : 'text-dark'}`}>
                      <h2>{sub.name}</h2>
                      <p>{sub.description}</p>
                      <button
                        className={`btn-primary ${isDark ? 'btn-outline-light' : ''}`}
                        onClick={() => handleSubcatChange(sub._id)}
                      >
                        Know More
                      </button>
                    </div>
                    <div className="decor-right">
                      <PoleSvg model={sub.name + " Alt"} color={isDark ? '#c5a880' : '#888'} />
                    </div>
                  </section>
                );
              })
            )}
          </div>
        ) : (
          <>
            {/* Dinamoo Style Hero */}
            <div className="dinamo-hero" style={{ backgroundImage: getBannerImage() }}>
              <div className="dinamo-hero-content">
                <div className="red-dot"></div>
                <h1>{titleText}</h1>
                <p className="hero-subtitle">
                  {getSubtitle(activeSubcatObj?.name)}
                </p>
              </div>
            </div>

            <div className="dinamo-desc-section">
              <p>{descText}</p>
            </div>

            <motion.div
              layout
              className="products-grid"
            >
              {loading ? (
                <div style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>Loading products...</div>
              ) : (
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
                        {prod.image ? (
                          <img
                            src={prod.image.startsWith('http') || prod.image.startsWith('data:') ? prod.image : `${API_URL}${prod.image}`}
                            alt={prod.name}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        ) : (
                          <PoleSvg model={prod.code || prod.name} />
                        )}
                      </div>
                      <div className="product-card-content">
                        <div className="product-card-meta">
                          <h3 className="product-card-name">{prod.name}</h3>
                          <p className="product-card-desc" style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>{prod.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </motion.div>
          </>
        )}

      </div>
    </div>
  );
}
