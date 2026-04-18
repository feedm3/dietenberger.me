import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { GithubLogo } from '@/assets/github-logo';
import { LinkedInIcon } from '@/assets/linked-in-logo';
import ProfilePicture from '@/assets/profi-picture-laughing.jpg';
import { Button } from '@/components/ui/button';

type IconLinkProps = {
  href: string;
  title: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'icon';
  className?: string;
  children: ReactNode;
};

function IconLink({
  href,
  title,
  variant = 'outline',
  size = 'icon',
  className = 'rounded-full bg-transparent',
  children,
}: IconLinkProps) {
  return (
    <Button
      nativeButton={false}
      variant={variant}
      size={size}
      className={className}
      render={
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        />
      }
    >
      {children}
    </Button>
  );
}

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-6">
        <Image
          src={ProfilePicture}
          width={200}
          height={200}
          alt="Fabian Dietenberger portrait"
          className="rounded-full object-cover border-4 border-primary shadow-lg"
          priority
          placeholder="blur"
        />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Fabian Dietenberger
        </h1>
        <p className="text-muted-foreground md:text-xl">
          I build products and lead engineering teams.
        </p>
        <p className="max-w-[800px] text-lg text-gray-700 dark:text-gray-300">
          10+ years of shipping enterprise web projects for companies like Audi,
          BMW, and FC Bayern Munich. I lead teams, write code, and care about
          both — from architecture decisions to deployment pipelines. Based in{' '}
          <Link
            href="https://maps.app.goo.gl/LhDyAWfBpNCYnjqeA"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Kißlegg on Google Maps"
          >
            Kißlegg, Germany
          </Link>
          .
        </p>
        <div className="flex gap-4 mt-6">
          <IconLink
            href="mailto:fabian@dietenberger.me"
            title="Send me an email"
            variant="default"
            size="default"
            className="rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Get in touch</span>
          </IconLink>
          <IconLink
            href="https://linkedin.com/in/fabiandietenberger"
            title="Visit my LinkedIn profile"
          >
            <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
          </IconLink>
          <IconLink
            href="https://github.com/feedm3"
            title="Visit my GitHub profile"
          >
            <GithubLogo className="h-5 w-5" aria-hidden="true" />
          </IconLink>
        </div>
      </div>
    </section>
  );
}
