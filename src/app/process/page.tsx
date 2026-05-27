import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cooperationSteps, processSteps } from "@/data/home";

export const metadata: Metadata = {
  title: "开发流程 | JJ Studio",
  description: "了解从需求沟通、原型规划、开发实现到上线部署和后续维护的合作流程。",
};

export default function ProcessPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="开发流程"
            title="从加微信沟通到交付上线"
            description="先判断适合做哪一版，再确认功能、报价、预览和交付。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Card key={step.title}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="真实合作方式"
            title="先说清范围，再开始开发"
            description="你不用一开始准备完整文档，我会先帮你把第一版拆成可执行的页面和功能。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {cooperationSteps.map((step, index) => (
              <Card className="flex h-full flex-col" key={step.title}>
                <div className="text-sm font-semibold text-cyan-600">Step {index + 1}</div>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{step.description}</p>
                <div className="mt-5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                  交付确认：{step.deliverable}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-cyan-200">合作前先说清边界</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  页面数量、后台范围、数据库、部署方式和维护周期都会在报价前确认
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                  这样你知道钱花在哪里，我也能按清晰范围交付，避免后期反复追加需求。
                </p>
              </div>
              <Button className="bg-white text-slate-950 hover:bg-cyan-50" href="/contact">
                加微信聊需求
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
