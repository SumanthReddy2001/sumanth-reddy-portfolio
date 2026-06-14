import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="text-sm text-slate-400">AI Engineer | Generative AI | LLM Apps | RAG | Automation</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/admin" className="hover:text-white">Admin</Link>
          <a href={siteConfig.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteConfig.github} className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
