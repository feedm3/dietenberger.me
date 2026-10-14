import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/footer';

const title = 'Impressum | Fabian Dietenberger';
const description = 'Legal notice and contact details for dietenberger.me.';

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: '/impressum' },
  openGraph: {
    type: 'website',
    siteName: 'Fabian Dietenberger',
    locale: 'en_US',
    title,
    description,
    url: '/impressum',
  },
  twitter: { title, description },
};

export default function Impressum() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <main className="isolate flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col items-start gap-10 px-4 md:px-6">
          <p className="text-base text-muted-foreground sm:text-sm">
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Back to home
            </Link>
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Impressum
            </h1>
            <p className="text-base text-muted-foreground text-pretty">
              Legal notice
            </p>
          </div>

          <address className="flex flex-col gap-6 text-base/7 not-italic">
            <p>
              <span className="font-medium">Fabian Dietenberger</span>
              <br />
              Gartenstraße 22
              <br />
              88353 Kißlegg
              <br />
              Germany
            </p>
            <p>
              <a
                href="mailto:fabian@dietenberger.me"
                className="wrap-anywhere underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                fabian@dietenberger.me
              </a>
            </p>
          </address>
        </div>
      </main>
      <Footer />
    </div>
  );
}
