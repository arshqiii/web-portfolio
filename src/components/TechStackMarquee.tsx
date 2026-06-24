import pythonSvg from "../assets/python-icon.svg"
import javaSvg from "../assets/java-4-icon.svg"
import jsSvg from "../assets/js-icon.svg"
import goSvg from "../assets/go-icon.svg"
import reactSvg from "../assets/react.svg"
import postgresqlSvg from "../assets/postgresql-icon.svg"
import dockerSvg from "../assets/docker-icon.svg"
import tailwindSvg from "../assets/tailwind-icon.svg"
import figmaSvg from "../assets/figma-icon.svg"
import rustSvg from "../assets/rust-icon.svg"
import springBootSvg from "../assets/spring-icon.svg"
import htmlSvg from "../assets/html-icon.svg"
import cssSvg from "../assets/css-icon.svg"
import grafanaSvg from "../assets/grafana-icon.svg"
import djangoSvg from "../assets/django-icon.svg"

const techStack = [
    { name: 'HTML', color: '#4169E1', icons: htmlSvg },
    { name: 'CSS', color: '#4169E1', icons: cssSvg },
    { name: 'Python', color: '#3776AB', icons: pythonSvg },
    { name: 'Java', color: '#007396', icons: javaSvg },
    { name: 'JavaScript', color: '#F7DF1E', icons: jsSvg },
    { name: 'Go', color: '#00ADD8', icons: goSvg },
    { name: 'Rust', color: '#4169E1', icons: rustSvg },
    { name: 'Django', color: '#4169E1', icons: djangoSvg },
    { name: 'Spring Boot', color: '#4169E1', icons: springBootSvg },
    { name: 'React', color: '#61DAFB', icons: reactSvg },
    { name: 'Tailwind', color: '#4169E1', icons: tailwindSvg },
    { name: 'PostgreSQL', color: '#4169E1', icons: postgresqlSvg },
    { name: 'Grafana', color: '#4169E1', icons: grafanaSvg },
    { name: 'Docker', color: '#4169E1', icons: dockerSvg },
    { name: 'Figma', color: '#4169E1', icons: figmaSvg },
];

export function TechStackMarquee() {
    return (
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
                            <div
                                className="w-8 h-8 rounded-md flex items-center justify-center"
                            >
                                <img src={tech.icons} alt={tech.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-text-primary font-bold text-lg">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}