"use client"; 
// En Next.js 13 (app router), pour utiliser useState côté client, 
// on précise "use client" tout en haut du fichier.

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Linkedin } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajustez ce décalage si nécessaire

      let current = "accueil"; // Valeur par défaut

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          current = section.getAttribute("id") || current;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Appel initial pour définir la section active au chargement
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour déterminer si le lien est actif
  const isLinkActive = (section: string) => activeSection === section;

  return (
    <header className="fixed w-full bg-[#222222] text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {/* Lien vers la racine + ancre #accueil */}
            <Link 
              href="/#accueil"
              className="bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent underline"
            >
              Aresla
            </Link>
          </h1>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/#accueil" 
              className={`transition-colors ${isLinkActive("accueil") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              Accueil
            </Link>
            <Link 
              href="/#apropos" 
              className={`transition-colors ${isLinkActive("apropos") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              À propos
            </Link>
            <Link 
              href="/#competences" 
              className={`transition-colors ${isLinkActive("competences") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              Compétences
            </Link>
            <Link 
              href="/#projets" 
              className={`transition-colors ${isLinkActive("projets") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              Projets
            </Link>
            <Link 
              href="/#tarifs" 
              className={`transition-colors ${isLinkActive("tarifs") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              Tarifs
            </Link>
            <Link 
              href="/#contact" 
              className={`transition-colors ${isLinkActive("contact") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Icônes Desktop */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.codingame.com/profile/e234d6b24acc99e847d139a118db7cc97222874"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* On utilise next/image si on veut l’optimisation d’image */}
              <Image
                src="/images/codingame.svg"
                alt="Logo CodinGame"
                width={24}
                height={24}
                className="rounded-full hover:shadow-lg transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/romain-ares/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="w-6 h-6 text-[#0284CA] hover:text-white transition-colors"
                aria-label="Lien vers mon profil LinkedIn"
              />
            </a>
          </div>

          {/* Bouton Burger (mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#222222] px-4 py-2">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/#accueil" 
              className={`transition-colors ${isLinkActive("accueil") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/#apropos" 
              className={`transition-colors ${isLinkActive("apropos") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/#competences" 
              className={`transition-colors ${isLinkActive("competences") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link 
              href="/#projets" 
              className={`transition-colors ${isLinkActive("projets") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link 
              href="/#tarifs" 
              className={`transition-colors ${isLinkActive("tarifs") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link 
              href="/#contact" 
              className={`transition-colors ${isLinkActive("contact") ? "text-[#FFDD58]" : "hover:text-[#FFDD58]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
