'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './Icons';
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
        className="relative z-10 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-32 flex-col lg:flex-row items-center gap-16"
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

          {/* Role Tag & Typing */}
          <motion.div variants={textReveal} className="mb-10">
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-surface backdrop-blur-md text-chrome-2 font-mono text-sm tracking-widest uppercase mb-6 shadow-xl">
              Software Engineer / Designer
            </div>
            <div className="text-iridescent-a font-mono text-lg md:text-xl h-8">
              {typedText}<span className="typing-cursor"></span>
            </div>
          </motion.div>

          <motion.div
            variants={textReveal}
            className="flex flex-wrap gap-6 mb-12 justify-center lg:justify-start"
          >
            <MagneticWrapper pullFactor={20}>
              <a
                href="#projects"
                className="liquid-btn group flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm tracking-widest uppercase shadow-2xl shadow-iridescent-a/10"
              >
                <FolderOpen className="w-5 h-5 group-hover:animate-bounce" />
                View Projects
              </a>
            </MagneticWrapper>
            <MagneticWrapper pullFactor={20}>
              <a
                href="/resume.pdf"
                download
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 text-chrome-2 font-mono text-sm tracking-widest uppercase chromatic-text transition-all duration-300 hover:border-iridescent-c hover:bg-white/5"
              >
                <Download className="w-5 h-5 text-iridescent-c group-hover:-translate-y-1 transition-transform" />
                Resume
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textReveal}
            className="flex gap-6 items-center"
          >
            {[
              { icon: GithubIcon, href: "https://github.com/tejasdhok" },
              { icon: LinkedinIcon, href: "https://linkedin.com/in/tejasdhok" },
              { icon: InstagramIcon, href: "https://www.instagram.com/tejasdhok28/" },
              { icon: XIcon, href: "https://x.com/TejasDhok28" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-chrome-2 hover:border-iridescent-b hover:text-iridescent-b hover:shadow-[0_0_20px_rgba(191,0,255,0.3)] transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Hexagon Photo */}
        <motion.div
          variants={textReveal}
          className="hidden lg:flex flex-1 justify-center relative z-10"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 conic-border shadow-2xl shadow-iridescent-b/20" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", padding: "4px" }}>
            <div className="w-full h-full bg-void" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
              <Image
                src="/tejas-photo.jpg"
                alt="Tejas Dhok"
                fill
                className="object-cover opacity-90 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                priority
              />
            </div>
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
