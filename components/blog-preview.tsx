"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function BlogPreview() {
  return (
    <section id="blog-preview" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on building production AI systems"
          description="A sample blog surface with categories, rich text support, and SEO-friendly post pages."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-card p-6"
            >
              <Badge className="mb-4 border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">{post.category}</Badge>
              <h3 className="text-2xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-sm font-medium text-blue-300 hover:text-blue-200">
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
