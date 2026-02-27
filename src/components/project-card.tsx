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

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  href?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  href,
}: ProjectCardProps) {
  const card = (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <h3>{title}</h3>
          {href && (
            <ExternalLink
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
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
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        {card}
      </Link>
    );
  }

  return card;
}
