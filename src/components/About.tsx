'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const infoItems = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chandrapur, Maharashtra',
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '1+ Year',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech AI',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tejasdhok09@gmail.com',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="ABOUT" subtitle="About Me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left — Photo */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
              <Image
                src="/tejas-photo.jpg"
                alt="Tejas Dhok"
                width={480}
                height={560}
                className="h-auto w-full max-w-md object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </motion.div>

          {/* Right — Text content */}
          <div className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white"
            >
              Full Stack Developer based in Chandrapur, India
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="leading-relaxed text-[#8888a0]"
            >
              Full-stack developer skilled in Next.js, React, TypeScript,
              Python, REST APIs, and Supabase. Experienced in building
              responsive web applications, scalable backend systems, and
              AI-assisted development workflows with modern frontend and
              backend technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="leading-relaxed text-[#8888a0]"
            >
              Currently working at QuickFusion Innovations as a Full Stack
              Developer, building production business websites with Next.js,
              React, TypeScript, and Tailwind CSS. Passionate about creating
              elegant, user-friendly applications with exceptional performance.
            </motion.p>

            {/* Info grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2"
            >
              {infoItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#00d4ff]" />
                  <div>
                    <p className="text-sm text-[#8888a0]">{item.label}</p>
                    <p className="text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
