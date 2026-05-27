import { faqs } from "@/data/home";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function FaqSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="先把常见顾虑讲清楚"
          description="如果你的需求还不确定，也可以先从一个可上线的小版本开始。"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <Card key={item.question}>
              <h3 className="text-base font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
