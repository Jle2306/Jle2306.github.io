import type { Metadata } from "next";
import { Suspense } from "react";

import { RestaurantCheckoutClient } from "@/app/demos/restaurant-menu/checkout/RestaurantCheckoutClient";

export const metadata: Metadata = {
  title: "点餐结算 | 巷口食堂",
  description: "巷口食堂独立点餐结算页，选择菜品、堂食或外带并提交订单。",
};

export default function RestaurantCheckoutPage() {
  return (
    <Suspense>
      <RestaurantCheckoutClient />
    </Suspense>
  );
}
