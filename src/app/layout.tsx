import { Figtree } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/context/ThemeContext";

import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notluyorum | Notlarınızı Kolayca Yönetin!",
  description:
    "Kendi notlarınızı kolayca yönetin! Notluyorum uygulaması ile notlarınızı ekleyin, düzenleyin ve organize edin. Kategorilere ayırın, etiketleyin ve daha fazlasını yapın. Ücretsiz ve kullanımı kolay.",
  generator: "Next.js",
  robots: "index, follow",
  keywords:
    "not tutma, notlar, not alma, kişisel notlar, not yönetimi, not uygulaması",
  authors: [
    {
      name: "Neşathan Öztürk",
      url: "https://www.github.com/nesathanozturk/",
    },
  ],
  creator: "Neşathan Öztürk",
  publisher: "Neşathan Öztürk",
  applicationName: "Notluyorum",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
