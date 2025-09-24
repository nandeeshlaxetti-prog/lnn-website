import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lnnlegal.in';
  const pages = [
    '', 'about', 'services', 'blog', 'contact'
  ];
  return pages.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.7,
  }));
}