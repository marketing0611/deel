"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Cite } from "@/components/cite";
import { GROUPS } from "@/lib/deel";

export function EthnicTabs() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = GROUPS[index];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + GROUPS.length) % GROUPS.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Ястнууд"
        onKeyDown={onKeyDown}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {GROUPS.map((g, i) => {
          const selected = i === index;
          return (
            <button
              key={g.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={selected}
              aria-controls="yastan-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-shar ${
                selected ? "bg-on-shar text-shar" : "bg-on-shar/10 text-on-shar hover:bg-on-shar/20"
              }`}
            >
              {g.name}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="yastan-panel"
        aria-labelledby={`tab-${group.id}`}
        className="mt-6 grid gap-8 rounded-[2rem] bg-on-shar p-6 text-white sm:p-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-12"
      >
        <div className="min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <p className="eyebrow text-shar">{group.region}</p>
            <p className="shrink-0 text-xs font-semibold text-white/50 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(GROUPS.length).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] font-bold leading-none tracking-[-0.02em]">
            {group.name}
          </h3>
          {group.share && (
            <p className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-shar">
              {group.share}
              <Cite id="census" />
            </p>
          )}
          <p className="mt-5 max-w-[34rem] text-base/relaxed text-white/80">{group.text}</p>
        </div>
        <div className="min-w-0 md:border-l md:border-white/15 md:pl-10">
          <p className="eyebrow text-white/60">Дээлийн онцлог</p>
          <ul className="mt-4 grid gap-3">
            {group.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base/snug">
                <span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-shar" />
                {feature}
              </li>
            ))}
          </ul>
          {group.headwear && (
            <div className="mt-7 border-t border-white/15 pt-5">
              <p className="eyebrow text-white/60">Толгойн гоёл</p>
              <p className="mt-3 text-base/relaxed text-white/85">{group.headwear}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
