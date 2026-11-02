import legacy from "./legacy-projects.json";
import { localize, type Localized } from "./resume";

export type Category = "web" | "mobile" | "compro" | "other";
export type Project = {
  id: string; title: string; client: Localized; category: Category;
  description: Localized; technologies: string[]; images: string[];
  featured: boolean; url?: string;
};
const descriptions: Record<string, Localized> = {
  "japan.jpg": localize("A long-running enterprise project for a confidential Japanese client. Contributed to modernizing a legacy desktop application for the web with Vue.js and Laravel.", "日本の非公開クライアント向けに、長期にわたる業務システム開発に携わりました。Vue.jsとLaravelを使用し、既存のデスクトップアプリケーションのWeb化を担当いたしました。"),
  "distan-kubar.png": localize("Public-facing website for the agriculture department of Kutai Barat.", "西クタイ県農業局の公開Webサイト。"),
  "imm.png": localize("Maintenance work on a vehicle management system for PT. Indominco Mandiri.", "PT. Indominco Mandiri向け車両管理システムの保守。"),
  "siabanggp.png": localize("A web system for the Balikpapan public works department.", "バリクパパン市公共事業局向けのWebシステム。"),
  "online-kubar.png": localize("A web application for DISKOMINFO Kutai Barat.", "西クタイ県の通信情報局向けWebアプリ。"),
  "imagin-sketch.png": localize("A personal web project built with Gatsby, React, and TypeScript.", "Gatsby、React、TypeScriptで制作した個人Webプロジェクト。"),
  "citra.png": localize("A Sharia fintech web application built with Vue.js and Laravel.", "Vue.jsとLaravelを使用した、イスラム金融向けのWebアプリケーションです。"),
  "perumdam.png": localize("A flood reporting web project, listed in the earlier portfolio as thesis work for a client.", "洪水報告のWebプロジェクト。旧ポートフォリオではクライアント向けの卒業研究関連案件として掲載。"),
  "natari.png": localize("A company profile website for Natari.", "Natariの企業紹介Webサイト。"),
  "vote.jpg": localize("An electronic voting web application for Konda 2 Balikpapan.", "Konda 2 Balikpapan向けの電子投票Webアプリ。"),
  "kenji.png": localize("A public profile website for GKII Balikpapan.", "GKII Balikpapanの紹介Webサイト。"),
  "bdriver.png": localize("A vehicle management web system for Bank Kaltimtara.", "Bank Kaltimtara向けの車両管理Webシステム。"),
  "anandita.png": localize("A company profile website for PT. Anandita Putri Akmal.", "PT. Anandita Putri Akmalの企業紹介Webサイト。"),
  "sidayaku.png": localize("An online visit system built with Laravel and jQuery.", "LaravelとjQueryで開発したオンライン訪問管理システム。"),
  "sidabusu.png": localize("A vehicle management project spanning web and mobile, built with Laravel and Ionic.", "LaravelとIonicを使ったWeb・モバイル対応の車両管理プロジェクト。"),
  "simpeg.png": localize("A staff management system with a React frontend and Lumen backend.", "ReactのフロントエンドとLumenのバックエンドを使った職員管理システム。"),
  "naj.png": localize("Maintenance work on NAJ's Laravel-based e-procurement system.", "NAJのLaravel製電子調達システムの保守。"),
  "gjmf.png": localize("A Vue.js and Node.js web project for FKIP at Universitas Mulawarman.", "ムラワルマン大学FKIP向けのVue.js・Node.jsのWebプロジェクト。"),
  "pt-anandita-app.png": localize("A mobile application for PT. Anandita Putri Akmal, built with Flutter and Laravel.", "FlutterとLaravelで開発したPT. Anandita Putri Akmal向けモバイルアプリ。"),
  "citra-mobile.png": localize("The Citra99 mobile application, built with Flutter and Laravel.", "FlutterとLaravelで開発したCitra99のモバイルアプリ。"),
  "citra-profile.png": localize("A company profile and auction website for Citra99.", "Citra99の企業紹介・オークションWebサイト。"),
  "simpanin.png": localize("A personal mobile project built with Flutter and Firebase.", "FlutterとFirebaseで制作した個人モバイルプロジェクト。"),
  "pourview.png": localize("A personal augmented reality experiment built with Unity.", "Unityを使用し、個人で制作したARの実験プロジェクトです。"),
  "loakulukota.png": localize("A resident data collection application for Dusun Loa Kulu Kota.", "Dusun Loa Kulu Kota向けの住民データ収集アプリ。"),
  "flutix.png": localize("A personal Flutter and Firebase mobile project.", "FlutterとFirebaseを使った個人モバイルプロジェクト。"),
  "livvy.png": localize("A hackathon concept exploring blockchain for home down payments. I proposed the blockchain idea and developed the app. Favorite Winner at Hackathon 4.0 × #Hack4ID, 2023.", "住宅購入の頭金にブロックチェーンを活用する企画です。アイデアの提案とアプリケーション開発を担当し、2023年のHackathon 4.0 × #Hack4IDでFavorite Winnerを受賞いたしました。"),
};
const clientNames: Record<string, Localized> = {
  "Classified Client": localize("Confidential client · Japan", "非公開クライアント · 日本"),
  "Personal Client": localize("Client project", "クライアント案件"),
  "Personal Project": localize("Personal project", "個人プロジェクト"),
  "Self Project": localize("Personal project", "個人プロジェクト"),
  "Hackathon": localize("Hackathon · 2023", "ハッカソン · 2023年"),
};

export const projects: Project[] = legacy.map((project) => ({
  id: project.img.replace(/\.[^.]+$/, ""),
  title: project.img === "japan.jpg" ? "Japanese enterprise application" : project.img === "distan-kubar.png" ? "DISTAN Kutai Barat" : project.title,
  client: clientNames[project.client] ?? localize(project.client, project.client),
  category: project.sorting as Category,
  description: descriptions[project.img],
  technologies: project.techs.filter((tech) => tech.name !== "git").map((tech) => tech.title.replace("Jquery", "jQuery").replace("Typescript", "TypeScript")),
  images: [`/legacy/v2/images/works/${project.img}`],
  featured: ["japan.jpg", "citra.png", "pourview.png", "livvy.png"].includes(project.img),
  url: project.url,
}));

projects.push(
  {
    id: "sisda", title: "SISDA", client: localize("Client project", "クライアント案件"), category: "web",
    description: localize("One of my longest-running projects. An existing web system, shown here through its dashboard and VIP agenda screens.", "長期にわたり携わってきたWebシステムの一つです。ダッシュボードとVIPアジェンダの画面をご覧いただけます。"),
    technologies: [], featured: true,
    images: ["sisda.png", "screencapture-sisda-kaltimprov-go-id-dashboard-2024-06-01-17_39_36.png", "screencapture-sisda-kaltimprov-go-id-vip-agenda-2024-06-01-18_19_56.png"].map((name) => `/legacy/v2/images/works/${name}`),
  },
  {
    id: "realpix-ai", title: "Realpix AI", client: localize("Web project", "Webプロジェクト"), category: "web",
    description: localize("A web project from my portfolio. The preserved screenshots show its playground interface.", "これまでに制作したWebプロジェクトの一つです。プレイグラウンド画面のスクリーンショットをご覧いただけます。"),
    technologies: [], featured: true,
    images: ["realpix-ai.png", "screencapture-realpix-ai-vercel-app-playground-2024-06-01-17_38_37.png"].map((name) => `/legacy/v2/images/works/${name}`),
  },
  ...[
    ["puskesmas-loa-kulu", "Puskesmas Loa Kulu", "puskesmasloakulu.png", "A web project for Puskesmas Loa Kulu.", "Puskesmas Loa Kulu向けのWebプロジェクト。"],
    ["biro-umum-kaltim", "Biro Umum Kaltim", "screencapture-biroumum-kaltimprov-go-id-2024-06-01-18_18_55.png", "A website for Biro Umum, East Kalimantan.", "東カリマンタン州Biro UmumのWebサイト。"],
    ["candi-srigading", "Candi Srigading", "screencapture-candisrigading-id-2024-06-01-18_38_24.png", "The Candi Srigading website.", "Candi SrigadingのWebサイト。"],
    ["yourbrothers", "Yourbrothers", "screencapture-yourbrothers-id-2024-06-01-18_19_09.png", "The Yourbrothers website.", "YourbrothersのWebサイト。"],
  ].map(([id, title, image, en, ja]): Project => ({ id, title, client: localize("Client project", "クライアント案件"), category: "web", description: localize(en, ja), technologies: [], featured: false, images: [`/legacy/v2/images/works/${image}`] })),
  { id: "ksp", title: "KSP", client: localize("Project archive", "プロジェクトアーカイブ"), category: "other", description: localize("A preserved project image from my earlier portfolio.", "旧ポートフォリオから保存したプロジェクト画像。"), technologies: [], featured: false, images: ["/legacy/v2/images/works/ksp.png"] },
);

export const featuredProjects = ["japan", "sisda", "livvy", "citra", "realpix-ai", "pourview"].map((id) => projects.find((project) => project.id === id)!);
