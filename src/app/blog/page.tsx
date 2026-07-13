"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`fade-up delay-${delay}`}>{children}</div>;
}

const blogPosts = [
  { slug: "nutrition-timing", title: "The Science of Nutrition Timing", excerpt: "When you eat matters just as much as what you eat. Here's the evidence-based breakdown.", date: "Jul 10, 2025", category: "Nutrition" },
  { slug: "rest-day-recovery", title: "Why Rest Days Build Muscle", excerpt: "Your muscles grow during recovery, not during the workout. Learn how to optimize your rest protocol.", date: "Jul 5, 2025", category: "Science" },
];

function BlogCard({ slug, title, excerpt, date, category }: {
  slug: string; title: string; excerpt: string; date: string; category: string;
}) {
  return (
    <Link href={`/blog/${slug}`} className="card flex flex-col gap-3 group no-underline">
      <div className="flex items-center gap-2 text-xs">
        <span className="font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>{category}</span>
        <span className="text-[var(--text-secondary)]">·</span>
        <span className="text-[var(--text-tertiary)]">{date}</span>
      </div>
      <h3 className="heading-md text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{title}</h3>
      <p className="text-body flex-1 line-clamp-3">{excerpt}</p>
      <span className="btn-link text-sm mt-2">Read More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="pt-18">
      <section className="section-full text-center" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <FadeUp><p className="section-label mb-4">Blog</p></FadeUp>
        <FadeUp delay={1}><h1 className="display text-[var(--text-primary)] mb-6">Insights & Science.</h1></FadeUp>
        <FadeUp delay={2}><p className="text-body max-w-xl mx-auto">Evidence-based articles on fitness, nutrition, recovery, and the science behind effective training — written by a registered nurse.</p></FadeUp>
      </section>

      <section className="section-full">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => <FadeUp key={post.slug} delay={i}><BlogCard {...post} /></FadeUp>)}
          </div>
        </div>
      </section>

      <section className="section-full">
        <FadeUp>
          <div className="card max-w-lg mx-auto text-center">
            <h3 className="heading-md text-[var(--text-primary)] mb-2">Add New Article</h3>
            <p className="text-small">Create a new <code className="bg-[var(--card-bg)] px-2 py-1 rounded">.md</code> file in <code className="bg-[var(--card-bg)] px-2 py-1 rounded">content/blog/</code> with frontmatter: title, date, category, and excerpt.</p>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
