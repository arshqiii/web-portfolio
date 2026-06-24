import { Download, Mail } from 'lucide-react';
import bgImage from '../assets/background-hero.jpg';
import { Button } from '../components/Button';

import linkedinSvg from '../assets/social-icons/linkedin-icon.svg';
import githubSvg from '../assets/social-icons/github-icon.svg';
import instaSvg from '../assets/social-icons/insta-icon.svg';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center pt-24 pb-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '25% center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay based on Figma design */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(19, 34, 25, 0.9) 0%, rgba(19, 34, 25, 0.7) 35%, rgba(28, 43, 34, 0) 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col items-start gap-6 mt-12 md:mt-24">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
          Hi, I'm Muhammad<br />
          Radhiya <span className="text-[#BFEBA9]">Arshq</span>.
        </h1>

        {/* Subtitle */}
        <div className="w-full max-w-2xl">
          <p className="text-xl md:text-2xl text-white drop-shadow-md mb-2">
            I'm a CS Undergraduate
          </p>
          {/* White line separator */}
          <div className="h-[2px] w-full bg-white/80 rounded-full" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/mradhiyaarshq/" target="_blank" rel="noreferrer" className="hover:scale-110 hover:opacity-80 transition-all drop-shadow-md">
            <img src={linkedinSvg} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://github.com/arshqiii" target="_blank" rel="noreferrer" className="hover:scale-110 hover:opacity-80 transition-all drop-shadow-md">
            <img src={githubSvg} alt="GitHub" className="w-8 h-8 object-contain" />
          </a>
          <a href="https://www.instagram.com/arshqiii" target="_blank" rel="noreferrer" className="hover:scale-110 hover:opacity-80 transition-all drop-shadow-md">
            <img src={instaSvg} alt="Instagram" className="w-9 h-9 object-contain" />
          </a>
          <a href="mailto:marshq23@gmail.com" className="text-white hover:scale-110 hover:opacity-80 transition-all drop-shadow-md">
            <Mail size={32} />
          </a>
        </div>

        {/* Download Button */}
        <a href="/CV.pdf" download="Muhammad_Radhiya_CV.pdf" className="mt-6">
          <Button
            icon={<Download size={20} />}
            size="lg"
            className="bg-[#BFEBA9] hover:bg-[#aee692] text-action-primary shadow-lg border-none"
          >
            Download CV
          </Button>
        </a>
      </div>
    </section>
  );
}
