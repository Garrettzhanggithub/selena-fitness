import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8739a]/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e8739a]/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-small text-[#e8739a] mb-4 uppercase tracking-widest font-medium">
          RN-Certified Fitness Coach
        </p>
        <h1 className="display mb-6">
          Train Smarter.<br />
          <span className="text-[#e8739a]">Recover Stronger.</span>
        </h1>
        <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
          Meet Selena — a 23-year-old registered nurse who combines medical expertise 
          with elite fitness training. Evidence-based workouts designed for real results, 
          backed by science and built around your body.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/booking" className="btn-accent text-inherit">Book a Session</Link>
          <Link href="/workouts" className="btn-outline text-inherit">View Programs</Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto">
          {[
            { num: "500+", label: "Clients Trained" },
            { num: "RN", label: "Medical Certified" },
            { num: "100%", label: "Evidence-Based" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-[#e8739a]">{s.num}</p>
              <p className="text-small text-[var(--text-secondary)] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
