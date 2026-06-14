"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLoginForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });

    if (response.ok) {
      router.push(nextPath);
      router.refresh();
      return;
    }

    const data = await response.json().catch(() => null);
    setError(data?.error ?? "Invalid credentials");
  }

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-md items-center px-4 py-16">
      <form onSubmit={onSubmit} className="glass-card w-full space-y-4 p-6">
        <h1 className="text-3xl font-semibold text-white">Admin Login</h1>
        <p className="text-sm text-slate-300">Secure access for portfolio content management.</p>
        <Input name="email" type="email" placeholder="Admin email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
      </form>
    </main>
  );
}
