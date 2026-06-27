import ScrollExperience from "./components/scroll/ScrollExperience";
import HeroSection from "./components/scroll/sections/HeroSection";
import CapabilitiesSection from "./components/scroll/sections/CapabilitiesSection";
import ProjectsSection from "./components/scroll/sections/ProjectsSection";
import ContactSection from "./components/scroll/sections/ContactSection";

export default function Page() {
  return (
    <ScrollExperience>
      <HeroSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ContactSection />
    </ScrollExperience>
  );
}