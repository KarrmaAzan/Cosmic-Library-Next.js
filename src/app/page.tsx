import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import ResourcePreviewSection from "../components/sections/ResourcePreviewSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ResourcePreviewSection />
    </main>
  );
}