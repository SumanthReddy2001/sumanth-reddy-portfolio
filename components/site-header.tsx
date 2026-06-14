import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import { Sparkles } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-glow">
            SR
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
            <p className="text-xs text-slate-400">AI Engineer</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href={siteConfig.resumeUrl} size="sm" className="bg-white text-slate-950 hover:bg-slate-100">
            <Sparkles className="h-4 w-4" />
            Resume
          </ButtonLink>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
