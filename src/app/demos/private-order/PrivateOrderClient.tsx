"use client";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fruitProducts } from "@/app/demos/private-order/data";

export function PrivateOrderClient() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/private-order-system"
        links={[
          { label: "商家订单后台", href: "/demos/private-order/admin" },
          { label: "手机端小程序", href: "/demos/private-order/mobile" },
        ]}
      />
      <div className="bg-[#f8fbef] text-[#203318]">
        <header className="border-b border-green-200/70 bg-[#f8fbef]">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-green-700">MOUNTAIN FRUIT</p>
              <p className="mt-1 text-xl font-semibold">山间果铺</p>
            </div>
            <nav className="hidden gap-6 text-sm text-green-900/70 md:flex">
              <a href="#products">当季礼盒</a>
              <a href="#group">团购福利</a>
              <a href="#story">产地故事</a>
            </nav>
            <Button href="/demos/private-order/order">立即下单</Button>
          </Container>
        </header>

        <section className="overflow-hidden bg-[#203318] text-lime-50">
          <Container className="py-10">
            <div className="rounded-[2rem] bg-lime-100 px-6 py-4 text-sm font-semibold text-green-900">
              本周预售开放中 · 企业团购满 20 箱支持专属客服确认
            </div>
            <div className="grid min-h-[500px] gap-12 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="min-w-0">
              <p className="text-sm font-semibold text-lime-300">私域团购 · 礼盒预售 · 企业福利</p>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                把朋友圈卖货，做成一个有品牌感的下单网站
              </h1>
              <p className="mt-6 text-lg leading-8 text-lime-50/75">
                用户先在品牌商品站了解产地、商品和团购政策，点击下单后进入独立订单页填写收货信息，商家在后台统一处理订单。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/demos/private-order/order">提交订单</Button>
                <Button href="#products" variant="secondary">浏览商品</Button>
              </div>
              </div>
              <div className="min-w-0 rounded-[2rem] border border-lime-200/20 bg-white/8 p-5">
                <div className="rounded-[1.5rem] bg-lime-50 p-5 text-green-950">
                  <p className="text-sm font-semibold text-green-700">本周经营看板</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      ["326 单", "本周预售"],
                      ["18 组", "企业团购"],
                      ["27 单", "客服待确认"],
                      ["6 个", "次日达城市"],
                    ].map(([value, label], index) => (
                      <div
                        className={`rounded-[1.25rem] p-5 ${
                          index === 0 ? "bg-lime-300" : "bg-white"
                        }`}
                        key={label}
                      >
                        <p className="text-3xl font-semibold leading-none">{value}</p>
                        <p className="mt-3 text-sm text-green-900/70">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[1.25rem] bg-green-950 p-5 text-lime-50">
                    <p className="text-sm font-semibold text-lime-300">订单处理流程</p>
                    <p className="mt-3 text-sm leading-7 text-lime-50/75">
                      商品页负责种草，下单页收集地址和备注，后台统一确认、筛选和处理订单状态。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-white" id="products">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-green-700">SEASONAL BOX</p>
                <h2 className="mt-3 text-4xl font-semibold">当季水果礼盒</h2>
              </div>
              <Button href="/demos/private-order/order" variant="secondary">进入下单页</Button>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fruitProducts.map((product) => (
                <Card className="bg-[#f8fbef]" key={product.name}>
                  <div className="aspect-[4/3] rounded-3xl bg-[linear-gradient(135deg,#d8f5b6,#fff1b8)]" />
                  <p className="mt-5 text-sm font-semibold text-green-700">{product.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-green-900/60">{product.spec}</p>
                  <p className="mt-3 text-3xl font-semibold">¥{product.price}</p>
                  <p className="mt-3 text-sm leading-6 text-green-950/70">{product.desc}</p>
                  <Button className="mt-6 w-full" href={`/demos/private-order/order?product=${encodeURIComponent(product.name)}`}>
                    预订这款
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="group">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["社群团购", "适合微信群、小红书私域、朋友圈预售，先收集订单再统一确认。"],
                ["企业福利", "支持批量地址、礼盒备注、开票需求和客服二次确认。"],
                ["直播收单", "直播间引流后用表单统一收集商品、地址和联系方式。"],
              ].map(([title, desc]) => (
                <Card className="bg-white" key={title}>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="mt-4 text-sm leading-6 text-green-950/70">{desc}</p>
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
