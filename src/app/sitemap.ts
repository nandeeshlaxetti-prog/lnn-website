import type { MetadataRoute } from 'next';
import { blogPosts } from './blogs/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lnnlegal.in';
  
  // Main pages
  const mainPages = [
    '', 'about', 'services', 'team', 'blogs', 'contact'
  ];
  
  // Blog pages
  const blogPages = blogPosts.map(post => `/blogs/${post.id}`);
  
  // Combine all pages
  const allPages = [...mainPages, ...blogPages];
  
  return allPages.map((page) => ({
    url: `${base}${page}`,
    lastModified: new Date(),
    changeFrequency: page.startsWith('/blogs/') ? 'monthly' : 'weekly',
    priority: page === '' ? 1.0 : page.startsWith('/blogs/') ? 0.6 : 0.8,
  }));
}