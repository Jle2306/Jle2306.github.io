-- 访问统计表
CREATE TABLE IF NOT EXISTS page_visits (
  id BIGSERIAL PRIMARY KEY,
  visitor_id TEXT NOT NULL,          -- 匿名访客ID（存储在localStorage）
  page_path TEXT NOT NULL,           -- 访问的页面路径
  visit_time TIMESTAMPTZ NOT NULL,   -- 访问时间
  leave_time TIMESTAMPTZ,            -- 离开时间
  duration INTEGER DEFAULT 0,        -- 停留时长（秒）
  is_contact_click BOOLEAN DEFAULT FALSE, -- 是否点击了联系页面
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建索引加速查询
CREATE INDEX IF NOT EXISTS idx_page_visits_visitor_id ON page_visits(visitor_id);
CREATE INDEX IF NOT EXISTS idx_page_visits_visit_time ON page_visits(visit_time);
CREATE INDEX IF NOT EXISTS idx_page_visits_page_path ON page_visits(page_path);

-- 启用 RLS（行级安全）
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- 允许匿名插入（追踪脚本用）
CREATE POLICY "Allow anonymous insert" ON page_visits
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 允许匿名读取（后台页面用，因为没有用户认证）
CREATE POLICY "Allow anonymous select" ON page_visits
  FOR SELECT
  TO anon
  USING (true);
