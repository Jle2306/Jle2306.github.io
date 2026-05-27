import type { Metadata } from "next";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { LiveProjectProof } from "@/components/demos/LiveProjectProof";
import { DemoForm } from "@/components/forms/DemoForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { demoProofs } from "@/data/demoProof";

export const metadata: Metadata = {
  title: "个人 IP 官网 Demo | JJ Studio",
  description: "AI 效率顾问个人品牌官网 Demo，展示服务、案例、内容作品和咨询表单。",
};

const stats = ["3000+ 学员学习 AI 工作流", "80+ 企业内训与公开课", "5 年内容与效率工具经验"];
const tags = ["AI 办公", "内容创作", "企业内训", "个人效率", "自媒体增长"];
const painPoints = [
  "工具很多，但不知道哪些真正适合自己",
  "学了很多 AI 技巧，却没有形成稳定工作流",
  "写内容、做方案、整理资料依然很耗时",
  "团队成员使用 AI 水平不一致，协作效率低",
  "想做个人 IP，但缺少清晰定位和内容系统",
];
const services = [
  ["AI 效率咨询", "梳理工作流程，推荐适合的 AI 工具，建立可复用提示词库。"],
  ["企业 AI 内训", "定制培训主题，提供实操案例，输出团队使用手册。"],
  ["自媒体内容工作流", "覆盖选题规划、脚本生成、图文生产和内容复盘。"],
  ["线上训练营", "阶段任务、社群答疑和项目实战，适合系统学习者。"],
];
const cases = [
  ["12 人咨询团队 AI 文档工作流", "方案初稿产出时间减少 40%", "提示词库、文档模板、团队培训"],
  ["知识博主选题和脚本生产流程", "每周稳定产出 10 条短视频脚本", "选题表、脚本模板、标题库"],
  ["HR 团队招聘内容生成流程", "重复性文案工作明显减少", "岗位模板、面试问题库、评估表"],
];
const contents = [
  "普通人如何开始使用 AI 提高效率",
  "我常用的 12 个 AI 工作流模板",
  "自媒体博主如何用 AI 做选题",
  "小团队如何建立自己的提示词库",
  "企业 AI 培训最常见的 5 个误区",
  "如何用 AI 做会议纪要和复盘",
];
const testimonials = [
  "培训不是单纯讲工具，而是帮我们把流程梳理清楚了。",
  "以前写方案要一整天，现在有了模板后效率高很多。",
  "最有价值的是提示词库，可以直接复用到日常工作。",
];

export default function PersonalBrandDemoPage() {
  return (
    <>
      <DemoNotice />
      <LiveProjectProof proof={demoProofs.personalBrand} />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="min-w-0">
              <Badge>个人 IP 官网 Demo</Badge>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                林澈｜AI 效率顾问，帮你把 AI 真正用进工作流
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                我帮助职场人、自媒体创作者和小团队掌握 AI 工具，用更短时间完成内容创作、资料整理、方案撰写和业务自动化。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#consult">预约咨询</Button>
                <Button href="#services" variant="secondary">查看服务</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600" key={tag}>{tag}</span>)}
              </div>
            </div>
            <Card>
              <div className="grid gap-4">
                {stats.map((stat) => (
                  <div className="rounded-xl bg-slate-50 p-5" key={stat}>
                    <p className="text-2xl font-semibold text-slate-950">{stat.split(" ")[0]}</p>
                    <p className="mt-2 text-sm text-slate-600">{stat}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <GridSection title="你可能也遇到这些问题" items={painPoints} />
      <GridSection id="services" title="我可以提供的服务" items={services.map(([title, text]) => `${title}：${text}`)} />

      <Section className="bg-white">
        <Container>
          <Heading title="真实业务场景案例" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cases.map(([title, result, deliverable]) => (
              <Card key={title}>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm text-cyan-700">结果：{result}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">交付：{deliverable}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading title="内容作品" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contents.map((title, index) => (
              <Card key={title}>
                <Badge>{index % 2 === 0 ? "效率工具" : "内容工作流"}</Badge>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">《{title}》</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">一篇面向真实业务场景的内容文章，帮助读者把方法用到工作里。</p>
                <p className="mt-4 text-xs text-slate-500">阅读时间：{4 + index} 分钟</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Heading title="客户评价与合作流程" />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Card>
              {testimonials.map((item) => <p className="border-b border-slate-100 py-4 text-sm leading-6 text-slate-600 last:border-0" key={item}>“{item}”</p>)}
            </Card>
            <Card>
              {["需求沟通", "诊断当前流程", "设计 AI 工作流", "培训与实操", "复盘与优化"].map((step, index) => (
                <p className="py-2 text-sm text-slate-600" key={step}>{index + 1}. {step}</p>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="consult">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-950">这个 Demo 可以如何定制</h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                {["换成你的个人品牌视觉", "增加课程售卖模块", "增加预约咨询功能", "增加文章系统", "增加学员案例展示", "增加资料领取表单", "接入数据后台"].map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-slate-950">联系咨询</h2>
              <div className="mt-5">
                <DemoForm
                  table="contact_inquiries"
                  successMessage="咨询信息已提交。"
                  fields={[
                    { name: "name", label: "姓名", required: true },
                    { name: "contact", label: "微信或邮箱", required: true },
                    { name: "identity", label: "你的身份", type: "select", required: true, options: ["职场人", "自媒体创作者", "企业负责人", "培训负责人", "其他"] },
                    { name: "service", label: "想咨询的服务", type: "select", required: true, options: ["AI 效率咨询", "企业内训", "内容工作流", "线上训练营", "其他"] },
                    { name: "description", label: "需求描述", type: "textarea", required: true },
                  ]}
                />
              </div>
            </Card>
          </div>
          <div className="mt-10"><DemoCTA /></div>
        </Container>
      </Section>
    </>
  );
}

function Heading({ title }: { title: string }) {
  return <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>;
}

function GridSection({ title, items, id }: { title: string; items: string[]; id?: string }) {
  return (
    <Section className="bg-white" id={id}>
      <Container>
        <Heading title={title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => <Card key={item}><p className="text-sm leading-6 text-slate-600">{item}</p></Card>)}
        </div>
      </Container>
    </Section>
  );
}
