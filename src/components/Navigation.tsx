"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20 bg-background/90 backdrop-blur-md z-50 border-b border-primary/5"
    >
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="group text-2xl font-black text-primary tracking-tighter uppercase font-headline flex items-center gap-2"
        >
          <motion.span
            whileHover={{ rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </motion.span>
          <span className="relative">
            NIKY FARM
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
              whileHover={{ width: "100%" }}
            />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-4 py-2 font-body text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-primary font-black" : "text-on-background/60 hover:text-primary"
                  }`}
              >
                <span className="relative z-10">{link.name}</span>

                {/* Hover/Active Background Highlight */}
                <AnimatePresence>
                  {(hoveredPath === link.href || isActive) && (
                    <motion.div
                      layoutId="nav-highlight"
                      className={`absolute inset-0 z-0 ${isActive ? "bg-primary/5" : "bg-primary/5"}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Underline for Active Link */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary z-20"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center">
        <motion.a
          whileHover={{ x: -5 }}
          href="tel:+91"
          className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-on-background/40 hover:text-primary transition-colors font-black"
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          Call Us
        </motion.a>
      </div>
    </motion.header>
  );
}
