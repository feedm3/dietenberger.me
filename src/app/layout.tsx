import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dietenberger.me'),
  title:
    'Fabian Dietenberger - Engineering Manager & Senior Software Developer',
  description:
    'Engineering Manager and Senior Software Developer with 10+ years experience. Specialized in React, TypeScript, Node.js, AI-powered applications, and team leadership. Based in Kißlegg, Germany.',
  keywords:
    'Engineering Manager, Software Developer, React, Next, TypeScript, Node.js, AI, LLM, Cloud, Team Leadership, Germany',
  authors: [{ name: 'Fabian Dietenberger' }],
  creator: 'Fabian Dietenberger',
  openGraph: {
    title:
      'Fabian Dietenberger - Engineering Manager & Senior Software Developer',
    description:
      'Engineering Manager and Senior Software Developer with 10+ years experience. Specialized in React, TypeScript, Node.js, AI-powered applications, and team leadership.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary',
    title:
      'Fabian Dietenberger - Engineering Manager & Senior Software Developer',
    description:
      'Engineering Manager and Senior Software Developer with 10+ years experience. Specialized in React, TypeScript, Node.js, AI-powered applications, and team leadership.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
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
        {children}
      </body>
    </html>
  );
}
