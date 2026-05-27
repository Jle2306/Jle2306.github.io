export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "personal-brand-site",
    title: "自媒体博主为什么需要个人品牌官网",
    excerpt: "当平台主页无法讲清服务价值时，独立官网可以承接咨询、课程和私域入口。",
    category: "自媒体获客",
    readTime: "5 分钟",
  },
  {
    slug: "course-landing-structure",
    title: "课程落地页应该包含哪些模块",
    excerpt: "一个能转化的课程页，需要讲清痛点、适合人群、课程大纲、FAQ 和报名入口。",
    category: "课程转化",
    readTime: "6 分钟",
  },
  {
    slug: "booking-system",
    title: "本地商家如何用预约系统减少沟通成本",
    excerpt: "预约系统的价值不是炫技，而是减少遗漏、统一客户信息、提高到店效率。",
    category: "本地商家",
    readTime: "4 分钟",
  },
];
