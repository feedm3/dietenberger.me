import type * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsCardProps {
  title: string;
  skills: string[];
}

export const SkillsCard = (props: SkillsCardProps): React.JSX.Element => {
  return (
    <Card className="hover:shadow-lg dark:hover:shadow-none transition-shadow gap-4">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* biome-ignore lint/a11y/noRedundantRoles: role="list" restores VoiceOver semantics when list-style is removed via Tailwind preflight */}
        <ul className="flex flex-col gap-2 text-foreground/80" role="list">
          {props.skills.map((skill) => (
            <li className="flex items-center gap-2" key={skill}>
              <span
                aria-hidden="true"
                className="size-1 bg-muted-foreground rounded-full shrink-0"
              />
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
