import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Toaster } from "../components/toaster";
import { ContactForm } from "../components/contact-form";
import { BackToTop } from "../components/back-to-top";
import { Footer } from "../components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Marcelo Almeida",
  title: {
    default: "Home | Marcelo Almeida",
    template: "%s | Marcelo Almeida",
  },
  icons: [{ url: "/favicon.ico" }],
  description:
    "Welcome to my portfolio! Here you can explore my selected projects, which showcase my skills in front-end development and my dedication to delivering high-quality web applications.",
  manifest: "/manifest.json",
  themeColor: "#10B981",
  openGraph: {
    title: "Marcelo Almeida",
    description:
      "Welcome to my portfolio! Here you can explore my selected projects, which showcase my skills in front-end development and my dedication to delivering high-quality web applications.",
    url: "https://marceloalmeida.vercel.app",
    images: [
      {
        url: "https://marceloalmeida.vercel.app/icon-384x384.png",
        width: 384,
        height: 384,
      },
      {
        url: "https://marceloalmeida.vercel.app/icon-512x512.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Marcelo Almeida",
    description:
      "Welcome to my portfolio! Here you can explore my selected projects, which showcase my skills in front-end development and my dedication to delivering high-quality web applications.",
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <Toaster />
        {children}
        <ContactForm />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
