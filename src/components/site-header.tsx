"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons";
import { NAV_LINKS } from "@/lib/deel";

/** Tracks which nav section is crossing the middle of the viewport. */
function useCurrentSection() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return current;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const current = useCurrentSection();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <LogoMark className="h-8 w-8" />
          Дээл
        </a>

        <nav aria-label="Үндсэн цэс" className="hidden lg:block">
          <ul className="flex gap-0.5">
            {NAV_LINKS.map((link) => {
              const active = current === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? "location" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-ink text-bg" : "text-muted hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold lg:hidden"
        >
          <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
          {open ? "Хаах" : "Цэс"}
        </button>
      </div>

      <div aria-hidden className="read-progress" />

      <nav
        id="mobile-nav"
        aria-label="Гар утасны цэс"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <ul className="shell grid grid-cols-2 gap-2 py-4 sm:grid-cols-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={current === link.href.slice(1) ? "location" : undefined}
                className="block rounded-2xl bg-surface px-4 py-3 text-base font-semibold aria-[current]:bg-khukh aria-[current]:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
