import Link from 'next/link';
import type { Activity } from 'react-activity-calendar';
import { GithubCalendar } from '@/components/github-calendar';
import { ProjectCard, type ProjectCardProps } from '@/components/project-card';
import { Card, CardContent } from '@/components/ui/card';

const projects: ProjectCardProps[] = [
  {
    title: 'Kisslegg App',
    description:
      'Everything a small town needs in one app. AI assistant, events, restaurants, waste schedules, and the local newspaper. Built for the municipality of Kißlegg.',
    tech: [
      'Next.js',
      'TypeScript',
      'Mastra AI',
      'Trigger.dev',
      'shadcn/ui',
      'Tailwind',
      'Vercel',
    ],
    href: 'https://www.kisslegg.app/',
    start: '2025-05',
  },
  {
    title: 'DriveBeats',
    description:
      'Stream your MP3 collection straight from Google Drive. Favorites, playlists, and full playback control. No uploads, no syncing, all in the browser.',
    tech: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'shadcn/ui',
      'Tailwind',
      'Google Drive API',
    ],
    href: 'https://www.drivebeats.app/',
    start: '2026-03',
  },
  {
    title: 'Sippe Gwzdone',
    description:
      "No more spreadsheets for group expenses. Everyone sees purchases, balances, and debts the moment they're added.",
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'MUI', 'Firebase'],
    href: 'https://sippegwzdone.de/',
    start: '2021-03',
  },
  {
    title: 'Abfallkalender',
    description:
      'Never miss bin day again. Every pickup date for your address in Landkreis Ravensburg, all in one place.',
    tech: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Neon',
      'Trigger.dev',
      'Tailwind',
      'Vercel',
    ],
    href: 'https://www.abfallkalender-rv.de',
    start: '2026-02',
  },
  {
    title: 'Aktive Naturschule Allgäu',
    description:
      'Learning with head, heart, and hand, indoors and outdoors. Vision, founding team, pedagogy, and an income-based tuition calculator. Built for a new nature school near Kißlegg.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://www.aktive-naturschule-allgaeu.de',
    start: '2026-04',
  },
];

async function getContributions(): Promise<Activity[]> {
  try {
    const res = await fetch(
      'https://github-contributions-api.jogruber.de/v4/feedm3?y=last',
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) {
      console.error(
        `GitHub contributions fetch failed: ${res.status} ${res.statusText}`,
      );
      return [];
    }
    const data = await res.json();
    return data.contributions;
  } catch (err) {
    console.error('GitHub contributions fetch threw', err);
    return [];
  }
}

const githubUrl = 'https://github.com/feedm3';

export async function ProjectsSection() {
  const contributions = await getContributions();
  const sortedProjects = [...projects].sort((a, b) =>
    b.start.localeCompare(a.start),
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-center text-balance sm:text-4xl md:text-5xl">
          After Hours
        </h2>

        {contributions.length > 0 && (
          <Card className="mt-12">
            <CardContent>
              <GithubCalendar data={contributions} />
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground text-balance">
          Want to see more? Everything else I build and experiment with lives on{' '}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
            className="font-medium text-foreground underline underline-offset-4 hover:text-foreground"
          >
            my GitHub
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
