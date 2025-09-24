"use client"

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  content: string;
  scope: string[];
  process: string[];
}

interface ServiceDetailClientProps {
  item: ServiceItem;
  slug: string;
}

export default function ServiceDetailClient({ item, slug }: ServiceDetailClientProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: item.title,
    url: `https://lnnlegal.in/services/${slug}`,
    areaServed: "IN",
    provider: {
      "@type": "Organization",
      name: "LNN Legal – Advocates & Solicitors",
      url: "https://lnnlegal.in/",
    },
    description: item.description,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-6xl mb-6">{item.icon}</div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{item.title}</h1>
          <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto text-justify">{item.description}</p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Service Overview</h2>
            <p className="text-gray-300 text-justify">{item.content}</p>
          </motion.div>

          {/* Scope of Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Scope of Services</h2>
            <ul className="space-y-2">
              {item.scope.map((service: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {item.process.map((step: string, i: number) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-sm mr-4">
                  {i + 1}
                </div>
                <p className="text-gray-300 text-justify">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 text-justify">Contact us for a consultation and let us help you with your legal needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
              >
                Get Legal Consultation
              </a>
              <Link 
                href="/services" 
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-lg font-medium hover:bg-[#D4AF37]/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
