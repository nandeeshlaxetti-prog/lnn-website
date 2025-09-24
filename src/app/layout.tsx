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
    'Full-service law firm in Bengaluru: litigation, advisory, real estate, family, IP, consumer, banking, and more.',
  alternates: { canonical: 'https://lnnlegal.in' },
  openGraph: {
    title: 'LNN Legal – Advocates & Solicitors',
    description:
      'Civil & Commercial Litigation • Criminal Defence • Real Estate • Family Law • Corporate Advisory • Contracts • Consumer • Banking/SARFAESI',
    url: 'https://lnnlegal.in',
    siteName: 'LNN Legal',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LNN Legal – Advocates & Solicitors',
    description: 'Future-ready counsel across disputes & transactions.',
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
