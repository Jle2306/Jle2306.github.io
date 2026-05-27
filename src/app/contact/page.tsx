import type { Metadata } from "next";

import { WechatQrCard } from "@/components/contact/WechatQrCard";
import { DemoForm } from "@/components/forms/DemoForm";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "加微信沟通 | JJ Studio",
  description: "提交学生项目技术支持、网站开发、小程序页面、预约系统、订单系统或后台管理需求。",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="加微信沟通"
          title="优先加微信，直接把需求发我"
          description="你可以跳过表单，直接扫码发课题要求、报错截图、行业需求、预算和上线时间。"
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 lg:grid-cols-[340px_1fr] lg:items-stretch lg:p-6">
          <WechatQrCard className="h-full shadow-none" lead showText={false} />

          <Card className="flex h-full flex-col justify-center border-cyan-100 bg-cyan-50/30 shadow-none">
            <h2 className="text-xl font-semibold text-slate-950">加微信后可以直接发这些内容</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <MessageHint
                title="学生项目"
                items={["课题要求", "已有代码", "报错截图", "想实现的功能", "部署/演示问题"]}
              />
              <MessageHint
                title="商单开发"
                items={["行业类型", "参考案例", "想做的功能", "预算范围", "上线时间"]}
              />
            </div>
            <p className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm leading-6 text-cyan-800">
              不用先写完整需求文档，先把你现在的情况发给我，我会帮你判断适合做项目技术支持、官网、小程序页面、预约系统、订单系统还是后台管理。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {["先判断方向", "再拆功能范围", "最后给建议报价"].map((item) => (
                <div
                  className="rounded-xl border border-white bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm shadow-slate-200/60"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">扫码添加微信：小詹工作日记</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              看完案例觉得合适，可以直接扫码发我你的项目情况、行业、预算或上线时间。我会先帮你判断适合怎么做。
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-950">不方便扫码时，也可以先提交表单</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                表单是备用入口。更推荐直接加微信沟通，方便发送截图、代码问题和参考案例。
              </p>
            </div>
            <DemoForm
              table="contact_inquiries"
              successMessage="信息已提交，我会根据你的项目情况给出下一步建议。"
              submitLabel="提交项目情况"
              fields={[
                { name: "name", label: "姓名 / 称呼", required: true },
                { name: "contact", label: "微信或邮箱", required: true },
                {
                  name: "customer_type",
                  label: "客户类型",
                  type: "select",
                  required: true,
                  options: ["大学生毕业设计/课程项目", "小公司/商家商单", "自媒体 / 个人 IP", "电商 / 小品牌", "小微企业", "其他"],
                },
                {
                  name: "project_type",
                  label: "需求类型",
                  type: "select",
                  required: true,
                  options: ["项目结构讲解", "Bug 排查", "部署/演示指导", "官网/落地页", "小程序页面", "预约/订单系统", "后台管理系统", "其他"],
                },
                { name: "budget", label: "预算范围", placeholder: "例如：¥3000-5000" },
                { name: "timeline", label: "期望完成时间", placeholder: "例如：2 周内 / 本周要演示" },
                { name: "description", label: "项目情况 / 需求描述", type: "textarea", required: true },
              ]}
            />
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function MessageHint({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
