"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 1.1, ease: "easeOut" });
      const unsubscribe = motionValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [inView, motionValue, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Statistics"
          title="Momentum that signals real-world delivery"
          description="A fast-scanning snapshot recruiters can use to assess depth and consistency."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-card p-6"
            >
              <div className="text-4xl font-semibold text-white">
                <Counter value={item.value} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
