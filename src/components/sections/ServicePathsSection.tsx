import { servicePaths } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ServicePathsSection() {
  return (
    <Section className="bg-white py-12">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {servicePaths.map((path, index) => (
            <Card
              className={
                index === 0
                  ? "flex h-full flex-col border-cyan-200 bg-cyan-50/40"
                  : "flex h-full flex-col border-slate-200 bg-white"
              }
              key={path.title}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={
                    index === 0
                      ? "rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700"
                      : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  }
                >
                  {path.audience}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {path.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 md:text-[13px] lg:text-sm">
                {path.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {path.highlights.map((item) => (
                  <span
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <Button href={path.href} variant={index === 0 ? "primary" : "secondary"}>
                  {path.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
