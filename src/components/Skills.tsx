'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  glow?: boolean;
};

type Edge = {
  source: string;
  target: string;
};

const nodes: Node[] = [
  // Left Cluster (Frontend)
  { id: 'html', label: 'HTML5', x: 15, y: 45 },
  { id: 'css', label: 'CSS3', x: 18, y: 32 },
  { id: 'react', label: 'React.js', x: 30, y: 25 },
  { id: 'next', label: 'Next.js', x: 45, y: 35 },
  { id: 'ts', label: 'TypeScript', x: 48, y: 45 },
  { id: 'framer', label: 'Framer Motion', x: 28, y: 55 },
  { id: 'tailwind', label: 'Tailwind CSS', x: 40, y: 55 },
  { id: 'git', label: 'Git / GitHub', x: 35, y: 65 },
  { id: 'vercel', label: 'Vercel', x: 50, y: 75 },
  
  // Right Cluster (Backend)
  { id: 'supabase', label: 'Supabase', x: 70, y: 52 },
  { id: 'python', label: 'Python', x: 80, y: 25 },
  { id: 'node', label: 'Node.js', x: 92, y: 30 },
  { id: 'fastapi', label: 'FastAPI', x: 95, y: 42 },
  { id: 'rest', label: 'REST APIs', x: 85, y: 52 },
];

const edges: Edge[] = [
  // Left side edges
  { source: 'css', target: 'html' },
  { source: 'css', target: 'react' },
  { source: 'html', target: 'framer' },
  { source: 'react', target: 'next' },
  { source: 'react', target: 'framer' },
  { source: 'next', target: 'ts' },
  { source: 'ts', target: 'tailwind' },
  { source: 'framer', target: 'tailwind' },
  { source: 'git', target: 'vercel' },

  // Right side edges
  { source: 'python', target: 'node' },
  { source: 'python', target: 'fastapi' },
  { source: 'node', target: 'fastapi' },
  { source: 'fastapi', target: 'rest' },
  { source: 'rest', target: 'supabase' },
];

const learningSkills = [
  'Docker', 'Figma', 'Postman', 'PostgreSQL', 'MongoDB', 
  'Machine Learning', 'Deep Learning', 'Computer Vision', 'Generative AI'
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 }
  }
};

const badgeStagger = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function Skills() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="skills" className="bg-void py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Outer section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-iridescent-a/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl relative z-10 flex flex-col items-center w-full"
      >
        <div className="w-full mb-20 md:mb-24">
          <SectionTitle title="SKILLS" subtitle="Technical Arsenal" />
        </div>

        {/* Network Graph Container */}
        <div className="w-full overflow-x-auto pb-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div 
            className="min-w-[1000px] w-full min-h-[500px] aspect-[16/9] lg:aspect-[2/1] bg-surface border border-white/10 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
            onClick={() => setHoveredNode(null)}
          >
            
            {/* Background glows inside the container */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-iridescent-a/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-iridescent-b/5 rounded-full blur-[100px] pointer-events-none" />

            {/* SVG Lines Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {edges.map((edge, i) => {
                const sourceNode = nodes.find(n => n.id === edge.source);
                const targetNode = nodes.find(n => n.id === edge.target);
                if (!sourceNode || !targetNode) return null;
                
                const isHovered = hoveredNode === edge.source || hoveredNode === edge.target;

                return (
                  <motion.line
                    key={`${edge.source}-${edge.target}-${i}`}
                    x1={`${sourceNode.x}%`}
                    y1={`${sourceNode.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isHovered ? "#7C3AED" : "rgba(255, 255, 255, 0.05)"}
                    strokeWidth={isHovered ? "2" : "1.5"}
                    style={{
                      transition: 'stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease',
                      filter: isHovered ? 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.8))' : 'none',
                    }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            <motion.div variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  variants={badgeStagger}
                  className="absolute z-10 cursor-pointer"
                  style={{ left: `${node.x}%`, top: `${node.y}%`, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredNode(hoveredNode === node.id ? null : node.id);
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <div className={`
                      px-4 py-2 rounded-full font-mono text-xs md:text-sm whitespace-nowrap backdrop-blur-md
                      transition-all duration-300
                      ${hoveredNode === node.id || node.glow 
                        ? 'bg-void text-chrome-2 border-[1px] border-iridescent-b/80 shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                        : 'bg-void/80 text-chrome-1 border border-white/10 hover:border-white/20 hover:text-chrome-2'
                      }
                    `}>
                      {node.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Currently Learning Section */}
        <div className="mt-24 md:mt-32 w-full flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-mono text-iridescent-b tracking-widest uppercase mb-10 text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            CURRENTLY LEARNING
          </h3>

          <div className="w-full max-w-5xl bg-surface border border-white/10 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Background glow inside */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-iridescent-b/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div 
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-wrap justify-center items-center gap-8 md:gap-14"
            >
              {learningSkills.map((skill, i) => (
                <motion.div key={skill} variants={badgeStagger}>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}>
                    <div className="px-6 py-3 rounded-full font-mono text-sm md:text-base whitespace-nowrap backdrop-blur-md bg-void text-chrome-2 border-[1px] border-iridescent-b/80 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 cursor-default">
                      {skill}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
