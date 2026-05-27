import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const scenarios = [
  {
    title: "学生项目卡住",
    description: "项目跑不起来、页面展示不完整、功能讲不清，需要先整理演示效果。",
  },
  {
    title: "商家想做官网",
    description: "想把服务、案例、价格和联系方式讲清楚，让客户看完愿意咨询。",
  },
  {
    title: "门店想做预约",
    description: "美容、美甲、摄影、私教等门店，希望客户在线看服务和选时间。",
  },
  {
    title: "小团队想做后台",
    description: "客户线索、订单、报价和跟进记录分散，想从表格搬到线上管理。",
  },
];

export function CommonScenariosSection() {
  return (
    <Section className="bg-white py-12">
      <Container>
        <SectionHeading
          eyebrow="常见成交场景"
          title="如果你也有类似情况，可以先加微信聊"
          description="不用一开始就想清完整系统，先把现在卡住的地方说清楚，我会帮你判断适合做哪一版。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <Card className="h-full bg-slate-50" key={scenario.title}>
              <h3 className="text-lg font-semibold text-slate-950">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
