"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageTitle?: string;
}

export default function FAQSchema({ faqs, pageTitle = "Frequently Asked Questions" }: FAQSchemaProps) {
  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-6">{pageTitle}</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 bg-gray-800/50">
            <h4 className="text-lg font-medium text-[#D4AF37] mb-2">{faq.question}</h4>
            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
