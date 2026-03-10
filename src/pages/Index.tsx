import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background animate-flicker">
        <div className="scanlines" />
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </I18nProvider>
  );
};

export default Index;
