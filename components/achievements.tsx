"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & recognition"
          description="A compact view of professional recognition that reflects reliability and quality."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 p-3 text-blue-200">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
                  <path d="M12 3l2.39 4.84L20 9.27l-4 3.9.94 5.51L12 16.97l-4.94 2.61L8 13.17l-4-3.9 5.61-.43L12 3z" />
                </svg>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-300">{item.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
