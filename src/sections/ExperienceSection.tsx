import { ExperienceCard } from '../components/ExperienceCard';
import facultyOfComputerScienceUniversityOfIndonesiaLogo from '../assets/logos/facultyOfComputerScienceUniversityOfIndonesiaLogo.jpg';
import ddp0Logo from '../assets/logos/ddp0.jpg';

const Experiences = [
  {
    logo: facultyOfComputerScienceUniversityOfIndonesiaLogo,
    title: "TA of Security-Driven Software Development",
    subtitle: "Fasilkom UI · Jan 2026 - Present",
    points: [
      "Assisted instructors in course delivery and assignment evaluation for an introductory secure software development course",
      "Reviewed student submissions and provided feedback on software security concepts and development practices.",
      "Collaborated with faculty members to support learning activities and assessment"
    ]
  },
  {
    logo: ddp0Logo,
    title: "Python Student Mentor",
    subtitle: "Dasar-Dasar Pemrograman 0 · Aug 2024 - Sep 2024",
    points: [
      "Mentored first-year students on Python fundamentals, basic data structures, and computational thinking concepts",
      "Assisted students in preparing for introductory programming coursework"
    ]
  },
];

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
            {Experiences.map((exp) => (
              <ExperienceCard
                key={exp.title}
                title={exp.title}
                subtitle={exp.subtitle}
                points={exp.points}
                logo={<img src={exp.logo} alt={exp.title} className="w-full h-full object-contain" />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
