import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AccentureLogo } from '@/assets/accenture-logo';
import { AdacMotorsportLogo } from '@/assets/adac-motorsport-logo';
import { AllianzLogo } from '@/assets/allianz-logo';
import { AudiLogo } from '@/assets/audi-logo';
import { BmwLogo } from '@/assets/bmw-logo';
import { FcBayernLogo } from '@/assets/fc-bayern-logo';
import { GithubLogo } from '@/assets/github-logo';
import { LinkedInIcon } from '@/assets/linked-in-logo';
import ProfilePicture from '@/assets/profi-picture-laughing.jpg';
import { SapLogo } from '@/assets/sap-logo';
import { ZeissLogo } from '@/assets/zeiss-logo';
import { SkillsCard } from '@/components/skills-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-6">
            <Image
              src={ProfilePicture}
              width={200}
              height={200}
              objectFit={'cover'}
              alt="Fabian Dietenberger portrait"
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Fabian Dietenberger
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Engineering Manager | Senior Software Developer
            </p>
            <p className="max-w-[800px] text-lg text-gray-700 dark:text-gray-300">
              Engineering Manager and Senior Software Developer with +10 years
              of experience leading large-scale enterprise projects. A pragmatic
              problem solver and team player, passionate about building
              high-performing teams and delivering impactful solutions.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="mailto:fabian@dietenberger.me"
                target="_blank"
                rel="noopener noreferrer"
                title={'Send me an email'}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 bg-transparent flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Let's connect</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/fabiandietenberger"
                target="_blank"
                rel="noopener noreferrer"
                title={'Go to my LinkedIn profile'}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent"
                >
                  <LinkedInIcon className="h-5 w-5"></LinkedInIcon>
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://github.com/feedm3"
                target="_blank"
                rel="noopener noreferrer"
                title={'Go to my Github profile'}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent"
                >
                  <GithubLogo className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <SkillsCard
                title={'Frontend'}
                skills={[
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Tailwind, styled-components',
                  'Module Federation',
                ]}
              />
              <SkillsCard
                title={'Backend'}
                skills={[
                  'Node.js (Nest, TSOA)',
                  'Javva (Spring Boot)',
                  'GraphQL',
                  'Relational Databases (PostgreSQL, MySQL)',
                  'Microservices Architecture',
                ]}
              ></SkillsCard>
              <SkillsCard
                title={'DevOps & Cloud'}
                skills={[
                  'Github Actions, Azure DevOps',
                  'Azure, AWS, Firebase, Digital Ocean',
                  'Docker, Kubernetes',
                  'Serverless',
                ]}
              />
              <SkillsCard
                title={'AI'}
                skills={[
                  'AI Application Development',
                  'Agentic AI Systems',
                  'Prompt Engineering',
                  'AI SDKs & Frameworks',
                ]}
              />
              <SkillsCard
                title="Leadership & Process"
                skills={[
                  'Engineering Management',
                  'Agile (Scrum, SAFe)',
                  'Team Mentoring & Growth',
                  'Client Relationship Management',
                  'Hiring & Onboarding',
                ]}
              ></SkillsCard>
              <SkillsCard
                title={'Tools & Automation'}
                skills={[
                  'SEO Optimization',
                  'Web Analytics',
                  'Performance Monitoring',
                  'Content Management (AEM, Contentful)',
                  'Task Automation (Windmill)',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Clients I&apos;ve Worked With
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12 items-center justify-center">
              <AudiLogo className="p-2 w-full" />
              <FcBayernLogo className="p-2 w-full" />
              <ZeissLogo className="p-2 w-full" />
              <AllianzLogo className="p-2 w-full" />
              <SapLogo className="p-2 w-full" />
              <BmwLogo className="p-2 w-full" />
              <AccentureLogo className="p-2 w-full" />
              <AdacMotorsportLogo className="p-2 w-full" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Fabian Dietenberger. All rights
          reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://linkedin.com/in/fabiandietenberger"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/feedm3"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  );
}
