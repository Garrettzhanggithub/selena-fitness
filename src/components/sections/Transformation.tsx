"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Sarah",
    age: 34,
    duration: "6 Months",
    outcome: "Lost 28 lbs and gained confidence she didn't know she had.",
  },
  {
    name: "Marcus",
    age: 41,
    duration: "8 Months",
    outcome: "Reversed prediabetes and dropped two pant sizes.",
  },
  {
    name: "Elena",
    age: 29,
    duration: "5 Months",
    outcome: "Postpartum recovery — back to running and feeling strong.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Transformation() {
  return (
    <section className="section-full" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label">Transformations</span>
          <h2 className="heading-lg text-[var(--text-primary)] mb-4 mt-4">
            Real People. <br />
            <em style={{ fontWeight: 400 }}>Real Results.</em>
          </h2>
          <p className="text-body max-w-md">
            No quick fixes — just consistent, science-backed programs that deliver lasting change.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="group cursor-default">
                {/* Image */}
                <div className="img-container mb-6 overflow-hidden">
                  <img
                    src={`/images/transformation.jpg`}
                    alt={`${story.name}'s transformation`}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Label */}
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="heading-sm text-[var(--text-primary)]">{story.name}, {story.age}</h3>
                  <span className="text-caption" style={{ color: "var(--color-accent)" }}>— {story.duration}</span>
                </div>
                <p className="text-body">{story.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 text-center"
        >
          <a href="#booking" className="btn-link">See More Results →</a>
        </motion.div>
      </div>
    </section>
  );
}
