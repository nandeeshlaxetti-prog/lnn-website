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
  // Page-specific titles will override this template
  openGraph: {
    title: 'LNN Legal – Advocates & Solicitors, Bengaluru',
    description: 'LNN Legal - Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law.',
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
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE', // Replace with actual GSC verification code
    // Add other verification codes as needed:
    // bing: 'YOUR_BING_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  description:
    'LNN Legal - Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law. Trusted advocates for individuals and businesses across Karnataka.',
  keywords: [
    'lawyer bangalore',
    'advocate bangalore', 
    'legal services bangalore',
    'civil litigation bangalore',
    'criminal defense bangalore',
    'real estate lawyer bangalore',
    'family law attorney bangalore',
    'corporate lawyer bangalore',
    'consumer protection bangalore',
    'banking law bangalore',
    'contract drafting bangalore',
    'legal consultation bangalore',
    'court representation bangalore',
    'legal advice bangalore',
    'law firm bangalore',
    'attorney bangalore',
    'legal counsel bangalore',
    'litigation lawyer bangalore',
    'property lawyer bangalore',
    'business lawyer bangalore',
    'advocate near me bangalore',
    'lawyer near me bangalore',
    'best advocate bangalore',
    'top lawyer bangalore',
    'experienced advocate bangalore',
    'senior advocate bangalore',
    'advocate in bangalore',
    'lawyer in bangalore',
    'legal services near me',
    'advocate consultation bangalore',
    'court lawyer bangalore',
    'high court advocate bangalore',
    'district court lawyer bangalore',
    'civil court advocate bangalore',
    'criminal court lawyer bangalore',
    'family court advocate bangalore',
    'consumer court lawyer bangalore',
    'banking court advocate bangalore',
    'malleshwaram lawyer',
    'malleshwaram advocate',
    'lawyer in malleshwaram',
    'advocate in malleshwaram',
    'legal services malleshwaram',
    'karnataka legal services',
    'bangalore legal services',
    'karnataka advocate',
    'karnataka lawyer',
    'LNN Legal',
    'Laxetti Navadagi Nair',
    'Nandeesh Laxetti',
    'Sangamesh Navadagi'
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:image" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
        <meta name="twitter:image" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
        <meta name="logo" content="https://lnnlegal.in/images/logo/lnn-legal-logo.png" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="13.0068714;77.56435359999999" />
        <meta name="ICBM" content="13.0068714, 77.56435359999999" />
        <meta name="DC.title" content="LNN Legal - Advocates & Solicitors, Bengaluru" />
        <meta name="DC.creator" content="LNN Legal" />
        <meta name="DC.subject" content="Legal Services, Advocates, Lawyers, Bengaluru" />
        <meta name="DC.description" content="Premier law firm in Bengaluru providing expert legal counsel. Specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law." />
        <meta name="DC.publisher" content="LNN Legal" />
        <meta name="DC.contributor" content="Nandeesh Laxetti, Sangamesh Navadagi" />
        <meta name="DC.date" content="2024-01-01" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://lnnlegal.in" />
        <meta name="DC.language" content="en-IN" />
        <meta name="DC.coverage" content="Bengaluru, Karnataka, India" />
                <meta name="DC.rights" content="Copyright LNN Legal" />
                
                {/* Additional SEO Meta Tags */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#D4AF37" />
                <meta name="msapplication-TileColor" content="#D4AF37" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                
                {/* Page-specific meta tags */}
                <meta name="page-type" content="legal-services" />
                <meta name="audience" content="individuals, businesses, legal professionals" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                <meta name="revisit-after" content="7 days" />
                
                {/* Enhanced Local SEO */}
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="geo.position" content="13.0068714;77.56435359999999" />
                <meta name="ICBM" content="13.0068714, 77.56435359999999" />
                
                {/* Business Hours */}
                <meta name="business-hours" content="Monday-Friday 9:00 AM - 6:00 PM" />
                <meta name="business-days" content="Monday, Tuesday, Wednesday, Thursday, Friday" />
                
                {/* Service Areas */}
                <meta name="service-area" content="Bengaluru, Karnataka, India" />
                <meta name="service-locations" content="Malleshwaram, Bengaluru" />
                
                {/* Legal Practice Areas */}
                <meta name="practice-areas" content="Civil Litigation, Criminal Defense, Real Estate Law, Family Law, Corporate Advisory, Consumer Protection, Banking Law" />
                <meta name="specializations" content="SARFAESI Act, Contract Drafting, Court Representation, Legal Consultation" />
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
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XPKESB6MRJ"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XPKESB6MRJ');
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
              "@type": ["LegalService", "Organization", "ProfessionalService", "LocalBusiness"],
              "name": "LNN Legal",
              "alternateName": ["LNN Legal Advocates & Solicitors", "Laxetti Navadagi & Nair"],
              "description": "Premier law firm in Bengaluru, Karnataka specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, consumer protection, and banking law. Expert legal counsel for individuals and businesses across Karnataka.",
              "url": "https://lnnlegal.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lnnlegal.in/images/logo/lnn-legal-logo.png",
                "width": 400,
                "height": 200
              },
              "image": "https://lnnlegal.in/og-image.jpg",
              "telephone": ["+91-9033286123", "+91-9731914801", "+91-8746965652"],
              "email": ["nandeesh@lnnlegal.in", "sangamesh@lnnlegal.in", "akhil@lnnlegal.in"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "53/1, Divya Maple, 2nd Floor, 16th Cross, 8th Main Road",
                "addressLocality": "Malleshwaram",
                "addressRegion": "Bengaluru",
                "postalCode": "560055",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.0068714",
                "longitude": "77.56435359999999"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bengaluru",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Karnataka"
                  }
                },
                {
                  "@type": "City", 
                  "name": "Malleshwaram",
                  "containedInPlace": {
                    "@type": "City",
                    "name": "Bengaluru"
                  }
                },
                {
                  "@type": "State",
                  "name": "Karnataka"
                }
              ],
              "serviceType": [
                "Civil Litigation",
                "Commercial Litigation", 
                "Criminal Defense",
                "White Collar Crimes",
                "Real Estate Law",
                "Property Disputes",
                "Family Law",
                "Matrimonial Disputes",
                "Corporate Advisory",
                "Contract Drafting",
                "Consumer Protection",
                "Banking Law",
                "SARFAESI Act",
                "Insolvency Law",
                "Labor Law",
                "Employment Law",
                "Intellectual Property",
                "Administrative Law",
                "Lokayukta Proceedings"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "foundingDate": "2020",
              "currenciesAccepted": "INR",
              "paymentAccepted": ["Cash", "Cheque", "Bank Transfer", "UPI"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "25",
                "bestRating": "5",
                "worstRating": "1"
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Nandeesh Laxetti"
                },
                {
                  "@type": "Person", 
                  "name": "Sangamesh Navadagi"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Civil Litigation",
                      "description": "Representation in civil and commercial courts"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Criminal Defense",
                      "description": "Robust defense across criminal courts"
                    }
                  }
                ]
              },
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
