export type WorkPage = {
  label: string;
  href: string;
  description: string;
  type: "frontend" | "admin" | "dashboard" | "landing" | "mobile";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "本地商家" | "课程教育" | "大学生" | "电商卖家" | "小微企业";
  clientName: string;
  deliverable: string;
  result: string;
  targetUsers: string[];
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  highlights: string[];
  pages: string[];
  workPages: WorkPage[];
  demoUrl: string;
  coverImage: string;
  priceRange: string;
  deliveryTime: string;
  customizableOptions: string[];
};

export const projects: Project[] = [
  {
    slug: "restaurant-menu-system",
    title: "巷口食堂点餐小程序案例",
    subtitle: "为一家社区美食店搭建扫码菜单、购物车、堂食/外带和结账确认页面。",
    category: "本地商家",
    clientName: "巷口食堂",
    deliverable: "点餐小程序样板站",
    result: "顾客可以自己浏览菜单并提交订单，减少店员反复解释菜单和手动记录。",
    targetUsers: ["美食店", "咖啡店", "轻食店", "小餐馆", "档口商家"],
    problem: "菜单更新靠图片，顾客下单靠聊天，收银和后厨信息容易不同步。",
    solution: "用扫码点餐页面承接菜单、购物车、堂食/外带、备注和结账确认流程。",
    features: ["扫码菜单", "分类点餐", "购物车", "堂食/外带", "结账确认"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["像真实小程序", "可演示点餐流程", "后续可接后厨和支付"],
    pages: ["/demos/restaurant-menu"],
    workPages: [
      {
        label: "访问点餐页面",
        href: "/demos/restaurant-menu",
        description: "顾客扫码后看到的菜单、购物车、堂食/外带和结账确认页面。",
        type: "frontend",
      },
      {
        label: "进入点餐结算",
        href: "/demos/restaurant-menu/checkout",
        description: "顾客从菜单页跳转进入的独立点餐和结算确认页面。",
        type: "frontend",
      },
      {
        label: "查看经营后台",
        href: "/demos/restaurant-menu/admin",
        description: "餐饮门店店长查看订单、客流、营收、毛利和热卖菜品的数据后台。",
        type: "dashboard",
      },
      {
        label: "查看手机端效果",
        href: "/demos/restaurant-menu/mobile",
        description: "展示顾客端点餐和商家端经营看板的手机小程序式体验。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/restaurant-menu",
    coverImage: "",
    priceRange: "¥2999 起",
    deliveryTime: "5-10 天",
    customizableOptions: ["后厨看板", "桌台管理", "会员优惠券", "支付跳转", "订单统计"],
  },
  {
    slug: "course-landing-page",
    title: "内容训练营报名落地页案例",
    subtitle: "为知识付费客户制作课程介绍、适合人群、课程大纲、报名表单和 FAQ 页面。",
    category: "课程教育",
    clientName: "内容创作训练营",
    deliverable: "课程销售落地页",
    result: "把课程价值、学习安排和报名入口集中在一个页面里，方便从公众号、小红书、社群引流成交。",
    targetUsers: ["课程讲师", "知识付费博主", "训练营主理人", "社群运营者"],
    problem: "课程价值、适合人群、学习收获和报名入口讲不清楚，用户需要反复私聊确认。",
    solution: "用落地页组织痛点、课程大纲、反馈、价格、FAQ 和报名表单。",
    features: ["课程介绍", "适合人群", "课程大纲", "报名表单", "FAQ"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["提升报名转化", "降低沟通成本", "可接私域或支付流程"],
    pages: ["/demos/course-landing"],
    workPages: [
      {
        label: "访问课程落地页",
        href: "/demos/course-landing",
        description: "用户从内容平台进入后看到的课程介绍、报名转化和 FAQ 页面。",
        type: "landing",
      },
      {
        label: "进入报名页面",
        href: "/demos/course-landing/signup",
        description: "用户从课程官网跳转进入的独立报名表单页面。",
        type: "landing",
      },
      {
        label: "查看手机端小程序",
        href: "/demos/course-landing/mobile",
        description: "展示训练营学员端报名学习和老师端招生运营的小程序效果。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/course-landing",
    coverImage: "",
    priceRange: "¥1499 起",
    deliveryTime: "3-6 天",
    customizableOptions: ["报名表单", "优惠券", "支付跳转", "学员案例", "社群引流"],
  },
  {
    slug: "beauty-booking-system",
    title: "悦己美容工作室预约系统案例",
    subtitle: "为本地美容工作室开发服务展示、预约提交和后台预约管理页面。",
    category: "本地商家",
    clientName: "悦己美容工作室",
    deliverable: "预约官网 + 管理后台",
    result: "客户可在线选择服务和时间，门店可统一查看预约状态，减少微信来回沟通。",
    targetUsers: ["美容院", "美甲店", "摄影工作室", "健身私教", "宠物店"],
    problem: "预约靠微信沟通，服务、时间、客户备注容易混乱。",
    solution: "客户在线选择服务和时间，店员在后台统一确认与管理状态。",
    features: ["服务项目", "日期时间选择", "预约表单", "后台列表", "状态切换"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["减少手动沟通", "统一预约信息", "可扩展会员档案"],
    pages: ["/demos/beauty-booking", "/demos/beauty-booking/admin"],
    workPages: [
      {
        label: "访问预约官网",
        href: "/demos/beauty-booking",
        description: "顾客看到的门店介绍、服务项目、时间选择和预约提交页面。",
        type: "frontend",
      },
      {
        label: "进入预约页面",
        href: "/demos/beauty-booking/book",
        description: "顾客从官网按钮跳转进入的独立预约表单页面。",
        type: "frontend",
      },
      {
        label: "查看预约后台",
        href: "/demos/beauty-booking/admin",
        description: "门店员工使用的预约列表、状态筛选和预约状态管理页面。",
        type: "admin",
      },
      {
        label: "查看手机端效果",
        href: "/demos/beauty-booking/mobile",
        description: "展示顾客端预约和商家端门店管理的手机小程序式体验。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/beauty-booking",
    coverImage: "",
    priceRange: "¥2999 起",
    deliveryTime: "5-10 天",
    customizableOptions: ["员工排班", "会员档案", "短信提醒", "消费记录", "数据统计"],
  },
  {
    slug: "private-order-system",
    title: "山间果铺私域订单系统案例",
    subtitle: "为小电商卖家搭建商品展示、订单提交、收货信息和订单后台页面。",
    category: "电商卖家",
    clientName: "山间果铺",
    deliverable: "私域订单收集系统",
    result: "订单信息从聊天记录转为结构化表单，客服更容易核对商品、地址和发货状态。",
    targetUsers: ["小电商卖家", "小品牌", "农产品商家", "直播团队", "私域卖货团队"],
    problem: "商品和订单依赖聊天记录，客服整理成本高且容易漏单。",
    solution: "用商品页面和订单表单先收集信息，再由客服确认付款和发货。",
    features: ["商品列表", "订单摘要", "收货信息", "订单后台", "状态管理"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["不接真实支付也能收单", "适合早期私域成交", "后续可接后台"],
    pages: ["/demos/private-order", "/demos/private-order/admin"],
    workPages: [
      {
        label: "访问品牌商品站",
        href: "/demos/private-order",
        description: "顾客看到的小品牌商品展示、产地故事、团购福利和活动入口页面。",
        type: "frontend",
      },
      {
        label: "进入订单提交页",
        href: "/demos/private-order/order",
        description: "顾客从商品站跳转进入的独立订单表单页面。",
        type: "frontend",
      },
      {
        label: "查看订单后台",
        href: "/demos/private-order/admin",
        description: "商家客服使用的订单列表、订单详情和状态管理页面。",
        type: "admin",
      },
      {
        label: "查看手机端效果",
        href: "/demos/private-order/mobile",
        description: "展示买家端下单和商家端订单处理的手机小程序式体验。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/private-order",
    coverImage: "",
    priceRange: "¥2999 起",
    deliveryTime: "5-10 天",
    customizableOptions: ["商品后台", "订单导出", "团购价格", "优惠码", "企业微信通知"],
  },
  {
    slug: "student-project-library",
    title: "大学生 Web 项目展示站案例",
    subtitle: "为大学生客户制作项目展示站，用来讲清项目功能、技术结构、演示页面和部署方式。",
    category: "大学生",
    clientName: "Web 课程项目客户",
    deliverable: "学习型项目展示站",
    result: "把项目从“只有代码”变成可打开、可讲解、可演示的网站作品，方便复盘、展示和作品集沉淀。",
    targetUsers: ["课程设计学生", "Web 学习者", "转码学习者", "求职作品集准备者"],
    problem: "项目能跑但讲不清结构，部署、数据库和排错容易卡住。",
    solution: "通过项目展示站呈现项目结构、学习重点、辅导内容和部署方式。",
    features: ["项目介绍", "功能展示", "学习重点", "部署说明", "咨询表单"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["强调学习理解", "合规辅导边界", "适合作品集训练"],
    pages: ["/demos/student-projects"],
    workPages: [
      {
        label: "访问项目展示站",
        href: "/demos/student-projects",
        description: "学生项目对外展示页，包含项目首页、功能模块、技术结构和部署说明。",
        type: "frontend",
      },
      {
        label: "发布商品页面",
        href: "/demos/student-projects/publish",
        description: "校园二手交易平台中的独立商品发布表单页面。",
        type: "frontend",
      },
      {
        label: "查看手机端小程序",
        href: "/demos/student-projects/mobile",
        description: "展示校园二手交易学生端和管理员端的小程序效果。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/student-projects",
    coverImage: "",
    priceRange: "¥199 起",
    deliveryTime: "按问题或项目阶段评估",
    customizableOptions: ["项目展示页", "部署清单", "代码讲解页", "学习记录", "咨询表单"],
  },
  {
    slug: "simple-crm-dashboard",
    title: "设计服务工作室 CRM 后台案例",
    subtitle: "为小团队制作客户线索、报价、跟进、成交状态和今日待办管理后台。",
    category: "小微企业",
    clientName: "设计服务工作室",
    deliverable: "客户管理后台",
    result: "团队可以集中管理客户线索和跟进进度，不再依赖分散的微信聊天与 Excel 表格。",
    targetUsers: ["小微企业", "销售团队", "服务型团队", "本地小公司"],
    problem: "客户信息分散在微信和表格里，销售跟进和数据统计不清晰。",
    solution: "用轻量 CRM 管理客户、状态、跟进记录、任务提醒和数据看板。",
    features: ["数据概览", "客户列表", "状态筛选", "跟进记录", "任务提醒"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase 预留", "Vercel"],
    highlights: ["像真实后台", "适合从 Excel 迁移", "后续可加权限"],
    pages: ["/demos/simple-crm"],
    workPages: [
      {
        label: "查看 CRM 后台",
        href: "/demos/simple-crm",
        description: "服务团队使用的数据概览、客户线索、跟进记录和今日待办后台。",
        type: "dashboard",
      },
      {
        label: "生成项目报价单",
        href: "/demos/simple-crm/quote",
        description: "服务团队根据客户需求和服务项目生成报价明细的业务页面。",
        type: "dashboard",
      },
      {
        label: "查看手机端小程序",
        href: "/demos/simple-crm/mobile",
        description: "展示员工移动跟进和老板经营看板的小程序效果。",
        type: "mobile",
      },
    ],
    demoUrl: "/demos/simple-crm",
    coverImage: "",
    priceRange: "按需求报价",
    deliveryTime: "7-15 天",
    customizableOptions: ["登录权限", "多员工协作", "报价单", "合同记录", "数据导出"],
  },
];
