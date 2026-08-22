"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden" style={{ background: "var(--color-bg-dark)" }}>
      {/* ── Background Image with Parallax — Portrait Studio Photo ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Selena — Studio Portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.6)" }}
        />
        {/* Overlay gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-[var(--color-bg-dark)]/40" />
      </motion.div>

      {/* ── Content — Left 40% ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-wide px-6 md:px-8 max-w-[900px]"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-caption mb-6"
          style={{ color: "var(--color-accent)" }}
        >
          Personal Training · Vancouver, Canada
        </motion.p>

        {/* Headline — max 8 words, transformation promise */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="display mb-6"
          style={{ color: "var(--color-text-on-dark)" }}
        >
          Strength That Changes
          <br />
          <em style={{ fontWeight: 400 }}>Everything</em>
        </motion.h1>

        {/* Subtitle — max 24 words */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-body-lg max-w-md mb-10"
          style={{ color: "var(--color-muted-on-dark)" }}
        >
          Medical-grade personal training by a Registered Nurse.
          Evidence-based programs designed for lasting transformation.
        </motion.p>

        {/* CTA Buttons — Side by side with clear spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6"
        >
          <Link href="/booking" className="btn-primary !shrink-0">
            Book Consultation
          </Link>
          <Link href="#results" className="btn-secondary btn-secondary-dark !shrink-0">
            See Results
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator — Fixed at bottom center, outside document flow ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-caption" style={{ letterSpacing: "0.2em", fontSize: "0.625rem", color: "var(--color-accent)" }}>SCROLL</span>
          {/* Vertical line */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-px h-10"
            style={{ background: "var(--color-accent)" }}
          >
            {/* Arrow at bottom of line */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2"
            >
              <path
                d="M3 4.5L6 8L9 4.5"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
