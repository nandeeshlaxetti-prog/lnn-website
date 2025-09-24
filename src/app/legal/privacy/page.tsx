"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | LNN Legal – Advocates & Solicitors, Bengaluru</title>
        <meta name="description" content="Privacy Policy for LNN Legal website and legal services. Learn how we protect your personal information and maintain client confidentiality." />
        <link rel="canonical" href="https://lnnlegal.in/legal/privacy" />
        <meta property="og:title" content="Privacy Policy | LNN Legal" />
        <meta property="og:description" content="Privacy Policy for LNN Legal website and legal services." />
        <meta property="og:url" content="https://lnnlegal.in/legal/privacy" />
        <meta property="og:type" content="article" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
          <div className="mt-3 h-1 w-20 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-300">
            Last updated: December 15, 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At LNN Legal – Advocates & Solicitors ("we," "our," or "us"), we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at lnnlegal.in or engage with our legal services. As legal professionals, we understand the importance of privacy and confidentiality, and we adhere to the highest standards of data protection in accordance with applicable Indian laws, including the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect various types of information to provide you with comprehensive legal services and maintain effective communication. Personal information includes your name, email address, phone number, postal address, and any other information you voluntarily provide when contacting us for legal consultation or services. We may also collect information about your legal matters, case details, and any documents you share with us in the course of our attorney-client relationship.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Additionally, we automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring website, pages visited, and the time and date of your visit. This information helps us improve our website's functionality and user experience while maintaining security protocols.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may also collect information from third-party sources, such as public records, court filings, or other legal databases, when necessary for providing legal services or conducting due diligence as part of our professional obligations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use your personal information primarily to provide legal services, maintain attorney-client communications, and fulfill our professional obligations. This includes analyzing your legal matters, preparing legal documents, representing you in court proceedings, and providing legal advice and consultation. We also use your information to schedule appointments, send important updates about your cases, and maintain our professional relationship.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your information may be used for administrative purposes, including billing, payment processing, and maintaining our client records in accordance with legal and professional requirements. We may also use aggregated, anonymized data for internal analysis, improving our services, and developing legal insights that benefit our practice and clients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In certain circumstances, we may use your information to comply with legal obligations, respond to court orders or subpoenas, or protect our rights and interests in legal proceedings. We will always strive to minimize the disclosure of confidential information and maintain the attorney-client privilege to the fullest extent permitted by law.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We maintain strict confidentiality regarding your personal information and legal matters. We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information in specific circumstances that are essential for providing legal services or required by law.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our clients, such as IT service providers, document management systems, or court filing services. These third parties are bound by confidentiality agreements and are prohibited from using your information for any purpose other than providing services to us.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may disclose your information when required by law, court order, or legal process, or when necessary to protect our rights, property, or safety, or that of our clients or others. We may also share information with other legal professionals, experts, or consultants when necessary for your case, always maintaining appropriate confidentiality protections.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In the event of a merger, acquisition, or sale of our practice, your information may be transferred as part of the business transaction, but we will ensure that the acquiring entity maintains the same level of privacy protection and confidentiality obligations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Data Security and Protection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement comprehensive security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security protocols include encryption of sensitive data, secure servers, regular security audits, and restricted access to personal information on a need-to-know basis.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              All our staff members are bound by strict confidentiality agreements and are trained in data protection practices. We maintain physical, electronic, and procedural safeguards to protect your information, including secure file storage, encrypted communications, and secure disposal of confidential documents.
            </p>
            <p className="text-gray-300 leading-relaxed">
              While we strive to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we continuously review and update our security measures to address emerging threats and maintain the highest standards of data protection.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Cookies and Website Analytics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. Cookies are small text files stored on your device that help us remember your preferences and provide personalized content.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device for a specified period. We may also use third-party analytics services to understand how visitors interact with our website, but these services are configured to respect your privacy preferences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You can control cookies through your browser settings, including the ability to block or delete cookies. However, disabling cookies may affect the functionality of our website and your ability to access certain features or services.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights and Choices</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have certain rights regarding your personal information, including the right to access, correct, update, or delete your information. You may also have the right to restrict or object to certain processing activities, request data portability, or withdraw consent where applicable.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe and in accordance with applicable laws. Please note that some rights may be limited by legal obligations, professional responsibilities, or legitimate business interests.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may also opt out of certain communications, such as marketing emails or newsletters, by following the unsubscribe instructions in our communications or by contacting us directly. However, we may still send you important information related to your legal matters or our professional relationship.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Retention of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of information and the nature of our relationship.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Legal files and client records are typically retained for extended periods as required by professional standards, legal obligations, and the statute of limitations for potential claims. We maintain secure storage systems for archived information and ensure appropriate disposal procedures when retention periods expire.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by posting the updated policy on our website and updating the "Last updated" date.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our website or services after any changes indicates your acceptance of the updated policy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about changes to this Privacy Policy or how we handle your information, please contact us using the information provided below.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-6 mt-4">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-[#D4AF37]">LNN Legal – Advocates & Solicitors</strong><br />
                53/1, Divya Maple, 2nd Floor<br />
                16th Cross, 8th Main Road<br />
                Malleshwaram, Bengaluru<br />
                Karnataka 560055, India<br /><br />
                <strong className="text-[#D4AF37]">Phone:</strong> +91 9033286123<br />
                <strong className="text-[#D4AF37]">Phone:</strong> +91 9731914801<br />
                <strong className="text-[#D4AF37]">Phone:</strong> +91 8746965652<br />
                <strong className="text-[#D4AF37]">Email:</strong> nandeesh@lnnlegal.in<br />
                <strong className="text-[#D4AF37]">Email:</strong> sangamesh@lnnlegal.in<br />
                <strong className="text-[#D4AF37]">Email:</strong> akhil@lnnlegal.in<br />
                <strong className="text-[#D4AF37]">Website:</strong> https://lnnlegal.in
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are committed to addressing your privacy concerns promptly and professionally. We will respond to your inquiries within a reasonable timeframe and work with you to resolve any issues related to your personal information.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  );
}
