"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Over", id: "over" },
  { label: "Ervaring", id: "ervaring" },
  { label: "Skills", id: "skills" },
  { label: "Apps", id: "apps" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [active, setActive] = useState("over");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [...NAV_ITEMS].reverse();
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
  }, []);

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

      <div className="hidden sm:flex gap-8">
        {NAV_ITEMS.map(({ label, id }) => (
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
        {NAV_ITEMS.map(({ label, id }) => (
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
      </div>
    </nav>
  );
}
