// src/components/Pricing.tsx
import React from 'react';
import { Check, Bot, Globe, User, ShoppingCart } from 'lucide-react'; // Importation des icônes
import Link from 'next/link'; // Importation de Link depuis Next.js

// Interface pour une carte de tarification
interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  discount?: number; // Nouveau champ pour la réduction en pourcentage
  subtitle: string;
  features: string[];
  icon: React.ReactNode;
  buttonText: string;
}

const Pricing: React.FC = () => {
  // Définition des fonctionnalités pour chaque carte
  const siteFeatures: string[] = [
    "Design responsive moderne",
    "Optimisation SEO de base",
    "Formulaire de contact",
    "Hébergement inclus",
    "Nom de domaine à prix réduit",
    "certificat SSL gratuit",
    "Support technique 2 mois"
  ];

  const botFeatures: string[] = [
    "Commandes personnalisées",
    "Intégration Discord complète",
    "Panel d'administration",
    "Hébergement 24/7",
    "Maintenance incluse",
    "Support prioritaire",
    'Bot entierement sécurisé'
  ];

  const mentorshipFeatures: string[] = [
    "Session hebdomadaire (une heure)",
    "Apprendre sur Codingame",
    "Support par Discord / Whatsapp",
    "Plan de progression personnalisé",
    "Revue de CV, profil LinkedIn",
    "Conseils en développement",
    "Accès à des ressources exclusives",
    "Sessions de codage en direct",
    "Séances de révision de code",
    "Optimisation de votre portfolio en ligne"

  ];

  const siteFeaturesAvancee: string[] = [
    "Design responsive moderne et avancée",
    "Design et UX Améliorés à votre image",
    "Optimisation SEO très avancée",
    "Formulaire de contact avancée",
    "Hébergement inclus",
    "Nom de domaine offert pendant 1 an",
    "Support technique 6 mois",
    "Intégration des Réseaux Sociaux",
    "Animations et transitions interactives",
    "Galleries d'images (exemple pour votre mariage)"
  ];

  // Définition des cartes de tarification avec les icônes appropriées
  const pricingCards: PricingCardProps[] = [
    {
      title: "Site Vitrine",
      price: "150€",
      originalPrice: "300€",
      discount: 50, // Réduction de 50%
      subtitle: "Offre limitée",
      features: siteFeatures,
      icon: <Globe className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />,
      buttonText: "Commander maintenant"
    },
    {
      title: "Bot Discord",
      price: "À partir de 50€",
      subtitle: "Prix selon complexité",
      features: botFeatures,
      icon: <Bot className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />,
      buttonText: "Demander un devis"
    },
    {
      title: "Mentorat",
      price: "75€/mois",
      subtitle: "Sans engagement",
      features: mentorshipFeatures,
      icon: <User className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />,
      buttonText: "S'inscrire"
    },
    {
      title: "Site Vitrine avancée",
      price: "455€",
      originalPrice: "650€",
      discount: 30, // Réduction de 30%
      subtitle: "Offre limitée",
      features: siteFeaturesAvancee,
      icon: <Globe className="w-12 h-12 text-[#FFDD58] mx-auto mb-4" />,
      buttonText: "Commander maintenant"
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-[#2A2A2A] w-full">
      <div className="w-full px-4">
        {/* Titre de la section */}
        <div className="flex items-center justify-center mb-16">
          <ShoppingCart className="w-8 h-8 text-[#FFDD58] mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            Tarifs
          </h2>
        </div>

        {/* Cartes de tarification */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full text-center">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#222222] rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Si la carte a un prix original et une réduction, afficher la bannière */}
              {card.originalPrice && card.discount && (
                <div className="absolute -right-10 top-3 bg-[#FFDD58] text-[#222222] py-1 px-12 rotate-45 font-semibold">
                  -{card.discount}%
                </div>
              )}

              {/* Contenu principal de la carte */}
              <div className="flex flex-col">
                {/* Icône spécifique à la carte */}
                {card.icon}

                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <div className="flex justify-center items-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-[#FFDD58]">
                    {card.price}
                  </span>
                  {card.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      {card.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-6">{card.subtitle}</p>

                {/* Fonctionnalités de la carte */}
                <div className="space-y-4">
                  {card.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#FFDD58] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de contact */}
              <Link
                href="/#contact"
                className="mt-8 block w-full bg-gradient-to-r from-[#FFDD58] to-[#FF954E] text-[#222222] py-3 px-6 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
