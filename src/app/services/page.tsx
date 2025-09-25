"use client"

import React from "react";
import { motion } from "framer-motion";
import FAQSchema from "@/components/ui/faq-schema";

// Futuristic Services Page for LNN Legal
// TailwindCSS + Framer Motion animations
// Enhanced SEO Optimizations included

const services = [
  {
    title: "Civil & Commercial Litigation",
    icon: "⚖️",
    description:
      "Representation before civil and commercial courts, arbitration tribunals, and regulatory bodies. We handle disputes relating to contracts, damages, company matters, and shareholder issues with strategic precision.",
    scope: [
      "Contractual disputes",
      "Company and shareholder litigation",
      "Arbitration and mediation",
      "Appellate representation",
    ],
  },
  {
    title: "Criminal Defence & White Collar Laws",
    icon: "🛡️",
    description:
      "Robust defence across criminal courts with a focus on fairness, due process, and protecting client rights. We handle white-collar, cyber, and general criminal matters.",
    scope: [
      "Bail and anticipatory bail",
      "Economic offences",
      "Cyber-crime defence",
      "Trial and appellate advocacy",
    ],
  },
  {
    title: "Real Estate & Property Laws",
    icon: "🏠",
    description:
      "Comprehensive property law services — from due diligence to conveyancing and litigation. We protect your interests in high-value property transactions.",
    scope: [
      "Title due diligence",
      "Sale, lease, and license documentation",
      "RERA compliance",
      "Property litigation",
    ],
  },
  {
    title: "Family & Matrimonial Laws",
    icon: "❤️",
    description:
      "Empathetic legal counsel for matrimonial disputes, custody, maintenance, and protection under domestic violence laws. We blend sensitivity with strong representation.",
    scope: [
      "Divorce and judicial separation",
      "Custody and guardianship",
      "Maintenance and alimony",
      "Domestic Violence petitions",
    ],
  },
  {
    title: "Corporate Advisory & Trainings",
    icon: "🏢",
    description:
      "Strategic advice for companies and startups on compliance, governance, and business structuring. We also conduct in-house legal trainings for leadership teams.",
    scope: [
      "Company incorporation & compliance",
      "M&A advisory",
      "Employment and HR policies",
      "Board and leadership training",
    ],
  },
  {
    title: "Contract Drafting & Negotiation",
    icon: "📄",
    description:
      "Clear, enforceable contracts tailored to your needs. From drafting to negotiation, we ensure legal safety and commercial viability.",
    scope: [
      "Commercial agreements",
      "Employment contracts",
      "Joint venture & shareholder agreements",
      "Service-level agreements",
    ],
  },
  {
    title: "Consumer Protection Laws",
    icon: "🛒",
    description:
      "Redressal of grievances under consumer law before district, state, and national commissions. We advocate for individuals and groups against unfair trade practices.",
    scope: [
      "Consumer complaints and appeals",
      "Product liability cases",
      "Insurance disputes",
      "Class action consumer litigation",
    ],
  },
  {
    title: "Banking & Finance Laws",
    icon: "🏦",
    description:
      "Specialized services in recovery, insolvency, and banking litigation under SARFAESI, IBC, NI Act, and allied laws.",
    scope: [
      "Debt recovery and enforcement",
      "SARFAESI proceedings",
      "IBC litigation and advisory",
      "Cheque dishonour under NI Act",
    ],
  },
  {
    title: "Services Laws",
    icon: "🏛️",
    description:
      "Comprehensive representation in Lokayukta proceedings and Karnataka State Administrative laws, ensuring accountability and transparency in government actions.",
    scope: [
      "Lokayukta complaints and proceedings",
      "Administrative law disputes",
      "Government accountability matters",
      "Public interest litigation",
    ],
  },
  {
    title: "Labour & Employment Laws",
    icon: "👷",
    description:
      "Expert guidance on labour law compliance, industrial disputes, and employment-related matters for both employers and employees.",
    scope: [
      "Industrial disputes and conciliation",
      "Labour court proceedings",
      "Employment law compliance",
      "Workers' compensation matters",
    ],
  },
  {
    title: "Local Laws & Land Matters",
    icon: "🏘️",
    description:
      "Specialized services in BBMP, KIADB, KPTCL, BDA, Municipal Laws, Land Revenue, and Land Acquisition matters across Karnataka.",
    scope: [
      "BBMP and municipal law compliance",
      "KIADB and BDA matters",
      "KPTCL disputes and regulations",
      "Land acquisition proceedings",
      "Land revenue and property disputes",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    icon: "💡",
    description:
      "Comprehensive IPR services including patents, trademarks, copyrights, and designs protection, enforcement, and litigation across various forums.",
    scope: [
      "Patent filing and prosecution",
      "Trademark registration and opposition",
      "Copyright protection and enforcement",
      "Design registration and disputes",
      "IPR litigation and infringement matters",
    ],
  },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
      {subtitle && <p className="mt-4 text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(0,0,0,0.25)" }}
          className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-6 flex flex-col"
        >
          <div className="mb-4 self-center">
            <div className="h-20 w-20 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
              <span className="text-4xl">{s.icon}</span>
            </div>
          </div>
              <h3 className="text-lg font-medium text-white text-center">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300 flex-1 text-center text-justify">{s.description}</p>
              <ul className="mt-4 text-sm text-gray-400 list-disc pl-5">
                {s.scope.map((item, i) => (
                  <li key={i} className="text-center">{item}</li>
                ))}
              </ul>
          

          {/* View Details Button */}
          <div className="mt-6 flex justify-end">
            <a 
              href={`/services/${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
              className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D4AF37]/90 transition-colors"
            >
              View Details
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Civil & Commercial Litigation",
    url: "https://lnnlegal.in/services/civil-commercial-litigation",
    areaServed: "IN",
    serviceType: "Litigation",
    provider: {
      "@type": "Organization",
      name: "LNN Legal – Advocates & Solicitors",
      url: "https://lnnlegal.in/"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you handle urgent injunctions?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We prepare and move urgent interim applications (including caveats and urgent mentions) to protect client interests." }
      },
      {
        "@type": "Question",
        "name": "Which courts and forums do you appear in?",
        "acceptedAnswer": { "@type": "Answer", "text": "Civil/Commercial Courts, Sessions/High Court, DRT, NCLT, Consumer Commissions, and other tribunals." }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups and SMEs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer corporate advisory, contracts, compliance, and legal trainings for startups and SMEs." }
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} 
      />
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 px-6 py-20">
        <SectionHeader
          title="Our Services"
          subtitle="A comprehensive range of legal solutions crafted to safeguard your rights and empower your business."
        />
        <ServicesGrid />
        
        {/* FAQ Section with Schema */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <FAQSchema 
            faqs={[
              {
                question: "What areas of law do you specialize in?",
                answer: "We specialize in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law. Our experienced advocates provide comprehensive legal services across multiple practice areas."
              },
              {
                question: "How do I schedule a consultation with LNN Legal?",
                answer: "You can schedule a consultation by calling us at +91-9033286123, emailing us at nandeesh@lnnlegal.in, or visiting our office at 53/1, Divya Maple, 2nd Floor, 16th Cross, 8th Main Road, Malleshwaram, Bengaluru."
              },
              {
                question: "Do you handle cases outside Bengaluru?",
                answer: "Yes, we handle cases across Karnataka and can provide legal consultation for matters throughout India. Our advocates appear in various courts and tribunals across the state."
              },
              {
                question: "What are your consultation fees?",
                answer: "Consultation fees vary based on the complexity of the matter and the type of legal service required. We offer competitive rates and transparent fee structures. Please contact us for detailed fee information."
              },
              {
                question: "Which courts and forums do you appear in?",
                answer: "Our advocates appear in Civil/Commercial Courts, Sessions Court, High Court, Debt Recovery Tribunal (DRT), National Company Law Tribunal (NCLT), Consumer Commissions, and other specialized tribunals."
              },
              {
                question: "Do you work with startups and SMEs?",
                answer: "Yes, we provide comprehensive legal services for startups and SMEs including corporate advisory, contract drafting, compliance guidance, and legal training programs tailored to business needs."
              },
              {
                question: "Do you handle urgent injunctions?",
                answer: "Yes. We prepare and move urgent interim applications (including caveats and urgent mentions) to protect client interests in time-sensitive legal matters."
              },
              {
                question: "What is your experience in civil litigation?",
                answer: "Our advocates have extensive experience in civil litigation including contractual disputes, property matters, commercial litigation, and appellate representation before various courts in Karnataka."
              }
            ]}
            pageTitle="Legal Services FAQ"
          />
        </section>
      </main>
    </>
  );
}