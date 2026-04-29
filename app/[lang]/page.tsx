import { redirect } from "next/navigation";
import type { Lang } from "@/lib/cv-data";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MotivationSection } from "@/components/motivation";
import { ExperienceSection } from "@/components/experience";
import { SkillsSection } from "@/components/skills";
import { AppsSection } from "@/components/apps";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

const VALID_LANGS: Lang[] = ["nl", "en"];

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!VALID_LANGS.includes(lang as Lang)) {
    redirect("/nl");
  }

  const currentLang = lang as Lang;

  return (
    <>
      <Nav lang={currentLang} />
      <Hero lang={currentLang} />
      <MotivationSection lang={currentLang} />
      <ExperienceSection lang={currentLang} />
      <SkillsSection lang={currentLang} />
      <AppsSection lang={currentLang} />
      <ContactSection lang={currentLang} />
      <Footer />
    </>
  );
}
