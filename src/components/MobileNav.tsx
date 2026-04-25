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

              {/* Call Us at bottom of drawer */}
              <div className="border-t border-outline-variant/20 pt-6">
                <a
                  href="tel:+91"
                  className="flex items-center gap-3 text-sm font-bold text-on-surface/60 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  Call Us
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
