"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "I have no experience. Is that a problem?",
    a: "Not at all. Selena designs every program to your current fitness level and builds from there. Most of her best success stories started with zero training background.",
  },
  {
    q: "How many times per week do I need to train?",
    a: "Typically 3–4 sessions per week for optimal results, but Selena will tailor the frequency to your schedule and recovery capacity. Consistency matters more than volume.",
  },
  {
    q: "What does a session actually look like?",
    a: "Each session starts with a warm-up, moves into strength or conditioning work tailored to your goals, and ends with mobility/recovery. Selena coaches form throughout and adjusts in real time.",
  },
  {
    q: "How do I pay? Are there packages?",
    a: "Yes — monthly memberships and multi-session packages are available. We accept credit card, bank transfer, and HSA/FSA cards. No long-term contracts required.",
  },
  {
    q: "Can I train if I have an injury or medical condition?",
    a: "Absolutely. Selena's nursing background means she's trained to work around injuries, post-surgical recovery, and chronic conditions — often in coordination with your doctor.",
  },
  {
    q: "What if I miss a session?",
    a: "Just reschedule within 24 hours and it's on you. We understand life happens — flexibility is built into every plan.",
  },
  {
    q: "Where do sessions take place?",
    a: "In-person sessions are held at our private studio in Vancouver, Canada. Online coaching clients train from home with full support via video check-ins and messaging.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients notice measurable changes within 4–6 weeks — energy, strength, body composition. Significant transformations typically emerge around the 12-week mark.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-full section-dark">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 max-w-2xl mx-auto text-center"
        >
          <span className="section-label justify-center">FAQ</span>
          <h2 className="heading-lg text-[var(--color-secondary)] mb-4 mt-4">
            Common <em style={{ fontWeight: 400 }}>Questions.</em>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto space-y-2"
        >
          {questions.map((item, i) => (
            <div
              key={i}
              className="border-b border-[rgba(255,255,255,0.08)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                aria-expanded={openIndex === i}
              >
                <span
                  className="heading-sm pr-4 transition-colors duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300"
                  style={{
                    color: "var(--color-accent)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-body pb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item.a}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
