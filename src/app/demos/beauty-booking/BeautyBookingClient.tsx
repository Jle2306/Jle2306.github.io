"use client";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { beautyReviews, beautyServices, therapists } from "@/app/demos/beauty-booking/data";

export function BeautyBookingClient() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/beauty-booking-system"
        links={[
          { label: "商家管理后台", href: "/demos/beauty-booking/admin" },
          { label: "手机端小程序", href: "/demos/beauty-booking/mobile" },
        ]}
      />

      <div className="bg-[#fbf7f3] text-stone-950">
        <header className="border-b border-stone-200 bg-[#fbf7f3]/95">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">YUEJI SKINCARE</p>
              <p className="mt-1 text-xl font-semibold">悦己皮肤管理工作室</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
              <a href="#services">护理项目</a>
              <a href="#therapists">护理顾问</a>
              <a href="#space">门店环境</a>
              <a href="#reviews">客户反馈</a>
            </nav>
            <Button href="/demos/beauty-booking/book">预约到店</Button>
          </Container>
        </header>

        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#fbf7f3_0%,#fff_48%,#e8fbf8_100%)]">
          <Container className="grid min-h-[500px] gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-cyan-700">杭州 · 西湖区皮肤管理预约官网</p>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
                给忙碌女生的预约制皮肤管理空间
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                在线查看护理项目、顾问档案、门店环境和客户反馈。点击预约后进入独立预约页面，选择项目、日期、时间并提交到店信息。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/demos/beauty-booking/book">立即预约</Button>
                <Button href="#services" variant="secondary">
                  查看护理项目
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["1200+ 到店客户", "4.9/5 客户评分", "7 天可预约"].map((item) => (
                  <div className="rounded-2xl border border-stone-200 bg-white/70 p-5" key={item}>
                    <p className="text-xl font-semibold">{item}</p>
                    <p className="mt-2 text-xs text-stone-500">线上预约系统展示数据</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 rounded-[2rem] border border-stone-200 bg-white/80 p-5">
              <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#f0ded1,#e5f8f4)] p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  {["10:00 可预约", "14:30 余 1 位", "19:00 晚间护理"].map((item) => (
                    <p
                      className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4 text-center text-sm font-semibold leading-5 text-stone-800 shadow-sm"
                      key={item}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-white/80 bg-white/55 p-6 backdrop-blur">
                  <p className="text-sm font-semibold text-cyan-700">到店前备注</p>
                  <h2 className="mt-3 text-3xl font-semibold text-stone-950">预约制护理空间</h2>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    客户在预约页填写服务、时间、肤质情况和备注，门店后台统一确认，避免微信反复沟通。
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["顾问制预约", "私密护理间", "7 天可约", "后台可管理"].map((item) => (
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-stone-700" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-white" id="services">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-700">SERVICE MENU</p>
                <h2 className="mt-3 text-4xl font-semibold">护理项目</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-stone-600">
                每个服务卡片都可以改成真实门店项目、价格、时长、适合人群和库存时段。
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {beautyServices.map(([title, duration, price, desc, tag]) => (
                <Card className="bg-white" key={title}>
                  <p className="text-sm font-semibold text-cyan-700">{tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-950">{title}</h3>
                  <p className="mt-3 text-sm text-stone-500">
                    {duration} · {price}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{desc}</p>
                  <Button className="mt-6 w-full" href={`/demos/beauty-booking/book?service=${encodeURIComponent(title)}`} variant="secondary">
                    预约这个项目
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="therapists">
          <Container>
            <h2 className="text-4xl font-semibold">护理顾问</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {therapists.map(([name, role, desc]) => (
                <Card className="bg-white" key={name}>
                  <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#f1ddd0,#d9f4f0)]" />
                  <h3 className="mt-5 text-2xl font-semibold">{name}</h3>
                  <p className="mt-2 text-sm text-cyan-700">{role}</p>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{desc}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-white" id="space">
          <Container>
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-cyan-700">STORE SPACE</p>
                <h2 className="mt-3 text-4xl font-semibold">安静、私密、适合长期护理记录</h2>
                <p className="mt-5 text-sm leading-7 text-stone-600">
                  独立护理间、皮肤状态记录、到店前备注和顾问确认流程，适合本地生活门店把微信咨询转成可管理的预约系统。
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {["接待区", "护理间", "产品陈列"].map((item) => (
                  <div className="aspect-[3/4] rounded-3xl bg-[linear-gradient(135deg,#ead7ca,#d7f3ef)] p-5" key={item}>
                    <p className="font-semibold text-stone-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section id="reviews">
          <Container>
            <h2 className="text-4xl font-semibold">客户反馈</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {beautyReviews.map(([name, quote]) => (
                <Card className="bg-white" key={name}>
                  <p className="text-sm leading-7 text-stone-600">“{quote}”</p>
                  <p className="mt-5 font-semibold text-stone-950">{name}</p>
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
