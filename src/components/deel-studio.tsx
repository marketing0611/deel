"use client";

import { useState } from "react";
import { DeelFigure } from "@/components/deel-figure";
import { FABRICS, SASHES, TRIMS, type Swatch } from "@/lib/deel";

function SwatchRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Swatch[];
  value: Swatch;
  onChange: (swatch: Swatch) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <p className="w-16 shrink-0 text-xs font-semibold text-muted">{label}</p>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === value.id;
          return (
            <button
              key={option.id}
              type="button"
              title={option.name}
              aria-label={`${label}: ${option.name}`}
              aria-pressed={selected}
              onClick={() => onChange(option)}
              style={{ backgroundColor: option.color }}
              className={`h-8 w-8 rounded-full border border-black/15 transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                selected ? "scale-110 ring-2 ring-ink ring-offset-2 ring-offset-surface" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function DeelStudio() {
  const [fabric, setFabric] = useState(FABRICS[0]);
  const [sash, setSash] = useState(SASHES[0]);
  const [trim, setTrim] = useState(TRIMS[0]);

  return (
    <div className="relative rounded-[2rem] bg-surface p-5 text-ink shadow-[0_40px_90px_-40px_rgba(4,8,40,0.75)] sm:p-7">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-sm font-semibold">Дээлээ өнгөөр сонго</p>
        <p className="text-xs text-muted">Өнгөн дээр дар</p>
      </div>

      <div className="studio-stage mt-4 rounded-[1.5rem] bg-bg px-4 pt-5 pb-3">
        <DeelFigure
          id="studio"
          label={`${fabric.name} дээл, ${sash.name.toLowerCase()} бүс, ${trim.name.toLowerCase()} эмжээртэй`}
          fabric={fabric.color}
          trim={trim.color}
          stitch={trim.stitch ?? "#000"}
          sash={sash.color}
          className="deel-float mx-auto block w-full max-w-[15rem] sm:max-w-[17rem]"
        />
      </div>

      <div className="mt-5 grid gap-3">
        <SwatchRow label="Дээл" options={FABRICS} value={fabric} onChange={setFabric} />
        <SwatchRow label="Бүс" options={SASHES} value={sash} onChange={setSash} />
        <SwatchRow label="Эмжээр" options={TRIMS} value={trim} onChange={setTrim} />
      </div>

      <p aria-live="polite" className="mt-5 border-t border-line pt-4 text-sm/relaxed text-muted">
        <span className="font-semibold text-ink">{fabric.name}.</span> {fabric.meaning}
      </p>
    </div>
  );
}
