"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work that demonstrates applied AI engineering"
          description="Each project card includes the concept, architecture view, and the technologies used to build it."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.03 }}
              className="overflow-hidden glass-card p-0"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-200 backdrop-blur">
                  Project
                </div>
              </div>
              <div className="space-y-5 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="border-white/10 bg-white/5 text-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveSlug(project.slug)}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                  >
                    Architecture Modal
                  </button>
                  <ButtonLink href={project.github} variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                    GitHub
                  </ButtonLink>
                  <ButtonLink href={project.demo} variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </ButtonLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActiveSlug(null)} title={active?.title ?? ""}>
        {active ? (
          <div className="space-y-5 text-slate-300">
            <p className="text-sm leading-7">{active.architecture}</p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7">
              {active.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {active.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ) : null}
      </Dialog>
    </section>
  );
}
