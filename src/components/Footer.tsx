import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--white-6)]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-[var(--text-primary)]">
              SELENA<span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="text-small mt-3 max-w-xs">RN-certified fitness coaching that bridges medical expertise with elite training.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">Navigate</h4>
            <ul className="space-y-2">
              {["Home", "About", "Workouts", "Blog"].map((l) => (
                <li key={l}><Link href={`/${l.toLowerCase()}`} className="text-small hover:text-[var(--accent)] transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {["1-on-1 Training", "Online Coaching", "Group Classes", "Nutrition Plans"].map((l) => (
                <li key={l}><Link href="/booking" className="text-small hover:text-[var(--accent)] transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">Connect</h4>
            <ul className="space-y-2">
              {["Instagram", "YouTube", "TikTok"].map((s) => (
                <li key={s}><a href="#" className="text-small hover:text-[var(--accent)] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--white-6)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-tertiary)]">© 2025 Selena Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors">Contact</Link>
            <a href="#" className="text-xs text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
