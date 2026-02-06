import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { PRODUCTS } from '../constants';

const AllProducts: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Home' | 'Commercial' | 'Industrial'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = ['All', 'Home', 'Commercial', 'Industrial'];

  return (
    <Layout>
      <SEO 
        title="Our Products" 
        description="Browse our extensive range of RO, UV, and Alkaline water purifiers for home and commercial use." 
      />
      
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-white border-b border-slate-100 pt-24 pb-12">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
            <p className="text-slate-600 max-w-2xl">
              Explore our wide range of water purification systems designed to deliver crystal clear, mineral-rich water.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-12">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center space-x-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                    filter === cat 
                      ? 'bg-brand-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="text-sm text-slate-500 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Showing {filteredProducts.length} results
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
