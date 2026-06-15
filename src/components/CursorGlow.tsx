"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 0.5 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setTimeout(() => setIsVisible(true), 600);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      style={{
        left: 0,
        top: 0,
        width: "300px",
        height: "300px",
        x: smoothX,
        y: smoothY,
        background: "radial-gradient(circle, rgba(0,255,247,0.1) 0%, rgba(0,0,0,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}
