import type { Metadata } from "next";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { courseDays, coursePlans, courseResults } from "@/app/demos/course-landing/data";

export const metadata: Metadata = {
  title: "7 天 AI 内容创作训练营",
  description: "课程销售落地页案例，展示课程价值、课程大纲、成果、价格方案和报名跳转。",
};

export default function CourseLandingDemoPage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/course-landing-page"
        links={[
          { label: "手机端小程序", href: "/demos/course-landing/mobile" },
        ]}
      />
      <div className="bg-[#fffdf0] text-zinc-950">
        <header className="border-b-4 border-zinc-950 bg-[#fff06a]">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em]">AI CONTENT BOOTCAMP</p>
              <p className="mt-1 text-xl font-black">内容创作训练营</p>
            </div>
            <nav className="hidden gap-6 text-sm font-bold md:flex">
              <a href="#outline">课程大纲</a>
              <a href="#results">学习成果</a>
              <a href="#pricing">报名方案</a>
            </nav>
            <Button className="bg-zinc-950 text-white" href="/demos/course-landing/signup">
              立即报名
            </Button>
          </Container>
        </header>

        <section className="border-b-4 border-zinc-950">
          <Container className="grid min-h-[500px] gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="min-w-0">
              <p className="inline-block border-2 border-zinc-950 bg-white px-4 py-2 text-sm font-black">
                7 天实战 · 每天 1 个交付物
              </p>
              <h1 className="mt-8 text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">
                用 AI 建立你的内容生产系统
              </h1>
              <p className="mt-6 text-lg font-medium leading-8 text-zinc-700">
                从定位、选题、标题、脚本到复盘，帮助自媒体新人和内容团队把零散工具变成稳定工作流。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-zinc-950 text-white" href="/demos/course-landing/signup">
                  报名训练营
                </Button>
                <Button className="border-2 border-zinc-950" href="#outline" variant="secondary">
                  查看大纲
                </Button>
              </div>
            </div>
            <div className="min-w-0 border-4 border-zinc-950 bg-white p-6">
              <h2 className="text-3xl font-black">本期数据</h2>
              <div className="mt-6 grid gap-4">
                {["142 人预约咨询", "68 人进入报名页", "31 人提交报名信息", "7 份课程交付模板"].map((item) => (
                  <div className="border-2 border-zinc-950 bg-[#fff06a] p-4 font-black" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-white" id="outline">
          <Container>
            <h2 className="text-5xl font-black">7 天课程大纲</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {courseDays.map(([day, title, desc]) => (
                <div className="border-4 border-zinc-950 bg-[#fffdf0] p-5" key={day}>
                  <p className="font-black text-zinc-500">{day}</p>
                  <h3 className="mt-3 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="results">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-5xl font-black">学完你会带走什么</h2>
                <p className="mt-5 text-sm font-medium leading-7 text-zinc-700">
                  这个页面适合课程客户承接自媒体流量，把课程介绍、学习成果、价格方案和报名入口集中展示。
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {courseResults.map((item) => (
                  <Card className="border-2 border-zinc-950 bg-white shadow-[6px_6px_0_#18181b]" key={item}>
                    <p className="text-lg font-black">{item}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-[#fff06a]" id="pricing">
          <Container>
            <h2 className="text-5xl font-black">报名方案</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {coursePlans.map(([name, price, desc]) => (
                <div className="border-4 border-zinc-950 bg-white p-6 shadow-[8px_8px_0_#18181b]" key={name}>
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-5 text-4xl font-black">{price}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-700">{desc}</p>
                  <Button className="mt-6 w-full bg-zinc-950 text-white" href="/demos/course-landing/signup">
                    选择方案
                  </Button>
                </div>
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
