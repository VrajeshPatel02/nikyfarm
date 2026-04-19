import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Mock data for the refined product detail
  const product = {
    id: "keystone-oak",
    scientificName: "Quercus Prinus",
    name: "Keystone Oak Sapling",
    price: "$124.00",
    status: "In Stock",
    batch: "Batch No. 044-KNY",
    soil: "Grown in Sustainable Soil Matrix",
    mainImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_7tjGXludigoci0d9fsQLQmXVK2vILf7FYcsAPMp0dm4iCMn2HC3FL1d-MugDCZZ-OmSHnD5KM93-5F_DS4TTa1btW-Dq5QbpbStA6hBTluWGlcD-w9x2dgclh2yaJ6cNZ_LDbtwlpA4TdW9G8OYnU0-mfJCzJl6bssF5KXBQnLNbAZ0xblNa555UFqvO4OMeN9dPDacom0jiEERS-PLnuld2HBE5ebvxXgXKgqMG9pfbEams1dXHPDa8sCOIRL-GgW2bIUx7t8",
    specs: [
      { label: "Growth Height", value: "60-80 ft", icon: "height" },
      { label: "Sun Exposure", value: "Full Sun", icon: "wb_sunny" },
      { label: "Hardiness Zone", value: "4 - 9", icon: "landscape" },
      { label: "Soil Moisture", value: "Well Drained", icon: "water_drop" },
    ],
    pairings: [
      {
        name: "Mycorrhizal Inoculant",
        category: "Root Health",
        price: "$22.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXgwDjIuSBuu3GqDa5QU086SygR7uYbutqXOI0PAda_hwn3LivJ3OEGQy5qH8nkC5xv53Dg6HeIVSUEYzL8LzpVh92kMPELa3f94O0xYY3SIhflDXLMAjfCLYmRCEJ5H38XbLSHtrogq5hApcZqPwABg9BdZHUxe6cUNfGJxGKQ5ypNCYzAQ37qstwErMNPK5kuuXPJWdLSDOSvuIGO7YPwiEV3KWCbJid1Kqv7HAHfBO3ahqiQswl5URHvRJOByG6A5yg8dG9IM"
      },
      {
        name: "Forged Steel Trowel",
        category: "Essential Tool",
        price: "$48.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNCwFSSVDKUG7IzAXzYhrmw_8psIpSJxaqIz8bIJGU2XWVe8g-rsleNJmEEe7NkQdy01oKpQtlR5GvZmmL6Jghc4GEn-d0v-5U5Bt2hc-zn0M-SnC_2uRzg83ni6qtDg8YfgyEvU9oj6_SzpTUQD2OgAjLM7dFAyJSeajQuXPgMFFNi9L9CP-79hBFEyYjzb9UQkNBcPcJ7YuK2-t7z0jkUH8Snj1PfoasPr_I-HLNNhnBH5xCzPRrYwRk9Q0KhVkLOrQD5XPe1rw"
      }
    ]
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed-dim selection:text-tertiary pt-20">
      <main className="min-h-screen">
        {/* Breadcrumb / Back button */}
        <div className="px-6 md:px-12 py-4 bg-surface border-b border-outline-variant/10">
          <Link href="/shop" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Collection
          </Link>
        </div>

        {/* Hero & Purchasing Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden border-b border-outline-variant/10">
          {/* Product Imagery */}
          <div className="md:col-span-7 bg-surface-container relative h-[600px] md:h-[800px]">
            <Image 
              src={product.mainImg} 
              alt={product.name}
              fill
              className="object-cover grayscale brightness-110"
            />
            <div className="absolute bottom-12 left-12 max-w-sm hidden md:block">
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest bg-surface/90 backdrop-blur-md p-6 border-l-4 border-primary">
                {product.batch} <br />
                {product.soil}
              </p>
            </div>
          </div>

          {/* Transaction Column */}
          <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center bg-surface border-l border-outline-variant/10">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-on-surface-variant font-label text-xs uppercase tracking-[0.4em] font-bold">{product.scientificName}</h2>
                <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none text-primary italic">
                  {product.name}
                </h1>
              </div>

              <div className="bg-surface-container p-8 space-y-10 border-l-4 border-primary shadow-2xl">
                <div className="flex justify-between items-end border-b border-outline-variant/20 pb-8">
                  <div>
                    <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Standard Price</span>
                    <span className="text-5xl font-headline font-black text-primary tracking-tighter">{product.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-surface bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">{product.status}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="block font-label text-[10px] uppercase tracking-[0.3em] font-black text-on-surface-variant">Quantity Selection</label>
                  <div className="flex items-center space-x-6">
                    <button className="w-14 h-14 flex items-center justify-center border-2 border-primary hover:bg-primary hover:text-surface transition-none">
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="text-3xl font-black px-4 font-headline">01</span>
                    <button className="w-14 h-14 flex items-center justify-center border-2 border-primary hover:bg-primary hover:text-surface transition-none">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <button className="w-full bg-primary text-on-primary py-6 text-xl font-headline font-black uppercase tracking-tighter hover:bg-surface-dim hover:text-primary transition-none flex justify-between px-8 items-center group">
                    <span>Add to Bag</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </button>
                  
                  <div className="flex gap-4 items-start p-4 bg-primary/5">
                    <span className="material-symbols-outlined text-primary font-variation-settings-fill">local_shipping</span>
                    <div>
                      <p className="font-black text-[10px] uppercase tracking-widest">Priority Agricultural Shipping</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Climate-controlled delivery. Est: 3-5 business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Dossier */}
        <section className="bg-primary text-on-primary p-12 md:p-24 uppercase">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-16 border-b-4 border-primary-container pb-8 italic">Technical Dossier</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-primary-container border-px border-primary-container">
              {product.specs.map((spec, i) => (
                <div key={i} className="bg-primary p-10 md:p-12 aspect-square flex flex-col justify-between hover:bg-primary-container transition-colors duration-500 cursor-default group">
                  <span className="material-symbols-outlined text-5xl text-on-primary-container group-hover:scale-110 transition-transform">{spec.icon}</span>
                  <div>
                    <p className="text-[10px] font-label uppercase tracking-[0.3em] text-on-primary-container mb-3 font-bold">{spec.label}</p>
                    <p className="text-3xl lg:text-4xl font-headline font-black tracking-tighter">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Care Instructions & Cross-sell */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-outline-variant/10">
          {/* Care Accordion */}
          <div className="p-12 md:p-24 bg-surface-container border-r border-outline-variant/10">
            <h3 className="text-4xl font-headline font-black uppercase tracking-tighter mb-16 italic">Care Instructions</h3>
            <div className="space-y-px bg-outline-variant/20 border border-outline-variant/20">
              <details className="group bg-surface" open>
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-black uppercase tracking-[0.2em] text-xs">
                  Phase I: Acclimation
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-8 pb-10 text-on-surface-variant leading-relaxed text-sm font-light uppercase tracking-widest">
                  Upon arrival, keep the sapling in a shaded area for 48 hours. Ensure the soil remains moist but not saturated. This prevents transplant shock from climate transition.
                </div>
              </details>
              <details className="group bg-surface">
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-black uppercase tracking-[0.2em] text-xs">
                  Phase II: Planting Strategy
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-8 pb-10 text-on-surface-variant leading-relaxed text-sm font-light uppercase tracking-widest">
                  Dig a hole twice as wide as the root ball. Position the sapling so the root flare is level with the soil surface. Tamp soil down firmly to remove air pockets.
                </div>
              </details>
              <details className="group bg-surface">
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none font-black uppercase tracking-[0.2em] text-xs">
                  Phase III: Long-term Maintenance
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-8 pb-10 text-on-surface-variant leading-relaxed text-sm font-light uppercase tracking-widest">
                  Water deeply once a week during the first two growing seasons. Apply 2-3 inches of organic mulch around the base, keeping it away from the trunk.
                </div>
              </details>
            </div>
          </div>

          {/* Perfect Pairings */}
          <div className="p-12 md:p-24 bg-surface flex flex-col uppercase">
            <h3 className="text-4xl font-headline font-black uppercase tracking-tighter mb-16 italic">Perfect Pairings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
              {product.pairings.map((pair, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-surface-container overflow-hidden mb-8 border border-outline-variant/10">
                    <Image 
                      src={pair.img} 
                      alt={pair.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                  </div>
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-2">{pair.category}</p>
                  <h4 className="font-headline font-black text-2xl uppercase mb-3 tracking-tighter">{pair.name}</h4>
                  <p className="text-lg font-black text-primary">{pair.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
