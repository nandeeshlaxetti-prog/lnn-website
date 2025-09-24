"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PAL = { gold: "#D4AF37" };

const SketchShield = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6l8-3Z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function CriminalPage() {
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
              <SketchShield width={32} height={32} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Criminal Defence & Criminal Law</h1>
            <p className="text-xl text-gray-600 mb-8">From anticipatory bail to trial defence</p>
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
                  <span>Bail/Anticipatory Bail, quashing, discharge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>White-collar crime, IT Act/BNSS offences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Complaints, FIR guidance, 482 petitions</span>
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
                  <span>Strategy notes & timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Bail applications, quash, discharge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Trial preparation & defence</span>
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
                  <span>Bail/482 drafts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Complaint/Counter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Evidence file</span>
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
                <p>Our criminal defence team understands the urgency and sensitivity of criminal matters. We provide immediate response and strategic guidance from the first consultation.</p>
                <p>With extensive experience in both trial courts and higher courts, we ensure comprehensive defence strategies tailored to each case's unique circumstances.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Emergency Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Emergency Response</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">24/7</div>
              <h3 className="font-semibold mb-2">Immediate Response</h3>
              <p className="text-sm text-gray-600">Round-the-clock availability for urgent criminal matters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">1hr</div>
              <h3 className="font-semibold mb-2">Quick Assessment</h3>
              <p className="text-sm text-gray-600">Rapid case evaluation and strategy formulation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">Same Day</div>
              <h3 className="font-semibold mb-2">Court Appearance</h3>
              <p className="text-sm text-gray-600">Immediate representation when needed most</p>
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






