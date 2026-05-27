import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
