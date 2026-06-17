'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import MagneticWrapper from './MagneticWrapper';

// Lazy load Three.js component
const ChromaticShatter = dynamic(() => import('./ChromaticShatter'), {
  ssr: false,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as any },
  },
};

const letterRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as any },
  },
};

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building dynamic digital experiences.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Three.js Background */}
      <ChromaticShatter />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-32 flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Massive Typography */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <motion.div
            className="flex flex-col text-[120px] md:text-[140px] lg:text-[160px] font-heading leading-[0.8] mb-6 select-none"
            variants={containerVariants}
          >
            <div className="flex overflow-hidden pb-4">
              {"TEJAS".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterRevealVariants}
                  className="text-iridescent hover:scale-105 transition-transform duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex overflow-hidden pb-4">
              {"DHOK".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterRevealVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-b from-chrome-2 to-white/10 hover:scale-105 transition-transform duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div variants={textReveal} className="mb-6 flex items-center gap-3 bg-surface border border-white/10 rounded-full px-4 py-2 w-fit">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-iridescent-d opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-iridescent-d shadow-[0_0_8px_#4dffb4]"></span>
            </div>
            <span className="text-[13px] font-medium text-chrome-1">Available for full-time roles · Graduating June 2026</span>
          </motion.div>

          {/* Role Tag & Typing */}
          <motion.div variants={textReveal} className="mb-10">
            <div className="inline-block px-5 py-3 border border-white/10 rounded-full bg-surface backdrop-blur-md text-chrome-2 font-mono text-sm tracking-widest uppercase mb-6 shadow-xl max-w-2xl leading-relaxed">
              FULL-STACK DEVELOPER BUILDING PRODUCTION APPS WITH NEXT.JS, TYPESCRIPT & SUPABASE
            </div>
            <div className="text-iridescent-b font-mono text-lg md:text-xl h-8 flex items-center justify-center lg:justify-start">
              {typedText}<span className="inline-block w-3 h-5 ml-2 bg-iridescent-b animate-pulse"></span>
            </div>
          </motion.div>

          <motion.div
            variants={textReveal}
            className="flex flex-wrap gap-6 mb-12 justify-center lg:justify-start"
          >
            <MagneticWrapper pullFactor={20}>
              <a
                href="#projects"
                className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-xl bg-surface border border-white/10 text-chrome-2 font-mono text-sm tracking-widest uppercase shadow-xl transition-all duration-300 z-10 hover:border-transparent hover:text-void"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-iridescent-a to-iridescent-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <FolderOpen className="w-5 h-5 group-hover:text-void transition-colors duration-300" />
                <span>View Projects</span>
              </a>
            </MagneticWrapper>
            <MagneticWrapper pullFactor={20}>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-transparent border border-white/10 text-chrome-2 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-iridescent-c hover:bg-white/5"
              >
                <Download className="w-5 h-5 text-iridescent-c group-hover:chromatic-icon transition-transform" />
                <span className="group-hover:chromatic-text">Resume</span>
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textReveal}
            className="flex gap-6 items-center justify-center lg:justify-start"
          >
            {[
              { icon: GithubIcon, href: "https://github.com/NovaSyntax753" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/tejas-dhok-329983371/" },
              { icon: XIcon, href: "https://x.com/TejasDhok28" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 flex items-center justify-center rounded-full bg-surface border border-white/10 text-chrome-2 hover:border-iridescent-b hover:shadow-[0_0_20px_rgba(191,0,255,0.2)] transition-all duration-300"
              >
                <social.icon className="w-6 h-6 group-hover:text-iridescent-b group-hover:drop-shadow-[0_0_8px_rgba(191,0,255,0.8)] transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Hexagon Photo */}
        <motion.div
          variants={textReveal}
          className="hidden lg:flex flex-1 justify-center lg:justify-end relative z-10 lg:pt-4"
        >
          <div className="relative w-80 h-80 xl:w-[420px] xl:h-[420px]">
            {/* Glowing Backdrop behind Hexagon */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-iridescent-a via-iridescent-b to-iridescent-c opacity-30 blur-[60px] rounded-full animate-pulse"
            ></div>
            
            {/* Hexagon Border */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-white/20 p-[2px] shadow-2xl"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <div 
                className="relative w-full h-full bg-void"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src="/tejas-photo.jpg"
                  alt="Tejas Dhok"
                  fill
                  className="object-cover scale-105 hover:scale-100 opacity-90 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-out"
                  priority
                />
                {/* Inner Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Corner Tech Accents */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-iridescent-b/50 rounded-tr-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-iridescent-a/50 rounded-bl-xl opacity-60"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-iridescent-a to-transparent opacity-50"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
