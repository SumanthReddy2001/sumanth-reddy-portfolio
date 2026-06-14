"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { aboutText } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Focused on solving business problems with practical AI"
          description={aboutText}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {[
            "Generative AI systems built for measurable outcomes",
            "Enterprise RAG and AI agent orchestration",
            "Scalable APIs, workflows, and knowledge systems"
          ].map((item) => (
            <div key={item} className="glass-card p-5 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
