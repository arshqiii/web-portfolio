import { ProjectCard } from '../components/ProjectCard';

const Projects = new Array(6).fill({
  title: "Project name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend orci purus, ac ultrices dolor fringilla vel. Nam maximus sagittis elit a sodales. Mauris mattis laoreet elit, a tincidunt urna.",
  tags: ["Tag-1", "Tag-2"],
  githubUrl: "#",
  liveUrl: "#"
});

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-bg-main py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-12 inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Projects.</h2>
          <div className="h-1.5 w-24 bg-text-primary mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
