import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../reducer/ReduxProvider";

// Tipografías personalizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos para SEO
export const metadata = {
  title: "ChairFix - Reparación y Mantenimiento de Sillas",
  description: "Servicio profesional de reparación, tapizado y mantenimiento de sillas en tu ciudad. Garantía, calidad y atención rápida.",
  keywords: [
    "reparación de sillas",
    "mantenimiento de sillas",
    "tapizado de sillas",
    "arreglo de sillas",
    "ChairFix",
    "servicio de sillas",
    "sillas oficina",
  ],
  metadataBase: new URL("https://www.chairfix.com"), // Cambia a tu dominio real
  openGraph: {
    title: "ChairFix - Reparación y Mantenimiento de Sillas",
    description: "Soluciones efectivas para todo tipo de sillas: oficina, comedor, escritorio y más.",
    url: "https://www.chairfix.com",
    siteName: "ChairFix",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener esta imagen
        width: 1200,
        height: 630,
        alt: "Sillas reparadas por ChairFix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChairFix",
    description: "Reparación y mantenimiento de sillas en tu ciudad.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.chairfix.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
         <ReduxProvider>
        <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
