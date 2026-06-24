import { useState } from "react";
import { aquacultureProducts, categories } from "../data/products.js";

export default function Aquaculture() {
  const [active, setActive] = useState("All");
  const filtered = active === "All"
    ? aquacultureProducts
    : aquacultureProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Page header */}
      <section style={{
        background: "linear-gradient(135deg, #daeef8 0%, #c8e8f4 100%)",
        borderBottom: "1px solid var(--color-ink-100)"
      }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
          <p className="label-tag mb-3" style={{ color: "var(--color-sky-700)" }}>Division 01 — Aquaculture</p>
          <h1 className="font-display text-[1.85rem] md:text-[2.5rem] leading-[1.1] mb-3"
            style={{ color: "var(--color-ink-900)" }}>
            Aquaculture Products
          </h1>
          <p className="text-[14.5px] leading-relaxed max-w-lg" style={{ color: "var(--color-ink-700)" }}>
            Water conditioners, minerals, disinfectants and health support
            products for ponds, hatcheries and grow-out systems.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className="px-4 py-1.5 rounded-full text-[12.5px] font-semibold border transition-all duration-150"
              style={active === c
                ? { background: "var(--color-leaf-700)", color: "#fff", borderColor: "var(--color-leaf-700)" }
                : { background: "#fff", color: "var(--color-ink-700)", borderColor: "var(--color-ink-100)" }
              }
            >
              {c}
            </button>
          ))}
        </div>

        <p className="label-tag text-[10px] mb-6" style={{ color: "var(--color-ink-300)" }}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}{active !== "All" ? ` — ${active}` : ""}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <article key={p.id} className="product-card overflow-hidden group">
              <div style={{ height: 148, overflow: "hidden", background: "var(--color-leaf-50)" }}>
                <img src={`${p.image.split('?')[0]}?q=55&w=380&auto=format&fit=crop`}
                  alt={p.name} loading="lazy" width="380" height="148"
                  style={{ width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.4s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
              <div className="p-4">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2"
                  style={{ background: "var(--color-sky-50)", color: "var(--color-sky-700)",
                    border: "1px solid var(--color-sky-100)" }}>
                  {p.category}
                </span>
                <h3 className="font-display text-[16.5px] leading-snug" style={{ color: "var(--color-ink-900)" }}>{p.name}</h3>
                <p className="text-[11.5px] mt-0.5 mb-2" style={{ color: "var(--color-ink-300)", fontFamily: "system-ui" }}>{p.type}</p>
                <p className="text-[13px] leading-relaxed mb-3.5" style={{ color: "var(--color-ink-500)" }}>{p.desc}</p>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--color-ink-100)" }}>
                  <span className="text-[11px] font-medium" style={{ color: "var(--color-ink-300)" }}>{p.pack}</span>
                  <a href="#contact" className="text-[12.5px] font-semibold transition-colors duration-150"
                    style={{ color: "var(--color-leaf-700)" }}>
                    Enquire →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}