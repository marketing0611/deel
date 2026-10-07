"use client";

import { useState } from "react";
import { DeelFigure } from "@/components/deel-figure";
import { PARTS, type PartId } from "@/lib/deel";

export function DeelAnatomy() {
  const [active, setActive] = useState<PartId>("enger");
  const index = Math.max(
    PARTS.findIndex((p) => p.id === active),
    0,
  );
  const part = PARTS[index];

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-12">
      <div className="anatomy-stage rounded-[2rem] bg-shunu px-6 py-8 sm:px-10">
        <DeelFigure
          id="anatomy"
          label={`Дээлийн бүтэц: ${part.name} тодорсон`}
          fabric="#2f5be0"
          trim="#f2b01e"
          stitch="#7a5200"
          sash="#d3302a"
          active={active}
          onSelect={setActive}
          className="mx-auto block w-full max-w-[22rem]"
        />
      </div>

      <div className="min-w-0">
        <div role="group" aria-label="Дээлийн хэсгүүд" className="flex flex-wrap gap-2">
          {PARTS.map((p) => {
            const selected = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(p.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selected
                    ? "bg-khukh text-white"
                    : "border border-line bg-surface text-ink hover:border-accent"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-6 rounded-[1.75rem] border border-line bg-surface p-6 sm:p-8"
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="eyebrow text-muted">{part.en}</p>
            <p className="text-xs font-semibold text-muted tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(PARTS.length).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{part.name}</h3>
          <p className="mt-4 max-w-[36rem] text-base/relaxed text-muted">{part.text}</p>
          <ul className="mt-6 grid gap-3 border-t border-line pt-5">
            {part.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 text-[0.95rem]/relaxed">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-accent" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted">Зураг дээрх хэсэг дээр дарж ч сонгож болно.</p>
      </div>
    </div>
  );
}
