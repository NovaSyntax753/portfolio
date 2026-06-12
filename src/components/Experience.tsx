'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const internshipExperience = [
  {
    title: 'Full Stack Developer Intern',
    company: 'QuickFusion Innovations, Nagpur',
    date: 'Dec 2025 – May 2026',
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
    score: '71.00%',
    areas: [],
  },
  {
    degree: 'Secondary School',
    field: '',
    college: "St. Michael's School, Chandrapur",
    year: '2020',
    score: '85.20%',
    areas: [],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-[#111118]/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="EXPERIENCE" subtitle="Experience & Education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-8"
            >
              <Briefcase className="w-6 h-6 text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">
                Internship Experience
              </h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#00d4ff] to-[#7c3aed]" />

              {internshipExperience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  custom={index + 1}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#00d4ff] border-2 border-[#0a0a0f]" />

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h4 className="text-lg font-semibold text-white">
                        {job.title}
                      </h4>
                      <span className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs px-3 py-1 rounded-full">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-[#8888a0] text-sm mb-3">
                      {job.company}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="flex items-start gap-2 text-sm text-[#c0c0d0]"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00d4ff] shrink-0" />
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
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-6 h-6 text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </motion.div>

            {/* Education Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#00d4ff] to-[#7c3aed]" />

              {educationHistory.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  custom={index + 1}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#00d4ff] border-2 border-[#0a0a0f]" />

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h4 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                        {edu.score && (
                          <span className="bg-[#7c3aed]/10 text-[#7c3aed] text-xs px-3 py-1 rounded-full font-medium">
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                    {edu.field && (
                      <p className="text-[#00d4ff] text-sm font-medium mb-1">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-[#8888a0] text-sm mb-3">
                      {edu.college}
                    </p>

                    {edu.areas.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.areas.map((area) => (
                          <span
                            key={area}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#c0c0d0]"
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
      </div>
    </section>
  );
}
