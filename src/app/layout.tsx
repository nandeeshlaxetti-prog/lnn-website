import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import DisclaimerModal from "@/components/ui/DisclaimerModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lnnlegal.in'),
  title: {
    default: 'LNN Legal – Advocates & Solicitors, Bengaluru',
    template: '%s | LNN Legal',
  },
  icons: {
    icon: '/images/logo/lnn-legal-logo.png',
    shortcut: '/images/logo/lnn-legal-logo.png',
    apple: '/images/logo/lnn-legal-logo.png',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
  description:
    'LNN Legal - Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law. Trusted advocates for individuals and businesses across Karnataka.',
  keywords: [
    'lawyer bangalore',
    'advocate bangalore', 
    'legal services bangalore',
    'civil litigation',
    'criminal defense',
    'real estate lawyer',
    'family law attorney',
    'corporate lawyer',
    'consumer protection',
    'LNN Legal'
  ],
  alternates: { canonical: 'https://lnnlegal.in' },
  openGraph: {
    title: 'LNN Legal – Advocates & Solicitors, Bengaluru',
    description:
      'LNN Legal - Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law.',
    url: 'https://lnnlegal.in',
    siteName: 'LNN Legal',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://lnnlegal.in/images/logo/lnn-legal-logo.png',
        width: 400,
        height: 200,
        alt: 'LNN Legal Logo',
      },
      {
        url: 'https://lnnlegal.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LNN Legal - Advocates & Solicitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LNN Legal – Advocates & Solicitors, Bengaluru',
    description: 'LNN Legal - Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law.',
    images: ['https://lnnlegal.in/images/logo/lnn-legal-logo.png', 'https://lnnlegal.in/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo/lnn-legal-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo/lnn-legal-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo/lnn-legal-logo.png" />
        <meta property="og:image" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
        <meta name="twitter:image" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
        <meta name="logo" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        
        {/* Disclaimer Modal */}
        <DisclaimerModal />
        
        {/* Analytics */}
        <Script
          id="ga4"
          strategy="afterInteractive"
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        
        {/* Google Search Console */}
        <Script id="gsc" strategy="afterInteractive">
          {/* Add your GSC verification token here */}
        </Script>
        
        {/* Structured Data for Law Firm */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LegalService", "Organization"],
              "name": "LNN Legal",
              "alternateName": "LNN Legal Advocates & Solicitors",
              "description": "Premier law firm in Bengaluru, Karnataka specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law.",
              "url": "https://lnnlegal.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lnnlegal.in/images/logo/lnn-legal-logo.png",
                "width": 400,
                "height": 200
              },
              "image": "https://lnnlegal.in/og-image.jpg",
              "telephone": "+91-80-1234-5678",
              "email": "info@lnnlegal.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Legal Street",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9716",
                "longitude": "77.5946"
              },
              "areaServed": {
                "@type": "City",
                "name": "Bengaluru"
              },
              "serviceType": [
                "Civil Litigation",
                "Criminal Defense",
                "Real Estate Law",
                "Family Law",
                "Corporate Advisory",
                "Consumer Protection",
                "Banking Law"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.linkedin.com/company/lnn-legal"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
