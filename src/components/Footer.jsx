import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-leaf-900)", color: "rgba(255,255,255,0.75)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-sm"
            style={{ background: "var(--color-leaf-600)" }}>T</span>
          <span className="font-display text-white text-[17px]">Tytron Biotech LLP</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[13px]">
          {[
            ["/", "Home"], ["/aquaculture", "Aquaculture"],
            ["/agriculture", "Agriculture"], ["/pharmaceutical", "Pharmaceutical"]
          ].map(([to, label]) => (
            <Link key={to} to={to}
              className="hover:text-white transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              {label}
            </Link>
          ))}
          <a href="#contact" className="hover:text-white transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.6)" }}>Contact</a>
        </nav>

        <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          © {new Date().getFullYear()} Tytron Biotech LLP
        </p>
      </div>
    </footer>
  );
}