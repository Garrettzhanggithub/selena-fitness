"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your goals, history, and lifestyle to understand exactly where you stand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Plan",
    description: "Selena designs a program tailored to your body, schedule, and objectives.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Training",
    description: "Execute your plan with expert coaching, real-time adjustments, and ongoing support.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11" />
        <circle cx="9" cy="12" r="2" />
        <circle cx="15" cy="12" r="2" />
        <path d="M3 8v8" />
        <path d="M21 8v8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Results",
    description: "Track measurable progress and evolve your program as you grow stronger.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function HowItWorks() {
  return (
    <section className="section-full" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="section-label justify-center">How It Works</span>
          <h2 className="heading-lg text-[var(--text-primary)] mb-4 mt-4">
            Simple Process. <br />
            <em style={{ fontWeight: 400 }}>Powerful Results.</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  border: "1px solid var(--card-border)",
                  color: "var(--color-accent)",
                }}
              >
                {step.icon}
              </div>

              {/* Step Number */}
              <span
                className="text-[0.6875rem] font-semibold tracking-widest mb-2 block"
                style={{ color: "var(--color-accent)" }}
              >
                STEP {step.number}
              </span>

              {/* Title */}
              <h3 className="heading-sm text-[var(--text-primary)] mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-body max-w-[260px]">{step.description}</p>

              {/* Connector Arrow (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-24px] top-8" style={{ color: "var(--color-border)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 text-center"
        >
          <a href="#booking" className="btn-primary">Start Your Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}
