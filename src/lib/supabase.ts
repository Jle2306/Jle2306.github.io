export type SupabaseInsertResult = {
  mode: "supabase" | "mock";
  message: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function getSupabaseRestUrl(table: string) {
  const baseUrl = (supabaseUrl as string).replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");

  return `${baseUrl}/rest/v1/${table}`;
}

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function insertRecord(
  table: string,
  payload: Record<string, unknown>,
): Promise<SupabaseInsertResult> {
  if (!isSupabaseConfigured()) {
    await new Promise((resolve) => setTimeout(resolve, 700));

    return {
      mode: "mock",
      message: "当前为演示模式，配置 Supabase 后可保存到数据库。",
    };
  }

  const response = await fetch(getSupabaseRestUrl(table), {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey as string,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
  }

  return {
    mode: "supabase",
    message: "信息已保存到 Supabase。",
  };
}
