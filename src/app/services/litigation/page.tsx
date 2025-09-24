"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PAL = { gold: "#D4AF37" };

const SketchGavel = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 3l3 3-6 6-3-3 6-6Z"/>
    <path d="M9 12l-6 6"/>
    <path d="M14 5l5 5"/>
    <path d="M14 12h7"/>
  </svg>
);

export default function LitigationPage() {
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
              <SketchGavel width={32} height={32} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Civil & Commercial Litigation</h1>
            <p className="text-xl text-gray-600 mb-8">Courtroom strategy for complex disputes</p>
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
                  <span>Suits for recovery, injunction, and specific performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Commercial disputes, arbitration support, execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Interim reliefs: IA/Order XXXIX, caveats, contempt</span>
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
                  <span>Case evaluation & pleadings (plaint/written statement)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Evidence, affidavits, cross-examination strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Appeals, revisions, and enforcement</span>
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
                  <span>Pleadings set</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Applications/IA bundle</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Case laws pack</span>
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
                <p>Our litigation team combines years of courtroom experience with modern case management techniques. We understand that every dispute is unique and requires a tailored strategy.</p>
                <p>From initial case assessment to final execution, we provide comprehensive support with transparent communication and regular updates on case progress.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Litigation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Case Assessment</h3>
              <p className="text-sm text-gray-600">Thorough evaluation of merits, evidence, and strategy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Pleadings</h3>
              <p className="text-sm text-gray-600">Drafting comprehensive plaints and written statements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Evidence & Trial</h3>
              <p className="text-sm text-gray-600">Strategic evidence presentation and cross-examination</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Execution</h3>
              <p className="text-sm text-gray-600">Enforcement of judgments and appeals if needed</p>
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





