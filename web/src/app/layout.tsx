import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Procer Web App',
  description: 'Sitio Web del Programa de Competitividad de Economías Regionales -PROCER-, a cargo de la Sec. de Ciencia y Técnica de la UBA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
