import type { DemoProof } from "@/data/demoProof";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function LiveProjectProof({ proof }: { proof: DemoProof }) {
  return (
    <Section className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <Badge className="border-cyan-300 bg-cyan-400/10 text-cyan-200">{proof.industry}</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {proof.headline}
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">{proof.summary}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-200">“{proof.testimonial.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-cyan-200">{proof.testimonial.person}</p>
            </div>
          </div>

          <div className="min-w-0 grid gap-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {proof.metrics.map((metric) => (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={metric}>
                  <p className="text-lg font-semibold text-white">{metric}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Card className="border-white/10 bg-white/5 text-white">
                <h3 className="text-lg font-semibold">上线页面模块</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proof.modules.map((module) => (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200" key={module}>
                      {module}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="border-white/10 bg-white/5 text-white">
                <h3 className="text-lg font-semibold">真实业务流程</h3>
                <div className="mt-4 grid gap-2">
                  {proof.workflow.map((step, index) => (
                    <p className="text-sm text-slate-200" key={step}>
                      {index + 1}. {step}
                    </p>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
