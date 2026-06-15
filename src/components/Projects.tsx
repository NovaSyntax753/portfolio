'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featuredTag: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Maifair – Luxury Spa & Wellness',
    description:
      'Built a responsive multi-page website with modern UI, animations, and mobile-first design. Developed dynamic components including masonry gallery, lightbox, and interactive sections. Optimized SEO & performance (95+ Lighthouse).',
    tech: ['Next.js', 'React', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://maifair.vercel.app',
    githubUrl: 'https://github.com/NovaSyntax753/Maifair',
    featuredTag: 'Featured',
    image: '/maifair.png',
  },
  {
    title: 'QuickFusion Innovations Website',
    description:
      'Built and deployed a responsive, SEO-optimized business website using Next.js and React. Implemented animations, performance optimizations, and Web3Forms-based contact system. Achieved 95+ Lighthouse score.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://quickfusioninnovations.com',
    githubUrl: 'https://github.com/NovaSyntax753/QuickFusion',
    featuredTag: 'Featured',
    image: '/QuickFusion Innovations Website.png',
  },
  {
    title: 'Investment Tracking Portal',
    description:
      'Developed a full-stack investment tracking platform with role-based authentication and admin/investor workflows. Automated monthly financial reporting with scheduled cron jobs. Integrated Email, SMS, and WhatsApp notifications.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://investment-tracking-reporting-porta.vercel.app/',
    githubUrl: 'https://github.com/NovaSyntax753/Investment-Tracking-Reporting-Portal',
    featuredTag: 'Full Stack',
  },
  {
    title: 'Predict Genie – AI Marketing',
    description:
      'Developed the frontend for an AI-driven social media analytics tool. Built an interactive dashboard with drag-and-drop CSV upload and dynamic Recharts visualizations for engagement trends.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Recharts', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/NovaSyntax753/AI-Marketing-Intelligence-Predict-Genie',
    featuredTag: 'AI / ML',
  },
  {
    title: 'Vaishnavi Buildcon',
    description:
      'Built a professional real estate website for a construction company established in 2009. Features property listings by location, EMI calculator, NRI buyer guide, and lead-generation forms.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://vaishnavibuildcon.in/',
    githubUrl: 'https://github.com/NovaSyntax753/Vaishnavi-Buildcon',
    featuredTag: 'Real Estate',
  },
  {
    title: 'KKaptureFlow Media',
    description:
      'Developed a video marketing agency website with dynamic animations, marquee client showcases, and video spotlight sections. Features include multi-page navigation, a lead-generation contact form.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://captureflowmedia-u2yw.vercel.app/',
    githubUrl: 'https://github.com/NovaSyntax753/captureflowmedia',
    featuredTag: 'Agency',
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

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isFeatured = index < 2;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col bg-surface border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,255,247,0.15)] ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Animated Conic Border on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 conic-border pointer-events-none" />

      {/* Expanding Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-iridescent-a via-iridescent-b to-iridescent-c opacity-100 group-hover:h-full group-hover:opacity-10 transition-all z-0 pointer-events-none" style={{ transitionDuration: '0.4s', transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }} />

      <div className={`relative z-10 flex flex-1 flex-col p-8 ${isFeatured ? "md:flex-row md:gap-8" : ""}`}>
        
        {/* Content Side */}
        <div className={`flex flex-col flex-1 ${isFeatured ? "md:w-1/2" : ""}`}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-chrome-2 font-heading">{project.title}</h3>
            <span className="shrink-0 rounded-full border border-iridescent-a/30 bg-iridescent-a/10 px-3 py-1 text-xs text-iridescent-a uppercase tracking-widest font-mono">
              {project.featuredTag}
            </span>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-chrome-1/70 font-body">
            {project.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2 perspective-1000">
            {project.tech.map((t) => (
              <div key={t} className="group/tech relative w-auto h-8 perspective-1000 cursor-default">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover/tech:rotate-y-180">
                  {/* Front Face (defines width) */}
                  <div className="rounded-full border border-white/10 bg-void px-3 py-1 text-xs text-chrome-2/60 flex items-center justify-center whitespace-nowrap backface-hidden">
                    {t}
                  </div>
                  {/* Back Face */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border border-iridescent-a bg-iridescent-a/10 px-3 py-1 text-xs text-iridescent-a flex items-center justify-center whitespace-nowrap backface-hidden rotate-y-180 shadow-[0_0_10px_rgba(0,255,247,0.3)]">
                    {t}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-6 border-t border-white/10 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-chrome-1/50 transition-colors hover:text-iridescent-a group/link"
            >
              <GithubIcon className="w-5 h-5 group-hover/link:animate-bounce" />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-chrome-1/50 transition-colors hover:text-iridescent-b group/link"
              >
                <ExternalLink size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Thumbnail Side for Featured Projects */}
        {isFeatured && (
          <div className="hidden md:block flex-1 rounded-xl border border-white/10 bg-void overflow-hidden relative group-hover:border-iridescent-b/50 transition-colors duration-500">
            {/* Browser Mockup Header */}
            <div className="h-6 w-full bg-surface border-b border-white/10 flex items-center px-3 gap-1.5 relative z-10">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            {/* Abstract UI Representation or Image */}
            <div className="relative w-full h-[300px] overflow-hidden bg-gradient-to-br from-void via-surface to-void">
              {project.image ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Subtle overlay to blend it with dark theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-30"></div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--iridescent-a) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="absolute top-10 left-10 right-10 h-32 bg-white/5 rounded-lg border border-white/10 group-hover:border-iridescent-a/30 transition-colors" />
                  <div className="absolute top-48 left-10 right-1/2 h-10 bg-white/5 rounded-lg border border-white/10 group-hover:border-iridescent-b/30 transition-colors delay-100" />
                  <div className="absolute top-48 left-[55%] right-10 h-10 bg-white/5 rounded-lg border border-white/10 group-hover:border-iridescent-c/30 transition-colors delay-200" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-void px-4 sm:px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionTitle title="PROJECTS" subtitle="The Archive" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
