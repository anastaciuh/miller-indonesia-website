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
  metadataBase: new URL("https://millerweldingindonesia.com"),

  title: {
    default: "Miller Welding Indonesia",
    template: "%s | Miller Welding Indonesia",
  },

  description:
    "Distributor Miller Welding Machine & Hypertherm Plasma Cutting",

  keywords: [
    "Miller",
    "Miller Welding Indonesia",
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

  icons: {
    icon: "/images/home/icon-black.png",
  },

  openGraph: {
    title: "Miller Welding Indonesia",
    description:
      "Distributor Miller Welding Machine & Hypertherm Plasma Cutting",
    siteName: "Miller Welding Indonesia",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Miller Welding Indonesia",
    description:
      "Distributor Miller Welding Machine & Hypertherm Plasma Cutting",
  },
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
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}