import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { DateRange } from '@/components/date-range';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  start: string;
  end?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  href,
  start,
  end,
}: ProjectCardProps) {
  return (
    <Card className="relative h-full transition-shadow has-[a:hover]:shadow-lg has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring dark:has-[a:hover]:shadow-none">
      <CardHeader>
        <DateRange start={start} end={end} />
        <CardTitle>
          <h3>
            {href ? (
              // The link's overlay stretches over the whole card, so the
              // entire card is clickable while the link name stays the title.
              <Link
                href={href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 outline-none after:absolute after:inset-0"
              >
                {title}
                <ExternalLink
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            ) : (
              title
            )}
          </h3>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
