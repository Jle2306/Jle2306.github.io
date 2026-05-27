"use client";

import { useState } from "react";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { restaurantCategories, restaurantMenuItems } from "@/app/demos/restaurant-menu/data";

export function RestaurantMenuClient() {
  const [activeCategory, setActiveCategory] = useState("招牌套餐");
  const visibleItems = restaurantMenuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/restaurant-menu-system"
        links={[
          { label: "商家经营后台", href: "/demos/restaurant-menu/admin" },
          { label: "手机端小程序", href: "/demos/restaurant-menu/mobile" },
        ]}
      />
      <div className="bg-[#120f0a] text-orange-50">
        <header className="border-b border-orange-300/20 bg-[#120f0a]/95">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">LANE BISTRO</p>
              <p className="mt-1 text-xl font-semibold">巷口食堂</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-orange-100/70 md:flex">
              <a href="#menu">菜单</a>
              <a href="#popular">热卖</a>
              <a href="#notice">门店公告</a>
            </nav>
            <Button href="/demos/restaurant-menu/checkout">开始点餐</Button>
          </Container>
        </header>

        <section>
          <Container className="grid min-h-[500px] gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="min-w-0 rounded-[2rem] border border-orange-300/20 bg-orange-50 p-6 text-stone-950">
              <p className="text-sm font-black text-orange-600">今日推荐</p>
              <h2 className="mt-3 text-5xl font-black">慢炖牛肉饭套餐</h2>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                慢炖牛肉、溏心蛋、时蔬、例汤。适合午餐高峰预点，到店直接取餐。
              </p>
              <div className="mt-8 grid gap-3">
                {["本店招牌", "午市热卖 86 份", "搭配柠檬气泡水更划算"].map((item) => (
                  <p className="rounded-xl border-2 border-stone-950 bg-white px-4 py-3 text-sm font-black" key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="min-w-0 lg:pl-8">
              <p className="inline-flex border border-orange-300/40 bg-orange-500 px-4 py-2 text-sm font-black text-white">社区轻食 · 堂食 / 外带 / 预点单</p>
              <h1 className="mt-5 text-4xl font-black leading-none tracking-tight text-orange-50 sm:text-5xl lg:text-6xl">
                午餐高峰不用排队，扫码先看菜单
              </h1>
              <p className="mt-6 text-lg leading-8 text-orange-100/75">
                这是一个餐饮门店独立点餐网站。首页负责展示品牌、热卖菜品、营业信息和门店公告；点击开始点餐后进入独立结算页。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/demos/restaurant-menu/checkout">开始点餐</Button>
                <Button href="#menu" variant="secondary">先看菜单</Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["营业中 10:30-21:30", "平均出餐 12 分钟", "支持堂食/外带"].map((item) => (
                  <div className="border border-orange-300/20 bg-white/10 p-5" key={item}>
                    <p className="text-lg font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-orange-50 text-stone-950" id="menu">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-600">MENU</p>
                <h2 className="mt-3 text-4xl font-semibold">今日菜单</h2>
              </div>
              <Button href="/demos/restaurant-menu/checkout" variant="secondary">进入点餐页</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {restaurantCategories.map((category) => (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    activeCategory === category
                      ? "border-orange-300 bg-orange-50 text-orange-700"
                      : "border-stone-200 bg-white text-stone-600"
                  }`}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <Card className="bg-white" key={item.name}>
                  <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#fde7c8,#fff6df)]" />
                  <p className="mt-5 text-sm font-semibold text-orange-600">{item.tag}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-semibold">¥{item.price}</span>
                    <Button href={`/demos/restaurant-menu/checkout?item=${encodeURIComponent(item.name)}`}>
                      点这个
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[#120f0a] text-orange-50" id="notice">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["门店公告", "新品番茄肥牛乌冬已上线，晚餐时段限量供应。"],
                ["会员福利", "工作日 14:00-17:00 到店满 38 元可领取饮品券。"],
                ["取餐说明", "外带订单建议 20 分钟内到店取餐，高峰期请留意叫号。"],
              ].map(([title, desc]) => (
                <Card className="bg-white" key={title}>
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{desc}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10">
              <DemoCTA />
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
