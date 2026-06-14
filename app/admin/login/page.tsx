import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure login for the portfolio admin dashboard"
};

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const resolved = await searchParams;
  return <AdminLoginForm nextPath={resolved.next ?? "/admin/dashboard"} />;
}
