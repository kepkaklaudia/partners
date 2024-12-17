import type { Metadata } from "next";
import { Kanit as kanitFont } from "next/font/google";
import "./globals.css";

const kanit = kanitFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Producent przyczep samochodowych | Balhanger",
  description:
    "Jesteśmy polską firmą wyspecjalizowaną w produkcji różnorodnych typów przyczep - samochodowych, motocyklowych, budowlanych, podłodziowych i wielu innych. Nasza oferta obejmuje szeroki wybór wysokiej jakości przyczep, dostosowanych do różnorodnych potrzeb. Zapraszamy do zapoznania się z naszymi produktami!",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
