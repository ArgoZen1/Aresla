"use client"; 
// Nécessaire pour tout composant qui fait appel à React côté client.

import React from "react";
import { AlertCircle, Home } from "lucide-react"; // Icône d'alerte et d'accueil
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section id="404" className="min-h-screen flex items-center justify-center bg-[#222222] py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Icône et Titre */}
        <div className="flex flex-col items-center justify-center mb-12">
          <AlertCircle className="w-16 h-16 text-[#FFDD58] mb-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            ERREUR 404
          </h1>
        </div>

        {/* Message descriptif */}
        <p className="text-gray-300 mb-8">
          {`Désolé, la page que vous recherchez n'existe pas ou a été déplacée.`}
        </p>

        {/* Bouton de retour à l'accueil */}
        <Link
          href="/"
          className="inline-flex items-center bg-gradient-to-r from-[#FFDD58] to-[#FF954E] text-[#222222] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Home className="w-5 h-5 mr-2" />
          {`Retour à l'accueil`}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
