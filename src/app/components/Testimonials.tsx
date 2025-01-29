"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  
  {
    name: "Danyl Semmache",
    role: "Scrum Master @ Thales 🚀 | PMP®",
    avatar: "/images/Danyl.jpeg",
    rating: 5,
    comment: "Romain est l’un des meilleurs étudiants que j’ai eu plaisir à suivre durant son bachelor de développeur web au sein de OpenClassrooms. Il a su s’adapter aux différents challenges et relever tous les défis pour réussir ses projets avec brio en fournissant un travail de haute qualité.Autonome, rigoureux et bon communicant, Romain est un bon développeur, passionné, qui a su démontrer toutes ses qualités au fil de son avancée au sein de la formation. De plus, il dispose de véritables qualités humaines qui font qu'il est toujours prêt à aider les autres et à prendre des initiatives.C’est pour toutes ces qualités que je recommande Romain !"
  },
  {
    name: "Clément C",
    role: "Data Scientist / consultant Meritis",
    avatar: "/images/clement.jpeg",
    rating: 5,
    comment: "Romain est quelqu'un de sérieux, passionné et motivé. Il va au fond des choses et s'implique pour comprendre tous les outils qu'il utilise. Ce fut un plaisir de collaborer avec lui. Son sens de l'organisation et sa gestion efficace du projet ont assuré un déroulement sans accroc. De plus, Romain est toujours disponible pour apporter son soutien et ses conseils avisés."
  },
  {
    name: "Thibault F",
    role: "Étudiant en cybersécurité",
    avatar: "/images/Thibaut.jpeg",
    rating: 5,
    comment: "Romain a été un véritable mentor pour moi. Il a su me guider tout au long de mon apprentissage et m’a énormément aidé et m'aide encore dans ma recherche d'alternance. Son sérieux, sa bonne humeur et sa volonté d'aider sont des qualités qui font de lui un excellent accompagnateur. Je le recommande vivement à toute personne à la recherche d’un mentor de confiance."
  },
  {
    name: "Tiana R",
    role: "Chanteuse influente",
    avatar: "/images/titi.webp",
    rating: 5,
    comment: "Je tiens à remercier chaleureusement Romain pour son expertise exceptionnelle qui a grandement contribué à l’évolution de notre communauté de chant sur Discord. Grâce à ses compétences en développement, il a créé des outils personnalisés qui ont facilité la gestion et dynamisé l’engagement des membres. Sa créativité et sa réactivité ont permis d’organiser des événements interactifs réussis, renforçant ainsi la cohésion et la croissance de notre groupe. Romain est un atout précieux et je le recommande vivement pour toute initiative visant à améliorer une communauté en ligne."
  },
  {
    name: "Fanny P",
    role: "Développeuse web fullstack",
    avatar: "/images/fanny.jpeg",
    rating: 5,
    comment: "Nous avons commencé la formation de développeur web au même moment avec Romain, et le moins que je puisse dire c'est qu'il une capacité d'apprentissage impressionnante ! Il est passionné, il passe son temps à se perfectionner et ne reste jamais sur ses acquis.Il sait être force de proposition, aime partager ses connaissances et n'hésite pas à aider d'autres développeurs !Romain est sérieux, il ne calcule pas le temps passé sur ses projets, il est perfectionniste dans son travail et cela se ressent car celui-ci est toujours qualitatif.Bref, vous l'aurez compris, vous pouvez foncer les yeux fermés !"
  },
  {
    name: "Sabrina S",
    role: "Développeuse web fullstack",
    avatar: "/images/sabrina.jpeg",
    rating: 5,
    comment: "Nous avons tous deux étudiés ensemble, Romain est très investit dans son travail et ne compte pas ses heures pour apprendre et aider. Il est persévérant, altruiste et sait se donner les moyens d'avancer. Il aime vraiment ce qu'il fait et a à coeur de le faire bien !"
  },
  {
    name: "Aurélie F",
    role: "Assistante virtuelle",
    avatar: "/images/aurel.jpeg",
    rating: 5,
    comment: "Je tiens à remercier Romain pour la création de mon site web. Dès le début, il a parfaitement compris mes besoins et mes idées, transformant mes visions en réalité avec brio. Le site est non seulement esthétique, mais aussi très facile à utiliser grâce à son expertise technique. Romain a toujours été disponible, réactif et à l’écoute, rendant le processus agréable et sans stress. Grâce à son travail, ma présence en ligne a vraiment pris un nouvel envol. Je recommande vivement Romain à quiconque souhaite développer un site web de qualité avec quelqu’un de passionné et professionnel."
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-[#222222] p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {/* Conteneur pour l'image */}
        <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < testimonial.rating
                ? 'text-[#FFDD58] fill-[#FFDD58]'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300">{testimonial.comment}</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
          <Quote className="w-8 h-8 text-[#FFDD58] mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            Témoignages
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute top-0 left-12 top-1/1 -translate-y-1/2 -translate-x-14 bg-[#222222] p-3 rounded-full text-white hover:text-[#FFDD58] transition-colors z-10 border border-[#FFDD58]"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute top-0 right-12 top-1/1 -translate-y-1/2 translate-x-14 bg-[#222222] p-3 rounded-full text-white hover:text-[#FFDD58] transition-colors z-10 border border-[#FFDD58]"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                currentIndex === index ? 'bg-[#FFDD58]' : 'bg-gray-600'
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
