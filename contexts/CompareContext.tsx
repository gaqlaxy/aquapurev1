import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface CompareContextType {
  selectedProducts: Product[];
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Persist to local storage
  useEffect(() => {
    const saved = localStorage.getItem('compare_list');
    if (saved) {
      setSelectedIds(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('compare_list', JSON.stringify(selectedIds));
  }, [selectedIds]);

  const selectedProducts = PRODUCTS.filter(p => selectedIds.includes(p.id));

  const addToCompare = (productId: string) => {
    if (selectedIds.length >= 3) {
      alert("You can compare up to 3 products at a time.");
      return;
    }
    if (!selectedIds.includes(productId)) {
      setSelectedIds(prev => [...prev, productId]);
    }
  };

  const removeFromCompare = (productId: string) => {
    setSelectedIds(prev => prev.filter(id => id !== productId));
  };

  const isInCompare = (productId: string) => selectedIds.includes(productId);

  const clearCompare = () => setSelectedIds([]);

  return (
    <CompareContext.Provider value={{ selectedProducts, addToCompare, removeFromCompare, isInCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
