import type { Metadata } from "next";

import { PrivateOrderClient } from "@/app/demos/private-order/PrivateOrderClient";

export const metadata: Metadata = {
  title: "私域订单收集系统 Demo | JJ Studio",
  description: "山间果铺私域订单收集 Demo，包含商品选择、订单摘要和订单表单。",
};

export default function PrivateOrderPage() {
  return <PrivateOrderClient />;
}
