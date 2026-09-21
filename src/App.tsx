import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { TechMarquee } from './components/sections/TechMarquee';

function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] page-mesh text-slate-950 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
