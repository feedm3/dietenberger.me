import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, title, className, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('w-full py-12 md:py-24 lg:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id={headingId}
          className="text-center text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-4xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
