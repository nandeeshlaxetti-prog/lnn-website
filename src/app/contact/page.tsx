"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import GoogleMap from "../../components/ui/GoogleMap";

// FAQ Data
const faqData = [
  {
    question: "How quickly can I get a consultation?",
    answer: "We typically respond to consultation requests within 24 hours. For urgent matters, please call us directly during business hours."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring any relevant documents, contracts, or correspondence related to your legal matter. We'll provide a detailed list when we schedule your appointment."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that legal services can be a significant investment. We offer flexible payment arrangements tailored to your specific situation."
  },
  {
    question: "What areas of law do you specialize in?",
    answer: "We specialize in civil & commercial litigation, criminal defence & white collar laws, real estate & property laws, family & matrimonial laws, corporate advisory & trainings, contract drafting & negotiation, consumer protection laws, and banking & finance laws."
  },
  {
    question: "Do you handle cases outside of Bengaluru?",
    answer: "Yes, we handle cases across Karnataka and can coordinate with local counsel in other states when necessary."
  }
];

// Contact Methods Data
const contactMethods = [
  {
    title: "Phone Consultation",
    description: "Speak directly with our legal team",
    icon: "📞",
    details: ["+91 9033286123", "+91 9731914801", "+91 8746965652"],
    action: "Call Now",
    actionType: "phone",
    actionValue: "+919033286123"
  },
  {
    title: "Email Inquiry",
    description: "Send us detailed information about your case",
    icon: "✉️",
    details: ["nandeesh@lnnlegal.in", "sangamesh@lnnlegal.in", "akhil@lnnlegal.in"],
    action: "Send Email",
    actionType: "email",
    actionValue: "nandeesh@lnnlegal.in"
  },
  {
    title: "Office Visit",
    description: "Schedule an in-person consultation",
    icon: "🏢",
    details: ["53/1, Divya Maple, 2nd Floor", "16th Cross, 8th Main Road", "Malleshwaram, Bengaluru"],
    action: "Get Directions",
    actionType: "directions",
    actionValue: "https://www.google.com/maps/dir/?api=1&destination=2H47%2BPP+Bengaluru%2C+Karnataka"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    urgency: "normal"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          subject: "", 
          message: "", 
          preferredContact: "email",
          urgency: "normal"
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6">
              Get in Touch
            </h1>
            <div className="mt-4 h-1 w-16 md:w-24 bg-[#D4AF37] mx-auto rounded-full" />
            <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Ready to discuss your legal needs? We're here to help with expert guidance and personalized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <div className="mt-4 h-1 w-16 md:w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6">{method.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{method.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 text-justify">{method.description}</p>
                <div className="space-y-2 mb-4 md:mb-6">
                  {method.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-xs md:text-sm">{detail}</p>
                  ))}
                </div>
                {method.actionType === "phone" ? (
                  <a 
                    href={`tel:${method.actionValue}`}
                    className="w-full bg-[#D4AF37] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors text-sm md:text-base block text-center"
                  >
                    {method.action}
                  </a>
                ) : method.actionType === "email" ? (
                  <a 
                    href={`mailto:${method.actionValue}`}
                    className="w-full bg-[#D4AF37] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors text-sm md:text-base block text-center"
                  >
                    {method.action}
                  </a>
                ) : method.actionType === "directions" ? (
                  <a 
                    href={method.actionValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#D4AF37] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors text-sm md:text-base block text-center"
                  >
                    {method.action}
                  </a>
                ) : (
                  <button className="w-full bg-[#D4AF37] text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors text-sm md:text-base">
                    {method.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-20 bg-black">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg"
                >
                  <p className="text-green-800 font-medium">Message sent successfully! We'll contact you within 24 hours.</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg"
                >
                  <p className="text-red-800 font-medium">Sorry, there was an error. Please try again or call us directly.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-white mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                    placeholder="Brief description of your legal matter"
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-semibold text-white mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="office">Office Visit</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors resize-none"
                    placeholder="Please provide details about your legal matter, including any relevant background information..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Visit Our Office</h3>
                <GoogleMap 
                  latitude={13.0068714}
                  longitude={77.56435359999999}
                  zoom={16}
                  className="w-full h-64 rounded-xl border border-gray-600"
                />
              </div>

              {/* Contact Details */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-white">Office Address</p>
                      <p className="text-gray-300 text-sm">
                        53/1, Divya Maple, 2nd Floor<br />
                        16th Cross, 8th Main Road<br />
                        Malleshwaram, Bengaluru<br />
                        Karnataka 560055, India<br />
                        <span className="text-[#D4AF37]">Plus Code: 2H47+PP Bengaluru</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-white">Phone Numbers</p>
                      <div className="text-gray-300 text-sm space-y-1">
                        <p>+91 9033286123</p>
                        <p>+91 9731914801</p>
                        <p>+91 8746965652</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D4AF37] text-xl">✉️</span>
                    <div>
                      <p className="font-semibold text-white">Email Addresses</p>
                      <div className="text-gray-300 text-sm space-y-1">
                        <p>nandeesh@lnnlegal.in</p>
                        <p>sangamesh@lnnlegal.in</p>
                        <p>akhil@lnnlegal.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="mt-4 h-1 w-24 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl border border-gray-600 p-6"
              >
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-white text-lg mb-2 group-open:text-[#D4AF37] transition-colors">
                    {faq.question}
                  </summary>
                  <p className="text-gray-300 leading-relaxed mt-3 text-justify">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to protect your rights and interests. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+919033286123"
                className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors"
              >
                Call Now
              </Link>
              <Link 
                href="/services" 
                className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}