# 代码与内容规范

## 1. 基础原则

本项目使用 Next.js、TypeScript、App Router 和 Tailwind CSS v4 开发。

代码风格优先保证：

- 结构清晰
- 类型明确
- 组件职责单一
- 页面只负责组合模块
- 样式优先使用 Tailwind utility classes
- 数据配置与业务组件分离
- 移动端优先
- 每个页面都有明确 CTA

本项目是商业转化网站，不是炫技作品。文案必须优先表达客户能获得什么结果，而不是优先展示技术栈。

---

## 2. 目录规范

- 页面放在 `src/app`。
- 组件放在 `src/components`。
- 基础 UI 放在 `src/components/ui`。
- 布局组件放在 `src/components/layout`。
- 页面区块放在 `src/components/sections`。
- 卡片类业务组件放在 `src/components/cards`。
- 表单组件放在 `src/components/forms`。
- 数据配置放在 `src/data`。
- 工具函数放在 `src/lib`。
- 类型定义放在 `src/types`。
- 文档放在 `docs`。

---

## 3. TypeScript 规范

- 所有业务代码使用 TypeScript。
- 组件 props 使用 `type` 定义。
- 避免使用 `any`。
- 不确定类型优先使用 `unknown`，并在使用前做类型收窄。
- 业务类型优先放在 `src/types/index.ts`，也可以按业务拆分。
- 数据文件可以导出自己的类型，但跨模块复用类型应沉淀到 `src/types`。

示例：

```ts
export type Project = {
  slug: string;
  title: string;
  category: "自媒体" | "本地商家" | "大学生" | "电商卖家" | "小微企业";
};
```

---

## 4. 组件规范

组件命名：

- React 组件使用 PascalCase。
- 文件名与组件名保持一致。
- 页面区块组件使用 `Section` 结尾。
- 基础 UI 组件保持通用，不写死具体业务文案。

组件分层：

- `Header`、`Footer` 这类全局组件放 `layout`。
- `Button`、`Card`、`Badge`、`Container`、`Section` 放 `ui`。
- 首页模块放 `sections`。
- `ProjectCard`、`ServiceCard`、`PricingCard` 放 `cards`。
- 表单放 `forms`。

---

## 5. App Router 页面规范

- 页面文件统一命名为 `page.tsx`。
- 页面目录使用小写短横线，例如 `personal-brand`。
- 动态路由使用 `[slug]`。
- 页面尽量只负责组合组件、读取数据、设置 metadata。
- 复杂交互拆到组件中。
- 后台 Demo 页面也必须保证移动端可用。

主路径：

- `/`
- `/services`
- `/projects`
- `/projects/[slug]`
- `/pricing`
- `/process`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/demos/*`

---

## 6. Tailwind CSS 规范

当前项目使用 Tailwind CSS v4：

- 全局入口：`src/app/globals.css`
- Tailwind 引入：`@import "tailwindcss";`
- PostCSS 插件：`@tailwindcss/postcss`
- 当前没有独立 `tailwind.config.ts`

样式建议：

- 优先使用 Tailwind utility classes。
- 视觉保持简洁、专业、偏科技感但不花哨。
- 白色、浅灰、深色文字为主。
- 可以用少量蓝色或青色强调 CTA。
- 卡片使用清晰边框、适度圆角和轻微阴影。
- 避免过度动画、炫技视觉和太小的文字。
- 移动端优先，保证按钮和表单易点击。

---

## 7. 文案规范

文案必须面向客户结果：

- 能获客
- 能预约
- 能报名
- 能收订单
- 能管理客户
- 能提升专业感
- 能减少沟通成本
- 能把业务流程线上化

避免只说：

- 技术栈
- 框架名称
- 开发细节
- 代码能力

技术栈可以出现，但不能放在商业价值前面。

---

## 8. 学生项目合规规范

允许表达：

- 项目辅导
- 代码讲解
- 技术指导
- 部署指导
- 模板学习
- Bug 排查
- 作品集训练
- 答辩演示训练

禁止表达：

- 代写作业
- 代做毕设
- 替交作业
- 包过
- 保证通过
- 伪原创
- 帮学生应付学校
- 帮学生欺骗老师
- 直接完成学校布置的个人作业

推荐合规说明：

> 本服务只提供学习指导、代码讲解、技术辅导和部署帮助，不提供代写、代做、替交、包过等违规服务。

---

## 9. 表单规范

所有表单必须具备：

- 基础必填校验。
- 提交中状态。
- 提交成功提示。
- 提交失败提示。
- 移动端可用布局。
- 清晰隐私说明。

MVP 可先 mock 提交，后续接入 Supabase。

---

## 10. 安全规范

- 不要把 Supabase key 写死到代码里。
- 不要提交 `.env.local`。
- 不要暴露服务端密钥。
- 只允许使用 `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 这类公开变量接入前端。
- 服务端密钥如后续需要，必须只在服务端环境变量使用。

---

## 11. 检查命令

每个阶段完成后运行：

```bash
npm run lint
npm run build
```

Windows PowerShell 如拦截 `npm.ps1`，使用：

```bash
npm.cmd run lint
npm.cmd run build
```

检查重点：

- TypeScript 是否报错。
- ESLint 是否通过。
- 页面是否可访问。
- 移动端布局是否正常。
- 表单是否有成功和失败状态。
- 是否存在硬编码密钥。
- 学生相关内容是否合规。

