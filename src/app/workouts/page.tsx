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

const categories = ["All", "Strength", "HIIT", "Recovery", "Mobility"];
const workouts = [
  { title: "Full Body HIIT Blast", description: "20-minute high-intensity session targeting every major muscle group. Medical-grade warmup and cooldown.", duration: "20 min", intensity: "Advanced" as const, category: "HIIT" },
  { title: "Lower Body Power", description: "Squats, deadlifts, and plyometrics designed to build explosive leg strength with perfect form cues.", duration: "45 min", intensity: "Intermediate" as const, category: "Strength" },
  { title: "Upper Body Sculpt", description: "Push-ups, rows, and shoulder work for a strong, defined upper body. Scalable from beginner to advanced.", duration: "35 min", intensity: "Intermediate" as const, category: "Strength" },
  { title: "Core & Stability", description: "Targeted core work with a focus on anti-rotation and injury prevention — designed by an RN.", duration: "30 min", intensity: "Beginner" as const, category: "Strength" },
  { title: "Recovery Flow", description: "Gentle mobility and stretching session. Perfect for rest days or post-workout recovery.", duration: "25 min", intensity: "Beginner" as const, category: "Recovery" },
  { title: "HIIT Tabata Circuit", description: "4-minute Tabata blocks with minimal equipment. Maximum calorie burn in minimum time.", duration: "15 min", intensity: "Advanced" as const, category: "HIIT" },
  { title: "Morning Mobility", description: "Wake up your joints and spine with this flowing mobility routine. Great for desk workers.", duration: "20 min", intensity: "Beginner" as const, category: "Mobility" },
  { title: "Functional Movement Prep", description: "Movement screen exercises that improve daily function and athletic performance.", duration: "30 min", intensity: "Intermediate" as const, category: "Mobility" },
  { title: "Post-Natal Core Restore", description: "Gentle but effective core rebuilding program for postpartum recovery. Diastasis recti-safe.", duration: "25 min", intensity: "Beginner" as const, category: "Recovery" },
];

function WorkoutCard({ title, description, duration, intensity, category }: {
  title: string; description: string; duration: string;
  intensity: "Beginner" | "Intermediate" | "Advanced"; category: string;
}) {
  const badgeClass = intensity === "Beginner" ? "intensity-beginner" : intensity === "Intermediate" ? "intensity-intermediate" : "intensity-advanced";
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-meta uppercase tracking-wider">{category}</span>
        <span className={`intensity-badge ${badgeClass}`}>{intensity}</span>
      </div>
      <h3 className="heading-md text-[var(--text-primary)]">{title}</h3>
      <p className="text-body flex-1">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-[var(--card-border)]">
        <span className="text-small flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          {duration}
        </span>
        <Link href="/workouts" className="btn-link text-sm">Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
      </div>
    </div>
  );
}

export default function WorkoutsPage() {
  return (
    <div className="pt-18">
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <FadeUp><p className="section-label mb-4">Programs</p></FadeUp>
        <FadeUp delay={1}><h1 className="display text-[var(--text-primary)] mb-6">Workout Library.</h1></FadeUp>
        <FadeUp delay={2}><p className="text-body max-w-xl mx-auto">Evidence-based programs for every level. Every workout includes proper warmup, progression cues, and cooldown — because Selena cares about your long-term health.</p></FadeUp>
      </section>

      <section className="section-full bg-[var(--bg-alt)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((c) => (
                <button key={c} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${c === "All" ? "bg-[var(--accent)] text-[var(--text-primary)]" : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--card-border)]"}`}>{c}</button>
              ))}
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((w, i) => <FadeUp key={w.title} delay={i % 3}><WorkoutCard {...w} /></FadeUp>)}
          </div>
        </div>
      </section>

      <section className="section-full">
        <FadeUp>
          <div className="card max-w-xl mx-auto text-center">
            <p className="text-body"><span className="font-semibold" style={{ color: "var(--accent)" }}>Medical Note:</span> All programs are designed with injury prevention in mind. If you have a pre-existing condition or are post-surgery, consult your physician before starting any new exercise program.</p>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
