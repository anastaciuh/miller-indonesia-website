import type { Metadata } from "next";

import BlogCard from "@/components/layout/BlogCard";
import { BLOGS } from "@/constants/blog";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Baca artikel dan informasi terbaru seputar pengelasan, mesin las, plasma cutting, produk industri, serta solusi dari Miller Welding Indonesia.",

  alternates: {
   canonical: "/blog",
  },
  
  openGraph: {
    title: "Blog | Miller Welding Indonesia",
    description:
      "Baca artikel dan informasi terbaru seputar pengelasan, mesin las, plasma cutting, produk industri, serta solusi dari Miller Welding Indonesia.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Miller Welding Indonesia",
    description:
      "Baca artikel dan informasi terbaru seputar pengelasan, mesin las, plasma cutting, produk industri, serta solusi dari Miller Welding Indonesia.",
  },
};

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="container-custom px-5 pt-8 md:px-10 md:pt-12">
        <h1 className="sr-only">
          Blog Miller Welding Indonesia
        </h1>
  
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.slug}
              {...blog}
              className="w-full"
            />
          ))}
        </div>
      </section>
    </main>
  );
}