"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCvData, type Lang } from "@/lib/cv-data";

export function Nav({ lang }: { lang: Lang }) {
  const [active, setActive] = useState("over");
  const [scrolled, setScrolled] = useState(false);
  const data = getCvData(lang);
  const navItems = data.ui.nav;
  const otherLang: Lang = lang === "nl" ? "en" : "nl";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [...navItems].reverse();
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15,15,20,0.92)"
          : "rgba(15,15,20,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 clamp(20px, 4vw, 60px)",
        height: 64,
      }}
    >
      <span
        className="font-serif text-[22px] tracking-tight"
        style={{ color: "#e8e4df" }}
      >
        JP<span style={{ color: "#c2339b" }}>.</span>
      </span>

      <div className="hidden sm:flex items-center gap-8">
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className="bg-transparent border-none cursor-pointer text-[13px] font-medium uppercase tracking-[1.2px] transition-colors duration-300 pb-1"
            style={{
              color:
                active === id ? "#c2339b" : "rgba(255,255,255,0.5)",
              borderBottom:
                active === id
                  ? "1px solid #c2339b"
                  : "1px solid transparent",
            }}
          >
            {label}
          </button>
        ))}

        {/* Language switcher */}
        <div
          className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[1px] ml-2"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "1.5rem" }}
        >
          <span style={{ color: "#c2339b" }}>{lang.toUpperCase()}</span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
          <Link
            href={`/${otherLang}`}
            style={{ color: "rgba(255,255,255,0.4)" }}
            className="no-underline hover:text-white transition-colors duration-200"
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="sm:hidden bg-transparent border-none cursor-pointer"
        style={{ color: "rgba(255,255,255,0.6)", fontSize: 20 }}
        onClick={() => {
          const menu = document.getElementById("mobile-menu");
          if (menu) {
            menu.style.display =
              menu.style.display === "flex" ? "none" : "flex";
          }
        }}
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className="sm:hidden absolute top-[64px] left-0 right-0 flex-col py-4 gap-1"
        style={{
          display: "none",
          background: "rgba(15,15,20,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => {
              handleNav(id);
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.style.display = "none";
            }}
            className="bg-transparent border-none cursor-pointer text-[14px] font-medium py-3 px-8 text-left transition-colors"
            style={{
              color:
                active === id ? "#c2339b" : "rgba(255,255,255,0.5)",
            }}
          >
            {label}
          </button>
        ))}
        <div className="flex items-center gap-2 px-8 pt-3 mt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-[12px] font-semibold uppercase" style={{ color: "#c2339b" }}>{lang.toUpperCase()}</span>
          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
          <Link
            href={`/${otherLang}`}
            className="text-[12px] font-semibold uppercase no-underline"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
}
