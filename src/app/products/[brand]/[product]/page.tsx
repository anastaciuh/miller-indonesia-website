import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ProductList from "@/components/layout/ProductList";
import ContactButton from "@/components/layout/ContactButton";

import { BRAND_PRODUCTS } from "@/constants/brand-products";

const BRAND_NAMES = {
  miller: "Miller",
  jasic: "Jasic",
  bernard: "Bernard",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    brand: string;
    product: string;
  }>;
}): Promise<Metadata> {
  const { brand, product } = await params;

  const brandData =
    BRAND_PRODUCTS[
      brand as keyof typeof BRAND_PRODUCTS
    ];

  if (!brandData) {
    return {
      title: "Brand Tidak Ditemukan",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productData = Object.entries(brandData).find(
    ([key]) => key === product
  )?.[1];

  if (!productData) {
    return {
      title: "Product Tidak Ditemukan",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const brandName =
    BRAND_NAMES[
      brand as keyof typeof BRAND_NAMES
    ];

  const productNames = productData.products
    .slice(0, 3)
    .map((item) => item.title)
    .join(", ");

  const description =
    `Jelajahi produk ${productData.title} dari ${brandName} di Miller Indonesia, termasuk ${productNames}.`;

  return {
    title: `${productData.title} ${brandName}`,

    description,

    openGraph: {
      title: `${productData.title} ${brandName} | Miller Indonesia`,
      description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${productData.title} ${brandName} | Miller Indonesia`,
      description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    brand: string;
    product: string;
  }>;
}) {
  const { brand, product } = await params;

  // =========================
  // GET BRAND
  // =========================

  const brandData =
    BRAND_PRODUCTS[
      brand as keyof typeof BRAND_PRODUCTS
    ];

  if (!brandData) {
    return <div>Brand tidak ditemukan</div>;
  }

  // =========================
  // GET PRODUCT
  // =========================

  const productData = Object.entries(brandData).find(
    ([key]) => key === product
  )?.[1];

  if (!productData) {
    return <div>Product tidak ditemukan</div>;
  }

  return (
    <main>
      {/* ========================= */}
      {/* PRODUCT HEADER */}
      {/* ========================= */}

      <section className="px-10 pt-10">
        <div className="flex items-center justify-between gap-6">
          {/* BACK + PRODUCT CATEGORY */}

          <div className="flex min-w-0 items-center">
            <Link
              href={`/products/${brand}`}
              className="relative h-[36px] w-[36px] shrink-0"
            >
              <Image
                src="/component/button-left.png"
                alt="Back"
                fill
                className="object-contain"
              />
            </Link>

            <h1 className="h1 ml-4 min-w-0 whitespace-normal break-words font-black text-black">
              {productData.title}
            </h1>
          </div>

          {/* DESKTOP CONTACT BUTTON */}

          <div className="hidden shrink-0 md:block">
            <ContactButton />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* PRODUCT LIST */}
      {/* ========================= */}

      <section className="mt-16">
        <ProductList
          products={productData.products}
          showTitle={false}
        />
      </section>

      {/* ========================= */}
      {/* MOBILE CONTACT BUTTON */}
      {/* ========================= */}

      <div className="mt-16 px-10 md:hidden">
        <ContactButton className="w-full justify-center" />
      </div>
    </main>
  );
}