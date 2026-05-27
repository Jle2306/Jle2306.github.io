import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "内容中心 | JJ Studio",
  description: "面向客户的官网、落地页、预约系统、订单收集系统和轻量 CRM 内容。",
};

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="内容中心"
          title="用业务视角讲清网站和轻量系统的价值"
          description="这里沉淀面向客户的内容，不堆复杂技术名词。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Card className="flex h-full flex-col" key={post.slug}>
              <p className="text-sm font-medium text-cyan-700">{post.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <p className="mt-5 text-xs text-slate-500">{post.readTime}</p>
              <Button className="mt-5 w-full" href="/contact" variant="secondary">
                咨询类似需求
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
