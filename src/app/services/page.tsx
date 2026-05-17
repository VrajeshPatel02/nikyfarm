"use client";

import Image from "next/image";

export default function ServicesPage() {
  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed-dim">
      <main>
        {/* 1. Sharp Opening Statement */}
        <section className="bg-primary text-white pt-40 pb-24 px-6 sm:px-12 md:px-20 text-center flex flex-col items-center justify-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-headline font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              We design, build, and maintain<br />
              <span className="text-tertiary-fixed-dim">beautiful green spaces.</span>
            </h1>
            <p className="text-white/60 font-medium tracking-[0.3em] uppercase text-sm sm:text-base mb-12">
              Gardens · Landscapes · Offices
            </p>
            <button 
              onClick={() => handleWhatsApp("Hi Niky Farm! I would like to get a free consultation.")}
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-black uppercase px-10 py-5 text-sm tracking-widest hover:bg-tertiary-fixed-dim hover:text-white transition-all"
            >
              Get a Free Consultation <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* 2. Services Cards */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* 01 / Garden Design & Landscaping */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/garden-landscape.png" alt="Garden Design" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">01 / Garden Design & Landscaping</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">A Garden Designed Around How You Live</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    We work with your space, soil, and sunlight to design gardens that look beautiful and stay healthy. From a small home garden to a full villa landscape — we handle design, sourcing, and execution.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Custom Garden Layouts</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Plant Selection & Sourcing</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Hardscaping & Pathways</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Water Features & Lighting</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30">
                  <p className="font-bold text-sm text-primary">Pricing is tailored to your project — we offer a free site visit to understand your space before we quote.</p>
                </div>
                <div className="pt-2">
                  <button onClick={() => handleWhatsApp("Hi, I'm interested in garden design and landscaping. Can we discuss my project?")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Discuss Your Garden
                  </button>
                </div>
              </div>
            </div>

            {/* 02 / Garden Maintenance */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/nursery-grounds.png" alt="Garden Maintenance" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">02 / Garden Maintenance</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">Your Garden Looks Great on Day One. We Keep It That Way.</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    A well-designed garden needs consistent care. Our maintenance team handles everything — so your garden stays lush through every season without the effort on your end.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Pruning & Trimming</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Fertilizing & Soil Health</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Pest & Disease Control</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Seasonal Replanting</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30">
                  <p className="font-bold text-sm text-on-surface-variant">Maintenance schedules are planned based on your garden&apos;s size and needs — monthly, quarterly, or as required.</p>
                </div>
                <div className="pt-2">
                  <button onClick={() => handleWhatsApp("Hi, I'm looking for garden maintenance services. Can you tell me more?")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Enquire
                  </button>
                </div>
              </div>
            </div>

            {/* 03 / Corporate Green */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/monstera.png" alt="Corporate Green" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">03 / Corporate Green</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">Bring Life Into Your Workspace</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    Plants change how a space feels — and how people feel in it. We design and maintain green installations for offices, lobbies, showrooms, and commercial spaces. Supply, setup, and ongoing care — all handled.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Indoor Plant Selection & Placement</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Green Wall Installations</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Reception & Common Area Décor</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Ongoing Maintenance & Replacement</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30">
                  <p className="font-bold text-sm text-primary">Pricing is tailored to your project — we offer a free site visit to understand your space before we quote.</p>
                </div>
                <div className="pt-2">
                  <button onClick={() => handleWhatsApp("Hi, I'm interested in plants and greenery for a commercial space. Can we talk?")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Discuss Your Space
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Past Work Gallery */}
        <section id="gallery" className="py-24 bg-surface-container px-6 sm:px-12 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-6">Our Work</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto border border-outline-variant/30 bg-surface py-4 px-6 inline-block shadow-sm">
                Portfolio coming soon.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
              {[
                "Villa Garden",
                "Office Green Wall",
                "Residential Landscape",
                "Terrace Setup",
                "Balcony Garden",
                "Corporate Lobby"
              ].map((proj, i) => (
                <div key={i} className="relative aspect-square bg-surface border border-outline-variant/20 group flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4 group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
                  <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <p className="font-black uppercase tracking-widest text-xs sm:text-sm text-primary mb-1">{proj}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button onClick={() => handleWhatsApp("Hi Niky Farm, I have a space I'd like to share a photo of.")} className="text-primary font-black uppercase tracking-widest text-sm hover:text-tertiary-fixed-dim transition-colors border-b-2 border-primary hover:border-tertiary-fixed-dim pb-1">
                Share a photo of your space on WhatsApp — we&apos;ll tell you what&apos;s possible.
              </button>
            </div>
          </div>
        </section>

        {/* 4. Closing CTA - Quick Enquiry Selector */}
        <section className="bg-primary py-24 px-6 sm:px-12 md:px-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/garden-landscape.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="max-w-4xl mx-auto bg-surface p-10 sm:p-16 md:p-20 border-t-4 border-tertiary-fixed-dim shadow-2xl relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tight mb-12">What can we help you with?</h2>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10">
              <button 
                onClick={() => handleWhatsApp("Hi, I'm interested in garden design and landscaping. Can we discuss my project?")}
                className="bg-primary text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-colors shadow-md border border-white/20"
              >
                Garden Design
              </button>
              <button 
                onClick={() => handleWhatsApp("Hi, I'm looking for garden maintenance services. Can you tell me more?")}
                className="bg-primary text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-colors shadow-md border border-white/20"
              >
                Maintenance
              </button>
              <button 
                onClick={() => handleWhatsApp("Hi, I'm interested in plants and greenery for a commercial space. Can we talk?")}
                className="bg-primary text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-colors shadow-md border border-white/20"
              >
                Corporate Green
              </button>
            </div>

            <p className="text-sm text-white/80 mt-8 font-medium">
              We respond within a few hours — no forms, no waiting.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
