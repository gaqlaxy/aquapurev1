import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Compare from './pages/Compare';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { CompareProvider } from './contexts/CompareContext';
import Button from './components/Button';

// Wrapper for AnimatePresence to access useLocation
const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h2>
    <p className="text-slate-600 mb-6 max-w-md">
      The page you are looking for doesn’t exist or has been moved.
    </p>
    <Button onClick={() => window.location.replace('#/')}>Back to Home</Button>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <CompareProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </CompareProvider>
  );
};

export default App;
