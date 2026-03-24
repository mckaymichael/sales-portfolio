import { SectionHero } from "@/components/SectionHero";
import { SectionRoot } from "@/components/SectionRoot";
import { AboutSection } from "@/components/AboutSection";
import { SectionImpact } from "@/components/SectionImpact";
import { SectionVoices } from "@/components/SectionVoices";
import { SectionFooter } from "@/components/SectionFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionHero />
      <SectionRoot />
      <AboutSection />
      <SectionImpact />
      <SectionVoices />
      <SectionFooter />
    </main>
  );
}
