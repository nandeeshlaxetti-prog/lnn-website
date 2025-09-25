"use client";

import React from 'react';

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ 
  latitude, 
  longitude, 
  zoom = 15, 
  className = "w-full h-64 rounded-xl border border-gray-700" 
}: GoogleMapProps) {
  // LNN Legal specific Google Maps embed URL
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.451869780261!2d77.56435359999999!3d13.0068714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1789aba5269d%3A0xe29b33e557924ba3!2sLNN%20Legal!5e0!3m2!1sen!2sin!4v1758812929383!5m2!1sen!2sin";

  return (
    <div className={className}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
        title="LNN Legal Office Location"
      />
    </div>
  );
}