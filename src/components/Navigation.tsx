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
          className="text-2xl font-black text-primary tracking-tighter uppercase font-headline"
        >
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
        <div className="relative hidden sm:block">
          <input 
            className="bg-surface-container border-none focus:ring-0 px-4 py-2 text-xs uppercase tracking-widest w-48 placeholder:text-on-surface-variant/40" 
            placeholder="Search nursery..." 
            type="text"
          />
        </div>
        <button className="p-2 hover:bg-primary hover:text-background transition-none">
          <span className="material-symbols-outlined">psychology</span>
        </button>
        <div className="w-10 h-10 overflow-hidden grayscale border border-outline/20">
          <img 
            alt="Daisy AI Assistant" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpLMwX3VHk2kcbjsHT3AIQSOphTsdcTyJiBzlCMyV1iZUXpVWuMovOFjFHUYP9gjq78WKeD4hfIw4PuhizwP5ZfTeD76qg2O7lqX9FGoKq3UMn_UyN2PuI2X7M2Kk_Ob6evmW37O5tELKFUUrBYkk1mxOhWtqqozQKB-y-Nl_Ix0olKCDafQbAs9xJeOgeOXz8D9rRFf-JQqR_qi2A2uWGHUoTn_-q4kw_s8ZMK0E-dBmcjscQWSnx_90ceGpA-UnBJ3BmvrbTUTE"
          />
        </div>
      </div>
    </header>
  );
}
