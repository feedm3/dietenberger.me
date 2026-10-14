import Link from 'next/link';

export function Footer() {
  return (
    <footer className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-base text-muted-foreground sm:text-sm text-center sm:text-left">
        &copy; {new Date().getFullYear()} Fabian Dietenberger. All rights
        reserved.
      </p>
      <nav
        aria-label="Footer"
        className="sm:ml-auto flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-sm"
      >
        <Link
          href="/impressum"
          className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Impressum
        </Link>
        <Link
          href="https://linkedin.com/in/fabiandietenberger"
          className="hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my LinkedIn profile"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/feedm3"
          className="hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my GitHub profile"
        >
          GitHub
        </Link>
      </nav>
    </footer>
  );
}
