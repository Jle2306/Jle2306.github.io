import type { Metadata } from "next";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "经营看板 | 巷口食堂",
  description: "餐饮门店经营后台，展示订单、客流、营收、毛利、热卖菜品和时段分析。",
};

const stats = [
  ["今日订单", "186", "+18%"],
  ["到店客流", "243", "+12%"],
  ["营业额", "¥7,842", "+21%"],
  ["预估毛利", "¥3,136", "40.0%"],
  ["客单价", "¥42.1", "+6%"],
  ["外带占比", "31%", "+4%"],
];

const hotItems = [
  ["慢炖牛肉饭套餐", "64 份", "¥2,048", "41%"],
  ["黑椒鸡腿饭套餐", "48 份", "¥1,392", "33%"],
  ["柠檬气泡水", "72 杯", "¥1,080", "68%"],
  ["香辣鸡翅", "39 份", "¥702", "45%"],
];

const timeSlots = [
  ["10:30", "18 单", "¥612"],
  ["11:30", "46 单", "¥1,932"],
  ["12:30", "52 单", "¥2,210"],
  ["14:00", "19 单", "¥684"],
  ["18:30", "38 单", "¥1,596"],
  ["20:00", "13 单", "¥508"],
];

const kitchenOrders = [
  ["A12", "牛肉饭 x1 / 气泡水 x1", "制作中", "8 分钟"],
  ["B03", "鸡腿饭 x2 / 薯角 x1", "待出餐", "12 分钟"],
  ["外带 027", "番茄肥牛乌冬 x1", "待制作", "2 分钟"],
  ["C08", "牛肉饭 x1 / 鸡翅 x1", "已完成", "16 分钟"],
];

export default function RestaurantAdminPage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/restaurant-menu-system"
        links={[
          { label: "餐厅首页", href: "/demos/restaurant-menu" },
          { label: "手机端小程序", href: "/demos/restaurant-menu/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#10130f] text-lime-50">
        <div className="grid lg:grid-cols-[260px_1fr]">
          <aside className="border-r border-lime-400/10 bg-[#171d12] p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-lime-300">LANE OPS</p>
            <h1 className="mt-3 text-2xl font-semibold">巷口食堂经营后台</h1>
            <Button className="mt-6 w-full border-lime-300/20 bg-lime-300/10 text-lime-50" href="/demos/restaurant-menu" variant="secondary">
              返回餐厅首页
            </Button>
            <nav className="mt-10 grid gap-2 text-sm text-lime-100/70">
              {["经营总览", "实时订单", "后厨看板", "菜品分析", "库存预警", "会员券"].map((item) => (
                <span className="rounded-xl px-4 py-3 hover:bg-lime-300/10" key={item}>
                  {item}
                </span>
              ))}
            </nav>
          </aside>

          <main className="p-5 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-lime-300">今日经营 · 2026-05-24</p>
                <h2 className="mt-2 text-4xl font-semibold">数据概览</h2>
              </div>
              <div className="rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-200">
                营业中 · 最近更新 2 分钟前
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {stats.map(([label, value, change]) => (
                <div className="rounded-2xl border border-lime-300/10 bg-white/[0.06] p-5" key={label}>
                  <p className="text-sm text-lime-100/60">{label}</p>
                  <p className="mt-3 text-2xl font-semibold">{value}</p>
                  <p className="mt-2 text-xs text-lime-300">{change}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-3xl border border-lime-300/10 bg-white/[0.06] p-6">
                <h3 className="text-2xl font-semibold">实时订单与后厨状态</h3>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="text-lime-100/50">
                      <tr>
                        {["桌号/订单", "菜品", "状态", "等待时长"].map((head) => (
                          <th className="px-3 py-3" key={head}>{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {kitchenOrders.map(([no, items, status, wait]) => (
                        <tr className="border-t border-lime-300/10" key={no}>
                          <td className="px-3 py-4 font-semibold">{no}</td>
                          <td className="px-3 py-4 text-lime-100/75">{items}</td>
                          <td className="px-3 py-4">
                            <span className="rounded-full bg-lime-300/10 px-3 py-1 text-lime-200">{status}</span>
                          </td>
                          <td className="px-3 py-4 text-lime-100/75">{wait}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-3xl border border-lime-300/10 bg-white/[0.06] p-6">
                <h3 className="text-2xl font-semibold">热卖菜品</h3>
                <div className="mt-5 grid gap-4">
                  {hotItems.map(([name, count, amount, margin]) => (
                    <div className="rounded-2xl bg-black/20 p-4" key={name}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-lime-300">{count}</p>
                      </div>
                      <div className="mt-3 flex justify-between text-sm text-lime-100/60">
                        <span>{amount}</span>
                        <span>毛利 {margin}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="mt-8 rounded-3xl border border-lime-300/10 bg-white/[0.06] p-6">
              <h3 className="text-2xl font-semibold">时段客流与营收</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
                {timeSlots.map(([time, orders, amount]) => (
                  <div className="rounded-2xl bg-black/20 p-4" key={time}>
                    <p className="text-sm text-lime-100/50">{time}</p>
                    <p className="mt-3 text-xl font-semibold">{orders}</p>
                    <p className="mt-2 text-sm text-lime-300">{amount}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
