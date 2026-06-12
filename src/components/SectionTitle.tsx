'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="relative text-center mb-16">
      {/* Large outlined background text */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-outline pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 select-none text-6xl md:text-8xl font-extrabold uppercase leading-none whitespace-nowrap"
      >
        {title}
      </motion.span>

      {/* Filled subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-3xl md:text-4xl font-bold text-white"
      >
        {subtitle}
      </motion.h2>

      {/* Accent gradient line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]"
      />
    </div>
  );
}
