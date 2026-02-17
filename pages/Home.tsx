import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Phone,
  Check,
} from "lucide-react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import { PRODUCTS, TESTIMONIALS, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "../constants";

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Layout>
      <SEO
        title="Home"
        description="AquaPure offers the best RO water purifiers and maintenance services for homes and offices. Get pure, healthy water today."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-50 pt-16 pb-20 lg:pt-32 lg:pb-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
                #1 Trusted Water Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Purest Water for <br />
                <span className="text-brand-600">Healthier Living.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Advanced RO+UV purification systems designed for your specific
                water type. Experience the taste of purity with our sales and
                premium maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book Free Consultation
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    View Products
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center space-x-6 text-sm font-medium text-slate-500">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Free
                  Installation
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> 1
                  Year Warranty
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-30 mix-blend-multiply filter"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30 mix-blend-multiply filter"></div>
              <img
                src="https://media.istockphoto.com/id/1062918654/photo/ro-water-purification-system.jpg?s=1024x1024&w=is&k=20&c=qgPggrnGpjY0K11sfXiB1vC58CeNF1jQny3QIEEJVYs="
                alt="Glass of pure water"
                className="relative rounded-2xl shadow-2xl z-10 object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-slate-900 font-bold">4.9/5</span>
                </div>
                <p className="text-slate-600 text-sm">
                  "The best investment for my family's health."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <HomeAbout />

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">
                Our Best Sellers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Featured Products
              </h2>
            </div>
            <Link to="/products">
              <Button variant="outline" className="group">
                View All Products
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                  →
                </span>
              </Button>
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <HomeServices />

      {/* Testimonials */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-brand-200">
              Trusted by over 5,000 satisfied families and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-semibold text-sm">
                      {t.name}
                    </h4>
                    <span className="text-slate-400 text-xs">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Form Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Pure Water?
              </h2>
              <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                Schedule a free water quality check or get a quote for your new
                RO system. Our experts are just a message away.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Free TDS Water Check at Home",
                  "Customized Solution for Your Water Type",
                  "Transparent Pricing & No Hidden Costs",
                  "Expert Installation within 24 Hours",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="bg-brand-500 rounded-full p-1 mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-brand-200 text-sm uppercase tracking-wider mb-2">
                  Need Immediate Assistance?
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-center text-2xl font-bold hover:text-brand-100 transition-colors"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 bg-white p-2">
              <ContactForm className="h-full border-none shadow-none" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
