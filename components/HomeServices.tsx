import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Settings, Building2, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import Button from './Button';
import { Link } from 'react-router-dom';

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'wrench': return <Wrench className="w-6 h-6" />;
        case 'shield': return <Shield className="w-6 h-6" />;
        case 'settings': return <Settings className="w-6 h-6" />;
        case 'building': return <Building2 className="w-6 h-6" />;
        default: return <Wrench className="w-6 h-6" />;
    }
};

const HomeServices: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
                    <p className="text-slate-600">
                        Beyond selling top-rated purifiers, we provide end-to-end water solutions to ensure
                        your water remains pure year after year.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                        >
                            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                {getIcon(service.icon)}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-500">
                                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="mt-auto">
                                <Button variant="outline" className="w-full justify-between group-hover:border-brand-200 group-hover:bg-brand-50/50">
                                    Book Now
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
