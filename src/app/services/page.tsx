"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleWhatsApp = (service?: string) => {
    const s = service || selectedService || "your services";
    const size = selectedSize ? ` for a space of ${selectedSize}` : "";
    const message = `Hi Niky Farm! I'm interested in ${s}${size}. Can you help?`;
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
              <span className="text-tertiary-fixed-dim">beautiful green spaces across Valsad.</span>
            </h1>
            <p className="text-white/60 font-medium tracking-[0.3em] uppercase text-sm sm:text-base mb-12">
              Gardens · Terraces · Offices · Farms
            </p>
            <button 
              onClick={() => handleWhatsApp()}
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-black uppercase px-10 py-5 text-sm tracking-widest hover:bg-tertiary-fixed-dim hover:text-white transition-all"
            >
              Get a Free Consultation <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* 2. Services Cards */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* 01 / Terrace Gardens */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/garden-consultant.png" alt="Terrace Garden" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">01 / Terrace Gardens</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">Turn Your Terrace Into a Green Escape</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    A 200 sq ft terrace is enough for vegetables, flowering plants, and a corner to sit in.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Raised beds & container setups</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Drip irrigation included</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Waterproofing consultation</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Handpicked plants for terrace conditions</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30 flex flex-wrap items-center gap-3">
                  <span className="font-black text-lg">Starting from ₹15,000</span>
                  <span className="text-outline-variant hidden sm:inline">·</span>
                  <span className="text-tertiary-fixed-dim font-black uppercase tracking-wider text-sm">Site visit free</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => handleWhatsApp("Terrace Garden")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Enquire
                  </button>
                  <a href="#gallery" className="border border-outline-variant px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-surface-container transition-colors flex items-center justify-center">
                    See Past Work
                  </a>
                </div>
              </div>
            </div>

            {/* 02 / Garden Design & Landscaping */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/garden-landscape.png" alt="Garden Design" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">02 / Garden Design & Landscaping</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">A Garden That Fits How You Live</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    You describe it, we draw it, we build it — a custom outdoor space designed for your climate, soil, and lifestyle.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Custom layouts for homes & villas</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Climate-appropriate plant selection</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Hardscaping & pathway integration</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Lighting & water feature setups</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30 flex flex-wrap items-center gap-3">
                  <span className="font-black text-lg">Starting from ₹25,000</span>
                  <span className="text-outline-variant hidden sm:inline">·</span>
                  <span className="text-tertiary-fixed-dim font-black uppercase tracking-wider text-sm">Site visit free</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => handleWhatsApp("Garden Design")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Enquire
                  </button>
                  <a href="#gallery" className="border border-outline-variant px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-surface-container transition-colors flex items-center justify-center">
                    See Past Work
                  </a>
                </div>
              </div>
            </div>

            {/* 03 / Garden Maintenance */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-5/12 relative h-[500px] bg-surface-variant">
                <Image src="/images/nursery-grounds.png" alt="Garden Maintenance" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-7/12 space-y-8 lg:pl-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">03 / Garden Maintenance</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">Keep Your Garden Beautiful Year-Round</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    Your garden looks great on day one. Our maintenance packages keep it that way.
                  </p>
                </div>
                
                {/* Pricing Table */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-outline-variant mt-8">
                  {/* Monthly */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-outline-variant flex flex-col">
                    <h3 className="font-black uppercase tracking-wider mb-2 text-sm text-outline">Monthly</h3>
                    <p className="text-2xl font-black mb-6">₹X<span className="text-xs font-bold text-outline-variant/80 ml-1">/ mo</span></p>
                    <ul className="space-y-3 text-sm mb-8 flex-grow">
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Pruning</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Watering chk</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Fertilizing</li>
                    </ul>
                    <button onClick={() => handleWhatsApp("Monthly Maintenance")} className="w-full text-center border border-primary text-primary font-black tracking-widest text-xs uppercase py-3 hover:bg-primary hover:text-white transition-colors">WhatsApp</button>
                  </div>
                  
                  {/* Quarterly */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-primary bg-primary/5 relative flex flex-col">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">Most Popular</div>
                    <h3 className="font-black uppercase tracking-wider mb-2 text-sm text-primary">Quarterly</h3>
                    <p className="text-2xl font-black mb-6">₹X<span className="text-xs font-bold text-outline-variant/80 ml-1">/ qtr</span></p>
                    <ul className="space-y-3 text-sm mb-8 flex-grow">
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> All Monthly</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Soil treat</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Pest control</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Seasonal chg</li>
                    </ul>
                    <button onClick={() => handleWhatsApp("Quarterly Maintenance")} className="w-full text-center bg-primary text-white font-black tracking-widest text-xs uppercase py-3 hover:bg-tertiary-fixed-dim transition-colors">WhatsApp</button>
                  </div>

                  {/* Annual */}
                  <div className="p-6 flex flex-col">
                    <h3 className="font-black uppercase tracking-wider mb-2 text-sm text-outline">Annual</h3>
                    <p className="text-2xl font-black mb-6">₹X<span className="text-xs font-bold text-outline-variant/80 ml-1">/ yr</span></p>
                    <ul className="space-y-3 text-sm mb-8 flex-grow">
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> All Quarterly</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Full refresh</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Replanting</li>
                      <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Health audit</li>
                    </ul>
                    <button onClick={() => handleWhatsApp("Annual Maintenance")} className="w-full text-center border border-primary text-primary font-black tracking-widest text-xs uppercase py-3 hover:bg-primary hover:text-white transition-colors">WhatsApp</button>
                  </div>
                </div>

                <div className="pt-6 pb-2 flex flex-wrap items-center gap-3">
                  <span className="text-tertiary-fixed-dim font-black uppercase tracking-wider text-sm">Site visit free</span>
                </div>
              </div>
            </div>

            {/* 04 / Corporate Green */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2 relative h-[500px] bg-surface-variant">
                <Image src="/images/monstera.png" alt="Corporate Green" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 lg:pr-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">04 / Corporate Green</p>
                  <h2 className="text-4xl sm:text-5xl font-headline font-black uppercase tracking-tight mb-4">Professional Greenery For Workspaces</h2>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    Boost employee wellbeing and impress clients with low-maintenance office plants and green walls.
                  </p>
                </div>
                <ul className="space-y-4 font-medium text-sm">
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Indoor plant curation & styling</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Vertical green walls</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Reception & boardroom decor</li>
                  <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> Regular maintenance plans</li>
                </ul>
                <div className="pt-6 pb-2 border-t border-outline-variant/30 flex flex-wrap items-center gap-3">
                  <span className="font-black text-lg">Starting from ₹5,000</span>
                  <span className="text-outline-variant hidden sm:inline">·</span>
                  <span className="text-tertiary-fixed-dim font-black uppercase tracking-wider text-sm">Site visit free</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => handleWhatsApp("Corporate Green")} className="bg-primary text-on-primary px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-tertiary-fixed-dim transition-colors">
                    WhatsApp to Enquire
                  </button>
                  <a href="#gallery" className="border border-outline-variant px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-surface-container transition-colors flex items-center justify-center">
                    See Past Work
                  </a>
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
                Gallery coming soon — visit our nursery to see our portfolio in person.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
              {[
                { title: "Terrace Garden", loc: "Valsad" },
                { title: "Villa Landscaping", loc: "Vapi" },
                { title: "Office Greenery", loc: "Surat" },
                { title: "Balcony Setup", loc: "Valsad" },
                { title: "Farmhouse Design", loc: "Navsari" },
                { title: "Vertical Wall", loc: "Vapi" },
              ].map((proj, i) => (
                <div key={i} className="relative aspect-square bg-surface border border-outline-variant/20 group flex flex-col items-center justify-center overflow-hidden cursor-pointer">
                  <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4 group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
                  <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <p className="font-black uppercase tracking-widest text-sm text-primary mb-1">{proj.title}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">{proj.loc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button onClick={() => handleWhatsApp("a new project")} className="text-primary font-black uppercase tracking-widest text-sm hover:text-tertiary-fixed-dim transition-colors border-b-2 border-primary hover:border-tertiary-fixed-dim pb-1">
                Have a project in mind? → WhatsApp us a photo of your space
              </button>
            </div>
          </div>
        </section>

        {/* 4. Add-Ons & Extras */}
        <section className="py-24 px-6 sm:px-12 md:px-20 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-12 text-center md:text-left">Add-Ons & Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Drip Irrigation", desc: "Automated drip irrigation installation for gardens, terraces, and farms — save water and time." },
                { title: "Organic Supplies", desc: "Premium vermicompost, neem cake, cocopeat, and gardening tools available in-store." },
                { title: "Garden Workshops", desc: "Learn gardening basics, composting, and plant care through our seasonal hands-on workshops." },
              ].map((addon, i) => (
                <div key={i} className="border border-outline-variant p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors bg-surface-container">
                  <h3 className="font-black uppercase tracking-wider text-sm">{addon.title}</h3>
                  <p className="text-sm text-on-surface-variant flex-grow leading-relaxed">{addon.desc}</p>
                  <button onClick={() => handleWhatsApp(addon.title)} className="text-primary text-xs font-black uppercase tracking-widest hover:text-tertiary-fixed-dim text-left mt-4 transition-colors">
                    Enquire on WhatsApp →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Closing CTA - Lead Capture */}
        <section className="bg-primary py-24 px-6 sm:px-12 md:px-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/garden-landscape.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="max-w-3xl mx-auto bg-surface p-8 sm:p-12 md:p-16 border-t-4 border-tertiary-fixed-dim shadow-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black uppercase tracking-tight mb-10 text-center">Start Your Project</h2>
            
            <div className="mb-10">
              <label className="block text-xs font-black uppercase tracking-widest mb-5 text-outline">What are you looking for?</label>
              <div className="flex flex-wrap gap-3">
                {["Terrace Garden", "Garden Design", "Maintenance", "Corporate"].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSelectedService(s)}
                    className={`px-6 py-3 border text-xs font-black uppercase tracking-wider transition-all ${selectedService === s ? 'bg-primary text-white border-primary shadow-md' : 'bg-surface border-outline-variant text-on-surface hover:border-primary hover:text-primary'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <label className="block text-xs font-black uppercase tracking-widest mb-5 text-outline">Approximate area?</label>
              <div className="flex flex-wrap gap-3">
                {["Under 200 sq ft", "200–500 sq ft", "500+ sq ft"].map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSelectedSize(s)}
                    className={`px-6 py-3 border text-xs font-black uppercase tracking-wider transition-all ${selectedSize === s ? 'bg-primary text-white border-primary shadow-md' : 'bg-surface border-outline-variant text-on-surface hover:border-primary hover:text-primary'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handleWhatsApp()} 
              className="w-full bg-primary text-on-primary font-black uppercase py-6 text-sm tracking-widest hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Send Enquiry on WhatsApp <span className="material-symbols-outlined">send</span>
            </button>
            <p className="text-xs text-on-surface-variant mt-6 text-center font-medium">
              We respond within 2 hours. <span className="text-primary font-bold">Free site visit</span> for all new projects.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

