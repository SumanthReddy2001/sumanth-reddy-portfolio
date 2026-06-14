import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-primary text-primary-foreground hover:translate-y-[-1px] hover:shadow-glow",
  secondary: "bg-secondary text-secondary-foreground hover:translate-y-[-1px] hover:opacity-90",
  outline: "border border-border bg-transparent text-foreground hover:bg-white/5",
  ghost: "bg-transparent text-foreground hover:bg-white/5"
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  default: "h-11 px-6",
  lg: "h-12 px-7 text-base"
};

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  href: string;
};

export function ButtonLink({ className, variant = "default", size = "default", href, ...props }: AnchorProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} href={href} {...props} />
  );
}
