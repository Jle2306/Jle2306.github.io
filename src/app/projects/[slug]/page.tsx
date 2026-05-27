import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects, type WorkPage } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const typeLabel: Partial<Record<WorkPage["type"], string>> = {
  frontend: "前台作品",
  admin: "后台管理",
  dashboard: "数据后台",
  landing: "转化页面",
  mobile: "手机端效果",
};

function getStatusTags(workPages: WorkPage[]) {
  const types = new Set(workPages.map((page) => page.type));
  const tags = ["成品页面可打开", "可部署上线"];

  if (types.has("admin") || types.has("dashboard")) {
    tags.push("可做后台管理");
  }

  if (types.has("mobile")) {
    tags.push("可做手机端效果");
  }

  tags.push("可接数据库保存", "可按需求改版");

  return tags;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | 客户作品案例` : "客户作品案例",
    description: project?.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const statusTags = getStatusTags(project.workPages);

  return (
    <>
      <Section className="pb-10">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge>{project.category}</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{project.subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={project.demoUrl}>打开主作品</Button>
              <Button href="/contact" variant="secondary">
                加微信聊类似需求
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white pt-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {project.workPages.map((page) => (
              <Card className="flex h-full flex-col" key={page.href}>
                <Badge>{typeLabel[page.type] ?? "手机端效果"}</Badge>
                <h2 className="mt-4 text-xl font-semibold text-slate-950">{page.label}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{page.description}</p>
                <Button className="mt-6 w-full" href={page.href}>
                  进入页面
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <Badge>功能状态</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {statusTags.map((tag) => (
                  <span
                    className="rounded-full border border-cyan-100 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-cyan-200 bg-cyan-50/40">
              <Badge>适合谁看</Badge>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">
                如果你也是类似场景，可以直接参考这个案例
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.targetUsers.map((item) => (
                  <span
                    className="rounded-full border border-cyan-100 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                这个案例不是只展示页面样式，而是把客户原本分散在微信、表格或口头沟通里的流程，整理成可以打开、可以演示、可以继续扩展的线上作品。
              </p>
            </Card>

            <Card>
              <Badge>交付价值</Badge>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">看完这个案例，你能判断什么</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
                {[
                  `能不能解决：${project.problem}`,
                  `第一版怎么做：${project.solution}`,
                  `上线后有什么用：${project.result}`,
                ].map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr_auto] lg:items-center">
              <div>
                <Badge>预算参考</Badge>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">{project.priceRange}</h2>
                <p className="mt-2 text-sm text-slate-600">交付周期：{project.deliveryTime}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                具体报价会根据页面数量、是否需要后台、数据库保存、手机端效果和后续维护范围调整。你可以先加微信发需求，我会先判断适合做基础版、标准版还是定制版。
              </p>
              <Button className="w-full lg:w-auto" href="/contact">
                加微信问预算
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <InfoCard title="客户名称" content={project.clientName} />
            <InfoCard title="交付作品" content={project.deliverable} />
            <InfoCard title="客户痛点" content={project.problem} />
            <InfoCard title="解决方案" content={project.solution} />
            <InfoCard title="案例结果" content={project.result} />
            <InfoCard title="页面范围" content={project.pages.join("、")} />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <ListCard title="核心功能" items={project.features} />
            <ListCard title="可扩展方向" items={project.customizableOptions} />
            <ListCard title="技术栈" items={project.techStack} />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-4">
            <UpgradeCard
              title="基础版"
              description="先做一个能打开、能展示、能发给别人看的版本。"
            />
            <UpgradeCard
              title="标准版"
              description="加入表单、状态、后台或关键交互，让流程可以跑起来。"
            />
            <UpgradeCard
              title="进阶版"
              description={`继续扩展 ${project.customizableOptions.slice(0, 2).join("、")} 等功能。`}
            />
            <UpgradeCard
              title="定制版"
              description="按你的课题要求、行业流程或团队管理方式继续定制。"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <DemoCTA />
        </Container>
      </Section>
    </>
  );
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{content}</p>
    </Card>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm text-slate-600">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2 size-1.5 rounded-full bg-cyan-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function UpgradeCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="bg-slate-50">
      <h2 className="text-base font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Card>
  );
}
