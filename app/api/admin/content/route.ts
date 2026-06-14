import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  entity: z.enum(["project", "blog", "skill-group", "experience", "achievement", "certificate"]),
  action: z.enum(["create", "update", "delete"]),
  id: z.string().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  architecture: z.string().optional(),
  tech: z.string().optional(),
  githubUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  imageUrl: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  tags: z.string().optional(),
  category: z.string().optional(),
  categoryName: z.string().optional(),
  items: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  duration: z.string().optional(),
  highlights: z.string().optional(),
  issuer: z.string().optional(),
  url: z.string().optional()
});

const csv = (value?: string) =>
  value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

const notConfigured = () =>
  NextResponse.json(
    {
      ok: false,
      message:
        "DATABASE_URL is not configured yet. Prisma schema is ready, and this endpoint will persist data once Postgres is connected."
    },
    { status: 503 }
  );

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid admin payload" }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    return notConfigured();
  }

  try {
    const data = parsed.data;
    const requiresId = data.action !== "create";
    if (requiresId && !data.id) {
      return NextResponse.json({ error: "Record id is required for update/delete" }, { status: 400 });
    }

    if (data.entity === "project") {
      if (data.action === "delete") {
        await prisma.project.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.project.update({
          where: { id: data.id ?? "" },
          data: {
            title: data.title,
            slug: data.slug,
            description: data.description,
            architecture: data.architecture,
            tech: csv(data.tech),
            githubUrl: data.githubUrl,
            demoUrl: data.demoUrl,
            imageUrl: data.imageUrl
          }
        });
      } else {
        await prisma.project.create({
          data: {
            title: data.title ?? "Untitled project",
            slug: data.slug ?? `project-${Date.now()}`,
            description: data.description ?? "",
            architecture: data.architecture ?? "",
            tech: csv(data.tech),
            githubUrl: data.githubUrl ?? "#",
            demoUrl: data.demoUrl ?? "#",
            imageUrl: data.imageUrl ?? "",
            featured: true
          }
        });
      }
    }

    if (data.entity === "blog") {
      if (data.action === "delete") {
        await prisma.blogPost.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.blogPost.update({
          where: { id: data.id ?? "" },
          data: {
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            tags: csv(data.tags),
            category: data.category
          }
        });
      } else {
        await prisma.blogPost.create({
          data: {
            title: data.title ?? "Untitled post",
            slug: data.slug ?? `post-${Date.now()}`,
            excerpt: data.excerpt ?? "",
            content: data.content ?? "",
            tags: csv(data.tags),
            category: data.category ?? "General",
            published: true,
            publishedAt: new Date()
          }
        });
      }
    }

    if (data.entity === "skill-group") {
      if (data.action === "delete") {
        await prisma.skillGroup.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.skillGroup.update({
          where: { id: data.id ?? "" },
          data: {
            category: data.categoryName ?? data.category ?? "General",
            items: csv(data.items)
          }
        });
      } else {
        await prisma.skillGroup.create({
          data: {
            category: data.categoryName ?? data.category ?? "General",
            items: csv(data.items)
          }
        });
      }
    }

    if (data.entity === "experience") {
      if (data.action === "delete") {
        await prisma.experience.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.experience.update({
          where: { id: data.id ?? "" },
          data: {
            company: data.company,
            role: data.role,
            duration: data.duration,
            highlights: csv(data.highlights)
          }
        });
      } else {
        await prisma.experience.create({
          data: {
            company: data.company ?? "",
            role: data.role ?? "",
            duration: data.duration ?? "",
            highlights: csv(data.highlights)
          }
        });
      }
    }

    if (data.entity === "achievement") {
      if (data.action === "delete") {
        await prisma.achievement.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.achievement.update({
          where: { id: data.id ?? "" },
          data: {
            title: data.title,
            issuer: data.issuer,
            description: data.description
          }
        });
      } else {
        await prisma.achievement.create({
          data: {
            title: data.title ?? "",
            issuer: data.issuer ?? "",
            description: data.description ?? ""
          }
        });
      }
    }

    if (data.entity === "certificate") {
      if (data.action === "delete") {
        await prisma.certificate.delete({ where: { id: data.id ?? "" } });
      } else if (data.action === "update") {
        await prisma.certificate.update({
          where: { id: data.id ?? "" },
          data: {
            title: data.title,
            issuer: data.issuer,
            description: data.description,
            url: data.url
          }
        });
      } else {
        await prisma.certificate.create({
          data: {
            title: data.title ?? "",
            issuer: data.issuer ?? "",
            description: data.description ?? "",
            url: data.url ?? ""
          }
        });
      }
    }

    const verb = data.action === "create" ? "created" : data.action === "update" ? "updated" : "deleted";
    return NextResponse.json({ ok: true, message: `${data.entity} ${verb} successfully.` });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Admin mutation failed" }, { status: 500 });
  }
}
