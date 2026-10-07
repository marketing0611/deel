import type { Metadata, Viewport } from "next";
import { Noto_Sans_Mongolian, Onest, Unbounded } from "next/font/google";
import "./globals.css";

// Both faces ship cyrillic-ext, which carries the Mongolian Ө and Ү.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
});

// Classical Mongolian script, set vertically in the hero.
const mongol = Noto_Sans_Mongolian({
  variable: "--font-noto-mongolian",
  weight: "400",
  subsets: ["mongolian"],
});

export const metadata: Metadata = {
  title: "Монгол дээл",
  description:
    "Монгол үндэсний хувцас дээлийн түүх, бүтэц, улирлын төрөл, ястны хэв маяг, хослол, ёс заншлыг түүхэн эх сурвалжид тулгуурлан танилцуулна.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e26" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      className={`${unbounded.variable} ${onest.variable} ${mongol.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
