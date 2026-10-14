import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines must be able to read the imprint's noindex metadata.
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
        ],
        disallow: '/impressum',
      },
    ],
    sitemap: 'https://www.dietenberger.me/sitemap.xml',
  };
}
