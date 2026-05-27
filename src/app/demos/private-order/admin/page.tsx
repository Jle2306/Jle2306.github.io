"use client";

import { useMemo, useState } from "react";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { LiveProjectProof } from "@/components/demos/LiveProjectProof";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { demoProofs } from "@/data/demoProof";

const statusLabels = {
  pending_contact: "待联系",
  confirmed: "已确认",
  shipped: "已发货",
  completed: "已完成",
  cancelled: "已取消",
};

const initialOrders = [
  ["PO001", "陈女士", "188-0000-0000", "chenfruit", "云南高山蓝莓礼盒", 2, 256, "杭州市西湖区", "pending_contact", "企业下午茶", "09:10"],
  ["PO002", "李先生", "188-0000-0000", "li888", "四川爱媛果冻橙", 3, 207, "上海市静安区", "confirmed", "周五前发货", "09:40"],
  ["PO003", "王老师", "188-0000-0000", "coursewang", "时令水果组合箱", 5, 790, "南京市鼓楼区", "shipped", "公司福利", "10:20"],
  ["PO004", "赵女士", "188-0000-0000", "zhao", "陕西洛川苹果礼盒", 1, 89, "杭州市滨江区", "completed", "送礼", "11:00"],
  ["PO005", "孙先生", "188-0000-0000", "sun", "海南贵妃芒", 2, 158, "宁波市鄞州区", "pending_contact", "先确认成熟度", "11:30"],
  ["PO006", "周女士", "188-0000-0000", "zhou", "新疆灰枣礼盒", 4, 236, "苏州市工业园区", "confirmed", "开发票", "12:10"],
  ["PO007", "吴老板", "188-0000-0000", "wuboss", "时令水果组合箱", 10, 1580, "杭州市上城区", "pending_contact", "团购价咨询", "13:15"],
  ["PO008", "何女士", "188-0000-0000", "hehe", "四川爱媛果冻橙", 1, 69, "嘉兴市南湖区", "cancelled", "暂时不需要", "13:45"],
].map(([id, name, phone, wechat, product, quantity, amount, address, status, note, createdAt]) => ({ id, name, phone, wechat, product, quantity, amount, address, status, note, createdAt }));

export default function PrivateOrderAdminPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => orders.filter((order) => (filter === "all" || order.status === filter) && `${order.name}${order.phone}`.includes(query)), [orders, filter, query]);

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/private-order-system"
        links={[
          { label: "品牌商品站", href: "/demos/private-order" },
          { label: "手机端小程序", href: "/demos/private-order/mobile" },
        ]}
      />
      <LiveProjectProof proof={demoProofs.privateOrder} />
      <Section>
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>后台 Demo</Badge>
              <h1 className="mt-4 text-4xl font-semibold text-slate-950">私域订单管理后台</h1>
              <p className="mt-3 text-sm text-slate-600">实际项目可以接入 Supabase、飞书表格、企业微信通知、Excel 导出或支付系统。</p>
            </div>
            <Button href="/demos/private-order" variant="secondary">返回商品站首页</Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">{["今日订单：16", "待联系：7", "已确认：6", "已发货：3", "预估销售额：¥3,286"].map((stat) => <Card key={stat}><p className="text-lg font-semibold text-slate-950">{stat}</p></Card>)}</div>
          <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">{["all", "pending_contact", "confirmed", "shipped", "completed", "cancelled"].map((status) => <button className={`rounded-lg border px-3 py-2 text-sm ${filter === status ? "border-cyan-400 bg-cyan-50 text-cyan-700" : "border-slate-200 bg-white text-slate-600"}`} key={status} onClick={() => setFilter(status)}>{status === "all" ? "全部" : statusLabels[status as keyof typeof statusLabels]}</button>)}</div>
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="搜索客户姓名或手机号" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600"><tr>{["编号", "客户", "商品", "数量", "金额", "地址", "状态", "备注", "操作"].map((h) => <th className="px-4 py-3" key={h}>{h}</th>)}</tr></thead>
                <tbody>{filtered.map((order) => <tr className="border-t border-slate-100" key={order.id}><td className="px-4 py-3">{order.id}</td><td className="px-4 py-3">{order.name}<br /><span className="text-slate-400">{order.phone} / {order.wechat}</span></td><td className="px-4 py-3">{order.product}</td><td className="px-4 py-3">{order.quantity}</td><td className="px-4 py-3">¥{order.amount}</td><td className="px-4 py-3">{order.address}</td><td className="px-4 py-3">{statusLabels[order.status as keyof typeof statusLabels]}</td><td className="px-4 py-3">{order.note}</td><td className="px-4 py-3"><select className="rounded border border-slate-200 px-2 py-1" value={order.status} onChange={(event) => setOrders((items) => items.map((item) => item.id === order.id ? { ...item, status: event.target.value } : item))}>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
