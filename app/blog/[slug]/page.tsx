import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts, siteConfig } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const post = blogPosts.find((item) => item.slug === resolved.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article"
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolved = await params;
  const post = blogPosts.find((item) => item.slug === resolved.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Badge className="mb-4 border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">{post.category}</Badge>
      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{post.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{post.excerpt}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} className="border-white/10 bg-white/5 text-slate-200">
            {tag}
          </Badge>
        ))}
      </div>
      <article className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-a:text-blue-300">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
        Want a similar AI system built for your team? Contact {siteConfig.name} for consulting or full-time opportunities.
      </div>
    </main>
  );
}
