"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Timeline() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="Three-plus years of hands-on AI engineering work across enterprise use cases, automation, and retrieval systems."
        />
        <div className="relative mt-12 space-y-8">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-fuchsia-500 to-transparent md:left-6" />
          {experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-3 h-8 w-8 rounded-full border border-blue-400/30 bg-blue-500/20 shadow-glow md:left-1" />
              <div className="glass-card p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                  </div>
                  <Badge className="w-fit border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">{item.duration}</Badge>
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
