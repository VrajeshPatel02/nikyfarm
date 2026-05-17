"use client";
 
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
 
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-8 h-20 bg-background/90 backdrop-blur-md z-50 border-b border-primary/5"
    >
      {/* Left Column: Logo */}
      <div className="flex-1 flex justify-start">
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
      </div>
 
      {/* Center Column: Navigation Links */}
      <nav className="hidden md:flex items-center justify-center gap-2 flex-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-4 py-2 font-body text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isActive ? "text-primary font-black" : "text-on-background/60 hover:text-primary"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
 
              {/* Hover/Active Background Highlight */}
              <AnimatePresence>
                {(hoveredPath === link.href || isActive) && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 z-0 bg-primary/5"
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
 
      {/* Right Column: Search Bar & WhatsApp CTA */}
      <div className="flex-1 flex justify-end items-center gap-6">
        {/* Sleek Search Bar */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center relative w-48 xl:w-56">
          <span className="material-symbols-outlined absolute left-3.5 text-on-background/40 text-sm">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plants..."
            className="w-full bg-primary/5 text-xs font-body pl-9 pr-4 py-2 rounded-full border border-primary/10 focus:outline-none focus:border-primary/30 focus:bg-background transition-all placeholder:opacity-50"
          />
        </form>
 
        <motion.a
          whileHover={{ x: -5 }}
          href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20order%20from%20Niky%20Farm"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#25D366] hover:text-[#1EBE5D] transition-colors font-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          WhatsApp Us
        </motion.a>
      </div>
    </motion.header>
  );
}
