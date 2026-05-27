import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "客户作品案例 | JJ Studio",
  description: "查看餐饮点餐、课程落地页、门店预约、私域订单、学生项目展示站和 CRM 后台等客户作品案例。",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="客户作品案例"
          title="每个案例都是一个可打开的客户作品"
          description="这里展示的是不同客户委托后可以交付出来的网站或轻量系统。客户不需要理解技术栈，只要看到页面、流程和结果。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/contact">我也想做类似作品</Button>
        </div>
      </Container>
    </Section>
  );
}
