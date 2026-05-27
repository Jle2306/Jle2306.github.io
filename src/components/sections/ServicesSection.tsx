import { serviceAbilities } from "@/data/home";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="服务能力"
          title="围绕业务结果开发"
          description="先解决获客、预约、报名、订单和管理问题，再考虑复杂功能。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceAbilities.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
