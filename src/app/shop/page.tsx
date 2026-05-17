import Image from "next/image";
import Link from "next/link";

const plants = [
  {
    id: "money-plant-golden",
    name: "Money Plant (Golden)",
    careList: ["🌤 Low Light", "💧 Easy Care", "🌿 Indoor"],
    price: "₹149",
    tag: "Best Seller",
    img: "/images/string-of-pearls.png",
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    careList: ["🌤 Bright Indirect", "💧 Medium", "🌿 Statement"],
    price: "₹599",
    img: "/images/monstera.png",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    careList: ["☀️ Bright Light", "💧 Expert", "🌿 Statement"],
    price: "₹799",
    tag: "Premium",
    img: "/images/fiddle-leaf-fig.png",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    careList: ["🌤 Low Light", "💧 Easy Care", "🌿 Air Purifier"],
    price: "₹249",
    tag: "Popular",
    img: "/images/monstera.png",
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    careList: ["☀️ Bright", "💧 Medium", "🌿 Outdoor"],
    price: "₹399",
    img: "/images/fiddle-leaf-fig.png",
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    careList: ["☀️ Bright Light", "💧 Easy Care", "🌿 Succulent"],
    price: "₹199",
    img: "/images/string-of-pearls.png",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    careList: ["🌤 Low Light", "💧 Medium", "🌺 Flowering"],
    price: "₹349",
    img: "/images/monstera.png",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    careList: ["☀️ Full Sun", "💧 Easy Care", "🌺 Flowering"],
    price: "₹199",
    tag: "Seasonal",
    img: "/images/garden-landscape.png",
  },
  {
    id: "hibiscus",
    name: "Hibiscus (Red)",
    careList: ["☀️ Full Sun", "💧 Medium", "🌺 Flowering"],
    price: "₹179",
    img: "/images/garden-landscape.png",
  },
  {
    id: "tulsi-holy-basil",
    name: "Tulsi (Holy Basil)",
    careList: ["☀️ Full Sun", "💧 Medium", "🌿 Medicinal"],
    price: "₹99",
    tag: "Essential",
    img: "/images/premium-compost.png",
  },
];

export default function Shop({ searchParams }: { searchParams?: { q?: string } }) {
  const query = searchParams?.q?.trim() || "";
  const queryLower = query.toLowerCase();

  const filteredPlants = queryLower
    ? plants.filter(
        (plant) =>
          plant.name.toLowerCase().includes(queryLower) ||
          plant.careList.some(care => care.toLowerCase().includes(queryLower))
      )
    : plants;

  return (
    <div className="bg-surface text-on-surface font-body pt-28 pb-24 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Page Header & Filter Bar (Sticky) */}
        <div className="sticky top-20 z-40 bg-surface pb-4 pt-4 border-b border-outline-variant/20 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
             <h1 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center">
               Our Collection <span className="text-outline mx-3">·</span> {filteredPlants.length} plants
             </h1>
             <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-auto flex-1">
                  <select className="w-full md:w-auto appearance-none bg-surface-container border border-outline-variant/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-3 pr-10 rounded-none focus:outline-none focus:border-primary cursor-pointer transition-colors hover:bg-surface-container-high">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Popular First</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sm text-outline">expand_more</span>
                </div>
                <button className="md:hidden bg-surface-container border border-outline-variant/30 px-4 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">tune</span> Filter
                </button>
             </div>
          </div>
          
          {/* Mobile horizontal tabs */}
          <div className="flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-none -mx-6 px-6">
            {["All", "Indoor", "Outdoor", "Flowering", "Medicinal"].map((f, i) => (
              <button key={f} className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap flex-shrink-0 rounded-full transition-colors border ${i === 0 ? "bg-primary text-white border-primary" : "bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-12 items-start">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden md:block w-56 flex-shrink-0 sticky top-48 space-y-10">
            <div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 text-primary border-b border-outline-variant/20 pb-3">Category</h3>
               <div className="space-y-4 text-sm text-on-surface-variant font-medium">
                 {["All Plants", "Indoor Plants", "Outdoor Plants", "Flowering", "Medicinal"].map(c => (
                   <label key={c} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${c === "All Plants" ? "bg-primary border-primary" : "border-outline-variant group-hover:border-primary"}`}>
                       {c === "All Plants" && <span className="material-symbols-outlined text-[12px] text-white font-bold">check</span>}
                     </div>
                     <span className="group-hover:text-primary transition-colors text-xs uppercase tracking-wider">{c}</span>
                   </label>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 text-primary border-b border-outline-variant/20 pb-3">Light Requirement</h3>
               <div className="space-y-4 text-sm text-on-surface-variant font-medium">
                 {["Low Light", "Bright Indirect", "Full Sun"].map(c => (
                   <label key={c} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 border border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors" />
                     <span className="group-hover:text-primary transition-colors text-xs uppercase tracking-wider">{c}</span>
                   </label>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 text-primary border-b border-outline-variant/20 pb-3">Care Level</h3>
               <div className="space-y-4 text-sm text-on-surface-variant font-medium">
                 {["Easy", "Medium", "Expert"].map(c => (
                   <label key={c} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 border border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors" />
                     <span className="group-hover:text-primary transition-colors text-xs uppercase tracking-wider">{c}</span>
                   </label>
                 ))}
               </div>
            </div>
            
            <div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-5 text-primary border-b border-outline-variant/20 pb-3">Price Range</h3>
               <input type="range" min="0" max="2000" className="w-full accent-primary" />
               <div className="flex justify-between text-[10px] font-bold text-outline uppercase tracking-widest mt-2">
                 <span>₹0</span>
                 <span>₹2000+</span>
               </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            {filteredPlants.length === 0 ? (
              <div className="py-24 text-center max-w-md mx-auto">
                <span className="material-symbols-outlined text-5xl text-outline mb-4 opacity-40">search_off</span>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight text-primary">No Plants Found</h3>
                <p className="text-sm text-outline mt-2 leading-relaxed">
                  We couldn&apos;t find any plants matching &ldquo;{query}&rdquo;. Double check the spelling or adjust your filters.
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-block bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all"
                >
                  Clear Search
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-8">
                {filteredPlants.map((plant) => (
                  <div key={plant.id} className="group flex flex-col h-full relative">
                    <Link href={`/shop/${plant.id}`} className="block relative aspect-[3/4] bg-surface-container-low overflow-hidden mb-4">
                      <Image 
                        src={plant.img} 
                        alt={plant.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      {plant.tag && (
                        <div className="absolute top-3 left-3 bg-tertiary-fixed-dim text-on-tertiary-fixed px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-sm">
                          {plant.tag}
                        </div>
                      )}
                      
                      {/* Desktop Hover Add Button */}
                      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden md:block z-10">
                         <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#113a20] transition-colors pointer-events-auto">
                           Add to Cart
                         </button>
                      </div>
                    </Link>

                    <Link href={`/shop/${plant.id}`} className="flex flex-col flex-grow cursor-pointer">
                      {/* Care Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {plant.careList.map((care, i) => (
                          <span key={i} className="bg-surface-container-high px-2 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold text-on-surface-variant whitespace-nowrap">
                            {care}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="font-headline font-bold text-sm sm:text-base text-primary uppercase tracking-tight mb-1">{plant.name}</h3>
                      <div className="font-headline font-black text-primary mt-auto">{plant.price}</div>
                    </Link>

                    {/* Mobile Always-Visible Add Button */}
                    <button className="md:hidden mt-4 w-full border border-primary text-primary py-3 text-[10px] font-bold uppercase tracking-widest active:bg-primary active:text-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
