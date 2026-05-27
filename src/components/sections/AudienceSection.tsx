import { audiences } from "@/data/home";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AudienceSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="适合这些需求"
          title="让客户看懂你、信任你、联系你"
          description="不管你是做内容、做门店、做电商，还是做小团队管理，都可以先从一个可上线、可演示、可收集需求的网站开始。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {audiences.map((audience) => (
            <Card className="flex h-full flex-col" key={audience.title}>
              <h3 className="text-base font-semibold text-slate-950">{audience.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {audience.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {audience.needs.map((need) => (
                  <span
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    key={need}
                  >
                    {need}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
