import type { MetadataRoute } from "next";

import { BRAND_PRODUCTS } from "@/constants/brand-products";
import { BLOG_DETAILS } from "@/constants/blog-details";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://millerweldingindonesia.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/products`,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/service-center`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];

  const brands = [
    "miller",
    "hypertherm",
    "jasic",
    "hobart",
    "bernard",
    "interweld",
    "interflex",
    "weldcraft",
    "stanley-tools",
    "gosave",
  ];

  const brandPages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/products/${brand}`,
  }));

  const productCategoryPages: MetadataRoute.Sitemap = Object.entries(
    BRAND_PRODUCTS
  ).flatMap(([brand, products]) =>
    Object.keys(products).map((product) => ({
      url: `${baseUrl}/products/${brand}/${product}`,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = BLOG_DETAILS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
  }));

  return [
    ...staticPages,
    ...brandPages,
    ...productCategoryPages,
    ...blogPages,
  ];
}