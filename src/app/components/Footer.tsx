import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#222222] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Aresla. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a
                          href="https://www.codingame.com/profile/e234d6b24acc99e847d139a118db7cc97222874"
                          aria-label='Lien vers mon profil CodinGame'
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
              aria-label='Lien vers mon profil LinkedIn'
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FFDD58] transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#0284CA] hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:romain-ares@aresla.fr"
              aria-label='Me contacter par e-mail'
              className="text-gray-300 hover:text-[#FFDD58] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;