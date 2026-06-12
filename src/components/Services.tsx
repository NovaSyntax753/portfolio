'use client';

import { motion } from 'framer-motion';
import { Monitor, Globe, Star, PenTool, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const services = [
  {
    title: 'Web Development',
    icon: Monitor,
    description: 'Building responsive, high-performance websites and web applications with modern frameworks.',
    points: [
      'React & Next.js applications',
      'TypeScript & modern JS',
      'SEO optimization',
      'Mobile-first design',
    ],
  },
  {
    title: 'Full-Stack Development',
    icon: Globe,
    description: 'Complete end-to-end solutions with scalable backends and intelligent frontend interfaces.',
    points: [
      'FastAPI & Flask backends',
      'PostgreSQL & Supabase',
      'REST API design',
      'Database optimization',
    ],
  },
  {
    title: 'AI & Data Solutions',
    icon: Star,
    description: 'Intelligent systems powered by machine learning and advanced data analytics pipelines.',
    points: [
      'scikit-learn & pandas',
      'Data pipeline design',
      'Predictive modeling',
      'AI integration',
    ],
  },
  {
    title: 'UI/UX Design',
    icon: PenTool,
    description: 'Creating beautiful, intuitive interfaces that users love and that drive conversions.',
    points: [
      'Figma design systems',
      'User research',
      'Responsive layouts',
      'Animation & interactions',
    ],
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

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="SERVICES" subtitle="What I Do" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-[#111118] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/30 hover:shadow-[0_8px_32px_rgba(0,212,255,0.08)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#00d4ff] transition-colors duration-300 group-hover:bg-[#00d4ff]/10">
                <service.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#8888a0]">
                {service.description}
              </p>

              {/* Points */}
              <ul className="mt-auto space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-[#c0c0d0]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#00d4ff] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
