export type PricingPlan = {
  group: "student" | "business";
  title: string;
  price: string;
  suitableFor: string[];
  includes: string[];
  note: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    group: "student",
    title: "单次问题排查",
    price: "¥99 起",
    suitableFor: ["报错处理", "运行失败", "环境配置", "部署卡住"],
    includes: ["问题定位", "报错解释", "处理建议", "必要代码讲解"],
    note: "适合一个明确问题或一个报错点。",
  },
  {
    group: "student",
    title: "项目模块讲解",
    price: "¥199 起",
    suitableFor: ["Web 项目", "毕业设计", "课程设计", "功能讲解"],
    includes: ["项目结构梳理", "核心模块讲解", "数据库/接口说明", "演示思路建议"],
    note: "适合项目能跑，但讲不清结构和功能。",
  },
  {
    group: "student",
    title: "部署 / 演示指导",
    price: "¥199 起",
    suitableFor: ["项目部署", "上线演示", "答辩准备", "作品展示"],
    includes: ["部署步骤", "演示流程", "常见问题排查", "展示页面建议"],
    note: "适合需要把项目跑起来、讲出来、展示出来。",
  },
  {
    group: "business",
    title: "基础展示型网站",
    price: "¥999 起",
    suitableFor: ["个人博主", "小商家", "自由职业者"],
    includes: ["1-5 个页面", "响应式设计", "联系表单", "基础 SEO", "上线部署"],
    note: "适合先建立专业展示阵地。",
  },
  {
    group: "business",
    title: "转化落地页",
    price: "¥1499 起",
    suitableFor: ["课程", "社群", "训练营", "活动报名", "咨询服务"],
    includes: ["销售页", "报名表单", "FAQ", "CTA", "数据收集"],
    note: "适合承接自媒体流量。",
  },
  {
    group: "business",
    title: "预约 / 订单小系统",
    price: "¥2999 起",
    suitableFor: ["本地商家", "小电商", "服务团队"],
    includes: ["前台页面", "预约 / 订单表单", "后台管理", "状态管理"],
    note: "适合把线下沟通搬到线上。",
  },
  {
    group: "business",
    title: "定制系统开发",
    price: "按需求报价",
    suitableFor: ["小团队", "小微企业", "有具体业务流程的客户"],
    includes: ["CRM", "报价系统", "工单系统", "数据看板", "订单后台"],
    note: "适合已有明确业务流程的系统化需求。",
  },
];
