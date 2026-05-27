import type { Project } from "@/data/projects";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const visual = getProjectVisual(project.slug);

  return (
    <Card className={cn("flex h-full flex-col overflow-hidden", visual.card)}>
      <div className={cn("mb-5 h-24 rounded-xl p-4", visual.preview)}>
        <div className={visual.previewInner}>
          {visual.lines.map((line) => (
            <span className={line} key={line} />
          ))}
        </div>
      </div>
      <Badge className={visual.badge}>{project.category}</Badge>
      <h3 className="mt-4 text-xl font-semibold text-slate-950">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{project.subtitle}</p>
      <div className="mt-5 grid gap-3 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-950">适合：</span>
          {project.targetUsers.slice(0, 3).join(" / ")}
        </p>
        <p>
          <span className="font-semibold text-slate-950">客户：</span>
          {project.clientName}
        </p>
        <p>
          <span className="font-semibold text-slate-950">交付作品：</span>
          {project.deliverable}
        </p>
        <p>
          <span className="font-semibold text-slate-950">案例结果：</span>
          {project.result}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.workPages.map((page) => (
          <span
            className={cn("rounded-full px-2.5 py-1 text-xs", visual.chip)}
            key={page.href}
          >
            {page.label}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <Button className="w-full" href={`/projects/${project.slug}`} variant="secondary">
          查看案例详情
        </Button>
        <Button className="w-full" href={project.demoUrl}>
          打开作品页面
        </Button>
      </div>
    </Card>
  );
}

function getProjectVisual(slug: string) {
  const base = {
    badge: "",
    card: "",
    chip: "bg-slate-100 text-slate-600",
    lines: ["h-3 w-20 rounded-full bg-white/70", "h-3 w-28 rounded-full bg-white/50", "h-10 w-full rounded-lg bg-white/40"],
    preview: "bg-slate-950",
    previewInner: "grid h-full content-between",
  };

  if (slug.includes("restaurant")) {
    return {
      ...base,
      badge: "bg-orange-50 text-orange-700",
      card: "border-orange-200",
      chip: "bg-orange-50 text-orange-700",
      lines: ["h-4 w-28 bg-orange-400", "h-9 w-full border-2 border-stone-950 bg-orange-50", "h-9 w-4/5 border-2 border-stone-950 bg-white"],
      preview: "rounded-none border-2 border-stone-950 bg-[#120f0a]",
      previewInner: "grid h-full content-between",
    };
  }

  if (slug.includes("course")) {
    return {
      ...base,
      badge: "border-2 border-zinc-950 bg-[#fff06a] text-zinc-950",
      card: "border-zinc-950 shadow-[5px_5px_0_#18181b]",
      chip: "bg-[#fff06a] text-zinc-950",
      lines: ["h-8 w-24 border-2 border-zinc-950 bg-white", "h-8 w-full border-2 border-zinc-950 bg-[#fff06a]", "h-8 w-3/4 border-2 border-zinc-950 bg-white"],
      preview: "rounded-none border-2 border-zinc-950 bg-[#fff06a]",
      previewInner: "grid h-full content-between",
    };
  }

  if (slug.includes("beauty")) {
    return {
      ...base,
      badge: "bg-rose-50 text-rose-700",
      card: "border-rose-100",
      chip: "bg-rose-50 text-rose-700",
      lines: ["mx-auto h-16 w-16 rounded-full bg-white/70", "mx-auto h-3 w-28 rounded-full bg-white", "mx-auto h-3 w-20 rounded-full bg-white/70"],
      preview: "rounded-t-full bg-[linear-gradient(135deg,#f3e7da,#dff6f5)]",
      previewInner: "grid h-full content-center gap-2",
    };
  }

  if (slug.includes("private")) {
    return {
      ...base,
      badge: "bg-lime-100 text-green-800",
      card: "border-green-200",
      chip: "bg-lime-100 text-green-800",
      lines: ["h-10 w-full rounded-2xl bg-lime-300", "h-10 w-2/3 rounded-2xl bg-white", "h-10 w-1/2 rounded-2xl bg-white/70"],
      preview: "bg-green-900",
      previewInner: "grid h-full content-between",
    };
  }

  if (slug.includes("student")) {
    return {
      ...base,
      badge: "bg-sky-50 text-sky-700",
      card: "border-sky-200",
      chip: "bg-sky-50 text-sky-700",
      lines: ["h-5 w-full rounded bg-[#07111d]", "h-12 w-full rounded bg-white", "h-5 w-2/3 rounded bg-sky-200"],
      preview: "bg-[#122033]",
      previewInner: "grid h-full content-between rounded bg-sky-50 p-2",
    };
  }

  return {
    ...base,
    badge: "bg-cyan-50 text-cyan-700",
    card: "border-slate-300 bg-slate-50",
    chip: "bg-cyan-50 text-cyan-700",
    lines: ["h-4 w-28 rounded bg-cyan-300", "h-12 w-full rounded bg-slate-800", "h-4 w-3/4 rounded bg-slate-300"],
    preview: "bg-slate-950",
    previewInner: "grid h-full content-between",
  };
}
