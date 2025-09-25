"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import teamData from "@/data/team.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legal Team - Expert Advocates & Solicitors | LNN Legal",
  description: "Meet our experienced legal team at LNN Legal. Led by advocates Nandeesh Laxetti and Sangamesh Navadagi, our team provides expert legal counsel in civil litigation, criminal defense, and comprehensive legal services across Bengaluru.",
  keywords: [
    "legal team bangalore",
    "advocates bangalore",
    "lawyers bangalore",
    "Nandeesh Laxetti",
    "Sangamesh Navadagi",
    "legal professionals bangalore",
    "experienced lawyers bangalore",
    "senior advocates bangalore",
    "legal experts bangalore"
  ],
  openGraph: {
    title: "Our Legal Team - Expert Advocates & Solicitors | LNN Legal",
    description: "Meet our experienced legal team at LNN Legal. Led by advocates Nandeesh Laxetti and Sangamesh Navadagi, providing expert legal counsel across Bengaluru.",
    url: "https://lnnlegal.in/team",
    type: "website",
  },
  alternates: {
    canonical: "https://lnnlegal.in/team",
  },
};

// Real Partner Data
const partners = [
  {
    name: "Nandeesh Laxetti",
    role: "Partner",
    email: "nandeesh@lnnlegal.in",
    bio: "Partner focusing on civil and commercial litigation, corporate advisory, banking laws, and dispute resolution handling high-value disputes across across courts and tribunals in trial and appellate matters. Handles property & real estate, financial recoveries and corporate governance with precise drafting and practical, outcome-driven strategy.",
    practiceAreas: ["Civil & Commercial Litigation", "Corporate Advisory", "Banking Laws", "Dispute Resolution", "Property & Real Estate", "Financial Recoveries"],
    education: "LL.B., Karnataka State Law University",
    barAdmissions: ["Karnataka State Bar Council", "High Court of Karnataka"],
    linkedin: "https://www.linkedin.com/in/nandeeshl/",
    phone: "+91 9033286123",
    experience: "15+ Years",
    specialties: ["Complex Litigation", "Banking & Finance", "Corporate Governance"],
    photo: "/images/team/nandeesh-laxetti.png"
  },
  {
    name: "Sangamesh Navadagi",
    role: "Partner",
    email: "sangamesh@lnnlegal.in",
    bio: "Partner with a practice spanning local land and personal rights, civil litigation, labour laws, and service matters. Securing employment and service remedies before labour authorities, and administrative tribunals. Known for practical resolution, protecting property interests, employment rights, and individual liberties with consistency and clarity.",
    practiceAreas: ["Criminal Defence & White Collar Laws", "Family & Matrimonial Laws", "Consumer Protection", "Banking & Finance Laws"],
    education: "LL.B., Karnataka State Law University",
    barAdmissions: ["Karnataka State Bar Council", "High Court of Karnataka"],
    linkedin: "https://www.linkedin.com/in/sangamesh-navadagi-726282129/",
    phone: "+91 9731914801",
    experience: "12+ Years",
    specialties: ["Criminal Defence", "Family Law", "Consumer Rights"],
    photo: "/images/team/sangamesh-navadagi.jpg"
  },
  {
    name: "Akhil Chandra Mohan",
    role: "Partner",
    email: "akhil@lnnlegal.in",
    bio: "Partner with practice spanning criminal law, constitutional law, customs & excise, matrimonial law, real estate, and civil & commercial litigation. Provides strategic representation across trial and appellate forums, while advising clients on complex disputes, regulatory issues, and high-stakes transactions with a focus on protecting rights and advancing practical outcomes.",
    practiceAreas: ["Criminal Law", "Constitutional Law", "Customs & Excise", "Matrimonial Law", "Real Estate", "Civil & Commercial Litigation"],
    education: "LL.B., Karnataka State Law University",
    barAdmissions: ["Karnataka State Bar Council", "High Court of Karnataka"],
    linkedin: "https://www.linkedin.com/in/akhil-chandra-mohan-2aa995271/",
    phone: "+91 8746965652",
    experience: "10+ Years",
    specialties: ["Criminal Defence", "Constitutional Matters", "Regulatory Compliance"],
    photo: "/images/team/akhil-chandra-mohan.png"
  }
];

// Get associates from team data
const associates = teamData.filter(member => member.role === "Associate");

// Photo component with fallback to initials
const TeamPhoto = ({ name, photo, size = "large" }: { name: string; photo?: string; size?: "large" | "small" }) => {
  const sizeClasses = size === "large" ? "w-32 h-32" : "w-24 h-24";
  const textSize = size === "large" ? "text-4xl" : "text-2xl";
  
  return (
    <div className={`${sizeClasses} bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto ${size === "large" ? "mb-6" : "mb-4"} overflow-hidden`}>
      {photo ? (
        <Image
          src={photo}
          alt={`${name} photo`}
          width={size === "large" ? 128 : 96}
          height={size === "large" ? 128 : 96}
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Fallback to initials if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('span');
              fallback.className = `${textSize} font-bold text-[#D4AF37]`;
              fallback.textContent = name.split(' ').map(n => n[0]).join('');
              parent.appendChild(fallback);
            }
          }}
        />
      ) : (
        <span className={`${textSize} font-bold text-[#D4AF37]`}>
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      )}
    </div>
  );
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Our Team
            </h1>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet our experienced partners and dedicated associates who lead LNN Legal with years of combined expertise 
              and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Partner Photo */}
                <TeamPhoto name={partner.name} photo={partner.photo} size="large" />

                {/* Partner Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <div className="inline-block bg-[#D4AF37] text-black px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {partner.role}
                  </div>
                  <p className="text-gray-300 leading-relaxed text-justify">{partner.bio}</p>
                </div>


                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t border-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[#D4AF37]">📞</span>
                    <a href={`tel:${partner.phone}`} className="text-gray-300 hover:text-[#D4AF37] transition-colors font-medium">
                      {partner.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[#D4AF37]">✉️</span>
                    <a href={`mailto:${partner.email}`} className="text-gray-300 hover:text-[#D4AF37] transition-colors font-medium">
                      {partner.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[#D4AF37]">💼</span>
                    <a 
                      href={partner.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors font-medium"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Section */}
      {associates.length > 0 && (
        <section className="py-20 bg-black">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Associates</h2>
              <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Our dedicated associates bring specialized expertise and fresh perspectives to support our clients' diverse legal needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {associates.map((associate, index) => (
                <motion.div
                  key={associate.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Associate Photo */}
                  <TeamPhoto name={associate.name} photo={associate.photo} size="small" />

                  {/* Associate Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{associate.name}</h3>
                    <div className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {associate.role}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify">{associate.bio}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Commitment Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Commitment to Excellence</h2>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Top-Tier Education</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Our partners graduated from leading law schools and continue their education through 
                ongoing professional development and legal training programs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Years of combined experience with successful outcomes across all practice areas, 
                from complex litigation to corporate advisory and family law matters.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Collaborative Approach</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Our partners work together seamlessly to provide comprehensive legal solutions, 
                leveraging each other's expertise for the benefit of our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Are you a passionate legal professional looking to grow your career? 
              We're always seeking talented individuals to join our dynamic team of advocates and solicitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:careers@lnnlegal.in?subject=Job Application - LNN Legal"
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                href="mailto:careers@lnnlegal.in?subject=Internship Application - LNN Legal"
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition-colors"
              >
                Apply for Internship
              </Link>
              <Link 
                href="tel:+919033286123"
                className="inline-block border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call for Inquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}