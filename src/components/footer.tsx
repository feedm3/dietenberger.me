import Link from 'next/link';

export function Footer() {
  return (
    <footer className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Fabian Dietenberger. All rights
        reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://linkedin.com/in/fabiandietenberger"
          className="text-xs hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my LinkedIn profile"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/feedm3"
          className="text-xs hover:underline underline-offset-4"
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
