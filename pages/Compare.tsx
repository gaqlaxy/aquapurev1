import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useCompare } from '../contexts/CompareContext';
import Button from '../components/Button';
import { Trash2, Plus, AlertCircle } from 'lucide-react';

const Compare: React.FC = () => {
  const { selectedProducts, removeFromCompare, clearCompare } = useCompare();

  return (
    <Layout>
      <SEO title="Compare Products" description="Compare features, price, and specifications of our water purifiers side-by-side." />
      
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Compare Products</h1>
            {selectedProducts.length > 0 && (
              <Button variant="ghost" onClick={clearCompare} className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-4 md:mt-0">
                <Trash2 className="w-4 h-4 mr-2" /> Clear All
              </Button>
            )}
          </div>

          {selectedProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Products Selected</h3>
              <p className="text-slate-600 mb-8">Select up to 3 products to see a side-by-side comparison.</p>
              <Link to="/products">
                <Button>Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[800px] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))]">
                  {/* Row: Header (Images & Names) */}
                  <div className="p-6 border-b border-r border-slate-100 bg-slate-50 font-semibold text-slate-700 flex items-center">
                    Product Details
                  </div>
                  {selectedProducts.map(product => (
                    <div key={product.id} className="p-6 border-b border-slate-100 relative group text-center">
                      <button 
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 rounded-full hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto rounded-lg mb-4" />
                      <h3 className="font-bold text-slate-900">{product.name}</h3>
                      <p className="text-brand-600 font-bold mt-1">{product.price}</p>
                      <Link to={`/product/${product.id}`} className="inline-block mt-3 text-sm text-brand-600 hover:underline">View Details</Link>
                    </div>
                  ))}
                  {selectedProducts.length < 3 && (
                     <div className="p-6 border-b border-slate-100 flex flex-col items-center justify-center text-slate-400 border-l border-dashed">
                        <Link to="/products" className="flex flex-col items-center hover:text-brand-600 transition-colors">
                           <div className="w-12 h-12 rounded-full border-2 border-dashed border-current flex items-center justify-center mb-2">
                              <Plus className="w-6 h-6" />
                           </div>
                           <span className="text-sm font-medium">Add Product</span>
                        </Link>
                     </div>
                  )}
                </div>

                {/* Data Rows */}
                {[
                  { label: 'Category', key: 'category' },
                  { label: 'Capacity', key: 'capacity' },
                  { label: 'Filtration', key: 'filtrationStages' },
                  { label: 'Warranty', key: 'warranty' },
                ].map((row, idx) => (
                   <div key={idx} className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))] border-b border-slate-100 last:border-0">
                      <div className="p-4 border-r border-slate-100 bg-slate-50 font-medium text-slate-600 flex items-center">
                         {row.label}
                      </div>
                      {selectedProducts.map(product => (
                         <div key={product.id} className="p-4 flex items-center justify-center text-center text-sm text-slate-800">
                            {(product as any)[row.key]}
                         </div>
                      ))}
                      {selectedProducts.length < 3 && <div className="border-l border-dashed border-slate-100"></div>}
                   </div>
                ))}
                
                 {/* Features Row */}
                 <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))]">
                    <div className="p-4 border-r border-slate-100 bg-slate-50 font-medium text-slate-600">
                       Key Features
                    </div>
                    {selectedProducts.map(product => (
                       <div key={product.id} className="p-4 text-sm text-slate-600">
                          <ul className="list-disc list-inside space-y-1 text-left inline-block">
                             {product.features.map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                       </div>
                    ))}
                    {selectedProducts.length < 3 && <div className="border-l border-dashed border-slate-100"></div>}
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Compare;
