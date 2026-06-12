'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Wrench, Database, BrainCircuit } from 'lucide-react';
import SectionTitle from './SectionTitle';

const categories = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Python',
      'Flask',
      'FastAPI',
      'REST APIs',
      'API Integration',
      'Supabase',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vercel',
      'Responsive Design',
      'SEO',
    ],
  },
];

const learningCategories = [
  {
    title: 'Database & Backend',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'SQL',
      'MySQL / PostgreSQL',
      'Database Design',
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'NLP',
      'Computer Vision',
      'Generative AI / LLMs',
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

export default function Skills() {
  return (
    <section id="skills" className="bg-[#111118]/50 py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="SKILLS" subtitle="Technologies I Work With" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="rounded-2xl border border-white/5 bg-[#111118] p-6 md:p-8"
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4ff]/10">
                  <category.icon className="h-5 w-5 text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#8888a0] transition-all duration-300 hover:border-[#00d4ff] hover:bg-[#00d4ff]/5 hover:text-[#00d4ff]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning / Working On */}
        <div className="mt-20">
          <SectionTitle title="EXPLORING" subtitle="Currently Working & Learning" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-8 md:grid-cols-2"
          >
            {learningCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="relative overflow-hidden rounded-2xl border border-[#7c3aed]/30 bg-[#111118] p-6 md:p-8 group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7c3aed]/10">
                      <category.icon className="h-5 w-5 text-[#7c3aed]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#c0c0d0] transition-all duration-300 hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
