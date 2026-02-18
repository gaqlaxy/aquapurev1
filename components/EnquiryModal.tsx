import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Mail } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants';
import Button from './Button';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, productName }) => {
    const handleWhatsAppEnquiry = () => {
        const message = encodeURIComponent(`Hi, I am interested in the ${productName}. Please provide more details.`);
        window.open(`https://wa.me/${CONTACT_PHONE}?text=${message}`, '_blank');
        onClose();
    };

    const handleEmailEnquiry = () => {
        const subject = encodeURIComponent(`Product Enquiry: ${productName}`);
        const body = encodeURIComponent(`Hi, I am interested in the ${productName}. Please provide more details.`);
        window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto"
                        >
                            <div className="relative p-6 md:p-8">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Enquiry</h3>
                                    <p className="text-slate-500">How would you like to contact us regarding the <span className="font-semibold text-brand-600">{productName}</span>?</p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        onClick={handleWhatsAppEnquiry}
                                        className="flex items-center p-4 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:border-brand-200 hover:bg-brand-50 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mr-4 group-hover:scale-110 transition-transform">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900">Via WhatsApp</h4>
                                            <p className="text-sm text-slate-500">Fast & direct messaging</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleEmailEnquiry}
                                        className="flex items-center p-4 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:border-brand-200 hover:bg-brand-50 transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mr-4 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900">Via Email</h4>
                                            <p className="text-sm text-slate-500">Detailed formal enquiry</p>
                                        </div>
                                    </button>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button variant="ghost" onClick={onClose} className="text-slate-500">
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
