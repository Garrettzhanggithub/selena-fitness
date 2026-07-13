import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const post = getPost(p.slug);
  if (!post) return { title: "Article Not Found" };
  return { title: `${post.title} — Selena Blog` };
}

export default async function BlogPostPage({ params }: Props) {
  const p = await params;
  const post = getPost(p.slug);
  if (!post) notFound();

  return (
    <div className="pt-18">
      <section className="pt-32 pb-8 md:pt-40 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link href="/blog" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors mb-8 inline-block">
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-xs mb-4">
            <span className="font-semibold uppercase tracking-wider text-[var(--accent)]">{post.category}</span>
            <span className="text-[var(--text-tertiary)]">·</span>
            <span className="text-[var(--text-secondary)]">{post.date}</span>
          </div>

          <h1 className="display text-[var(--text-primary)] mb-8">{post.title}</h1>

          <article
            className="prose prose-lg max-w-none prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--accent)] prose-code:bg-[var(--card-bg)] prose-code:text-gray-800"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          <div className="mt-16 pt-8 border-t border-[var(--card-border)]">
            <Link href="/blog" className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function renderMarkdown(content: string): string {
  let html = content
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^---$/gm, "<hr />")
    .replace(
      /\|(.+)\|/g,
      (line) => {
        const cells = line.split("|").filter((c) => c.trim());
        if (cells.every((c) => /^[\s\-:]+$/.test(c))) return "";
        const row = cells.map((c) => `<td>${c.trim()}</td>`).join("");
        return `<tr>${row}</tr>`;
      }
    )
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, (match) => {
      if (match.includes("<table>")) return match;
      return `<table class="w-full my-6 border border-[var(--card-border)] rounded-lg overflow-hidden">${match}</table>`;
    })
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");

  return `<p>${html}</p>`;
}
