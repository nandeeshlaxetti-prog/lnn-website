"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            About LNN Legal
          </h1>
          <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto">
            Founded on the principles of integrity, excellence, and client-centered service, 
            LNN Legal has been providing exceptional legal representation for over twenty years.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
            <p>
              LNN Legal was established with a simple yet powerful mission: to provide 
              exceptional legal services that make a real difference in our clients' lives. 
              Our founding partners recognized the need for a law firm that combines 
              deep legal expertise with genuine care for client outcomes.
            </p>
            <p>
              Over the years, we have grown from a small practice to a respected firm 
              serving clients across multiple practice areas. Our success is built on 
              the trust and confidence of our clients, who rely on us for their most 
              important legal matters.
            </p>
            <p>
              Today, LNN Legal continues to uphold the highest standards of legal practice 
              while adapting to the evolving needs of our clients and the legal landscape. 
              We remain committed to providing personalized, effective legal solutions 
              that achieve the best possible outcomes.
            </p>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Values
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do at LNN Legal.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8 hover:bg-gray-800/80 transition-colors"
          >
            <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              We maintain the highest ethical standards in all our interactions and legal practice, 
              ensuring transparency and trust in every client relationship.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8 hover:bg-gray-800/80 transition-colors"
          >
            <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              We strive for the highest quality legal representation in every case we handle, 
              continuously improving our skills and knowledge to serve our clients better.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8 hover:bg-gray-800/80 transition-colors"
          >
            <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Client Focus</h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Our clients' success and satisfaction are at the heart of everything we do, 
              providing personalized attention and tailored solutions for each unique situation.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Approach
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            How we deliver exceptional legal services to our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4AF37] text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Strategic Planning</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify">
              We develop comprehensive legal strategies tailored to each client's specific needs, 
              ensuring the best possible outcomes through careful planning and execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4AF37] text-xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Clear Communication</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify">
              We maintain open, transparent communication throughout the legal process, 
              keeping clients informed and involved in every important decision.
            </p>
          </motion.div>
        </div>

      </section>
    </main>
  );
}