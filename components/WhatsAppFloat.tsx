import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';
import { motion } from 'framer-motion';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your water purifier products and services.");
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 group"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20"></div>
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
      <span className="hidden md:block absolute right-full mr-4 px-3 py-1 bg-white text-slate-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.button>
  );
};

export default WhatsAppFloat;
