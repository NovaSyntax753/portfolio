"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Logo = () => {
  const letters = "Tejas.".split("");
  return (
    <a href="#home" className="flex items-center text-3xl font-heading tracking-widest cursor-pointer group perspective-1000">
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-500 group-hover:rotate-y-360 text-chrome-2"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {letter === "." ? <span className="text-iridescent-a">.</span> : letter}
        </span>
      ))}
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mobile Menu Springs
  const menuSpring = useSpring({
    opacity: isMobileOpen ? 1 : 0,
    pointerEvents: isMobileOpen ? "auto" : "none",
    config: { tension: 280, friction: 60 },
  });

  const trail = useTrail(navLinks.length, {
    config: { mass: 1, tension: 280, friction: 20 },
    opacity: isMobileOpen ? 1 : 0,
    x: 0,
    y: isMobileOpen ? 0 : 50,
  });

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 top-0 left-0 right-0 ${
          isScrolled
            ? "bg-void/80 backdrop-blur-[24px] border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`relative text-sm font-mono tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                      isActive ? "text-chrome-2 chromatic-text" : "text-white/40 hover:text-chrome-2"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-iridescent-a to-iridescent-b"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative z-[60] w-12 h-12 flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-chrome-2" />
              ) : (
                <Menu className="w-6 h-6 text-chrome-2" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <animated.div
        style={{
          opacity: menuSpring.opacity,
          pointerEvents: isMobileOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-50 bg-void/95 backdrop-blur-3xl flex flex-col items-center justify-center md:hidden"
      >
        <div className="flex flex-col items-center gap-8">
          {trail.map((style, index) => {
            const link = navLinks[index];
            const isActive = activeSection === link.href.slice(1);
            return (
              <animated.a
                key={link.name}
                href={link.href}
                style={{ ...style }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`text-4xl font-heading tracking-widest uppercase cursor-pointer ${
                  isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-iridescent-a to-iridescent-b" : "text-chrome-2"
                }`}
              >
                {link.name}
              </animated.a>
            );
          })}
        </div>
      </animated.div>
    </>
  );
}
