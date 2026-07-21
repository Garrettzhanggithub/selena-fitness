"use client";

import { motion } from "framer-motion";

const methods = [
  {
    title: "Personalized",
    description:
      "Every program is built around your body, your history, and your goals — not a generic template.",
  },
  {
    title: "Science-Based",
    description:
      "Evidence-backed training and nutrition rooted in sports science and clinical nursing practice.",
  },
  {
    title: "Sustainable",
    description:
      "No crash diets or extreme protocols. Programs designed to last a lifetime, not a season.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function WhySelena() {
  return (
    <section className="section-full" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Split Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-24"
        >
          {/* Left — Portrait */}
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="img-container">
              <img
                src="/images/coach.jpg"
                alt="Selena — Editorial Portrait"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Narrative */}
          <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] } } }}>
            <span className="section-label">Why Selena</span>
            <h2 className="heading-lg text-[var(--text-primary)] mb-6 mt-4">
              A Registered Nurse Who<br />
              <em style={{ fontWeight: 400 }}>Gets Your Body.</em>
            </h2>
            <div className="space-y-4 text-body">
              <p>
                Selena spent over a decade in clinical nursing — understanding anatomy, recovery, and the human body from the inside out. She brought that medical expertise into fitness, creating programs that respect your physiology while pushing you to grow.
              </p>
              <p>
                Her approach blends clinical knowledge with an intuitive sense of motivation. She doesn't just design workouts — she designs a relationship with movement that lasts.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Methodology Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <div className="card">
                {/* Number */}
                <span
                  className="text-[0.75rem] font-semibold tracking-widest mb-4 block"
                  style={{ color: "var(--color-accent)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="heading-sm text-[var(--text-primary)] mb-3">{method.title}</h3>
                <p className="text-body">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
