"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20 bg-background/90 backdrop-blur-md z-50">
      <div className="flex items-center gap-8">
        <Link 
          href="/" 
          className="text-2xl font-black text-primary tracking-tighter uppercase font-headline flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            eco
          </span>
          NIKY FARM
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link 
            href="/" 
            className={`transition-none px-2 font-body text-xs uppercase tracking-widest ${pathname === '/' ? 'text-primary font-bold' : 'text-on-background/60 hover:bg-primary hover:text-background'}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-none px-2 font-body text-xs uppercase tracking-widest ${pathname === '/about' ? 'text-primary font-bold' : 'text-on-background/60 hover:bg-primary hover:text-background'}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`transition-none px-2 font-body text-xs uppercase tracking-widest ${pathname === '/services' ? 'text-primary font-bold' : 'text-on-background/60 hover:bg-primary hover:text-background'}`}
          >
            Services
          </Link>
          <Link 
            href="/shop" 
            className={`transition-none px-2 font-body text-xs uppercase tracking-widest ${pathname === '/shop' ? 'text-primary font-bold' : 'text-on-background/60 hover:bg-primary hover:text-background'}`}
          >
            Shop
          </Link>
          <Link 
            href="/contact" 
            className={`transition-none px-2 font-body text-xs uppercase tracking-widest ${pathname === '/contact' ? 'text-primary font-bold' : 'text-on-background/60 hover:bg-primary hover:text-background'}`}
          >
            Contact
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="tel:+91" 
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest text-on-background/60 hover:text-primary transition-colors font-body"
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          Call Us
        </a>
        <Link
          href="/contact"
          className="bg-primary text-on-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors"
        >
          Visit Nursery
        </Link>
      </div>
    </header>
  );
}
