import type { Metadata } from "next";
import { Suspense } from "react";

import { BeautyBookingBookClient } from "@/app/demos/beauty-booking/book/BeautyBookingBookClient";

export const metadata: Metadata = {
  title: "在线预约 | 悦己皮肤管理工作室",
  description: "悦己皮肤管理工作室独立预约页面，选择护理项目、日期、时间并提交到店信息。",
};

export default function BeautyBookingBookPage() {
  return (
    <Suspense>
      <BeautyBookingBookClient />
    </Suspense>
  );
}
