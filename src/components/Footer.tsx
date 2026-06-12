'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './Icons';

const socialLinks = [
  {
    icon: GithubIcon,
    href: 'https://github.com/tejasdhok',
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/tejasdhok',
    label: 'LinkedIn',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/tejasdhok28/',
    label: 'Instagram',
  },
  {
    icon: XIcon,
    href: 'https://x.com/TejasDhok28',
    label: 'X',
  },
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
      <footer className="bg-[#0a0a0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto py-8 px-6 text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#8888a0] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Attribution */}
          <p className="text-sm text-[#c0c0d0] mb-2 flex items-center justify-center gap-1.5">
            Designed & Built by Tejas Dhok
            <Heart className="w-3.5 h-3.5 text-[#00d4ff] fill-[#00d4ff]" />
          </p>

          {/* Copyright */}
          <p className="text-[#8888a0] text-sm">
            © 2026 Tejas Dhok. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-[#00d4ff] text-black flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow cursor-pointer z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
