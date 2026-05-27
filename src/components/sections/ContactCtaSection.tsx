import { WechatQrCard } from "@/components/contact/WechatQrCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ContactCtaSection() {
  return (
    <Section className="pb-20 pt-10">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-sm sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-cyan-200">看完案例，觉得适合就直接聊</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                扫码加微信，直接聊你的项目情况
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                不用先整理完整文档。学生项目先判断卡点，商单项目先判断适合做官网、小程序、预约、订单还是后台。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-white text-slate-950 hover:bg-cyan-50" href="/contact">
                  加微信聊需求
                </Button>
                <Button
                  className="border-slate-700 bg-slate-900 text-white hover:border-cyan-300 hover:bg-slate-800"
                  href="/projects"
                  variant="secondary"
                >
                  查看案例
                </Button>
              </div>
            </div>
            <WechatQrCard compact dark />
          </div>
        </div>
      </Container>
    </Section>
  );
}
