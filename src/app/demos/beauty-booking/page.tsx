import type { Metadata } from "next";

import { BeautyBookingClient } from "@/app/demos/beauty-booking/BeautyBookingClient";

export const metadata: Metadata = {
  title: "美容院预约系统 Demo | JJ Studio",
  description: "花屿 Skin Care 皮肤管理工作室预约系统 Demo，包含服务选择、时间选择和预约表单。",
};

export default function BeautyBookingPage() {
  return <BeautyBookingClient />;
}
