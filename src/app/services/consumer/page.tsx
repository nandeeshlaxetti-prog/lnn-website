"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PAL = { gold: "#D4AF37" };

const SketchCart = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <circle cx="9" cy="20" r="1"/>
    <circle cx="17" cy="20" r="1"/>
    <path d="M5 6h2l2 10h9l2-8H7"/>
  </svg>
);

export default function ConsumerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Header */}
      <header className="relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-gray-300 text-gray-900 mb-6" style={{ boxShadow: `0 0 0 1px rgba(212,175,55,.35), 0 8px 20px rgba(212,175,55,.15)` }}>
              <SketchCart width={32} height={32} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Consumer Protection Law</h1>
            <p className="text-xl text-gray-600 mb-8">Swift redress for unfair trade & deficiency</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="rounded-lg border border-gray-300 text-gray-700 px-6 py-2 hover:bg-gray-50">← Back to Services</Link>
              <Link href="/contact" className="rounded-lg bg-black text-white px-6 py-2 hover:bg-gray-900">Consult Now</Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Practice Scope</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>District/State/National Commission matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>E-commerce & services disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Warranty, product liability, mis-selling</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Our Approach</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Complaints/Replies & evidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Interim reliefs & mediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Compensation & execution</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Key Deliverables</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Complaint/Reply</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Evidence & invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Reliefs & costs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>Consumer protection law requires understanding both legal procedures and consumer rights. Our team specializes in navigating consumer forums efficiently.</p>
                <p>We focus on quick resolution and maximum compensation recovery, ensuring consumers get justice without lengthy court battles.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Consumer Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Consumer Rights We Protect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">🛒</div>
              <h3 className="font-semibold mb-2">Product Defects</h3>
              <p className="text-sm text-gray-600">Defective products, warranty claims, and replacements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">💳</div>
              <h3 className="font-semibold mb-2">Service Deficiencies</h3>
              <p className="text-sm text-gray-600">Poor service quality, delays, and breach of promises</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">💰</div>
              <h3 className="font-semibold mb-2">Unfair Trade Practices</h3>
              <p className="text-sm text-gray-600">Misleading advertisements, hidden charges, and fraud</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2025 LNN Legal. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/services" className="hover:text-[#D4AF37]">All Services</Link>
              <Link href="/contact" className="hover:text-[#D4AF37]">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}






