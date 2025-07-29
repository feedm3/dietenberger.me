import type * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsCardProps {
  title: string;
  skills: string[];
}

export const SkillsCard = (props: SkillsCardProps): React.JSX.Element => {
  return (
    <Card className="hover:shadow-lg transition-shadow gap-4">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {props.skills.map((skill) => (
            <li className="flex items-center gap-2" key={skill}>
              <span className="w-1 h-1 bg-current rounded-full"></span>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
