import Link from "next/link";

export default function BlogCard({ slug, title, excerpt, date, category }: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}) {
  return (
    <Link href={`/blog/${slug}`} className="card p-6 flex flex-col gap-3 group no-underline">
      <div className="flex items-center gap-3 text-small">
        <span className="text-[#e8739a] font-medium uppercase tracking-wider">{category}</span>
        <span className="text-[var(--text-tertiary)]">·</span>
        <span className="text-[var(--text-secondary)]">{date}</span>
      </div>
      <h3 className="heading-md group-hover:text-[#e8739a] transition-colors">{title}</h3>
      <p className="text-body text-[var(--white-50)] flex-1 line-clamp-3">{excerpt}</p>
      <span className="text-small text-[#e8739a] pt-2">Read More →</span>
    </Link>
  );
}
