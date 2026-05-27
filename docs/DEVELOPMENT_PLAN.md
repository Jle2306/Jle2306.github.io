# 开发计划

## 1. 当前状态

当前项目路径：

```txt
C:\Users\James\Desktop\jj
```

已完成：

- Next.js + TypeScript + Tailwind CSS v4 项目初始化。
- App Router 与 `src` 目录已启用。
- 基础 UI 框架已完成：
  - `Header`
  - `Footer`
  - `Button`
  - `Container`
  - `Section`
  - `Card`
  - `siteConfig`
  - `mainNav`
  - `cn` 工具函数
- 首页当前是基础占位内容。

待补齐：

- `Badge` 组件。
- `CTA` 组件或统一 CTA 区块。
- `src/data` 数据文件。
- `src/types` 类型文件。
- 正式首页业务模块。
- 核心页面、Demo 页面、内容中心、Supabase 文档和接入。

---

## 2. 阶段一：项目理解与文档

目标：以 `docs/CODEX_PROJECT_BRIEF.md` 为最高优先级指南，完成项目文档。

文件：

- `docs/CODEX_PROJECT_BRIEF.md`
- `docs/PRD.md`
- `docs/DEVELOPMENT_PLAN.md`
- `docs/PROJECT_STRUCTURE.md`
- `docs/CODE_STYLE.md`

任务：

- 明确目标客户、商业定位、合规边界。
- 统一路由命名，作品案例使用 `/projects`。
- 记录当前已完成的基础 UI 框架。
- 明确后续开发顺序。

验收：

- 文档齐全。
- 文档与 brief 一致。
- 不写业务代码。

---

## 3. 阶段二：基础框架

目标：完成全站通用 UI 基础设施。

已完成文件：

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Card.tsx`
- `src/config/site.ts`
- `src/config/navigation.ts`
- `src/lib/utils.ts`

还需补充：

- `src/components/ui/Badge.tsx`
- `src/components/sections/ContactCtaSection.tsx`
- `src/types/index.ts`

要求：

- 不开发具体业务页面。
- 不接入 Supabase。
- 保持移动端适配。
- 完成后运行 `npm run lint` 和 `npm run build`。

---

## 4. 阶段三：首页开发

目标：开发正式首页，让客户快速理解服务价值并进入案例或联系咨询。

页面：

- `src/app/page.tsx`

建议组件：

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AudienceSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/FeaturedProjectsSection.tsx`
- `src/components/sections/WhyChooseSection.tsx`
- `src/components/sections/ProcessSection.tsx`
- `src/components/sections/PricingPreviewSection.tsx`
- `src/components/sections/FaqSection.tsx`
- `src/components/sections/ContactCtaSection.tsx`

数据：

- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/pricing.ts`
- `src/data/faqs.ts`

首页必须包含：

1. Hero 首屏
2. 目标客户
3. 服务能力
4. 精选 Demo 案例
5. 为什么选择我
6. 开发流程
7. 价格预览
8. FAQ
9. 联系咨询 CTA

要求：

- 使用 `src/data` 数据驱动。
- 文案面向客户转化。
- 移动端体验好。
- 学生服务文案必须合规。
- 完成后运行 `npm run lint` 和 `npm run build`。

---

## 5. 阶段四：核心页面

目标：完成网站主要转化路径。

页面：

- `src/app/services/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/pricing/page.tsx`
- `src/app/process/page.tsx`
- `src/app/contact/page.tsx`

数据：

- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/pricing.ts`
- `src/data/faqs.ts`

组件：

- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/ServiceCard.tsx`
- `src/components/cards/PricingCard.tsx`
- `src/components/forms/ContactForm.tsx`

重点：

- `/projects` 展示 6 个必做案例。
- `/projects/[slug]` 展示案例痛点、解决方案、功能、技术栈、价格区间和 CTA。
- `/contact` 表单 MVP 可 mock，但必须有基础校验、成功提示和失败提示。
- 学生项目相关文案必须合规。

---

## 6. 阶段五：Demo 页面

目标：完成可演示、可转化的 Demo 页面，用来证明可交付能力。

页面：

- `src/app/demos/personal-brand/page.tsx`
- `src/app/demos/course-landing/page.tsx`
- `src/app/demos/beauty-booking/page.tsx`
- `src/app/demos/beauty-booking/admin/page.tsx`
- `src/app/demos/private-order/page.tsx`
- `src/app/demos/private-order/admin/page.tsx`
- `src/app/demos/student-projects/page.tsx`
- `src/app/demos/simple-crm/page.tsx`

要求：

- 每个 Demo 看起来像真实可交付项目。
- 每个 Demo 都要突出它能帮客户解决的问题。
- 后台页面可使用 mock 数据。
- 表单可以先模拟提交。
- 不接入真实支付。
- 移动端适配。
- 学生项目 Demo 必须明确只提供学习辅导，不提供违规服务。

---

## 7. 阶段六：内容中心

目标：沉淀面向客户的内容，提高搜索和自媒体承接能力。

页面：

- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`

数据：

- `src/data/posts.ts`

内容方向：

- 自媒体博主为什么需要个人品牌官网
- 课程落地页应该包含哪些模块
- 本地商家如何用预约系统减少沟通成本
- 大学生如何做一个能放进简历的 Web 项目
- 小商家如何低成本搭建订单收集系统
- 小团队什么时候需要 CRM
- 用 AI 和 Codex 如何提高网站开发效率
- 个人接单作品集应该怎么做

要求：

- 面向客户讲业务价值。
- 少讲复杂技术。
- 每篇文章底部有联系咨询 CTA。
- 学生相关内容必须合规。

---

## 8. 阶段七：Supabase 文档与接入

先做文档：

- `docs/SUPABASE_SCHEMA.md`

文档内容：

- SQL 建表语句。
- 每张表字段说明。
- RLS 策略建议。
- 前端插入函数示例。
- 环境变量说明。

确认后再接入：

- 安装 Supabase 依赖。
- 创建 `src/lib/supabase.ts`。
- 将联系表单、课程报名表单、预约表单、订单表单、学生咨询表单接入 Supabase。

禁止：

- 不要写死任何密钥。
- 不要提交 `.env.local`。
- 不要暴露服务端密钥。

---

## 9. 阶段八：上线准备

目标：完成 Vercel 上线前的产品、技术和合规检查。

文件：

- `README.md`
- `docs/LAUNCH_CHECKLIST.md`

任务：

- SEO metadata。
- sitemap 和 robots。
- 移动端检查。
- 文案合规检查。
- Vercel 部署说明。
- README 补充商业价值、目标客户、Demo、运行方式、环境变量和合规说明。

上线前必须检查：

- 首页首屏定位清楚。
- 目标客户明确。
- 6 个 Demo 可以访问。
- 作品案例页可以访问。
- 联系表单可用。
- 价格套餐清楚。
- 大学生相关文案合规。
- 没有违规承诺或学术不诚信导向文案。
- 移动端布局正常。
- `npm run lint` 通过。
- `npm run build` 通过。
- 没有硬编码密钥。
- README 完整。
- Vercel 可部署。
- 页面 CTA 明显。
- 每个 Demo 都有商业价值说明。

