import Image from "next/image";
import Link from "next/link";

const plantCategories = [
  {
    id: "01",
    title: "Indoor Plants",
    desc: "Transform your living spaces with our hand-picked collection of air-purifying and decorative indoor plants — from Monstera to Snake Plants.",
    img: "/images/monstera.png",
    link: "/shop",
    linkText: "Browse Indoor Plants",
    accent: false,
  },
  {
    id: "02",
    title: "Outdoor & Garden",
    desc: "Flowering shrubs, ornamental trees, hedging plants, and seasonal blooms to create your dream garden landscape.",
    img: "/images/garden-landscape.png",
    link: "/shop",
    linkText: "Explore Garden Plants",
    accent: true,
  },
  {
    id: "03",
    title: "Landscaping Services",
    desc: "Professional garden design, terrace landscaping, and ongoing maintenance services for homes and commercial spaces.",
    img: "/images/garden-consultant.png",
    link: "/services",
    linkText: "View Services",
    accent: false,
  },
];

const features = [
  {
    icon: "local_florist",
    title: "500+ Plant Varieties",
    desc: "From rare exotics to everyday favourites — the widest selection in the region.",
  },
  {
    icon: "eco",
    title: "100% Organic",
    desc: "All plants are grown using organic compost and natural pest management.",
  },
  {
    icon: "local_shipping",
    title: "Safe Delivery",
    desc: "Expert packaging and doorstep delivery across Valsad and surrounding areas.",
  },
  {
    icon: "support_agent",
    title: "Expert Guidance",
    desc: "Free plant care advice from our in-house horticulturists — before and after purchase.",
  },
];

const bestSellers = [
  { name: "Money Plant (Golden)", price: "₹149", img: "/images/string-of-pearls.png" },
  { name: "Monstera Deliciosa", price: "₹599", img: "/images/monstera.png" },
  { name: "Fiddle Leaf Fig", price: "₹799", img: "/images/fiddle-leaf-fig.png" },
  { name: "Premium Organic Compost", price: "₹299", img: "/images/premium-compost.png" },
];

const testimonials = [
  {
    name: "Priya Desai",
    role: "Home Gardener, Valsad",
    text: '"I bought over 20 plants from Niky Nursery for my new home. Every single one is thriving! Their advice on placement and watering was incredibly helpful."',
  },
  {
    name: "Rajesh Mehta",
    role: "Restaurant Owner",
    text: '"They landscaped our entire outdoor dining area with beautiful flowering plants. Our customers love the ambience. Highly recommended!"',
  },
  {
    name: "Anita Sharma",
    role: "Interior Designer",
    text: '"Niky Farm is my go-to for premium indoor plants. The quality is unmatched and the variety keeps me coming back for every project."',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nursery-grounds.png"
            alt="Niky Farm and Nursery — lush plant nursery grounds"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
            Valsad&apos;s Favourite Plant Nursery
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase font-headline">
            Niky Farm<br />
            <span className="text-tertiary-fixed-dim">&amp; Nursery</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-xl mb-10 font-body leading-relaxed">
            Over 500 varieties of indoor, outdoor, and exotic plants. Expert landscaping services.
            Trusted by plant lovers across Gujarat since day one.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="group bg-primary text-on-primary px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all flex items-center gap-4 border border-white/10 relative overflow-hidden"
            >
              <span className="relative z-10">Shop Plants</span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                arrow_forward
              </span>
              <div className="absolute inset-0 bg-tertiary-fixed-dim translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group px-10 py-5 font-bold uppercase tracking-widest text-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all flex items-center gap-4"
            >
              <span>Visit Nursery</span>
              <span className="material-symbols-outlined">location_on</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-body">Scroll</span>
          <span className="material-symbols-outlined text-white/40">expand_more</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US — FEATURE STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-primary text-background py-6 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 py-4">
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-2xl flex-shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {f.icon}
              </span>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider mb-1 font-headline">{f.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-70 font-body">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PLANT CATEGORIES
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline">
            Explore Our Collection
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
          {plantCategories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative aspect-square overflow-hidden p-10 md:p-12 flex flex-col justify-between border-r border-b border-outline-variant/20 ${cat.accent ? "bg-primary text-background" : "bg-surface-container"
                }`}
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className={`object-cover transition-all duration-500 ${cat.accent
                    ? "opacity-20 group-hover:opacity-35 grayscale"
                    : "opacity-10 group-hover:opacity-25 grayscale"
                  }`}
              />
              <span
                className={`font-black text-5xl uppercase tracking-tighter relative z-10 ${cat.accent ? "text-background/40" : "text-primary/30"
                  }`}
              >
                {cat.id}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-3 tracking-tight font-headline">
                  {cat.title}
                </h3>
                <p
                  className={`text-sm max-w-xs mb-6 font-body leading-relaxed ${cat.accent ? "text-background/70" : "text-on-surface-variant"
                    }`}
                >
                  {cat.desc}
                </p>
                <Link
                  href={cat.link}
                  className={`text-xs font-bold uppercase tracking-widest pb-1 inline-block border-b-2 ${cat.accent ? "border-background" : "border-primary"
                    }`}
                >
                  {cat.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / STORY SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-surface-container py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 font-headline leading-tight">
              Rooted in Passion,<br />
              <span className="text-primary/60">Grown with Love</span>
            </h2>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                Niky Farm &amp; Nursery is a family-owned plant nursery based near Valsad, Gujarat.
                What started as a small backyard passion has grown into one of the most trusted names
                for quality plants, gardening supplies, and professional landscaping in the region.
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant font-body">
                We believe every home deserves the beauty and freshness of living greenery. Whether
                you&apos;re a first-time plant parent looking for an easy-care succulent, or an experienced
                gardener seeking rare tropical specimens — we have something special for you.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-surface-bright border border-outline-variant/20">
                  <span className="text-3xl font-black text-primary font-headline block">500+</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-body">
                    Plant Varieties
                  </span>
                </div>
                <div className="text-center p-4 bg-surface-bright border border-outline-variant/20">
                  <span className="text-3xl font-black text-primary font-headline block">5000+</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-body">
                    Happy Customers
                  </span>
                </div>
                <div className="text-center p-4 bg-surface-bright border border-outline-variant/20">
                  <span className="text-3xl font-black text-primary font-headline block">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-body">
                    Organic Growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full aspect-[4/3] bg-primary relative overflow-hidden">
            <Image
              src="/images/hero-nursery.png"
              alt="Inside Niky Farm — rows of healthy plants"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
              <p className="text-white text-xs uppercase tracking-widest font-body">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm align-middle mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                Niky Garden Nursery — Valsad, Gujarat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BEST SELLERS
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
                Popular Picks
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline">
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
                <div className="p-5">
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-1 font-headline">
                    {plant.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-black text-lg font-headline">{plant.price}</span>
                    <button className="w-8 h-8 bg-primary text-on-primary flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES HIGHLIGHT
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
              Professional Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline">
              More Than a Nursery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "yard",
                title: "Garden Design",
                desc: "Custom garden layouts for homes, villas, and commercial spaces with plant selection guidance.",
              },
              {
                icon: "home",
                title: "Terrace Gardens",
                desc: "Complete terrace garden setup with waterproofing consultation, raised beds, and drip irrigation.",
              },
              {
                icon: "park",
                title: "Landscape Maintenance",
                desc: "Monthly and quarterly maintenance packages to keep your garden lush and healthy year-round.",
              },
              {
                icon: "potted_plant",
                title: "Corporate Green",
                desc: "Office plant solutions, green wall installations, and reception décor with rental options.",
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="p-8 bg-surface-bright border border-outline-variant/20 hover:border-primary/30 transition-colors group"
              >
                <span
                  className="material-symbols-outlined text-3xl text-primary mb-6 block group-hover:scale-110 transition-transform origin-left"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {svc.icon}
                </span>
                <h4 className="text-sm font-black uppercase tracking-wider mb-3 font-headline">
                  {svc.title}
                </h4>
                <p className="text-xs leading-relaxed text-on-surface-variant font-body">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all"
            >
              All Services
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
              Customer Love
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-10 bg-surface-container-low flex flex-col justify-between h-full border border-outline/10 hover:border-primary/20 transition-colors"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-medium italic mb-8 font-body leading-relaxed">{t.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center text-on-primary font-black text-sm font-headline">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest font-headline">{t.name}</p>
                    <p className="text-[10px] uppercase text-on-surface-variant font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISIT US — MAP SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
                Visit Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 font-headline leading-tight">
                Come See<br />
                <span className="text-primary/60">Our Nursery</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1 font-headline">Address</h4>
                    <p className="text-sm text-on-surface-variant font-body">
                      Niky Garden Nursery<br />
                      Near Valsad, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schedule
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1 font-headline">Hours</h4>
                    <p className="text-sm text-on-surface-variant font-body">
                      Monday – Saturday: 8:00 AM – 7:00 PM<br />
                      Sunday: 9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-1 font-headline">Contact</h4>
                    <p className="text-sm text-on-surface-variant font-body">
                      Call us for orders and enquiries
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all self-start"
              >
                Get Directions
                <span className="material-symbols-outlined text-sm">directions</span>
              </Link>
            </div>

            <div className="flex-1 w-full">
              <div className="w-full aspect-[4/3] bg-surface-container-high border border-outline-variant/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.381872605818!2d72.89379207493292!3d20.284454812926754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d3d08ef9b9d3%3A0xa7994e829350e1c3!2sNiky%20Garden%20Nursery!5e0!3m2!1sen!2sin!4v1777050886594!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Niky Garden Nursery Location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/garden-landscape.png"
            alt="Beautiful garden landscape"
            fill
            className="object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 font-headline leading-tight">
            Ready to Bring Your<br />
            <span className="text-tertiary-fixed-dim">Garden to Life?</span>
          </h2>
          <p className="text-white/60 text-base mb-10 font-body max-w-lg mx-auto">
            Visit our nursery to explore hundreds of plant varieties, get expert advice, and find
            everything you need for your dream garden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="group bg-white text-primary px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all flex items-center gap-4"
            >
              Shop Now
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all flex items-center gap-4"
            >
              Contact Us
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
