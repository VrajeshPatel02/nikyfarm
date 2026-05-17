import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Mock data for the redesigned product detail
  const product = {
    id: "money-plant-golden",
    name: "Money Plant (Golden)",
    category: "Indoor Plants",
    price: "₹149",
    status: "In Stock",
    valueProp: "Hand-grown at our Valsad nursery. Ready to pot.",
    mainImg: "/images/string-of-pearls.png",
    thumbnails: [
      "/images/string-of-pearls.png",
      "/images/monstera.png",
      "/images/fiddle-leaf-fig.png",
    ],
    careBadges: ["🌤 Low Light", "💧 Easy Care", "🌿 Indoor"],
    quickFacts: [
      { label: "Type", value: "Indoor Plant", icon: "potted_plant" },
      { label: "Light", value: "Bright Indirect", icon: "light_mode" },
      { label: "Water", value: "Once a week", icon: "water_drop" },
      { label: "Size", value: "Medium (2-3 ft)", icon: "straighten" },
      { label: "Care Level", value: "Easy", icon: "sentiment_satisfied" },
    ],
    youMayAlsoLike: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: "₹249",
        img: "/images/monstera.png",
        careList: ["🌤 Low Light", "💧 Easy Care", "🌿 Air Purifier"]
      },
      {
        id: "jade-plant",
        name: "Jade Plant",
        price: "₹199",
        img: "/images/string-of-pearls.png",
        careList: ["☀️ Bright Light", "💧 Easy Care", "🌿 Succulent"]
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: "₹349",
        img: "/images/fiddle-leaf-fig.png",
        careList: ["🌤 Low Light", "💧 Medium", "🌺 Flowering"]
      }
    ]
  };

  const whatsappMessage = `Hi, I'd like to order ${product.name} from Niky Farm`;

  return (
    <div className="bg-surface text-on-surface font-body pt-24 pb-24 md:pb-0 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pt-8">
        
        {/* Desktop Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-24">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-4">
             {/* Main Image */}
             <div className="relative aspect-[3/4] md:aspect-[4/5] bg-surface-container-low w-full overflow-hidden">
               <Image src={product.mainImg} alt={product.name} fill className="object-cover" priority />
             </div>
             {/* Thumbnail Row */}
             <div className="grid grid-cols-4 gap-4">
               {product.thumbnails.map((thumb, idx) => (
                 <div key={idx} className={`relative aspect-square bg-surface-container-low cursor-pointer overflow-hidden border-2 transition-colors ${idx === 0 ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}>
                   <Image src={thumb} alt={`${product.name} thumbnail ${idx + 1}`} fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
               ))}
             </div>
          </div>

          {/* Right Column: Product Details & Purchase Block */}
          <div className="flex flex-col">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-outline mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">{product.category}</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface-variant truncate">{product.name}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter text-primary mb-4">
              {product.name}
            </h1>
            
            <div className="text-3xl font-headline font-black text-primary mb-6">
              {product.price}
            </div>

            {/* Care Badges */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-outline-variant/20 pb-8">
              {product.careBadges.map((badge, i) => (
                <span key={i} className="bg-surface-container-high px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-on-surface-variant whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-sm text-on-surface-variant font-medium mb-8">
              {product.valueProp}
            </p>

            {/* Purchase Controls */}
            <div className="space-y-6 bg-surface-container p-6 sm:p-8 border border-outline-variant/10">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3">Quantity</label>
                  <div className="flex items-center h-14 border border-outline-variant/40 bg-surface">
                    <button className="w-12 h-full flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-lg">remove</span>
                    </button>
                    <span className="w-12 text-center text-sm font-bold">1</span>
                    <button className="w-12 h-full flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  <button className="w-full h-14 bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-tertiary-fixed-dim transition-colors flex justify-center items-center gap-2">
                    Add to Cart
                  </button>
                </div>
              </div>

              <a 
                href={`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 border-2 border-[#25D366] text-[#25D366] text-xs font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-colors flex justify-center items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                Order on WhatsApp
              </a>

              <div className="pt-2 text-center flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                <span className="text-base">🚚</span> Free delivery in Valsad above ₹499
              </div>
            </div>

          </div>
        </div>

        {/* Quick Facts */}
        <section className="mb-24">
          <h3 className="text-2xl font-headline font-black uppercase tracking-tighter mb-8 text-primary border-b border-outline-variant/20 pb-4">Quick Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {product.quickFacts.map((fact, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-surface-container-low border border-outline-variant/10">
                <span className="material-symbols-outlined text-3xl text-primary mb-3 opacity-80">{fact.icon}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant mb-1">{fact.label}</span>
                <span className="text-sm font-bold text-primary">{fact.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Care Guide Accordion */}
        <section className="mb-24 max-w-4xl">
          <h3 className="text-2xl font-headline font-black uppercase tracking-tighter mb-8 text-primary border-b border-outline-variant/20 pb-4">Care Guide</h3>
          <div className="space-y-px bg-outline-variant/20 border border-outline-variant/20">
            <details className="group bg-surface" open>
              <summary className="flex justify-between items-center p-6 sm:p-8 cursor-pointer list-none font-black uppercase tracking-[0.1em] text-sm">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">emoji_nature</span>
                  Getting Started
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 sm:px-8 pb-8 text-on-surface-variant leading-relaxed text-sm">
                Upon arrival, give your new plant a gentle drink of water and place it in a shaded spot for the first 48 hours. This gives it a chance to adjust to its new home environment comfortably without the stress of direct sunlight.
              </div>
            </details>
            <details className="group bg-surface">
              <summary className="flex justify-between items-center p-6 sm:p-8 cursor-pointer list-none font-black uppercase tracking-[0.1em] text-sm">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">potted_plant</span>
                  How to Plant
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 sm:px-8 pb-8 text-on-surface-variant leading-relaxed text-sm">
                If you are repotting, use a pot that is just 1-2 inches larger than the current nursery pot. Make sure the new pot has drainage holes. Use a well-draining potting mix to ensure the roots stay healthy and don&apos;t sit in water.
              </div>
            </details>
            <details className="group bg-surface">
              <summary className="flex justify-between items-center p-6 sm:p-8 cursor-pointer list-none font-black uppercase tracking-[0.1em] text-sm">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">health_and_safety</span>
                  Keeping it Healthy
                </div>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 sm:px-8 pb-8 text-on-surface-variant leading-relaxed text-sm">
                Always check the top inch of soil before watering — if it&apos;s dry, it&apos;s time for a drink. Wipe the leaves with a damp cloth every few weeks to remove dust and keep the plant breathing well and looking glossy.
              </div>
            </details>
          </div>
        </section>

        {/* You May Also Like */}
        <section className="mb-12">
          <h3 className="text-2xl font-headline font-black uppercase tracking-tighter mb-8 text-primary border-b border-outline-variant/20 pb-4">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 sm:gap-x-8">
            {product.youMayAlsoLike.map((plant) => (
              <div key={plant.id} className="group flex flex-col h-full relative">
                <Link href={`/shop/${plant.id}`} className="block relative aspect-[3/4] bg-surface-container-low overflow-hidden mb-4">
                  <Image 
                    src={plant.img} 
                    alt={plant.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  
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
        </section>

      </main>

      {/* Mobile Sticky Add to Cart Footer */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant/20 p-4 z-50 flex items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
         <div className="flex-col hidden sm:flex">
            <span className="font-headline font-bold text-sm truncate">{product.name}</span>
            <span className="font-bold text-primary text-sm">{product.price}</span>
         </div>
         <button className="flex-1 bg-primary text-white h-12 text-xs font-bold uppercase tracking-widest shadow-md active:bg-tertiary-fixed-dim transition-colors flex justify-center items-center">
            Add to Cart
         </button>
      </div>
    </div>
  );
}
