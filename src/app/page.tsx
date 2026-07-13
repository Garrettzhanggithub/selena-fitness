"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ─── Intersection Observer Hook ──────────────────────
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

// ─── Data ──────────────────────────────────────────────

const featuredPrograms = [
  { title: "Full Body HIIT Blast", description: "20-minute high-intensity intervals targeting every major muscle group. Medical-grade warmup and cooldown built in.", duration: "20 min", intensity: "Advanced" as const, category: "HIIT" },
  { title: "Core & Stability", description: "Anti-rotation work designed by an RN who understands anatomy inside out. Injury prevention first.", duration: "30 min", intensity: "Intermediate" as const, category: "Strength" },
  { title: "Recovery Flow", description: "Gentle mobility and breathwork for rest days. Because recovery is where the magic happens.", duration: "25 min", intensity: "Beginner" as const, category: "Recovery" },
];

const testimonials = [
  { name: "Sarah M.", role: "Marathon Runner", quote: "Selena's medical background is a game-changer. She caught my hip impingement before it became a full injury and redesigned my training around it. I've never felt stronger.", avatar: "SM" },
  { name: "James L.", role: "Software Engineer", quote: "After years of desk work, I was stiff and sore in places I didn't know existed. Selena built me a program that actually fits my schedule — and my body. Down 25 lbs in 4 months.", avatar: "JL" },
  { name: "Priya K.", role: "Post-Natal Client", quote: "As a new mom, I needed someone who understood both fitness and anatomy. Selena's pre/post-natal program helped me rebuild my core safely and confidently.", avatar: "PK" },
];

const stats = [
  { number: "500+", label: "Clients Trained" },
  { number: "RN", label: "Medical Certified" },
  { number: "100%", label: "Evidence-Based" },
  { number: "4.9★", label: "Client Rating" },
];

// ─── Components ────────────────────────────────────────

function WorkoutCard({ title, description, duration, intensity, category }: {
  title: string; description: string; duration: string;
  intensity: "Beginner" | "Intermediate" | "Advanced"; category: string;
}) {
  const badgeClass =
    intensity === "Beginner" ? "intensity-beginner" :
    intensity === "Intermediate" ? "intensity-intermediate" :
    "intensity-advanced";

  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-meta">{category}</span>
        <span className={`intensity-badge ${badgeClass}`}>{intensity}</span>
      </div>
      <h3 className="heading-md text-[var(--text-primary)]">{title}</h3>
      <p className="text-body flex-1">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-[var(--card-border)]">
        <span className="text-small flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          {duration}
        </span>
        <Link href="/workouts" className="btn-link text-sm">
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Page — Apexcoach-style layout ────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — Apexcoach-style full-screen with background image ═══ */}
      <section className="relative min-h-screen flex flex-col bg-[var(--bg)] pt-20 overflow-hidden">
        
        {/* Background Image with Overlay — Apexcoach style */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3df1?w=1920&h=1080&fit=crop" 
            alt="Fitness Background" 
            className="w-full h-full object-cover opacity-[0.08]"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/90 to-[var(--bg)]" />
          <div className="absolute inset-0 bg-[var(--bg)]/60" />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex-grow flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0">
          <div className="space-y-8">
            {/* Badge — Apexcoach style */}
            <FadeUp>
              <div className="inline-flex items-center space-x-2 bg-[var(--accent-light)] border border-[var(--accent)]/20 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase">RN-Certified Fitness Coach · Vancouver, BC</span>
              </div>
            </FadeUp>

            {/* Hero headline — Apexcoach style massive type */}
            <FadeUp delay={1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--text-primary)] tracking-tight leading-tight">
                UNLEASH YOUR<br />
                <span className="gradient-text">TRUE POTENTIAL</span>
              </h1>
            </FadeUp>

            {/* Subheadline */}
            <FadeUp delay={2}>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                Elite personal training and nutrition coaching designed to sculpt your physique, 
                elevate your performance, and transform your mind — backed by medical expertise.
              </p>
            </FadeUp>

            {/* CTA buttons — Apexcoach style */}
            <FadeUp delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/booking" className="btn-primary text-base px-10 py-5 shadow-xl" style={{ boxShadow: "0 8px 30px rgba(232,115,154,0.3)" }}>
                  Start Your Transformation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/workouts" className="btn-outline text-base px-10 py-5">
                  View Programs
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Stats/Social Proof Footer — Apexcoach style */}
        <FadeUp delay={4}>
          <div className="relative z-10 w-full border-t border-[var(--card-border)] bg-[var(--bg)]/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="stat-number">{s.number}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ═══ FEATURED PROGRAMS — Apexcoach dark band ═══ */}
      <section className="section-full bg-[var(--bg-alt)]">
        <div className="container-wide px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="section-label">Programs</p>
                <h2 className="heading-xl text-[var(--text-primary)]">Featured Workouts.</h2>
              </div>
              <Link href="/workouts" className="btn-link mt-4 md:mt-0">
                View All Programs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredPrograms.map((w, i) => (
              <FadeUp key={w.title} delay={i}>
                <WorkoutCard {...w} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY SELENA — Apexcoach split section ═══ */}
      <section className="section-full">
        <div className="container-wide px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Visual */}
            <ScaleIn>
              <div className="relative aspect-[4/5] max-w-md">
                <div className="absolute inset-0 img-placeholder" />
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-[var(--accent)]/30 rounded-full opacity-60" />
              </div>
            </ScaleIn>

            {/* Right: Text */}
            <FadeUp delay={1}>
              <p className="section-label">Why Selena</p>
              <h2 className="heading-xl text-[var(--text-primary)] mb-6">
                Not Just a Coach.<br />
                <span className="gradient-text">A Registered Nurse.</span>
              </h2>
              <p className="text-body mb-8 leading-relaxed">
                Selena brings over 3 years of clinical nursing experience to every session. 
                She understands anatomy, physiology, and recovery at a medical level — meaning 
                your workouts are not just effective, they're safe and sustainable.
              </p>
              <ul className="space-y-4">
                {[
                  "Medical-grade injury prevention",
                  "Personalized recovery protocols",
                  "Nutrition guidance backed by science",
                  "Pre/post-natal training expertise",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══ TESTIMONIALS — theme-aware band ═══ */}
      <section className="section-full" style={{ background: "var(--bg-light-section)", color: "inherit" }}>
        <div className="container-wide px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="section-label justify-center">Testimonials</p>
              <h2 className="heading-xl text-[var(--text-primary)]">What Clients Say.</h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i}>
                <div className="testimonial-card h-full flex flex-col">
                  <p className="text-body relative z-10 mb-6 leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--card-border)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-sm font-bold" style={{ color: "var(--accent)" }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                      <p className="text-meta">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LATEST ARTICLES — Apexcoach dark band ═══ */}
      <section className="section-full">
        <div className="container-wide px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="section-label">Blog</p>
                <h2 className="heading-xl text-[var(--text-primary)]">Latest Articles.</h2>
              </div>
              <Link href="/blog" className="btn-link mt-4 md:mt-0">
                All Articles
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { slug: "nutrition-timing", title: "The Science of Nutrition Timing", excerpt: "When you eat matters just as much as what you eat. Here's the evidence-based breakdown.", date: "Jul 10, 2025", category: "Nutrition" },
              { slug: "rest-day-recovery", title: "Why Rest Days Build Muscle", excerpt: "Your muscles grow during recovery, not during the workout. Learn how to optimize your rest protocol.", date: "Jul 5, 2025", category: "Science" },
            ].map((post, i) => (
              <FadeUp key={post.slug} delay={i}>
                <Link href={`/blog/${post.slug}`} className="card flex flex-col gap-3 group no-underline">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>{post.category}</span>
                    <span className="text-[var(--text-secondary)]">·</span>
                    <span className="text-[var(--text-tertiary)]">{post.date}</span>
                  </div>
                  <h3 className="heading-md text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{post.title}</h3>
                  <p className="text-body flex-1 line-clamp-3">{post.excerpt}</p>
                  <span className="btn-link text-sm mt-2">Read More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Apexcoach gradient band ═══ */}
      <section className="section-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-alt)] to-[var(--bg)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[var(--accent-light)] to-transparent rounded-full blur-[100px] pointer-events-none opacity-40" />

        <div className="container text-center relative z-10">
          <FadeUp>
            <h2 className="heading-xl text-[var(--text-primary)] mb-4">Ready to Train Smarter?</h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              Book your first session with Selena and experience the difference of a 
              medical-grade approach to fitness.
            </p>
            <Link href="/booking" className="btn-primary text-base px-10 py-5 shadow-xl" style={{ boxShadow: "0 8px 30px rgba(232,115,154,0.3)" }}>
              Book Your Session
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
