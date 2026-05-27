# 项目结构说明

## 1. 当前项目状态

当前项目目录：

```txt
C:\Users\James\Desktop\jj
```

已确认：

- Next.js：`16.2.6`
- React：`19.2.4`
- TypeScript：已启用
- ESLint：已启用
- Tailwind CSS：v4
- App Router：已启用
- `src` directory：已启用
- Import alias：`@/*`

当前已完成基础 UI 框架：

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Card.tsx`
- `src/config/site.ts`
- `src/config/navigation.ts`
- `src/lib/utils.ts`

---

## 2. 当前实际结构

```txt
jj
├── docs
│   ├── CODEX_PROJECT_BRIEF.md
│   ├── PRD.md
│   ├── DEVELOPMENT_PLAN.md
│   ├── PROJECT_STRUCTURE.md
│   └── CODE_STYLE.md
├── public
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       └── Section.tsx
│   ├── config
│   │   ├── navigation.ts
│   │   └── site.ts
│   └── lib
│       └── utils.ts
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## 3. 推荐目标结构

后续应逐步整理为：

```txt
src
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── services
│   │   └── page.tsx
│   ├── projects
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   ├── pricing
│   │   └── page.tsx
│   ├── process
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── blog
│   │   ├── page.tsx
│   │   └── [slug]
│   │       └── page.tsx
│   └── demos
│       ├── personal-brand
│       │   └── page.tsx
│       ├── course-landing
│       │   └── page.tsx
│       ├── beauty-booking
│       │   ├── page.tsx
│       │   └── admin
│       │       └── page.tsx
│       ├── private-order
│       │   ├── page.tsx
│       │   └── admin
│       │       └── page.tsx
│       ├── student-projects
│       │   └── page.tsx
│       └── simple-crm
│           └── page.tsx
├── components
│   ├── layout
│   ├── ui
│   ├── sections
│   ├── cards
│   └── forms
├── config
│   ├── site.ts
│   └── navigation.ts
├── data
│   ├── projects.ts
│   ├── services.ts
│   ├── pricing.ts
│   ├── posts.ts
│   └── faqs.ts
├── lib
│   ├── utils.ts
│   └── supabase.ts
└── types
    └── index.ts
```

---

## 4. 目录职责

- `src/app`：页面、路由、布局、metadata、API Route。
- `src/components/layout`：全局 Header、Footer 等布局组件。
- `src/components/ui`：Button、Card、Container、Section、Badge 等基础组件。
- `src/components/sections`：首页和业务页面的大区块组件。
- `src/components/cards`：项目卡片、服务卡片、价格卡片等业务卡片。
- `src/components/forms`：联系表单、报名表单、预约表单、订单表单等。
- `src/config`：站点配置、导航配置。
- `src/data`：MVP 阶段静态数据，后续可逐步接入 Supabase。
- `src/lib`：工具函数和第三方服务封装。
- `src/types`：全局业务类型定义。
- `docs`：产品、开发、数据库、上线和代码规范文档。

---

## 5. 路由命名约定

作品案例统一使用：

```txt
/projects
/projects/[slug]
```

不要使用 `/cases` 作为主案例路径。

Demo 页面统一使用：

```txt
/demos/*
```

博客内容统一使用：

```txt
/blog
/blog/[slug]
```

---

## 6. 当前结构差距

尚未创建：

- `src/data`
- `src/types`
- `src/components/sections`
- `src/components/cards`
- `src/components/forms`
- `src/components/ui/Badge.tsx`
- `src/components/sections/ContactCtaSection.tsx`
- `/services`
- `/projects`
- `/pricing`
- `/process`
- `/contact`
- `/blog`
- `/demos/*`

这些应按 `docs/DEVELOPMENT_PLAN.md` 分阶段推进。

