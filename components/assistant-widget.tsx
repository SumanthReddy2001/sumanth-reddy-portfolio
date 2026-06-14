"use client";

import { useState } from "react";
import { MessageSquareQuote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AssistantWidget() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("Ask me about Sumanth's projects, skills, resume, or contact details.");

  const ask = async () => {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });
    const data = await response.json().catch(() => null);
    setAnswer(data?.answer ?? "I could not generate an answer right now.");
  };

  return (
    <section id="assistant" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card grid gap-8 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI Assistant
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">Sumanth AI</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A local knowledge-base assistant that can later be connected to the OpenAI API without changing the UI.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MessageSquareQuote className="h-4 w-4 text-blue-300" />
              Ask anything about the portfolio
            </div>
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. What projects has Sumanth built?"
            />
            <Button type="button" onClick={ask} className="w-full">
              Get Answer
            </Button>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
