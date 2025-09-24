"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem('disclaimer-accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimer-accepted', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    // Redirect to external site or show alternative content
    window.location.href = 'https://google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-2xl mx-4 bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Legal Disclaimer
              </h2>
              
              <div className="text-gray-300 text-left space-y-4 mb-8">
                <p>
                  The information provided on this website is for general informational purposes only and does not constitute legal advice.
                </p>
                <p>
                  LNN Legal makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. For specific legal advice, please consult with our qualified attorneys.
                </p>
                <p>
                  By continuing to use this website, you acknowledge that you have read and understood this disclaimer.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAccept}
                  className="px-8 py-3 bg-[#D4AF37] text-black rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
                >
                  I Understand & Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Decline & Exit
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
