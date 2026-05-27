import { needPaths } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function NeedPathsSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="按需求选择"
          title="先选你想解决的问题"
          description="客户通常不是想买一个页面，而是想解决获客、预约、收单、管理和项目展示的问题。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {needPaths.map((path) => (
            <Card className="flex h-full flex-col" key={path.title}>
              <h3 className="text-base font-semibold text-slate-950">{path.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{path.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {path.tags.map((tag) => (
                  <span
                    className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="mt-6 w-full" href={path.href} variant="secondary">
                {path.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
