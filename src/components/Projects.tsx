'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionTitle from '@/components/SectionTitle';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featuredTag: string;
}

const projects: Project[] = [
  {
    title: 'Maifair – Luxury Spa & Wellness',
    description:
      'Built a responsive multi-page website with modern UI, animations, and mobile-first design. Developed dynamic components including masonry gallery, lightbox, and interactive sections. Optimized SEO & performance (95+ Lighthouse).',
    tech: ['Next.js', 'React', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://maifair.vercel.app',
    githubUrl: 'https://github.com/tejasdhok',
    featuredTag: 'UI/UX Focused',
  },
  {
    title: 'QuickFusion Innovations Website',
    description:
      'Built and deployed a responsive, SEO-optimized business website using Next.js and React. Implemented animations, performance optimizations, and Web3Forms-based contact system. Achieved 95+ Lighthouse score.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://quickfusioninnovations.com',
    githubUrl: 'https://github.com/tejasdhok',
    featuredTag: 'Production Website',
  },
  {
    title: 'Investment Tracking Portal (RKSmartMoney)',
    description:
      'Developed a full-stack investment tracking platform with role-based authentication and admin/investor workflows. Automated monthly financial reporting with scheduled cron jobs. Integrated Email, SMS, and WhatsApp notifications.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://investment-tracking-reporting-porta.vercel.app/',
    githubUrl: 'https://github.com/tejasdhok',
    featuredTag: 'Full Stack',
  },
  {
    title: 'Predict Genie – AI Marketing Intelligence',
    description:
      'Developed the frontend for an AI-driven social media analytics tool. Built an interactive dashboard with drag-and-drop CSV upload and dynamic Recharts visualizations for engagement trends. Integrated with a Python backend via a centralized API layer for real-time AI-generated content recommendations.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Recharts', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/NovaSyntax753/AI-Marketing-Intelligence-Predict-Genie',
    featuredTag: 'AI / ML',
  },
  {
    title: 'Vaishnavi Buildcon',
    description:
      'Built a professional real estate website for a construction company established in 2009. Features property listings by location, EMI calculator, NRI buyer guide, and lead-generation forms for residential projects across Kalyan, Thane & Mumbai.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://vaishnavibuildcon.in/',
    githubUrl: 'https://github.com/NovaSyntax753/Vaishnavi-Buildcon',
    featuredTag: 'Real Estate',
  },
  {
    title: 'KKaptureFlow Media',
    description:
      'Developed a video marketing agency website with dynamic animations, marquee client showcases, and video spotlight sections. Features include multi-page navigation, a lead-generation contact form via Web3Forms, and international availability display.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://captureflowmedia-u2yw.vercel.app/',
    githubUrl: 'https://github.com/NovaSyntax753/captureflowmedia',
    featuredTag: 'Agency Website',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col bg-[#111118] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.2)] hover:shadow-[0_8px_32px_rgba(0,212,255,0.08)]"
    >
      {/* Gradient accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]" />

      <div className="flex flex-1 flex-col p-6">
        {/* Header: title + featured tag */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 px-3 py-1 text-xs text-[#00d4ff]">
            {project.featuredTag}
          </span>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-[#8888a0]">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#8888a0]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Spacer pushes links to bottom */}
        <div className="mt-auto flex items-center gap-5 border-t border-white/5 pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#00d4ff] transition-colors hover:text-white"
          >
            <GithubIcon className="w-4 h-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#00d4ff] transition-colors hover:text-white"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0f] px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="PROJECTS" subtitle="Featured Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
