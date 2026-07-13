"use client";

import { useEffect, useRef } from "react";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`fade-up delay-${delay}`}>{children}</div>;
}

export default function ContactPage() {
  return (
    <div className="pt-18">
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <FadeUp><p className="section-label mb-4">Contact</p></FadeUp>
        <FadeUp delay={1}><h1 className="display text-[var(--text-primary)] mb-6">Get in Touch.</h1></FadeUp>
        <FadeUp delay={2}><p className="text-body max-w-xl mx-auto">Have a question about training, nutrition, or booking? Selena would love to hear from you.</p></FadeUp>
      </section>

      <section className="section-full bg-[var(--bg-alt)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeUp>
              <h2 className="heading-xl text-[var(--text-primary)] mb-8">Contact Information.</h2>
              <div className="space-y-6">
                {[
                  { icon: "📍", label: "Location", value: "Vancouver, BC, Canada" },
                  { icon: "📧", label: "Email", value: "selena@fitness.com" },
                  { icon: "📱", label: "Phone", value: "(555) 123-4567" },
                  { icon: "🕐", label: "Hours", value: "Mon-Fri: 7am-9pm · Sat-Sun: 8am-6pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-secondary)] mb-1">{item.label}</p>
                      <p className="text-body">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="heading-md text-[var(--text-primary)] mb-4">Follow Selena</h3>
                <div className="flex gap-3">
                  {["Instagram", "YouTube", "TikTok"].map((s) => (
                    <a key={s} href="#" className="px-5 py-2.5 bg-[var(--card-bg)] rounded-full text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--text-primary)] transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={1}>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Name *</label>
                  <input type="text" required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Email *</label>
                  <input type="email" required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Subject</label>
                  <select className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors appearance-none" defaultValue="">
                    <option value="" disabled>What's this about?</option>
                    <option>Training Inquiry</option><option>Nutrition Question</option><option>Booking Issue</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Message *</label>
                  <textarea rows={5} required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors resize-none" placeholder="Tell Selena what you'd like to know..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-inherit">Send Message</button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
