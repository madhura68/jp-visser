"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCvData, type Lang } from "@/lib/cv-data";

export function Hero({ lang }: { lang: Lang }) {
  const [loaded, setLoaded] = useState(false);
  const data = getCvData(lang);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section
      id="over"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "100px clamp(20px, 6vw, 80px) 60px" }}
    >
      {/* Gradient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          right: -80,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(194,51,155,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -100,
          left: -60,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(80,60,160,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />

      <div
        className="flex flex-wrap items-center mx-auto w-full"
        style={{
          gap: "clamp(40px, 6vw, 80px)",
          maxWidth: 1100,
        }}
      >
        {/* Portrait */}
        <div
          className="flex-shrink-0 rounded-2xl overflow-hidden relative"
          style={{
            width: "clamp(220px, 28vw, 320px)",
            height: "clamp(280px, 36vw, 420px)",
            boxShadow:
              "0 30px 80px rgba(194,51,155,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.92)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src="/images/portrait.jpg"
            alt="Janpeter Visser"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 220px, 320px"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-[280px]">
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <p
              className="text-[13px] font-semibold uppercase mb-3"
              style={{ color: "#c2339b", letterSpacing: 3 }}
            >
              Software Engineer
            </p>
            <h1
              className="font-serif font-normal mb-6"
              style={{
                fontSize: "clamp(42px, 5.5vw, 68px)",
                color: "#e8e4df",
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              Janpeter
              <br />
              Visser
            </h1>
          </div>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            <p
              className="text-[16px] leading-[1.7] max-w-[480px]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {data.intro}
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg text-sm font-semibold no-underline text-white"
                style={{
                  background: "#c2339b",
                  boxShadow: "0 4px 20px rgba(194,51,155,0.3)",
                }}
              >
                Contact
              </a>
              <a
                href="#ervaring"
                className="px-8 py-3 rounded-lg text-sm font-semibold no-underline"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {data.ui.hero.viewCV}
              </a>
              <a
                href="#apps"
                className="px-8 py-3 rounded-lg text-sm font-semibold no-underline"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Apps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
