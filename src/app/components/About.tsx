"use client"; 
// Nécessaire pour tout composant qui fait appel à React côté client.

import React from "react";
import { Code2, Users, Brain, Info} from "lucide-react"; // Assurez-vous que l'icône LinkedIn est disponible ou utilisez une alternative
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-[#222222]">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <div className="flex items-center justify-center mb-16">
          <Info className="w-8 h-8 text-[#FFDD58] mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            À propos de moi
          </h2>
        </div>

        {/* Cartes de services */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#2A2A2A] p-6 rounded-lg text-center">
            <Code2 className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Développement</h3>
            <p className="text-gray-300">
              Spécialisé en JavaScript et son écosystème moderne pour créer des applications web performantes et évolutives.
            </p>
          </div>

          <div className="bg-[#2A2A2A] p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-[#FF954E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Mentorat</h3>
            <p className="text-gray-300">
              Accompagnement personnalisé pour aider les développeurs à progresser en JavaScript.
            </p>
          </div>

          <div className="bg-[#2A2A2A] p-6 rounded-lg text-center">
            <Brain className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Fondateur de{" "}
              <a
                href="https://discord.gg/89QbPqtKKG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent underline"
              >
                Boost&Shine
              </a>
            </h3>
            <p className="text-gray-300">
              {`Communauté dédiée à l'apprentissage, l'entraide et la collaboration.`}
            </p>
          </div>
        </div>
        {/* Section Followers LinkedIn */}
        <div className="mt-6 flex items-center justify-center bg-[#2A2A2A] p-4 rounded-lg">
            {/* Remplacez l'icône ci-dessous par l'icône LinkedIn appropriée */}
            {/* Si l'icône LinkedIn n'est pas disponible dans lucide-react, vous pouvez utiliser une image ou une autre bibliothèque d'icônes */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#0284CA] mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869 0-2.155 1.46-2.155 2.964v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.037 0 3.6 2.001 3.6 4.6v5.598z" />
            </svg>
            <div>
              <p className="text-gray-300">
                <span className="font-semibold">Plus de <span className="text-[#FFDD58] font-bold">6000</span> Abonnés LinkedIn</span> {/* Remplacez ce texte par le nombre dynamique ultérieurement */}
                
              </p>
            </div>
          </div>
        {/* Texte descriptif */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            {`Développeur polyvalent avec plus de 3 ans d'expérience, je conçois des applications 
            modernes, développe des bots Discord sur mesure et optimise les algorithmes pour des 
            performances accrues. Passionné par l'accompagnement, j'aide les développeurs 
            à progresser et à relever leurs défis techniques.`}
          </p>

          

          {/* Bouton de contact */}
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-[#FFDD58] to-[#FF954E] text-[#222222] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Travaillons ensemble
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
