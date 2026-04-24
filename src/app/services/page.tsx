import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-tertiary-fixed-dim">
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] flex items-center px-8 md:px-12 overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image src="/images/garden-landscape.png" alt="Professional garden landscaping" fill className="object-cover brightness-[0.3]" priority />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-8">
                <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 font-bold text-[10px] uppercase tracking-[0.25em] mb-8 inline-block">Our Services</span>
                <h1 className="text-5xl md:text-[7rem] leading-[0.85] font-headline font-black uppercase tracking-tighter mb-4 text-white">
                  Professional<br /><span className="text-tertiary-fixed-dim">Green Services</span>
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end pb-4">
                <p className="text-white/70 leading-relaxed border-l-4 border-tertiary-fixed-dim pl-6 text-sm">
                  From garden design to terrace setups and ongoing maintenance — we help you create and sustain beautiful green spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="bg-surface-container py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {/* Service 01 */}
            <div className="bg-surface p-10 md:p-12 flex flex-col justify-between min-h-[650px] border-r border-outline-variant/20">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-headline font-black text-outline-variant/30">01</span>
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>yard</span>
                </div>
                <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-4">Garden Design &amp; Landscaping</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                  Transform your outdoor space into a stunning garden. We design custom layouts for homes, villas, farmhouses, and commercial properties with the right plant selection for your climate and soil.
                </p>
                <ul className="space-y-3 mb-12">
                  {["Custom Garden Layouts", "Plant Selection Guidance", "Hardscaping & Pathways", "Water Features & Lighting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
                      <span className="w-2 h-2 bg-tertiary-fixed-dim" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="w-full block text-center bg-primary text-on-primary py-5 font-black uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all">
                Get a Quote
              </Link>
            </div>

            {/* Service 02 */}
            <div className="bg-surface-container-high p-10 md:p-12 flex flex-col justify-between min-h-[650px] border-r border-outline-variant/20">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-headline font-black text-outline-variant/30">02</span>
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                </div>
                <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-4">Terrace &amp; Balcony Gardens</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                  No backyard? No problem. We create beautiful terrace and balcony gardens with raised beds, container setups, drip irrigation, and waterproofing consultation.
                </p>
                <div className="mb-12 h-48 w-full bg-primary relative overflow-hidden">
                  <Image src="/images/garden-consultant.png" alt="Terrace garden setup" fill className="object-cover opacity-80" />
                </div>
              </div>
              <Link href="/contact" className="w-full block text-center bg-primary text-on-primary py-5 font-black uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all">
                Plan My Terrace
              </Link>
            </div>

            {/* Service 03 */}
            <div className="bg-primary p-10 md:p-12 flex flex-col justify-between min-h-[650px] text-on-primary">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-headline font-black text-on-primary-container/20">03</span>
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>park</span>
                </div>
                <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-4">Garden Maintenance</h2>
                <p className="text-on-primary-container mb-8 leading-relaxed text-sm">
                  Keep your garden beautiful year-round with our professional maintenance packages. Pruning, fertilizing, pest control, and seasonal replanting handled by our expert team.
                </p>
                <div className="space-y-4">
                  {[
                    { phase: "Monthly", desc: "Regular pruning, watering check, fertilizing" },
                    { phase: "Quarterly", desc: "Deep soil treatment, pest control, seasonal changes" },
                    { phase: "Annual", desc: "Complete garden refresh, replanting, health audit" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-on-primary-container/20 pb-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-1">{item.phase}</p>
                      <p className="font-medium text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="w-full block text-center mt-8 bg-surface text-primary py-5 font-black uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim transition-all">
                Enquire Now
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-background py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">Also Available</span>
              <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter">More Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "potted_plant", title: "Corporate Green", desc: "Office plants, green walls, and reception décor with rental and maintenance options." },
                { icon: "water_drop", title: "Drip Irrigation", desc: "Automated drip irrigation installation for gardens, terraces, and farms — save water and time." },
                { icon: "compost", title: "Organic Supplies", desc: "Premium vermicompost, neem cake, cocopeat, and gardening tools available in-store." },
                { icon: "school", title: "Garden Workshops", desc: "Learn gardening basics, composting, and plant care through our seasonal hands-on workshops." },
              ].map((svc, i) => (
                <div key={i} className="p-8 bg-surface-container border border-outline-variant/20 hover:border-primary/30 transition-colors group">
                  <span className="material-symbols-outlined text-3xl text-primary mb-6 block group-hover:scale-110 transition-transform origin-left" style={{ fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                  <h4 className="text-sm font-black uppercase tracking-wider mb-3 font-headline">{svc.title}</h4>
                  <p className="text-xs leading-relaxed text-on-surface-variant">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-24 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter mb-6 uppercase">
              Let&apos;s Build Your<br /><span className="text-tertiary-fixed-dim">Dream Garden</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto text-sm">
              Whether it&apos;s a small balcony makeover or a complete landscape transformation, our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary font-headline font-black uppercase px-10 py-5 text-sm tracking-widest hover:bg-tertiary-fixed-dim transition-all">
                Contact Us
              </Link>
              <Link href="/shop" className="border-2 border-white text-white font-headline font-bold uppercase px-10 py-5 text-sm tracking-widest hover:bg-white hover:text-primary transition-all">
                Browse Plants
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
