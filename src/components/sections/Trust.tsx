"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "NASM", label: "Certified Trainer" },
  { value: "10 Years", label: "Experience" },
  { value: "4.9★", label: "Client Rating" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Trust() {
  return (
    <section className="section-full" style={{ background: "var(--color-bg-dark)" }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x"
          style={{ borderColor: "var(--color-border-dark)" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4 md:px-8 py-6 group cursor-default"
            >
              <span
                className="mb-2 transition-colors duration-300"
                style={{
                  fontSize: "var(--text-h1)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "var(--color-accent)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-caption tracking-wider"
                style={{
                  color: "var(--color-muted-on-dark)",
                  transition: "color 0.3s var(--ease-out)",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
