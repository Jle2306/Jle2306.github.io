export type Audience = {
  title: string;
  description: string;
  needs: string[];
};

export type ServiceAbility = {
  title: string;
  description: string;
};

export type ServicePath = {
  title: string;
  audience: string;
  description: string;
  href: string;
  cta: string;
  highlights: string[];
};

export type NeedPath = {
  title: string;
  description: string;
  href: string;
  cta: string;
  tags: string[];
};

export type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type CooperationStep = {
  title: string;
  description: string;
  deliverable: string;
};

export type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const audiences: Audience[] = [
  {
    title: "自媒体博主",
    description: "把小红书、抖音、公众号来的兴趣用户，导向更完整的服务介绍、课程报名和咨询入口。",
    needs: ["提升信任", "承接咨询", "课程报名"],
  },
  {
    title: "本地生活商家",
    description: "让客户不用反复私信询问，就能看懂服务、价格、时间和预约方式。",
    needs: ["展示服务", "减少沟通", "在线预约"],
  },
  {
    title: "大学生项目人群",
    description: "围绕毕业设计、课程设计和 Web 项目，提供结构讲解、排错、部署和演示训练支持。",
    needs: ["项目讲解", "Bug 排查", "部署演示"],
  },
  {
    title: "小电商/小品牌",
    description: "把朋友圈、社群和直播间的订单信息收集起来，减少漏单和手动整理。",
    needs: ["商品陈列", "订单收集", "客服跟进"],
  },
  {
    title: "小微企业",
    description: "把客户线索、报价进度、订单状态和待办事项放进一个清晰的小后台。",
    needs: ["客户管理", "报价跟进", "数据看板"],
  },
];

export const servicePaths: ServicePath[] = [
  {
    title: "学生项目技术支持",
    audience: "毕业设计 / 课程项目",
    description:
      "适合毕业设计、课程设计和 Web 项目遇到结构不清、报错、部署或演示准备问题的学生。重点是帮你理解项目、跑通流程、讲清功能。",
    href: "/projects/student-project-library",
    cta: "查看学生项目案例",
    highlights: ["项目讲解", "Bug 排查", "部署指导", "答辩演示"],
  },
  {
    title: "商家 / 小公司 / 个人 IP",
    audience: "商单网站与小程序开发",
    description:
      "适合想做官网、小程序页面、预约系统、订单收集和轻量后台的客户。可以先上线一个能展示、能预约、能收单的第一版。",
    href: "/solutions",
    cta: "查看商单方案",
    highlights: ["企业官网", "预约系统", "订单收集", "管理后台"],
  },
];

export const needPaths: NeedPath[] = [
  {
    title: "我想做官网获客",
    description: "适合个人 IP、本地商家和服务团队，把定位、服务、案例和联系入口集中展示。",
    href: "/solutions#brand-site",
    cta: "看官网方案",
    tags: ["品牌展示", "案例包装", "联系转化"],
  },
  {
    title: "我想做预约系统",
    description: "适合美容、美甲、摄影、私教、宠物店等门店，让客户在线选服务和时间。",
    href: "/solutions#booking-system",
    cta: "看预约方案",
    tags: ["服务项目", "在线预约", "后台管理"],
  },
  {
    title: "我想做订单收集",
    description: "适合私域卖货、小品牌和直播团队，把聊天里的订单变成结构化表单。",
    href: "/solutions#order-system",
    cta: "看订单方案",
    tags: ["商品展示", "订单表单", "客服核对"],
  },
  {
    title: "我想做小后台",
    description: "适合小团队管理客户、报价、跟进、工单和每日待办，减少表格来回传。",
    href: "/solutions#crm-dashboard",
    cta: "看后台方案",
    tags: ["客户管理", "报价跟进", "数据看板"],
  },
  {
    title: "我想做毕业设计/课程项目技术支持",
    description: "适合毕业设计、课程设计和 Web 项目，需要讲清结构、排查问题和部署演示的学习人群。",
    href: "/projects/student-project-library",
    cta: "看学生案例",
    tags: ["项目讲解", "Bug 排查", "部署指导"],
  },
];

export const serviceAbilities: ServiceAbility[] = [
  {
    title: "个人品牌官网",
    description: "集中展示定位、服务、案例和联系入口，增强客户信任。",
  },
  {
    title: "课程销售落地页",
    description: "围绕报名转化组织课程价值、适合人群、FAQ 和表单。",
  },
  {
    title: "预约系统",
    description: "适合门店、私教和工作室，用页面完成服务选择与预约提交。",
  },
  {
    title: "订单收集系统",
    description: "适合私域卖货和小品牌，先收集订单信息，后续再扩展支付。",
  },
  {
    title: "后台管理系统",
    description: "用轻量后台管理客户、预约、订单、状态和跟进记录。",
  },
  {
    title: "毕业设计/课程项目技术支持",
    description: "帮助学习者理解项目结构、排查问题、完成部署和演示准备。",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "大学生 Web 项目展示站案例",
    category: "大学生 / 毕业设计",
    description: "把课程项目整理成可打开、可讲解、可演示的作品站，方便展示功能、结构和部署效果。",
    href: "/demos/student-projects",
  },
  {
    title: "内容训练营报名落地页案例",
    category: "课程教育 / 知识付费",
    description: "把课程价值、适合人群、课程大纲和报名入口集中到一个页面，减少反复私聊解释。",
    href: "/demos/course-landing",
  },
  {
    title: "巷口食堂点餐小程序案例",
    category: "本地商家 / 餐饮门店",
    description: "为社区餐饮店制作可打开的点餐页面，顾客能看菜单、加购、填写桌号并提交订单。",
    href: "/demos/restaurant-menu",
  },
  {
    title: "悦己美容工作室预约系统案例",
    category: "本地生活商家",
    description: "为美容工作室制作服务展示、在线预约和后台管理，让客户少问一句，门店少记一次。",
    href: "/demos/beauty-booking",
  },
  {
    title: "山间果铺私域订单系统案例",
    category: "小电商 / 小品牌",
    description: "为小电商卖家制作商品展示、订单提交和订单后台，把聊天里的订单变成结构化数据。",
    href: "/demos/private-order",
  },
  {
    title: "设计服务工作室 CRM 后台案例",
    category: "小微企业 / 服务团队",
    description: "为服务型小团队制作客户线索、报价状态、跟进记录和今日待办管理后台。",
    href: "/demos/simple-crm",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "加微信发需求",
    description: "先把课题、报错、行业、参考案例或预算发我。",
  },
  {
    title: "判断适合版本",
    description: "先判断做基础版、标准版还是需要定制开发。",
  },
  {
    title: "确认范围报价",
    description: "讲清页面、功能、后台、数据库和交付周期。",
  },
  {
    title: "开发并给预览",
    description: "先做可打开版本，再阶段性确认页面和交互。",
  },
  {
    title: "修改交付上线",
    description: "确认后完成部署、说明和后续维护建议。",
  },
];

export const cooperationSteps: CooperationStep[] = [
  {
    title: "微信沟通需求",
    description: "学生发课题、代码和报错截图；商家发行业、参考案例、预算和上线时间。",
    deliverable: "初步判断方向",
  },
  {
    title: "拆解功能范围",
    description: "把需求拆成页面、表单、预约、订单、后台、手机端展示等模块。",
    deliverable: "页面与功能范围",
  },
  {
    title: "确认报价周期",
    description: "根据复杂度、数据保存、后台管理和部署方式，给出报价与交付周期。",
    deliverable: "报价与排期",
  },
  {
    title: "开发与阶段确认",
    description: "先给你可打开的预览版本，再确认文案、页面、表单和后台效果。",
    deliverable: "阶段预览链接",
  },
  {
    title: "上线与交付",
    description: "完成构建检查、部署上线、使用说明，并给出后续优化建议。",
    deliverable: "线上地址与说明",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "基础展示型网站",
    price: "¥999 起",
    description: "适合个人博主、小商家和自由职业者先上线一个可信任的展示入口。",
    features: ["1-5 个页面", "响应式设计", "联系表单", "基础 SEO"],
  },
  {
    title: "转化落地页",
    price: "¥1499 起",
    description: "适合课程、社群、活动报名和咨询服务把流量集中到一个报名入口。",
    features: ["销售页结构", "报名表单", "FAQ", "明确 CTA"],
  },
  {
    title: "预约 / 订单小系统",
    price: "¥2999 起",
    description: "适合本地商家、小电商和服务团队先把预约、订单和后台管理跑起来。",
    features: ["前台页面", "预约或订单表单", "后台管理", "状态管理"],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "第一版可以先做多简单？",
    answer:
      "建议先做能展示、能收集需求、能上线传播的 MVP，等有真实咨询后再扩展后台、支付和自动化。",
  },
  {
    question: "可以做预约、订单或后台管理吗？",
    answer:
      "可以。第一版可以先用 mock 或轻量数据结构验证流程，后续再接入 Supabase 做持久化。",
  },
  {
    question: "学生项目技术支持可以帮到什么程度？",
    answer:
      "可以提供项目结构讲解、功能模块拆解、Bug 排查、部署指导和演示思路梳理，不提供代写、代做、替交、包过等违规替代完成服务。",
  },
  {
    question: "上线后还能继续维护吗？",
    answer:
      "可以根据访问反馈、咨询情况和新业务需求，继续优化文案、案例、表单和功能。",
  },
  {
    question: "我还没有域名和服务器，可以先做吗？",
    answer:
      "可以。第一版可以先部署到 GitHub Pages 或其他托管平台，等业务验证后再决定是否购买域名、服务器或升级数据库。",
  },
  {
    question: "可以只做一个预约页或报名页吗？",
    answer:
      "可以。如果你的目标很明确，可以先做一个小而完整的页面，用来承接咨询、预约、报名或订单，再根据反馈扩展后台。",
  },
  {
    question: "后台、数据库和导出功能是不是都包含？",
    answer:
      "不一定。基础页面通常不包含完整后台；如果需要数据库保存、后台管理、Excel 导出或通知提醒，会在报价时单独说明功能范围。",
  },
  {
    question: "后期可以加支付、短信或微信通知吗？",
    answer:
      "可以作为增强功能评估。第一版建议先验证流程，后续再接支付、短信、企业微信通知、订单导出或会员系统。",
  },
  {
    question: "合作前需要我准备什么？",
    answer:
      "学生可以准备课题要求、已有代码、报错截图、想实现的功能和部署问题；商家可以准备行业类型、参考案例、预算范围、上线时间和联系方式。",
  },
  {
    question: "可以帮我看报错或部署项目吗？",
    answer:
      "可以。你可以把报错截图、运行环境、代码结构和部署平台发来，我会先判断问题范围，再给出排查和处理建议。",
  },
  {
    question: "商家没有明确需求可以咨询吗？",
    answer:
      "可以。你只要说清行业、客户来源、想解决的问题和预算范围，我会帮你判断先做官网、预约系统、订单收集还是轻量后台。",
  },
  {
    question: "我只有课题要求，还没有完整代码，可以问吗？",
    answer:
      "可以。你可以先把课题要求、老师给的功能点和你想做的方向发来，我会先判断适合做项目结构梳理、页面规划还是技术路线建议。",
  },
  {
    question: "项目已经报错了，可以先帮我看问题吗？",
    answer:
      "可以。建议把报错截图、运行命令、项目目录和你已经尝试过的方法一起发来，我会先判断问题范围，再决定是否适合继续处理。",
  },
  {
    question: "商家只有一个想法，没有需求文档可以做吗？",
    answer:
      "可以。你只要说清行业、客户是谁、想解决什么问题和大概预算，我会帮你拆出第一版需要的页面和功能。",
  },
  {
    question: "做完可以帮我部署上线吗？",
    answer:
      "可以。项目会根据实际情况选择 GitHub Pages、Vercel 或其他托管方式；如果需要数据库、域名或服务器，也会在报价前说明。",
  },
];
