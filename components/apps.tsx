import Image from "next/image";
import { FadeIn } from "./fade-in";
import { getCvData, type Lang } from "@/lib/cv-data";

export function AppsSection({ lang }: { lang: Lang }) {
  const data = getCvData(lang);
  const { label, heading, subtext } = data.ui.apps;

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
          {label}
        </p>
        <h2
          className="font-serif font-normal mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#e8e4df",
            letterSpacing: -1,
          }}
        >
          {heading}
        </h2>
        <p
          className="text-[15px] leading-[1.7] mb-12 max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {subtext}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.apps.map((app, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a
              href={app.href}
              className="block rounded-2xl overflow-hidden no-underline group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Screenshots */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: 220, background: "rgba(255,255,255,0.02)" }}
              >
                {/* Desktop screenshot */}
                <Image
                  src={app.screenshot}
                  alt={app.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 420px"
                  priority={i === 0}
                />
                {/* Mobile screenshot overlay */}
                {app.screenshotMobile && (
                  <div
                    className="absolute bottom-0 right-5 overflow-hidden rounded-t-xl"
                    style={{
                      width: 72,
                      height: 130,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Image
                      src={app.screenshotMobile}
                      alt={`${app.title} mobile`}
                      fill
                      className="object-cover object-top"
                      sizes="72px"
                    />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <p
                  className="text-[11px] font-semibold uppercase mb-1"
                  style={{ color: "#c2339b", letterSpacing: 2 }}
                >
                  {app.subtitle}
                </p>
                <h3
                  className="font-serif font-normal mb-2"
                  style={{ fontSize: 20, color: "#e8e4df" }}
                >
                  {app.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {app.description}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
