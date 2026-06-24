import profilePic from '../assets/profile.jpg';
import { TechStackMarquee } from '../components/TechStackMarquee';

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-bg-main pt-24 pb-0 overflow-hidden">
      {/* Container for About Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start xl:items-center">

        {/* Left: Image with Offset Background */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0 mx-auto lg:mx-0">
          {/* Offset Background Box */}
          <div className="absolute inset-0 bg-action-primary rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"></div>

          {/* Main Image */}
          <div className="relative w-full aspect-square bg-surface-container-main rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl overflow-hidden border-4 border-surface-container-main shadow-lg">
            <img
              src={profilePic}
              alt="Muhammad Radhiya Arshq"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col flex-1">
          <div className="mb-6 inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">About me.</h2>
            <div className="h-1.5 w-24 bg-text-primary mt-2 rounded-full"></div>
          </div>

          <p className="text-lg text-text-secondary leading-relaxed text-justify">
            I'm a Computer Science student with a passion for backend and full-stack development.
            I have experience building web applications using technologies like Django, Spring Boot, and PostgreSQL.
            I'm always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>

      {/* Tech Stack Marquee (dipisah menjadi komponen) */}
      <TechStackMarquee />
    </section>
  );
}
