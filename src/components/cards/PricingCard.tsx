import type { PricingPlan } from "@/data/pricing";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card className="flex h-full flex-col">
      <h3 className="text-xl font-semibold text-slate-950">{plan.title}</h3>
      <p className="mt-3 text-3xl font-semibold text-slate-950">{plan.price}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{plan.note}</p>
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-950">适合</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {plan.suitableFor.map((item) => (
            <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs text-cyan-700" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-6 grid gap-2 text-sm text-slate-600">
        {plan.includes.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2 size-1.5 rounded-full bg-cyan-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-auto w-full pt-2" href="/contact">
        {plan.group === "student" ? "加微信发项目情况" : "加微信聊报价"}
      </Button>
    </Card>
  );
}
