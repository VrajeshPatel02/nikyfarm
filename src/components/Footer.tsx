import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary text-background">
      <div className="flex flex-col justify-between gap-12">
        <div>
          <span className="font-headline font-bold text-3xl uppercase tracking-tighter">NIKY FARM</span>
          <p className="font-body text-xs uppercase tracking-widest opacity-70 mt-4 leading-loose">
            © 2026 NIKY FARM &amp; NURSERY.<br />YOUR GARDEN PARTNER.
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
          <a className="opacity-70 hover:opacity-100 hover:text-[#25D366] transition-colors" href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20order%20from%20Niky%20Farm" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
          </a>
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">mail</span></a>
        </div>
      </div>
    </footer>
  );
}
