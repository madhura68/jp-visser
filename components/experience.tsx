"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { CV_DATA, type Experience } from "@/lib/cv-data";

function ExperienceCard({
  job,
  index,
}: {
  job: Experience;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="rounded-2xl p-7 mb-5 cursor-pointer transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(255,255,255,0.04)"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${
            hovered
              ? "rgba(194,51,155,0.25)"
              : "rgba(255,255,255,0.06)"
          }`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h3
              className="font-serif text-2xl font-normal mb-1"
              style={{ color: "#e8e4df" }}
            >
              {job.role}
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: "#c2339b" }}
            >
              {job.company}, {job.location}
            </p>
          </div>
          <span
            className="text-[13px] whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {job.period}
          </span>
        </div>

        <p
          className="text-[15px] leading-[1.7] mt-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {job.description}
        </p>

        {job.highlights.length > 0 && (
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: expanded ? 600 : 0 }}
          >
            <div
              className="pt-4 mt-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {job.highlights.map((h, i) => (
                <div key={i} className="mb-3">
                  <p
                    className="text-[13px] font-semibold mb-1"
                    style={{ color: "#c2339b" }}
                  >
                    {h.title}
                  </p>
                  <p
                    className="text-[14px] leading-[1.6]"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {job.highlights.length > 0 && (
          <p
            className="text-[12px] mt-3"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {expanded ? "▲ Minder tonen" : "▼ Meer details"}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="ervaring"
      className="mx-auto max-w-[900px]"
      style={{ padding: "100px clamp(20px, 6vw, 80px)" }}
    >
      <FadeIn>
        <p
          className="text-[13px] font-semibold uppercase mb-3"
          style={{ color: "#c2339b", letterSpacing: 3 }}
        >
          Loopbaan
        </p>
        <h2
          className="font-serif font-normal mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#e8e4df",
            letterSpacing: -1,
          }}
        >
          Werkervaring
        </h2>
      </FadeIn>

      {CV_DATA.experience.map((job, i) => (
        <ExperienceCard key={i} job={job} index={i} />
      ))}

      <FadeIn delay={0.2}>
        <div
          className="rounded-2xl p-7 mt-10"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-[13px] font-semibold uppercase mb-3"
            style={{ color: "#c2339b", letterSpacing: 3 }}
          >
            Opleiding
          </p>
          <h3
            className="font-serif text-2xl font-normal mb-1"
            style={{ color: "#e8e4df" }}
          >
            {CV_DATA.education.university}
          </h3>
          <p
            className="text-[15px] mb-1"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {CV_DATA.education.degree} —{" "}
            {CV_DATA.education.specialization}
          </p>
          <p
            className="text-[13px] mb-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {CV_DATA.education.period}
          </p>
          <p
            className="text-[14px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {CV_DATA.education.secondary}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
