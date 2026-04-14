import { FadeIn } from "./fade-in";

const PLACEHOLDER_APPS = [
  { icon: "⚡", label: "App 1 — binnenkort" },
  { icon: "🔧", label: "App 2 — binnenkort" },
  { icon: "📱", label: "App 3 — binnenkort" },
];

export function AppsSection() {
  return (
    <section
      id="apps"
      className="mx-auto max-w-[900px]"
      style={{ padding: "100px clamp(20px, 6vw, 80px)" }}
    >
      <FadeIn>
        <p
          className="text-[13px] font-semibold uppercase mb-3"
          style={{ color: "#c2339b", letterSpacing: 3 }}
        >
          Portfolio
        </p>
        <h2
          className="font-serif font-normal mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#e8e4df",
            letterSpacing: -1,
          }}
        >
          Apps & Projecten
        </h2>
        <p
          className="text-[15px] leading-[1.7] mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Hier komen links naar mijn apps die ik op Vercel host.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PLACEHOLDER_APPS.map((app, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px dashed rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{
                  background: "rgba(194,51,155,0.1)",
                  color: "#c2339b",
                }}
              >
                {app.icon}
              </div>
              <p
                className="text-[14px]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {app.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
