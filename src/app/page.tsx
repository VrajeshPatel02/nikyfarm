import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";

const PHONE_NUMBER = "9876543210";
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hi,%20I'd%20like%20to%20order%20from%20Niky%20Farm`;

const plantCategories = [
  { id: "Indoor Plants", img: "/images/monstera.png", link: "/shop" },
  { id: "Outdoor & Garden", img: "/images/garden-landscape.png", link: "/shop" },
  { id: "Seeds & Bulbs", img: "/images/premium-compost.png", link: "/shop" },
  { id: "Pots & Planters", img: "/images/fiddle-leaf-fig.png", link: "/shop" },
  { id: "Landscaping", img: "/images/garden-consultant.png", link: "/services" },
];

const bestSellers = [
  { name: "Money Plant (Golden)", price: "₹149", img: "/images/string-of-pearls.png" },
  { name: "Monstera Deliciosa", price: "₹599", img: "/images/monstera.png" },
  { name: "Fiddle Leaf Fig", price: "₹799", img: "/images/fiddle-leaf-fig.png" },
  { name: "Premium Organic Compost", price: "₹299", img: "/images/premium-compost.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-40px)] flex items-center px-6 sm:px-12 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nursery-grounds.png"
            alt="Niky Farm and Nursery — lush plant nursery grounds"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl w-full">
          <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
            Valsad&apos;s Favourite Plant Nursery
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-black text-white leading-[0.9] tracking-tighter mb-5 uppercase font-headline">
            Niky Farm<br />
            <span className="text-tertiary-fixed-dim">&amp; Nursery</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mb-8 font-body leading-relaxed">
            Valsad&apos;s only nursery with 500+ varieties — open today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/shop"
              aria-label="Shop Plants — browse our collection"
              className="group bg-primary text-on-primary px-8 py-4 sm:px-10 sm:py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4 border border-white/10 relative overflow-hidden"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true">
                arrow_forward
              </span>
              <div className="absolute inset-0 bg-tertiary-fixed-dim translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="group px-8 py-4 sm:px-10 sm:py-5 font-bold uppercase tracking-widest text-sm text-white border border-white/30 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all flex items-center justify-center gap-4"
            >
              <span>WhatsApp Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-body">Scroll</span>
          <span className="material-symbols-outlined text-white/40">expand_more</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-primary text-background py-5 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-headline">Organically Grown</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-headline">Valsad Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-tertiary-fixed-dim" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-headline">WhatsApp Orders</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-headline">Free Expert Advice</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PLANT CATEGORIES (Visual Tiles)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-3 sm:gap-5">
          {plantCategories.map((cat, i) => (
            <Link
              href={cat.link}
              key={cat.id}
              className={`group relative overflow-hidden flex flex-col justify-end p-5 min-h-[220px] sm:min-h-[280px] bg-surface-container-low border border-outline-variant/20 rounded-sm
                ${i === 0 ? 'col-span-2 md:col-span-3 lg:col-span-2' : ''}
                ${i === 1 ? 'col-span-2 md:col-span-3 lg:col-span-3' : ''}
                ${i === 2 ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}
                ${i === 3 ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}
                ${i === 4 ? 'col-span-2 md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.img}
                  alt={cat.id}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              </div>
              
              <div className="relative z-10 flex items-center justify-between w-full">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight font-headline text-white drop-shadow-md">
                  {cat.id}
                </h3>
                <span className="material-symbols-outlined text-white text-sm bg-primary/80 backdrop-blur-sm p-2 rounded-full group-hover:bg-tertiary-fixed-dim group-hover:text-on-tertiary-fixed transition-all group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BEST SELLERS
      ═══════════════════════════════════════════ */}
      <section className="py-8 pb-16 sm:pb-24 px-6 sm:px-12 md:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-headline">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 inline-block self-start md:self-auto"
            >
              View All Plants →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-outline-variant/20">
            {bestSellers.map((plant, i) => (
              <div
                key={i}
                className="group relative bg-surface-container-low border-r border-b border-outline-variant/20 overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={plant.img}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-tight mb-2 font-headline line-clamp-2">
                    {plant.name}
                  </h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-primary font-black text-lg sm:text-xl font-headline">{plant.price}</span>
                    <button
                      aria-label={`Add ${plant.name} to cart`}
                      className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOCIAL PROOF
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-surface-container text-center border-y border-outline-variant/20 px-6">
        <a 
          href="https://www.google.com/maps/place/Niky+Garden+Nursery" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 group hover:opacity-80 transition-opacity"
        >
          <div className="flex gap-1 text-[#fbbc04]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <span className="text-base sm:text-xl font-black uppercase tracking-widest font-headline text-on-surface">
            4.8 rating on Google · 180+ reviews
          </span>
        </a>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER CTA (Two Columns)
      ═══════════════════════════════════════════ */}
      <section className="bg-primary text-background grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Visit Us */}
        <div className="p-12 sm:p-20 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="material-symbols-outlined text-5xl mb-6 text-tertiary-fixed-dim relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 font-headline relative z-10">Visit Us</h2>
          <p className="text-sm sm:text-base text-background/80 font-body mb-2 relative z-10">Niky Garden Nursery, Near Valsad, Gujarat</p>
          <p className="text-sm sm:text-base text-background/80 font-body mb-10 relative z-10">Mon–Sat: 8AM–7PM | Sun: 9AM–5PM</p>
          <Link
            href="/contact"
            className="bg-background text-primary px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all relative z-10 flex items-center gap-3"
          >
            Get Directions
            <span className="material-symbols-outlined text-sm">directions</span>
          </Link>
        </div>
        
        {/* Right Column: Order on WhatsApp */}
        <div className="p-12 sm:p-20 flex flex-col justify-center items-center text-center bg-black/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-[#25D366] mb-6 relative z-10" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 font-headline relative z-10">Order on WhatsApp</h2>
          <p className="text-sm sm:text-base text-background/80 font-body mb-2 relative z-10">+91 {PHONE_NUMBER}</p>
          <p className="text-sm sm:text-base text-background/80 font-body mb-10 relative z-10">Chat with our experts and order directly</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#1EBE5D] transition-all flex items-center gap-3 relative z-10"
          >
            Chat on WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
