import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/auth";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-cookie";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "");
  const password = String(body?.password ?? "");

  const adminEmail = process.env.ADMIN_EMAIL || "admin@sumanthreddy.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me";

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
    response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: createAdminToken(),
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return response;
}
