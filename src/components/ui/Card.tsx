import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition-colors hover:border-cyan-200",
        className,
      )}
      {...props}
    />
  );
}
