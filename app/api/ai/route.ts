import { NextResponse } from "next/server";
import { z } from "zod";
import { answerFromKnowledgeBase } from "@/lib/assistant";

const schema = z.object({ query: z.string().min(1) });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }
  return NextResponse.json(answerFromKnowledgeBase(parsed.data.query));
}
