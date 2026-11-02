"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, BookOpen, Check, ChevronRight, Coffee, Code2, Footprints, MapPin, Search, X } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import { PortfolioSection } from "@/components/portfolio-section";
import { DATA, type Locale } from "@/data/resume";
import { featuredProjects, projects, type Category, type Project } from "@/data/projects";

const copy = {
  en: {
    skip: "Skip to content", portfolio: "A personal corner of the internet", location: "Samarinda, Indonesia", hello: "Hi, I’m Bayu.",
    headline: "Full-stack developer.\nCurious by nature.", intro: "You might know me as MirrorBottle. I build web apps with a team in Japan. Away from the keyboard: hand-brewed coffee, a run, or a good book.",
    work: "Software Engineer at TechQiao", viewWork: "Explore my work", cv: "Download CV", cvNote: "CV from my previous portfolio", about: "A little about me",
    aboutText: "Full-stack by work, frontend by heart. I’ve been building since 2020, from business systems and public websites to mobile apps. I like taking something complicated and figuring out how to make it work for the person using it.",
    aboutMore: "Home is Samarinda. My team is in Japan, where I work remotely with TechQiao. I’m often told I’m quick at implementation, especially when a deadline gets close. There’s still plenty I want to learn — Japanese included. For now, it’s N5, with N3 on the horizon.",
    gameInterest: "TechQiao is a game company at its core. My work there is on web applications, and I’d love to contribute to game development too, when the opportunity comes. The osu! nickname probably gives away that games are already part of the picture.",
    nicknameLabel: "Why MirrorBottle?", nicknameStory: "It started as my osu! nickname. I typed something random, it fit, and it stuck. No elaborate origin story — just a name that felt right.",
    selected: "Selected work", projectIntro: "A few projects from company work, freelance collaborations, and experiments of my own.", open: "View project", archive: "Explore the full collection", hideArchive: "Close collection", archiveIntro: "Web systems, mobile apps, and the smaller things along the way.",
    search: "Search projects or technologies", all: "All", web: "Web systems", mobile: "Mobile & AR", compro: "Websites", other: "Archive", results: "projects", noResults: "No projects match this search.", clear: "Clear filters", more: "Show more projects",
    experience: "Where I’ve been", experienceIntro: "Building across teams in Indonesia and Japan.", skills: "Tools of the trade", skillsIntro: "My everyday stack, with a wider toolkit picked up along the way.", also: "Also worked with", frameworks: "Frameworks & libraries", programming: "Languages", tools: "Tools & workflow",
    education: "Education", credentials: "Languages & learning", learning: "Indonesian is my native language. I use English and keep learning Japanese, with N3 as my goal for 2027–2028.",
    outside: "Lately, away from code", outsideIntro: "Usually somewhere between a café, a book, and the next run.",
    coffee: "Down the coffee rabbit hole", coffeeText: "Manual brewing pulled me in, then the processing methods and all the little details kept me there. Tadasih and Space Roastery are a couple of local roasters I recommend.",
    cafes: "Weekends, on Google Maps", cafesText: "I like café hopping around Samarinda, trying mocktails and other drinks, and leaving Google Maps reviews. A café visit is also a good excuse to read in a crowd.", cafeLink: "My Samarinda café list",
    running: "A half marathon on the horizon", runningText: "My running goal: a half marathon in 2027. Something to work toward alongside learning Japanese for N3.",
    reading: "A book in a busy café", readingText: "Lately, Dostoevsky and Kafka. White Nights is a favorite. I like reading with a bit of life happening around me.",
    award: "An idea, a team, a hackathon.", awardText: "At Hackathon 4.0 × #Hack4ID in 2023, I proposed Livvy’s blockchain idea and worked as the developer. Our home down-payment concept received the Favorite Winner award.",
    contact: "Good conversations welcome.", contactText: "Happily building at TechQiao. Always glad to talk about software, coffee, books, or something interesting you’re making.", email: "Say hello", footer: "Made with curiosity, in Samarinda.",
    close: "Close project", visit: "Visit website", gallery: "Project screenshots", image: "Screenshot", archivedLink: "Link preserved from the earlier portfolio; availability may have changed.",
  },
  ja: {
    skip: "本文へ移動", portfolio: "Bayu Setiawanのポートフォリオ", location: "インドネシア・サマリンダ", hello: "初めまして、Bayuと申します。",
    headline: "開発に向き合い、\n学びを重ねています。", intro: "オンラインではMirrorBottleという名前で活動しております。日本のチームとWebアプリケーションの開発に携わる傍ら、ハンドドリップのコーヒーやランニング、読書を楽しんでいます。",
    work: "TechQiaoにてソフトウェアエンジニアとして勤務", viewWork: "制作実績をご覧ください", cv: "CVをダウンロード", cvNote: "旧ポートフォリオ掲載版のCV", about: "自己紹介",
    aboutText: "フルスタック開発に携わりながら、特にフロントエンドに関心を持っております。2020年より、業務システムから公開Webサイト、モバイルアプリケーションまで、幅広い開発を経験してまいりました。複雑な要件を整理し、利用される方にとって扱いやすい形にすることを大切にしています。",
    aboutMore: "インドネシアのサマリンダを拠点に、TechQiaoの日本のチームとリモートで勤務しております。納期が迫る場面でも、実装の速さをご評価いただくことがあります。技術と共に日本語の学習も続けており、現在はJLPT N5を取得し、N3取得を目指しております。",
    gameInterest: "TechQiaoはゲーム開発を軸とする会社です。現在はWebアプリケーションを担当しておりますが、機会があればゲーム開発にも貢献したいと考えております。osu!のニックネームを今も使用しているように、ゲームも私の関心の一つです。",
    nicknameLabel: "MirrorBottleという名前の由来", nicknameStory: "元々はosu!で使用していたニックネームです。偶然入力した名前がしっくり来たため、そのまま使い続けています。特別な由来はありませんが、今では愛着のある名前になりました。",
    selected: "主な制作実績", projectIntro: "企業での開発、フリーランスとしての案件、個人での制作から、主な実績をご紹介いたします。", open: "詳細を確認", archive: "全ての制作実績を表示", hideArchive: "一覧を閉じる", archiveIntro: "Webシステムからモバイルアプリケーションまで、これまでの制作実績をご覧いただけます。",
    search: "プロジェクト名・技術で検索", all: "全て", web: "Webシステム", mobile: "モバイル・AR", compro: "Webサイト", other: "アーカイブ", results: "件", noResults: "条件に一致するプロジェクトは見つかりませんでした。", clear: "検索条件をリセット", more: "さらに表示",
    experience: "職務経歴", experienceIntro: "インドネシアと日本のチームで培ってきた経験をご紹介いたします。", skills: "技術・開発環境", skillsIntro: "日々の業務で使用する技術と、これまでに経験した開発環境をまとめております。", also: "その他の開発経験", frameworks: "フレームワーク・ライブラリ", programming: "プログラミング言語", tools: "ツール・開発環境",
    education: "学歴", credentials: "語学・資格", learning: "母語はインドネシア語です。英語を使用して業務に取り組む一方、日本語も継続して学習しております。2027〜2028年のJLPT N3取得を目標としております。",
    outside: "仕事以外の楽しみ", outsideIntro: "コーヒーや読書、ランニングなど、日々大切にしている時間をご紹介します。",
    coffee: "コーヒーの奥深さを探求", coffeeText: "ハンドドリップをきっかけに、精製方法などの細かな違いにも関心を持つようになりました。お勧めのロースターには、TadasihやSpace Roasteryがあります。",
    cafes: "週末のカフェ巡り", cafesText: "サマリンダのカフェを巡り、モクテルなどのドリンクを味わいながら、Googleマップにレビューを投稿するのが最近の楽しみです。賑やかな店内で読書をする時間も気に入っています。", cafeLink: "訪問したサマリンダのカフェ一覧",
    running: "ハーフマラソンへの挑戦", runningText: "2027年のハーフマラソン参加を目標にしています。JLPT N3取得と共に、少しずつ取り組んでいきたい目標の一つです。",
    reading: "賑やかなカフェでの読書", readingText: "最近はドストエフスキーやカフカの作品を読んでいます。特に『白夜』がお気に入りです。周囲の人の気配を感じながら、読書の時間を楽しんでいます。",
    award: "アイデアを、チームで形に。", awardText: "2023年のHackathon 4.0 × #Hack4IDでは、Livvyにおけるブロックチェーン活用案の提案とアプリケーション開発を担当いたしました。住宅購入の頭金に関する企画で、Favorite Winnerを受賞いたしました。",
    contact: "お気軽にご連絡ください。", contactText: "現在はTechQiaoにて開発業務に従事しております。ソフトウェアに関する情報交換はもちろん、コーヒーや本、皆様が取り組まれていることなどについても、お話しできましたら幸いです。", email: "メールで連絡する", footer: "サマリンダより、好奇心を込めて。",
    close: "詳細を閉じる", visit: "Webサイトを開く", gallery: "プロジェクトの画面", image: "画面", archivedLink: "旧ポートフォリオ掲載時のリンクです。現在は公開を終了している場合がございます。",
  },
};

function ProjectTile({ project, locale, onOpen }: { project: Project; locale: Locale; onOpen: (project: Project) => void }) {
  const title = locale === "ja" && project.id === "japan" ? "日本向け業務システム" : project.title;
  return (
    <button onClick={() => onOpen(project)} aria-label={`${copy[locale].open}: ${title}`} className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-card text-left transition-colors hover:border-[#b5c5a3]/40">
      <div className="relative h-48 w-full overflow-hidden bg-[#202521] sm:h-52">
        <Image src={project.images[0]} alt={title} fill sizes="(max-width: 640px) 90vw, 420px" className={`transition-transform duration-500 group-hover:scale-[1.025] ${project.category === "mobile" ? "object-contain p-3" : "object-cover object-top"}`} />
        <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm"><ArrowUpRight size={14} /></span>
      </div>
      <div className="flex w-full min-w-0 flex-1 flex-col p-5">
        <p className="mb-2 text-[10px] tracking-wide text-[#b5c5a3]">{project.client[locale]}</p>
        <h3 className="text-base font-medium tracking-tight">{title}</h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">{project.description[locale]}</p>
        {project.technologies.length > 0 && <div className="mt-auto flex flex-wrap gap-1.5 pt-5">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="tag">{tech}</span>)}</div>}
      </div>
    </button>
  );
}

function ProjectDialog({ project, locale, onClose }: { project: Project | null; locale: Locale; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const c = copy[locale];
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);
  return (
    <dialog ref={ref} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="project-title" className="m-auto max-h-[88dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#161a17] p-0 text-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm">
      {project && <>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#161a17]/95 px-5 py-4 backdrop-blur-md">
          <h2 id="project-title" className="font-medium">{locale === "ja" && project.id === "japan" ? "日本向け業務システム" : project.title}</h2>
          <button onClick={onClose} autoFocus aria-label={c.close} className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 hover:bg-white/10"><X size={18} /></button>
        </div>
        <div className="space-y-5 p-5 sm:p-8">
          <p className="text-xs text-[#b5c5a3]">{project.client[locale]}</p>
          <p className="text-sm leading-7 text-stone-300">{project.description[locale]}</p>
          {project.technologies.length > 0 && <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>}
          {project.url && <div><a className="quiet-link" href={project.url} target="_blank" rel="noopener noreferrer">{c.visit}<ArrowUpRight size={14} /></a><p className="mt-2 text-xs text-muted-foreground">{c.archivedLink}</p></div>}
          <div aria-label={c.gallery} className="space-y-5">{project.images.map((src, index) => <a href={src} target="_blank" rel="noopener noreferrer" key={src} aria-label={`${c.image} ${index + 1}`} className="block overflow-hidden rounded-lg border border-white/10 bg-black/20"><Image src={src} alt={`${project.title} — ${c.image} ${index + 1}`} width={1200} height={800} sizes="(max-width: 768px) 90vw, 700px" className="h-auto max-h-[65vh] w-full object-contain object-top" /></a>)}</div>
        </div>
      </>}
    </dialog>
  );
}

export function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const languageTransition = useAnimationControls();
  const reducedMotion = useReducedMotion();
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const c = copy[locale];

  useEffect(() => {
    function restoreLocale() {
      const requested = new URLSearchParams(window.location.search).get("lang");
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-language"); } catch { /* Storage is optional. */ }
      setLocale(requested === "ja" || requested === "en" ? requested : saved === "ja" ? "ja" : "en");
    }
    restoreLocale();
    window.addEventListener("popstate", restoreLocale);
    return () => window.removeEventListener("popstate", restoreLocale);
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  function changeLocale(next: Locale) {
    if (next === locale) return;
    setLocale(next);
    // Animate the existing content so filters, dialogs, and focus retain their state.
    languageTransition.stop();
    if (reducedMotion) {
      languageTransition.set({ opacity: 1, y: 0 });
    } else {
      void languageTransition.start({
        opacity: [0.6, 1],
        y: [6, 0],
        transition: { duration: 0.38, ease: "easeOut" },
      });
    }
    try { localStorage.setItem("portfolio-language", next); } catch { /* Storage is optional. */ }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }
  const filtered = projects.filter((project) => (category === "all" || project.category === category) && [project.title, project.client.en, project.client.ja, project.description.en, project.description.ja, ...project.technologies].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  const categories: (Category | "all")[] = ["all", "web", "mobile", "compro", "other"];

  return (
    <>
      <a href="#main" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-[#b5c5a3] px-4 py-2 text-black focus:translate-y-0">{c.skip}</a>
      <div id="top" className="mx-auto max-w-[880px] px-6 pb-32 pt-7 sm:px-10 sm:pt-10">
        <header className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-6">
          <a href="#top" aria-label={`${DATA.handle} — ${DATA.name}`} className="wordmark-link flex min-w-0 items-center gap-4"><span className="font-mono text-sm tracking-tight text-[#b5c5a3]"><span className="wordmark">{DATA.handle}<span aria-hidden="true" className="wordmark-reflection">{DATA.handle}</span></span><span aria-hidden="true" className="ml-1 text-[#b5c5a3]/40">/</span></span><span className="hidden text-xs text-muted-foreground md:inline">{c.portfolio}</span></a>
        </header>
        <motion.main id="main" initial={false} animate={languageTransition}>
          <PortfolioSection locale={locale} backdrop={{ en: "Hello", ja: "こんにちは" }} className="pb-16 pt-14 sm:pb-20 sm:pt-20" aria-labelledby="hero-title">
            <BlurFade>
              <div className="flex items-start justify-between gap-4">
                <div><p className="eyebrow flex items-center gap-2"><MapPin size={11} />{c.location}</p><p className="mt-7 text-xl text-stone-300 sm:text-2xl">{c.hello}</p></div>
                <Image src={DATA.avatarUrl} alt="Bayu Setiawan" width={112} height={112} sizes="(max-width: 640px) 88px, 112px" priority className="size-[88px] shrink-0 rounded-full border border-white/10 object-cover sm:size-[112px]" />
              </div>
              <h1 id="hero-title" className="mt-4 whitespace-pre-line text-[clamp(2.3rem,6vw,3.6rem)] font-medium leading-[1.16] tracking-[-0.045em]">{c.headline}</h1>
              <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{c.intro}</p>
              <p className="mt-5 flex items-center gap-2 text-xs text-[#b5c5a3]"><span className="size-1.5 rounded-full bg-[#b5c5a3]" />{c.work}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-[#b5c5a3] px-4 py-3 text-xs font-medium text-[#151a15] transition-colors hover:bg-[#c6d5b7]">{c.viewWork}<ArrowDown size={14} /></a>
                <a href={DATA.cv} download="Bayu-Setiawan-CV-previous-version.pdf" className="quiet-link">{c.cv}<ArrowDownToLine size={14} /></a>
              </div>
              <p className="mt-3 text-[10px] text-muted-foreground">{c.cvNote}</p>
            </BlurFade>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "About", ja: "自己紹介" }} aria-labelledby="about-title" className="grid gap-5 border-t border-white/10 py-12 sm:grid-cols-[160px_1fr] sm:gap-10">
            <div><p className="eyebrow">01 / About</p><h2 id="about-title" className="mt-3 text-base font-medium">{c.about}</h2></div>
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>{c.aboutText}</p><p>{c.aboutMore}</p><p>{c.gameInterest}</p>
              <details className="rounded-lg border border-white/[0.07] px-4 py-3">
                <summary className="flex w-fit cursor-pointer items-center gap-2 text-xs text-[#b5c5a3]">{c.nicknameLabel}<ChevronRight size={13} className="details-chevron transition-transform" /></summary>
                <p className="mt-3 text-xs leading-6">{c.nicknameStory}</p>
              </details>
            </div>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Selected work", ja: "制作実績" }} id="projects" aria-labelledby="projects-title" className="border-t border-white/10 py-12">
            <p className="eyebrow">02 / Selected projects · 制作実績</p>
            <h2 id="projects-title" className="section-heading mt-3">{c.selected}<span className="ml-3 align-top font-mono text-xs text-[#b5c5a3]">06</span></h2>
            <p className="mb-7 mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{c.projectIntro}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{featuredProjects.map((project, index) => <BlurFade key={project.id} delay={index * 0.025} inView className="h-full w-full min-w-0"><ProjectTile project={project} locale={locale} onOpen={setActiveProject} /></BlurFade>)}</div>
            <button aria-expanded={archiveOpen} aria-controls="project-archive" onClick={() => setArchiveOpen(!archiveOpen)} className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 px-4 py-4 text-sm text-stone-300 hover:border-[#b5c5a3]/40 hover:bg-white/[0.02]">{archiveOpen ? c.hideArchive : c.archive}<span className="font-mono text-xs text-muted-foreground">{projects.length}</span><ChevronRight size={14} className={`transition-transform ${archiveOpen ? "rotate-90" : ""}`} /></button>
            <div id="project-archive" hidden={!archiveOpen} className="pt-8">
              <p className="mb-5 text-sm text-muted-foreground">{c.archiveIntro}</p>
              <label className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.025] px-4"><Search size={16} className="shrink-0 text-muted-foreground" /><span className="sr-only">{c.search}</span><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(8); }} placeholder={c.search} className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-stone-500 focus-visible:outline-none" /></label>
              <div className="my-5 flex flex-wrap gap-2" aria-label={locale === "en" ? "Project categories" : "プロジェクト分類"}>{categories.map((value) => <button key={value} aria-pressed={category === value} onClick={() => { setCategory(value); setVisibleCount(8); }} className={`rounded-full border px-3 py-2 text-xs ${category === value ? "border-[#b5c5a3] bg-[#b5c5a3] text-[#151a15]" : "border-white/10 text-stone-400 hover:text-stone-100"}`}>{c[value]}</button>)}</div>
              <p role="status" className="mb-4 font-mono text-xs text-muted-foreground">{filtered.length} {c.results}</p>
              {filtered.length ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{filtered.slice(0, visibleCount).map((project) => <ProjectTile key={project.id} project={project} locale={locale} onOpen={setActiveProject} />)}</div> : <div className="py-10 text-center"><p className="text-sm text-muted-foreground">{c.noResults}</p><button onClick={() => { setQuery(""); setCategory("all"); }} className="quiet-link mt-5">{c.clear}</button></div>}
              {filtered.length > visibleCount && <button className="quiet-link mx-auto mt-6 flex" onClick={() => setVisibleCount(visibleCount + 8)}>{c.more}<ArrowDown size={14} /></button>}
            </div>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Experience", ja: "これまで" }} id="experience" aria-labelledby="experience-title" className="border-t border-white/10 py-12">
            <p className="eyebrow">03 / Experience · 経歴</p><h2 id="experience-title" className="section-heading mt-3">{c.experience}</h2><p className="mt-3 text-sm text-muted-foreground">{c.experienceIntro}</p>
            <div className="mt-7">{DATA.work.map((job, index) => <details key={job.company} className="group border-b border-white/[0.07] py-5" open={index === 0 ? true : undefined}>
              <summary className="flex cursor-pointer items-start gap-4 rounded-sm">
                <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-stone-200">{job.logo ? <Image src={job.logo} alt="" width={40} height={40} className="size-10 object-contain" /> : <Code2 className="text-stone-600" size={19} />}</div>
                <div className="min-w-0 flex-1"><div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"><h3 className="text-sm font-medium">{locale === "ja" ? job.companyJa : job.company}</h3><span className="shrink-0 font-mono text-[10px] text-muted-foreground">{job.period[locale]}</span></div><p className="mt-1 text-xs leading-5 text-muted-foreground">{job.title[locale]}</p></div><ChevronRight className="details-chevron mt-1 shrink-0 text-muted-foreground transition-transform" size={14} />
              </summary>
              <div className="ml-14 pt-4"><p className="text-[11px] text-[#b5c5a3]">{job.location[locale]}</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{job.description[locale]}</p></div>
            </details>)}</div>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Toolkit", ja: "技術" }} aria-labelledby="skills-title" className="border-t border-white/10 py-12">
            <p className="eyebrow">04 / Toolkit · 技術</p><h2 id="skills-title" className="section-heading mt-3">{c.skills}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{c.skillsIntro}</p>
            <div className="mt-6 flex flex-wrap gap-2">{DATA.coreSkills.map((skill) => <span key={skill} className="inline-flex items-center gap-2 rounded-lg border border-[#b5c5a3]/20 bg-[#b5c5a3]/[0.06] px-3 py-2 text-sm text-[#c5d4b5]"><Check size={12} />{skill}</span>)}</div>
            <details className="mt-5"><summary className="flex w-fit cursor-pointer items-center gap-2 text-xs text-muted-foreground">{c.also}<ChevronRight size={13} className="details-chevron transition-transform" /></summary><div className="mt-5 space-y-5">{[[c.programming, DATA.languages], [c.frameworks, DATA.frameworks], [c.tools, DATA.tools]].map(([label, skills]) => <div key={label as string}><h3 className="mb-2 text-xs text-muted-foreground">{label}</h3><div className="flex flex-wrap gap-1.5">{(skills as string[]).map((skill) => <span key={skill} className="tag">{skill}</span>)}</div></div>)}</div></details>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Learning", ja: "学び" }} aria-labelledby="learning-title" className="border-t border-white/10 py-12">
            <p className="eyebrow">05 / Always learning · 学び</p><h2 id="learning-title" className="section-heading mt-3">{c.credentials}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{c.learning}</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">{DATA.credentials.map((credential) => <div key={credential.title} className="rounded-xl border border-white/10 bg-card p-5"><p className="eyebrow">{credential.title}</p><p className="my-3 font-mono text-3xl tracking-tight text-[#c5d4b5]">{credential.value}</p><p className="text-[11px] leading-5 text-muted-foreground">{credential.detail[locale]}</p></div>)}</div>
            <h3 className="mb-5 mt-10 text-base font-medium">{c.education}</h3><div className="space-y-5">{DATA.education.map((education) => <div key={education.school} className="flex items-center gap-4"><Image src={education.logo} alt="" width={36} height={36} className="size-9 rounded-lg bg-stone-100 object-contain p-1" /><div className="min-w-0 flex-1"><h4 className="text-sm">{education.school}</h4><p className="mt-1 text-xs text-muted-foreground">{education.degree[locale]}</p></div><p className="max-w-24 text-right font-mono text-[10px] leading-5 text-muted-foreground sm:max-w-none">{education.period[locale]}</p></div>)}</div>
            <div className="mt-9 rounded-xl border border-[#b5c5a3]/15 bg-[#b5c5a3]/[0.03] p-5"><p className="eyebrow text-[#b5c5a3]">Livvy · Favorite Winner · 2023</p><h3 className="mt-3 text-base font-medium">{c.award}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{c.awardText}</p></div>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Beyond code", ja: "日々" }} aria-labelledby="outside-title" className="border-t border-white/10 py-12">
            <p className="eyebrow">06 / Beyond code · 日々</p><h2 id="outside-title" className="section-heading mt-3">{c.outside}</h2><p className="mt-3 text-sm text-muted-foreground">{c.outsideIntro}</p>
            <div className="mt-7 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                { icon: Coffee, title: c.coffee, text: c.coffeeText },
                { icon: MapPin, title: c.cafes, text: c.cafesText, href: DATA.cafeList },
                { icon: BookOpen, title: c.reading, text: c.readingText },
                { icon: Footprints, title: c.running, text: c.runningText },
              ].map(({ icon: Icon, title, text, href }) => (
                <div key={title}>
                  <Icon size={21} strokeWidth={1.3} className="mb-4 text-[#b5c5a3]" />
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p>
                  {href && <a href={href} target="_blank" rel="noopener noreferrer" className="quiet-link mt-3 text-xs">{c.cafeLink}<ArrowUpRight size={13} /></a>}
                </div>
              ))}
            </div>
          </PortfolioSection>

          <PortfolioSection locale={locale} backdrop={{ en: "Say hello", ja: "話しましょう" }} id="contact" aria-labelledby="contact-title" className="border-y border-white/10 py-12">
            <p className="eyebrow">07 / Say hello · 連絡先</p><h2 id="contact-title" className="section-heading mt-3">{c.contact}</h2><p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{c.contactText}</p>
            <a className="quiet-link mt-6 text-[#c5d4b5]" href={`mailto:${DATA.email}`}>{c.email}<ArrowUpRight size={14} /></a><div className="mt-7 flex flex-wrap gap-5">{DATA.social.map((social) => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-stone-100">{social.name}<ArrowUpRight size={12} /></a>)}</div>
          </PortfolioSection>
        </motion.main>
        <footer className="flex flex-wrap items-center justify-between gap-3 pt-7 text-[10px] text-muted-foreground"><p>© {new Date().getFullYear()} Bayu Setiawan</p><p>{c.footer}</p></footer>
      </div>
      <Navbar locale={locale} onLocaleChange={changeLocale} />
      <ProjectDialog project={activeProject} locale={locale} onClose={() => setActiveProject(null)} />
    </>
  );
}
