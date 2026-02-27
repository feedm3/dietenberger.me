import type { Activity } from 'react-activity-calendar';
import { GithubCalendar } from '@/components/github-calendar';
import { ProjectCard } from '@/components/project-card';
import { Card, CardContent } from '@/components/ui/card';

async function getContributions(): Promise<Activity[]> {
  try {
    const res = await fetch(
      'https://github-contributions-api.jogruber.de/v4/feedm3?y=last',
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.contributions;
  } catch {
    return [];
  }
}

export async function ProjectsSection() {
  const contributions = await getContributions();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-balance sm:text-4xl md:text-5xl">
          After Hours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {contributions.length > 0 && (
            <Card className="md:col-span-2">
              <CardContent>
                <GithubCalendar data={contributions} />
              </CardContent>
            </Card>
          )}
          <ProjectCard
            title="Kisslegg App"
            description="Everything a small town needs in one app. AI assistant, events, restaurants, waste schedules, and the local newspaper — built for the municipality of Kißlegg."
            tech={[
              'Next.js',
              'TypeScript',
              'Mastra AI',
              'Trigger.dev',
              'shadcn/ui',
              'Tailwind',
              'Vercel',
            ]}
            href="https://www.kisslegg.app/"
          />
          <ProjectCard
            title="Sippe Gwzdone"
            description="No more spreadsheets for group expenses. Everyone sees purchases, balances, and debts the moment they're added."
            tech={['React', 'TypeScript', 'Vite', 'Zustand', 'MUI', 'Firebase']}
            href="https://sippegwzdone.de/"
          />
        </div>
      </div>
    </section>
  );
}
