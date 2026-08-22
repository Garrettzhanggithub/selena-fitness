"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  const [contactStatus, setContactStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const [contactValues, setContactValues] = useState({ name: "", email: "", subject: "", message: "" });

  const handleContact = (key: keyof typeof contactValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setContactValues((v) => ({ ...v, [key]: e.target.value }));

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "maewkkzg";

    setContactStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: contactValues.name,
          email: contactValues.email,
          subject: contactValues.subject,
          message: contactValues.message,
          _subject: `Website Contact — ${contactValues.name}`,
        }),
      });

      setContactStatus(res.ok ? "done" : "error");
    } catch {
      setContactStatus("error");
    }
  };

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
                  { icon: "Venue", label: "Location", value: "Vancouver, BC, Canada" },
                  { icon: "Email", label: "Email", value: "selena@fitness.com" },
                  { icon: "Phone", label: "Phone", value: "(555) 123-4567" },
                  { icon: "Hours", label: "Hours", value: "Mon-Fri: 7am-9pm · Sat-Sun: 8am-6pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[0.6rem] font-semibold uppercase tracking-wider"
                      style={{ background: "var(--color-accent)", color: "#0A0A0A" }}
                    >
                      {item.icon}
                    </span>
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
                    <Link key={s} href={`https://www.${s.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[var(--card-bg)] rounded-full text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--text-primary)] transition-colors">{s}</Link>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={1}>
              {contactStatus === "done" ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: "rgba(198, 168, 106, 0.15)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="heading-md text-[var(--text-primary)] mb-3">Message Sent.</h3>
                  <p className="text-body">Selena will get back to you within 24 hours.</p>
                </div>
              ) : (
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Name *</label>
                  <input
                    type="text" required name="name" value={contactValues.name} onChange={handleContact("name")}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Email *</label>
                  <input
                    type="email" required name="email" value={contactValues.email} onChange={handleContact("email")}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors" placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Subject</label>
                  <select
                    name="subject" value={contactValues.subject} onChange={handleContact("subject")}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors appearance-none" defaultValue=""
                  >
                    <option value="" disabled>What's this about?</option>
                    <option>Training Inquiry</option><option>Nutrition Question</option><option>Booking Issue</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Message *</label>
                  <textarea
                    rows={5} required name="message" value={contactValues.message} onChange={handleContact("message")}
                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors resize-none" placeholder="Tell Selena what you'd like to know..."
                  />
                </div>
                <button type="submit" disabled={contactStatus === "submitting"} className="btn-primary w-full justify-center text-inherit">
                  {contactStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {contactStatus === "error" && (
                  <p className="text-center text-sm" style={{ color: "var(--color-error)" }}>
                    Something went wrong. Please try again or email selena@fitness.com.
                  </p>
                )}
              </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
