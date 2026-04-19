"use client";

import Image from "next/image";
import { FadeIn } from "./fade-in";
import { CV_DATA } from "@/lib/cv-data";

const DEVICONS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";

const SKILL_ICONS: Record<string, string> = {
  // Languages
  Python: `${DEVICONS}/python/python-original.svg`,
  TypeScript: `${DEVICONS}/typescript/typescript-original.svg`,
  JavaScript: `${DEVICONS}/javascript/javascript-original.svg`,
  "C#": `${DEVICONS}/csharp/csharp-original.svg`,
  C: `${DEVICONS}/c/c-original.svg`,
  "C++": `${DEVICONS}/cplusplus/cplusplus-original.svg`,
  HTML: `${DEVICONS}/html5/html5-original.svg`,
  CSS: `${DEVICONS}/css3/css3-original.svg`,
  // Frameworks
  "Next.js": `${DEVICONS}/nextjs/nextjs-original.svg`,
  React: `${DEVICONS}/react/react-original.svg`,
  "Tailwind CSS": `${SIMPLE}/tailwindcss/06B6D4`,
  Angular: `${DEVICONS}/angularjs/angularjs-original.svg`,
  "Angular Material": `${SIMPLE}/angular/DD0031`,
  Nx: `${SIMPLE}/nx/143055`,
  "ASP.NET": `${SIMPLE}/dotnet/512BD4`,
  "ASP.NET Core": `${SIMPLE}/dotnet/512BD4`,
  // Databases
  "Microsoft SQL Server": `${DEVICONS}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  Oracle: `${DEVICONS}/oracle/oracle-original.svg`,
  MySQL: `${DEVICONS}/mysql/mysql-original.svg`,
  MariaDB: `${DEVICONS}/mariadb/mariadb-original.svg`,
  // Tools
  Claude: `${SIMPLE}/anthropic/c5a880`,
  ChatGPT: `${SIMPLE}/openai/ffffff`,
  Git: `${DEVICONS}/git/git-original.svg`,
  Supabase: `${SIMPLE}/supabase/3ECF8E`,
  Vercel: `${SIMPLE}/vercel/ffffff`,
};

const LANGUAGE_FLAGS: Record<string, string> = {
  Nederlands: "🇳🇱",
  Engels: "🇬🇧",
  Duits: "🇩🇪",
};

function SkillPill({ label }: { label: string }) {
  const icon = SKILL_ICONS[label];
  const flag = LANGUAGE_FLAGS[label];
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium mr-1.5 mb-1.5 transition-all duration-200 hover:bg-[rgba(194,51,155,0.18)] hover:text-[#e8e4df]"
      style={{
        background: "rgba(194,51,155,0.08)",
        border: "1px solid rgba(194,51,155,0.15)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {flag && <span className="text-base leading-none">{flag}</span>}
      {!flag && icon && (
        <Image
          src={icon}
          alt={label}
          width={16}
          height={16}
          className="flex-shrink-0"
          style={{ objectFit: "contain" }}
          unoptimized
        />
      )}
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
