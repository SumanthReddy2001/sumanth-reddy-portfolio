import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-4 py-16 text-center">
      <div className="glass-card space-y-4 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">404</p>
        <h1 className="text-4xl font-semibold text-white">Page not found</h1>
        <p className="text-slate-300">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="inline-block rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
          Return home
        </Link>
      </div>
    </main>
  );
}
