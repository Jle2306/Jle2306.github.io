import type { Metadata } from "next";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { DemoForm } from "@/components/forms/DemoForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "发布商品 | 校园二手交易平台",
  description: "校园二手交易平台商品发布页面案例。",
};

export default function StudentPublishPage() {
  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/student-project-library"
        links={[
          { label: "项目首页", href: "/demos/student-projects" },
          { label: "手机端小程序", href: "/demos/student-projects/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#eef7ff] text-[#122033]">
        <header className="border-b border-sky-200 bg-white">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">CAMPUS MARKET</p>
              <p className="mt-1 text-xl font-semibold">商品发布页</p>
            </div>
            <Button href="/demos/student-projects" variant="secondary">返回项目首页</Button>
          </Container>
        </header>
        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <Card className="bg-[#122033] text-white">
                <p className="text-sm font-semibold text-sky-300">PUBLISH</p>
                <h1 className="mt-4 text-4xl font-semibold">发布一个二手商品</h1>
                <p className="mt-5 text-sm leading-7 text-sky-100">
                  这是独立功能页，适合学生项目演示表单、分类、状态和数据提交逻辑。
                </p>
              </Card>
              <Card className="bg-white">
                <h2 className="text-3xl font-semibold">商品信息</h2>
                <div className="mt-6 grid gap-4">
                  <DemoForm
                    fields={[
                      { name: "title", label: "商品标题", required: true },
                      {
                        name: "category",
                        label: "分类",
                        options: ["图书教材", "数码设备", "宿舍用品", "学习资料", "出行工具", "其他"],
                        required: true,
                        type: "select",
                      },
                      { name: "price", label: "价格", placeholder: "例如：¥38", required: true },
                      { name: "condition", label: "成色", placeholder: "例如：九成新" },
                      { name: "contact", label: "联系方式", required: true },
                      { name: "location", label: "交易地点", placeholder: "例如：图书馆自取" },
                      { name: "description", label: "商品说明", required: true, type: "textarea" },
                    ]}
                    submitLabel="提交发布"
                    successMessage="商品信息已提交。实际项目中可进入审核列表或商品广场。"
                    table="student_project_posts"
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
