import { featuredProjects } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function FeaturedProjectsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="精选案例"
          title="可以直接打开的客户作品"
          description="学生项目、课程报名、门店预约、私域订单和小团队后台都可以打开体验，看完就能判断自己适合做哪一类。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card className="flex h-full flex-col" key={project.title}>
              <div className="text-sm font-medium text-cyan-700">{project.category}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <Button className="mt-6 w-full sm:w-fit" href={project.href} variant="secondary">
                打开作品页面
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
