import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",

  description:
    "Jelajahi produk mesin las, plasma cutting, dan perlengkapan industri dari Miller, Hypertherm, Jasic, Hobart, Bernard, Weldcraft, dan brand lainnya di Miller Welding Indonesia.",

    alternates: {
      canonical: "/products",
    },
    
  openGraph: {
    title: "Products | Miller Welding Indonesia",
    description:
      "Jelajahi produk mesin las, plasma cutting, dan perlengkapan industri dari berbagai brand di Miller Welding Indonesia.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Products | Miller Welding Indonesia",
    description:
      "Jelajahi produk mesin las, plasma cutting, dan perlengkapan industri dari berbagai brand di Miller Welding Indonesia.",
  },
};

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Products
      </h1>
    </main>
  );
}