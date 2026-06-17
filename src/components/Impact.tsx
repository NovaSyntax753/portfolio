'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Users, BrainCircuit } from 'lucide-react';
import SectionTitle from './SectionTitle';

const impacts = [
  {
    title: 'Conversion Optimization',
    icon: TrendingUp,
    metric: '+40%',
    description: 'Boosted conversion rates for business websites through intuitive UX and seamless user flows.',
  },
  {
    title: 'Performance Engineering',
    icon: Zap,
    metric: '95+',
    description: 'Achieved top Lighthouse scores and sub-2s load times for optimal user retention and SEO.',
  },
  {
    title: 'Scalable Architecture',
    icon: Users,
    metric: '10k+',
    description: 'Designed robust backend systems capable of handling thousands of active users seamlessly.',
  },
  {
    title: 'AI Workflow Automation',
    icon: BrainCircuit,
    metric: '-60%',
    description: 'Automated manual processes using AI/ML integrations, saving significant operational hours.',
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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Impact() {
  return (
    <section id="impact" className="bg-void py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow to match other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-iridescent-a/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionTitle title="IMPACT" subtitle="The Value I Bring" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-surface border border-white/10 hover:border-iridescent-a hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface text-chrome-2 group-hover:bg-iridescent-a group-hover:text-white transition-colors duration-300 shadow-lg">
                <item.icon className="h-6 w-6" strokeWidth={2} />
              </div>

              {/* Metric */}
              <div className="mb-2 text-4xl font-black font-heading text-iridescent-a tracking-wider">
                {item.metric}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-bold text-chrome-2 font-heading tracking-widest uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-chrome-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
