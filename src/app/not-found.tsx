import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        This page could not be found.
      </p>
      <Button nativeButton={false} render={<Link href="/" />} className="mt-8">
        Go back home
      </Button>
    </main>
  );
}
