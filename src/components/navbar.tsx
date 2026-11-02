"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, BriefcaseBusiness, FolderOpen, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/data/resume";

const destinations = ["top", "projects", "experience", "contact"] as const;

export default function Navbar({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (locale: Locale) => void }) {
  const [active, setActive] = useState<string>("top");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame: number | null = null;
    function updateActive() {
      frame = null;
      // The dock's four destinations group the sections that follow each one.
      const readingLine = Math.min(window.innerHeight * 0.3, 240);
      let current: string = "top";
      for (const id of destinations) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) current = id;
      }
      // The final section may never reach the reading line on a tall viewport.
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      setActive(atBottom ? "contact" : current);
    }
    function scheduleUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(updateActive);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    const content = document.getElementById("main");
    if (content) observer.observe(content);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const links = [
    { href: "#top", label: locale === "en" ? "Home" : "ホーム", icon: Home },
    { href: "#projects", label: locale === "en" ? "Projects" : "制作実績", icon: FolderOpen },
    { href: "#experience", label: locale === "en" ? "Experience" : "職歴", icon: BriefcaseBusiness },
    { href: "#contact", label: locale === "en" ? "Contact" : "連絡先", icon: Mail },
  ];
  return (
    <nav aria-label={locale === "en" ? "Main navigation" : "メインナビゲーション"} className="fixed inset-x-0 bottom-5 z-40 flex justify-center pointer-events-none">
      <Dock className="pointer-events-auto items-center gap-0.5 border-white/10 bg-[#171a18]/95 px-2 py-2 shadow-2xl backdrop-blur-xl sm:gap-2 sm:px-3" magnification={44}>
        {links.map(({ href, label, icon: Icon }) => (
          <DockIcon key={href}>
            <a href={href} aria-label={label} title={label} aria-current={active === href.slice(1) ? "location" : undefined} className={`relative flex size-10 items-center justify-center rounded-full transition-colors ${active === href.slice(1) ? "bg-[#b5c5a3]/10 text-[#c5d4b5]" : "text-stone-400 hover:bg-white/5 hover:text-stone-100"}`}>
              <Icon size={18} strokeWidth={1.5} />
              {active === href.slice(1) && <span aria-hidden="true" className="absolute bottom-1 size-1 rounded-full bg-[#b5c5a3]" />}
            </a>
          </DockIcon>
        ))}
        <span aria-hidden="true" className="mx-1 h-5 w-px shrink-0 bg-white/10" />
        <div role="group" aria-label={locale === "en" ? "Language" : "言語"} className="relative flex shrink-0 rounded-full bg-white/[0.04] p-1">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#b5c5a3] shadow-sm"
            initial={false}
            animate={{ x: locale === "en" ? "0%" : "100%" }}
            transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
          />
          {(["en", "ja"] as const).map((language) => (
            <motion.button
              key={language}
              type="button"
              lang={language}
              aria-label={language === "en" ? "English" : "日本語"}
              aria-pressed={locale === language}
              onClick={() => onLocaleChange(language)}
              whileTap={reducedMotion ? undefined : { scale: 0.92 }}
              className={`relative z-10 flex h-8 w-12 items-center justify-center rounded-full text-[11px] font-medium transition-colors sm:w-14 ${locale === language ? "text-[#151a15]" : "text-stone-400 hover:text-stone-100"}`}
            >
              {language === "en" ? "EN" : "日本語"}
            </motion.button>
          ))}
        </div>
      </Dock>
    </nav>
  );
}
