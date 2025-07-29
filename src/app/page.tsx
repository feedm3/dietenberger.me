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
              priority
              placeholder="blur"
            />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Fabian Dietenberger
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Engineering Manager | Senior Software Developer
            </p>
            <p className="max-w-[800px] text-lg text-gray-700 dark:text-gray-300">
              Engineering Manager and Senior Software Developer with 10+ years
              of experience leading large-scale enterprise web projects. A
              pragmatic problem solver and team player, passionate about
              building high-performing teams and delivering impactful solutions.
              <br />
              Based in{' '}
              <Link
                href={'https://maps.app.goo.gl/LhDyAWfBpNCYnjqeA'}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                Kißlegg, Germany
              </Link>
              .
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 bg-transparent flex items-center gap-2"
                asChild={true}
              >
                <Link
                  href="mailto:fabian@dietenberger.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Send me an email"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span>Let's connect</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                asChild={true}
              >
                <Link
                  href="https://linkedin.com/in/fabiandietenberger"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit my LinkedIn profile"
                >
                  <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                asChild={true}
              >
                <Link
                  href="https://github.com/feedm3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit my GitHub profile"
                >
                  <GithubLogo className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
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
                title={'Frontend Development'}
                skills={[
                  'Modern Web Applications (React, TypeScript)',
                  'Next.js & Performance Optimization',
                  'Responsive Design & UI/UX Implementation',
                  'Component Libraries & Design Systems',
                  'Large-Scale Application Architecture',
                ]}
              />
              <SkillsCard
                title={'Backend & Architecture'}
                skills={[
                  'Enterprise API Development (Node.js, Java)',
                  'Database Design & Optimization',
                  'Microservices & Scalable Architecture',
                  'System Integration & Third-Party APIs',
                  'Performance & Security Best Practices',
                ]}
              ></SkillsCard>
              <SkillsCard
                title={'Cloud & Infrastructure'}
                skills={[
                  'Cloud Platform Management (Azure, AWS)',
                  'CI/CD Pipeline Implementation',
                  'Containerization & Deployment (Docker)',
                  'Automated Testing & Quality Assurance',
                  'Infrastructure Cost Optimization',
                ]}
              />
              <SkillsCard
                title={'AI & Innovation'}
                skills={[
                  'AI-Powered Application Development',
                  'Business Process Automation',
                  'Intelligent System Integration',
                  'Emerging Technology Evaluation',
                  'Innovation Strategy & Implementation',
                ]}
              />
              <SkillsCard
                title="Team Leadership & Management"
                skills={[
                  'Engineering Team Leadership',
                  'Agile Project Management & Delivery',
                  'Cross-Functional Team Collaboration',
                  'Talent Development & Mentoring',
                  'Stakeholder Communication & Reporting',
                ]}
              ></SkillsCard>
              <SkillsCard
                title={'Business & Operations'}
                skills={[
                  'Client Relationship Management',
                  'Budget Planning & Resource Allocation',
                  'Technical Requirements Analysis',
                  'Performance Metrics & Analytics',
                  'Risk Assessment & Mitigation',
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 mt-12 items-center justify-center">
              <Link
                href="https://audi.de"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Audi's website"
              >
                <AudiLogo className="p-2 w-full" aria-hidden="true" />
              </Link>
              <Link
                href="https://fcbayern.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit FC Bayern Munich's website"
              >
                <FcBayernLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">FC Bayern Munich</span>
              </Link>
              <Link
                href="https://zeiss.de"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit ZEISS's website"
              >
                <ZeissLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">ZEISS</span>
              </Link>
              <Link
                href="https://allianz.de"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Allianz's website"
              >
                <AllianzLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">Allianz</span>
              </Link>
              <Link
                href="https://sap.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit SAP's website"
              >
                <SapLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">SAP</span>
              </Link>
              <Link
                href="https://bmw.de"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit BMW's website"
              >
                <BmwLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">BMW</span>
              </Link>
              <Link
                href="https://accenture.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Accenture's website"
              >
                <AccentureLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">Accenture</span>
              </Link>
              <Link
                href="https://adac-motorsport.de"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit ADAC Motorsport's website"
              >
                <AdacMotorsportLogo className="p-2 w-full" aria-hidden="true" />
                <span className="sr-only">ADAC Motorsport</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
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
            title="Visit my LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/feedm3"
            className="text-xs hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
          >
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  );
}
