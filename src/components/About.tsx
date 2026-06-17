'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const infoItems = [
  { icon: MapPin, label: 'Location', value: 'Chandrapur, India' },
  { icon: Briefcase, label: 'Experience', value: '7+ Months' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech AI' },
  { icon: Mail, label: 'Email', value: 'tejasdhok09@gmail.com' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="bg-void py-24 px-4 sm:px-6 relative overflow-hidden">
      <motion.div 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl"
      >
        <SectionTitle title="ABOUT" subtitle="Who I Am" />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left — Diamond Photo */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-72 h-80 md:w-80 md:h-[400px] group rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/tejas-photo.jpg"
                alt="Tejas Dhok"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </motion.div>
          </div>

          {/* Right — Text content */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-heading text-iridescent-a tracking-widest uppercase mb-8"
            >
              Full-Stack Developer · 6 Months Professional Internship Experience · 6 Live Products
            </motion.h3>

            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="leading-relaxed text-chrome-1 mb-6 text-lg font-body"
            >
              I'm a full-stack developer specializing in Next.js, React, TypeScript, Python, REST APIs, and Supabase. I build responsive web applications, scalable backend systems, and AI-assisted development workflows — with a focus on performance, clean code, and stunning UI.
            </motion.p>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="leading-relaxed text-chrome-1 mb-6 text-lg font-body"
            >
              Currently completing my B.Tech in Artificial Intelligence at G.H. Raisoni College of Engineering, Nagpur, while working as a Full-Stack Developer Intern at QuickFusion Innovations — delivering production websites used by real businesses.
            </motion.p>

            {/* Info grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2"
            >
              {infoItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                  }}
                  className="group flex items-start gap-4 bg-surface rounded-xl p-5 hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 border border-white/10 rounded-xl transition-all duration-1000 group-hover:border-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 border border-transparent group-hover:border-iridescent-a" />
                  
                  <item.icon className="h-6 w-6 shrink-0 text-chrome-2 group-hover:text-iridescent-a transition-colors duration-300 relative z-10" />
                  <div className="relative z-10">
                    <p className="text-xs tracking-widest uppercase font-mono text-chrome-1/50">{item.label}</p>
                    <p className="text-sm font-medium text-chrome-2 mt-1">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
