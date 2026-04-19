import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body">
      <main className="pt-24 uppercase">
        {/* Hero & Mission Statement */}
        <section className="bg-surface min-h-screen flex flex-col justify-center px-12 py-20 relative overflow-hidden">
          <div className="grid grid-cols-12 gap-0 items-end">
            <div className="col-span-12 md:col-span-8 z-10">
              <h1 className="font-brand font-black text-7xl md:text-[10rem] leading-[0.85] text-primary tracking-tighter mb-8">
                ORGANIC<br />BRUTALISM
              </h1>
              <p className="max-w-xl text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed normal-case">
                We don't just farm. We architect ecosystems. In the arid soils of Ahmedabad, Niky Farm builds the future of essential agriculture through structure, honesty, and raw sustainability.
              </p>
            </div>
            <div className="hidden md:block col-span-4 text-right">
              <span className="[writing-mode:vertical-rl] [text-orientation:mixed] font-headline font-black text-6xl opacity-10 select-none">EST. 2024 / AHMEDABAD</span>
            </div>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 border-t-2 border-primary">
            <div className="p-8 bg-primary text-white border-r border-white/10">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">The Vision</span>
              <p className="text-lg normal-case font-light">Creating a digital seedbed where technology and topsoil collide. No soft edges. Only growth.</p>
            </div>
            <div className="p-8 bg-primary-container text-on-primary-container border-r border-white/10">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">The Impact</span>
              <p className="text-lg normal-case font-light">Reducing thermal load in urban Ahmedabad through native canopy re-introduction.</p>
            </div>
            <div className="p-8 bg-tertiary-container text-tertiary-fixed-dim">
              <span className="font-headline font-bold text-xs tracking-widest block mb-4 uppercase">The Method</span>
              <p className="text-lg normal-case font-light">Zero-synthetic intervention. Direct-to-soil architecture. Maximum transparency.</p>
            </div>
          </div>
        </section>

        {/* Our Process (The Cultivated Monolith) */}
        <section className="bg-surface-container py-32 px-12">
          <div className="mb-20">
            <h2 className="font-headline font-black text-5xl md:text-7xl text-primary uppercase tracking-tighter mb-4">THE CULTIVATED MONOLITH</h2>
            <div className="h-1 w-32 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-0 flex flex-col h-full border border-outline-variant/20">
              <div className="relative w-full h-64 grayscale brightness-75 contrast-125">
                <Image 
                  alt="Soil texture" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeKTc_XptlkPqY69V0amVkJzQK9PO3sBiWnxyzD9ea-9MjIoUpqvLga0nEmyEsJ5Z2Xft2o7ENY06kPaCwUAF7oYW0_R2HBjorTe2ULoJHDO3aEoI0hY5ZTAQLhueCSFWiG-JGBS9YUKrmli9c5fYmM9QpIqV3R3xed3x3Vs_G6142gK5tdk0R92KRTviVcbXlCNlgf12_6_fe2W3NhJ0A023YpMpp5HFa-p4DOizUj_BIS-JonmYFzYwX1MmLuVSWYpnfZXJ4E-w"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-brand font-bold text-4xl text-tertiary-fixed-dim block mb-2">01</span>
                <h3 className="font-headline font-black text-xl mb-4">SOIL HARDENING</h3>
                <p className="text-sm text-on-surface-variant normal-case font-light">We treat the earth like concrete—structural and foundational. Analysis of mineral density before a single seed is dropped.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-0 flex flex-col h-full border border-outline-variant/20">
              <div className="relative w-full h-64 grayscale brightness-75 contrast-125">
                <Image 
                  alt="Seedling" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyMvID0rAUW9kcAS2e0XEiefZ3VpC-NHs6ih46AYS2OsRlRt08Fdo0qJNrF5vGVKPGryJxJS6iTu_8UUI1fNPlEbFfYl-lg9sZ_p-7UuSIDvih6heWjPn7JeM0XxWt03w-6jtw8Tglc-wFgGJKAhsLp1Q5-JvXgPFDbYSwOFI1zLD0uazFA8Yq9oxy1ftxo8v80cV6vVihf6VYzbvUIvHoNZDIg61IotUE2fXhzf0LoiPpPiDt2MTz_XA5-x_Jax1RGm4qgjgCm00"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-brand font-bold text-4xl text-tertiary-fixed-dim block mb-2">02</span>
                <h3 className="font-headline font-black text-xl mb-4">GEOMETRIC SOWING</h3>
                <p className="text-sm text-on-surface-variant normal-case font-light">Grid-aligned planting for maximum irrigation efficiency and aesthetic structural integrity.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-0 flex flex-col h-full border border-outline-variant/20">
              <div className="w-full h-64 bg-primary flex items-center justify-center p-12">
                <span className="material-symbols-outlined text-white text-8xl">water_drop</span>
              </div>
              <div className="p-8">
                <span className="font-brand font-bold text-4xl text-tertiary-fixed-dim block mb-2">03</span>
                <h3 className="font-headline font-black text-xl mb-4">PULSE IRRIGATION</h3>
                <p className="text-sm text-on-surface-variant normal-case font-light">Smart, brutal water management. We only provide what is essential. Strength through scarcity.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-0 flex flex-col h-full border border-outline-variant/20">
              <div className="relative w-full h-64 grayscale brightness-75 contrast-125">
                <Image 
                  alt="Harvest" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChq16yygP6Bad3V2WB2qbgoyjT6uLci58NCROnuEFrY5wEMjCaki2b4qW_u32j11NyulEKgYyGwX1F40-iwIseANe8FzkJlSD9qCw6cukskeC9H47_thkrP6Lr9nowsS73eeW2lcx-L5sA8lcCRf17ut-pweWl-8qm5gI9q7SAAMHSzljAl-lCBwbFGFqz7hcqmqdc50sTCWeqi9D3hU4YKt_btLo4ZhImZlxipYrPU-jDow7dwdGjXuAjpkpUHWOB8eBC_XKRU4M"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-brand font-bold text-4xl text-tertiary-fixed-dim block mb-2">04</span>
                <h3 className="font-headline font-black text-xl mb-4">RAW YIELD</h3>
                <p className="text-sm text-on-surface-variant normal-case font-light">The final product. Unwashed, honest, and packed with the mineral profile of the Ahmedabad basin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Founders */}
        <section className="bg-surface py-32 px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-black text-5xl md:text-7xl text-primary uppercase tracking-tighter mb-8">THE ARCHITECTS</h2>
              <p className="text-xl text-on-surface-variant normal-case font-light">A collective of agronomists, designers, and environmentalists dedicated to the brutal honesty of the plant cycle.</p>
            </div>
            <div className="bg-tertiary-fixed-dim p-4 font-headline font-bold uppercase tracking-widest text-xs">
              JOIN THE FARMSTEAD
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Founder 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <Image 
                  alt="Arjun Niky" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgNwx3QHxjOfPoj0Vln9D0L-Gfb8gw62AnfmWpHd4TG3YPKbf4-kr9klCdJPsIWl5w0xxS3STUGsV7-fqzxwmx1699ZotFHzqN0dR_DHwgTDjkN-pyY9X-X671PfsrKY-3vBDMKID6jr1gd8r5dgpUZCvvL97j9Mfao0y1yZduDQNawiRzSj4tmIHVNIZPcsspQaAdzUQ6IfLmlirT5HqULT1YydOB5V42XLAQ-5FlWuVTWm8ALJDURZubr5wc_MlS4Dg0HLueSE"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 font-headline font-black uppercase text-sm">
                  Chief Agronomist
                </div>
              </div>
              <h4 className="font-brand font-black text-3xl text-primary">ARJUN NIKY</h4>
              <p className="text-on-surface-variant mt-2 font-light normal-case">Founder & Lead Designer of the Ahmedabad Seedbed. Obsessed with nutrient density and linear aesthetics.</p>
            </div>
            {/* Founder 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <Image 
                  alt="Priya Shah" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLPrzLPPMOVa_KhrYkZhlec7SvG7CupmQhyHgxchcpl6yw4phUu8yFMze9944g4iVTkgXLLBp838VM9QRVGc16oH-w__cWOASKzGSs47k7tZA_KizjCuKMbhq1LKZTKs4pD1k7bBzstlmGv10wOAw0V-fZ5iIjMagvFJbou8Za2tp866cNY5K4RVybBQG45VWkEZN1KaXIxnVog5sAH__-0ujLt9ikb4ABtTKBfZSMFHI0Z53OP3LfsMeclS6oBM1xPGJm-uB9dE"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 font-headline font-black uppercase text-sm">
                  Sustainability Lead
                </div>
              </div>
              <h4 className="font-brand font-black text-3xl text-primary">PRIYA SHAH</h4>
              <p className="text-on-surface-variant mt-2 font-light normal-case">Mapping the thermal footprint of urban farming. Priya ensures our monoliths actually breathe.</p>
            </div>
            {/* Founder 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <Image 
                  alt="Karan Varma" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADTJijgLgrbQ_bpT8GoxPWXSNx4mjircsR2I-iHJbXjU1nVWxvdXbK8YobpGqZ3n8C3hh8aGZdXbt5oDTAtLFLU5abKf5mtLsXpYhpXRt_oSuYvt62MuRr5riewqpTshLsxTM6E8ZKKrVmAhtlXKoaK8V1f_Y__7YOq_oI_g7o-9f8ubAO5nJokZhJDOa9a9AtVPy7xMG3LffkM-qtkEMcpgniI73F2QKVtiuwUPRMAyfyvSoSflycQg3bTxj0AOwdoc7hSGgR1ds"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white p-4 font-headline font-black uppercase text-sm">
                  Field Operations
                </div>
              </div>
              <h4 className="font-brand font-black text-3xl text-primary">KARAN VARMA</h4>
              <p className="text-on-surface-variant mt-2 font-light normal-case">The hands in the soil. Karan translates our geometric visions into actual biological yields.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-32 px-12 text-center">
          <h2 className="font-brand font-black text-5xl md:text-8xl tracking-tighter mb-12 uppercase">WANT TO SEE THE DUST?<br />VISIT THE FARM.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-primary font-headline font-black uppercase px-12 py-5 text-xl transition-none hover:bg-tertiary-fixed-dim">
              BOOK A SITE TOUR
            </button>
            <button className="border-4 border-white text-white font-headline font-black uppercase px-12 py-5 text-xl transition-none hover:bg-white hover:text-primary">
              VIEW OUR CATALOG
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
