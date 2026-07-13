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

const sessionTypes = [
  { title: "Initial Consultation", price: "$89", duration: "60 min", features: ["Full medical health screening", "Movement pattern assessment", "Goal setting & program design", "Nutrition baseline review"], popular: false },
  { title: "1-on-1 Training Session", price: "$75", duration: "45 min", features: ["Personalized workout execution", "Real-time form correction", "Medical-grade monitoring", "Recovery protocol guidance"], popular: true },
  { title: "Online Coaching Package", price: "$299", duration: "4 weeks", features: ["Custom training program", "Weekly check-ins via video", "Nutrition plan adjustments", "Progress tracking & analysis"], popular: false },
  { title: "Small Group Training", price: "$35", duration: "60 min", features: ["Max 4 people per group", "Structured programming", "Motivational environment", "Community support"], popular: false },
];

function BookingForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">First Name *</label>
          <input type="text" required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="Jane" />
        </div>
        <div>
          <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Last Name *</label>
          <input type="text" required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Email *</label>
        <input type="email" required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="jane@example.com" />
      </div>
      <div>
        <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Phone</label>
        <input type="tel" className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="(555) 123-4567" />
      </div>
      <div>
        <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Session Type *</label>
        <select required className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors appearance-none" defaultValue="">
          <option value="" disabled>Select a session...</option>
          {sessionTypes.map((s) => (<option key={s.title} value={s.title}>{s.title} — {s.price}/{s.duration}</option>))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Preferred Date</label>
          <input type="date" className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Preferred Time</label>
          <select className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors appearance-none" defaultValue="">
            <option value="" disabled>Select time...</option>
            <option>Morning (8-12)</option><option>Afternoon (12-5)</option><option>Evening (5-9)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Health Notes / Goals</label>
        <textarea rows={4} className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors resize-none" placeholder="Any injuries, conditions, or specific goals..." />
      </div>
      <button type="submit" className="btn-primary w-full justify-center text-inherit">Submit Booking Request</button>
      <p className="text-meta text-center">Selena will confirm your appointment within 24 hours via email.</p>
    </form>
  );
}

export default function BookingPage() {
  return (
    <div className="pt-18">
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <FadeUp><p className="section-label mb-4">Booking</p></FadeUp>
        <FadeUp delay={1}><h1 className="display text-[var(--text-primary)] mb-6">Book Your Session.</h1></FadeUp>
        <FadeUp delay={2}><p className="text-body max-w-xl mx-auto">Choose a session type below and fill out the form. Selena will confirm your appointment within 24 hours.</p></FadeUp>
      </section>

      <section className="section-full bg-[var(--bg-alt)]">
        <div className="container">
          <FadeUp><h2 className="heading-xl text-[var(--text-primary)] mb-12 text-center">Choose Your Session.</h2></FadeUp>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sessionTypes.map((s, i) => (
              <FadeUp key={s.title} delay={i}>
                <div className={`card flex flex-col ${s.popular ? "ring-2 ring-[var(--accent)]" : ""}`}>
                  {s.popular && <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>Most Popular</span>}
                  <h3 className="heading-md text-[var(--text-primary)] mb-1">{s.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{s.price}</span>
                    <span className="text-sm text-[var(--text-secondary)]">/ {s.duration}</span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                        </span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#booking-form" className="btn-primary text-inherit justify-center w-full inline-flex">Select</a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-form" className="section-full pb-12">
        <FadeUp>
          <div className="card max-w-2xl mx-auto">
            <h2 className="heading-xl text-[var(--text-primary)] mb-2 text-center">Schedule Your Session.</h2>
            <p className="text-body text-center mb-8">Fill out the form below and Selena will get back to you.</p>
            <BookingForm />
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
