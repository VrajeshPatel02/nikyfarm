import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body">
      <main>
        {/* ═══════════════════════════════════════════
            HERO — WHO WE ARE
        ═══════════════════════════════════════════ */}
        <section className="relative h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nursery-grounds.png"
              alt="Niky Farm and Nursery — lush green nursery grounds"
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-bright via-transparent to-transparent opacity-30" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                About Niky Farm
              </span>
              <h1 className="font-headline font-black text-5xl md:text-[8rem] leading-[0.85] text-white tracking-tighter mb-8 uppercase">
                Our<br />
                <span className="text-tertiary-fixed-dim">Story.</span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
                A family-run plant nursery near Valsad, Gujarat — growing with love,
                rooted in passion, and dedicated to bringing nature closer to every home.
              </p>
            </div>
            <div className="hidden md:flex md:col-span-3 justify-end">
              <span className="[writing-mode:vertical-rl] [text-orientation:mixed] font-headline font-black text-7xl text-white/5 select-none tracking-widest uppercase">
                VALSAD
              </span>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 border-t-2 border-primary">
            <div className="p-8 bg-primary text-white border-r border-white/10">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">Our Mission</span>
              <p className="text-base font-light">
                To make quality plants accessible to every household and nurture a greener Gujarat, one garden at a time.
              </p>
            </div>
            <div className="p-8 bg-primary-container text-on-primary-container border-r border-white/10">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">Our Promise</span>
              <p className="text-base font-light">
                Every plant leaves our nursery healthy, well-rooted, and ready to thrive in your home or garden.
              </p>
            </div>
            <div className="p-8 bg-tertiary-container text-tertiary-fixed-dim">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">Our Values</span>
              <p className="text-base font-light">
                100% organic growing practices. No chemical fertilizers. Sustainable and earth-friendly from seed to sale.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            OUR JOURNEY
        ═══════════════════════════════════════════ */}
        <section className="bg-surface-container py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
                How It All Began
              </span>
              <h2 className="font-headline font-black text-4xl md:text-6xl text-primary uppercase tracking-tighter mb-4">
                Our Journey
              </h2>
              <div className="h-1 w-32 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-on-surface-variant">
                  Niky Farm &amp; Nursery started with a simple love for plants. What began as a small
                  collection of potted plants in our family backyard has grown into a full-fledged nursery
                  serving thousands of plant enthusiasts across Valsad and beyond.
                </p>
                <p className="text-base leading-relaxed text-on-surface-variant">
                  Over the years, we have carefully curated a collection of over 500 plant varieties —
                  from easy-care indoor favourites like Money Plants and Snake Plants, to rare exotic
                  specimens, flowering ornamentals, fruit trees, and everything in between.
                </p>
                <p className="text-base leading-relaxed text-on-surface-variant">
                  Today, we are proud to be known as one of the most trusted nurseries in the region,
                  not just for the quality of our plants, but for the genuine care and expert advice
                  we offer to every customer who walks through our gates.
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all"
                  >
                    Visit Our Nursery
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/hero-nursery.png"
                  alt="Inside Niky Farm — rows of healthy green plants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW WE GROW — PROCESS
        ═══════════════════════════════════════════ */}
        <section className="bg-background py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
                Our Process
              </span>
              <h2 className="font-headline font-black text-4xl md:text-6xl text-primary uppercase tracking-tighter mb-4">
                How We Grow
              </h2>
              <div className="h-1 w-32 bg-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  title: "Seed Selection",
                  desc: "We source the finest seeds and saplings from trusted growers across India, selecting only the healthiest specimens for our nursery.",
                  icon: "spa",
                },
                {
                  num: "02",
                  title: "Organic Nurturing",
                  desc: "Every plant is grown using organic compost, natural pest control, and sustainable practices — no chemical fertilizers, ever.",
                  icon: "eco",
                },
                {
                  num: "03",
                  title: "Expert Care",
                  desc: "Our experienced team monitors each plant daily — ensuring optimal watering, sunlight, and nutrition for healthy growth.",
                  icon: "water_drop",
                },
                {
                  num: "04",
                  title: "Ready for You",
                  desc: "When a plant is strong, well-rooted, and thriving, it's ready to find a new home — yours. We ensure safe packaging for every order.",
                  icon: "volunteer_activism",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-surface-container-lowest p-0 flex flex-col h-full border border-outline-variant/20"
                >
                  <div className="w-full h-48 bg-primary flex items-center justify-center p-12">
                    <span
                      className="material-symbols-outlined text-white text-7xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <div className="p-8">
                    <span className="font-headline font-bold text-4xl text-tertiary-fixed-dim block mb-2">
                      {step.num}
                    </span>
                    <h3 className="font-headline font-black text-xl mb-4 uppercase">{step.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY CHOOSE US
        ═══════════════════════════════════════════ */}
        <section className="bg-surface-container-high py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">
                The Niky Difference
              </span>
              <h2 className="font-headline font-black text-4xl md:text-6xl text-primary uppercase tracking-tighter">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "local_florist",
                  title: "Widest Selection",
                  desc: "Over 500 varieties of indoor, outdoor, flowering, medicinal, and exotic plants — all under one roof.",
                },
                {
                  icon: "verified",
                  title: "Quality Guaranteed",
                  desc: "Every plant is inspected before sale. We stand behind the health and quality of every plant that leaves our nursery.",
                },
                {
                  icon: "support_agent",
                  title: "Free Expert Advice",
                  desc: "Not sure which plant to choose? Our horticulturists provide free guidance on selection, placement, and ongoing care.",
                },
                {
                  icon: "compost",
                  title: "Organic Growing",
                  desc: "All our plants are grown using 100% organic methods — vermicompost, neem-based pest control, and natural fertilizers.",
                },
                {
                  icon: "local_shipping",
                  title: "Safe Delivery",
                  desc: "We carefully package every plant for safe transit. Doorstep delivery available across Valsad and surrounding areas.",
                },
                {
                  icon: "attach_money",
                  title: "Fair Pricing",
                  desc: "Direct from our nursery to you — no middlemen. Premium quality at honest, competitive prices for every budget.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-surface-bright border border-outline-variant/20 hover:border-primary/30 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-3xl text-primary mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <h4 className="text-sm font-black uppercase tracking-wider mb-3 font-headline">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            STATS BANNER
        ═══════════════════════════════════════════ */}
        <section className="bg-primary text-white py-20 px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Plant Varieties" },
              { value: "5000+", label: "Happy Customers" },
              { value: "100%", label: "Organic" },
              { value: "7 Days", label: "Open Weekly" },
            ].map((stat, i) => (
              <div key={i}>
                <span className="text-4xl md:text-5xl font-black font-headline block mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative py-24 px-8 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/garden-landscape.png"
              alt="Beautiful garden by Niky Farm"
              fill
              className="object-cover brightness-[0.2]"
            />
            <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              Come Visit <br />
              <span className="text-tertiary-fixed-dim">Our Nursery</span>
            </h2>
            <p className="text-white/60 text-base mb-10 max-w-lg mx-auto">
              Walk through our nursery, handpick your plants, and get expert advice from our team.
              We&apos;re open 7 days a week and always happy to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all flex items-center gap-4"
              >
                Get Directions
                <span className="material-symbols-outlined">location_on</span>
              </Link>
              <Link
                href="/shop"
                className="px-10 py-5 font-bold uppercase tracking-widest text-sm text-white border border-white/30 hover:bg-white hover:text-primary transition-all flex items-center gap-4"
              >
                Browse Plants
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
