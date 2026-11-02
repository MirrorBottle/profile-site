export type Locale = "en" | "ja";
export type Localized = { en: string; ja: string };
export const localize = (en: string, ja: string): Localized => ({ en, ja });

export const DATA = {
  name: "Bayu Setiawan", handle: "MirrorBottle", initials: "BS", url: "https://bayu-setiawan.my.id",
  description: "Full-stack developer in Samarinda, Indonesia. Building web applications with a team in Japan. Coffee, code, and a little curiosity.",
  location: "Samarinda, Indonesia",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Samarinda%2C+Indonesia",
  avatarUrl: "/bayu-portrait.jpg", cv: "/legacy/v2/files/resume.pdf", email: "setiawanbayu66152@gmail.com",
  cafeList: "https://maps.app.goo.gl/99wxTdGodf4WsEwP8",
  social: [
    { name: "GitHub", url: "https://github.com/MirrorBottle" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/setiawan-bayu/" },
    { name: "Instagram", url: "https://www.instagram.com/setiawan__bayu/" },
  ],
  coreSkills: ["Laravel", "React", "Vue.js", "Next.js", "Flutter"],
  languages: ["PHP", "JavaScript", "TypeScript", "Dart", "SQL", "HTML", "CSS / SCSS", "Python", "Java"],
  frameworks: ["Quasar", "Nuxt.js", "Node.js", "Express", "Tailwind CSS", "Bootstrap", "Ant Design", "jQuery", "Gatsby", "Ionic", "Capacitor", "CodeIgniter", "Lumen", "Firebase", "Unity AR"],
  tools: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Swagger", "Jira", "Figma", "VS Code", "npm", "Vercel", "ESLint"],
  work: [
    {
      company: "TechQiao Co., Ltd.", companyJa: "テックチャオ株式会社", logo: "/techqiao.jpg",
      period: localize("Jun 2024 — Present", "2024年6月 — 現在"),
      title: localize("Software Engineer · Full-time", "ソフトウェアエンジニア · フルタイム"),
      location: localize("Shizuoka, Japan · Remote", "日本・静岡 · リモート"),
      description: localize("TechQiao is a game company at its core. My current role focuses on a large-scale enterprise application with Vue 3, Quasar, and Laravel, building frontend and backend features with the team in Japan. I’m also interested in contributing to game development when the opportunity comes.", "TechQiaoはゲーム開発を軸とする会社です。現在はVue 3、Quasar、Laravelを使用した大規模な業務システムを担当し、日本のチームとフロントエンド・バックエンドの機能開発に取り組んでおります。機会があればゲーム開発にも貢献したいと考えております。"),
    },
    {
      company: "Independent freelance", companyJa: "フリーランス", logo: "",
      period: localize("Feb 2022 — Apr 2026", "2022年2月 — 2026年4月"),
      title: localize("Full-stack Developer · Freelance", "フルスタック開発者 · フリーランス"),
      location: localize("Samarinda, Indonesia · Alongside company roles", "インドネシア・サマリンダ · 企業での勤務と並行"),
      description: localize("Built web and mobile projects for clients alongside my company work and university studies.", "企業での仕事や大学での学業と並行し、クライアント向けのWeb・モバイルアプリを開発しました。"),
    },
    {
      company: "Synchate Inc.", companyJa: "株式会社シンクエイト", logo: "/synchate.jpg",
      period: localize("Feb 2022 — Jun 2024", "2022年2月 — 2024年6月"),
      title: localize("Full-stack Developer · Contract", "フルスタック開発者 · 契約"),
      location: localize("Tokyo, Japan · Remote", "日本・東京 · リモート"),
      description: localize("Helped migrate a 20-year-old desktop application to the web using Vue.js and Laravel, with a focus on the frontend and integration with backend services.", "Vue.jsとLaravelを使用し、約20年にわたり利用されてきたデスクトップアプリケーションのWeb化に携わりました。主にフロントエンド開発とバックエンドとの連携を担当いたしました。"),
    },
    {
      company: "PT. Indeks Media Teknologi", companyJa: "PT. Indeks Media Teknologi", logo: "/imt.jpg",
      period: localize("Mar 2021 — Feb 2022", "2021年3月 — 2022年2月"),
      title: localize("Full-stack Developer · Contract", "フルスタック開発者 · 契約"),
      location: localize("Samarinda, Indonesia", "インドネシア・サマリンダ"),
      description: localize("Developed features for a Japanese web application with Vue.js and Laravel, integrating frontend and backend work and collaborating with teams in Indonesia and Japan.", "Vue.jsとLaravelを使用した日本向けWebアプリケーションの機能開発を担当いたしました。日本とインドネシアのチームと連携し、フロントエンドとバックエンドを結ぶ機能を実装しました。"),
    },
    {
      company: "Thortech Asia Software", companyJa: "Thortech Asia Software", logo: "/thortech.jpg",
      period: localize("Mar 2020 — Mar 2021", "2020年3月 — 2021年3月"),
      title: localize("Freelance Web Developer", "Web開発者 · フリーランス"),
      location: localize("Samarinda, Indonesia", "インドネシア・サマリンダ"),
      description: localize("Worked on React and Laravel projects in a four-person team, taking the lead on frontend implementation.", "4人のチームでReactとLaravelのプロジェクトに参加し、フロントエンドの実装を中心に担当しました。"),
    },
  ],
  education: [
    { school: "Universitas Mulawarman", logo: "/unmul.png", period: localize("2021 — Sep 2026", "2021年 — 2026年9月"), degree: localize("Sarjana Komputer (S.Kom)", "情報系学士（S.Kom）") },
    { school: "SMKN 7 Samarinda", logo: "/smk7.png", period: localize("2018 — 2020", "2018年 — 2020年"), degree: localize("Vocational education · Software Engineering", "職業高校 · ソフトウェア工学") },
  ],
  credentials: [
    { title: "TOEIC", value: "970", detail: localize("English", "英語") },
    { title: "TOEFL ITP", value: "600", detail: localize("Aug 2025 · Valid through Aug 2027", "2025年8月取得 · 2027年8月まで有効") },
    { title: "JLPT", value: "N5", detail: localize("Jul 2026 · Studying toward N3", "2026年7月取得 · N3に向けて学習中") },
  ],
};
