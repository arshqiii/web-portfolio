import { ExperienceCard } from '../components/ExperienceCard';

const Experiences = new Array(2).fill({
  title: "Experience Name",
  subtitle: "Fasilkom UI - Jan 2026 - Present",
  points: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend orci purus, ac ultrices dolor fringilla vel. Nam maximus sagittis elit a sodales. Mauris mattis laoreet elit, a tincidunt urna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend orci purus, ac ultrices dolor fringilla vel. Nam maximus sagittis elit a sodales. Mauris mattis laoreet elit, a tincidunt urna.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend orci purus, ac ultrices dolor fringilla vel. Nam maximus sagittis elit a sodales. Mauris mattis laoreet elit, a tincidunt urna."
  ]
});

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-bg-main py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16 inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Experiences.</h2>
          <div className="h-1.5 w-32 bg-text-primary mt-2 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-10 pb-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-text-primary"></div>

          {/* Timeline Start/End Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-text-primary"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-5 h-5 rounded-full bg-text-primary"></div>

          {/* Cards Wrapper */}
          <div className="flex flex-col gap-16 relative z-10 w-full max-w-3xl mx-auto">
            {Experiences.map((exp, index) => (
              <ExperienceCard
                key={`exp-${index}`}
                title={exp.title}
                subtitle={exp.subtitle}
                points={exp.points}
                logo={
                  // Temporary placeholder matching Apple logo color scheme
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M12 20.592c-2.33 0-4.08-1.583-4.08-3.996 0-2.391 1.776-4.025 4.135-4.025 2.378 0 4.08 1.634 4.08 4.025 0 2.413-1.75 3.996-4.135 3.996zm-1.87-11.238c-1.393-.418-2.39-1.637-2.39-3.13 0-1.815 1.488-3.292 3.324-3.292 1.837 0 3.325 1.477 3.325 3.292 0 1.493-.997 2.712-2.39 3.13-1.042.313-1.869 1.34-1.869 2.569v2.247c0 1.229.827 2.256 1.869 2.569 1.393.418 2.39 1.637 2.39 3.13 0 1.815-1.488 3.292-3.325 3.292-1.836 0-3.324-1.477-3.324-3.292 0-1.493.997-2.712 2.39-3.13 1.042-.313 1.869-1.34 1.869-2.569v-2.247c0-1.229-.827-2.256-1.869-2.569z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
