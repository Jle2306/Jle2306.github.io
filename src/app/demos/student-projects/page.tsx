import type { Metadata } from "next";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "校园二手交易平台",
  description: "大学生 Web 项目展示站案例，展示一个校园二手交易平台的首页、商品列表和项目结构。",
};

const products = [
  ["JavaScript 高级程序设计", "图书教材", "¥38", "九成新", "计算机学院 张同学"],
  ["宿舍折叠桌", "宿舍用品", "¥45", "轻微使用痕迹", "北区 6 栋 李同学"],
  ["拍立得 mini 12", "数码设备", "¥420", "配相纸 10 张", "艺术学院 陈同学"],
  ["考研英语资料包", "学习资料", "¥25", "笔记完整", "图书馆自取"],
  ["山地自行车", "出行工具", "¥360", "可校内试骑", "南区 王同学"],
  ["显示器 24 寸", "数码设备", "¥280", "宿舍自提", "软件学院 刘同学"],
];

export default function StudentProjectsDemoPage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/student-project-library"
        links={[
          { label: "手机端小程序", href: "/demos/student-projects/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#0f1f2f] text-white">
        <header className="border-b border-sky-300/20 bg-[#0f1f2f]">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">CAMPUS MARKET</p>
              <p className="mt-1 text-xl font-semibold">校园二手交易平台</p>
            </div>
            <nav className="hidden gap-6 text-sm text-sky-100/70 md:flex">
              <a href="#list">商品广场</a>
              <a href="#features">功能模块</a>
              <a href="#tech">技术结构</a>
            </nav>
            <Button href="/demos/student-projects/publish">发布商品</Button>
          </Container>
        </header>

        <section className="relative overflow-hidden">
          <Container className="grid min-h-[500px] gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-sky-300">课程设计 / 作品集展示 / 项目讲解训练</p>
              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                一个可以真正打开演示的校园交易项目
              </h1>
              <p className="mt-6 text-lg leading-8 text-sky-100/70">
                这个 Demo 展示的是学生项目本身：商品广场、分类筛选、商品卡片、发布入口和项目结构。它适合用来讲解功能、数据表、页面路由和部署方式。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#list">浏览商品</Button>
                <Button href="/demos/student-projects/publish" variant="secondary">发布商品</Button>
              </div>
            </div>
            <div className="min-w-0 rounded-[1.5rem] border border-sky-300/20 bg-sky-300/10 p-4">
              <div className="rounded-t-xl bg-[#07111d] px-4 py-3 text-xs text-sky-100/70">
                localhost:3000/campus-market
              </div>
              <div className="rounded-b-xl bg-white p-5 text-[#122033]">
                <div className="flex items-center justify-between gap-4 border-b border-sky-100 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-sky-700">项目数据</p>
                    <h2 className="mt-1 text-2xl font-semibold">校园交易系统概览</h2>
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    可演示
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["128", "件商品"],
                    ["12", "个分类"],
                    ["36", "位卖家"],
                    ["8", "个页面"],
                  ].map(([value, label]) => (
                    <div className="rounded-2xl bg-sky-50 p-4" key={label}>
                      <p className="text-3xl font-semibold leading-none">{value}</p>
                      <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#0f1f2f] p-5 text-white">
                  <p className="text-sm font-semibold text-sky-300">演示重点</p>
                  <p className="mt-3 text-sm leading-7 text-sky-100/75">
                    商品列表、分类筛选、发布表单和项目结构都可以打开讲解，适合展示页面路由和数据流转。
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-white text-[#122033]" id="list">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-sky-700">PRODUCTS</p>
                <h2 className="mt-3 text-4xl font-semibold">商品广场</h2>
              </div>
              <Button href="/demos/student-projects/publish" variant="secondary">发布我的商品</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["全部", "教材", "数码设备", "宿舍用品", "学习资料", "出行工具"].map((item) => (
                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map(([name, category, price, condition, seller]) => (
                <Card className="bg-[#f8fbff]" key={name}>
                  <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#dff3ff,#e8f7da)]" />
                  <p className="mt-5 text-sm font-semibold text-sky-700">{category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
                  <p className="mt-3 text-3xl font-semibold">{price}</p>
                  <p className="mt-2 text-sm text-slate-500">{condition}</p>
                  <p className="mt-4 rounded-xl bg-white px-3 py-2 text-sm text-slate-600">{seller}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[#eef7ff] text-[#122033]" id="features">
          <Container>
            <h2 className="text-4xl font-semibold">项目功能模块</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["商品发布", "标题、分类、价格、成色、联系方式、商品说明。"],
                ["列表筛选", "按分类、关键词、价格区间筛选商品。"],
                ["我的发布", "学生查看自己发布的商品和状态。"],
                ["后台管理", "管理员处理违规商品和下架状态。"],
                ["部署说明", "整理环境变量、数据表和线上地址。"],
                ["项目讲解", "能讲清页面、数据和交互怎么流转。"],
              ].map(([title, desc]) => (
                <Card className="bg-white" key={title}>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-white text-[#122033]" id="tech">
          <Container>
            <div className="grid gap-5 md:grid-cols-4">
              {[
                ["页面", "首页、发布页、详情页、我的发布、后台。"],
                ["数据表", "users、products、categories、orders。"],
                ["交互", "表单校验、筛选、状态切换、空状态。"],
                ["合规边界", "只提供讲解、排错、部署指导，不做违规替交。"],
              ].map(([title, desc]) => (
                <Card className="bg-[#eef7ff]" key={title}>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
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
