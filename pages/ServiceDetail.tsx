import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Wrench, Shield, Settings, Building2, Phone, Mail, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SEO from '../components/SEO';
import EnquiryModal from '../components/EnquiryModal';
import { SERVICES, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../constants';

const getServiceIcon = (iconName: string) => {
    switch (iconName) {
        case 'wrench': return <Wrench className="w-12 h-12" />;
        case 'shield': return <Shield className="w-12 h-12" />;
        case 'settings': return <Settings className="w-12 h-12" />;
        case 'building': return <Building2 className="w-12 h-12" />;
        default: return <Wrench className="w-12 h-12" />;
    }
};

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const service = SERVICES.find(s => s.id === id);
    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    if (!service) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                    <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEO
                title={`${service.title} - AquaPure Systems`}
                description={service.description}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description,
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Vishali Enterprises"
                    }
                }}
            />

            <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <Link to="/" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                            {/* Header Section */}
                            <div className="bg-brand-600 p-8 md:p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                                        {getServiceIcon(service.icon)}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                                        <p className="text-brand-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    <div className="md:col-span-2">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12">
                                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our {service.title}?</h2>
                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                At Vishali Enterprises, we understand that water purity is non-negotiable. Our {service.title.toLowerCase()} service is handled by factory-trained technicians who use genuine spare parts and follow strict quality protocols.
                                            </p>
                                            <ul className="space-y-4">
                                                <li className="flex items-center text-slate-600">
                                                    <Clock className="w-5 h-5 text-brand-500 mr-3" />
                                                    <span>Quick 4-8 hour response time in Chennai</span>
                                                </li>
                                                <li className="flex items-center text-slate-600">
                                                    <Shield className="w-5 h-5 text-brand-500 mr-3" />
                                                    <span>90-day warranty on all service & repairs</span>
                                                </li>
                                                <li className="flex items-center text-slate-600">
                                                    <Settings className="w-5 h-5 text-brand-500 mr-3" />
                                                    <span>Comprehensive multi-point health check</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-200">
                                            <h3 className="text-2xl font-bold mb-4">Quick Booking</h3>
                                            <p className="text-slate-400 mb-8">
                                                Book a professional service technician in minutes.
                                            </p>
                                            <div className="space-y-4">
                                                <Button variant="white" className="w-full py-4" onClick={() => setIsEnquiryModalOpen(true)}>
                                                    Book Service Now
                                                </Button>
                                                <Button variant="ghost" className="w-full text-white hover:bg-white/10 py-4 border border-white/10" onClick={() => window.open(`tel:${CONTACT_PHONE}`)}>
                                                    <Phone className="w-5 h-5 mr-3" />
                                                    Call to Schedule
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                                            <h3 className="font-bold text-slate-900 mb-4">Support</h3>
                                            <div className="space-y-4 text-sm text-slate-600">
                                                <div className="flex items-center">
                                                    <Phone className="w-4 h-4 mr-3 text-brand-600" />
                                                    <span>{CONTACT_PHONE_DISPLAY}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mail className="w-4 h-4 mr-3 text-brand-600" />
                                                    <span>sales@vishalienterprises.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isEnquiryModalOpen}
                onClose={() => setIsEnquiryModalOpen(false)}
                productName={service.title}
            />
        </Layout>
    );
};

export default ServiceDetail;
