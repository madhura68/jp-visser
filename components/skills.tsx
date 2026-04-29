"use client";

import Image from "next/image";
import { FadeIn } from "./fade-in";
import { getCvData, type Lang, type SpokenLanguage } from "@/lib/cv-data";

const DEVICONS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";
const FLAGS = "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3";

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
  Redux: `${SIMPLE}/redux/764ABC`,
  "ASP.NET": `${SIMPLE}/dotnet/512BD4`,
  "ASP.NET Core": `${SIMPLE}/dotnet/512BD4`,
  // Databases
  "Microsoft SQL Server": `${DEVICONS}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  Oracle: `${DEVICONS}/oracle/oracle-original.svg`,
  MySQL: `${DEVICONS}/mysql/mysql-original.svg`,
  MariaDB: `${DEVICONS}/mariadb/mariadb-original.svg`,
  // Tools
  Claude: `${SIMPLE}/anthropic/c5a880`,
  "Claude Code": `${SIMPLE}/anthropic/c5a880`,
  Git: `${DEVICONS}/git/git-original.svg`,
  GitHub: `${SIMPLE}/github/ffffff`,
  Supabase: `${SIMPLE}/supabase/3ECF8E`,
  Obsidian: `${SIMPLE}/obsidian/7C3AED`,
  NotebookLM: `${SIMPLE}/googlegemini/8E75B2`,
};

const BADGE_ICONS: Record<string, string> = {
  ChatGPT: "AI",
  Neon: "N",
  Vercel: "▲",
};

function SkillPill({ label }: { label: string }) {
  const icon = SKILL_ICONS[label];
  const badge = BADGE_ICONS[label];

  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium mr-1.5 mb-1.5 transition-all duration-200 hover:bg-[rgba(194,51,155,0.18)] hover:text-[#e8e4df]"
      style={{
        background: "rgba(194,51,155,0.08)",
        border: "1px solid rgba(194,51,155,0.15)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={16}
          height={16}
          className="flex-shrink-0"
          style={{ height: 16, objectFit: "contain", width: 16 }}
          unoptimized
        />
      )}
      {!icon && badge && (
        <span
          className="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-[3px] text-[9px] font-semibold leading-none"
          style={{
            background: "rgba(255,255,255,0.12)",
            color: "#e8e4df",
          }}
        >
          {badge}
        </span>
      )}
      {label}
    </span>
  );
}

function LanguageProgress({ spoken }: { spoken: SpokenLanguage }) {
  const flagSrc = `${FLAGS}/${spoken.flag}.svg`;

  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-2 flex items-center gap-2 text-[13px] font-medium">
        <Image
          src={flagSrc}
          alt={spoken.label}
          width={16}
          height={12}
          className="flex-shrink-0 rounded-[2px]"
          style={{ height: 12, objectFit: "contain", width: 16 }}
          unoptimized
        />
        <span style={{ color: "rgba(255,255,255,0.65)" }}>{spoken.label}</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${spoken.progress}%`,
            background: "linear-gradient(90deg, #c2339b, #e8e4df)",
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection({ lang }: { lang: Lang }) {
  const data = getCvData(lang);
  const { label, groupTitles, interestsHeading } = data.ui.skills;

  const SKILL_GROUPS = [
    { id: "languages", title: groupTitles.languages, items: data.skills.languages },
    { id: "frameworks", title: groupTitles.frameworks, items: data.skills.frameworks },
    { id: "databases", title: groupTitles.databases, items: data.skills.databases },
    { id: "aiTools", title: groupTitles.aiTools, items: data.skills.aiTools },
    { id: "spoken", title: groupTitles.spoken, items: [] },
  ];

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
          {label}
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
          <FadeIn key={group.id} delay={i * 0.1}>
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
                {group.id === "spoken"
                  ? data.skills.spoken.map((s) => (
                      <LanguageProgress key={s.label} spoken={s} />
                    ))
                  : group.items.map((s) => <SkillPill key={s} label={s} />)}
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
            {interestsHeading}
          </h3>
          <div className="flex gap-2 flex-wrap">
            {data.interests.map((interest) => (
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
