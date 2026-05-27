"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PreviewPage = {
  label: string;
  href: string;
  description: string;
};

type ResponsivePreviewShowcaseProps = {
  title: string;
  description: string;
  caseHref: string;
  mainHref: string;
  accentClassName?: string;
  pages: PreviewPage[];
};

export function ResponsivePreviewShowcase({
  title,
  description,
  caseHref,
  mainHref,
  accentClassName,
  pages,
}: ResponsivePreviewShowcaseProps) {
  const [activeHref, setActiveHref] = useState(pages[0]?.href ?? mainHref);
  const activePage = useMemo(
    () => pages.find((page) => page.href === activeHref) ?? pages[0],
    [activeHref, pages],
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container className="py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <Badge>手机端效果</Badge>
              <span className="text-sm font-medium text-slate-700">桌面端 / 手机端对比预览</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="/projects" variant="ghost">
                返回作品集
              </Button>
              <Button href={mainHref} variant="secondary">
                打开原作品
              </Button>
              <Button href={caseHref} variant="ghost">
                案例说明
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge className={accentClassName}>Responsive Preview</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>
          <div className="rounded-3xl border border-white bg-white/70 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">当前预览页面</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{activePage?.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pages.map((page) => (
                <button
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    activeHref === page.href
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-slate-950",
                  )}
                  key={page.href}
                  onClick={() => setActiveHref(page.href)}
                  type="button"
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_430px]">
          <PreviewFrame
            href={activeHref}
            label="桌面端网页效果"
            subtitle="客户在电脑浏览器里看到的页面"
            variant="desktop"
          />
          <PreviewFrame
            href={activeHref}
            label="手机端真实效果"
            subtitle="客户用手机打开时看到的页面"
            variant="mobile"
          />
        </div>
      </Container>
    </main>
  );
}

function PreviewFrame({
  href,
  label,
  subtitle,
  variant,
}: {
  href: string;
  label: string;
  subtitle: string;
  variant: "desktop" | "mobile";
}) {
  const isMobile = variant === "mobile";

  return (
    <section className="min-w-0 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">{label}</h2>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        <Button href={href} variant="secondary">
          新窗口查看
        </Button>
      </div>

      <div
        className={cn(
          "mx-auto overflow-hidden border bg-slate-950 shadow-2xl",
          isMobile
            ? "w-full max-w-[390px] rounded-[2rem] border-slate-900 p-3"
            : "rounded-2xl border-slate-200",
        )}
      >
        {isMobile ? (
          <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-slate-700" />
        ) : (
          <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-300" />
            <span className="size-3 rounded-full bg-emerald-400" />
            <span className="ml-3 truncate rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {href}
            </span>
          </div>
        )}
        <iframe
          className={cn(
            "block w-full border-0 bg-white",
            isMobile ? "h-[720px] rounded-[1.35rem]" : "h-[720px]",
          )}
          src={href}
          title={label}
        />
      </div>
    </section>
  );
}
