"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/demos")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
              JJ
            </span>
            <span className="text-sm font-semibold text-slate-950 sm:text-base">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
            {mainNav.map((item) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={siteConfig.contactHref} variant="primary">
              {siteConfig.contactLabel}
            </Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "关闭导航菜单" : "打开导航菜单"}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="sr-only">{isOpen ? "关闭菜单" : "打开菜单"}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-current transition-transform",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-current transition-opacity",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-current transition-transform",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <nav className="grid gap-1" aria-label="移动端主导航">
              {mainNav.map((item) => (
                <Link
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button
              className="mt-4 w-full"
              href={siteConfig.contactHref}
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.contactLabel}
            </Button>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
