"use client";

import { motion } from "framer-motion";

const gallery = [
  { caption: "Morning session at the studio", aspect: "aspect-[4/3]", src: "/images/lifestyle.jpg" },
  { caption: "Small group training energy", aspect: "aspect-square", src: "/images/training.jpg" },
  { caption: "Nutrition prep made simple", aspect: "aspect-[3/4]", src: "/images/lifestyle2.jpg" },
  { caption: "Recovery and mobility work", aspect: "aspect-square", src: "/images/results.jpg" },
  { caption: "Client milestone celebration", aspect: "aspect-[4/3]", src: "/images/lifestyle3.jpg" },
  { caption: "The space that inspires you", aspect: "aspect-[3/4]", src: "/images/transformation.jpg" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function Lifestyle() {
  return (
    <section className="section-full" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label">Lifestyle</span>
          <h2 className="heading-lg text-[var(--text-primary)] mb-4 mt-4">
            More Than a Workout. <br />
            <em style={{ fontWeight: 400 }}>A Way of Life.</em>
          </h2>
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {gallery.map((item, i) => (
            <motion.div
              key={item.caption}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group cursor-default"
            >
              <div className="img-container overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full ${item.aspect} object-cover transition-transform duration-700 group-hover:scale-[1.04]`}
                />
              </div>
              <p
                className="mt-4 text-caption tracking-wider"
                style={{ color: "var(--text-tertiary)" }}
              >
                {item.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
