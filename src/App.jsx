import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'; // ייבוא הרכיב החדש
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection'; 

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection /> {/* הצגת אזור האודות */}
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App;