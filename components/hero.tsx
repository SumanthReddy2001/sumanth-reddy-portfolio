"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MessageCircle, Linkedin } from "lucide-react";
import { heroSummary, siteConfig } from "@/lib/content";

const socials = [
  { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.github, icon: Github, label: "GitHub" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  { href: siteConfig.whatsapp, icon: MessageCircle, label: "WhatsApp" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-10 md:pb-20 md:pt-16">
      <div className="absolute inset-0 -z-10 grid-overlay opacity-60" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <Badge className="border-blue-400/20 bg-blue-500/10 text-blue-200">Available for AI roles</Badge>
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300/80">Sumanth Reddy</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              AI Engineer building{" "}
              <span className="text-gradient">production-ready intelligent systems</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-xl">{heroSummary}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.resumeUrl} size="lg" className="shadow-glow">
              Download Resume
            </ButtonLink>
            <ButtonLink href="/#projects" variant="outline" size="lg">
              View Projects
            </ButtonLink>
            <ButtonLink href="/#contact" variant="ghost" size="lg">
              Contact Me
            </ButtonLink>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-fuchsia-500/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_40%)]" />
            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile</p>
                  <p className="mt-2 text-2xl font-semibold text-white">AI Engineer</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                  India
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 bg-white/5">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                      alt="Professional portrait placeholder for Sumanth Reddy"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 70vw, 420px"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
                  <p className="text-sm font-medium text-white">Building premium AI experiences</p>
                  <p className="mt-1 text-sm text-slate-300">
                    LLMs, RAG, AI agents, workflow automation, and machine learning.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {["Generative AI", "RAG Systems", "LLM Apps", "Automation"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
