"use client";

import { useCallback, useEffect, useState } from "react";

const ADMIN_PASSWORD = "jjstudio2024";

type PageVisit = {
  id: number;
  visitor_id: string;
  page_path: string;
  visit_time: string;
  leave_time: string | null;
  duration: number;
  is_contact_click: boolean;
};

type DailyStats = {
  date: string;
  visitors: number;
  avgDuration: number;
  contactClicks: number;
};

export function AdminClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [visits, setVisits] = useState<PageVisit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("密码错误");
    }
  };

  const fetchVisits = useCallback(async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      setError("Supabase 未配置");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/page_visits?order=visit_time.desc&limit=1000`,
        {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setVisits(data);
      } else {
        setError("获取数据失败");
      }
    } catch {
      setError("网络错误");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchVisits();
    }
  }, [isAuthenticated, fetchVisits]);

  const getDailyStats = (): DailyStats[] => {
    const statsMap = new Map<
      string,
      { visitors: Set<string>; totalDuration: number; count: number; contactClicks: number }
    >();

    visits.forEach((visit) => {
      const date = visit.visit_time.split("T")[0];
      if (!statsMap.has(date)) {
        statsMap.set(date, {
          visitors: new Set(),
          totalDuration: 0,
          count: 0,
          contactClicks: 0,
        });
      }
      const stat = statsMap.get(date)!;
      stat.visitors.add(visit.visitor_id);
      stat.totalDuration += visit.duration;
      stat.count++;
      if (visit.is_contact_click) {
        stat.contactClicks++;
      }
    });

    return Array.from(statsMap.entries())
      .map(([date, stat]) => ({
        date,
        visitors: stat.visitors.size,
        avgDuration: stat.count > 0 ? Math.round(stat.totalDuration / stat.count) : 0,
        contactClicks: stat.contactClicks,
      }))
      .sort((a, b) => b.date.localeCompare(a.date));
  };

  const getTotalStats = () => {
    const uniqueVisitors = new Set(visits.map((v) => v.visitor_id)).size;
    const totalDuration = visits.reduce((sum, v) => sum + v.duration, 0);
    const avgDuration = visits.length > 0 ? Math.round(totalDuration / visits.length) : 0;
    const contactClicks = visits.filter((v) => v.is_contact_click).length;

    return { uniqueVisitors, avgDuration, contactClicks, totalVisits: visits.length };
  };

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}秒`;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}分${secs}秒`;
  };

  const getPopularPages = () => {
    const pageMap = new Map<string, number>();
    visits.forEach((v) => {
      pageMap.set(v.page_path, (pageMap.get(v.page_path) || 0) + 1);
    });
    return Array.from(pageMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-slate-950">JJ Studio 后台</h1>
          <p className="mt-2 text-sm text-slate-600">请输入管理员密码</p>
          <input
            type="password"
            className="mt-6 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <button
            onClick={handleLogin}
            className="mt-4 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            登录
          </button>
        </div>
      </div>
    );
  }

  const dailyStats = getDailyStats();
  const totalStats = getTotalStats();
  const popularPages = getPopularPages();

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-950">访问统计</h1>
          <button
            onClick={fetchVisits}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-slate-50"
          >
            刷新数据
          </button>
        </div>

        {loading ? (
          <p className="mt-8 text-slate-600">加载中...</p>
        ) : (
          <>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="总访客数"
                value={totalStats.uniqueVisitors}
                subtitle="独立访客"
              />
              <StatCard
                title="总访问量"
                value={totalStats.totalVisits}
                subtitle="页面浏览"
              />
              <StatCard
                title="平均停留"
                value={formatDuration(totalStats.avgDuration)}
                subtitle="每次访问"
              />
              <StatCard
                title="联系转化"
                value={totalStats.contactClicks}
                subtitle="点击联系页"
              />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow">
                <h2 className="text-lg font-semibold text-slate-950">每日统计</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-500">
                        <th className="pb-3 pr-4">日期</th>
                        <th className="pb-3 pr-4">访客</th>
                        <th className="pb-3 pr-4">平均停留</th>
                        <th className="pb-3">联系点击</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dailyStats.slice(0, 14).map((stat) => (
                        <tr key={stat.date} className="border-b border-slate-50">
                          <td className="py-3 pr-4 text-slate-900">{stat.date}</td>
                          <td className="py-3 pr-4 font-medium">{stat.visitors}</td>
                          <td className="py-3 pr-4 text-slate-600">
                            {formatDuration(stat.avgDuration)}
                          </td>
                          <td className="py-3">
                            <span
                              className={
                                stat.contactClicks > 0
                                  ? "font-medium text-green-600"
                                  : "text-slate-400"
                              }
                            >
                              {stat.contactClicks}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <h2 className="text-lg font-semibold text-slate-950">热门页面</h2>
                <div className="mt-4 space-y-3">
                  {popularPages.map(([path, count]) => (
                    <div key={path} className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">{path}</span>
                      <span className="text-sm font-medium text-slate-950">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string | number;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
    </div>
  );
}
