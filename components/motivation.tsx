import { FadeIn } from "./fade-in";
import { CV_DATA } from "@/lib/cv-data";

export function MotivationSection() {
  return (
    <section
      id="motivatie"
      className="mx-auto max-w-[900px]"
      style={{ padding: "20px clamp(20px, 6vw, 80px) 100px" }}
    >
      <FadeIn>
        <div
          className="pl-6"
          style={{ borderLeft: "2px solid rgba(194,51,155,0.45)" }}
        >
          <p
            className="text-[13px] font-semibold uppercase mb-3"
            style={{ color: "#c2339b", letterSpacing: 3 }}
          >
            Motivatie
          </p>
          <h2
            className="font-serif font-normal mb-7"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              color: "#e8e4df",
              letterSpacing: -1,
            }}
          >
            Waar ik naar zoek
          </h2>

          <div className="max-w-[760px]">
            {CV_DATA.motivation.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-[1.8] mb-5 last:mb-0"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
