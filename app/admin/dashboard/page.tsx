import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin-dashboard";
import { getAdminSession } from "@/lib/auth";
import { blogPosts, experience, projects, skillGroups, achievements } from "@/lib/content";

export default async function DashboardPage() {
  if (!(await getAdminSession())) redirect("/admin/login");

  const counts = {
    Projects: projects.length,
    Posts: blogPosts.length,
    Skills: skillGroups.length,
    Experience: experience.length,
    Achievements: achievements.length
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold text-white">Admin Dashboard</h1>
          <p className="mt-2 text-slate-300">Manage projects, blog posts, skills, experience, and credentials.</p>
        </div>
        <a href="/api/admin/logout" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200">
          Logout
        </a>
      </div>
      <AdminDashboard counts={counts} />
    </main>
  );
}
