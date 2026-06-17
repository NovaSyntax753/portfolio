'use client';

import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
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
  hasVideoDemo?: boolean;
}

const projects: Project[] = [
  {
    title: 'Maifair – Luxury Spa & Wellness',
    description: 'Delivered a luxury spa website with masonry gallery, lightbox, and Framer Motion animations — achieving 95+ Lighthouse and a sub-2s load time.',
    tech: ['Next.js', 'React', 'TypeScript', 'Framer Motion'],
    liveUrl: 'https://maifair.vercel.app',
    githubUrl: 'https://github.com/NovaSyntax753/Maifair',
    featuredTag: 'Featured',
    image: '/maifair.png',
  },
  {
    title: 'QuickFusion Innovations',
    description: 'Built and launched the company\'s primary business website with Web3Forms contact system, full SEO optimization, and 95+ Lighthouse — now used by real clients.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://quickfusioninnovations.com',
    githubUrl: 'https://github.com/NovaSyntax753/QuickFusion',
    featuredTag: 'Featured',
    image: '/QuickFusion Innovations Website.png',
  },
  {
    title: 'Investment Tracking Portal',
    description: 'Built a role-based investment tracking platform with admin/investor dashboards, Supabase auth, cron-based financial reporting, and WhatsApp/email notifications via Twilio.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://investment-tracking-reporting-porta.vercel.app/',
    githubUrl: 'https://github.com/NovaSyntax753/Investment-Tracking-Reporting-Portal',
    featuredTag: 'Full Stack',
  },
  {
    title: 'PredictGenie – AI Analytics',
    description: 'Engineered the frontend for an AI marketing analytics tool — interactive drag-and-drop CSV dashboard, Recharts visualizations, and FastAPI backend integration.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Recharts', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/NovaSyntax753/AI-Marketing-Intelligence-Predict-Genie',
    featuredTag: 'AI / ML',
    hasVideoDemo: false,
  },
  {
    title: 'Vaishnavi Buildcon',
    description: 'Delivered a production real estate website with property listings, EMI calculator, NRI buyer guide, and lead generation forms — live for a construction company since 2009.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://vaishnavibuildcon.in/',
    githubUrl: 'https://github.com/NovaSyntax753/Vaishnavi-Buildcon',
    featuredTag: 'Real Estate',
  },
  {
    title: 'KKaptureFlow Media',
    description: 'Built a video marketing agency site with animated marquee client showcase, video spotlight sections, and multi-page navigation — deployed and live.',
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
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col bg-surface border border-white/10 hover:border-border-hover hover:shadow-[0_0_24px_rgba(124,58,237,0.12)] rounded-2xl overflow-hidden transition-all duration-300 ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className={`relative z-10 flex flex-1 flex-col p-8 ${isFeatured ? "md:flex-row md:gap-8" : ""}`}>
        
        {/* Content Side */}
        <div className={`flex flex-col flex-1 ${isFeatured ? "md:w-1/2" : ""}`}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-chrome-2 font-heading">{project.title}</h3>
            <span className="shrink-0 rounded-full border border-iridescent-a/30 bg-iridescent-a/10 px-3 py-1 text-[10px] sm:text-xs text-iridescent-a uppercase tracking-widest font-mono">
              {project.featuredTag}
            </span>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-chrome-1 font-body">
            {project.description}
          </p>

          {/* Simple tech badges instead of 3D flip to prevent duplication */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs text-chrome-1 whitespace-nowrap font-mono">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-6 border-t border-white/10 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-chrome-1 transition-colors hover:text-iridescent-a group/link"
            >
              <GithubIcon className="w-5 h-5 group-hover/link:animate-bounce" />
              Code
            </a>
            
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-chrome-1 transition-colors hover:text-iridescent-b group/link"
              >
                <ExternalLink size={20} className="group-hover/link:-translate-y-1 transition-transform" />
                Live Demo
              </a>
            ) : project.hasVideoDemo ? (
              <button
                className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-chrome-1 transition-colors hover:text-iridescent-b group/link"
              >
                <PlayCircle size={20} className="group-hover/link:scale-110 transition-transform" />
                Watch Demo
              </button>
            ) : (
              <span className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-warm-gold border border-warm-gold/30 bg-warm-gold/10 px-3 py-1 rounded-full">
                Demo Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail Side for Featured Projects */}
        {isFeatured && (
          <div className="hidden md:block flex-1 rounded-xl border border-white/10 bg-void overflow-hidden relative transition-colors duration-500 group-hover:border-border-hover">
            {/* Browser Mockup Header */}
            <div className="h-6 w-full bg-surface border-b border-white/10 flex items-center px-3 gap-1.5 relative z-20">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            {/* Image with Hover Overlay */}
            <div className="relative w-full h-[300px] overflow-hidden bg-void group/img">
              {project.image ? (
                <>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="flex flex-wrap gap-2 justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-full border border-iridescent-a/50 bg-iridescent-a/20 px-3 py-1 text-xs text-white whitespace-nowrap font-mono shadow-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--colors-iridescent-a) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const sectionEntrance = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

export default function Projects() {
  return (
    <section id="projects" className="bg-void px-4 sm:px-6 py-24 relative overflow-hidden">
      <motion.div 
        variants={sectionEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl relative z-10"
      >
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
      </motion.div>
    </section>
  );
}
