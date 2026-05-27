"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

const serviceLabels = ["学生项目技术支持", "网站开发", "小程序页面", "轻量后台"];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/demos")) {
    return null;
  }

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link className="inline-flex items-center gap-3" href="/">
              <span className="flex size-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
                JJ
              </span>
              <span className="font-semibold text-slate-950">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-950">导航</h2>
            <nav className="mt-4 grid gap-3" aria-label="底部导航">
              {mainNav.map((item) => (
                <Link
                  className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-950">服务方向</h2>
            <ul className="mt-4 grid gap-3">
              {serviceLabels.map((label) => (
                <li className="text-sm text-slate-600" key={label}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>简洁、专业、面向转化的数字服务框架。</p>
        </div>
      </Container>
    </footer>
  );
}
