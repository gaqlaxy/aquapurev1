import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Droplets, Info } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { PRODUCTS, CONTACT_PHONE } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleEnquiry = () => {
    const message = encodeURIComponent(`Hi, I am interested in the ${product.name}. Please provide more details.`);
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${message}`, '_blank');
  };

  return (
    <Layout>
      <SEO 
        title={product.name} 
        description={product.description} 
      />
      
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Products
          </Link>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="p-8 lg:p-12 bg-slate-50 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-2xl shadow-lg max-h-[500px] w-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                  {product.category} Series
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
                <p className="text-xl text-brand-600 font-bold mb-6">{product.price}</p>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <Droplets className="w-5 h-5 text-brand-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Capacity</h4>
                      <p className="text-slate-600 text-sm">{product.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-brand-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Warranty</h4>
                      <p className="text-slate-600 text-sm">{product.warranty}</p>
                    </div>
                  </div>
                  <div className="flex items-start sm:col-span-2">
                    <Info className="w-5 h-5 text-brand-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">Filtration Technology</h4>
                      <p className="text-slate-600 text-sm">{product.filtrationStages}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-8 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleEnquiry} className="flex-1">
                    Send Enquiry
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" onClick={() => window.open(`tel:${CONTACT_PHONE}`)}>
                    Call for Best Price
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
