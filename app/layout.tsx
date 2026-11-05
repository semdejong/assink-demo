import type { Metadata, Viewport } from "next";
import { Figtree, IBM_Plex_Mono, Newsreader } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import { NavChrome } from "@/components/site/NavChrome";
import { SiteFooter } from "@/components/site/SiteFooter";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-newsreader",
});

const figtree = Figtree({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-figtree",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s | ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.background };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--umber": c.umber,
  "--gold": c.gold,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${newsreader.variable} ${figtree.variable} ${plex.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="min-h-full">
        <a className="skip" href="#inhoud">
          Naar de inhoud
        </a>
        <div className="site">
          <NavChrome />
          <main id="inhoud" className="site-main">
            {children}
          </main>
          <SiteFooter />
        </div>
        <SleadsBadge />
      </body>
    </html>
  );
}
