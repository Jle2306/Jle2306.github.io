"use client";

import { useMemo, useState } from "react";

import { DemoCTA } from "@/components/demos/DemoCTA";
import { DemoNotice } from "@/components/demos/DemoNotice";
import { LiveProjectProof } from "@/components/demos/LiveProjectProof";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { demoProofs } from "@/data/demoProof";

const statuses = {
  new: "新线索",
  contacted: "已联系",
  quoted: "已报价",
  negotiating: "沟通中",
  won: "已成交",
  lost: "已流失",
};

const initialCustomers = [
  ["悦己美容工作室", "陈女士", "小红书", "预约系统", "¥3000-5000", "negotiating", "明天 10:00", "想先做预约页面，后续加会员管理"],
  ["南山摄影馆", "李先生", "朋友介绍", "作品展示官网", "¥2000-3000", "quoted", "后天 14:30", "等待客户确认报价"],
  ["橙光课程社群", "王老师", "公众号", "课程落地页", "¥1500-2500", "new", "今天 16:00", "需要先整理课程卖点"],
  ["果然鲜社群团购", "赵女士", "微信群", "订单收集系统", "¥3000-6000", "contacted", "明天 11:00", "关注订单导出"],
  ["青木瑜伽馆", "周店长", "抖音", "体验课报名页", "¥1500-3000", "won", "下周一", "已确认第一版"],
  ["明远教育咨询", "刘老师", "百度搜索", "招生咨询页", "¥5000-8000", "negotiating", "今天 18:00", "需要多个校区入口"],
  ["岚山民宿", "孙先生", "小红书", "房型展示和预约", "¥4000-7000", "quoted", "周五", "客户希望加地图"],
  ["云朵儿童摄影", "何女士", "老客户推荐", "套餐展示页", "¥2000-4000", "won", "下周三", "准备上传照片素材"],
  ["小满茶室", "吴老板", "线下认识", "活动报名系统", "¥2500-5000", "contacted", "今天 20:00", "需要茶会报名表"],
  ["远航装修队", "高先生", "朋友圈", "报价单生成系统", "¥6000-10000", "negotiating", "明天 15:00", "希望自动生成报价"],
].map(([name, contact, source, need, budget, status, nextFollow, note]) => ({ name, contact, phone: "188-0000-0000", source, need, budget, status, nextFollow, note }));

export default function SimpleCrmPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [status, setStatus] = useState("all");
  const [source, setSource] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(initialCustomers[0]);

  const filtered = useMemo(() => customers.filter((item) => (status === "all" || item.status === status) && (source === "all" || item.source === source) && `${item.name}${item.contact}`.includes(query)), [customers, status, source, query]);
  const sources = Array.from(new Set(customers.map((item) => item.source)));

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/simple-crm-dashboard"
        links={[
          { label: "报价单生成", href: "/demos/simple-crm/quote" },
          { label: "手机端小程序", href: "/demos/simple-crm/mobile" },
        ]}
      />
      <LiveProjectProof proof={demoProofs.crm} />
      <div className="min-h-screen bg-slate-100">
        <div className="grid lg:grid-cols-[240px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-950 p-5 text-white lg:min-h-screen lg:border-b-0">
            <h1 className="text-xl font-semibold">星禾 CRM</h1>
            <p className="mt-2 text-xs text-slate-400">设计服务工作室客户管理</p>
            <nav className="mt-8 grid gap-2 text-sm">{["数据概览", "客户线索", "跟进记录", "报价管理", "任务提醒", "设置"].map((item) => <span className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800" key={item}>{item}</span>)}</nav>
          </aside>
          <main className="p-4 sm:p-6 lg:p-8">
            <div><Badge>CRM 后台 Demo</Badge><h2 className="mt-3 text-3xl font-semibold text-slate-950">数据概览</h2><p className="mt-2 text-sm text-slate-600">把客户线索、报价、跟进和成交状态统一管理起来。</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">{["客户总数：128", "本月新增：24", "待跟进：17", "已报价：9", "已成交：6", "预计成交额：¥58,600"].map((stat) => <Card key={stat}><p className="text-lg font-semibold text-slate-950">{stat}</p></Card>)}</div>
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
              <Card>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-xl font-semibold text-slate-950">客户线索</h3>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="搜索客户名称 / 联系人" value={query} onChange={(event) => setQuery(event.target.value)} />
                    <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={status} onChange={(event) => setStatus(event.target.value)}><option value="all">全部状态</option>{Object.entries(statuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
                    <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={source} onChange={(event) => setSource(event.target.value)}><option value="all">全部来源</option>{sources.map((item) => <option key={item}>{item}</option>)}</select>
                  </div>
                </div>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[900px] text-left text-sm"><thead className="text-slate-500"><tr>{["客户", "来源", "需求", "预算", "状态", "下次跟进", "操作"].map((h) => <th className="px-3 py-3" key={h}>{h}</th>)}</tr></thead><tbody>{filtered.map((item) => <tr className="border-t border-slate-100" key={item.name}><td className="px-3 py-3">{item.name}<br /><span className="text-slate-400">{item.contact}</span></td><td className="px-3 py-3">{item.source}</td><td className="px-3 py-3">{item.need}</td><td className="px-3 py-3">{item.budget}</td><td className="px-3 py-3">{statuses[item.status as keyof typeof statuses]}</td><td className="px-3 py-3">{item.nextFollow}</td><td className="px-3 py-3"><button className="text-cyan-700" onClick={() => setSelected(item)}>查看详情</button></td></tr>)}</tbody></table>
                </div>
              </Card>
              <div className="grid gap-6">
                <Card>
                  <h3 className="text-xl font-semibold text-slate-950">客户详情</h3>
                  <p className="mt-4 text-sm text-slate-600">{selected.name} / {selected.contact} / {selected.phone}</p>
                  <p className="mt-3 text-sm text-slate-600">需求：{selected.need}</p>
                  <p className="mt-3 text-sm text-slate-600">预算：{selected.budget}</p>
                  <label className="mt-4 grid gap-2 text-sm text-slate-700">状态<select className="rounded-lg border border-slate-200 px-3 py-2" value={selected.status} onChange={(event) => { const next = { ...selected, status: event.target.value }; setSelected(next); setCustomers((items) => items.map((item) => item.name === selected.name ? next : item)); }}>{Object.entries(statuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                  <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">跟进记录：第一次沟通；已发送初步报价；客户希望增加后台管理；下次需要确认页面数量。</div>
                </Card>
                <Card>
                  <h3 className="text-xl font-semibold text-slate-950">今日待办</h3>
                  {["10:00 跟进悦己美容工作室", "14:30 给南山摄影馆发送修改报价", "16:00 整理课程落地页方案", "18:00 回复果然鲜订单系统需求"].map((todo) => <p className="mt-3 text-sm text-slate-600" key={todo}>• {todo}</p>)}
                </Card>
              </div>
            </div>
            <div className="mt-8"><DemoCTA /></div>
          </main>
        </div>
      </div>
    </>
  );
}
