"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const goals = [
  "Weight Loss",
  "Strength & Conditioning",
  "Postpartum Recovery",
  "Injury Rehabilitation",
  "General Fitness",
  "Athletic Performance",
  "Other",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    startDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_BOOKING_ID || "maewkkzg";

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          goal: formData.goal,
          preferred_start_date: formData.startDate,
          _subject: `New Booking Request — ${formData.name}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (submitted) {
    return (
      <section id="booking" className="section-full section-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-8 flex items-center justify-center"
              style={{ background: "rgba(198, 168, 106, 0.15)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="heading-md text-[var(--color-secondary)] mb-4">Thank You.</h3>
            <p className="text-body" style={{ color: "rgba(255,255,255,0.6)" }}>
              We'll contact you within 24 hours to schedule your free consultation.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-full section-dark">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 max-w-lg mx-auto text-center"
        >
          <span className="section-label justify-center">Book Now</span>
          <h2 className="heading-lg text-[var(--color-secondary)] mb-4 mt-4">
            Start Your <em style={{ fontWeight: 400 }}>Transformation.</em>
          </h2>
          <p className="text-body" style={{ color: "rgba(255,255,255,0.6)" }}>
            Tell us a bit about yourself and we'll reach out to schedule your free consultation.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="text-caption mb-2 block">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "var(--color-secondary)" }}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-caption mb-2 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="input"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "var(--color-secondary)" }}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="text-caption mb-2 block">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(310) 555-0000"
              value={formData.phone}
              onChange={handleChange}
              className="input"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "var(--color-secondary)" }}
            />
          </div>

          {/* Goal */}
          <div>
            <label htmlFor="goal" className="text-caption mb-2 block">
              Primary Goal
            </label>
            <select
              id="goal"
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
              className="input"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: formData.goal ? "var(--color-secondary)" : "var(--text-tertiary)" }}
            >
              <option value="" disabled>Select your goal</option>
              {goals.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Start Date */}
          <div>
            <label htmlFor="startDate" className="text-caption mb-2 block">
              Preferred Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="input"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "var(--color-secondary)" }}
            />
          </div>

          {/* Submit */}
          <motion.div
            whileHover={status === "submitting" ? undefined : { scale: 1.02 }}
            whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
            className="pt-4"
          >
            <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Request Consultation"}
            </button>
            {status === "error" && (
              <p className="text-center text-sm mt-3" style={{ color: "var(--color-error)" }}>
                Something went wrong. Please try again or email selena@fitness.com.
              </p>
            )}
          </motion.div>

          <p className="text-center text-caption mt-4" style={{ color: "rgba(255,255,255,0.35)" }}>
            Free consultation · No commitment required
          </p>
        </motion.form>
      </div>
    </section>
  );
}
