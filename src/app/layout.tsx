import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miller Indonesia",

  description:
    "Distributor Miller Welding Machine & Hypertherm Plasma Cutting",

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      <body className="flex min-h-screen flex-col">
        <Navbar />

         <main className="flex-1">

           {children}
           
         </main>

        <Footer />
      </body>
    </html>
  );
}