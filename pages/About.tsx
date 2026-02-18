import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Target, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeServices from '../components/HomeServices';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-brand-500" />,
      title: 'Purity First',
      description: 'We never compromise on filtration quality. Your health is our top priority.'
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-500" />,
      title: 'Customer Centric',
      description: 'From installation to maintenance, we ensure a hassle-free experience.'
    },
    {
      icon: <Award className="w-8 h-8 text-brand-500" />,
      title: 'Excellence',
      description: 'We use only certified components and the latest purification technologies.'
    }
  ];

  return (
    <Layout>
      <SEO title="About Us" description="Learn about Vishali Enterprises's mission, history, and commitment to providing the cleanest water." />

      {/* Hero */}
      <div className="bg-brand-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission is Pure</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            To ensure every family and business has access to safe, clean, and healthy drinking water through innovative technology and exceptional service.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-brand-600 font-bold uppercase tracking-wider mb-2 block">Our Story</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">From a Garage to 5000+ Homes</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Vishali Enterprises began in 2015 with a simple observation: accessing truly clean water was becoming harder and more expensive. Our founder, a chemical engineer, started assembling custom RO units in his garage to help neighbors dealing with hard water issues.
                </p>
                <p>
                  The word spread quickly. People loved not just the taste of the water, but the transparency and reliability of the service.
                </p>
                <p>
                  Today, we are a team of over 50 professionals serving thousands of households and businesses. While we have grown, our core promise remains the same: <strong>Pure Water, Pure Service.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <HomeServices />

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every installation and service call.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '8+', label: 'Years Experience' },
              { num: '5000+', label: 'Happy Customers' },
              { num: '50+', label: 'Expert Technicians' },
              { num: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.num}</div>
                <div className="text-brand-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
