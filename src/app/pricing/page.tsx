import type { Metadata } from "next";

import { PricingCard } from "@/components/cards/PricingCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "价格套餐 | JJ Studio",
  description: "查看学生项目技术支持、展示型网站、转化落地页、预约订单小系统和定制系统开发报价方式。",
};

export default function PricingPage() {
  const studentPlans = pricingPlans.filter((plan) => plan.group === "student");
  const businessPlans = pricingPlans.filter((plan) => plan.group === "business");

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="价格套餐"
          title="学生技术支持与商单开发报价"
          description="学生按问题、模块和阶段评估；商单按页面数量、后台复杂度、数据接入和交付周期评估。"
        />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">学生项目技术支持</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            适合毕业设计、课程设计和 Web 项目遇到运行、讲解、部署、演示等问题。只提供技术支持与学习辅导，不提供违规替代完成服务。
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {studentPlans.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">商单网站 / 小程序 / 轻量系统开发</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            适合小公司、商家、个人 IP 和小团队做官网、落地页、预约系统、订单收集和后台管理。
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businessPlans.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
