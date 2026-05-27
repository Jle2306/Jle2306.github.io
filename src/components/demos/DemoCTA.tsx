import { WechatQrCard } from "@/components/contact/WechatQrCard";
import { Button } from "@/components/ui/Button";

export function DemoCTA() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-cyan-200">想做类似作品？</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">扫码加微信，直接发我你的情况</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            学生可以发课题、代码和报错截图；商单客户可以发行业、参考案例、预算和上线时间。
            我会先判断适合做哪一版，再拆功能范围和交付周期。
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm leading-6 text-cyan-100">
            当前作品是可打开的样板案例，页面结构、功能模块、手机端效果和后台流程都可以按你的行业或课题要求继续改。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-white text-slate-950 hover:bg-cyan-50" href="/contact">
              打开微信联系页
            </Button>
            <Button
              className="border-slate-700 bg-slate-900 text-white hover:border-cyan-300 hover:bg-slate-800"
              href="/projects"
              variant="secondary"
            >
              查看更多成品 Demo
            </Button>
          </div>
        </div>
        <WechatQrCard compact dark />
      </div>
    </div>
  );
}
