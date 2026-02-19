import { ClientsSection } from '@/components/clients-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-background text-foreground">
        <HeroSection />
        <SkillsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
