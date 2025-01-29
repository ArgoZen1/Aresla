// src/components/Projects.tsx
import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Folder } from "lucide-react";
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Site vitrine pour TMusic",
    description: "Un site web pour une communauté de chanteurs et musiciens",
    image: "/images/Tmusic.png",
    tags: ["NextJS", "Node.js", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "https://www.tmusic.fr/"
  },
  {
    title: "Site web pour l'entreprise Optimya",
    description: "Un site web pour une assistante administrative freelance sur mesure",
    image: "/images/optimya.png",
    tags: ["NextJS", "Node.js", "framer-motion", "Material-UI"],
    githubLink: "#",
    liveLink: "https://optimya.vercel.app/"
  },
  {
    title: "Conception de bots Discord",
    description: "Création de bots Discord sur mesure pour un serveur communautaire de plus de 4000 membres",
    image: "/images/botdiscord.png",
    tags: ["Node.js", "Express", "API Discord"],
    githubLink: "#",
    liveLink: "https://discord.com/developers/docs/intro"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projets" className="py-20 bg-[#222222]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
              <Folder className="w-8 h-8 text-[#FFDD58] mr-3" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
                Projets récents
                </h2>
              </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#2A2A2A] rounded-lg overflow-hidden">
              {/* Conteneur pour l'image avec position relative pour Next.js Image */}
              <div className="relative w-full h-72">
              <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-[#222222] text-[#FFDD58]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-white hover:text-[#FFDD58] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir la démo de ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
