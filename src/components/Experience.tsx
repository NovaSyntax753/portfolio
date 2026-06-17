'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const internshipExperience = [
  {
    title: 'Full Stack Developer Intern',
    company: 'QuickFusion Innovations, Nagpur',
    date: 'Dec 2025 – May 2026',
    active: true,
    bullets: [
      'Developed and deployed a production business website using Next.js, React, TypeScript, and Tailwind CSS',
      'Designed and implemented responsive, mobile-first UI components improving accessibility',
      'Integrated Web3Forms API for contact system with validation and error handling',
      'Delivered live website used by real customers',
    ],
  },
];

const educationHistory = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence',
    college: 'G. H. Raisoni College of Engineering and Management, Nagpur',
    year: '2022 – 2026 (Expected)',
    score: '',
    active: true,
    areas: [
      'Machine Learning',
      'Deep Learning',
      'Data Structures',
      'Web Development',
      'Algorithms',
      'Computer Vision',
    ],
  },
  {
    degree: 'Higher Secondary (Science)',
    field: '',
    college: 'Dr. Ambedkar College of Science, Chandrapur',
    year: '2022',
    score: '',
    active: false,
    areas: [],
  },
  {
    degree: 'Secondary School',
    field: '',
    college: "St. Michael's School, Chandrapur",
    year: '2020',
    score: '',
    active: false,
    areas: [],
  },
];

const springSlideIn = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.15,
    } as any,
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="bg-void py-24 px-4 sm:px-6 relative overflow-hidden">
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <SectionTitle title="EXPERIENCE" subtitle="The Journey" />

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14">
          {/* Work Experience Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              variants={springSlideIn}
              custom={0}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-surface">
                <Briefcase className="w-5 h-5 text-iridescent-a" />
              </div>
              <h3 className="text-2xl font-semibold text-chrome-2 font-heading tracking-widest uppercase">
                Experience
              </h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-10">
              {/* Scroll-Driven Timeline */}
              <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  className="w-full bg-iridescent-a blur-[1px] absolute top-0"
                  style={{ height: lineHeight }}
                />
              </div>

              {internshipExperience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={springSlideIn}
                  custom={index + 1}
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-10 top-1.5 w-4 h-4 rounded-full border-2 border-background-primary transition-colors duration-500 z-10 ${
                    job.active ? "bg-iridescent-a shadow-[0_0_15px_rgba(124,58,237,0.8)] animate-pulse" : "bg-white/20 group-hover:bg-iridescent-b"
                  }`} />

                  <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-iridescent-a/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h4 className="text-xl font-bold text-chrome-2 font-heading">
                        {job.title}
                      </h4>
                      <span className="font-mono text-xs tracking-widest uppercase text-iridescent-a border border-iridescent-a/20 bg-iridescent-a/10 px-3 py-1 rounded-full">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-chrome-1 text-sm mb-4 font-mono uppercase tracking-wider">
                      {job.company}
                    </p>
                    <ul className="space-y-3">
                      {job.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="flex items-start gap-3 text-sm text-chrome-1 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-iridescent-b shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              variants={springSlideIn}
              custom={0}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-surface">
                <GraduationCap className="w-5 h-5 text-iridescent-b" />
              </div>
              <h3 className="text-2xl font-semibold text-chrome-2 font-heading tracking-widest uppercase">Education</h3>
            </motion.div>

            {/* Education Timeline */}
            <div className="relative pl-10">
              {/* Scroll-Driven Timeline */}
              <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  className="w-full bg-iridescent-b blur-[1px] absolute top-0"
                  style={{ height: lineHeight }}
                />
              </div>

              {educationHistory.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={springSlideIn}
                  custom={index + 1}
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-10 top-1.5 w-4 h-4 rounded-full border-2 border-background-primary transition-colors duration-500 z-10 ${
                    edu.active ? "bg-iridescent-b shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse" : "bg-white/20 group-hover:bg-iridescent-a"
                  }`} />

                  <div className="bg-surface p-6 rounded-2xl border border-white/10 hover:border-iridescent-b/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h4 className="text-xl font-bold text-chrome-2 font-heading">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs tracking-widest uppercase text-iridescent-b border border-iridescent-b/20 bg-iridescent-b/10 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                        {edu.score && (
                          <span className="font-mono text-xs tracking-widest uppercase text-iridescent-d border border-iridescent-d/20 bg-iridescent-d/10 px-3 py-1 rounded-full">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                    {edu.field && (
                      <p className="text-iridescent-a text-sm font-medium mb-1 tracking-wider uppercase">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-chrome-1/50 text-sm mb-4 font-mono uppercase tracking-wider">
                      {edu.college}
                    </p>

                    {edu.areas.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                        {edu.areas.map((area) => (
                          <span
                            key={area}
                            className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-surface border border-white/10 text-chrome-1"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
