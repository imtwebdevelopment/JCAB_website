import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Manufacturing from './pages/Manufacturing';
import Spaces from './pages/Spaces';
import Products from './pages/Products';
import BespokeBuilder from './pages/BespokeBuilder';
import Contact from './pages/Contact';

// Minimal stub for pages not yet built
function ComingSoon({ title }) {
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', gap: '1rem', textAlign: 'center' }}>
      <span className="section-label">Coming Soon</span>
      <h1 style={{ fontSize: '2.5rem' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '420px' }}>This section is currently being prepared. Check back soon for updates.</p>
    </div>
  );
}

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default function App() {
  const whatsappUrl = "https://wa.me/917204301107?text=Hello%2C%20I%20am%20interested%20in%20JCAB%20lighting%20poles.";

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <Header />
        
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bespoke-poles" element={<BespokeBuilder />} />
            <Route path="/blogs" element={<ComingSoon title="Blogs" />} />
            <Route path="/events" element={<ComingSoon title="Events" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp chat pill */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-chat"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.787-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.479 2.019 14.017 1 11.997 1 6.558 1 2.133 5.372 2.13 10.802c-.002 1.64.453 3.24 1.314 4.693l-.998 3.645 3.731-.977-.021.011zM17.487 14.39c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.67.15-.198.3-.77.975-.943 1.175-.173.2-.347.225-.647.075-.3-.15-1.266-.467-2.41-1.485-.89-.795-1.49-1.77-1.665-2.07-.173-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.575-.48-.5-.67-.51-.172-.008-.371-.01-.57-.01-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5s1.025 2.9 1.17 3.1c.145.2 2.02 3.08 4.897 4.32.685.295 1.22.473 1.637.605.69.22 1.318.19 1.815.115.553-.083 1.774-.725 2.022-1.425.248-.7.248-1.3.173-1.425-.074-.125-.272-.2-.572-.35z" />
          </svg>
          How can I help you?
        </a>
      </div>
    </Router>
  );
}
