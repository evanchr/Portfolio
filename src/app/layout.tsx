import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "Evan CHARRIER - Portfolio",
  description:
    "Bienvenue sur le portfolio d'Evan Charrier. Vous y trouverez différents travaux que j'ai pu réalisé en developpement WEB. ",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
