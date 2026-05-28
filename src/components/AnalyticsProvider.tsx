"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initAnalytics(pathname);
    return cleanup;
  }, [pathname]);

  return <>{children}</>;
}
