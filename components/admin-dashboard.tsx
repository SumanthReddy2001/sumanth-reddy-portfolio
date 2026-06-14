"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

function SectionForm({
  title,
  entity,
  fields
}: {
  title: string;
  entity: string;
  fields: { name: string; placeholder: string; type?: string }[];
}) {
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entity, action: "create", ...payload })
    });
    const data = await response.json().catch(() => null);
    setMessage(response.ok ? data?.message ?? "Saved" : data?.error ?? "Unable to save");
  }

  return (
    <form onSubmit={onSubmit} className="glass-card space-y-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <Badge className="border-white/10 bg-white/5 text-slate-200">{entity}</Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Input name="id" placeholder="Record ID for edit/delete" />
        <select
          name="action"
          defaultValue="create"
          className="h-11 rounded-xl border border-border bg-white/5 px-4 text-sm outline-none"
        >
          <option value="create">Create</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>
      {fields.map((field) =>
        field.type === "textarea" ? (
          <Textarea key={field.name} name={field.name} placeholder={field.placeholder} />
        ) : (
          <Input key={field.name} name={field.name} type={field.type ?? "text"} placeholder={field.placeholder} />
        )
      )}
      <Button type="submit">Save</Button>
      {message ? <p className="text-sm text-slate-300">{message}</p> : null}
    </form>
  );
}

export function AdminDashboard({ counts }: { counts: Record<string, number> }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(counts).map(([label, value]) => (
          <div key={label} className="glass-card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
            <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <SectionForm
          title="Add Project"
          entity="project"
          fields={[
            { name: "title", placeholder: "Project title" },
            { name: "slug", placeholder: "project-slug" },
            { name: "description", placeholder: "Project description", type: "textarea" },
            { name: "architecture", placeholder: "Architecture summary", type: "textarea" },
            { name: "tech", placeholder: "Technologies, comma separated" },
            { name: "githubUrl", placeholder: "GitHub URL" },
            { name: "demoUrl", placeholder: "Demo URL" },
            { name: "imageUrl", placeholder: "Image URL" }
          ]}
        />
        <SectionForm
          title="Upload Blog"
          entity="blog"
          fields={[
            { name: "title", placeholder: "Blog title" },
            { name: "slug", placeholder: "blog-slug" },
            { name: "excerpt", placeholder: "Blog excerpt", type: "textarea" },
            { name: "content", placeholder: "Markdown content", type: "textarea" },
            { name: "tags", placeholder: "Tags, comma separated" },
            { name: "category", placeholder: "Category" }
          ]}
        />
        <SectionForm
          title="Update Skills"
          entity="skill-group"
          fields={[
            { name: "category", placeholder: "Skill category" },
            { name: "items", placeholder: "Skills, comma separated" }
          ]}
        />
        <SectionForm
          title="Update Experience"
          entity="experience"
          fields={[
            { name: "company", placeholder: "Company" },
            { name: "role", placeholder: "Role" },
            { name: "duration", placeholder: "Duration" },
            { name: "highlights", placeholder: "Highlights, comma separated", type: "textarea" }
          ]}
        />
        <SectionForm
          title="Update Achievements"
          entity="achievement"
          fields={[
            { name: "title", placeholder: "Achievement title" },
            { name: "issuer", placeholder: "Issuer" },
            { name: "description", placeholder: "Description", type: "textarea" }
          ]}
        />
        <SectionForm
          title="Upload Certificates"
          entity="certificate"
          fields={[
            { name: "title", placeholder: "Certificate title" },
            { name: "issuer", placeholder: "Issuer" },
            { name: "url", placeholder: "Certificate URL" },
            { name: "description", placeholder: "Description", type: "textarea" }
          ]}
        />
      </div>
    </div>
  );
}
