import type { Metadata } from "next";

import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "服务 | JJ Studio",
  description: "面向自媒体、本地商家、大学生项目学习者、小电商和小团队的网站与轻量系统开发服务。",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-12 pt-14 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <Badge>服务能力</Badge>
            <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              帮你搭建能承接业务的小系统
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              把页面、表单、预约、订单和后台流程整理成可上线版本，让客户看得懂、愿意咨询。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" href="/contact">
                告诉我你的需求
              </Button>
              <Button className="w-full sm:w-auto" href="/projects" variant="secondary">
                先看作品案例
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white pt-12">
        <Container>
          <SectionHeading
            eyebrow="服务分类"
            title="按你的业务场景选择开发方向"
            description="每类服务都围绕客户痛点、核心功能、可交付内容和报价方式来规划。"
          />
          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-cyan-200">还不确定应该做哪一种？</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  先说你的客户和上线时间
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                  我会帮你判断适合做展示页、预约系统、订单系统，还是轻量后台。
                </p>
              </div>
              <Button className="bg-white text-slate-950 hover:bg-cyan-50" href="/contact">
                告诉我你的需求
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
