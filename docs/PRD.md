# 接单转化型网站与轻量系统作品集 PRD

## 1. 项目定位

本项目是一个面向自媒体平台获客和个人接单转化的网站，不是普通简历站，也不是单纯展示技术栈的程序员作品集。

核心定位：

> 我帮自媒体博主、本地商家、大学生项目学习人群、小电商卖家和小团队，开发能展示、能获客、能预约、能报名、能收订单、能管理客户的网站与轻量系统。

商业化表达：

> 不只是做网页，而是帮客户搭建一个能收客户、收预约、收报名、收订单的小系统。

第一版目标是让潜在客户快速理解：

- 我能服务哪些客户
- 我能开发哪些网站和轻量系统
- 我有哪些可演示 Demo
- 每类 Demo 能解决什么商业问题
- 大概多少钱起
- 如何联系咨询
- 我能把需求变成可以上线的小系统

---

## 2. 目标客户

## 2.1 第一优先级：自媒体博主 / 知识付费博主 / 个人 IP

客户包括：

- 小红书博主
- 抖音博主
- B 站 UP 主
- 公众号作者
- 课程讲师
- 咨询师
- 训练营主理人
- 社群主理人
- 自由职业者
- 个人品牌创业者

常见需求：

- 个人品牌官网
- 课程销售落地页
- 资料领取页
- 社群报名页
- 咨询预约页
- AI 内容工具页
- 学员案例展示页

核心卖点：

- 提升专业感
- 沉淀个人品牌
- 收集潜在客户
- 提高课程、社群、咨询转化率
- 把平台流量导入私域

## 2.2 第二优先级：本地生活商家

客户包括：

- 美容院
- 美甲店
- 理发店
- 健身私教
- 摄影工作室
- 宠物店
- 舞蹈瑜伽馆
- 儿童兴趣班
- 民宿
- 小型餐饮店

常见需求：

- 门店展示页
- 服务价格页
- 在线预约系统
- 客户信息收集
- 活动报名页
- 会员登记系统
- 简单后台管理

核心卖点：

- 减少微信手动沟通
- 避免预约混乱
- 自动收集客户信息
- 提升门店专业感
- 让客户可以 1 分钟内完成预约

## 2.3 第三优先级：大学生项目学习人群

客户包括：

- 计算机相关专业学生
- 需要做课程设计的学生
- 需要学习 Web 项目的学生
- 想做求职作品集的学生
- 想部署项目但不会部署的学生
- 转码学习者

可提供服务：

- Web 项目辅导
- 课程设计技术指导
- 通用项目模板讲解
- 代码结构讲解
- Bug 排查指导
- 项目部署指导
- 答辩演示训练
- 简历作品集项目训练

合规边界：

- 可以写：项目辅导、代码讲解、技术指导、部署指导、模板学习、Bug 排查、作品集训练、答辩演示训练。
- 不能写：代写作业、代做毕设、替交作业、包过、保证通过、伪原创、帮学生应付学校、帮学生欺骗老师、直接完成学校布置的个人作业。

核心定位：

> 我提供学习型项目辅导，帮助学生理解代码、掌握开发流程、完成属于自己的项目。

## 2.4 第四优先级：小电商 / 小品牌 / 直播电商团队

常见需求：

- 商品展示页
- 私域订单收集系统
- 达人合作页
- 样品申请系统
- 品牌介绍页
- 活动落地页
- 简单订单后台

核心卖点：

- 让客户快速了解产品
- 收集订单信息
- 管理达人合作
- 提高品牌可信度
- 降低早期系统成本

## 2.5 第五优先级：小微企业 / 小团队

常见需求：

- 客户管理 CRM
- 报价单生成系统
- 订单管理后台
- 工单系统
- 数据看板
- 库存管理
- 员工任务管理

核心卖点：

- 提高内部管理效率
- 减少表格混乱
- 统一客户信息
- 老板可以看到业务数据
- 让业务流程线上化

---

## 3. 技术栈与开发约束

技术栈：

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

开发约束：

- 使用 Next.js App Router。
- 使用 TypeScript。
- 使用 Tailwind CSS 做样式。
- 组件放在 `src/components`。
- 页面放在 `src/app`。
- 数据配置放在 `src/data`。
- 工具函数放在 `src/lib`。
- 类型定义放在 `src/types`。
- 文档放在 `docs`。
- 表单后期接入 Supabase。
- 不要把任何密钥写死到代码里。
- 必须保证移动端适配。
- 每个阶段完成后运行 `npm run lint` 和 `npm run build`。

---

## 4. 信息架构

MVP 和后续页面结构：

```txt
/
├── /services
├── /projects
├── /projects/[slug]
├── /pricing
├── /process
├── /contact
├── /blog
├── /blog/[slug]
├── /demos/personal-brand
├── /demos/course-landing
├── /demos/beauty-booking
├── /demos/beauty-booking/admin
├── /demos/private-order
├── /demos/private-order/admin
├── /demos/student-projects
└── /demos/simple-crm
```

注意：作品案例主路径统一使用 `/projects`，不要再使用 `/cases` 作为主路径。

---

## 5. 首页规划

首页目标：

让潜在客户在 10 秒内知道我能帮他做什么，并愿意点进案例或联系咨询。

首页必须包含：

1. Hero 首屏
2. 目标客户展示
3. 服务能力展示
4. 精选 Demo 案例
5. 为什么选择我
6. 开发流程
7. 价格套餐预览
8. 常见问题 FAQ
9. 联系咨询 CTA

首页首屏文案建议：

主标题：

> 我帮你开发能获客、能预约、能收订单的网站与轻量系统

副标题：

> 服务自媒体博主、本地商家、大学生项目、小电商卖家和小团队，从展示页面到预约系统、订单系统、后台管理，都可以快速搭建并上线。

按钮：

- 查看作品案例
- 联系我咨询

辅助标签：

- 个人品牌官网
- 课程落地页
- 预约系统
- 订单系统
- 项目辅导
- 后台管理

---

## 6. 服务规划

服务分类：

1. 自媒体与个人 IP 网站开发
2. 本地商家预约系统
3. 大学生项目辅导
4. 小电商与小品牌工具
5. 小企业轻量系统

每个服务应展示：

- 适合人群
- 客户痛点
- 可交付内容
- 核心功能
- 起步价格
- 交付周期
- 相关 Demo
- 咨询 CTA

大学生项目辅导必须展示合规说明：

> 本服务只提供学习指导、代码讲解、技术辅导和部署帮助，不提供代写、代做、替交、包过等违规服务。

---

## 7. 必做 Demo

必须包含 6 类 Demo，实际路由共 8 个页面。

1. 个人 IP 官网 Demo：`/demos/personal-brand`
2. 课程销售落地页 Demo：`/demos/course-landing`
3. 美容院预约系统 Demo：`/demos/beauty-booking`
4. 美容院预约后台 Demo：`/demos/beauty-booking/admin`
5. 私域订单收集系统 Demo：`/demos/private-order`
6. 私域订单后台 Demo：`/demos/private-order/admin`
7. 大学生项目模板库 Demo：`/demos/student-projects`
8. 小企业客户管理后台 Demo：`/demos/simple-crm`

每个 Demo 应突出：

- 目标客户
- 要解决的问题
- 页面或系统功能
- 商业价值
- 可定制方向
- CTA

后台和表单 MVP 可使用 mock 数据，后续再接入 Supabase。

---

## 8. 数据结构规划

## 8.1 作品案例数据

文件：`src/data/projects.ts`

```ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "自媒体" | "本地商家" | "大学生" | "电商卖家" | "小微企业";
  targetUsers: string[];
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  highlights: string[];
  pages: string[];
  demoUrl: string;
  coverImage: string;
  priceRange: string;
  deliveryTime: string;
  customizableOptions: string[];
};
```

必须包含：

- `personal-brand-website`
- `course-landing-page`
- `beauty-booking-system`
- `private-order-system`
- `student-project-library`
- `simple-crm-dashboard`

## 8.2 服务数据

文件：`src/data/services.ts`

```ts
export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  targetUsers: string[];
  painPoints: string[];
  deliverables: string[];
  features: string[];
  startingPrice: string;
  deliveryTime: string;
  examples: string[];
};
```

---

## 9. 价格套餐

价格页路径：`/pricing`

套餐：

1. 基础展示型网站：¥999 起
2. 转化落地页：¥1499 起
3. 预约 / 订单小系统：¥2999 起
4. 大学生项目辅导：¥199 起
5. 定制系统开发：按需求报价

价格文案应保留「起」或「按需求报价」，避免过度承诺。

---

## 10. 联系咨询

路径：`/contact`

表单字段：

- 姓名 / 称呼
- 微信或邮箱
- 客户类型
- 想做的项目类型
- 预算范围
- 期望上线时间
- 需求描述

提交逻辑：

- MVP 可以先 mock。
- 后续接入 Supabase。
- 必须有提交成功和失败提示。
- 必须有基础校验。

---

## 11. Supabase 规划

后期需要支持：

- 联系咨询表单
- 课程报名表单
- 美容院预约表单
- 私域订单表单
- 大学生项目咨询表单
- CRM mock 数据后续持久化

先生成 `docs/SUPABASE_SCHEMA.md`，确认后再写代码接入。

环境变量：

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

禁止：

- 不要把 Supabase key 写死到代码里。
- 不要提交 `.env.local`。
- 不要暴露服务端密钥。

---

## 12. MVP 验收标准

第一版上线后，用户应该清楚看到：

- 我服务哪些客户
- 我能开发什么
- 我有哪些 Demo
- 每个 Demo 能解决什么问题
- 大概价格
- 怎么联系我
- 我能把需求变成可以上线的小系统

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
- 页面 CTA 明显。

