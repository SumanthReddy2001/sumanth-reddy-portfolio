"use client";

import { motion } from "framer-motion";
import { learningItems } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Learning() {
  return (
    <section id="learning" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning"
          title="Currently exploring"
          description="These are the next layers I’m actively deepening to stay ahead in modern AI systems."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-card flex items-center justify-between p-5"
            >
              <span className="text-lg font-medium text-white">{item}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
