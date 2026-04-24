"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InteractiveHero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const bgX = useTransform(smoothMouseX, [0, windowSize.width], [15, -15]);
  const bgY = useTransform(smoothMouseY, [0, windowSize.height], [15, -15]);

  const nodes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 120 + 40,
    depth: Math.random() * 3 + 1,
  }));

  return (
    <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden pt-20 bg-primary">
      {/* Background with Parallax */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <Image
          src="https://images.unsplash.com/photo-1592150621344-22d508833721?auto=format&fit=crop&q=80&w=2070"
          alt="Lush brutalist nursery"
          fill
          className="object-cover grayscale brightness-[0.4] contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      </motion.div>

      {/* Fidgetable Biological Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node) => (
          <Node
            key={node.id}
            node={node}
            mouseX={smoothMouseX}
            mouseY={smoothMouseY}
            windowSize={windowSize}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-l-4 border-white/20"
        >
          Keystone Plantings 2026
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase font-headline"
        >
          Raw<br /><span className="text-tertiary-fixed-dim">Growth.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="group bg-primary text-on-primary px-16 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all flex items-center gap-6 border border-white/10 relative overflow-hidden">
            <span className="relative z-10">Get the kit</span>
            <span className="material-symbols-outlined relative z-10 group-hover:translate-x-3 transition-transform duration-300">arrow_forward</span>
            <div className="absolute inset-0 bg-tertiary-fixed-dim translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Brutalist Custom Cursor Follower */}
      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-12 h-12 border border-tertiary-fixed-dim mix-blend-difference pointer-events-none z-50 rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-tertiary-fixed-dim rounded-full" />
      </motion.div>
    </section>
  );
}

function Node({ node, mouseX, mouseY, windowSize }: any) {
  return (
    <motion.div
      style={{
        left: `${node.initialX}%`,
        top: `${node.initialY}%`,
        x: useTransform(mouseX, [0, windowSize.width], [20 * node.depth, -20 * node.depth]),
        y: useTransform(mouseY, [0, windowSize.height], [20 * node.depth, -20 * node.depth]),
        width: node.size,
        height: node.size,
      }}
      className="absolute bg-white/[0.03] backdrop-blur-[1px] border border-white/5 rounded-full mix-blend-overlay"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 180, 0],
      }}
      transition={{
        duration: 15 + node.id,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}
