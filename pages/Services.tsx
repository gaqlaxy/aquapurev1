import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Settings, Building2, ChevronRight, Check } from 'lucide-react';
import { SERVICES, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'wrench': return <Wrench className="w-8 h-8" />;
        case 'shield': return <Shield className="w-8 h-8" />;
        case 'settings': return <Settings className="w-8 h-8" />;
        case 'building': return <Building2 className="w-8 h-8" />;
        default: return <Wrench className="w-8 h-8" />;
    }
};

const Services: React.FC = () => {
    return (
        <Layout>
            <SEO
                title="Our Services"
                description="Expert RO installation, maintenance, repair, and commercial water solutions in Chennai."
            />

            <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-brand-600 font-semibold tracking-wider text-sm uppercase"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"
                        >
                            Pure Water Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 leading-relaxed"
                        >
                            From residential installations to heavy-duty commercial plants, we provide comprehensive water purification services to keep your water safe and healthy.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {SERVICES.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 relative z-10">
                                    {getIcon(service.icon)}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{service.title}</h3>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed relative z-10">{service.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 relative z-10">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-500">
                                            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mr-3 flex-shrink-0">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to={`/service/${service.id}`} className="mt-auto relative z-10">
                                    <Button className="w-full justify-between group-hover:bg-brand-700 transition-colors">
                                        View Details
                                        <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                                Not sure which service is right for you? Our experts can help you analyze your water quality and recommend the perfect purification system.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact">
                                    <Button variant="white" className="w-full sm:w-auto">
                                        Contact Support
                                    </Button>
                                </Link>
                                <Button className="w-full sm:w-auto" onClick={() => window.open(`tel:${CONTACT_PHONE}`)}>
                                    Call {CONTACT_PHONE_DISPLAY}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
