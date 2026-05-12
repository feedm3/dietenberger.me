import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
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

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function ProjectCard({
  title,
  description,
  tech,
  href,
  start,
  end,
}: ProjectCardProps) {
  const card = (
    <Card className="h-full transition-shadow hover:shadow-lg dark:hover:shadow-none">
      <CardHeader>
        <p className="text-xs tracking-wide text-muted-foreground uppercase tabular-nums">
          <time dateTime={start}>{formatMonth(start)}</time>
          {' – '}
          {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'present'}
        </p>
        <CardTitle className="flex items-center gap-2">
          <h3>{title}</h3>
          {href && (
            <ExternalLink
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          )}
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

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener" aria-label={title}>
        {card}
      </Link>
    );
  }

  return card;
}
