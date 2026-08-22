"use client";

import { useEffect, useRef } from "react";
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

function ScaleIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`scale-in delay-${delay}`}>{children}</div>;
}

const certifications = [
  { icon: "RN", title: "Registered Nurse (RN)", desc: "Licensed in Canada with 3+ years clinical experience in acute care and rehabilitation." },
  { icon: "CPT", title: "NASM-CPT Certified", desc: "National Academy of Sports Medicine — Personal Training certification with emphasis on corrective exercise." },
  { icon: "PN", title: "Precision Nutrition Level 2", desc: "Evidence-based nutrition coaching for performance, body composition, and metabolic health." },
  { icon: "PP", title: "Pre/Post-Natal Specialist", desc: "Specialized training protocols for expecting mothers and postpartum recovery." },
];

const approach = [
  { step: "01", title: "Medical Assessment", desc: "Every client starts with a thorough health screening — vitals, movement patterns, injury history. Great training begins with understanding your body." },
  { step: "02", title: "Custom Programming", desc: "No cookie-cutter plans. Every workout is periodized around your goals, recovery capacity, and lifestyle." },
  { step: "03", title: "Active Recovery Protocol", desc: "Built-in mobility work, breathing exercises, and sleep optimization strategies. Selena ensures you recover like an athlete." },
];

export default function AboutPage() {
  return (
    <div className="pt-18">
      {/* Hero — Apple-style massive headline */}
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <FadeUp>
          <p className="section-label mb-4">About</p>
        </FadeUp>
        <FadeUp delay={1}>
          <h1 className="display text-[var(--text-primary)] mb-6 max-w-3xl mx-auto">Meet Selena.</h1>
        </FadeUp>
        <FadeUp delay={2}>
          <p className="text-body max-w-xl mx-auto">
            A 23-year-old registered nurse who turned her passion for human anatomy 
            and performance into a career bridging medicine and fitness.
          </p>
        </FadeUp>
      </section>

      {/* Bio — Apple-style split layout */}
      <section className="section-full">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScaleIn>
              <div className="relative aspect-[4/5] max-w-md">
                <div className="absolute inset-0 img-placeholder" />
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-[var(--accent-light)] rounded-full opacity-60" />
              </div>
            </ScaleIn>
            <FadeUp delay={1}>
              <h2 className="heading-xl text-[var(--text-primary)] mb-6">The Nurse Who Trains.</h2>
              <p className="text-body leading-relaxed mb-4">
                Selena grew up in Vancouver, always moving — from gymnastics to sprinting, 
                she was obsessed with what the human body could do. It wasn't until nursing school 
                that everything clicked.
              </p>
              <p className="text-body leading-relaxed mb-4">
                Working in acute care and rehabilitation, she saw how movement heals — and how poor 
                training causes injury. The fitness industry was missing a critical piece: 
                <strong className="text-[var(--text-primary)]"> medical expertise</strong>.
              </p>
              <p className="text-body leading-relaxed">
                So she got her personal training certification, studied exercise physiology at a clinical 
                level, and built something new: fitness programs that are as safe as they are effective.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Certifications — Apple-style light band */}
      <section className="section-full bg-[var(--bg-light-section)]">
        <div className="container">
          <FadeUp>
            <h2 className="heading-xl text-[var(--bg-alt)] mb-12 text-center">Certifications & Credentials.</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((c, i) => (
              <FadeUp key={c.title} delay={i}>
                <div style={{ background: "var(--text-primary)", borderRadius: "var(--radius-lg)", padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }} className="flex gap-4 items-start">
                  <span
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold tracking-wider"
                    style={{
                      background: "var(--color-accent)",
                      color: "#0A0A0A",
                      fontSize: "0.75rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <h3 className="heading-md mb-1" style={{ color: "var(--bg-alt)" }}>{c.title}</h3>
                    <p className="text-small">{c.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — Apple-style numbered steps */}
      <section className="section-full">
        <div className="container">
          <FadeUp>
            <h2 className="heading-xl text-[var(--text-primary)] mb-4 text-center">The Selena Method.</h2>
            <p className="text-body text-center mb-16 max-w-xl mx-auto">
              A three-phase approach combining medical assessment with elite-level programming.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approach.map((a, i) => (
              <FadeUp key={a.step} delay={i}>
                <div className="card text-center h-full">
                  <p className="text-4xl font-bold mb-4" style={{ color: "var(--accent-light)" }}>{a.step}</p>
                  <h3 className="heading-md mb-3 text-[var(--text-primary)]">{a.title}</h3>
                  <p className="text-small">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-alt)] to-[var(--bg)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[var(--accent-light)] to-transparent rounded-full blur-[100px] pointer-events-none opacity-40" />
        <div className="container text-center relative z-10">
          <FadeUp>
            <h2 className="heading-xl text-[var(--text-primary)] mb-4">Work With Selena.</h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Whether you're recovering from injury or preparing for competition — let's build a plan that works for your body.
            </p>
            <Link href="/booking" className="btn-primary text-base px-10 py-5">
              Book a Session
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
