export type IndustrySolution = {
  id: string;
  title: string;
  subtitle: string;
  suitableFor: string[];
  problems: string[];
  modules: string[];
  deliverables: string[];
  caseHref: string;
  demoHref: string;
  contactHint: string;
};

export const industrySolutions: IndustrySolution[] = [
  {
    id: "student-guidance",
    title: "学生 Web 项目技术支持方案",
    subtitle: "理解项目结构，排查问题，整理演示思路。",
    suitableFor: ["毕业设计", "课程设计", "Web 项目", "作品集准备"],
    problems: ["项目能跑但讲不清", "本地报错和部署卡住", "不知道怎么做演示页面"],
    modules: ["项目结构讲解", "功能模块梳理", "Bug 排查", "部署指导", "演示训练"],
    deliverables: ["讲解记录", "排错建议", "部署步骤", "演示思路", "作品展示页建议"],
    caseHref: "/projects/student-project-library",
    demoHref: "/demos/student-projects",
    contactHint: "只提供技术支持、代码讲解、排错和部署指导，不提供违规替代完成服务。",
  },
  {
    id: "brand-site",
    title: "课程报名落地页方案",
    subtitle: "上线课程介绍、学习安排和报名入口。",
    suitableFor: ["课程讲师", "知识付费博主", "训练营主理人", "社群运营者"],
    problems: ["课程价值讲不清", "用户需要反复私聊确认", "报名入口分散"],
    modules: ["课程介绍", "适合人群", "课程大纲", "报名表单", "FAQ"],
    deliverables: ["课程落地页", "独立报名页", "咨询入口", "手机端小程序展示", "后续支付评估"],
    caseHref: "/projects/course-landing-page",
    demoHref: "/demos/course-landing",
    contactHint: "适合先把课程卖点和报名路径讲清楚，等有真实咨询后再扩展支付和学员管理。",
  },
  {
    id: "restaurant-menu",
    title: "餐饮点餐小程序方案",
    subtitle: "顾客扫码点餐，老板查看经营数据。",
    suitableFor: ["餐饮店", "咖啡店", "轻食店", "档口商家", "社区食堂"],
    problems: ["菜单更新靠图片", "点餐依赖口头沟通", "店长看不到每日经营数据"],
    modules: ["扫码菜单", "分类点餐", "购物车", "结算确认", "经营后台"],
    deliverables: ["点餐页面", "结算页面", "经营后台", "手机端小程序展示", "后厨看板评估"],
    caseHref: "/projects/restaurant-menu-system",
    demoHref: "/demos/restaurant-menu",
    contactHint: "适合先做顾客端点餐流程和老板端经营看板，后续再扩展后厨、桌台和支付。",
  },
  {
    id: "booking-system",
    title: "本地商家预约系统方案",
    subtitle: "客户在线预约，门店后台统一确认。",
    suitableFor: ["美容院", "美甲店", "摄影工作室", "健身私教", "宠物店"],
    problems: ["微信来回确认时间", "服务项目和价格讲不清", "预约信息容易漏记"],
    modules: ["服务项目", "门店介绍", "预约表单", "预约后台", "状态管理"],
    deliverables: ["预约官网", "独立预约页", "管理后台", "手机端小程序展示", "后续数据库接入"],
    caseHref: "/projects/beauty-booking-system",
    demoHref: "/demos/beauty-booking",
    contactHint: "适合从预约流程开始，后续再加会员档案、员工排班和提醒。",
  },
  {
    id: "order-system",
    title: "私域订单收集系统方案",
    subtitle: "把聊天订单变成清晰表单，方便客服核对。",
    suitableFor: ["小电商卖家", "小品牌", "农产品商家", "直播团队", "社群团购"],
    problems: ["订单散落在聊天记录", "客服整理成本高", "地址、规格和备注容易漏"],
    modules: ["商品展示", "订单表单", "订单摘要", "订单后台", "状态跟进"],
    deliverables: ["商品站", "订单提交页", "订单管理后台", "手机端小程序展示", "导出功能评估"],
    caseHref: "/projects/private-order-system",
    demoHref: "/demos/private-order",
    contactHint: "适合先不接真实支付，先把订单信息标准化，再扩展支付和通知。",
  },
  {
    id: "crm-dashboard",
    title: "小团队 CRM 与数据后台方案",
    subtitle: "集中管理客户线索、报价和跟进记录。",
    suitableFor: ["小微企业", "销售团队", "设计工作室", "本地服务团队", "定制服务团队"],
    problems: ["客户信息分散", "报价进度不清楚", "老板看不到今日待办和成交状态"],
    modules: ["数据概览", "客户列表", "报价状态", "跟进记录", "今日待办"],
    deliverables: ["管理后台", "报价单页面", "状态筛选", "手机端老板看板", "权限功能评估"],
    caseHref: "/projects/simple-crm-dashboard",
    demoHref: "/demos/simple-crm",
    contactHint: "适合从 Excel 和微信记录迁移到线上，先做核心流程，再补权限和导出。",
  },
];
