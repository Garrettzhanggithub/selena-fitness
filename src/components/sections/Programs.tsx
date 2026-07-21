"use client";

import { motion } from "framer-motion";

const programs = [
  {
    name: "1-on-1 Training",
    audience: "For those who want the highest level of attention and accountability.",
    highlights: [
      "Fully personalized programming",
      "Real-time form correction & coaching",
      "Weekly progress check-ins",
    ],
  },
  {
    name: "Small Group",
    audience: "For motivated individuals who thrive in a focused group setting.",
    highlights: [
      "Groups of 3–6 for maximum engagement",
      "Shared energy, individualized attention",
      "Community-driven accountability",
    ],
  },
  {
    name: "Online Coaching",
    audience: "For busy professionals who need flexibility without compromise.",
    highlights: [
      "Custom programming delivered digitally",
      "Video form reviews & adjustments",
      "Direct messaging with Selena",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Programs() {
  return (
    <section className="section-full section-dark">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label">Programs</span>
          <h2 className="heading-lg text-[var(--color-secondary)] mb-4 mt-4">
            Choose Your <em style={{ fontWeight: 400 }}>Path.</em>
          </h2>
          <p className="text-body max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
            Three ways to work with Selena. Every option includes a free consultation so we find the right fit.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <div className="card" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                {/* Program Name */}
                <h3 className="heading-sm text-[var(--color-secondary)] mb-2">{program.name}</h3>
                <p className="text-body mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {program.audience}
                </p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8">
                  {program.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--color-accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#booking" className="btn-primary">
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
