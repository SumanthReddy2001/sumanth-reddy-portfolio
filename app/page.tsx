import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Learning } from "@/components/learning";
import { Achievements } from "@/components/achievements";
import { BlogPreview } from "@/components/blog-preview";
import { AssistantWidget } from "@/components/assistant-widget";
import { Contact } from "@/components/contact";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: siteConfig.description
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Timeline />
      <Skills />
      <Projects />
      <Learning />
      <Achievements />
      <BlogPreview />
      <AssistantWidget />
      <Contact />
    </main>
  );
}
