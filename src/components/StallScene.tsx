import type { MarketId } from "../data/content";

const palettes: Record<MarketId, { awning: string; soft: string; produce: string[] }> = {
  bloom: {
    awning: "#e6c7bd",
    soft: "#f0d9d1",
    produce: ["#c55d48", "#e6c7bd", "#e7c96b", "#30483a"],
  },
  harvest: {
    awning: "#c55d48",
    soft: "#e7c96b",
    produce: ["#c55d48", "#e7c96b", "#30483a", "#e6c7bd"],
  },
  celebration: {
    awning: "#e7c96b",
    soft: "#e6c7bd",
    produce: ["#e7c96b", "#c55d48", "#e6c7bd", "#30483a"],
  },
};

export function StallScene({ market }: { market: MarketId }) {
  const p = palettes[market];
  return (
    <svg viewBox="0 0 640 480" role="img" aria-label={`${market} market installation preview`}>
      <defs>
        <linearGradient id={`sky-${market}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.soft} stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f7f2e8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill={`url(#sky-${market})`} />
      <ellipse cx="320" cy="430" rx="240" ry="28" fill="#30483a" opacity="0.08" />
      <rect
        x="140"
        y="210"
        width="360"
        height="180"
        rx="4"
        fill="#f7f2e8"
        stroke="#30483a"
        strokeWidth="3"
      />
      <rect x="155" y="230" width="330" height="48" fill={p.soft} opacity="0.55" />
      <rect x="155" y="290" width="330" height="48" fill="#efe6d6" />
      <rect x="155" y="350" width="330" height="24" fill={p.soft} opacity="0.4" />
      <rect x="150" y="120" width="14" height="100" fill="#30483a" />
      <rect x="476" y="120" width="14" height="100" fill="#30483a" />
      <path
        d="M130 140 L510 140 L500 200 L140 200 Z"
        fill={p.awning}
        stroke="#30483a"
        strokeWidth="2.5"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const x = 148 + i * 28;
        return (
          <path
            key={i}
            d={`M${x} 200 Q${x + 14} 220 ${x + 28} 200`}
            fill={i % 2 === 0 ? "#30483a" : p.awning}
            stroke="#30483a"
            strokeWidth="1.2"
          />
        );
      })}
      <rect
        x="250"
        y="150"
        width="140"
        height="36"
        rx="2"
        fill="#f7f2e8"
        stroke="#30483a"
        strokeWidth="2"
      />
      <text
        x="320"
        y="173"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="16"
        fill="#30483a"
      >
        Little Market
      </text>
      <circle cx="190" cy="252" r="16" fill={p.produce[0]} />
      <circle cx="220" cy="248" r="12" fill={p.produce[1]} />
      <circle cx="248" cy="254" r="14" fill={p.produce[2]} />
      <rect x="280" y="238" width="36" height="28" rx="3" fill={p.produce[3]} opacity="0.85" />
      <ellipse cx="390" cy="252" rx="22" ry="14" fill={p.produce[1]} />
      <ellipse cx="430" cy="250" rx="18" ry="12" fill={p.produce[0]} />
      <rect x="180" y="302" width="42" height="26" rx="3" fill={p.produce[2]} opacity="0.9" />
      <circle cx="300" cy="314" r="15" fill={p.produce[1]} />
      <ellipse cx="380" cy="314" rx="26" ry="13" fill={p.produce[0]} opacity="0.75" />
      <path d="M100 360 Q80 300 110 250" stroke={p.produce[0]} strokeWidth="3" fill="none" />
      <circle cx="110" cy="245" r="10" fill={p.produce[1]} />
      <path d="M540 360 Q560 300 530 248" stroke={p.produce[2]} strokeWidth="3" fill="none" />
      <circle cx="528" cy="242" r="9" fill={p.produce[0]} />
    </svg>
  );
}
