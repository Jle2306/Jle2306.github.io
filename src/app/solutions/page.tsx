import type { Metadata } from "next";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { industrySolutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "按需求选方案 | JJ Studio",
  description: "按学生项目技术支持、官网获客、预约系统、订单收集和 CRM 后台选择第一版方案，并直达对应作品案例。",
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pb-12 pt-14 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <Badge>按需求选方案</Badge>
            <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              按业务目标，选择第一版方案
            </h1>
            <p className="mx-auto mt-6 max-w-5xl text-base leading-8 text-slate-600 sm:text-lg">
              学生看项目技术支持，商单看官网、小程序、预约、订单和后台方案。先做能上线、能演示、能扩展的第一版。
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white pt-12">
        <Container>
          <div className="grid gap-6">
            {industrySolutions.map((solution, index) => (
              <Card
                className="scroll-mt-24"
                id={solution.id}
                key={solution.id}
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <Badge>{solution.title}</Badge>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-slate-950">
                      {solution.subtitle}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{solution.contactHint}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button href={solution.caseHref}>查看对应案例</Button>
                      <Button href={solution.demoHref} variant="secondary">
                        打开作品页面
                      </Button>
                      <Button href="/contact" variant="secondary">
                        加微信聊这个方案
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <InfoBlock title="适合客户" items={solution.suitableFor} />
                    <InfoBlock title="常见问题" items={solution.problems} />
                    <InfoBlock title="核心模块" items={solution.modules} />
                    <InfoBlock title="可交付内容" items={solution.deliverables} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-8 text-center">
            <p className="text-sm font-semibold text-cyan-700">还不确定该选哪种？</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              扫码加微信，把你的项目情况或商单需求直接发我
            </h2>
            <Button className="mt-6" href="/contact">
              加微信聊需求
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
