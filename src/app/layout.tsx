import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miller Indonesia",
  description: "Distributor Miller Welding Machine & Hypertherm Plasma Cutting",

  keywords: [
    "Miller",
    "Miller Indonesia",
    "Servis Mesin Las Miller",
    "Mesin Las",
    "Hypertherm",
    "Jasic",
    "Hobart",
    "Bernard",
    "Interweld",
    "Interflex",
    "Weldcraft",
    "Stanley Tools",
    "GoSave",
    "Welding Machine",
    "Plasma Cutting",
    "Industrial Equipment",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
