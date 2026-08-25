import { SkillsCard } from '@/components/skills-card';

const expertise = [
  {
    title: 'Frontend Development',
    skills: [
      'Modern Web Applications (React, TypeScript)',
      'Next.js & Performance Optimization',
      'Responsive Design & UI/UX Implementation',
      'Component Libraries & Design Systems',
      'Large-Scale Application Architecture',
    ],
  },
  {
    title: 'Backend, Cloud & Architecture',
    skills: [
      'Enterprise APIs & System Integration (Node.js, Java)',
      'Database Design & Optimization',
      'Microservices & Scalable Architecture',
      'Cloud Platforms (Azure, AWS)',
      'CI/CD, Containers & Deployment',
      'Performance, Security & Infrastructure Cost',
    ],
  },
  {
    title: 'AI & Innovation',
    skills: [
      'Agentic Engineering Across the Development Lifecycle',
      'Building AI-Powered Features with LLMs',
      'RAG Pipelines & Prompt Engineering',
      'AI Agent Development & Tool Integration',
      'Evaluating & Adopting Emerging Tech',
    ],
  },
  {
    title: 'Technical Leadership',
    skills: [
      'Architecture Direction Across Teams',
      'Hands-On Technical Decision-Making',
      'Technical Delivery & Risk Management',
      'Mentoring Engineers',
      'Client Requirements Workshops',
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          Expertise
        </h2>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {expertise.map((area) => (
            <SkillsCard
              key={area.title}
              title={area.title}
              skills={area.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
