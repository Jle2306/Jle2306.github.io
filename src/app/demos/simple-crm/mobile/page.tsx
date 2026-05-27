import type { Metadata } from "next";

import { MiniProgramShowcase } from "@/components/demos/MiniProgramShowcase";

export const metadata: Metadata = {
  title: "设计服务 CRM 手机端效果 | JJ Studio",
  description: "展示设计服务工作室 CRM 在手机端的线索跟进和老板看板。",
};

export default function SimpleCrmMobilePage() {
  return (
    <MiniProgramShowcase
      appName="星禾 CRM"
      caseHref="/projects/simple-crm-dashboard"
      description="CRM 手机端不是给客户下单，而是给团队移动办公：员工随时跟进客户，老板随时看成交额、报价和待办。"
      layout="crm"
      mainHref="/demos/simple-crm"
      screens={[
        {
          label: "线索跟进",
          role: "client",
          eyebrow: "员工端小程序",
          title: "销售在手机上跟进客户",
          description: "适合外出沟通、微信转线索、快速记录客户状态和下一次跟进时间。",
          primaryAction: "新增跟进",
          sections: [
            {
              title: "待跟进客户",
              items: [
                { title: "悦己美容工作室", meta: "预约系统 / 明天 10:00 跟进", tag: "沟通中" },
                { title: "果然鲜社群团购", meta: "订单系统 / 预算 ¥3000-6000", tag: "已联系" },
              ],
            },
            {
              title: "我的任务",
              stats: [
                { label: "待跟进", value: "17" },
                { label: "已报价", value: "9" },
                { label: "今日待办", value: "4" },
              ],
            },
          ],
        },
        {
          label: "移动报价",
          role: "client",
          eyebrow: "员工端小程序",
          title: "边沟通边生成报价",
          description: "员工根据客户需求勾选服务项，快速形成报价明细，后续同步到 CRM 后台。",
          primaryAction: "生成报价",
          sections: [
            {
              title: "报价明细",
              fields: ["客户：南山摄影馆", "服务：作品展示官网", "页面：5 个", "预算：¥2000-3000", "状态：等待确认"],
            },
            {
              title: "报价流程",
              steps: ["选择服务模块", "填写页面数量", "生成报价单", "记录下次跟进"],
            },
          ],
        },
        {
          label: "老板看板",
          role: "merchant",
          eyebrow: "老板端小程序",
          title: "老板手机上看业务进度",
          description: "老板关注成交额、线索量、报价数、成交率和团队待办，不需要每天问员工。",
          primaryAction: "查看报表",
          sections: [
            {
              title: "本月经营数据",
              stats: [
                { label: "成交额", value: "¥58.6k" },
                { label: "新线索", value: "24" },
                { label: "成交", value: "6单" },
              ],
            },
            {
              title: "销售状态",
              stats: [
                { label: "待跟进", value: "17" },
                { label: "已报价", value: "9" },
                { label: "成交率", value: "25%" },
              ],
            },
          ],
        },
      ]}
      theme={{
        accent: "text-cyan-700",
        accentSoft: "border-cyan-200 bg-cyan-50 text-cyan-700",
        bg: "bg-slate-100",
        border: "border-slate-200",
        button: "bg-slate-950",
        muted: "text-slate-500",
        surface: "bg-slate-50",
        text: "text-slate-950",
      }}
      title="设计服务 CRM 手机端效果"
    />
  );
}
