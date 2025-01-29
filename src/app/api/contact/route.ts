// src/app/api/contact/contact.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ResponseData {
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export async function POST(request: Request): Promise<NextResponse<ResponseData>> {
  try {
    const { name, email, message } = (await request.json()) as ContactFormData;

    // Validation
    const nameRegex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}([ '-][A-Za-zÀ-ÖØ-öø-ÿ]{2,})*$/;
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name || !nameRegex.test(name.trim())) {
      errors.name = "Nom et prénom invalides. Utilisez uniquement des lettres, espaces, apostrophes ou tirets.";
    }

    if (!email || !emailRegex.test(email.trim())) {
      errors.email = "Veuillez entrer une adresse email valide.";
    }

    if (!message || message.trim() === '') {
      errors.message = "Le message ne peut pas être vide.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: 'Validation échouée', errors }, { status: 400 });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true', // true pour 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Vérifier la connexion SMTP
    await transporter.verify();

    // Options de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER, // Adresse email authentifiée
        replyTo: `"${name}" <${email}>`, // Adresse de l'utilisateur
        to: process.env.CONTACT_EMAIL, // Destinataire
        subject: 'Nouveau message de contact',
        text: message, // Version texte brut
        html: `<p>${message.replace(/\n/g, '<br/>')}</p>`, // Version HTML avec sauts de ligne
      };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    console.log('Formulaire soumis avec succès :', { name, email, message });

    return NextResponse.json({ message: 'Message envoyé avec succès !' }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erreur lors de la soumission du formulaire :", error.message);
    } else {
      console.error("Erreur inconnue lors de la soumission du formulaire :", error);
    }
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
