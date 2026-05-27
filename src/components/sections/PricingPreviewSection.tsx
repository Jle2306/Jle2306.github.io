import { pricingPlans } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function PricingPreviewSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="套餐价格"
          title="先用清晰套餐降低沟通成本"
          description="价格按项目复杂度调整，第一步先确认你的业务目标和最小可上线版本。"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card className="flex h-full flex-col" key={plan.title}>
              <h3 className="text-xl font-semibold text-slate-950">{plan.title}</h3>
              <div className="mt-4 text-3xl font-semibold text-slate-950">{plan.price}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <span className="mt-2 size-1.5 rounded-full bg-cyan-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" href="/pricing" variant="secondary">
                查看价格
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
