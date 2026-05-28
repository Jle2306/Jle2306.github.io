import type { Metadata } from "next";

import { AdminClient } from "./AdminClient";

export const metadata: Metadata = {
  title: "JJ Studio 后台管理",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  return <AdminClient />;
}
