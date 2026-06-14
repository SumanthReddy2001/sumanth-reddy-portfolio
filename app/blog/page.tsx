import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

type SearchParams = { q?: string; category?: string };

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on RAG, AI agents, workflow automation, and practical AI engineering."
};

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const query = resolved.q?.toLowerCase() ?? "";
  const category = resolved.category?.toLowerCase() ?? "";
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  const filtered = blogPosts.filter((post) => {
    const matchesQuery =
      !query ||
      [post.title, post.excerpt, post.category, post.tags.join(" "), post.content]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesCategory = !category || post.category.toLowerCase() === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Insights, notes, and production learnings"
        description="Search by keyword or category to explore sample posts."
      />
      <form className="mt-8 grid gap-3 md:grid-cols-[1fr_220px_auto]">
        <input
          name="q"
          defaultValue={resolved.q ?? ""}
          placeholder="Search articles"
          className="h-11 rounded-xl border border-border bg-white/5 px-4 text-sm outline-none"
        />
        <select
          name="category"
          defaultValue={resolved.category ?? ""}
          className="h-11 rounded-xl border border-border bg-white/5 px-4 text-sm outline-none"
        >
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
          Search
        </button>
      </form>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Link key={item} href={`/blog?category=${encodeURIComponent(item)}`}>
            <Badge className="cursor-pointer border-white/10 bg-white/5 text-slate-200">{item}</Badge>
          </Link>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="glass-card p-6">
            <Badge className="mb-4 border-blue-400/20 bg-blue-500/10 text-blue-200">{post.category}</Badge>
            <h2 className="text-2xl font-semibold text-white">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} className="border-white/10 bg-white/5 text-slate-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
