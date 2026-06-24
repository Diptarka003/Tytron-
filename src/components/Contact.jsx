export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--color-earth-50)", borderTop: "1px solid var(--color-ink-100)" }}>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="mb-12">
          <p className="label-tag mb-2" style={{ color: "var(--color-leaf-600)" }}>Contact us</p>
          <h2 className="font-display text-[1.6rem] md:text-[2rem]" style={{ color: "var(--color-ink-900)" }}>
            We're here to help you get the right product
          </h2>
          <p className="text-[14px] mt-2 max-w-md" style={{ color: "var(--color-ink-500)" }}>
            Whether you run a small pond or a large farm — talk to us and we'll
            recommend what works for your situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Info */}
          <div className="flex flex-col gap-8">

            <div className="rounded-xl p-6" style={{ background: "#fff", border: "1px solid var(--color-ink-100)" }}>
              <p className="label-tag text-[10px] mb-4" style={{ color: "var(--color-leaf-600)" }}>Reach us at</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                    style={{ background: "var(--color-leaf-50)", color: "var(--color-leaf-700)" }}>
                    📍
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-ink-900)" }}>Tytron Biotech LLP</p>
                    <p className="text-sm leading-relaxed mt-0.5" style={{ color: "var(--color-ink-500)" }}>
                      Your address here,<br />City, State — PIN, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                    style={{ background: "var(--color-sky-50)", color: "var(--color-sky-700)" }}>
                    📞
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--color-ink-300)" }}>Phone / WhatsApp</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-sm font-semibold"
                      style={{ color: "var(--color-leaf-700)" }}>+91-XX-XXXX XXXX</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                    style={{ background: "var(--color-harvest-100)", color: "var(--color-harvest-700)" }}>
                    ✉
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--color-ink-300)" }}>Email</p>
                    <a href="mailto:info@tytronbiotech.com" className="text-sm font-semibold"
                      style={{ color: "var(--color-leaf-700)" }}>info@tytronbiotech.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="rounded-xl p-5 flex items-start gap-3"
              style={{ background: "var(--color-leaf-50)", border: "1px solid var(--color-leaf-100)" }}>
              <span className="text-lg mt-0.5">⏱</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-leaf-800)" }}>We respond within 1 business day</p>
                <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color: "var(--color-leaf-700)" }}>
                  For urgent field queries, call or WhatsApp us directly.
                </p>
              </div>
            </div>

            {/* Division pills */}
            <div>
              <p className="label-tag text-[10px] mb-3" style={{ color: "var(--color-ink-500)" }}>Our divisions</p>
              <div className="flex flex-wrap gap-2">
                {[
                  ["Aquaculture", "var(--color-sky-100)", "var(--color-sky-700)"],
                  ["Agriculture", "var(--color-leaf-100)", "var(--color-leaf-700)"],
                  ["Pharmaceutical", "#EEE8FF", "#5B4BA8"],
                ].map(([name, bg, color]) => (
                  <span key={name} className="px-3.5 py-1.5 rounded-full text-[12.5px] font-medium"
                    style={{ background: bg, color: color }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl p-6 md:p-7" style={{ background: "#fff", border: "1px solid var(--color-ink-100)" }}>
            <h3 className="font-display text-[18px] mb-5" style={{ color: "var(--color-ink-900)" }}>
              Request a Quote
            </h3>
            <form action="mailto:info@tytronbiotech.com" method="post" encType="text/plain"
              className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="contact-input" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>Farm / Company</label>
                  <input type="text" name="company" placeholder="Optional" className="contact-input" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className="contact-input" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>Email</label>
                  <input type="email" name="email" placeholder="Optional" className="contact-input" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>What are you looking for?</label>
                <select name="division" className="contact-input contact-select">
                  <option value="">Select a division…</option>
                  <option>Aquaculture — pond/hatchery products</option>
                  <option>Agriculture — soil and crop inputs</option>
                  <option>Pharmaceutical — animal health</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="label-tag text-[10px]" style={{ color: "var(--color-ink-500)" }}>Tell us about your need</label>
                <textarea name="message" rows={4} placeholder="E.g. I have a 2-acre shrimp pond and want to improve water quality before the next cycle…"
                  className="contact-input" style={{ resize: "none" }} />
              </div>

              <button type="submit"
                className="w-full rounded-lg text-white font-semibold py-3 text-sm transition-colors duration-150 mt-1"
                style={{ background: "var(--color-leaf-700)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--color-leaf-800)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--color-leaf-700)"}
              >
                Send Enquiry
              </button>

              <p className="text-[12px] text-center" style={{ color: "var(--color-ink-300)" }}>
                Phone / WhatsApp number is the fastest way to reach us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}