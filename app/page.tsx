import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MotivationSection } from "@/components/motivation";
import { ExperienceSection } from "@/components/experience";
import { SkillsSection } from "@/components/skills";
import { AppsSection } from "@/components/apps";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MotivationSection />
      <ExperienceSection />
      <SkillsSection />
      <AppsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
