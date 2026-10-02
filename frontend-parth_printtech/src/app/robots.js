export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://parthprinttech.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
