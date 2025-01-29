"use client"; // Indique que ce composant doit être rendu côté client

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, AlertCircle, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string>('');

  // Regex améliorée pour Nom / Prénom (au moins 2 lettres par segment)
  const nameRegex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}([ '-][A-Za-zÀ-ÖØ-öø-ÿ]{2,})*$/;

  // Regex basique pour Email
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Trimmed value for validation
    const trimmedValue = value.trim();

    // Validation en temps réel basée sur la valeur trimmed
    switch (id) {
      case 'name':
        if (trimmedValue === '') {
          setFormErrors((prev) => ({ ...prev, name: '' }));
        } else if (!nameRegex.test(trimmedValue)) {
          setFormErrors((prev) => ({
            ...prev,
            name: "Nom et prénom invalides. Utilisez uniquement des lettres, espaces, apostrophes ou tirets."
          }));
        } else {
          setFormErrors((prev) => ({ ...prev, name: '' }));
        }
        break;
      case 'email':
        if (trimmedValue === '') {
          setFormErrors((prev) => ({ ...prev, email: '' }));
        } else if (!emailRegex.test(trimmedValue)) {
          setFormErrors((prev) => ({
            ...prev,
            email: "Veuillez entrer une adresse email valide."
          }));
        } else {
          setFormErrors((prev) => ({ ...prev, email: '' }));
        }
        break;
      case 'message':
        if (trimmedValue === '') {
          setFormErrors((prev) => ({ ...prev, message: '' }));
        } else {
          setFormErrors((prev) => ({ ...prev, message: '' }));
        }
        break;
      default:
        break;
    }

    // Pour le débogage
    console.log(`Champ ${id} changé en : ${value}`);
    console.log('Erreurs actuelles :', formErrors);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Trim des valeurs avant validation finale
    const trimmedName: string = formData.name.trim();
    const trimmedEmail: string = formData.email.trim();
    const trimmedMessage: string = formData.message.trim();

    // Validation finale avant soumission
    const errors: Partial<FormErrors> = {};

    if (trimmedName === '') {
      errors.name = "Le nom et prénom sont requis.";
    } else if (!nameRegex.test(trimmedName)) {
      errors.name = "Nom et prénom invalides. Utilisez uniquement des lettres, espaces, apostrophes ou tirets.";
    }

    if (trimmedEmail === '') {
      errors.email = "L'adresse email est requise.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Veuillez entrer une adresse email valide.";
    }

    if (trimmedMessage === '') {
      errors.message = "Le message ne peut pas être vide.";
    }

    setFormErrors(errors as FormErrors);

    // Pour le débogage
    console.log('Validation finale :', errors);

    if (Object.keys(errors).length === 0) {
      try {
        setIsSubmitting(true);
        setSubmissionError('');

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Formulaire soumis avec succès :", data);
          setIsSubmitted(true);
          // Réinitialiser le formulaire
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setFormErrors({
            name: '',
            email: '',
            message: ''
          });
        } else {
          console.error("Erreur lors de la soumission du formulaire :", data);
          setSubmissionError(data.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
          setIsSubmitted(false);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Erreur lors de la soumission du formulaire :", error.message);
        } else {
          console.error("Erreur inconnue lors de la soumission du formulaire :", error);
        }
        setSubmissionError("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
        setIsSubmitted(false);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
          <MessageSquare className="w-8 h-8 text-[#FFDD58] mr-3" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFDD58] to-[#FF954E] bg-clip-text text-transparent">
            Me contacter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Parlons de votre projet</h3>
            <p className="text-gray-300 mb-8">
              {`Vous avez un projet en tête ? Je serais ravi d'en discuter et de voir comment je peux vous aider.`}
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-[#FFDD58] mr-3" />
                <span>romain-ares@aresla.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-[#FFDD58] mr-3" />
                <span>07-80-21-41-20</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-[#FFDD58] mr-3" />
                <span>Bretagne, France</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {isSubmitted && (
              <p className="text-green-500 text-center text-lg font-semibold">Votre message a été envoyé avec succès !</p>
            )}
            {submissionError && (
              <div className="flex items-center text-[#FC9C9C] bg-[#3C3C3C] p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">{submissionError}</span>
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-white mb-2">Nom / Prénom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-[#222222] text-white border ${
                  formErrors.name ? 'border-[#FC9C9C]' : 'border-gray-700'
                } focus:border-[#FFDD58] focus:outline-none`}
                title="Veuillez entrer un nom et prénom valides (lettres, espaces, apostrophes ou tirets uniquement)."
                required
              />
              {formErrors.name && (
                <div className="flex items-center text-[#FC9C9C] mt-2">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">{formErrors.name}</span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-[#222222] text-white border ${
                  formErrors.email ? 'border-[#FC9C9C]' : 'border-gray-700'
                } focus:border-[#FFDD58] focus:outline-none`}
                required
              />
              {formErrors.email && (
                <div className="flex items-center text-[#FC9C9C] mt-2">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">{formErrors.email}</span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-[#222222] text-white border ${
                  formErrors.message ? 'border-[#FC9C9C]' : 'border-gray-700'
                } focus:border-[#FFDD58] focus:outline-none`}
                required
              ></textarea>
              {formErrors.message && (
                <div className="flex items-center text-[#FC9C9C] mt-2">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold">{formErrors.message}</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[#FFDD58] to-[#FF954E] text-[#222222] py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
