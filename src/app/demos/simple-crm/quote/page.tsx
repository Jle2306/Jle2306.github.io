import type { Metadata } from "next";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { QuoteGenerateButton } from "@/app/demos/simple-crm/quote/QuoteGenerateButton";

export const metadata: Metadata = {
  title: "报价单生成 | 设计服务工作室 CRM",
  description: "设计服务工作室 CRM 的报价单生成页面案例。",
};

const items = [
  ["品牌官网设计", "1 套", "¥6,000"],
  ["响应式前端开发", "1 套", "¥8,000"],
  ["预约表单与数据结构", "1 项", "¥2,500"],
  ["Vercel 部署与基础 SEO", "1 项", "¥1,500"],
];

export default function QuotePage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/simple-crm-dashboard"
        links={[
          { label: "CRM 后台", href: "/demos/simple-crm" },
          { label: "手机端小程序", href: "/demos/simple-crm/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#f4f1ea] text-[#1f2933]">
        <div className="grid lg:grid-cols-[280px_1fr]">
          <aside className="bg-[#1f2933] p-8 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">STUDIO CRM</p>
            <h1 className="mt-4 text-3xl font-semibold">报价单生成</h1>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              服务型团队常见需求：根据客户、项目范围和服务项快速生成报价单。
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-300">
              <Button className="justify-center bg-white text-[#1f2933]" href="/demos/simple-crm" variant="secondary">
                返回 CRM 首页
              </Button>
              <span>客户资料</span>
              <span>服务项目</span>
              <span>报价明细</span>
              <span>付款节点</span>
              <span>导出记录</span>
            </div>
          </aside>

          <main className="p-5 sm:p-8">
            <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-amber-700">QUOTE #JJ-2026-0524</p>
                    <h2 className="mt-2 text-4xl font-semibold">明远教育咨询官网改版</h2>
                    <p className="mt-3 text-sm text-slate-500">客户：刘老师 / 有效期：7 天 / 付款方式：50% 预付款 + 50% 上线前</p>
                  </div>
                  <QuoteGenerateButton />
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500">
                      <tr>
                        {["服务项", "数量", "金额"].map((head) => (
                          <th className="px-5 py-4" key={head}>{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(([name, count, price]) => (
                        <tr className="border-t border-slate-100" key={name}>
                          <td className="px-5 py-4 font-medium">{name}</td>
                          <td className="px-5 py-4 text-slate-500">{count}</td>
                          <td className="px-5 py-4 font-semibold">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {["小计 ¥18,000", "优惠 ¥1,000", "合计 ¥17,000"].map((item) => (
                    <div className="rounded-2xl bg-[#f4f1ea] p-5 text-xl font-semibold" key={item}>{item}</div>
                  ))}
                </div>
              </section>

              <section className="grid gap-5">
                {[
                  ["项目范围", "5 个页面、响应式设计、咨询表单、案例展示、基础 SEO。"],
                  ["交付周期", "预计 10-14 个工作日，分为原型确认、视觉开发、上线检查三个阶段。"],
                  ["备注", "报价不含第三方付费服务、短信、域名和服务器费用。"],
                ].map(([title, desc]) => (
                  <div className="rounded-3xl bg-white p-6 shadow-sm" key={title}>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                ))}
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
