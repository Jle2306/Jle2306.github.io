"use client";

import { type FormEvent, useState } from "react";

import { insertRecord, type SupabaseInsertResult } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";

export type DemoFormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

type DemoFormProps = {
  table: string;
  fields: DemoFormField[];
  submitLabel?: string;
  successMessage: string;
  transform?: (values: Record<string, string>) => Record<string, unknown>;
};

type FormStatus = {
  type: "success" | "error";
  message: string;
  mode?: SupabaseInsertResult["mode"];
};

export function DemoForm({
  table,
  fields,
  submitLabel = "提交",
  successMessage,
  transform,
}: DemoFormProps) {
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(
      fields.map((field) => [field.name, String(data.get(field.name) || "").trim()]),
    );

    const missingField = fields.find((field) => field.required && !values[field.name]);
    if (missingField) {
      setStatus({ type: "error", message: `请填写：${missingField.label}` });
      return;
    }

    const phoneField = fields.find((field) => field.type === "tel" && values[field.name]);
    if (phoneField && !/^1\d{10}$|^188-0000-0000$/.test(values[phoneField.name])) {
      setStatus({ type: "error", message: "请填写有效的手机号。" });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await insertRecord(table, {
        ...(transform ? transform(values) : values),
        created_at: new Date().toISOString(),
      });
      form.reset();
      setStatus({
        type: "success",
        mode: result.mode,
        message: successMessage,
      });
    } catch {
      setStatus({
        type: "error",
        message: "提交失败，请稍后重试或直接通过微信/邮箱联系。",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label className="grid gap-2 text-sm font-medium text-slate-700" key={field.name}>
          {field.label}
          {field.type === "textarea" ? (
            <textarea
              className="min-h-28 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-400"
              name={field.name}
              placeholder={field.placeholder}
            />
          ) : field.type === "select" ? (
            <select
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-400"
              name={field.name}
              defaultValue=""
            >
              <option value="" disabled>
                请选择
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition-colors focus:border-cyan-400"
              name={field.name}
              placeholder={field.placeholder}
              type={field.type || "text"}
            />
          )}
        </label>
      ))}
      {status ? (
        <p
          className={
            status.type === "success"
              ? "rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
              : "rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700"
          }
        >
          {status.message}
        </p>
      ) : null}
      <Button className="w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? "提交中..." : submitLabel}
      </Button>
    </form>
  );
}
