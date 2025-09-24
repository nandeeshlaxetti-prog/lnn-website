import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lnnlegal.in';
  
  // Main pages
  const mainPages = [
    '', 'about', 'services', 'team', 'blogs', 'contact'
  ];
  
  // Blog pages - using static IDs since we removed the dynamic import
  const blogPages = [
    '/blogs/7', // SARFAESI Act
    '/blogs/8', // Consumer Complaints
    '/blogs/9', // Real Estate Law
    '/blogs/10', // Family Law
    '/blogs/11', // Criminal Defense
    '/blogs/12', // Corporate Law
    '/blogs/13', // Banking Law
    '/blogs/14', // IP Law
    '/blogs/15', // Labor Law
    '/blogs/16', // Services Law
  ];
  
  // Combine all pages
  const allPages = [...mainPages, ...blogPages];
  
  return allPages.map((page) => ({
    url: `${base}${page}`,
    lastModified: new Date(),
    changeFrequency: page.startsWith('/blogs/') ? 'monthly' : 'weekly',
    priority: page === '' ? 1.0 : page.startsWith('/blogs/') ? 0.6 : 0.8,
  }));
}