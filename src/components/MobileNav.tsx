"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/", icon: "home" },
  { name: "About", href: "/about", icon: "info" },
  { name: "Services", href: "/services", icon: "yard" },
  { name: "Shop", href: "/shop", icon: "storefront" },
  { name: "Contact", href: "/contact", icon: "mail" },
];

const bottomNavItems = [
  { label: "Shop", icon: "storefront", href: "/shop" },
  { label: "Search", icon: "search", href: "#" },
  { label: "Cart", icon: "shopping_cart", href: "#" },
  { label: "Account", icon: "person", href: "#" },
];

// ── Drawer Component ──
function NavDrawer({ isOpen, setIsOpen, pathname }: { isOpen: boolean, setIsOpen: (val: boolean) => void, pathname: string }) {
  return (
    <>
      {/* Hamburger Button — mobile only */}
      <button
        id="mobile-nav-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-0 right-0 h-20 w-16 z-[60] flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-primary origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="block w-6 h-0.5 bg-primary origin-center"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-primary origin-center"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            />

            {/* Drawer Content */}
            <motion.nav
              key="drawer"
              id="mobile-nav-drawer"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-background z-[58] flex flex-col pt-24 pb-28 px-8 shadow-2xl"
            >
              {/* Logo inside drawer */}
              <Link href="/" className="flex items-center gap-2 mb-10 text-lg font-black text-primary uppercase font-headline tracking-tighter">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                Niky Farm
              </Link>

              <ul className="flex flex-col gap-1 flex-1" role="list">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center gap-4 px-4 py-4 font-headline font-black text-xl uppercase tracking-tight border-l-4 transition-all ${
                          isActive
                            ? "border-primary text-primary bg-primary/5"
                            : "border-transparent text-on-surface/60 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {link.icon}
                        </span>
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* WhatsApp Us at bottom of drawer */}
              <div className="border-t border-outline-variant/20 pt-6">
                <a
                  href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20order%20from%20Niky%20Farm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-bold text-[#25D366] hover:text-[#1EBE5D] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Bottom Tab Bar Component ──
function BottomTabBar({ pathname }: { pathname: string }) {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-stretch h-16 bg-background border-t border-outline-variant/20 z-50"
      role="navigation"
      aria-label="Quick access"
    >
      {bottomNavItems.map((item) => {
        const isActive = pathname.startsWith(item.href) && item.href !== "#";
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`flex flex-col items-center justify-center px-4 py-2 flex-1 transition-colors ${
              isActive
                ? "bg-primary text-background"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <span className="text-[9px] font-black uppercase mt-1 tracking-widest">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. The Slide-in Drawer with Hamburger Button */}
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />

      {/* 2. The Bottom Quick-Access Tab Bar */}
      {/* <BottomTabBar pathname={pathname} /> */}

      {/* Spacer so content isn't hidden behind the bottom bar */}
      {/* <div className="h-16 md:hidden" aria-hidden="true" /> */}
    </>
  );
}
