import { Badge } from "@/components/ui/badge";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Badge className="mb-4 border-blue-400/20 bg-blue-500/10 text-blue-200">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
