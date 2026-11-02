"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Locale } from "@/data/resume";

type Props = {
  children: ReactNode;
  locale: Locale;
  backdrop: { en: string; ja: string };
  className?: string;
  id?: string;
  "aria-labelledby": string;
};

export function PortfolioSection({ children, locale, backdrop, className = "", ...props }: Props) {
  const reducedMotion = useReducedMotion();
  const backdropLocale = locale === "en" ? "ja" : "en";

  return (
    <motion.section
      {...props}
      className={`portfolio-section ${className}`}
      initial={reducedMotion ? false : { opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className="section-watermark" aria-hidden="true">
        <motion.span
          key={backdropLocale}
          lang={backdropLocale}
          className="section-watermark-label"
          initial={reducedMotion ? false : { opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
        >
          {backdrop[backdropLocale]}
        </motion.span>
      </div>
      {children}
    </motion.section>
  );
}
