import type { Metadata } from "next";
import { Suspense } from "react";

import { PrivateOrderPageClient } from "@/app/demos/private-order/order/PrivateOrderPageClient";

export const metadata: Metadata = {
  title: "提交订单 | 山间果铺",
  description: "山间果铺独立订单提交页，选择商品、填写收货信息并提交订单。",
};

export default function PrivateOrderFormPage() {
  return (
    <Suspense>
      <PrivateOrderPageClient />
    </Suspense>
  );
}
