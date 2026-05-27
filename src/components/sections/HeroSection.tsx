import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const tags = ["毕业设计技术支持", "课程项目跑通", "商单网站开发", "小程序效果展示", "后台可管理", "可上线交付"];

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pb-10 pt-10 sm:pb-14 sm:pt-20 lg:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,#cffafe,transparent_42%)] opacity-70" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge>学生项目技术支持 + 商单开发</Badge>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:mt-6 sm:text-4xl lg:text-[2.75rem]">
              <span className="block whitespace-nowrap">学生项目卡住，商单想上线</span>
              <span className="block whitespace-nowrap">我帮你做成可展示的成品</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              学生可以发课题、代码和报错截图；商家可以发行业、参考案例和预算。我会先判断适合怎么做，再拆成功能范围。
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              <Button className="w-full px-6 py-4 text-base" href="/projects/student-project-library">
                我是学生，项目卡住了
              </Button>
              <Button className="w-full border-slate-300 px-6 py-4 text-base shadow-sm" href="/solutions" variant="secondary">
                我是商家，想做网站/小程序
              </Button>
            </div>
            <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50/70 px-4 py-3 text-sm leading-6 text-cyan-900 sm:mt-6">
              报价前会先说明页面范围、功能范围和上线方式；如果需求不适合做，我会先提醒你。
            </div>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-8">
              {tags.map((tag) => (
                <span
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Card className="hidden overflow-hidden p-0 lg:block">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-rose-300" />
                  <span className="size-3 rounded-full bg-amber-300" />
                  <span className="size-3 rounded-full bg-emerald-300" />
                </div>
                <span className="text-xs font-medium text-slate-500">Demo Preview</span>
              </div>
            </div>
            <div className="space-y-5 p-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="h-3 w-24 rounded-full bg-cyan-200" />
                <div className="mt-4 h-8 w-4/5 rounded-lg bg-slate-300" />
                <div className="mt-3 h-3 w-full rounded-full bg-slate-200" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-slate-200" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["项目", "部署", "商单", "后台"].map((item) => (
                  <div className="rounded-lg border border-slate-200 bg-white p-4" key={item}>
                    <div className="text-sm font-semibold text-slate-950">{item}</div>
                    <div className="mt-3 h-2 rounded-full bg-slate-100" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-cyan-100" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
