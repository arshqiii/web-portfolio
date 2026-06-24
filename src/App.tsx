import Navbar from "./components/navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}