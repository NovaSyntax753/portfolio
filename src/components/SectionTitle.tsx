'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="relative text-center mb-12">
      {/* Large gradient background text */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="block select-none text-5xl md:text-7xl font-heading font-black uppercase leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-chrome-2 to-white/10"
      >
        {title}
      </motion.span>

      {/* Filled subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-3xl md:text-4xl font-bold text-white font-heading mt-4"
      >
        {subtitle}
      </motion.h2>

      {/* Accent gradient line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#22C55E] to-[#38BDF8]"
      />
    </div>
  );
}
