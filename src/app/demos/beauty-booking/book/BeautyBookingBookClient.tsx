"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  beautyDates,
  beautyServices,
  beautyTimes,
  fullBeautyTimes,
} from "@/app/demos/beauty-booking/data";
import { insertRecord } from "@/lib/supabase";

export function BeautyBookingBookClient() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") ?? "";
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [firstVisit, setFirstVisit] = useState("是");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedService = useMemo(
    () => beautyServices.find(([title]) => title === service),
    [service],
  );

  async function submit() {
    setStatus("");
    if (!service || !date || !time || !name || !phone) {
      setStatus("请先选择服务、日期、时间，并填写姓名和手机号。");
      return;
    }
    if (!/^1\d{10}$|^188-0000-0000$/.test(phone)) {
      setStatus("请填写有效的手机号。");
      return;
    }
    setSubmitting(true);
    try {
      const result = await insertRecord("beauty_bookings", {
        service_name: service,
        booking_date: date,
        booking_time: time,
        customer_name: name,
        phone,
        note,
        first_visit: firstVisit === "是",
        status: "pending",
      });
      setStatus(
        `预约已提交。实际项目中，店员可以在后台查看并确认预约。${
          result.mode === "mock" ? ` ${result.message}` : ""
        }`,
      );
      setName("");
      setPhone("");
      setNote("");
    } catch {
      setStatus("提交失败，请稍后重试。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/beauty-booking-system"
        links={[
          { label: "预约官网", href: "/demos/beauty-booking" },
          { label: "商家管理后台", href: "/demos/beauty-booking/admin" },
          { label: "手机端小程序", href: "/demos/beauty-booking/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#fbf7f3] text-stone-950">
        <header className="border-b border-stone-200 bg-white/80">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">YUEJI BOOKING</p>
              <p className="mt-1 text-xl font-semibold">在线预约</p>
            </div>
            <Button href="/demos/beauty-booking" variant="secondary">
              返回官网首页
            </Button>
          </Container>
        </header>

        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-5">
                <Card className="bg-stone-950 text-white">
                  <p className="text-sm font-semibold text-cyan-200">BOOKING STEP</p>
                  <h1 className="mt-4 text-4xl font-semibold">选择护理项目和到店时间</h1>
                  <p className="mt-5 text-sm leading-7 text-stone-200">
                    这是独立预约页，真实项目里通常从官网、社群、小红书链接或门店二维码跳转进入。
                  </p>
                </Card>
                <Card className="bg-white">
                  <h2 className="text-2xl font-semibold">预约摘要</h2>
                  <div className="mt-5 grid gap-3 text-sm text-stone-600">
                    <p>项目：{service || "未选择"}</p>
                    <p>日期：{date || "未选择"}</p>
                    <p>时间：{time || "未选择"}</p>
                    <p>价格：{selectedService?.[2] ?? "待确认"}</p>
                  </div>
                </Card>
              </div>

              <Card className="bg-white">
                <h2 className="text-3xl font-semibold">预约表单</h2>
                <div className="mt-6 grid gap-6">
                  <div>
                    <p className="text-sm font-medium text-stone-700">服务项目</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {beautyServices.map(([title, duration, price]) => (
                        <button
                          className={`rounded-2xl border p-4 text-left text-sm ${
                            service === title
                              ? "border-cyan-400 bg-cyan-50 text-cyan-800"
                              : "border-stone-200 bg-white text-stone-700"
                          }`}
                          key={title}
                          onClick={() => setService(title)}
                          type="button"
                        >
                          <span className="font-semibold">{title}</span>
                          <span className="mt-2 block text-xs">
                            {duration} · {price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <SelectButtons disabled={[]} label="日期" onChange={setDate} options={beautyDates} value={date} />
                  <SelectButtons disabled={fullBeautyTimes} label="时间" onChange={setTime} options={beautyTimes} value={time} />
                  <Input label="姓名" onChange={setName} value={name} />
                  <Input label="手机号" onChange={setPhone} value={phone} />
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    皮肤状态 / 备注
                    <textarea
                      className="min-h-24 rounded-xl border border-stone-200 px-3 py-2"
                      onChange={(event) => setNote(event.target.value)}
                      placeholder="例如：泛红、干燥、第一次到店，希望先做皮肤评估"
                      value={note}
                    />
                  </label>
                  <SelectButtons
                    disabled={[]}
                    label="是否首次到店"
                    onChange={setFirstVisit}
                    options={["是", "否"]}
                    value={firstVisit}
                  />
                  {status ? <p className="rounded-xl bg-cyan-50 px-4 py-3 text-sm text-cyan-800">{status}</p> : null}
                  <Button disabled={submitting} onClick={submit}>
                    {submitting ? "提交中..." : "提交预约"}
                  </Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}

function SelectButtons({
  disabled = [],
  label,
  onChange,
  options,
  value,
}: {
  disabled?: string[];
  label: string;
  onChange: (value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-700">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            className={`rounded-xl border px-4 py-2 text-sm ${
              value === option ? "border-cyan-400 bg-cyan-50 text-cyan-700" : "border-stone-200 bg-white text-stone-600"
            } ${disabled.includes(option) ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={disabled.includes(option)}
            key={option}
            onClick={() => onChange(option)}
            type="button"
          >
            {option}
            {disabled.includes(option) ? " 已约满" : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

function Input({
  label,
  onChange,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-stone-700">
      {label}
      <input
        className="rounded-xl border border-stone-200 px-3 py-2 text-sm"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </label>
  );
}
