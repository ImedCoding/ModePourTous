import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModePourTous — De l'idée à la création",
  description:
    "Transformez une idée en pièce de mode réelle. L'IA vous guide étape par étape, du concept aux fournisseurs.",
  metadataBase: new URL("https://modepourtous.local")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
