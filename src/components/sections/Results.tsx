"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "\"Selena's clinical background sets her apart. She understands recovery like no other trainer I've worked with — and the results speak for themselves.\"",
    name: "Jennifer K.",
    detail: "Lost 22 lbs in 5 months",
  },
  {
    quote:
      "\"After two C-sections, I thought getting back to fitness would take years. Selena had me running again in three months with zero injuries.\"",
    name: "Maria T.",
    detail: "Postpartum recovery program",
  },
  {
    quote:
      "\"The online coaching felt just as personal as in-person training. Selena's attention to form via video review is remarkable.\"",
    name: "David L.",
    detail: "Online coaching — 8 months",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Results() {
  return (
    <section id="results" className="section-full" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label">Client Stories</span>
          <h2 className="heading-lg text-[var(--text-primary)] mb-4 mt-4">
            What They <em style={{ fontWeight: 400 }}>Say.</em>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <div className="card h-full flex flex-col">
                {/* Quote */}
                <blockquote
                  className="text-body flex-grow mb-8"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    color: "var(--text-primary)",
                    lineHeight: 1.65,
                  }}
                >
                  {t.quote}
                </blockquote>

                {/* Signature */}
                <div className="flex items-center gap-4">
                  {/* Photo */}
                  <img
                    src="/images/testimonial1.jpg"
                    alt={t.name}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover"
                  />
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--text-primary)", fontSize: "0.9375rem" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-caption">{t.detail}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
