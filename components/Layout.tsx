import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Scale } from 'lucide-react';
import Button from './Button';
import WhatsAppFloat from './WhatsAppFloat';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_EMAIL } from '../constants';
import { useCompare } from '../contexts/CompareContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { selectedProducts } = useCompare();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = ['Home', 'Products', 'About', 'Blog', 'Contact'];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              {/* <img className="w-24 h-24" src="/vishali.png" alt="Logo" /> */}
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-900'}`}>
                Vishali <span className="text-brand-600">Enterprises</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              ))}

              {/* Compare Icon */}
              <Link to="/compare" className="relative p-2 text-slate-600 hover:text-brand-600 transition-colors" title="Compare Products">
                <Scale className="w-5 h-5" />
                {selectedProducts.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                    {selectedProducts.length}
                  </span>
                )}
              </Link>

              <Button size="sm" onClick={() => window.open(`tel:${CONTACT_PHONE}`)}>
                Call Expert
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-4">
              <Link to="/compare" className="relative p-1 text-slate-600">
                <Scale className="w-6 h-6" />
                {selectedProducts.length > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                    {selectedProducts.length}
                  </span>
                )}
              </Link>
              <button
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-base font-medium text-slate-700 hover:text-brand-600 px-2 py-2 rounded-md hover:bg-brand-50"
              >
                {item}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Button className="w-full justify-center" onClick={() => window.open(`tel:${CONTACT_PHONE}`)}>
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">
                  Vishali<span className="text-brand-500">Enterprises</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Dedicated to providing the purest, safest drinking water for your family and business. Sales, installation, and premium maintenance services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-brand-400 transition-colors">All Products</Link></li>
                <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="cursor-pointer hover:text-brand-400 transition-colors">RO Installation</span></li>
                <li><span className="cursor-pointer hover:text-brand-400 transition-colors">Annual Maintenance (AMC)</span></li>
                <li><span className="cursor-pointer hover:text-brand-400 transition-colors">Filter Replacement</span></li>
                <li><span className="cursor-pointer hover:text-brand-400 transition-colors">Water Testing</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                  <span>123 Clean Water Street,<br />Business District, City - 500001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                  <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-brand-500 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Vishali Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
