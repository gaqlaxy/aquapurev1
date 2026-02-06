import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact Us" description="Get in touch with AquaPure for sales, service, and support. We are here to help you with your water purification needs." />
      
      {/* Header */}
      <div className="bg-brand-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Have questions? Need service? Our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Info Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Whether you're looking for a new water purifier, need maintenance for your existing one, or just want to check your water quality, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Visit Our Store</h3>
                    <p className="text-slate-600">
                      123 Clean Water Street,<br />
                      Business District, City - 500001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600 mb-2">Mon-Sat from 9am to 8pm</p>
                    <a href={`tel:${CONTACT_PHONE}`} className="text-lg font-bold text-brand-600 hover:text-brand-700">
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-2">For general enquiries and support</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 font-medium hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                
                 <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-lg text-brand-600 mr-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp Support</h3>
                    <p className="text-slate-600 mb-2">Quick answers and service booking</p>
                    <a 
                      href={`https://wa.me/${CONTACT_PHONE}`} 
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400 overflow-hidden border border-slate-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629783344691!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>

            {/* Form Column */}
            <div>
               <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
