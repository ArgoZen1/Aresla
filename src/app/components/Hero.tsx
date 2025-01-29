"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-[#222222] pt-24"
    >
      <div className="container mx-auto px-4 text-center">

        {/* Photo de profil */}
        <div className="mb-10">
          {/* Utilisation de next/image pour optimiser l'image */}
          <Image
  src="/images/test123456.png"
  alt="Photo de profil"
  width={240}
  height={240}
  className="w-60 h-60 mx-auto rounded-full object-cover border-4 border-[#FFDD58] bg-[#FFDD58] transform rotate-[1deg]"
/>

        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Mentor & Développeur
          <span className="block mt-2 bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            JavaScript
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          J’aime transformer des idées en projets concrets, qu’il s’agisse
          d’applications web, de bots personnalisés ou d’algorithmes plus 
          efficaces. Ce qui me passionne encore plus, c’est partager mes 
          connaissances et accompagner les développeurs à chaque étape 
          de leur progression.
        </p>

        <div className="flex justify-center space-x-4">
          {/* Lien interne vers #contact */}
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-[#FFDD58] to-[#FF954E] text-[#222222] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Me contacter
          </Link>
          {/* Lien interne vers #projets */}
          <Link
            href="/#projets"
            className="inline-block border-2 border-[#FFDD58] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FFDD58] hover:text-[#222222] transition-all"
          >
            Voir mes projets
          </Link>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-[#FFDD58] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
