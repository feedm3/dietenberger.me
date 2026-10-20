import Link from 'next/link';
import type { Activity } from 'react-activity-calendar';
import { GithubCalendar } from '@/components/github-calendar';
import { ProjectCard, type ProjectCardProps } from '@/components/project-card';
import { Section } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

const projects: ProjectCardProps[] = [
  {
    title: 'Leutkirch App',
    description:
      'An independent city app for Leutkirch im Allgäu. Local news, events, restaurants, waste schedules, and an AI assistant, plus the community newspaper to read or listen to.',
    tech: [
      'Next.js',
      'TypeScript',
      'Mastra AI',
      'Neon',
      'Web Push',
      'Vercel Workflows',
      'shadcn/ui',
      'Tailwind',
      'Vercel',
    ],
    href: 'https://leutkirch.dietenberger.me/',
    start: '2026-10',
  },
  {
    title: 'Aktive Naturschule Allgäu',
    description:
      'A website for a new nature school taking shape in the Allgäu. Introduces the educational approach and founding team, with admissions information, an income-based tuition calculator, and open teaching positions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://www.aktive-naturschule-allgaeu.de',
    start: '2026-04',
  },
  {
    title: 'DriveBeats',
    description:
      'Stream your music collection straight from Google Drive. Sync playlists and favorites across devices, download tracks for offline listening, or control playback through compatible AI assistants.',
    tech: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'Neon',
      'WebMCP',
      'shadcn/ui',
      'Tailwind',
      'Google Drive API',
    ],
    href: 'https://www.drivebeats.app/',
    start: '2026-03',
  },
  {
    title: 'Abfallkalender',
    description:
      'Waste collection dates for your street in Landkreis Ravensburg, with optional reminders before pickup. Free to use in the browser, with no account required.',
    tech: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Neon',
      'Vercel Workflows',
      'WebMCP',
      'Tailwind',
      'Vercel',
    ],
    href: 'https://www.abfallkalender-rv.de',
    start: '2026-02',
  },
  {
    title: 'Kißlegg App',
    description:
      'Everything a small town needs in one app. News, events, restaurants, waste schedules, fuel prices, and an AI assistant. Read the community newspaper or listen to its AI-generated podcast. Built for residents of Kißlegg.',
    tech: [
      'Next.js',
      'TypeScript',
      'Mastra AI',
      'Neon',
      'Vercel Workflows',
      'shadcn/ui',
      'Tailwind',
      'Vercel',
    ],
    href: 'https://www.kisslegg.app/',
    start: '2025-05',
  },
  {
    title: 'Sippe Gwzdone',
    description:
      'I built this for my friends: it tracks shared expenses and balances, organizes recurring cabin duties, scores darts games, and runs Flunkyball tournaments.',
    tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'MUI', 'Firebase'],
    href: 'https://sippegwzdone.de/',
    start: '2021-03',
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
    <Section id="projects" title="After Hours">
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
          className="font-medium text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors"
        >
          my GitHub
        </Link>
        .
      </p>
    </Section>
  );
}
