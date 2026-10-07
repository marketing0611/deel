import { SOURCES, type SourceId } from "@/lib/deel";

/** Footnote marker that links to the numbered entry in the reference list. */
export function Cite({ id }: { id: SourceId }) {
  const n = SOURCES.findIndex((source) => source.id === id) + 1;
  return (
    <sup className="cite">
      <a href={`#src-${id}`} aria-label={`Эх сурвалж ${n}`}>
        {n}
      </a>
    </sup>
  );
}
