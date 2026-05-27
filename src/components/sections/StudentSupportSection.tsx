import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

const supportItems = [
  "项目跑起来",
  "页面能展示",
  "功能讲清楚",
  "报错能定位",
  "部署能演示",
  "答辩有思路",
];

const prepareItems = ["课题要求", "已有代码", "报错截图", "想实现的功能", "部署平台", "演示要求"];

export function StudentSupportSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="学生项目技术支持"
          title="毕业设计/课程项目卡住了，先把情况发我"
          description="重点不是堆技术词，而是让项目跑得起来、页面展示出来、功能讲得清楚。"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-cyan-200 bg-cyan-50/40">
            <h3 className="text-xl font-semibold text-slate-950">重点帮你把结果做出来</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div
                  className="rounded-lg border border-cyan-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
              合规边界：只提供技术支持、学习辅导、代码讲解、排错和部署指导，不提供代写、代做、替交、包过等违规替代完成服务。
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-slate-950">联系前可以准备这些信息</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {prepareItems.map((item) => (
                <span
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              不用一开始就整理完整文档，把你现在卡住的地方发来就行。我会先判断是运行问题、页面展示问题、功能理解问题，还是部署演示问题。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects/student-project-library">查看学生项目案例</Button>
              <Button href="/contact" variant="secondary">
                加微信发项目情况
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
