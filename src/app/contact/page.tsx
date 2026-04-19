import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-tertiary-fixed-dim">
      <main className="min-h-screen">
        {/* Split Screen Hero / Content Section */}
        <section className="flex flex-col md:flex-row min-h-[calc(100vh-92px)] pt-24">
          {/* Left: Contact Information & Visual */}
          <div className="w-full md:w-5/12 bg-surface-container flex flex-col p-8 md:p-20 justify-between uppercase">
            <div>
              <h1 className="font-headline font-black text-6xl md:text-8xl text-primary leading-none tracking-tighter uppercase mb-12">
                Reach<br />The Soil.
              </h1>
              <div className="space-y-12 max-w-xs">
                <div className="group">
                  <span className="block font-public-sans text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-4">Hyper-Local HQ</span>
                  <p className="font-headline text-xl text-primary leading-tight">
                    Sardar Patel Colony,<br />Near Stadium Road,<br />Ahmedabad 380014
                  </p>
                </div>
                <div className="group">
                  <span className="block font-public-sans text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-4">Nursery Branch</span>
                  <p className="font-headline text-xl text-primary leading-tight">
                    Naranpura Vistar,<br />Ankur Cross Roads,<br />Ahmedabad 380013
                  </p>
                </div>
                <div className="pt-8">
                  <span className="block font-public-sans text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-4">Direct Lines</span>
                  <p className="font-public-sans text-lg text-primary underline underline-offset-4 decoration-2 normal-case">grow@nikyfarm.in</p>
                  <p className="font-public-sans text-lg text-primary">+91 79 2640 40XX</p>
                </div>
              </div>
            </div>
            <div className="mt-20 border-l-4 border-primary pl-6">
              <p className="font-public-sans text-sm text-on-surface-variant italic leading-relaxed normal-case">
                "Agriculture is the foundation of manufacture and commerce. We are returning to the foundations."
              </p>
            </div>
          </div>

          {/* Right: The Form Canvas */}
          <div className="w-full md:w-7/12 bg-surface-bright p-8 md:p-24 flex flex-col">
            <div className="mb-16">
              <h2 className="font-headline font-black text-3xl uppercase tracking-tighter text-primary">Inquiry Portal</h2>
              <div className="w-24 h-1 bg-primary mt-2"></div>
            </div>
            <form className="space-y-12 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block font-public-sans text-[10px] tracking-[0.2em] uppercase text-outline mb-2">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 font-public-sans text-lg placeholder:text-outline-variant transition-all uppercase" placeholder="Entry string" type="text" />
                </div>
                <div className="relative">
                  <label className="block font-public-sans text-[10px] tracking-[0.2em] uppercase text-outline mb-2">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 font-public-sans text-lg placeholder:text-outline-variant transition-all" placeholder="user@domain.com" type="email" />
                </div>
              </div>
              <div className="relative">
                <label className="block font-public-sans text-[10px] tracking-[0.2em] uppercase text-outline mb-2">Inquiry Type</label>
                <select className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 font-public-sans text-lg appearance-none transition-all uppercase">
                  <option>Urban Nursery Consultation</option>
                  <option>Organic Bulk Supply</option>
                  <option>Landscape Architecture</option>
                  <option>General Support</option>
                </select>
              </div>
              <div className="relative">
                <label className="block font-public-sans text-[10px] tracking-[0.2em] uppercase text-outline mb-2">Message</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 font-public-sans text-lg placeholder:text-outline-variant transition-all resize-none normal-case" placeholder="Describe your request..." rows={4}></textarea>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8">
                <div className="flex items-center gap-4">
                  <input className="w-5 h-5 border-2 border-primary text-primary focus:ring-0 rounded-none cursor-pointer" id="consent" type="checkbox" />
                  <label className="font-public-sans text-xs text-on-surface-variant cursor-pointer" htmlFor="consent">I agree to the Organic Brutalism privacy policy.</label>
                </div>
                <button className="bg-primary text-surface-bright font-headline font-black text-xl px-12 py-6 uppercase tracking-tighter hover:bg-on-tertiary-container transition-none flex items-center justify-center gap-4 group" type="submit">
                  Submit Inquiry
                  <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform duration-75">arrow_right_alt</span>
                </button>
              </div>
            </form>

            {/* Map Component (Abstract Representative) */}
            <div className="mt-24 h-64 bg-surface-container relative overflow-hidden">
              <div className="absolute inset-0 [background-size:40px_40px] [background-image:radial-gradient(circle,#c3c8c1_1px,transparent_1px)] opacity-30"></div>
              <div className="w-full h-full relative grayscale opacity-40 mix-blend-multiply bg-surface-container">
                <Image 
                  alt="Monochrome minimalist architectural map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYjYr33eYO8aXSltYM6IgSw-KFz8P6jJVgAqQcbwZyKPij4CWmdVW9gYhAMt-zj0-MVyzOYpejlyaIKh6VYRerV-ijr0yQEBF3mKbWfcU8LCL1KxFBH-zLFFi-GM1Hk6gbMzBLtmhjHJLmwZOQKT6rnn_-8kqJXm-fBe74TG4k8EfOl2WgiuR7b_MrXN8JoMc3bUzy4AhRU41LmiTDAXx8fTZ7G9CbxgyTbdt-JIctE7nbvguqIABuQO-Cto92wyLX-O6i2E2oTmQ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary"></div>
              <div className="absolute top-1/2 left-1/3 animate-ping w-4 h-4 bg-primary/40"></div>
              <div className="absolute bottom-8 right-8 bg-surface-bright px-4 py-2 border border-primary">
                <span className="font-public-sans text-[10px] tracking-[0.2em] uppercase font-bold">SP Colony Node</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block: Sustainability */}
        <section className="bg-primary-container py-24 px-6 md:px-12 uppercase">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-12">
            <div className="p-12 bg-primary flex flex-col gap-8">
              <span className="material-symbols-outlined text-surface-bright text-4xl">eco</span>
              <h3 className="font-headline font-black text-2xl text-surface-bright uppercase">100% Organic</h3>
              <p className="font-public-sans text-on-primary-container text-sm leading-relaxed normal-case font-light">No synthetic inputs. We prioritize biological integrity in every seedling nurtured at our Naranpura facility.</p>
            </div>
            <div className="p-12 bg-primary flex flex-col gap-8">
              <span className="material-symbols-outlined text-surface-bright text-4xl">architecture</span>
              <h3 className="font-headline font-black text-2xl text-surface-bright uppercase">Urban Spatialism</h3>
              <p className="font-public-sans text-on-primary-container text-sm leading-relaxed normal-case font-light">We design gardens like monuments. Brutalist structures meet vibrant flora to create unique living environments.</p>
            </div>
            <div className="p-12 bg-primary flex flex-col gap-8">
              <span className="material-symbols-outlined text-surface-bright text-4xl">local_shipping</span>
              <h3 className="font-headline font-black text-2xl text-surface-bright uppercase">Direct Supply</h3>
              <p className="font-public-sans text-on-primary-container text-sm leading-relaxed normal-case font-light">Sourced from the farm, delivered to your door. No middleman, no waste. Pure architectural greenery.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
