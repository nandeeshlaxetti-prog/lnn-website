"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Quote Carousel Data
const quotes = [
  {
    text: "This is a court of law, young man, not a court of justice.",
    author: "Oliver Wendell Holmes Jr."
  },
  {
    text: "A democracy without discipline is a democracy without a future.",
    author: "Nani Palkhivala"
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Justice is truth in action.",
    author: "Benjamin Disraeli"
  },
  {
    text: "The first duty of society is justice.",
    author: "Alexander Hamilton"
  },
  {
    text: "Law is nothing other than a certain ordinance of reason for the common good, promulgated by the person who has the care of the community.",
    author: "Thomas Aquinas"
  },
  {
    text: "The law is the last result of human wisdom acting upon human experience for the benefit of the public.",
    author: "Samuel Johnson"
  },
  {
    text: "Justice delayed is justice denied.",
    author: "William E. Gladstone"
  },
  {
    text: "The good lawyer is not the man who has an eye to every side and angle of contingency, but who throws himself on your part so heartily that he can get you out of a scrape.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Lawyers are operators of the toll bridge across which anyone in search of justice has to pass.",
    author: "Jane Bryant Quinn"
  },
  {
    text: "The law is not a light for you or any man to see by; the law is not an instrument of any kind. The law is a causeway upon which so long as he keeps to it a citizen may walk safely.",
    author: "Robert Bolt"
  },
  {
    text: "The law is a jealous mistress, and requires a long and constant courtship.",
    author: "Joseph Story"
  },
  {
    text: "The law is the witness and external deposit of our moral life. Its history is the history of the moral development of the race.",
    author: "Oliver Wendell Holmes Jr."
  },
  {
    text: "Equal justice under law is not merely a caption on the facade of the Supreme Court building, it is perhaps the most inspiring ideal of our society.",
    author: "Lewis F. Powell Jr."
  },
  {
    text: "The law must be stable, but it must not stand still.",
    author: "Roscoe Pound"
  },
  {
    text: "A lawyer with his briefcase can steal more than a hundred men with guns.",
    author: "Mario Puzo"
  },
  {
    text: "The law is a sort of hocus-pocus science.",
    author: "Charles Macklin"
  },
  {
    text: "It is not what a lawyer tells me I may do; but what humanity, reason, and justice tell me I ought to do.",
    author: "Edmund Burke"
  },
  {
    text: "The law is the last result of human wisdom acting upon human experience for the benefit of the public.",
    author: "Samuel Johnson"
  },
  {
    text: "Laws control the lesser man. Right conduct controls the greater one.",
    author: "Mark Twain"
  },
  {
    text: "The law is not abstract justice, but a mass of concrete rules, established by parliaments and courts.",
    author: "Lord Halsbury"
  },
  {
    text: "The law is the witness and external deposit of our moral life. Its history is the history of the moral development of the race.",
    author: "Oliver Wendell Holmes Jr."
  },
  {
    text: "Justice cannot be for one side alone, but must be for both.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "The law is a sort of hocus-pocus science.",
    author: "Charles Macklin"
  },
  {
    text: "Where law ends, tyranny begins.",
    author: "John Locke"
  },
  {
    text: "The law is a jealous mistress, and requires a long and constant courtship.",
    author: "Joseph Story"
  }
];

// Use a deterministic shuffle based on a seed to ensure server/client consistency
const shuffleArray = (array: typeof quotes, seed: number = 0) => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;
  
  // Simple seeded random function
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(seededRandom() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }
  return shuffled;
};

// Use a fixed seed for consistent shuffling between server and client
const shuffledQuotes = shuffleArray(quotes, 42);

// Areas of Expertise Data
const expertiseAreas = [
  {
    title: "Civil & Commercial Litigation",
    description: "Representation before civil and commercial courts, arbitration tribunals, and regulatory bodies. We handle disputes relating to contracts, damages, company matters, and shareholder issues with strategic precision.",
    icon: "⚖️"
  },
  {
    title: "Criminal Defence & White Collar Laws",
    description: "Robust defence across criminal courts with a focus on fairness, due process, and protecting client rights. We handle white-collar, cyber, and general criminal matters.",
    icon: "🛡️"
  },
  {
    title: "Real Estate & Property Laws",
    description: "Comprehensive property law services — from due diligence to conveyancing and litigation. We protect your interests in high-value property transactions.",
    icon: "🏠"
  },
  {
    title: "Family & Matrimonial Laws",
    description: "Empathetic legal counsel for matrimonial disputes, custody, maintenance, and protection under domestic violence laws. We blend sensitivity with strong representation.",
    icon: "❤️"
  },
  {
    title: "Corporate Advisory & Trainings",
    description: "Strategic advice for companies and startups on compliance, governance, and business structuring. We also conduct in-house legal trainings for leadership teams.",
    icon: "🏢"
  },
  {
    title: "Contract Drafting & Negotiation",
    description: "Clear, enforceable contracts tailored to your needs. From drafting to negotiation, we ensure legal safety and commercial viability.",
    icon: "📄"
  },
  {
    title: "Consumer Protection Laws",
    description: "Redressal of grievances under consumer law before district, state, and national commissions. We advocate for individuals and groups against unfair trade practices.",
    icon: "🛒"
  },
  {
    title: "Banking & Finance Laws",
    description: "Specialized services in recovery, insolvency, and banking litigation under SARFAESI, IBC, NI Act, and allied laws.",
    icon: "🏦"
  },
  {
    title: "Lokayukta & Administrative Laws",
    description: "Comprehensive representation in Lokayukta proceedings and Karnataka State Administrative laws, ensuring accountability and transparency in government actions.",
    icon: "🏛️"
  },
  {
    title: "Labour & Employment Laws",
    description: "Expert guidance on labour law compliance, industrial disputes, and employment-related matters for both employers and employees.",
    icon: "👷"
  },
  {
    title: "Local Laws & Land Matters",
    description: "Specialized services in BBMP, KIADB, KPTCL, BDA, Municipal Laws, Land Revenue, and Land Acquisition matters across Karnataka.",
    icon: "🏘️"
  },
  {
    title: "Intellectual Property Rights (IPR)",
    description: "Comprehensive IPR services including patents, trademarks, copyrights, and designs protection, enforcement, and litigation across various forums.",
    icon: "💡"
  }
];

// What Sets Us Apart Data
const uniqueStrengths = [
  {
    title: "Client-Centric Service",
    description: "A personalized approach where every client receives attentive, one-on-one counsel and tailored solutions."
  },
  {
    title: "Strategic Insight",
    description: "Deep understanding of both legal nuances and business strategy, allowing us to craft innovative strategies that align with clients' goals."
  },
  {
    title: "Integrity & Transparency",
    description: "A commitment to ethical practice – we uphold honesty, clarity, and integrity in all interactions, ensuring clients are informed at every step."
  },
  {
    title: "Results-Driven Approach",
    description: "Focused on efficient, effective resolutions – we relentlessly pursue the best outcomes, whether in court or at the negotiation table."
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "End to end legal services prompt and cost effective all your legal needs approach once to get resolved",
    author: "Ramesh Laxett",
    title: "Negotiable Instruments Issue"
  },
  {
    quote: "Thanks a lot Nandeesh sir, I got a proper advice, I recommend for everyone in need",
    author: "Vinay Raj",
    title: "Real Estate Developer"
  },
  {
    quote: "Good service, young lawyers but they look like have more experienced. They given us a early relief. I wish God to give them more success in life.",
    author: "Kishore Gowda",
    title: "Private Client"
  },
  {
    quote: "One of the best legal advisors in town, worth the money and time. Highly recommended.",
    author: "Tejashwini R.",
    title: "Client"
  },
  {
    quote: "I had an issue where my money was not returned by my landlord. The office helped by taking appropriate measures for it. Happy with their service.",
    author: "Bhamsa Rathore",
    title: "Restaurant Business"
  },
  {
    quote: "ತುಂಬಾ ಒಳ್ಳೆ ವ್ಯಕ್ತಿ ಹಾಗೂ ತುಂಬಾ ಚೆನ್ನಾಗಿ ಕಾನೂನು ಬಗ್ಗೆ ತಿಳಿದುಕೊಂಡಿದ್ದಾರೆ. ಯಾವುದೇ ಸಮಸ್ಯೆ ಗೆ ಪರಿಹಾರ ಮತ್ತು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ಮಾಡಿಕೊಡುತ್ತಾರೆ.",
    author: "Mallikarjun Gonal",
    title: "Client"
  },
  {
    quote: "Laxetti and associates really helped out with a quick resolution for my legal requirements. The advocates are young and street smart. Thanks to the entire team",
    author: "Pratik Sharma",
    title: "Client"
  },
  {
    quote: "Very prompt legal services from Adv. Nandeesh. Would highly recommend for all legal assistances",
    author: "Shilpita Nanda",
    title: "Client"
  },
  {
    quote: "Good experience with laxetti and associates. People who are searching for good advocate to get their work done without even having second thought can approach him for legal services",
    author: "Nikitha S Gowda",
    title: "Client"
  }
];

// Blog data for Legal Insights
const blogPosts = [
  {
    id: 1,
    title: "How to File a Civil Case in Karnataka: Step-by-Step Guide",
    excerpt: "Learn how to file a civil suit in Karnataka, India. Step-by-step guidance on preparing a plaint, court jurisdiction, required documents, and legal procedures – explained by Bengaluru civil litigation lawyers.",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "Civil Law",
    featured: true
  },
  {
    id: 7,
    title: "SARFAESI Act Explained: What Borrowers and Lenders Need to Know",
    excerpt: "Understand the SARFAESI Act, 2002 — how banks recover loans, rights of borrowers, and remedies before the DRT and courts. A clear guide for homebuyers, businesses, and guarantors in Bengaluru and across India.",
    date: "2024-01-25",
    readTime: "15 min read",
    category: "Banking Law",
    featured: false
  },
  {
    id: 8,
    title: "Filing a Consumer Complaint in Karnataka: A Step-by-Step Guide",
    excerpt: "Complete guide to filing consumer complaints in Karnataka under the Consumer Protection Act, 2019. Learn about jurisdiction, procedures, and remedies for defective goods and poor services.",
    date: "2024-01-28",
    readTime: "10 min read",
    category: "Consumer Law",
    featured: false
  },
  {
    id: 9,
    title: "Anticipatory Bail in Karnataka: A Complete Guide",
    excerpt: "Complete guide to anticipatory bail in Karnataka under the BNSS, 2023. Learn about the process, when to apply, jurisdiction, and practical considerations for securing pre-arrest protection.",
    date: "2024-01-30",
    readTime: "10 min read",
    category: "Criminal Law",
    featured: false
  },
  {
    id: 10,
    title: "Cheque Bounce Cases: Understanding Section 138 Proceedings",
    excerpt: "Complete guide to cheque bounce cases under Section 138 of the Negotiable Instruments Act. Learn about jurisdiction, proceedings, rights of accused, remedies for complainants, and practical considerations in Karnataka courts.",
    date: "2024-01-30",
    readTime: "12 min read",
    category: "Criminal Law",
    featured: false
  },
  {
    id: 11,
    title: "Commercial Disputes: A Guide for Businesses",
    excerpt: "Complete guide to commercial disputes in Karnataka under the Commercial Courts Act, 2015. Learn about forums for resolution, common types of disputes, practical approaches, and timelines for effective business dispute management.",
    date: "2024-02-02",
    readTime: "11 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 12,
    title: "Recovery of Money in Commercial Disputes: How Commercial Courts in Karnataka Can Help",
    excerpt: "Complete guide to money recovery in commercial disputes under the Commercial Courts Act, 2015. Learn about jurisdiction, filing procedures, timelines, and practical strategies for effective debt recovery in Karnataka.",
    date: "2024-02-05",
    readTime: "10 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 13,
    title: "Filing a Police Complaint in Karnataka: A Step-by-Step Guide",
    excerpt: "Complete guide to filing police complaints in Karnataka under the BNSS, 2023. Learn about the process, difference between complaint and FIR, jurisdiction, and remedies when police refuse to register complaints.",
    date: "2024-02-08",
    readTime: "9 min read",
    category: "Criminal Law",
    featured: false
  },
  {
    id: 14,
    title: "Filing a Private Complaint Before a Magistrate in Karnataka",
    excerpt: "Complete guide to filing private complaints before Magistrates in Karnataka under the BNSS, 2023. Learn about the process, when to file, jurisdiction, and remedies when police fail to act on complaints.",
    date: "2024-02-10",
    readTime: "8 min read",
    category: "Criminal Law",
    featured: false
  },
  {
    id: 15,
    title: "Filing a Property Dispute Case in Karnataka: A Complete Guide",
    excerpt: "Complete guide to filing property dispute cases in Karnataka courts. Learn about common types of disputes, jurisdiction, filing process, timelines, and practical considerations for property owners.",
    date: "2024-02-12",
    readTime: "10 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 16,
    title: "Filing a Partition Suit in Karnataka: A Complete Guide",
    excerpt: "Complete guide to filing partition suits in Karnataka courts. Learn about partition rights, jurisdiction, filing process, timelines, and practical considerations for co-owners and heirs.",
    date: "2024-02-15",
    readTime: "9 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 17,
    title: "Obtaining an Injunction in Property Disputes in Karnataka",
    excerpt: "Complete guide to obtaining injunctions in property disputes in Karnataka. Learn about types of injunctions, legal basis, filing process, and practical considerations for protecting property rights.",
    date: "2024-02-18",
    readTime: "8 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 18,
    title: "Legal Due Diligence Before Buying Property in Karnataka: A Complete Guide",
    excerpt: "Complete guide to legal due diligence before buying property in Karnataka. Learn about title verification, encumbrance checks, documentation, and practical considerations for safe property transactions.",
    date: "2024-02-20",
    readTime: "11 min read",
    category: "Civil Law",
    featured: false
  },
  {
    id: 19,
    title: "Filing a Builder-Buyer Complaint in Karnataka: RERA and Consumer Forum Remedies",
    excerpt: "Complete guide to filing builder-buyer complaints in Karnataka under RERA and Consumer Protection Act. Learn about remedies, filing process, and practical considerations for homebuyers.",
    date: "2024-02-22",
    readTime: "9 min read",
    category: "Consumer Law",
    featured: false
  }
];

// Legal Insights Carousel Component
function LegalInsightsCarousel() {
  const [currentInsightSet, setCurrentInsightSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsightSet((prev) => (prev + 1) % Math.ceil(blogPosts.length / 3));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentInsights = () => {
    const startIndex = currentInsightSet * 3;
    return blogPosts.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-8">Legal Insights</h2>
          <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          key={currentInsightSet}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {getCurrentInsights().map((insight, index) => (
            <motion.div
              key={`${insight.id}-${currentInsightSet}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-[#D4AF37] font-semibold mb-2">{insight.date}</div>
              <h3 className="text-xl font-semibold text-black mb-4 hover:text-[#D4AF37] transition-colors cursor-pointer">
                {insight.title}
              </h3>
              <p className="text-gray-600 mb-4 text-justify">{insight.excerpt}</p>
              <div className="flex items-center justify-between">
                <Link 
                  href={`/blogs/${insight.id}`} 
                  className="text-[#D4AF37] font-semibold hover:underline"
                >
                  Read more →
                </Link>
                <span className="text-sm text-gray-500">{insight.readTime}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insight Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(blogPosts.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentInsightSet(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentInsightSet ? 'bg-[#D4AF37]' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-8">
          <Link 
            href="/blogs" 
            className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors"
          >
            View All Legal Insights
          </Link>
        </div>
      </div>
    </section>
  );
}

// Quote Carousel Component
function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % shuffledQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl text-[#D4AF37] mb-4 md:mb-8">"</div>
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white italic leading-relaxed mb-4 md:mb-8 px-2 text-center">
            {shuffledQuotes[currentQuote].text}
          </blockquote>
          <div className="text-4xl md:text-6xl text-[#D4AF37] mb-2 md:mb-4">"</div>
          <cite className="text-base md:text-lg text-[#D4AF37] font-medium">
            — {shuffledQuotes[currentQuote].author}
          </cite>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSet((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialSet * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Client Testimonials</h2>
          <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          key={currentTestimonialSet}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {getCurrentTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${currentTestimonialSet}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <div className="text-4xl text-[#D4AF37] mb-4">"</div>
              <blockquote className="text-gray-300 italic leading-relaxed mb-6 text-justify">
                {testimonial.quote}
              </blockquote>
              <div className="text-[#D4AF37] font-semibold">{testimonial.author}</div>
              <div className="text-gray-400 text-sm">{testimonial.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialSet(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonialSet ? 'bg-[#D4AF37]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 md:mb-6 leading-tight">
              Justice with Precision.<br />
              Counsel with Integrity.
            </h1>
            <div className="mt-4 md:mt-6 h-1 w-20 md:w-32 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 text-justify">
              Trusted advocates for complex disputes, business strategy, and personal rights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
          >
            <Link 
              href="/contact" 
              className="inline-block bg-[#D4AF37] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors text-base md:text-lg shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition-colors text-base md:text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Carousel */}
      <QuoteCarousel />

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-8">Who We Are</h2>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full mb-12" />
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              We are more than a law firm — we are strategists, defenders, and trusted advisors 
              committed to our clients' success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">Areas of Expertise</h2>
            <div className="mt-4 h-1 w-16 md:w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-center">{area.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 text-center">{area.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center text-justify">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">What Sets Us Apart</h2>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {uniqueStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 md:space-x-4"
              >
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs md:text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-black mb-2">{strength.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Legal Insights */}
      <LegalInsightsCarousel />


    </main>
  );
}