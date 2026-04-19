import Image from "next/image";
import Link from "next/link";

const plants = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    type: "Direct Sun • Low Maintenance",
    price: "$45.00",
    tag: "New Arrival",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi3pVsJssv067ieeW1_-96DJIZitBuwiXzXegZsgJlnvZrMMJbQNoGRq5ctmoVyFT1m6jTuXeIZclg5Pb0kXbedeBjQX0-auofJTx-j0qMm2FPk5fuEIrnFa0HpG4BAa6nlZjGnD_vB7aCAZQ87Hm48rTSRPVQFde9zPRKwOHNxYqf4bAVAe3D-sYlQFPOkPihm0IKKKGezZCAxXYx6I5o-mo6MloddoTKJoLxYvN7Z88sW-LCXwN66PeZDh4wUJ-HZuJ4HXpbCKA",
  },
  {
    id: "sansevieria",
    name: "Sansevieria",
    type: "Low Light • Beginner Friendly",
    price: "$32.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtoos49rvUXYS-9GFiNhIJ4Qe34Kyz_rpvo2WeAarCMxXb3BfJvu7sOsG10N9hGGCo6jHo0MgNUsK2jd-IXEtam9it0EINYZ77PQWAgYU8LdsllGPGDSGaGsRyNeMTo1gASAQr8UxlQJmg-USitGrqUB_rNqAMiQiX4--pqgYn4nL0N2OurbrchvyUqiSekFUdVJimENS_MFtlXzzN6lZva7sSpsXY4QAEHbw7xBCusimHpW5O0UQq8poiJuJ0KhwNdfSGMVGyHI",
  },
  {
    id: "string-of-pearls",
    name: "String of Pearls",
    type: "Bright Indirect • Trailing",
    price: "$28.00",
    tag: "Limited",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzlz8EYhaSSGLUHx2RvJUUbGyYsZ6LO-b7UcjInrYbePIyJhXFsvKwE2y2HAzasnWbfAQV57HDMP_oD13s_6dCJberi-k6jXvvuSpG_eKJ_ikXL3pHyEaseYEx0Ncj_2paRhA6P9LXrmcrV2usTNC1VxyWSeM9ImQYc6ZXJXom-FVs_w8XDw_YImK0go01ZXuPtfg7diyRPp2PbSci-tTpfMzjmCN7sXBFs7udT2wPuILH3877LJvGUsU-3ou07xkUPxpVr036itQ",
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    type: "Direct Sun • Statement Tree",
    price: "$120.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqES5326s9iBrihxONj6ka5roZ8vpu0SNu4eu7JDakv1iNRkwMqAz5z8jQviAQZrQ93D2rTW3OSZGj0hFZz7DYTVz7krwok1gLJ97tghuPHwXSXC2qq98wo13IGqP7ta8K42AdBqF2DyAqEGvqt2v_bZAeCWeAVxMzWHayygQFKmdPpfWCNrSdxkpUb4SjGy2Fjj-xTaRqMF5gGqSkAMSah-1YtT3IZcUrHg8MsVEhuCTFmeJB6NRt_gy2XlEfLcMoNEH8beaeFmA",
  },
  {
    id: "european-olive",
    name: "European Olive",
    type: "Full Sun • Drought Tolerant",
    price: "$65.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMpxtqs2CjnTsidGomHfgh08RAEXnjKE3wdutof-Dv_KObOuIltk0QU1BgSqzBv0FZP2xiPu-W8Fo7I9c-x6IrA9uFZayvshMh2FUmwu5rgP7y9xVprQYdbPZhnTYaOPCZnwy6Z2J1V7M48SqNwW4HyIRuZZoa-IZpxWmBUJyYtrmEFuH17XCMUON3f_wJh6SvUcJZv2zEiF13D9Ebx9RJgG-_gtxtPnQ3dvezqXljCT8kYrwpDK2W7_hVojs74XZvTuHAHK9GuNw",
  },
  {
    id: "calathea-orbifolia",
    name: "Calathea Orbifolia",
    type: "Partial Shade • Humid Lover",
    price: "$38.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXaKuvtMq1Og-M47flmW_H4Kq7kvW4uQDK5CMFmojRF1Wte9rfSNiWZZq2ffAuLMOYYagkHGd7d3ql6jErgM4Kc0ral73n-Yxjtyas2rbVhYczN1aYeJ9W3f0JyHOq35_E6ieYNJ2RX_gzGyulYhDah1sQqTVOmGJLi1oRGyTEp1Ps_8zIYoOfY3ZRyReM55swPosEO1UlqP88K7ST6Co-EcdvJ_t5OwYOZ7lyDrgLNlyuXLS4KtH7ealuf7lXVrB7jSW00_z5OM",
  },
];

export default function Shop() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-tertiary-fixed-dim selection:text-tertiary">
      <main className="min-h-screen pt-20">
        {/* Hero / Catalog Header */}
        <section className="px-6 md:px-12 py-12 md:py-20 bg-surface">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter leading-[0.9] text-primary uppercase">
                The Living<br />Collection
              </h1>
              <p className="mt-6 text-on-surface-variant font-medium text-lg leading-relaxed max-w-md">
                Architectural greenery cultivated for the modern habitat. Earth-grown, sustainably shipped, built to last.
              </p>
            </div>
            <div className="flex items-center gap-2 font-label text-xs tracking-widest uppercase text-outline">
              <span>Scroll to Explore</span>
              <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-surface-container sticky top-20 z-40 border-y border-outline-variant/10">
          <div className="px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Plant Type <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary hover:text-white transition-none">
                Light Requirement <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary hover:text-white transition-none">
                Price Range <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-outline">
              <span>Showing {plants.length} Plants</span>
              <div className="h-4 w-px bg-outline-variant"></div>
              <button className="text-primary flex items-center gap-1">Sort: Default <span className="material-symbols-outlined text-sm">sort</span></button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {plants.map((plant) => (
              <div key={plant.id} className="group">
                <Link href={`/shop/${plant.id}`}>
                  <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer">
                    <Image 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                      src={plant.img}
                      alt={plant.name}
                      fill
                    />
                    {plant.tag && (
                      <div className="absolute top-4 left-4 bg-tertiary-fixed-dim text-tertiary px-3 py-1 text-[10px] font-black uppercase tracking-tighter">
                        {plant.tag}
                      </div>
                    )}
                    {/* Dither pattern overlay simulation */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACdJREFUGFdjZEADjIwn/zMw/GfADRgZGUHCHxkYGBj+M+AGjCDOEAAnSwwL66S/1gAAAABJRU5ErkJggg==')]"></div>
                  </div>
                </Link>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-headline font-extrabold text-xl uppercase tracking-tight text-primary">
                      <Link href={`/shop/${plant.id}`}>{plant.name}</Link>
                    </h3>
                    <p className="font-label text-xs uppercase tracking-widest text-outline mt-1">{plant.type}</p>
                  </div>
                  <span className="font-headline font-bold text-lg">{plant.price}</span>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-surface-tint transition-none">
                  <span className="material-symbols-outlined text-sm">shopping_cart</span> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination / Load More */}
        <section className="px-6 md:px-12 py-20 flex justify-center">
          <button className="border-2 border-primary text-primary px-12 py-5 font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-none">
            Load More Archives
          </button>
        </section>

        {/* Sustainability Callout */}
        <section className="bg-surface-container-high mx-6 md:mx-12 py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-md">
            <h2 className="font-headline font-extrabold text-3xl uppercase tracking-tighter leading-none text-primary">Sustainable Browsing</h2>
            <p className="mt-4 text-sm text-on-surface-variant font-medium">Our low-fi, dithered imaging reduces data consumption by 40%. Cultivating the planet while we cultivate your home.</p>
          </div>
          <div className="text-primary flex items-center gap-4">
            <div className="h-px w-24 bg-primary hidden md:block"></div>
            <span className="font-label font-bold text-[10px] tracking-widest uppercase">Certified B Corp 2024</span>
          </div>
        </section>
      </main>
    </div>
  );
}
