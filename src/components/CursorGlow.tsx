"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Show glow after 600ms load sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    const updateMousePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    const animate = () => {
      setPosition((prev) => {
        // Lerp factor 0.08
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", updateMousePosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPosition]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      style={{
        left: 0,
        top: 0,
        width: "300px",
        height: "300px",
        transform: `translate3d(${position.x - 150}px, ${position.y - 150}px, 0)`,
        background: "radial-gradient(circle, rgba(0,255,247,0.1) 0%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}
