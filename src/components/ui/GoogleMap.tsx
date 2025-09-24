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
  // Simple Google Maps embed URL using search - no API key needed
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzI0LjciIE4gNzfCsDMzJzUxLjYiRQ!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

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