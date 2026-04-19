import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-tertiary-fixed-dim">
      <main className="pt-32 uppercase">
        {/* Hero Section */}
        <section className="px-12 py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-8">
                <span className="bg-tertiary-fixed-dim text-primary px-3 py-1 font-bold text-xs uppercase tracking-[0.2em] mb-8 inline-block">Our Offerings</span>
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-headline font-black uppercase tracking-tighter mb-12">
                  Cultivated<br />Systems.
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end pb-4">
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-8 border-l-4 border-primary pl-6 normal-case font-light">
                  Bridging the gap between architectural rigidity and biological fluidness. Our services provide functional, sustainable ecosystems for modern living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-surface-container py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {/* Service 01: Indoor Air Purifiers */}
            <div className="bg-surface p-12 flex flex-col justify-between min-h-[700px] border-b lg:border-b-0 lg:border-r border-outline-variant/20">
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-6xl font-headline font-black text-outline-variant/30 italic">01</span>
                  <span className="material-symbols-outlined text-4xl text-primary">filter_vintage</span>
                </div>
                <h2 className="text-4xl font-headline font-black uppercase tracking-tight mb-6">Indoor Air Purifiers</h2>
                <p className="text-on-surface-variant mb-12 leading-relaxed normal-case font-light">
                  Botanical integration for the built environment. High-oxygen output systems designed as permanent structural elements.
                </p>
                <ul className="space-y-4 mb-16">
                  <li className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest"><span className="w-2 h-2 bg-tertiary-fixed-dim"></span> NASA-Grade Species</li>
                  <li className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest"><span className="w-2 h-2 bg-tertiary-fixed-dim"></span> Hydro-Logic Feeding</li>
                  <li className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest"><span className="w-2 h-2 bg-tertiary-fixed-dim"></span> Integrated Lighting</li>
                </ul>
              </div>
              <div>
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-outline mb-1">Standard Unit</p>
                  <p className="text-3xl font-headline font-black">$1,200.00</p>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 font-black uppercase tracking-tighter hover:bg-tertiary-fixed-dim hover:text-primary transition-none">
                  Acquire System
                </button>
              </div>
            </div>

            {/* Service 02: Edible Container Kits */}
            <div className="bg-surface-container-high p-12 flex flex-col justify-between min-h-[700px] border-b lg:border-b-0 lg:border-r border-outline-variant/20">
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-6xl font-headline font-black text-outline-variant/30 italic">02</span>
                  <span className="material-symbols-outlined text-4xl text-primary">potted_plant</span>
                </div>
                <h2 className="text-4xl font-headline font-black uppercase tracking-tight mb-6">Edible Container Kits</h2>
                <p className="text-on-surface-variant mb-12 leading-relaxed normal-case font-light">
                  Modular agricultural systems for the urban enthusiast. Brutalist concrete vessels paired with nutrient-dense soil profiles.
                </p>
                <div className="mb-12 h-64 w-full bg-primary relative overflow-hidden group">
                  <Image 
                    alt="Modern concrete planters" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaOKQDP0znMWl9KcHMVK-Bt5390dF7gCKxg8vGslPh0Zb7rHdvfvatbHp_rFA6ftxsGP1iypmiAAMpuu97BYewOwV7NEpD71FjQf9lvyrpeWJDDVHwm30wUliy4EyUCkw60XxWbtkeCBwiykjJ8r-GVNC31BtIs597nLzk-ASOEbG52w6lutHhxnwwizg6DNpzjRcQS_3ZLkTlYTB6AAdoqhFYjYgyMcfU_BMkWFdc9WNIK4_JM6cyKXEzR61Ka90WoqQlTMe2RlE"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
              </div>
              <div>
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-outline mb-1">Modular Kit</p>
                  <p className="text-3xl font-headline font-black">$450.00</p>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 font-black uppercase tracking-tighter hover:bg-tertiary-fixed-dim hover:text-primary transition-none">
                  View Modules
                </button>
              </div>
            </div>

            {/* Service 03: Professional Landscapes */}
            <div className="bg-primary p-12 flex flex-col justify-between min-h-[700px] text-on-primary">
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-6xl font-headline font-black text-on-primary-container/20 italic">03</span>
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim">architecture</span>
                </div>
                <h2 className="text-4xl font-headline font-black uppercase tracking-tight mb-6">Landscape Services</h2>
                <p className="text-on-primary-container mb-12 leading-relaxed normal-case font-light">
                  Eco-brutalist master planning. We design landscapes that function as living monoliths—structured, raw, and self-sustaining.
                </p>
                <div className="space-y-6">
                  <div className="border-b border-on-primary-container/20 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-2">Phase 01</p>
                    <p className="font-bold normal-case">Site Analysis & Soil Mapping</p>
                  </div>
                  <div className="border-b border-on-primary-container/20 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-2">Phase 02</p>
                    <p className="font-bold normal-case">Brutalist Structural Design</p>
                  </div>
                  <div className="border-b border-on-primary-container/20 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-2">Phase 03</p>
                    <p className="font-bold normal-case">Biological Implementation</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <button className="w-full bg-surface text-primary py-5 font-black uppercase tracking-tighter hover:bg-tertiary-fixed-dim transition-none">
                  Request Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote/Callout Section */}
        <section className="bg-primary py-32 px-12 overflow-hidden relative">
          <div className="absolute right-[-10%] top-0 opacity-10 pointer-events-none">
            <span className="text-[25rem] font-headline font-black uppercase tracking-tighter text-on-primary">FERTILE</span>
          </div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-headline font-black text-on-primary uppercase tracking-tighter mb-12">
              WE DON'T JUST PLANT.<br />WE CONSTRUCT <span className="text-tertiary-fixed-dim">LIFE</span>.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="border-b-2 border-tertiary-fixed-dim text-tertiary-fixed-dim font-bold uppercase tracking-widest text-sm py-2 hover:bg-tertiary-fixed-dim hover:text-primary px-4 transition-none" href="#">Download Manifesto</a>
              <a className="border-b-2 border-tertiary-fixed-dim text-tertiary-fixed-dim font-bold uppercase tracking-widest text-sm py-2 hover:bg-tertiary-fixed-dim hover:text-primary px-4 transition-none" href="#">Our Process</a>
            </div>
          </div>
        </section>

        {/* Technical Specs / Bento Grid */}
        <section className="bg-surface-container py-24 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 bg-surface p-12">
                <h3 className="font-headline font-black text-2xl uppercase mb-6">Sustainable Ethics</h3>
                <p className="text-on-surface-variant leading-relaxed normal-case font-light">All Niky Farm materials are sourced within a 200-mile radius. We prioritize low-embodied carbon concrete and reclaimed local timber in all landscape constructions.</p>
              </div>
              <div className="bg-tertiary-fixed-dim p-12 flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-primary">eco</span>
              </div>
              <div className="bg-primary p-12 text-on-primary flex flex-col justify-center">
                <p className="text-4xl font-headline font-black">100%</p>
                <p className="text-xs uppercase tracking-[0.2em] text-on-primary-container">Organic Components</p>
              </div>
              <div className="bg-surface-container-highest p-12 md:col-span-1">
                <h4 className="font-bold uppercase text-xs mb-4">Support</h4>
                <p className="text-sm normal-case font-light">24/7 Biological monitoring available for commercial purifier installs.</p>
              </div>
              <div className="md:col-span-3 bg-surface overflow-hidden relative min-h-[300px]">
                <Image 
                  alt="Landscape design overhead" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWxphFC_0MZ6lhOXHe-pbLGli0WXUtRBugzP0UDdAt-AghmnwX0NEpDjleU5sSalkpFiyfGhG7xPbMKPB3_B4OXm7f4LoLidcyQI2LlGw0Nb8SiYzNLsVPdJHLDPpykIjxS2DlOZiUvGBk0OI8esDDYKETC1aHGZuJuXDGEG4-TYMszjqYXzBUlPZqsziQ4lXjMUhONBWE7J_S3wBAwlfa6xTPbMPKo7xVjuXD-Rh33oHd1h6lXit_hEzDvCnZ5FEU2wt-_8lf44k"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-end p-12">
                  <p className="text-surface font-headline font-black text-3xl uppercase">Master Planning v.24</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
