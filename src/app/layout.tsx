import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteTitle =
  'Fabian Dietenberger - Engineering Manager & Senior Software Developer';
const siteDescription =
  'Engineering Manager and Senior Software Developer with 10+ years experience. Specialized in React, TypeScript, Node.js, AI-powered applications, and team leadership. Based in Kißlegg, Germany.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dietenberger.me'),
  alternates: {
    canonical: '/',
  },
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: 'Fabian Dietenberger' }],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Fabian Dietenberger',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabian Dietenberger',
  url: 'https://www.dietenberger.me',
  jobTitle: 'Engineering Manager & Senior Software Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kißlegg',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://linkedin.com/in/fabiandietenberger',
    'https://github.com/feedm3',
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1918' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema is static and trusted
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
