import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-tertiary-fixed-dim">
      <main className="min-h-screen">
        <section className="flex flex-col md:flex-row min-h-screen pt-20 overflow-hidden">
          {/* Left: Contact Information */}
          <div className="w-full md:w-5/12 bg-surface-container flex flex-col p-8 md:p-16 justify-between">
            <div>
              <span className="inline-block bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                Get In Touch
              </span>
              <h1 className="font-headline font-black text-5xl md:text-7xl text-primary leading-none tracking-tighter uppercase mb-12">
                Contact<br /><span className="text-primary/50">Us.</span>
              </h1>
              <div className="space-y-10 max-w-sm">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold">Address</span>
                  </div>
                  <p className="font-headline text-lg text-primary leading-relaxed">Niky Garden Nursery,<br />Near Valsad, Gujarat, India</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold">Hours</span>
                  </div>
                  <p className="text-sm text-primary font-medium">Mon–Sat: 8:00 AM – 7:00 PM</p>
                  <p className="text-sm text-primary font-medium">Sunday: 9:00 AM – 5:00 PM</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold">Phone</span>
                  </div>
                  <p className="text-sm text-primary font-medium">Call us for orders and enquiries</p>
                </div>
              </div>
            </div>
            <div className="mt-16 border-l-4 border-primary pl-6">
              <p className="text-sm text-on-surface-variant italic leading-relaxed">&ldquo;To plant a garden is to believe in tomorrow.&rdquo;</p>
              <p className="text-xs text-on-surface-variant/60 mt-2">— Audrey Hepburn</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full md:w-7/12 bg-surface-bright p-8 md:p-16 lg:p-24 flex flex-col">
            <div className="mb-12">
              <h2 className="font-headline font-black text-3xl uppercase tracking-tighter text-primary">Send Us a Message</h2>
              <div className="w-24 h-1 bg-primary mt-2" />
              <p className="text-sm text-on-surface-variant mt-4 max-w-md">Have a question about plants, need a bulk order quote, or interested in landscaping services? We&apos;ll get back to you promptly.</p>
            </div>
            <form className="space-y-10 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-outline mb-2 font-bold">Your Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 text-base placeholder:text-outline-variant" placeholder="Enter your full name" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-outline mb-2 font-bold">Phone Number</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 text-base placeholder:text-outline-variant" placeholder="+91 XXXXX XXXXX" type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-outline mb-2 font-bold">Email</label>
                <input className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 text-base placeholder:text-outline-variant" placeholder="your@email.com" type="email" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-outline mb-2 font-bold">I&apos;m Interested In</label>
                <select className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 text-base appearance-none">
                  <option>Buying Plants</option>
                  <option>Bulk / Wholesale Order</option>
                  <option>Garden Landscaping</option>
                  <option>Terrace Garden Setup</option>
                  <option>Corporate Green Solutions</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-outline mb-2 font-bold">Your Message</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline focus:border-primary focus:ring-0 px-0 py-3 text-base placeholder:text-outline-variant resize-none" placeholder="Tell us about your requirements..." rows={4} />
              </div>
              <button className="bg-primary text-on-primary font-headline font-black text-base px-10 py-5 uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all flex items-center gap-3 group" type="submit">
                Send Message
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>

        {/* Google Maps */}
        <section className="bg-background py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/50 font-body block mb-3">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-headline">Visit Our Nursery</h2>
            </div>
            <div className="w-full aspect-[16/7] bg-surface-container border border-outline-variant/20 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.381872605818!2d72.89379207493292!3d20.284454812926754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d3d08ef9b9d3%3A0xa7994e829350e1c3!2sNiky%20Garden%20Nursery!5e0!3m2!1sen!2sin!4v1777050886594!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Niky Garden Nursery Location" />
            </div>
          </div>
        </section>

        {/* Info Blocks */}
        <section className="bg-primary-container py-16 px-8 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: "local_florist", title: "Walk-In Welcome", desc: "No appointment needed! Browse our full collection anytime during opening hours." },
              { icon: "local_shipping", title: "Delivery Available", desc: "Carefully packaged plant delivery across Valsad and surrounding areas." },
              { icon: "groups", title: "Bulk Orders", desc: "Special pricing for landscaping projects and wholesale orders. Contact us for a quote." },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-primary flex flex-col gap-6">
                <span className="material-symbols-outlined text-surface-bright text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <h3 className="font-headline font-black text-xl text-surface-bright uppercase">{item.title}</h3>
                <p className="text-on-primary-container text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
