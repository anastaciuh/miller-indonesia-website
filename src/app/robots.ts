import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://millerweldingindonesia.com/sitemap.xml",

    host: "https://millerweldingindonesia.com",
  };
}