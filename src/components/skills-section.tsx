import { SkillsCard } from '@/components/skills-card';

export function SkillsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <SkillsCard
            title="Frontend Development"
            skills={[
              'Modern Web Applications (React, TypeScript)',
              'Next.js & Performance Optimization',
              'Responsive Design & UI/UX Implementation',
              'Component Libraries & Design Systems',
              'Large-Scale Application Architecture',
            ]}
          />
          <SkillsCard
            title="Backend & Architecture"
            skills={[
              'Enterprise API Development (Node.js, Java)',
              'Database Design & Optimization',
              'Microservices & Scalable Architecture',
              'System Integration & Third-Party APIs',
              'Performance & Security Best Practices',
            ]}
          />
          <SkillsCard
            title="Cloud & Infrastructure"
            skills={[
              'Cloud Platform Management (Azure, AWS)',
              'CI/CD Pipeline Implementation',
              'Containerization & Deployment (Docker)',
              'Automated Testing & Quality Assurance',
              'Infrastructure Cost Optimization',
            ]}
          />
          <SkillsCard
            title="AI & Innovation"
            skills={[
              'Building AI-Powered Features with LLMs',
              'RAG Pipelines & Prompt Engineering',
              'AI Agent Development & Tool Integration',
              'Evaluating & Adopting Emerging Tech',
              'Prototyping New Product Ideas',
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
          />
          <SkillsCard
            title="Business & Operations"
            skills={[
              'Client Communication & Requirements Workshops',
              'Budget Ownership & Resource Planning',
              'Vendor Evaluation & Contract Negotiation',
              'KPI Tracking & Team Performance Reviews',
              'Risk Management & Incident Response',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
