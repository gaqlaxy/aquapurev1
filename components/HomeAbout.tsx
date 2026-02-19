import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Users, Droplets, ArrowRight } from 'lucide-react';
import Button from './Button';

const HomeAbout: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1588&auto=format&fit=crop"
                                alt="Clear purified water being poured into a glass - Vishali Enterprises RO Solutions"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center border-r border-slate-100">
                                        <p className="text-3xl font-bold text-brand-600">15+</p>
                                        <p className="text-sm text-slate-500 font-medium mt-1">Years Experience</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-brand-600">5k+</p>
                                        <p className="text-sm text-slate-500 font-medium mt-1">Happy Clients</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
                            About Vishali Enterprises
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            Committed to Pure, <br />
                            <span className="text-brand-600">Healthy Water</span> for Every Home.
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            At Vishali Enterprises, we believe access to clean water is a fundamental right, not a luxury.
                            With over 15 years of expertise in advanced water purification technologies,
                            we combine innovation with reliability to deliver health in every drop.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-6 mb-10">
                            {[
                                {
                                    icon: <Award className="w-6 h-6 text-brand-600" />,
                                    title: "ISO Certified Quality",
                                    desc: "Products meeting the highest international purity standards."
                                },
                                {
                                    icon: <Users className="w-6 h-6 text-brand-600" />,
                                    title: "Expert Team",
                                    desc: "Certified technicians dedicated to your service 24/7."
                                },
                                {
                                    icon: <Droplets className="w-6 h-6 text-brand-600" />,
                                    title: "Advanced RO+UV Technology",
                                    desc: "Multi-stage purification for the safest drinking water."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <div className="mt-1 min-w-[3rem] w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                                        <div className="group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/about">
                            <Button size="lg" className="shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300 transition-shadow">
                                More About Us
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
