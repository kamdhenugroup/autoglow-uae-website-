import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autoglow.ae';
  const routes = [
    '',
    '/glanzpro',
    '/about',
    '/contact',
    '/gallery',
    '/reviews',
    '/locations',
    '/locations/dubai',
    '/locations/abu-dhabi',
    '/services',
    '/services/paint-protection-film',
    '/services/ceramic-coating',
    '/services/paint-correction',
    '/services/vinyl-wrapping',
    '/services/window-tinting',
    '/services/full-detailing',
    '/services/interior-restoration',
    '/services/peelable-paint',
    '/services/wheel-repair',
    '/services/glass-repair',
    '/services/body-shop',
    '/services/auto-maintenance',
    '/services/wash',
    '/services/commercial-residential',
    '/blog',
    '/privacy',
    '/terms',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' || route === '/services' || route === '/glanzpro' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/glanzpro' || route.startsWith('/services') || route === '/blog' ? 0.9 : 0.8,
  }));

  const posts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    ...(post.updatedAt || post.date ? { lastModified: new Date(post.updatedAt || post.date).toISOString() } : {}),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries];
}
