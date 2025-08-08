import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

