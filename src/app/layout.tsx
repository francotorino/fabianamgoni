import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabiana M. Goñi Fotografía | Fotógrafa en Montevideo y Ciudad de la Costa',
  description:
    'Fotógrafa profesional en Montevideo y Ciudad de la Costa. Especialista en bodas, quinceañeras, sesiones familiares y newborn. Momentos reales, emociones auténticas.',
  keywords: [
    'fotógrafa Montevideo',
    'fotógrafa Ciudad de la Costa',
    'fotografía bodas Uruguay',
    'fotografía familiar Uruguay',
    'sesiones newborn Uruguay',
    'quinceañeras fotógrafa Uruguay',
    'fotografía cumpleaños',
    'fotolibros Uruguay',
  ],
  openGraph: {
    title: 'Fabiana M. Goñi Fotografía',
    description:
      'Capturando emociones reales y momentos auténticos en Montevideo y Ciudad de la Costa.',
    type: 'website',
    locale: 'es_UY',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
