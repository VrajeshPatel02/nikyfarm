import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrogCecKGc0ijc3F-29jHEd0jWgZIN3PjDS3D13qJViuRdQorB3t8qDoEMAxxrtLGK5ptN3V7OGAKbNH3qpioza5skYePgeyQ_DOQ5Cc0qI2xkR4nQYQ3zX4rH-xzBq9p8i_X1zTPMmFoduCbZswNff-yabnw0f3EdgGL1jcLlCkm1AnzvmReGn86Gswtp3z-E1fFa2amLcQcuBPeUWT9X6hEeFvPr6yCPf9H6NHvQCOZhGW0kOGP4F02fkjJXx5iMgowAVAy6OlY"
            alt="Native meadow dawn"
            fill
            className="object-cover grayscale brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Keystone Plantings 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-background leading-none tracking-tighter mb-8 uppercase font-headline">
            Start<br />Growing.
          </h1>
          <button className="bg-primary text-on-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-background hover:text-primary transition-none flex items-center gap-4">
            Get the kit <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 px-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
          {/* Indoor Air Purifiers */}
          <div className="group relative aspect-square bg-surface-container overflow-hidden p-12 flex flex-col justify-between border-r border-outline-variant/20">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFTbRwWWSD38RcGyF9yiECCRyEl2heqqVOhBZYmrGrZZCY6uCVvu6zVzxguQoxwbwgC4HDJ7wZoq4YHuUfY_qnXCZT-xxcCfWsGvOxkwyxQVu8Ma0SQR7pa_N9O4wIQkWtiN_Q3_gpZI--2Jk3EExiRounqI_xr-coBTlxmjEEacnR31mAybN1tmHZHYQCQs_2GCjTi8qMaLScKzUM4QdjQJZkLZqNMMyg_iPfPRNUfqDMgc0J22m9vHjQ6fk5nRABntWrByfw_7w" 
              alt="Snake plant" 
              fill 
              className="object-cover opacity-10 group-hover:opacity-30 transition-opacity grayscale"
            />
            <span className="text-primary font-black text-4xl uppercase tracking-tighter relative z-10">01</span>
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Indoor Air Purifiers</h3>
              <p className="text-sm text-on-surface-variant max-w-xs mb-6 font-body">Physiological optimization through botanical integration. Breathe deep.</p>
              <Link className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 inline-block" href="/shop">Explore collection</Link>
            </div>
          </div>
          {/* Edible Container Kits */}
          <div className="group relative aspect-square bg-primary text-background overflow-hidden p-12 flex flex-col justify-between">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHn8pzLXc3HN_mHbLxckFgw0chiUexsDN0nMnNjnYMWE1E27GGghXOJhZnPuq4fzN-QYWONvO1WdBUy0dYoMBsafDxWzm4FQQB-e67laNX_fAwyHKF9Sc-D_vzWyUi_voP8fjdoDE4pfqRncb-TQpJCEMh9YtSF-KK9qiMrl3kH4Qmcbl4f0osanU3XE6ms07HoD1ZnKlA0qKAh2l-zTGjlRsIlEVvPEfpXEiLoR72bLqzBp6MiqRY7vqO69pUIsm8DE07LHHnfjc" 
              alt="Fresh herb seedlings" 
              fill 
              className="object-cover opacity-20 group-hover:opacity-40 transition-opacity grayscale"
            />
            <span className="text-background font-black text-4xl uppercase tracking-tighter relative z-10">02</span>
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Edible Container Kits</h3>
              <p className="text-sm text-background/70 max-w-xs mb-6 font-body">Modular agricultural systems for hyper-local food security.</p>
              <Link className="text-xs font-bold uppercase tracking-widest border-b-2 border-background pb-1 inline-block" href="/shop">Order system</Link>
            </div>
          </div>
          {/* Professional Services */}
          <div className="group relative aspect-square bg-surface-container-high overflow-hidden p-12 flex flex-col justify-between">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYK0uucbuXe1kPjz-GLeZyYnqcXkex2vwQmSM7qKfSZm34UaqycP1sISCxabADC1xmfg5tYkEZBwC9DRj9IBdz6-6gUsLs_AkPvdDlG_6BqB4OvtupTdJSJLCnxYEhOmp5yhCXGWOsrF4Vr6F2aP4jnf7Mj9ATE2n9ew6cuC37sm0dAKOoWqpWw6YrjcSqz3ownlHNGW09KMrc9xOxQqq7PYnFnENEMjQdsF6H_A9yi9fQilYtt47dL6keC5td-vMzUe2htNIvVUs" 
              alt="Landscape sketch" 
              fill 
              className="object-cover opacity-10 group-hover:opacity-30 transition-opacity grayscale"
            />
            <span className="text-primary font-black text-4xl uppercase tracking-tighter relative z-10">03</span>
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Professional Services</h3>
              <p className="text-sm text-on-surface-variant max-w-xs mb-6 font-body">Eco-brutalist master planning for residential and commercial estates.</p>
              <Link className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 inline-block" href="/services">Consultations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sentient UI Module */}
      <section className="bg-surface-container py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 font-body">Ahmedabad Context</p>
                <h2 className="text-4xl font-black uppercase tracking-tighter font-headline">38°C / 42% Humidity</h2>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-surface-bright outline-variant/20 outline outline-1">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary font-headline">Hydration Protocol</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant font-body">Intense heat detected in Sardar Patel Colony. Automate drip irrigation to 4:00 AM cycles. Shade keystone oaks to prevent leaf scorch.</p>
              </div>
              <div className="p-8 bg-tertiary-fixed-dim">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-tertiary font-headline">Daisy AI Suggestion</h4>
                <p className="text-sm leading-relaxed text-on-tertiary-fixed font-body">"Humidity is dropping. Mist your Air Purifiers every 4 hours to maintain stomatal function."</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full aspect-[4/3] bg-primary relative overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIeDVbGvaHxGyFWbGX5RmHdP6_F6vsl3Sra59Ypv4jue71F0-yl9bnSa3aleyWAyvVDy0FUQE8MMtIQUAFZIanlCMzWbhXNvfpR6puxuTBaTOI3fhZwubCQuAKR-U5PGj6gXqbrtw8twAt9qGPLsKEHTeFmZJL8EUh-vJgfgG0BqiP2V2vymb-hMQuASnuOEMRfLDVD5KLbAe145iiMPwlL8csLRJAy6e7Nf6UwirJbxXzNJWlPILkmfF29AGiHzI4WEXZGfq8hsc" 
              alt="Architectural shadow" 
              fill 
              className="object-cover grayscale brightness-50"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-8 bg-background">
        <h2 className="text-center text-4xl font-black uppercase tracking-tighter mb-16 font-headline">Cultivated Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun Mehta",
              role: "Urban Architect",
              text: '"The keystone planting system transformed our Naranpura terrace into a functional ecosystem. No more guesswork."',
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNNd7JXzb1UK-9pzywXeoIGk3GJVgmvv2kgfIErn4CpV47-TMHeU2mhlxAe3LUu1zFLwve3WhKsE9r4F7iesZyGx4QKCA2mZZwX6y3l40LXwmkhvJDYpsrvz_Oz6wYMP5uggK3vZgxL2t_ZU02nEsMFz9nvvON_jq08yIyKNpVWZMNDOfm5KVzN_FShwmYB3bnLl6GeimJNgalMe6I8Csi-3G328YXhzgFAdkO1dtijD8u5bJOcRol8Bps64YaMdD2jWomGD_7E_Q"
            },
            {
              name: "Sara Shah",
              role: "Industrial Designer",
              text: '"The indoor air purifiers aren\'t just plants, they\'re living pieces of brutalist furniture. Exceptional quality."',
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqrmaZMNel83dqjcHmxtYLcpsId9QVutc2BWbRFy6ClCHXDz-qEG8xQc4nzXr2_GjVqCYn_p4bQUR6jXmqXFRS6qtedFY9mjAYQtZG8ohuiB-zzYjdXz67TxGb96cdITH_WBM0cZD_QabsRNW4lL6hJV4wT_Zk1d2_vnrySLGrVSbcRT-5_huKsFCuDQw8o6w6gCeVCIfBV4fduOukzEqQa7n2NTx8HFbbz0p1I1NpBAX58WENYUubV6lrCOGJWwUegeKNQS-oO6E"
            },
            {
              name: "Rohan Patel",
              role: "Environmental Lead",
              text: '"Sustainability is often a buzzword, but Niky Farm provides the data and the dirt to back it up."',
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr9wDrsNpvw22kEY9Zodkj8GMk8srUBpkVIJe8YaquWrTgKQ9Hm2uGCDMNelRfVVaXfenjrdeWmzkZdmP-lUMusTSCmXC2K9jg2rTOzJ9FfFAMEij6hIfMKbDhU3gauV-0nwKgJnKeQPxPp0u5MFDKAt1mM4gK81a-JaTI42qHCaLtJxAW5ZWRSRf1HG03nkUcb7AITEPyUtr837kZMFxGsMPshdwTsq1-fn7MqIS-ogeh71Bdu6tEMD-q_8lkivZ7TRptOjfL8bU"
            }
          ].map((t, idx) => (
            <div key={idx} className="p-10 bg-surface-container-low flex flex-col justify-between h-full border border-outline/10">
              <div>
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                </div>
                <p className="text-lg font-medium italic mb-8 font-body">{t.text}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 grayscale overflow-hidden rounded-full">
                  <Image src={t.img} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest font-headline">{t.name}</p>
                  <p className="text-[10px] uppercase text-on-surface-variant font-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
