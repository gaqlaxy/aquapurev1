import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Scale } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { useCompare } from '../contexts/CompareContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const isSelected = isInCompare(product.id);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSelected) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col overflow-hidden h-full"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-700 uppercase tracking-wider shadow-sm">
          {product.category}
        </div>

        {/* Compare Button */}
        <button
          onClick={toggleCompare}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-colors ${isSelected
              ? 'bg-brand-600 text-white'
              : 'bg-white/90 text-slate-500 hover:text-brand-600'
            }`}
          title={isSelected ? "Remove from Compare" : "Add to Compare"}
        >
          <Scale className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-2 mb-6 flex-grow">
          {product.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-slate-500">
              <Check className="w-3.5 h-3.5 text-teal-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-lg font-bold text-brand-700">{product.price}</span>
          <Link
            to={`/product/${product.id}`}
            className="flex items-center text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
