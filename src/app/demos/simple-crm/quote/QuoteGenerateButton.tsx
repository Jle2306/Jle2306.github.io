"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

export function QuoteGenerateButton() {
  const [message, setMessage] = useState("");

  return (
    <div className="grid gap-2">
      <Button onClick={() => setMessage("报价单已生成。实际项目中可继续接入 PDF 导出、打印或发送给客户。")}>
        生成报价单
      </Button>
      {message ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {message}
        </p>
      ) : null}
    </div>
  );
}
