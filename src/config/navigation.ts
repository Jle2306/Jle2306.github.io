export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "服务", href: "/services" },
  { label: "方案", href: "/solutions" },
  { label: "作品", href: "/projects" },
  { label: "价格", href: "/pricing" },
  { label: "流程", href: "/process" },
  { label: "联系", href: "/contact" },
];
