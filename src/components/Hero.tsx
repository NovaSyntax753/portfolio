'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, FolderOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './Icons';
import Image from 'next/image';
import ParticleCanvas from './ParticleCanvas';

const roles = [
  'Full Stack Developer',
  'React & Next.js Specialist',
  'UI/UX Enthusiast',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex-col lg:flex-row items-center gap-12 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#8888a0] mb-3 tracking-wide"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              Tejas Dhok
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            variants={fadeUp}
            className="text-xl md:text-2xl text-[#c0c0d0] mb-6 h-9 font-mono"
          >
            <span>{displayText}</span>
            <span
              className={`inline-block ml-0.5 text-[#00d4ff] transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              |
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-[#8888a0] text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Building responsive web applications with modern frontend and
            backend technologies. Experienced in Next.js, React, TypeScript,
            and Supabase.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-full px-8 py-3 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#00d4ff]/20"
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold rounded-full px-8 py-3 transition-all duration-200 hover:bg-[#00d4ff] hover:text-[#0a0a0f] hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="flex gap-5 items-center"
          >
            <a
              href="https://github.com/tejasdhok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#8888a0] hover:text-[#00d4ff] transition-colors duration-200"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tejasdhok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8888a0] hover:text-[#00d4ff] transition-colors duration-200"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/tejasdhok28/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#8888a0] hover:text-[#00d4ff] transition-colors duration-200"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/TejasDhok28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-[#8888a0] hover:text-[#00d4ff] transition-colors duration-200"
            >
              <XIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Profile Photo (desktop only) */}
        <motion.div
          variants={fadeUp}
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
        >
          <div className="relative w-72 h-72 xl:w-80 xl:h-80">
            {/* Glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#7c3aed] opacity-40 blur-lg" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#7c3aed] opacity-60" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00d4ff]/30">
              <Image
                src="/tejas-photo.jpg"
                alt="Tejas Dhok"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs text-[#8888a0] tracking-widest uppercase mb-1">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
