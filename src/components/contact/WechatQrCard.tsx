import Image from "next/image";

import { cn } from "@/lib/utils";

type WechatQrCardProps = {
  className?: string;
  compact?: boolean;
  dark?: boolean;
  lead?: boolean;
  showText?: boolean;
};

export function WechatQrCard({
  className,
  compact = false,
  dark = false,
  lead = false,
  showText = true,
}: WechatQrCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-sm",
        lead ? "border-slate-200 bg-white p-4" : "",
        dark ? "border-white/10 bg-white text-slate-950" : "border-slate-200 bg-white",
        className,
      )}
    >
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-[112px_1fr] sm:items-center" : "")}>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
          <Image
            alt="微信二维码，扫码添加小詹工作日记咨询项目技术支持和商单开发"
            className={cn("h-auto w-full", lead && !showText ? "max-h-[420px] object-contain" : "")}
            height={720}
            priority={compact}
            src="/contact/wechat-qr.png"
            width={504}
          />
        </div>
        {showText ? (
          <div className={lead ? "px-1" : ""}>
            <p className={cn("font-semibold text-slate-950", lead ? "text-lg" : "text-sm")}>
              扫码添加微信：小詹工作日记
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              看完案例觉得合适，可以直接扫码发我你的项目情况、行业、预算或上线时间。我会先帮你判断适合怎么做。
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
