"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ChromaticShatter() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check if mobile (simplistic check based on window width)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", motionListener);
    };
  }, []);

  useEffect(() => {
    if (isMobile || reducedMotion || !mountRef.current) return;

    const mount = mountRef.current;
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap pixel ratio for perf
    mount.appendChild(renderer.domElement);

    // Create a shattered plane
    const geometry = new THREE.PlaneGeometry(100, 100, 20, 20);
    
    // Randomize vertices slightly to create irregular triangles
    const posAttribute = geometry.attributes.position;
    const originalPositions = new Float32Array(posAttribute.array);
    
    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);
      if (x !== -50 && x !== 50 && y !== -50 && y !== 50) {
        posAttribute.setX(i, x + (Math.random() - 0.5) * 4);
        posAttribute.setY(i, y + (Math.random() - 0.5) * 4);
        posAttribute.setZ(i, (Math.random() - 0.5) * 2);
      }
    }
    
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00fff7, // iridescent-a base
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.6,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xbf00ff, 200, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00fff7, 200, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();
    let isTabVisible = true;

    const onMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);
    
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop with 60fps cap
    const clock = new THREE.Clock();
    let time = 0;
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const delta = clock.getDelta();
      time += delta;

      // Rotate Z slowly
      mesh.rotation.z += 0.005; // ~0.3 deg/sec

      // Lerp mouse
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      // Ripple effect and hue shift based on mouse
      pointLight.position.x = mouse.x * 20;
      pointLight.position.y = mouse.y * 20;
      
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        
        // Calculate distance from mouse (in world space approx)
        const dx = ox - mouse.x * 30;
        const dy = oy - mouse.y * 30;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const wave = Math.sin(dist * 0.5 - time * 5) * 2;
        const influence = Math.max(0, 1 - dist / 15);
        
        positions.setZ(i, originalPositions[i * 3 + 2] + wave * influence);
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      // Shift color slightly based on time and mouse
      const hue = (Math.sin(time * 0.5) * 0.1 + 0.5) + (mouse.x * 0.1);
      material.color.setHSL(hue, 1, 0.5);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isMobile, reducedMotion]);

  if (reducedMotion || isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full -z-10 animate-aurora opacity-50" />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]"
      style={{
        background: "radial-gradient(circle at center, rgba(3,3,8,0) 0%, rgba(3,3,8,1) 80%)"
      }}
    />
  );
}
