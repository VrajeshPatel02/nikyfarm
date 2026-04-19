import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary text-background">
      <div className="flex flex-col justify-between gap-12">
        <div>
          <span className="font-headline font-bold text-3xl uppercase tracking-tighter">NIKY FARM</span>
          <p className="font-body text-xs uppercase tracking-widest opacity-70 mt-4 leading-loose">
            © 2026 NIKY FARM & NURSERY.<br />CULTIVATED MONOLITH.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-tertiary-fixed-dim">Primary Links</h5>
            <ul className="space-y-4 font-body text-xs uppercase tracking-widest">
              <li><Link href="/about" className="opacity-70 hover:opacity-100 transition-opacity">About the Farm</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Direct Inquiry</Link></li>
              <li><Link href="/" className="opacity-70 hover:opacity-100 transition-opacity">Home Portal</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-tertiary-fixed-dim">Hyper-Local</h5>
            <ul className="space-y-2 font-body text-xs uppercase tracking-widest">
              <li><a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Sardar Patel Colony</a></li>
              <li><a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Naranpura Hub</a></li>
              <li><a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Sustainability Report</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start md:items-end gap-12">
        <div className="w-full max-w-sm">
          <p className="text-2xl font-black uppercase tracking-tighter mb-8 leading-none">Ready to integrate botanical structure?</p>
          <button className="w-full bg-background text-primary py-5 px-8 font-black uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-tertiary transition-none">
            Start Inquiry
          </button>
        </div>
        <div className="flex gap-6">
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">language</span></a>
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">eco</span></a>
          <a className="opacity-70 hover:opacity-100" href="#"><span className="material-symbols-outlined">map</span></a>
        </div>
      </div>
    </footer>
  );
}
