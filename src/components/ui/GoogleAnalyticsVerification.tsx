"use client";

import { useEffect } from 'react';

export default function GoogleAnalyticsVerification() {
  useEffect(() => {
    // Check if Google Analytics is loaded
    const checkGA = () => {
      if (typeof window !== 'undefined') {
        console.log('Checking Google Analytics...');
        console.log('window.gtag:', window.gtag);
        console.log('window.dataLayer:', window.dataLayer);
        
        if (window.gtag) {
          console.log('✅ Google Analytics is loaded and working!');
          
          // Send a test event
          window.gtag('event', 'page_view', {
            page_title: 'Google Analytics Verification',
            page_location: window.location.href
          });
        } else {
          console.log('❌ Google Analytics not detected');
        }
      }
    };

    // Check immediately and after a delay
    checkGA();
    setTimeout(checkGA, 2000);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white p-2 rounded text-xs z-50">
      GA Check: Open console to see verification
    </div>
  );
}
