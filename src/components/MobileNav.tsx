"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Shop", icon: "storefront", href: "/shop" },
    { label: "Search", icon: "search", href: "#" },
    { label: "Cart", icon: "shopping_cart", href: "#" },
    { label: "Account", icon: "person", href: "#" },
  ];

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-stretch h-16 bg-background border-t border-outline-variant/20 z-50">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && item.href !== "#";
          return (
            <Link 
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center px-4 py-2 flex-1 transition-colors ${
                isActive 
                ? "bg-primary text-background" 
                : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              <span className="material-symbols-outlined text-xl">
                {item.icon}
              </span>
              <span className="font-public-sans text-[9px] font-black uppercase mt-1 tracking-widest">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Spacer for mobile to prevent content from being hidden behind the bar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
}
