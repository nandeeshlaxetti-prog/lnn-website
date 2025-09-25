import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lnnlegal.in';
  
  // Main pages with priorities and change frequencies
  const mainPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/team', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blogs', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/legal/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/legal/terms', priority: 0.3, changeFrequency: 'yearly' as const }
  ];
  
  // Service pages
  const servicePages = [
    '/services/civil-litigation',
    '/services/criminal-defense', 
    '/services/real-estate',
    '/services/family-law',
    '/services/corporate-advisory',
    '/services/consumer-protection',
    '/services/banking-law',
    '/services/contracts'
  ];
  
  // Blog pages - using static IDs since we removed the dynamic import
  const blogPages = [
    '/blogs/1', // How to File a Civil Case
    '/blogs/7', // SARFAESI Act
    '/blogs/8', // Consumer Complaints
    '/blogs/9', // Anticipatory Bail
    '/blogs/10', // Cheque Bounce Cases
    '/blogs/11', // Commercial Disputes
    '/blogs/12', // Money Recovery
    '/blogs/13', // Police Complaints
    '/blogs/14', // Private Complaints
    '/blogs/15', // Property Disputes
    '/blogs/16', // Partition Suits
    '/blogs/17', // Injunctions
    '/blogs/18', // Due Diligence
    '/blogs/19'  // Builder-Buyer Complaints
  ];
  
  // Combine all pages
  const allPages = [
    ...mainPages.map(page => ({
      url: `${base}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...servicePages.map(page => ({
      url: `${base}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogPages.map(page => ({
      url: `${base}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ];
  
  return allPages;
}