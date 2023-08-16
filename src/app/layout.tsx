import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notluyorum | Notlarınızı Kolayca Yönetin!",
  description:
    "Kendi notlarınızı kolayca yönetin! Notluyorum uygulaması ile notlarınızı ekleyin, düzenleyin ve organize edin. Kategorilere ayırın, etiketleyin ve daha fazlasını yapın. Ücretsiz ve kullanımı kolay.",
  generator: "Next.js",
  robots: "index, follow",
  creator: "Neşathan ÖZTÜRK",
  keywords:
    "not tutma, notlar, not alma, kişisel notlar, not yönetimi, not uygulaması",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
