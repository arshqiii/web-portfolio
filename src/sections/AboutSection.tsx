import profilePic from '../assets/profile.jpg';
import { Terminal } from 'lucide-react';

const techStack = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#007396' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'C#', color: '#239120' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'React', color: '#61DAFB' },
  { name: 'PostgreSQL', color: '#4169E1' },
];

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

      {/* Tech Stack Marquee (Circular scrolling) */}
      <div className="mt-24 w-full bg-[#5A6B61] py-6 relative flex items-center">
        {/* Left & Right Fading Gradients for smooth infinite scroll effect */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#5A6B61] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#5A6B61] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:pause whitespace-nowrap">
          {/* Duplicate array twice to ensure seamless looping */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => {
            const uniqueKey = `${tech.name}-${index}`;
            return (
              <div
                key={uniqueKey}
                className="flex items-center gap-3 bg-surface-container-main px-6 py-3 rounded-xl mx-3 shadow-md border-b-4 border-action-primary/20 transition-transform hover:-translate-y-1 cursor-default"
              >
                {/* Temporary placeholder icon container */}
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-white"
                  style={{ backgroundColor: tech.color }}
                >
                  <Terminal size={18} strokeWidth={2.5} />
                </div>
                <span className="text-text-primary font-bold text-lg">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
