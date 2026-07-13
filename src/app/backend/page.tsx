"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "selena2026";

export default function BackendPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Post form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("admin_logged_in") === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      sessionStorage.setItem("admin_logged_in", "true");
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("admin_logged_in");
    setPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    const frontmatter = `---\ntitle: "${title}"\ndate: "${date}"\ncategory: "${category}"\nexcerpt: "${excerpt}"\n---\n\n${content}`;

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, frontmatter }),
    });

    if (res.ok) {
      setSuccess(`✅ "${title}" published successfully!`);
      setTitle(""); setCategory("General"); setExcerpt(""); setContent("");
      setTimeout(() => setSuccess(""), 4000);
    } else {
      setError("Failed to publish. Check console for details.");
    }
  };

  return (
    <div className="pt-18">
      <section className="section-full" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <div className="container text-center">
          <p className="section-label justify-center mb-4">Admin</p>
          <h1 className="display text-[var(--text-primary)] mb-6">Backend.</h1>

          {!loggedIn ? (
            /* ── Login Form ── */
            <form onSubmit={handleLogin} className="card max-w-md mx-auto mt-10">
              <h2 className="heading-md text-[var(--text-primary)] mb-6 text-center">Enter Password</h2>
              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin password..."
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-light)] transition-colors"
                  autoFocus
                />
                {error && <p className="text-sm" style={{ color: "#EF4444" }}>{error}</p>}
                <button type="submit" className="btn-primary w-full justify-center text-inherit">
                  Login
                </button>
              </div>
            </form>
          ) : (
            /* ── Admin Dashboard ── */
            <div className="max-w-2xl mx-auto mt-10 space-y-8">
              {/* Success message */}
              {success && (
                <div className="text-center py-4 px-6 rounded-xl" style={{ background: "rgba(16,185,129,0.1)", color: "var(--accent)" }}>
                  {success}
                </div>
              )}

              {/* New Post Form */}
              <form onSubmit={handleSubmit} className="card space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="heading-md text-[var(--text-primary)]">New Article</h2>
                  <button type="button" onClick={handleLogout} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    Logout →
                  </button>
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Title *</label>
                  <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="Your article title..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                      {["General", "Nutrition", "Science", "Training", "Recovery", "Mindset"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Slug</label>
                    <input type="text" readOnly value={title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "your-article-slug"} className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-tertiary)]" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Excerpt (short summary)</label>
                  <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors" placeholder="A brief summary for the blog listing..." />
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">Content (Markdown) *</label>
                  <textarea required rows={12} value={content} onChange={(e) => setContent(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none font-mono text-sm" placeholder="# Your article content...&#10;&#10;Write in Markdown format.&#10;&#10;## Subheading&#10;&#10;Paragraph text here..." />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-inherit">
                  Publish Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </form>

              {/* Help */}
              <div className="text-center">
                <p className="text-meta mb-2">Markdown Tips</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["**bold**", "*italic*", "# Heading", "[link](url)", "- list item"].map((tip) => (
                    <code key={tip} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "var(--card-bg)", color: "var(--text-secondary)", border: "1px solid var(--card-border)" }}>{tip}</code>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
