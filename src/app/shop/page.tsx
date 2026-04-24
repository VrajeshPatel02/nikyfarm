import Image from "next/image";
import Link from "next/link";

const plants = [
  {
    id: "money-plant-golden",
    name: "Money Plant (Golden)",
    type: "Indoor • Low Light • Easy Care",
    price: "₹149",
    tag: "Best Seller",
    img: "/images/string-of-pearls.png",
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    type: "Indoor • Bright Indirect • Statement",
    price: "₹599",
    img: "/images/monstera.png",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    type: "Indoor • Bright Light • Statement",
    price: "₹799",
    tag: "Premium",
    img: "/images/fiddle-leaf-fig.png",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    type: "Indoor • Low Light • Air Purifier",
    price: "₹249",
    tag: "Popular",
    img: "/images/monstera.png",
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    type: "Indoor/Outdoor • Bright • Air Purifier",
    price: "₹399",
    img: "/images/fiddle-leaf-fig.png",
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    type: "Indoor • Bright Light • Succulent",
    price: "₹199",
    img: "/images/string-of-pearls.png",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    type: "Indoor • Low Light • Flowering",
    price: "₹349",
    img: "/images/monstera.png",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    type: "Outdoor • Full Sun • Flowering",
    price: "₹199",
    tag: "Seasonal",
    img: "/images/garden-landscape.png",
  },
  {
    id: "hibiscus",
    name: "Hibiscus (Red)",
    type: "Outdoor • Full Sun • Flowering",
    price: "₹179",
    img: "/images/garden-landscape.png",
  },
  {
    id: "tulsi-holy-basil",
    name: "Tulsi (Holy Basil)",
    type: "Outdoor • Full Sun • Medicinal",
    price: "₹99",
    tag: "Essential",
    img: "/images/premium-compost.png",
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    type: "Indoor/Outdoor • Bright • Medicinal",
    price: "₹149",
    img: "/images/string-of-pearls.png",
  },
  {
    id: "premium-compost",
    name: "Premium Organic Compost",
    type: "5kg Bag • Vermicompost",
    price: "₹299",
    tag: "Supply",
    img: "/images/premium-compost.png",
  },
];

export default function Shop() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed-dim selection:text-tertiary">
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[55vh] flex items-center px-6 md:px-12 overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image src="/images/nursery-grounds.png" alt="Niky Farm plant collection" fill className="object-cover brightness-[0.3]" priority />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </div>
          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">Shop Online</span>
              <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter leading-[0.9] text-white uppercase">
                Our Plant<br /><span className="text-tertiary-fixed-dim">Collection</span>
              </h1>
              <p className="mt-6 text-white/70 font-medium text-base leading-relaxed max-w-md">
                Browse our handpicked selection of indoor plants, outdoor favourites, flowering beauties, and gardening supplies.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-tertiary-fixed-dim font-bold">
              <span>Scroll to Browse</span>
              <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-surface-container sticky top-20 z-40 border-y border-outline-variant/10">
          <div className="px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {["All Plants", "Indoor", "Outdoor", "Flowering", "Medicinal", "Supplies"].map((f, i) => (
                <button key={f} className={`px-5 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-none ${i === 0 ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant hover:bg-primary hover:text-white"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-outline">
              <span>Showing {plants.length} Items</span>
              <div className="h-4 w-px bg-outline-variant" />
              <button className="text-primary flex items-center gap-1">Sort: Price ↑ <span className="material-symbols-outlined text-sm">sort</span></button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {plants.map((plant) => (
              <div key={plant.id} className="group">
                <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer">
                  <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={plant.img} alt={plant.name} fill />
                  {plant.tag && (
                    <div className="absolute top-3 left-3 bg-tertiary-fixed-dim text-on-tertiary-fixed px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                      {plant.tag}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-headline font-bold text-base uppercase tracking-tight text-primary">{plant.name}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-outline mt-1">{plant.type}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-headline font-black text-xl text-primary">{plant.price}</span>
                    <button className="bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More */}
        <section className="px-6 md:px-12 py-12 flex justify-center">
          <button className="border-2 border-primary text-primary px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all">
            Load More Plants
          </button>
        </section>

        {/* Garden Supplies Banner */}
        <section className="bg-surface-container-high mx-6 md:mx-12 py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-outline-variant/20">
          <div className="max-w-md">
            <h2 className="font-headline font-black text-2xl uppercase tracking-tighter text-primary mb-3">Need Gardening Supplies?</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We stock organic compost, cocopeat, neem cake, perlite, garden tools, pots, and planters. Visit our nursery for the full range.
            </p>
          </div>
          <Link href="/contact" className="bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all flex items-center gap-3 flex-shrink-0">
            Visit Store
            <span className="material-symbols-outlined text-sm">storefront</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
