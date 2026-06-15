'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './Icons';

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/tejasdhok', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/tejasdhok', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/tejasdhok28/', label: 'Instagram' },
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
      <footer className="bg-void border-t border-white/5 py-12 px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-iridescent-a/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Chromatic Social Icons Row */}
          <div className="flex justify-center gap-4 mb-8 glass-panel px-6 py-3 rounded-full border border-white/10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-chrome-1/60 hover:text-iridescent-c hover:scale-110 hover:shadow-[0_0_15px_rgba(255,107,255,0.4)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Minimalist Text */}
          <div className="text-center space-y-2 font-mono text-xs tracking-widest uppercase">
            <p className="text-chrome-1/80">
              Designed & Built by <span className="text-iridescent-a">Tejas Dhok</span>
            </p>
            <p className="text-chrome-1/40">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Hexagon Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 20, rotate: 30 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 bg-void border border-white/20 hover:border-iridescent-c hover:bg-iridescent-c/10 text-white flex items-center justify-center shadow-lg group transition-all duration-300 z-50 backdrop-blur-sm"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <div className="absolute inset-0 bg-iridescent-c translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
