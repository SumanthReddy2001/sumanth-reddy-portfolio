"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setStatus(response.ok ? "Thanks. Your message has been sent." : "Something went wrong. Please try again.");
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful"
          description="Use the form below or connect directly through email, LinkedIn, GitHub, or WhatsApp."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Your email" required />
            </div>
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Tell me about your opportunity or project." required />
            <Button type="submit">Send Message</Button>
            {status ? <p className="text-sm text-slate-300">{status}</p> : null}
          </form>
          <div className="space-y-4">
            {[
              { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail, value: siteConfig.email },
              { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin, value: "LinkedIn Profile" },
              { label: "GitHub", href: siteConfig.github, icon: Github, value: "GitHub Profile" },
              {
                label: "WhatsApp",
                href: `${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Sumanth, I visited your portfolio and would like to connect.")}`,
                icon: MessageCircle,
                value: siteConfig.whatsappRaw
              }
            ].map(({ label, href, icon: Icon, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass-card flex items-center justify-between gap-4 p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{label}</p>
                    <p className="text-sm text-slate-400">{value}</p>
                  </div>
                </div>
                <span className="text-sm text-blue-300">Open</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
