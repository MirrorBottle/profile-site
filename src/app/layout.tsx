import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: "Bayu Setiawan — Full-stack Developer", template: "%s | Bayu Setiawan" },
  description: DATA.description,
  icons: { icon: "/legacy/main/images/favicon.png", apple: "/legacy/main/images/favicon.png" },
  openGraph: { title: DATA.name, description: DATA.description, url: DATA.url, siteName: DATA.name, locale: "en_US", alternateLocale: ["ja_JP"], type: "website" },
  twitter: { title: DATA.name, card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
