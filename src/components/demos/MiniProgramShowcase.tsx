"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type MiniProgramRole = "client" | "merchant";

type MiniProgramTheme = {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  accentSoft: string;
  border: string;
  button: string;
};

type MiniProgramItem = {
  title: string;
  meta: string;
  price?: string;
  tag?: string;
};

type MiniProgramSection = {
  title: string;
  description?: string;
  items?: MiniProgramItem[];
  fields?: string[];
  stats?: { label: string; value: string }[];
  steps?: string[];
};

type MiniProgramScreen = {
  label: string;
  role: MiniProgramRole;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
  sections: MiniProgramSection[];
};

type MiniProgramShowcaseProps = {
  title: string;
  description: string;
  appName: string;
  caseHref: string;
  mainHref: string;
  layout: "restaurant" | "beauty" | "commerce" | "course" | "campus" | "crm";
  theme: MiniProgramTheme;
  screens: MiniProgramScreen[];
};

const roleCopy: Record<MiniProgramRole, { label: string; title: string; desc: string }> = {
  client: {
    label: "客户端小程序",
    title: "客户打开后使用",
    desc: "面向到店顾客、下单用户或预约用户，重点是快速浏览、提交信息和完成业务动作。",
  },
  merchant: {
    label: "商家端小程序",
    title: "老板和员工使用",
    desc: "面向门店、客服或运营人员，重点是查看订单、处理预约、跟进状态和看经营数据。",
  },
};

export function MiniProgramShowcase({
  title,
  description,
  appName,
  caseHref,
  mainHref,
  layout,
  theme,
  screens,
}: MiniProgramShowcaseProps) {
  const [activeRole, setActiveRole] = useState<MiniProgramRole>("client");
  const roleScreens = useMemo(
    () => screens.filter((screen) => screen.role === activeRole),
    [activeRole, screens],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roleScreens[activeIndex] ?? roleScreens[0] ?? screens[0];

  function selectRole(role: MiniProgramRole) {
    setActiveRole(role);
    setActiveIndex(0);
  }

  const stage = getMiniProgramStage(layout);

  return (
    <main className={cn("min-h-screen", stage.page, theme.text)}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
        <Container className="py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <Badge className={theme.accentSoft}>小程序端作品</Badge>
              <span className="text-sm font-medium text-slate-700">客户端 + 商家端双端体验</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="/projects" variant="ghost">返回作品集</Button>
              <Button href={mainHref} variant="secondary">打开网页版</Button>
              <Button href={caseHref} variant="ghost">案例说明</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <div className={cn("grid gap-10 lg:items-center", stage.grid)}>
          <div className={stage.copy}>
            <Badge className={stage.badge}>Mini Program Experience</Badge>
            <h1 className={cn("mt-5 max-w-3xl tracking-tight", stage.title)}>
              {title}
            </h1>
            <p className={cn("mt-5 max-w-2xl text-base leading-8", stage.muted)}>
              {description}
            </p>

            <div className={cn("mt-8 grid gap-4", stage.roleGrid)}>
              {(["client", "merchant"] as MiniProgramRole[]).map((role) => (
                <button
                  className={cn(
                    stage.roleCard,
                    activeRole === role
                      ? stage.roleActive
                      : stage.roleIdle,
                  )}
                  key={role}
                  onClick={() => selectRole(role)}
                  type="button"
                >
                  <p className="text-sm font-semibold">{roleCopy[role].label}</p>
                  <h2 className="mt-2 text-xl font-semibold">{roleCopy[role].title}</h2>
                  <p className={cn("mt-3 text-sm leading-6", activeRole === role ? "text-white/80" : theme.muted)}>
                    {roleCopy[role].desc}
                  </p>
                </button>
              ))}
            </div>

            <div className={cn("mt-6 flex flex-wrap gap-3", stage.screenTabs)}>
              {roleScreens.map((screen, index) => (
                <button
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    activeIndex === index
                      ? cn("text-white", theme.button)
                      : "border-slate-200 bg-white text-slate-600 hover:text-slate-950",
                  )}
                  key={screen.label}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {screen.label}
                </button>
              ))}
            </div>

            <div className={cn("mt-8 grid gap-3", stage.statsGrid)}>
              {active.sections
                .flatMap((section) => section.stats ?? [])
                .slice(0, 3)
                .map((stat) => (
                  <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm" key={stat.label}>
                    <p className={cn("text-xs", theme.muted)}>{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  </div>
                ))}
            </div>
          </div>

          <PhoneFrame
            activeIndex={activeIndex}
            appName={appName}
            layout={layout}
            roleScreens={roleScreens}
            screen={active}
            setActiveIndex={setActiveIndex}
            theme={theme}
          />
        </div>
      </Container>
    </main>
  );
}

function getMiniProgramStage(layout: MiniProgramShowcaseProps["layout"]) {
  const base = {
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
    copy: "",
    grid: "lg:grid-cols-[0.95fr_430px]",
    muted: "text-slate-600",
    page: "bg-slate-50",
    roleActive: "border-transparent bg-slate-950 text-white",
    roleCard: "rounded-3xl border p-5 text-left transition-colors",
    roleGrid: "sm:grid-cols-2",
    roleIdle: "border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-200",
    screenTabs: "",
    statsGrid: "sm:grid-cols-3",
    title: "text-4xl font-semibold sm:text-5xl",
  };

  if (layout === "restaurant") {
    return {
      ...base,
      badge: "border-orange-200 bg-orange-100 text-orange-700",
      grid: "lg:grid-cols-[1fr_420px]",
      muted: "text-stone-700",
      page: "bg-[radial-gradient(circle_at_15%_20%,#ffedd5_0,#fff7ed_34%,#fff_72%)]",
      roleActive: "border-stone-950 bg-stone-950 text-orange-50 shadow-[6px_6px_0_#fb923c]",
      roleCard: "border-2 p-5 text-left transition-colors",
      roleIdle: "border-stone-950 bg-white text-stone-800 hover:bg-orange-50",
      title: "text-5xl font-black leading-none sm:text-6xl",
    };
  }

  if (layout === "beauty") {
    return {
      ...base,
      badge: "border-rose-100 bg-white text-rose-700 shadow-sm",
      grid: "lg:grid-cols-[0.8fr_460px]",
      muted: "text-stone-600",
      page: "bg-[linear-gradient(120deg,#fff7f7,#fbf7f3_45%,#f0fffd)]",
      roleActive: "border-transparent bg-rose-600 text-white shadow-xl shadow-rose-100",
      roleCard: "rounded-[2rem] border p-5 text-left transition-colors",
      roleIdle: "border-rose-100 bg-white/80 text-stone-700 hover:border-rose-200",
      title: "text-4xl font-semibold leading-tight sm:text-5xl",
    };
  }

  if (layout === "commerce") {
    return {
      ...base,
      badge: "border-green-200 bg-lime-100 text-green-800",
      grid: "lg:grid-cols-[0.9fr_430px]",
      muted: "text-green-950/70",
      page: "bg-[linear-gradient(180deg,#f8fbef,#eff9dc)]",
      roleActive: "border-transparent bg-green-700 text-white",
      roleCard: "rounded-2xl border p-5 text-left transition-colors",
      roleIdle: "border-green-200 bg-white text-green-900 hover:bg-lime-50",
    };
  }

  if (layout === "course") {
    return {
      ...base,
      badge: "border-2 border-zinc-950 bg-[#fff06a] text-zinc-950",
      copy: "lg:order-2",
      grid: "lg:grid-cols-[430px_1fr]",
      muted: "font-medium text-zinc-700",
      page: "bg-[#fffdf0]",
      roleActive: "border-zinc-950 bg-zinc-950 text-white shadow-[5px_5px_0_#facc15]",
      roleCard: "border-2 p-5 text-left transition-colors",
      roleIdle: "border-zinc-950 bg-white text-zinc-950 hover:bg-[#fff06a]",
      title: "text-5xl font-black leading-none sm:text-6xl",
    };
  }

  if (layout === "campus") {
    return {
      ...base,
      badge: "border-sky-200 bg-white text-sky-700",
      grid: "lg:grid-cols-[1fr_420px]",
      muted: "text-slate-600",
      page: "bg-[linear-gradient(135deg,#eef7ff,#f6fff0)]",
      roleActive: "border-transparent bg-[#122033] text-white shadow-xl shadow-sky-100",
      roleCard: "rounded-xl border p-5 text-left transition-colors",
      roleIdle: "border-sky-200 bg-white text-[#122033] hover:bg-sky-50",
    };
  }

  return {
    ...base,
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
    grid: "lg:grid-cols-[0.85fr_480px]",
    page: "bg-slate-100",
    roleActive: "border-transparent bg-cyan-400 text-slate-950",
    roleCard: "rounded-xl border p-5 text-left transition-colors",
    roleIdle: "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  };
}

function PhoneFrame({
  activeIndex,
  appName,
  layout,
  roleScreens,
  screen,
  setActiveIndex,
  theme,
}: {
  activeIndex: number;
  appName: string;
  layout: MiniProgramShowcaseProps["layout"];
  roleScreens: MiniProgramScreen[];
  screen: MiniProgramScreen;
  setActiveIndex: (index: number) => void;
  theme: MiniProgramTheme;
}) {
  const goNext = () => setActiveIndex((activeIndex + 1) % roleScreens.length);
  const frame = getPhoneFrameStyle(layout);

  return (
    <div className={cn("mx-auto w-full shadow-2xl", frame.outer)}>
      <div className={cn("overflow-hidden", frame.inner, theme.surface)}>
        <div className={cn("flex items-center justify-between px-5 pt-4 text-xs font-semibold", frame.status)}>
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-4 rounded-sm border border-current" />
            <span className="h-2 w-2 rounded-full bg-current" />
          </span>
        </div>
        <div className={cn("flex items-center justify-between px-5 py-4", frame.header)}>
          <div>
            <p className={cn("text-xs", theme.muted)}>{roleCopy[screen.role].label}</p>
            <h2 className="mt-1 text-lg font-semibold">{appName}</h2>
          </div>
          <div className="flex h-8 items-center gap-1 rounded-full bg-black/5 px-3">
            <span className="size-1.5 rounded-full bg-current" />
            <span className="size-1.5 rounded-full bg-current" />
            <span className="size-1.5 rounded-full bg-current" />
          </div>
        </div>

        <div className={cn("h-[620px] overflow-y-auto px-4 pb-24", frame.body)}>
          {layout === "restaurant" ? (
            <RestaurantScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          ) : layout === "beauty" ? (
            <BeautyScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          ) : layout === "course" ? (
            <CourseScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          ) : layout === "campus" ? (
            <CampusScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          ) : layout === "crm" ? (
            <CrmScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          ) : (
            <CommerceScreen key={screen.label} goNext={goNext} screen={screen} theme={theme} />
          )}
        </div>

        <div className={cn("grid border-t px-2 py-2 text-center text-xs font-semibold", frame.nav)} style={{ gridTemplateColumns: `repeat(${roleScreens.length}, minmax(0, 1fr))` }}>
          {roleScreens.map((item, index) => (
            <button
              className={cn(
                "rounded-xl px-2 py-2 transition-colors",
                activeIndex === index ? cn(theme.accentSoft, "border") : theme.muted,
              )}
              key={item.label}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getPhoneFrameStyle(layout: MiniProgramShowcaseProps["layout"]) {
  const phoneOuter = "max-w-[390px] rounded-[2.25rem] border border-slate-900 bg-slate-950 p-3";
  const phoneInner = "rounded-[1.75rem]";

  if (layout === "restaurant") {
    return {
      body: "bg-[#fff8ed]",
      header: "bg-[#fff8ed]",
      inner: phoneInner,
      nav: "border-orange-100 bg-[#fff8ed]",
      outer: phoneOuter,
      status: "bg-[#fff8ed]",
    };
  }

  if (layout === "beauty") {
    return {
      body: "bg-rose-50/40",
      header: "bg-white/40",
      inner: phoneInner,
      nav: "border-rose-100 bg-white",
      outer: phoneOuter,
      status: "bg-white/40",
    };
  }

  if (layout === "commerce") {
    return {
      body: "bg-[#f8fbef]",
      header: "bg-lime-100",
      inner: phoneInner,
      nav: "border-green-100 bg-white",
      outer: phoneOuter,
      status: "bg-lime-100",
    };
  }

  if (layout === "course") {
    return {
      body: "bg-[#fff06a]",
      header: "border-b-2 border-zinc-950 bg-white",
      inner: phoneInner,
      nav: "border-zinc-950 bg-white",
      outer: phoneOuter,
      status: "bg-white",
    };
  }

  if (layout === "campus") {
    return {
      body: "bg-[#eef7ff]",
      header: "bg-[#122033] text-white",
      inner: phoneInner,
      nav: "border-sky-100 bg-white",
      outer: phoneOuter,
      status: "bg-[#122033] text-white",
    };
  }

  return {
    body: "bg-slate-100",
    header: "bg-slate-950 text-white",
    inner: phoneInner,
    nav: "border-slate-200 bg-slate-950 text-white",
    outer: phoneOuter,
    status: "bg-slate-950 text-white",
  };
}

function RestaurantScreen({ goNext, screen, theme }: ScreenProps) {
  const tabs = screen.role === "merchant" ? ["经营", "订单", "后厨", "菜品"] : ["热卖", "套餐", "主食", "饮品"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="grid grid-cols-[78px_1fr] gap-3">
        <aside className="grid gap-2 text-xs font-black">
          {tabs.map((item) => (
            <button
              className={cn(
                "rounded-xl border-2 border-stone-950 px-2 py-3 text-left transition-colors",
                activeTab === item ? "bg-orange-500 text-white" : "bg-white text-stone-950",
              )}
              key={item}
              onClick={() => setActiveTab(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </aside>
        <div className="rounded-[1.25rem] border-2 border-stone-950 bg-stone-950 p-4 text-white">
          <p className="text-xs text-orange-200">{screen.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-black leading-tight">{screen.title}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-300">{screen.description}</p>
          <button className="mt-5 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black" onClick={goNext} type="button">
            {screen.primaryAction}
          </button>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-stone-950 bg-white p-3 text-xs font-black">
        桌台 A12 · 当前查看：{activeTab}
        {screen.role === "merchant" ? "数据" : "分类"}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {tabs.map((item) => (
          <button
            className={cn(
              "rounded-2xl px-4 py-3 text-xs font-semibold transition-colors",
              activeTab === item ? "bg-stone-950 text-white" : "bg-orange-100 text-stone-700",
            )}
            key={item}
            onClick={() => setActiveTab(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <CommonSections screen={screen} theme={theme} variant="restaurant" />
    </div>
  );
}

function BeautyScreen({ goNext, screen, theme }: ScreenProps) {
  const [activeDay, setActiveDay] = useState("六");

  return (
    <div>
      <div className="rounded-[2rem] bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold text-rose-500">{screen.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{screen.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-500">{screen.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button className="rounded-2xl bg-rose-600 px-4 py-3 text-xs font-semibold text-white" onClick={goNext} type="button">
            {screen.primaryAction}
          </button>
          {screen.secondaryAction ? (
            <button className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-700" onClick={goNext} type="button">
              {screen.secondaryAction}
            </button>
          ) : null}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
        {["一", "二", "三", "四", "五", "六", "日"].map((day) => (
          <button
            className={cn(
              "rounded-2xl py-3 transition-colors",
              activeDay === day ? "bg-rose-600 text-white" : "bg-white text-slate-500 hover:text-slate-950",
            )}
            key={day}
            onClick={() => setActiveDay(day)}
            type="button"
          >
            {day}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">已选择：周{activeDay}</p>
      <CommonSections screen={screen} theme={theme} variant="beauty" />
    </div>
  );
}

function CommerceScreen({ goNext, screen, theme }: ScreenProps) {
  const tabs = screen.role === "merchant" ? ["概览", "订单", "发货", "客户"] : ["热卖", "团购", "新品", "售后"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="rounded-3xl bg-white p-3 shadow-sm">
        <div className="rounded-2xl bg-lime-50 px-4 py-3 text-sm text-green-900/50">搜索商品 / 团购 / 订单</div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-xs font-semibold">
          {tabs.map((item) => (
            <button
              className={cn(
                "rounded-2xl px-2 py-2 transition-colors",
                activeTab === item ? "bg-green-700 text-white" : "bg-lime-100 text-green-800 hover:bg-lime-200",
              )}
              key={item}
              onClick={() => setActiveTab(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[1fr_92px] gap-3">
        <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 to-lime-500 p-5 text-white">
          <p className="text-xs font-semibold text-lime-100">{screen.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{screen.title}</h3>
          <p className="mt-3 text-sm leading-6 text-emerald-50">{screen.description}</p>
        </div>
        <div className="grid gap-2">
          {["预售", "团购", "发货"].map((item) => (
            <div className="rounded-2xl bg-white p-3 text-center text-xs font-semibold text-green-900 shadow-sm" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full rounded-2xl bg-green-700 px-5 py-3 text-xs font-semibold text-white" onClick={goNext} type="button">
        {screen.primaryAction}
      </button>
      <div className="mt-4 hidden gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {tabs.map((item) => (
          <button
            className={cn(
              "shrink-0 rounded-full px-4 py-2 transition-colors",
              activeTab === item ? "bg-emerald-700 text-white" : "bg-white text-emerald-700 hover:bg-emerald-50",
            )}
            key={item}
            onClick={() => setActiveTab(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-emerald-700">当前查看：{activeTab}</p>
      <CommonSections screen={screen} theme={theme} variant="commerce" />
    </div>
  );
}

function CourseScreen({ goNext, screen, theme }: ScreenProps) {
  return (
    <div className="border-4 border-zinc-950 bg-[#fff06a] p-3 shadow-[6px_6px_0_#18181b]">
      <div className="bg-white p-4">
        <p className="inline-flex border-2 border-zinc-950 bg-[#fff06a] px-3 py-1 text-xs font-black">{screen.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-black leading-tight">{screen.title}</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">{screen.description}</p>
        <button className="mt-5 w-full border-2 border-zinc-950 bg-zinc-950 px-5 py-3 text-xs font-black text-white" onClick={goNext} type="button">
          {screen.primaryAction}
        </button>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-black">
        {["打卡", "作业", "直播"].map((item) => (
          <div className="border-2 border-zinc-950 bg-white p-3" key={item}>{item}</div>
        ))}
      </div>
      <CommonSections screen={screen} theme={theme} variant="course" />
    </div>
  );
}

function CampusScreen({ goNext, screen, theme }: ScreenProps) {
  const tabs = screen.role === "merchant" ? ["审核", "发布", "消息", "数据"] : ["教材", "数码", "宿舍", "资料"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="-mx-4 -mt-4 bg-[#122033] p-5 text-white">
        <p className="text-xs font-semibold text-sky-200">{screen.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{screen.title}</h3>
        <p className="mt-3 text-sm leading-6 text-sky-100/80">{screen.description}</p>
        <button className="mt-5 rounded-2xl bg-sky-400 px-5 py-3 text-xs font-semibold text-[#122033]" onClick={goNext} type="button">
          {screen.primaryAction}
        </button>
      </div>
      <div className="mt-4 rounded-3xl bg-white p-3 shadow-sm">
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
        {tabs.map((item) => (
          <button
            className={cn(
              "rounded-2xl px-2 py-3 transition-colors",
              activeTab === item ? "bg-sky-500 text-white" : "bg-white text-sky-700 hover:bg-sky-50",
            )}
            key={item}
            onClick={() => setActiveTab(item)}
            type="button"
          >
            {item}
          </button>
        ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-sky-700">当前查看：{activeTab}</p>
      <CommonSections screen={screen} theme={theme} variant="campus" />
    </div>
  );
}

function CrmScreen({ goNext, screen, theme }: ScreenProps) {
  const tabs = screen.role === "merchant" ? ["线索", "报价", "待办"] : ["概览", "需求", "进度"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="rounded-xl bg-slate-950 p-4 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-cyan-200">{screen.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight">{screen.title}</h3>
          </div>
          <button className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950" onClick={goNext} type="button">
            {screen.primaryAction}
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{screen.description}</p>
      </div>
      <div className="mt-4 rounded-3xl bg-white p-3 shadow-sm">
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
          {tabs.map((item) => (
            <button
              className={cn(
                "rounded-2xl px-2 py-3 transition-colors",
                activeTab === item ? "bg-cyan-400 text-slate-950" : "bg-slate-100 text-slate-600 hover:text-slate-950",
              )}
              key={item}
              onClick={() => setActiveTab(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">当前查看：{activeTab}</p>
      </div>
      <CommonSections screen={screen} theme={theme} variant="crm" />
    </div>
  );
}

type ScreenProps = {
  goNext: () => void;
  screen: MiniProgramScreen;
  theme: MiniProgramTheme;
};

function CommonSections({
  screen,
  theme,
  variant,
}: {
  screen: MiniProgramScreen;
  theme: MiniProgramTheme;
  variant: "restaurant" | "beauty" | "commerce" | "course" | "campus" | "crm";
}) {
  return (
    <div className="mt-4 grid gap-4">
      {screen.sections.map((section) => (
        <section
          className={cn(
            "bg-white p-4 shadow-sm",
            variant === "beauty" ? "rounded-[1.75rem] border border-rose-100" : "rounded-3xl",
            variant === "course" && "border-2 border-zinc-950 shadow-[4px_4px_0_#18181b]",
            variant === "crm" && "border border-slate-200",
          )}
          key={section.title}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-semibold">{section.title}</h4>
              {section.description ? <p className={cn("mt-1 text-xs leading-5", theme.muted)}>{section.description}</p> : null}
            </div>
            <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", theme.accentSoft)}>
              {screen.role === "client" ? "客户用" : "商家用"}
            </span>
          </div>
          {section.stats ? <StatsGrid stats={section.stats} theme={theme} /> : null}
          {section.items ? <ItemList items={section.items} theme={theme} variant={variant} /> : null}
          <FieldsAndSteps section={section} theme={theme} />
        </section>
      ))}
    </div>
  );
}

function ItemList({
  items,
  theme,
  variant,
}: {
  items: MiniProgramItem[];
  theme: MiniProgramTheme;
  variant: "restaurant" | "beauty" | "commerce" | "course" | "campus" | "crm";
}) {
  if (variant === "commerce") {
    return (
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div className="rounded-2xl bg-emerald-50 p-3" key={item.title}>
            <div className="h-20 rounded-2xl bg-gradient-to-br from-lime-200 to-emerald-200" />
            <p className="mt-3 text-sm font-semibold">{item.title}</p>
            <p className="mt-1 text-[11px] text-slate-500">{item.meta}</p>
            <p className="mt-2 font-semibold text-emerald-700">{item.price}</p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "campus") {
    return (
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div className="rounded-2xl bg-sky-50 p-3" key={item.title}>
            <div className="h-16 rounded-xl bg-gradient-to-br from-sky-200 to-lime-100" />
            <p className="mt-3 text-sm font-semibold">{item.title}</p>
            <p className="mt-1 text-[11px] text-slate-500">{item.meta}</p>
            <p className="mt-2 font-semibold text-sky-700">{item.price}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 grid gap-3">
      {items.map((item) => (
        <div className={cn("rounded-2xl border p-3", theme.border)} key={item.title}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className={cn("mt-1 text-xs", theme.muted)}>{item.meta}</p>
            </div>
            {item.price ? <p className={cn("font-semibold", theme.accent)}>{item.price}</p> : null}
          </div>
          {item.tag ? <span className={cn("mt-3 inline-flex rounded-full px-2.5 py-1 text-xs", theme.accentSoft)}>{item.tag}</span> : null}
        </div>
      ))}
    </div>
  );
}

function StatsGrid({ stats, theme }: { stats: { label: string; value: string }[]; theme: MiniProgramTheme }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {stats.map((stat) => (
        <div className={cn("rounded-2xl p-3", theme.bg)} key={stat.label}>
          <p className={cn("text-[11px]", theme.muted)}>{stat.label}</p>
          <p className="mt-1 text-base font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function FieldsAndSteps({ section, theme }: { section: MiniProgramSection; theme: MiniProgramTheme }) {
  return (
    <>
      {section.fields ? (
        <div className="mt-4 grid gap-3">
          {section.fields.map((field) => (
            <div className={cn("rounded-2xl border px-3 py-3 text-sm", theme.border, theme.muted)} key={field}>
              {field}
            </div>
          ))}
        </div>
      ) : null}
      {section.steps ? (
        <div className="mt-4 grid gap-3">
          {section.steps.map((step, index) => (
            <div className="flex gap-3 text-sm" key={step}>
              <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white", theme.button)}>
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
