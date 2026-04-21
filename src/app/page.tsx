import { ClientsSection } from '@/components/clients-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-dvh isolate bg-background text-foreground">
        <HeroSection />
        <SkillsSection />
        <ClientsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
