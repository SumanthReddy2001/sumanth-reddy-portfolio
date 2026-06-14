import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = [
    "",
    "/blog",
    "/admin",
    "/admin/login"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date()
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...base, ...posts];
}
