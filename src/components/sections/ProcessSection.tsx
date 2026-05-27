import { processSteps } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="开发流程"
          title="把想法拆成可上线系统"
          description="每一步都围绕上线和转化推进，避免一开始做复杂而用不上的功能。"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50"
              key={step.title}
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
