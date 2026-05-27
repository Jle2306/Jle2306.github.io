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
  pending: "待确认",
  confirmed: "已确认",
  completed: "已完成",
  cancelled: "已取消",
};

const initialBookings = [
  ["BK001", "周女士", "188-0000-0000", "舒缓补水护理", "今天", "10:00", "pending", "是", "皮肤泛红", "09:20"],
  ["BK002", "陈女士", "188-0000-0000", "深层清洁护理", "今天", "11:30", "confirmed", "否", "鼻翼黑头明显", "09:40"],
  ["BK003", "林女士", "188-0000-0000", "肌肤焕亮护理", "明天", "14:30", "pending", "是", "想了解护理周期", "10:12"],
  ["BK004", "王女士", "188-0000-0000", "眼周护理", "明天", "16:00", "completed", "否", "老客户", "10:30"],
  ["BK005", "赵女士", "188-0000-0000", "新客体验护理", "后天", "19:00", "cancelled", "是", "临时有事", "11:00"],
  ["BK006", "许女士", "188-0000-0000", "敏感肌修护护理", "本周六", "13:00", "confirmed", "否", "换季敏感", "11:25"],
  ["BK007", "李女士", "188-0000-0000", "舒缓补水护理", "本周六", "17:30", "pending", "是", "第一次到店", "12:10"],
  ["BK008", "何女士", "188-0000-0000", "深层清洁护理", "本周日", "10:00", "confirmed", "否", "希望安静房间", "13:20"],
].map(([id, name, phone, service, date, time, status, firstVisit, note, createdAt]) => ({ id, name, phone, service, date, time, status, firstVisit, note, createdAt }));

export default function BeautyBookingAdminPage() {
  const [filter, setFilter] = useState("all");
  const [bookings, setBookings] = useState(initialBookings);

  const filtered = useMemo(() => bookings.filter((item) => filter === "all" || item.status === filter), [bookings, filter]);

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/beauty-booking-system"
        links={[
          { label: "预约官网", href: "/demos/beauty-booking" },
          { label: "手机端小程序", href: "/demos/beauty-booking/mobile" },
        ]}
      />
      <LiveProjectProof proof={demoProofs.beauty} />
      <Section>
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>后台 Demo</Badge>
              <h1 className="mt-4 text-4xl font-semibold text-slate-950">预约管理后台</h1>
              <p className="mt-3 text-sm text-slate-600">实际项目可增加员工排班、短信提醒、会员档案、消费记录和数据统计。</p>
            </div>
            <Button href="/demos/beauty-booking" variant="secondary">返回预约官网首页</Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {["今日预约：8", "待确认：3", "已确认：4", "已完成：12", "已取消：1"].map((stat) => <Card key={stat}><p className="text-lg font-semibold text-slate-950">{stat}</p></Card>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["all", "pending", "confirmed", "completed", "cancelled"].map((status) => <button className={`rounded-lg border px-3 py-2 text-sm ${filter === status ? "border-cyan-400 bg-cyan-50 text-cyan-700" : "border-slate-200 bg-white text-slate-600"}`} key={status} onClick={() => setFilter(status)}>{status === "all" ? "全部" : statusLabels[status as keyof typeof statusLabels]}</button>)}
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600"><tr>{["编号", "客户", "服务", "日期", "时间", "状态", "首次", "备注", "操作"].map((h) => <th className="px-4 py-3" key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {filtered.map((booking) => (
                    <tr className="border-t border-slate-100" key={booking.id}>
                      <td className="px-4 py-3">{booking.id}</td><td className="px-4 py-3">{booking.name}<br /><span className="text-slate-400">{booking.phone}</span></td><td className="px-4 py-3">{booking.service}</td><td className="px-4 py-3">{booking.date}</td><td className="px-4 py-3">{booking.time}</td><td className="px-4 py-3">{statusLabels[booking.status as keyof typeof statusLabels]}</td><td className="px-4 py-3">{booking.firstVisit}</td><td className="px-4 py-3">{booking.note}</td>
                      <td className="px-4 py-3"><select className="rounded border border-slate-200 px-2 py-1" value={booking.status} onChange={(event) => setBookings((items) => items.map((item) => item.id === booking.id ? { ...item, status: event.target.value } : item))}>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
