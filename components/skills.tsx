"use client";

import { FadeIn } from "./fade-in";
import { CV_DATA } from "@/lib/cv-data";

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-[13px] font-medium mr-1.5 mb-1.5 transition-all duration-200 hover:bg-[rgba(194,51,155,0.18)] hover:text-[#e8e4df]"
      style={{
        background: "rgba(194,51,155,0.08)",
        border: "1px solid rgba(194,51,155,0.15)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {label}
    </span>
  );
}

const SKILL_GROUPS = [
  { title: "Programmeertalen", items: CV_DATA.skills.languages },
  { title: "Frameworks", items: CV_DATA.skills.frameworks },
  { title: "Databases", items: CV_DATA.skills.databases },
  { title: "Talen", items: CV_DATA.skills.spoken },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[900px]"
      style={{ padding: "100px clamp(20px, 6vw, 80px)" }}
    >
      <FadeIn>
        <p
          className="text-[13px] font-semibold uppercase mb-3"
          style={{ color: "#c2339b", letterSpacing: 3 }}
        >
          Technologie
        </p>
        <h2
          className="font-serif font-normal mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#e8e4df",
            letterSpacing: -1,
          }}
        >
          Skills & Tools
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.1}>
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="text-[12px] font-semibold uppercase mb-4"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: 2,
                }}
              >
                {group.title}
              </h3>
              <div>
                {group.items.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-10">
          <h3
            className="text-[12px] font-semibold uppercase mb-4"
            style={{
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 2,
            }}
          >
            Interesses
          </h3>
          <div className="flex gap-2 flex-wrap">
            {CV_DATA.interests.map((interest) => (
              <span
                key={interest}
                className="px-5 py-2 rounded-full text-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
