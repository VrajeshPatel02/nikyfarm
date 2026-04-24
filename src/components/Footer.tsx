import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary text-background">
      <div className="flex flex-col justify-between gap-12">
        <div>
          <span className="font-headline font-bold text-3xl uppercase tracking-tighter">NIKY FARM</span>
          <p className="font-body text-xs uppercase tracking-widest opacity-70 mt-4 leading-loose">
            © 2026 NIKY FARM &amp; NURSERY.<br />YOUR GARDEN PARTNER SINCE DAY ONE.
          </p>
          <p className="font-body text-xs opacity-50 mt-3 normal-case leading-relaxed max-w-sm">
            Premium plants, expert advice, and professional landscaping services in Valsad, Gujarat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-tertiary-fixed-dim">Quick Links</h5>
            <ul className="space-y-4 font-body text-xs uppercase tracking-widest">
              <li><Link href="/about" className="opacity-70 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link href="/shop" className="opacity-70 hover:opacity-100 transition-opacity">Shop Plants</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-tertiary-fixed-dim">Categories</h5>
            <ul className="space-y-4 font-body text-xs uppercase tracking-widest">
              <li><Link href="/shop" className="opacity-70 hover:opacity-100 transition-opacity">Indoor Plants</Link></li>
              <li><Link href="/shop" className="opacity-70 hover:opacity-100 transition-opacity">Outdoor Plants</Link></li>
              <li><Link href="/shop" className="opacity-70 hover:opacity-100 transition-opacity">Garden Supplies</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 transition-opacity">Landscaping</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end gap-12">
        <div className="w-full max-w-sm">
          <p className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none font-headline">
            Visit our nursery today
          </p>
          <p className="text-xs opacity-60 font-body mb-8 leading-relaxed normal-case">
            Walk in to explore 500+ plant varieties, get free plant care advice, and find everything for your garden.
          </p>
          <Link href="/contact" className="w-full block text-center bg-background text-primary py-5 px-8 font-black uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-tertiary transition-none">
            Get Directions
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a className="opacity-70 hover:opacity-100 flex items-center gap-2 text-xs uppercase tracking-widest font-body" href="https://www.google.com/maps/place/Niky+Garden+Nursery" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-sm">map</span>
            Google Maps
          </a>
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">call</span></a>
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">mail</span></a>
        </div>
      </div>
    </footer>
  );
}
