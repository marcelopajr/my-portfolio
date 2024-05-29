import { ReactNode } from "react";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
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

export const metadata = {
  title: {
    default: "Home | Marcelo Almeida",
    template: "%s | Marcelo Almeida",
  },
  icons: [{ url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
