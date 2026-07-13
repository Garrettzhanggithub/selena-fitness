"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workouts", label: "Programs" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Detect system preference on mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    if (mq.matches) setTheme("light");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "light" : "dark");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("force-light", theme === "light");
    document.documentElement.classList.toggle("force-dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-sm font-semibold tracking-tight no-underline" style={{ color: "var(--text-primary)" }}>
          SELENA<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors no-underline">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn-primary !py-2 !px-5 !text-xs text-inherit">Book Now</Link>
        </div>

        {/* Right side: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--card-bg)] transition-colors" aria-label="Toggle theme">
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg)]/95 backdrop-blur-xl border-t border-[var(--card-border)]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 transition-colors no-underline">
                {l.label}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setMenuOpen(false)} className="btn-primary justify-center text-inherit mt-2">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
