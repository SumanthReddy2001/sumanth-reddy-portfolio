"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/admin", label: "Admin" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-md md:hidden">
          <div className="glass-card flex h-full flex-col p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 flex flex-1 flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <ButtonLink href={siteConfig.resumeUrl} className="w-full" onClick={() => setOpen(false)}>
                Download Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
