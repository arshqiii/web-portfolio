import { ProjectCard } from '../components/ProjectCard';
import gcaImage from '../assets/project-images/gca-academy.png';
import galleryImage from '../assets/project-images/gallery-fasilkom.png';
import rsaImage from '../assets/project-images/rsa-oaep.png';
import ngandungImage from '../assets/project-images/ngandung.jpeg';
import etchImage from '../assets/project-images/etch-a-sketch.png';
import webPortfolioImage from '../assets/project-images/portfolio.png';

const Projects = [
  {
    title: "Garuda Cendekia Academy",
    description: "A comprehensive end to end school information system with face-recognition attendance, school activity management, and other school-related features.",
    tags: ["Spring Boot", "Fullstack", "AWS"],
    liveUrl: "https://dev.garudacendekiaacademy.com/login",
    imageUrl: gcaImage
  },
  {
    title: "Gallery Exhibition Fasilkom UI",
    description: "An interactive digital gallery platform for showcasing student projects, allowing visitors to engage through voting, like and comment.",
    tags: ["Django", "NextJS", "OAuth 2.0"],
    liveUrl: "https://gallery.ppl.cs.ui.ac.id/",
    imageUrl: galleryImage
  },
  {
    title: "Web Portfolio",
    description: "My personal web portfolio designed with a modern aesthetic to showcase my skills, experiences, and projects.",
    tags: ["React", "Tailwind", "Typescript", "Bun"],
    githubUrl: "https://github.com/arshqiii/web-portfolio",
    liveUrl: "#",
    imageUrl: webPortfolioImage
  },
  {
    title: "RSA-OAEP GUI",
    description: "A GUI application implementing the RSA encryption algorithm with OAEP padding. It provides a user-friendly graphical interface for generating keys, encrypting messages, and decrypting ciphertext securely.",
    tags: ["Python", "Cryptography", "GUI"],
    githubUrl: "https://github.com/arshqiii/TP-RSA-Kripto",
    imageUrl: rsaImage
  },
  {
    title: "Ngandung: Ngemil di Bandung",
    description: "A mobile and web application dedicated to discovering and reviewing local culinary spots in Bandung. It features user reviews, location-based recommendations, and a seamless cross-platform experience.",
    tags: ["Fullstack", "Django", "Flutter"],
    githubUrl: "https://github.com/Kelompok-9-PBP-Ganjil-2024-2025/ngandung",
    imageUrl: ngandungImage
  },
  {
    title: "Etch a Sketch",
    description: "A fun and interactive browser-based drawing application inspired by the classic toy. It allows users to draw on a grid, adjust grid sizes, and choose custom colors using vanilla JavaScript.",
    tags: ["Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/arshqiii/etch-a-sketch",
    liveUrl: "https://arshqiii.github.io/etch-a-sketch/",
    imageUrl: etchImage
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-bg-main py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-12 inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">Projects.</h2>
          <div className="h-1.5 w-24 bg-text-primary mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
