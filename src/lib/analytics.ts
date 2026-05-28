const ANALYTICS_TABLE = "page_visits";
const VISITOR_ID_KEY = "jj_studio_visitor_id";

function getVisitorId(): string {
  if (typeof window === "undefined") return "";

  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = `v_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
}

function getSupabaseUrl(): string {
  return (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
}

function getSupabaseKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
}

let currentVisitId: number | null = null;
let visitStartTime: number = 0;

export async function trackPageVisit(pagePath: string) {
  if (typeof window === "undefined") return;

  const supabaseUrl = getSupabaseUrl();
  const supabaseKey = getSupabaseKey();

  if (!supabaseUrl || !supabaseKey) return;

  const visitorId = getVisitorId();
  visitStartTime = Date.now();

  const payload = {
    visitor_id: visitorId,
    page_path: pagePath,
    visit_time: new Date().toISOString(),
    is_contact_click: pagePath === "/contact",
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${ANALYTICS_TABLE}`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        currentVisitId = data[0].id;
      }
    }
  } catch (err) {
    console.error("Analytics tracking error:", err);
  }
}

export async function trackPageLeave() {
  if (typeof window === "undefined" || !currentVisitId) return;

  const supabaseUrl = getSupabaseUrl();
  const supabaseKey = getSupabaseKey();

  if (!supabaseUrl || !supabaseKey) return;

  const duration = Math.floor((Date.now() - visitStartTime) / 1000);

  try {
    await fetch(
      `${supabaseUrl}/rest/v1/${ANALYTICS_TABLE}?id=eq.${currentVisitId}`,
      {
        method: "PATCH",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          leave_time: new Date().toISOString(),
          duration,
        }),
      },
    );
  } catch (err) {
    console.error("Analytics leave tracking error:", err);
  }
}

export function initAnalytics(pagePath: string) {
  trackPageVisit(pagePath);

  window.addEventListener("beforeunload", trackPageLeave);

  return () => {
    trackPageLeave();
    window.removeEventListener("beforeunload", trackPageLeave);
  };
}
