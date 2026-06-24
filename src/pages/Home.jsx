import { Link } from "react-router-dom";

const CheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const RepeatIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/>
  </svg>
);
const BoxIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
  </svg>
);
const HeadsetIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
  </svg>
);

function FarmerIllustration() {
  return (
    <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of an Indian farmer in a green field with a pond"
      style={{ width: "100%", display: "block" }}>
      <rect width="520" height="340" fill="#C8E8F5"/>
      <rect width="520" height="185" fill="#DAEEF8"/>
      <circle cx="430" cy="55" r="36" fill="#FBBF24" opacity="0.95"/>
      <circle cx="430" cy="55" r="26" fill="#FDE68A"/>
      {[0,45,90,135,180,225,270,315].map((deg,i) => (
        <line key={i}
          x1={430 + Math.cos(deg*Math.PI/180)*30} y1={55 + Math.sin(deg*Math.PI/180)*30}
          x2={430 + Math.cos(deg*Math.PI/180)*44} y2={55 + Math.sin(deg*Math.PI/180)*44}
          stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round"/>
      ))}
      <g opacity="0.92">
        <ellipse cx="95" cy="62" rx="46" ry="20" fill="white"/>
        <ellipse cx="125" cy="52" rx="30" ry="18" fill="white"/>
        <ellipse cx="68" cy="58" rx="24" ry="15" fill="white"/>
      </g>
      <g opacity="0.78">
        <ellipse cx="270" cy="44" rx="38" ry="16" fill="white"/>
        <ellipse cx="296" cy="36" rx="25" ry="14" fill="white"/>
        <ellipse cx="248" cy="41" rx="20" ry="12" fill="white"/>
      </g>
      <ellipse cx="120" cy="200" rx="180" ry="65" fill="#7DC46A"/>
      <ellipse cx="400" cy="210" rx="175" ry="60" fill="#6BBD56"/>
      <ellipse cx="520" cy="195" rx="130" ry="55" fill="#74C460"/>
      <rect x="0" y="192" width="520" height="148" fill="#5AAA46"/>
      <rect x="0" y="252" width="520" height="88" fill="#8B6347"/>
      {[260,272,284,296,308,320,332].map(y => (
        <rect key={y} x="0" y={y} width="520" height="7" fill="#7A5438" rx="3" opacity="0.5"/>
      ))}
      <ellipse cx="105" cy="242" rx="80" ry="32" fill="#3B9FD4" opacity="0.88"/>
      <ellipse cx="105" cy="237" rx="68" ry="22" fill="#5BB8E8" opacity="0.6"/>
      <path d="M 52 238 Q 78 232 105 238 Q 132 244 158 238" fill="none" stroke="white" strokeWidth="1.4" opacity="0.45"/>
      <path d="M 40 246 Q 72 240 105 246 Q 138 252 170 246" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
      <ellipse cx="88" cy="243" rx="12" ry="5" fill="#1B6E9A" opacity="0.55"/>
      <polygon points="100,243 108,238 108,248" fill="#1B6E9A" opacity="0.55"/>
      <ellipse cx="128" cy="239" rx="9" ry="4" fill="#1B6E9A" opacity="0.4"/>
      {[290,320,350,380,410,440,470].map(x => (
        <g key={x}>
          <line x1={x} y1="252" x2={x} y2="200" stroke="#2E7D22" strokeWidth="3"/>
          <ellipse cx={x} cy="196" rx="10" ry="22" fill="#388E2A" opacity="0.9"/>
          <line x1={x} y1="228" x2={x-14} y2="212" stroke="#43A332" strokeWidth="1.8" opacity="0.75"/>
          <line x1={x} y1="228" x2={x+14} y2="212" stroke="#43A332" strokeWidth="1.8" opacity="0.75"/>
        </g>
      ))}
      <g transform="translate(188, 108)">
        <ellipse cx="66" cy="148" rx="38" ry="8" fill="rgba(0,0,0,0.12)"/>
        <rect x="52" y="118" width="14" height="32" rx="6" fill="#5D4037"/>
        <rect x="70" y="118" width="14" height="32" rx="6" fill="#5D4037"/>
        <ellipse cx="59" cy="150" rx="10" ry="5" fill="#3E2723"/>
        <ellipse cx="77" cy="150" rx="10" ry="5" fill="#3E2723"/>
        <path d="M 46 110 Q 66 125 86 110 L 84 118 Q 66 130 48 118 Z" fill="#E8D5B0"/>
        <rect x="44" y="70" width="48" height="46" rx="10" fill="#F5E6C8"/>
        <line x1="68" y1="75" x2="68" y2="112" stroke="#D4C4A0" strokeWidth="1.5" opacity="0.6"/>
        <line x1="55" y1="82" x2="81" y2="82" stroke="#D4C4A0" strokeWidth="1" opacity="0.5"/>
        <rect x="24" y="72" width="12" height="38" rx="6" fill="#C49A70" transform="rotate(-12, 30, 91)"/>
        <rect x="100" y="72" width="12" height="34" rx="6" fill="#C49A70" transform="rotate(8, 106, 89)"/>
        <rect x="61" y="54" width="14" height="18" rx="6" fill="#C49A70"/>
        <ellipse cx="68" cy="46" rx="22" ry="24" fill="#C49A70"/>
        <ellipse cx="60" cy="42" rx="3.5" ry="3.5" fill="#4A2C0A"/>
        <ellipse cx="76" cy="42" rx="3.5" ry="3.5" fill="#4A2C0A"/>
        <circle cx="61" cy="41" r="1.2" fill="white" opacity="0.6"/>
        <circle cx="77" cy="41" r="1.2" fill="white" opacity="0.6"/>
        <path d="M 58 52 Q 68 59 78 52" fill="none" stroke="#8B5E3A" strokeWidth="1.8" strokeLinecap="round"/>
        <ellipse cx="68" cy="47" rx="3" ry="2" fill="#B8865A"/>
        <path d="M 60 51 Q 64 48 68 51 Q 72 48 76 51" fill="none" stroke="#4A2C0A" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="46" cy="46" rx="5" ry="7" fill="#C49A70"/>
        <ellipse cx="90" cy="46" rx="5" ry="7" fill="#C49A70"/>
        <ellipse cx="68" cy="26" rx="24" ry="10" fill="#E53935"/>
        <path d="M 44 26 Q 68 10 92 26 Q 80 18 68 16 Q 56 18 44 26 Z" fill="#C62828"/>
        <ellipse cx="68" cy="26" rx="24" ry="6" fill="#EF5350" opacity="0.7"/>
        <path d="M 48 22 Q 68 14 88 22" fill="none" stroke="#B71C1C" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="88" cy="22" r="5" fill="#C62828"/>
        <line x1="30" y1="60" x2="16" y2="152" stroke="#795548" strokeWidth="4" strokeLinecap="round"/>
        <rect x="2" y="148" width="28" height="8" rx="3" fill="#5D4037" transform="rotate(-15, 16, 152)"/>
      </g>
      <path d="M 175 72 Q 180 66 185 72 Q 190 66 195 72" fill="none" stroke="#546E7A" strokeWidth="1.5" opacity="0.65"/>
      <path d="M 204 58 Q 208 53 212 58 Q 216 53 220 58" fill="none" stroke="#546E7A" strokeWidth="1.3" opacity="0.5"/>
      <path d="M 345 38 Q 349 33 353 38 Q 357 33 361 38" fill="none" stroke="#546E7A" strokeWidth="1.2" opacity="0.45"/>
    </svg>
  );
}

const divisions = [
  { name: "Aquaculture", to: "/aquaculture", blurb: "Water treatments, minerals and health products for fish and shrimp ponds, hatcheries and grow-out farms.",
    imgSrc: "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=60&w=480&auto=format&fit=crop",
    tag: "Ponds · Hatcheries · Farms", tagColor: "var(--color-sky-700)", tagBg: "var(--color-sky-50)" },
  { name: "Agriculture", to: "/agriculture", blurb: "Soil conditioners and crop inputs to improve yield, plant health and resilience across seasons.",
    imgSrc: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=60&w=480&auto=format&fit=crop",
    tag: "Soil · Crops · Yield", tagColor: "var(--color-leaf-700)", tagBg: "var(--color-leaf-50)" },
  { name: "Pharmaceutical", to: "/pharmaceutical", blurb: "Veterinary and health formulations to support animal welfare and production performance.",
    imgSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=60&w=480&auto=format&fit=crop",
    tag: "Animal Health · Formulations", tagColor: "#5B4BA8", tagBg: "#F4F1FF" },
];

const values = [
  { icon: CheckIcon, title: "Field-tested", body: "Every product validated in real ponds and fields, not just in the lab." },
  { icon: RepeatIcon, title: "Consistent quality", body: "Same formulation, same results — batch after batch, season after season." },
  { icon: BoxIcon, title: "Right pack sizes", body: "From small farms to large operations — packs sized to avoid waste." },
  { icon: HeadsetIcon, title: "Technical support", body: "Our team responds quickly when your crop or stock needs help." },
];

export default function Home() {
  return (
    <>
      <section style={{ background: "#F5FAF4", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, var(--color-leaf-700) 0%, var(--color-sky-500) 100%)" }} />

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="hero-layout">
            <div>
              <div className="hero-badges" style={{ marginBottom: "1.5rem" }}>
                {[
                  ["Aquaculture", "var(--color-sky-50)", "var(--color-sky-700)", "var(--color-sky-100)"],
                  ["Agriculture", "var(--color-leaf-50)", "var(--color-leaf-700)", "var(--color-leaf-100)"],
                  ["Pharma", "#F4F1FF", "#5B4BA8", "#E2DCF8"],
                ].map(([label, bg, color, border]) => (
                  <span key={label} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                    padding: "4px 12px", borderRadius: 100, background: bg, color, border: `1px solid ${border}`,
                    textTransform: "uppercase" }}>
                    {label}
                  </span>
                ))}
              </div>

              <h1 className="hero-h1" style={{ fontFamily: "Georgia, serif", color: "var(--color-ink-900)",
                letterSpacing: "-0.01em", marginBottom: "1.25rem" }}>
                Better inputs.<br />Better harvests.<br />
                <span style={{ color: "var(--color-leaf-700)" }}>Every season.</span>
              </h1>

              <p className="hero-sub" style={{ lineHeight: 1.7, color: "var(--color-ink-500)", maxWidth: 400, marginBottom: "1.75rem" }}>
                Tytron Biotech formulates water conditioners, crop nutrients
                and health solutions built for Indian ponds and fields —
                tested where it matters.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "2rem" }}>
                <a href="#divisions" style={{ display: "inline-flex", alignItems: "center", borderRadius: 8,
                  background: "var(--color-leaf-700)", color: "#fff", fontSize: 14, fontWeight: 700, padding: "12px 24px",
                  textDecoration: "none", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--color-leaf-800)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--color-leaf-700)"}>
                  See Our Products
                </a>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", borderRadius: 8,
                  background: "#fff", color: "var(--color-leaf-700)", border: "1.5px solid var(--color-leaf-300)",
                  fontSize: 14, fontWeight: 700, padding: "12px 24px", textDecoration: "none", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--color-leaf-50)"}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                  Contact Us →
                </a>
              </div>

              <div className="trust-strip" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--color-leaf-100)" }}>
                {[["20+", "Products"], ["3", "Divisions"], ["Pan-India", "Supply"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--color-leaf-700)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-300)", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual-panel" style={{ position: "relative", padding: 18 }}>
              <div style={{ borderRadius: 20, overflow: "hidden", position: "relative",
                boxShadow: "0 8px 32px rgba(28,43,30,0.14)", lineHeight: 0 }}>
                <FarmerIllustration />
                <div style={{ background: "var(--color-leaf-900)", padding: "14px 18px", lineHeight: 1 }}>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.45, fontStyle: "italic" }}>
                    "Products that work in my pond, not just in someone's lab."
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10.5, margin: "6px 0 0",
                    fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontStyle: "normal" }}>
                    — Aquaculture Farmer, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="hero-floating-badge" style={{ position: "absolute", top: 0, left: 0,
                background: "#fff", borderRadius: 14, padding: "10px 14px", boxShadow: "0 4px 16px rgba(28,43,30,0.13)",
                border: "1px solid var(--color-leaf-100)", display: "flex", alignItems: "center", gap: 8, zIndex: 2 }}>
                <div className="badge-icon" style={{ width: 32, height: 32, borderRadius: 10, background: "var(--color-leaf-50)",
                  border: "1px solid var(--color-leaf-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>🌿</div>
                <div>
                  <div className="badge-title" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink-900)", lineHeight: 1 }}>Trusted</div>
                  <div className="badge-sub" style={{ fontSize: 10, color: "var(--color-ink-300)", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Since 2010</div>
                </div>
              </div>

              <div className="hero-floating-badge" style={{ position: "absolute", bottom: 0, right: 0,
                background: "#fff", borderRadius: 14, padding: "10px 14px", boxShadow: "0 4px 16px rgba(28,43,30,0.13)",
                border: "1px solid var(--color-sky-100)", display: "flex", alignItems: "center", gap: 8, zIndex: 2 }}>
                <div className="badge-icon" style={{ width: 32, height: 32, borderRadius: 10, background: "var(--color-sky-50)",
                  border: "1px solid var(--color-sky-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>🐟</div>
                <div>
                  <div className="badge-title" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink-900)", lineHeight: 1 }}>Aquaculture</div>
                  <div className="badge-sub" style={{ fontSize: 10, color: "var(--color-sky-700)", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divisions" style={{ background: "#fff", borderTop: "1px solid var(--color-ink-100)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="label-tag" style={{ color: "var(--color-leaf-600)", marginBottom: 8 }}>What we make</p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "var(--color-ink-900)" }}>
              Products for every part of your farm
            </h2>
          </div>

          <div className="divisions-grid">
            {divisions.map((d) => (
              <Link key={d.name} to={d.to} className="division-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ height: 168, overflow: "hidden", background: d.tagBg }}>
                  <img src={d.imgSrc} alt={d.name} loading="lazy" width="480" height="168"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: d.tagColor, display: "block", marginBottom: 6 }}>{d.tag}</span>
                  <h3 className="font-display" style={{ fontSize: 19, color: "var(--color-ink-900)", marginBottom: 6 }}>{d.name}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--color-ink-500)", lineHeight: 1.6, marginBottom: "1rem" }}>{d.blurb}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: d.tagColor, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    View products
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-leaf-50)", borderTop: "1px solid var(--color-ink-100)", borderBottom: "1px solid var(--color-ink-100)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="label-tag" style={{ color: "var(--color-leaf-600)", marginBottom: 8 }}>Why farmers choose us</p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "var(--color-ink-900)" }}>
              Built for Indian farms. Trusted in the field.
            </h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ background: "#fff", borderRadius: 14, border: "1px solid var(--color-ink-100)", padding: "1.25rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--color-leaf-50)",
                  border: "1px solid var(--color-leaf-100)", display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem", color: "var(--color-leaf-700)" }}>
                  <Icon size={18} />
                </div>
                <h4 className="font-display" style={{ fontSize: 16.5, color: "var(--color-ink-900)", marginBottom: 6 }}>{title}</h4>
                <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-leaf-700)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 cta-row">
          <div>
            <h3 className="font-display" style={{ fontSize: "clamp(1.15rem, 4vw, 1.6rem)", color: "#fff", lineHeight: 1.25, marginBottom: 6 }}>
              Need help choosing the right product?
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0 }}>
              Our team will guide you — no technical knowledge needed.
            </p>
          </div>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", borderRadius: 8,
            background: "#fff", color: "var(--color-leaf-800)", fontSize: 14, fontWeight: 700, padding: "12px 24px",
            textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--color-leaf-50)"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
            Talk to Us
          </a>
        </div>
      </section>
    </>
  );
}