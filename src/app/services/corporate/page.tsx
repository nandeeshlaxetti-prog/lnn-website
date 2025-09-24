"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PAL = { gold: "#D4AF37" };

const SketchBuilding = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <rect x="4" y="6" width="16" height="12" rx="1"/>
    <path d="M8 6V4h8v2"/>
    <path d="M8 10h8M8 14h8"/>
  </svg>
);

export default function CorporatePage() {
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
              <SketchBuilding width={32} height={32} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Corporate Advisory & Training</h1>
            <p className="text-xl text-gray-600 mb-8">Governance, compliance, and capability-building</p>
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
                  <span>Entity structuring, ESOPs, board processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Policy frameworks (POSH, data, ethics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>In-house legal trainings & playbooks</span>
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
                  <span>Health-check & risk remediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Policy drafting & rollout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Workshops for leadership & teams</span>
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
                  <span>Compliance matrix</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Policy suite</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  <span>Training deck & SOPs</span>
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
                <p>Our corporate advisory practice helps businesses build robust governance frameworks and compliance systems that scale with growth.</p>
                <p>We combine legal expertise with practical business understanding to deliver solutions that are both legally sound and operationally effective.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-8"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">📋</div>
              <h3 className="font-semibold mb-2">Compliance Training</h3>
              <p className="text-sm text-gray-600">Comprehensive compliance awareness programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">⚖️</div>
              <h3 className="font-semibold mb-2">Legal Risk Management</h3>
              <p className="text-sm text-gray-600">Identifying and mitigating legal risks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">🏢</div>
              <h3 className="font-semibold mb-2">Corporate Governance</h3>
              <p className="text-sm text-gray-600">Board processes and governance best practices</p>
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






