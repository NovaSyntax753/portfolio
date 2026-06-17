'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/tejasdhok', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/tejasdhok', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com/TejasDhok28', label: 'X' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-void border-t border-white/10 py-12 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-iridescent-a/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Chromatic Social Icons Row */}
          <div className="flex justify-center gap-4 mb-8 bg-surface px-6 py-3 rounded-full border border-white/10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-chrome-1 hover:text-iridescent-a hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Minimalist Text */}
          <div className="text-center space-y-2 font-mono text-xs tracking-widest uppercase">
            <p className="text-chrome-1">
              Designed & Built by <span className="text-iridescent-a">Tejas Dhok</span>
            </p>
            <p className="text-chrome-1/50">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modern Circle Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-surface border border-white/10 hover:border-iridescent-a hover:bg-iridescent-a/10 text-chrome-2 hover:text-iridescent-a rounded-full flex items-center justify-center shadow-lg group transition-all duration-300 z-50 backdrop-blur-md"
          >
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-opacity duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
