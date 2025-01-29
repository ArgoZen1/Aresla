import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
