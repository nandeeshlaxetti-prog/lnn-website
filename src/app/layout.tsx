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
  description:
    'LNN Legal - Leading law firm in Bengaluru specializing in civil litigation, criminal defense, real estate law, family law, corporate advisory, and consumer protection. Expert legal counsel for individuals and businesses.',
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
    'LNN Legal',
    'Laxetti Navadagi Nair'
  ],
  alternates: { canonical: 'https://lnnlegal.in' },
  openGraph: {
    title: 'LNN Legal – Advocates & Solicitors, Bengaluru',
    description:
      'Leading law firm in Bengaluru: Civil & Commercial Litigation • Criminal Defence • Real Estate • Family Law • Corporate Advisory • Consumer Protection',
    url: 'https://lnnlegal.in',
    siteName: 'LNN Legal',
    type: 'website',
    locale: 'en_IN',
    images: [
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
    description: 'Expert legal counsel for individuals and businesses in Bengaluru.',
    images: ['https://lnnlegal.in/og-image.jpg'],
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
      </body>
    </html>
  );
}
