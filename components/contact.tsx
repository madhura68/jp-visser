import { FadeIn } from "./fade-in";
import { getCvData, type Lang } from "@/lib/cv-data";

export function ContactSection({ lang }: { lang: Lang }) {
  const data = getCvData(lang);
  const { label, heading, emailLabel, locationLabel, websiteLabel } = data.ui.contact;

  const CONTACT_ITEMS = [
    { label: emailLabel, value: data.contact.email, href: `mailto:${data.contact.email}` },
    { label: locationLabel, value: data.contact.location, href: null },
    { label: websiteLabel, value: "jp-visser.nl", href: "https://jp-visser.nl" },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-[900px]"
      style={{ padding: "100px clamp(20px, 6vw, 80px) 60px" }}
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
          {heading}
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {CONTACT_ITEMS.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.1}>
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-[12px] font-semibold uppercase mb-2"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: 2,
                }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[15px] no-underline"
                  style={{ color: "#c2339b" }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[15px]" style={{ color: "#e8e4df" }}>
                  {item.value}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
