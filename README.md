# JJ Studio 接单转化型作品集网站

这是一个面向自媒体获客和个人接单转化的作品集网站，不是普通程序员简历站。网站目标是让客户快速看到：能服务谁、能开发什么、有哪些 Demo、大概价格、如何联系，以及如何把需求变成可上线的网站或轻量系统。

## 网站定位

我帮自媒体博主、本地商家、大学生项目学习人群、小电商卖家和小团队，开发能展示、能获客、能预约、能报名、能收订单、能管理客户的网站与轻量系统。

## 目标客户

- 自媒体博主 / 知识付费博主 / 个人 IP
- 本地生活商家
- 大学生 Web 项目学习与技术辅导人群
- 小电商 / 小品牌 / 直播电商团队
- 小微企业 / 小团队

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS v4
- Supabase REST 写入预留
- Vercel

## 页面结构

- `/` 首页
- `/services` 服务页
- `/projects` 作品案例
- `/projects/[slug]` 案例详情
- `/pricing` 价格套餐
- `/process` 开发流程
- `/contact` 联系咨询
- `/blog` 内容中心
- `/demos/personal-brand`
- `/demos/course-landing`
- `/demos/beauty-booking`
- `/demos/beauty-booking/admin`
- `/demos/private-order`
- `/demos/private-order/admin`
- `/demos/student-projects`
- `/demos/simple-crm`

## 主要 Demo

- 个人 IP 官网 Demo
- 课程销售落地页 Demo
- 美容院预约系统 Demo
- 私域订单收集系统 Demo
- 大学生项目模板库 Demo
- 小企业客户管理后台 Demo

## 本地运行

```bash
npm.cmd run dev
```

打开：

```txt
http://127.0.0.1:3000
```

## 环境变量

复制 `.env.example`，在本地创建 `.env.local`：

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

当前没有环境变量时，表单会自动使用 mock fallback，并提示当前为演示模式。

## Supabase 配置

1. 创建 Supabase 项目。
2. 在 SQL Editor 执行 `docs/SUPABASE_SCHEMA.md` 中的建表 SQL。
3. 配置 RLS insert 策略。
4. 在 Vercel 或本地 `.env.local` 配置公开 URL 和 anon key。

注意：不要把真实密钥写入代码，不要提交 `.env.local`。

## Vercel 部署

1. 将项目导入 Vercel。
2. 配置环境变量。
3. 执行默认构建命令：

```bash
npm run build
```

4. 绑定域名并检查主要页面。

## 合规说明

大学生项目相关内容只提供学习指导、代码讲解、Bug 排查、部署辅导和作品集训练，不提供违规替代完成、提交或结果承诺等服务。

## 后续开发计划

- 接入真实 Supabase 项目
- 增加后台登录与数据管理
- 增加 Blog 详情页
- 增加案例图集与更多行业 Demo
- 增加表单通知和数据导出能力

