
/**
 * BarstoneLogo — Barstone LLP (law firm)
 * Props:
 *  - variant: "stacked" | "horizontal" | "mark"
 *  - theme: "dark" | "light"
 *  - size: mark size in px (wordmark scales with it)
 */
const serif = "'Cormorant Garamond', 'Cinzel', Georgia, serif";

export function BarstoneLogo({ variant = "stacked", theme = "dark", size = 72 }) {
  const ink = theme === "dark" ? "#EDE6D6" : "#1B1A17";
  const gold = theme === "dark" ? "#C9A45C" : "#8C6B2A";

  const Mark = (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Barstone LLP mark">
      <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="none" stroke={gold} strokeWidth="2.5" />
      <polygon points="50,12 84,31.5 84,68.5 50,88 16,68.5 16,31.5" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.6" />
      <text x="50" y="62" textAnchor="middle" fontFamily={serif} fontWeight="600" fontSize="46" fill={ink}>B</text>
      <rect x="30" y="68" width="40" height="3" fill={gold} />
    </svg>
  );

  const Word = (fs: number) => (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: fs * 0.5, lineHeight: 1 }}>
      <span style={{ fontFamily: serif, fontWeight: 600, fontSize: fs, letterSpacing: "0.3em", color: ink, paddingLeft: "0.3em" }}>
        BARSTONE
      </span>
      <span style={{ fontFamily: serif, fontWeight: 500, fontSize: fs * 0.5, letterSpacing: "0.25em", color: gold }}>
        LLP
      </span>
    </span>
  );

  const Tag = (fs: number) => (
    <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: fs, color: gold, letterSpacing: "0.22em" }}>
      Attorneys &amp; Counsellors
    </span>
  );

  if (variant === "mark") return Mark;

  if (variant === "horizontal") {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.3 }}>
        {Mark}
        <div style={{ display: "flex", flexDirection: "column", gap: size * 0.1 }}>
          {Word(size * 0.4)}
          <span style={{ height: 1, background: gold, opacity: 0.7 }} />
          {Tag(size * 0.18)}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.2 }}>
      {Mark}
      {Word(size * 0.38)}
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
        <span style={{ flex: 1, height: 1, background: gold, opacity: 0.6 }} />
        <span style={{ width: 5, height: 5, background: gold, transform: "rotate(45deg)" }} />
        <span style={{ flex: 1, height: 1, background: gold, opacity: 0.6 }} />
      </div>
      {Tag(size * 0.17)}
    </div>
  );
}

export default function Preview() {
  const panel = (bg: string, children: React.ReactNode) => (
    <div style={{ background: bg, padding: "48px 24px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {children}
    </div>
  );
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet" />
      {panel("#14130F", <BarstoneLogo variant="stacked" theme="dark" size={96} />)}
      {panel("#F3EEE2", <BarstoneLogo variant="stacked" theme="light" size={96} />)}
      {panel("#14130F", <BarstoneLogo variant="horizontal" theme="dark" size={64} />)}
      {panel("#F3EEE2", <BarstoneLogo variant="mark" theme="light" size={56} />)}
    </div>
  );
}