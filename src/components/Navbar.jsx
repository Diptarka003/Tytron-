import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aquaculture", label: "Aquaculture" },
  { to: "/agriculture", label: "Agriculture" },
  { to: "/pharmaceutical", label: "Pharmaceutical" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-leaf-100" style={{ borderColor: "var(--color-ink-100)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
            style={{ background: "var(--color-leaf-700)" }}>T</span>
          <span className="font-display text-xl" style={{ color: "var(--color-ink-900)" }}>Tytron</span>
          <span className="hidden sm:block text-xs font-medium px-2 py-0.5 rounded"
            style={{ background: "var(--color-leaf-50)", color: "var(--color-leaf-700)", border: "1px solid var(--color-leaf-100)" }}>
            Biotech LLP
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 ${isActive
                  ? "text-leaf-700"
                  : "text-ink-500 hover:text-ink-900"
                }`
              }
              style={({ isActive }) => ({ color: isActive ? "var(--color-leaf-700)" : undefined })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href="#contact"
          className="hidden lg:inline-flex items-center rounded-lg text-white text-sm font-semibold px-5 py-2 transition-colors duration-150"
          style={{ background: "var(--color-leaf-700)" }}
          onMouseEnter={e => e.target.style.background = "var(--color-leaf-800)"}
          onMouseLeave={e => e.target.style.background = "var(--color-leaf-700)"}
        >
          Get a Quote
        </a>

        <button className="lg:hidden p-2 rounded" onClick={() => setOpen(!open)}
          style={{ color: "var(--color-ink-700)" }} aria-label={open ? "Close menu" : "Open menu"}>
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-4"
          style={{ borderColor: "var(--color-ink-100)" }}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}
              className="text-base font-medium"
              style={({ isActive }) => ({ color: isActive ? "var(--color-leaf-700)" : "var(--color-ink-700)" })}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-lg text-white text-sm font-semibold px-5 py-2.5 mt-1"
            style={{ background: "var(--color-leaf-700)" }}>
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}