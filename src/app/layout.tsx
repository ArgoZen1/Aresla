import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Création de Site Internet Pas Cher',
  description: 'Je suis Coach & Développeur spécialisé en JavaScript, offrant des services de création de site internet pas cher à Rennes, Concarneau et Quimper. Que vous ayez besoin d’un site internet portfolio, mariage ou d’une application web personnalisée, je transforme vos idées en projets concrets tout en accompagnant les développeurs dans leur progression.',
  keywords: [
    'site web pas cher',
    'site internet pas cher',
    'création de site internet',
    'développeur web Rennes',
    'site internet mariage',
    'site internet portfolio',
    'freelance dev',
    'création de site web Concarneau',
    'site internet Quimper',
    'coach emploi',
    'coach recherche d\'emploi'
  ],
  openGraph: {
    title: 'Création de Site Internet Pas Cher',
    description: 'Services de création de site internet pas cher. Spécialisé en sites portfolio, mariage et applications web personnalisées. Accompagnement et coaching pour développeurs.',
    url: 'https://www.aresla.fr/',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://www.aresla.fr/images/test123456.png',
        width: 800,
        height: 600,
        alt: 'Développeur Web JavaScript & Coach Emploi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Création de Site Internet Pas Cher | coach recherche d'emploi",
    description: 'Services de création de site internet abordables à Rennes, Concarneau et Quimper. Spécialisé en sites portfolio, mariage et applications web personnalisées.',
    images: ['https://www.aresla.fr/images/test123456.png'], // URL absolue de l'image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Ajoutez d'autres balises meta si nécessaire */}
      </Head>
      <body>{children}</body>
    </html>
  )
}
