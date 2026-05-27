import type { Metadata } from "next";

import { RestaurantMenuClient } from "@/app/demos/restaurant-menu/RestaurantMenuClient";

export const metadata: Metadata = {
  title: "美食店点餐小程序 Demo | JJ Studio",
  description: "巷口食堂扫码点餐、购物车和结账确认 Demo，适合餐饮店菜单与收银流程展示。",
};

export default function RestaurantMenuPage() {
  return <RestaurantMenuClient />;
}
