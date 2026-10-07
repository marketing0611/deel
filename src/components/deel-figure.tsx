import type { PartId } from "@/lib/deel";

const OUTLINE = "rgba(12, 14, 42, 0.45)";

// Front view of a Khalkh-cut deel on a 400 × 540 canvas.
const SHAPES = {
  collar: "M170 46 Q200 37 230 46 L233 69 Q200 60 167 69 Z",
  upper:
    "M167 67 Q200 59 233 67 L292 92 L272 172 L281 254 Q200 264 119 254 L128 172 L108 92 Z",
  lower: "M118 286 Q200 296 282 286 L306 506 Q200 522 94 506 Z",
  sleeveLeft: "M110 90 C 80 150, 56 220, 42 290 L86 302 C 98 250, 112 210, 130 172 Z",
  sleeveRight:
    "M290 90 C 320 150, 344 220, 358 290 L314 302 C 302 250, 288 210, 270 172 Z",
  cuffLeft: "M40 286 L88 299 C 90 318, 80 336, 62 342 C 46 336, 34 318, 40 286 Z",
  cuffRight:
    "M360 286 L312 299 C 310 318, 320 336, 338 342 C 354 336, 366 318, 360 286 Z",
  sash: "M116 250 Q200 261 284 250 L286 290 Q200 300 114 290 Z",
  sashFolds: "M116 264 Q200 275 284 264 M115 277 Q200 288 285 277",
  tailBack: "M146 286 L134 372 L152 372 L160 288 Z",
  tailFront: "M164 288 L168 380 L186 376 L178 289 Z",
  engerTop: "M200 64 C 226 76, 250 102, 262 150 L 270 252",
  engerBottom: "M272 292 L 292 508",
  collarStitch: "M180 57 Q200 51 220 57",
  hem: "M94 506 Q200 522 306 506",
};

// Five knot buttons following the энгэр line, collar to hem.
const BUTTONS: [number, number][] = [
  [224, 56],
  [236, 92],
  [262, 150],
  [266, 205],
  [276, 332],
];

const ANCHORS: Record<PartId, [number, number]> = {
  zah: [200, 52],
  enger: [205, 170],
  tovch: [262, 150],
  khantsui: [90, 205],
  nudarga: [62, 322],
  bus: [230, 272],
  khormoi: [215, 440],
};

type DeelFigureProps = {
  /** Unique per instance so gradient and pattern ids don't collide. */
  id: string;
  label: string;
  fabric: string;
  trim: string;
  stitch: string;
  sash: string;
  active?: PartId | null;
  onSelect?: (part: PartId) => void;
  className?: string;
};

export function DeelFigure({
  id,
  label,
  fabric,
  trim,
  stitch,
  sash,
  active = null,
  onSelect,
  className,
}: DeelFigureProps) {
  const sheenId = `${id}-sheen`;
  const motifId = `${id}-motif`;

  const cloth = (d: string, color: string) => (
    <>
      <path
        d={d}
        style={{ fill: color }}
        stroke={OUTLINE}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d={d} fill={`url(#${motifId})`} opacity={0.14} />
      <path d={d} fill={`url(#${sheenId})`} />
    </>
  );

  const trimLine = (d: string, width: number) => (
    <>
      <path
        d={d}
        fill="none"
        style={{ stroke: trim }}
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        style={{ stroke: stitch }}
        strokeWidth={1.4}
        strokeDasharray="3 4"
      />
    </>
  );

  const part = (name: PartId) => ({
    className: onSelect ? "deel-part cursor-pointer" : "deel-part",
    "data-state": active ? (active === name ? "active" : "dim") : undefined,
    onClick: onSelect ? () => onSelect(name) : undefined,
  });

  const anchor = active ? ANCHORS[active] : null;

  return (
    <svg viewBox="0 0 400 540" role="img" aria-label={label} className={className}>
      <defs>
        <linearGradient id={sheenId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="0.56" stopColor="#fff" stopOpacity="0.03" />
          <stop offset="1" stopColor="#000" stopOpacity="0.24" />
        </linearGradient>
        <pattern id={motifId} width="28" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M14 6 L20 14 L14 22 L8 14 Z M14 10.5 L16.8 14 L14 17.5 L11.2 14 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.1"
          />
          <circle cx="0" cy="0" r="1.8" fill="#fff" />
          <circle cx="28" cy="0" r="1.8" fill="#fff" />
          <circle cx="0" cy="28" r="1.8" fill="#fff" />
          <circle cx="28" cy="28" r="1.8" fill="#fff" />
        </pattern>
      </defs>

      <g {...part("khantsui")}>
        {cloth(SHAPES.sleeveLeft, fabric)}
        {cloth(SHAPES.sleeveRight, fabric)}
      </g>

      <g {...part("nudarga")}>
        {cloth(SHAPES.cuffLeft, trim)}
        {cloth(SHAPES.cuffRight, trim)}
      </g>

      <g {...part("khormoi")}>
        {cloth(SHAPES.lower, fabric)}
        {trimLine(SHAPES.hem, 10)}
      </g>

      <g {...part("enger")}>
        {cloth(SHAPES.upper, fabric)}
        {trimLine(SHAPES.engerTop, 9)}
        {trimLine(SHAPES.engerBottom, 9)}
      </g>

      <g {...part("zah")}>
        {cloth(SHAPES.collar, trim)}
        <path
          d={SHAPES.collarStitch}
          fill="none"
          style={{ stroke: stitch }}
          strokeWidth={1.4}
          strokeDasharray="3 4"
        />
      </g>

      <g {...part("bus")}>
        {cloth(SHAPES.sash, sash)}
        <path d={SHAPES.sashFolds} fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={1.2} />
        {cloth(SHAPES.tailBack, sash)}
        {cloth(SHAPES.tailFront, sash)}
        <rect
          x={138}
          y={256}
          width={38}
          height={32}
          rx={11}
          style={{ fill: sash }}
          stroke={OUTLINE}
          strokeWidth={1.5}
        />
        <rect x={138} y={256} width={38} height={32} rx={11} fill={`url(#${sheenId})`} />
      </g>

      <g {...part("tovch")}>
        {BUTTONS.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={5.5} fill="#f7c948" stroke="#6b4700" strokeWidth={1.5} />
            <circle cx={x - 1.5} cy={y - 1.5} r={1.6} fill="#fff6d6" />
          </g>
        ))}
      </g>

      {anchor && (
        <g key={active} pointerEvents="none">
          <circle
            cx={anchor[0]}
            cy={anchor[1]}
            r={10}
            fill="none"
            stroke="#fff"
            strokeWidth={2.5}
            className="deel-ping"
          />
          <circle cx={anchor[0]} cy={anchor[1]} r={4.5} fill="#fff" stroke={OUTLINE} />
        </g>
      )}
    </svg>
  );
}
