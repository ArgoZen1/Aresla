// src/components/Pricing.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Trophy, X, Layers } from "lucide-react"; // Consolidé les imports de lucide-react


interface SkillGroup {
  category: string;
  items: string[];
}

interface Certification {
  image: string; // chemin vers l'image dans /public/images/...
  title: string;
}

const Skills: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const skills: SkillGroup[] = [
    {
      category: "Frontend",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript vanilla", "HTML5", "CSS3"], 
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "REST API", "MySQL", "Django", "Python"],
    },
    {
      category: "Outils",
      items: ["Git", "VS Code", "Jest", "Webpack", "Postman", "Figma", "canva"],
    },
    {
      category: "Soft Skills",
      items: [
        "Mentorat",
        "Communication",
        "Travail d'équipe",
        "Résolution de problèmes",
        "Organisation",
        "Adaptabilité",
        "Gestion du temps",
      ],
    },
  ];

  // Les chemins vers les images se trouvent dans /public/images/
  const certifications: Certification[] = [
    { image: "/images/ai-min.webp", title: "Certification Légende IA" },
    { image: "/images/algo-min.webp", title: "Certification Légende Algorithmes" },
    { image: "/images/opti-min.webp", title: "Certification Légende Optimisation" },
    {
      image: "/images/rapidite-min.webp",
      title: "Certification Légende Rapidité de développement",
    },
    { image: "/images/js-min.webp", title: "Certification JavaScript WITH HONORS" },
    {
      image: "/images/ts-min.webp",
      title: "Certification TypeScript WITH HONORS",
    },
  ];

  return (
    <section id="competences" className="py-20 bg-[#2A2A2A]"> {/* Modifié le bg color pour correspondre */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
          <Layers className="w-8 h-8 text-[#FFDD58] mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            Compétences
          </h2>
        </div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-[#222222] p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <Check className="w-5 h-5 text-[#FFDD58] mr-3 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section des certifications */}
        <div className="bg-[#222222] p-8 rounded-lg">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-12 h-12 text-[#FFDD58] mr-4" />
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
              Certifications CodinGame
            </h3>
          </div>
          {/* Nouvelle Section pour le Classement */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 font-semibold text-xl">
            <span className="text-[#FFDD58]">311 eme</span> sur <span className="text-[#FFDD58]">4 287 780</span> sur CodinGame
            </p>
            {/* 
              Lorsque vous atteindrez un nouveau palier, mettez à jour les chiffres ci-dessus.
              Par exemple, pour 7 000 abonnés :
              Que je suis <span className="text-[#FFDD58]">7000 eme</span> sur <span className="text-[#FFDD58]">4 287 780</span>
            */}
          </div>
        </div>
      </div>
          
          {/* Grille des certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-[#2A2A2A] p-2 rounded-lg h-full"
              >
                <h4 className="text-xl text-center font-semibold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent mb-2">
                  {cert.title}
                </h4>

                {/* Clique = ouvre la modal */}
                <div
                  className="cursor-pointer mt-auto"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={`Certification Codingame ${index + 1}`}
                    width={795}
                    height={545}
                    unoptimized
                    className="w-full rounded-lg object-cover hover:shadow-lg"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
              </div>
            ))}
          </div>

          

      {/* Modal pour afficher l'image sélectionnée */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-[#222222] rounded-lg p-4 max-w-4xl w-full">
            {/* Bouton pour fermer la modal */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer l'image"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image affichée dans la modal */}
            <Image
              src={selectedImage}
              alt="Certification en grand"
              width={795} // ou les dimensions souhaitées pour la modal
              height={545}
              unoptimized
              className="w-full max-w-full h-auto rounded-lg object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
