import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DaniDev | Digitalizo tu negocio",
  description:
    "Creo paginas web, automatizo procesos y desarrollo aplicaciones a medida para pequenos y medianos negocios. Simple, sin complicaciones.",
  openGraph: {
    title: "DaniDev | Digitalizo tu negocio",
    description:
      "Creo paginas web, automatizo procesos y desarrollo aplicaciones a medida para pequenos y medianos negocios.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
