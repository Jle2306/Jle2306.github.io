import type { Metadata } from "next";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { DemoForm } from "@/components/forms/DemoForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { coursePlans } from "@/app/demos/course-landing/data";

export const metadata: Metadata = {
  title: "报名页面 | AI 内容创作训练营",
  description: "课程训练营独立报名页，选择方案并提交报名信息。",
};

export default function CourseSignupPage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/course-landing-page"
        links={[
          { label: "课程官网", href: "/demos/course-landing" },
          { label: "手机端小程序", href: "/demos/course-landing/mobile" },
        ]}
      />
      <div className="min-h-screen bg-zinc-950 text-white">
        <header className="border-b border-white/10 bg-zinc-950">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#fff06a]">AI CONTENT BOOTCAMP</p>
              <p className="mt-1 text-xl font-black">训练营报名页</p>
            </div>
            <Button className="border-2 border-white bg-white text-zinc-950" href="/demos/course-landing" variant="secondary">
              返回课程官网首页
            </Button>
          </Container>
        </header>
        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black text-[#fff06a]">SIGN UP</p>
                <h1 className="mt-4 text-5xl font-black leading-tight">选择方案并提交报名信息</h1>
                <div className="mt-8 grid gap-4">
                  {coursePlans.map(([name, price, desc]) => (
                    <div className="border-2 border-white/20 bg-white/5 p-5" key={name}>
                      <p className="text-xl font-black">{name}</p>
                      <p className="mt-2 text-3xl font-black text-[#fff06a]">{price}</p>
                      <p className="mt-3 text-sm text-zinc-300">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-white text-zinc-950">
                <h2 className="text-3xl font-black">报名表单</h2>
                <div className="mt-6">
                  <DemoForm
                    fields={[
                      { name: "name", label: "姓名", required: true },
                      { name: "wechat", label: "微信", required: true },
                      {
                        name: "plan",
                        label: "报名方案",
                        options: ["早鸟体验", "标准报名", "团队咨询"],
                        required: true,
                        type: "select",
                      },
                      {
                        name: "platform",
                        label: "当前平台",
                        options: ["小红书", "抖音", "公众号", "B 站", "还没开始", "其他"],
                        required: true,
                        type: "select",
                      },
                      { name: "goal", label: "学习目标", required: true, type: "textarea" },
                    ]}
                    successMessage="报名信息已提交。实际项目中可接入表格、企业微信通知或支付跳转。"
                    table="course_signups"
                  />
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
