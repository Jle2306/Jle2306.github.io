# 项目目录说明

项目路径：

```txt
C:\Users\James\Desktop\jj
```

这是一个 Next.js 项目。它不是传统的“前端一个项目、后端一个项目、数据库一个项目”，而是前端页面、轻量后端能力、数据配置和数据库接入预留都放在同一个 Next.js 项目里。

## 1. 最重要的目录

```txt
src/
```

所有主要开发代码都在这里。

```txt
docs/
```

产品文档、开发计划、数据库设计、上线清单都在这里。

```txt
public/
```

放静态资源，例如图片、图标、未来的案例截图等。当前项目暂时没有实际静态资源，所以这个目录已清理掉；以后需要放图片时可以重新创建。

```txt
node_modules/
```

项目依赖包目录。这个目录不用手动改。

```txt
.next/
```

Next.js 构建缓存目录。这个目录不用手动改，也不用保留；已清理掉。以后运行 `npm.cmd run dev` 或 `npm.cmd run build` 会自动重新生成。

## 2. 前端页面在哪里

前端页面主要在：

```txt
src/app/
```

Next.js App Router 的规则是：一个文件夹就是一个路由页面。

例如：

```txt
src/app/page.tsx
```

对应网站首页：

```txt
/
```

```txt
src/app/services/page.tsx
```

对应：

```txt
/services
```

```txt
src/app/projects/page.tsx
```

对应：

```txt
/projects
```

```txt
src/app/projects/[slug]/page.tsx
```

对应动态案例详情页，例如：

```txt
/projects/beauty-booking-system
```

## 3. Demo / 作品页面在哪里

所有作品 Demo 页面在：

```txt
src/app/demos/
```

现在的主要作品包括：

```txt
src/app/demos/beauty-booking/
```

美容预约官网、预约页、预约后台。

```txt
src/app/demos/restaurant-menu/
```

餐厅首页、点餐结算页、经营后台。

```txt
src/app/demos/private-order/
```

私域商品站、订单提交页、订单后台。

```txt
src/app/demos/course-landing/
```

课程官网、报名页。

```txt
src/app/demos/student-projects/
```

大学生 Web 项目展示站、商品发布页。

```txt
src/app/demos/simple-crm/
```

CRM 后台、报价单生成页。

## 4. 组件在哪里

组件都在：

```txt
src/components/
```

主要分为：

```txt
src/components/ui/
```

基础 UI 组件，例如 Button、Card、Container、Section、Badge。

```txt
src/components/layout/
```

全局 Header 和 Footer。

```txt
src/components/sections/
```

首页用到的模块区块，例如 Hero、服务能力、案例预览、FAQ。

```txt
src/components/cards/
```

卡片组件，例如作品卡片、服务卡片、价格卡片。

```txt
src/components/forms/
```

表单组件。

```txt
src/components/demos/
```

Demo 页面专用组件，例如作品页切换条、Demo CTA、上线项目展示区。

## 5. 数据配置在哪里

数据配置主要在：

```txt
src/data/
```

这些文件不是数据库，而是前端页面展示用的静态数据。

```txt
src/data/projects.ts
```

作品案例数据。这里控制 `/projects` 页面展示哪些案例，以及每个案例有哪些作品页。

```txt
src/data/services.ts
```

服务页数据。

```txt
src/data/pricing.ts
```

价格套餐数据。

```txt
src/data/home.ts
```

首页模块数据。

```txt
src/data/posts.ts
```

博客列表数据。

```txt
src/data/demoProof.ts
```

Demo 页面里的“上线项目感”展示数据。

## 6. 后端在哪里

当前项目没有传统独立后端，例如没有 Java、Spring Boot、Express、NestJS 这样的后端服务。

现在的“后端能力”主要是：

```txt
src/lib/supabase.ts
```

这里封装了向 Supabase 写入数据的逻辑。比如联系表单、预约表单、订单表单提交时，会调用这里。

当前还没有：

```txt
src/app/api/
```

也就是说，目前没有自定义 Next.js API 接口。后续如果要做真正后端接口，可以新增：

```txt
src/app/api/contact/route.ts
src/app/api/orders/route.ts
src/app/api/bookings/route.ts
```

## 7. 数据库在哪里

数据库不是放在项目文件夹里的。

当前规划使用 Supabase，数据库在 Supabase 云端。

本地项目里只有数据库设计文档：

```txt
docs/SUPABASE_SCHEMA.md
```

这里写的是将来要在 Supabase SQL Editor 里执行的建表 SQL。

环境变量示例在：

```txt
.env.example
```

真正使用 Supabase 时，需要创建：

```txt
.env.local
```

并填写：

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

注意：`.env.local` 不要上传，不要公开。

## 8. 配置文件在哪里

```txt
package.json
```

项目脚本和依赖配置。

常用命令：

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

```txt
next.config.ts
```

Next.js 配置。

```txt
tsconfig.json
```

TypeScript 配置。

```txt
eslint.config.mjs
```

ESLint 检查配置。

```txt
src/app/globals.css
```

全局样式。

## 9. 文档在哪里

```txt
docs/PRD.md
```

产品需求文档。

```txt
docs/DEVELOPMENT_PLAN.md
```

开发计划。

```txt
docs/PROJECT_STRUCTURE.md
```

项目结构规划。

```txt
docs/CODE_STYLE.md
```

代码风格规范。

```txt
docs/FINAL_REPORT.md
```

最近开发完成情况。

```txt
docs/LAUNCH_CHECKLIST.md
```

上线前检查清单。

## 10. 你以后找文件可以这样找

想改首页：

```txt
src/app/page.tsx
src/components/sections/
src/data/home.ts
```

想改服务页：

```txt
src/app/services/page.tsx
src/data/services.ts
```

想改作品案例列表：

```txt
src/app/projects/page.tsx
src/components/cards/ProjectCard.tsx
src/data/projects.ts
```

想改某个 Demo：

```txt
src/app/demos/对应-demo-文件夹/
```

想改表单提交逻辑：

```txt
src/components/forms/DemoForm.tsx
src/lib/supabase.ts
```

想改数据库表结构：

```txt
docs/SUPABASE_SCHEMA.md
```

## 11. 一句话理解

```txt
src/app        = 页面和路由
src/components = 可复用组件
src/data       = 页面展示数据
src/lib        = 工具函数和 Supabase 写入逻辑
docs           = 产品、开发、数据库、上线文档
public         = 静态资源
```
