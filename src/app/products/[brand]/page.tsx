import Image from "next/image";

import CategoryList from "@/components/layout/CategoryList";
import ProductList from "@/components/layout/ProductList";
import ContactButton from "@/components/layout/ContactButton";

import { MILLER_CATEGORIES } from "@/constants/miller-categories";
import { JASIC_CATEGORIES } from "@/constants/jasic-categories";
import { HYPERTHERM_PRODUCTS } from "@/constants/hyperterm";

const BRANDS = {

  // =========================== Miller ===========================
  miller: {
    name: "Miller",
    logo: "/image/logo/miller.jpg",

    // Desktop
    logoWidth: 276,
    logoHeight: 113,

    // Mobile
    mobileLogoWidth: 190,

    description: [
      "Miller® berkomitmen menghadirkan solusi yang bermakna. Kami memimpin industri pengelasan melalui produk-produk canggih yang berfokus pada solusi serta memenuhi kebutuhan penting dalam keselamatan dan kesehatan kerja pengelasan.",
      "Kami mengutamakan kemitraan dan kualitas kerja. Produk kami dirancang bersama para pengguna untuk berbagai aplikasi di bidang manufaktur, fabrikasi, konstruksi, penerbangan, olahraga otomotif, pendidikan, pertanian, dan kelautan.",
    ],

    type: "category" as const,
    categories: MILLER_CATEGORIES,
  },

  //=========================== Hypertherm ===========================
  hypertherm: {
    name: "Hypertherm",
    logo: "/image/logo/hypertherm.jpg",

    // Desktop
    logoWidth: 447,
    logoHeight: 87,

    // Mobile
    mobileLogoWidth: 258,

    description: [
      "Plasma merupakan salah satu metode pemotongan logam yang paling populer di dunia karena mampu memberikan keseimbangan terbaik antara kualitas potongan, kecepatan pemotongan, dan biaya.",
      "Sistem plasma Hypertherm dipercaya dan digunakan oleh lebih banyak bisnis dan pengguna dibandingkan merek lainnya. Jelajahi berbagai sistem pemotongan, gouging, dan penandaan plasma dari seri Powermax® Air Plasma kami.",
    ],

    type: "product" as const,
    products: HYPERTHERM_PRODUCTS,
  },

//=========================== Jasic ===========================
  jasic: {
    name: "Jasic",
    logo: "/image/logo/jasic.jpg",

    // Desktop
    logoWidth: 324,
    logoHeight: 113,

    // Mobile
    mobileLogoWidth: 233,

    description: [
      "JASIC merupakan produsen terpercaya untuk peralatan pengelasan, pemotongan, dan peralatan industri canggih yang menghadirkan teknologi inovatif, performa andal, serta solusi yang efisien bagi para profesional di seluruh dunia. Dengan komitmen yang kuat terhadap kualitas dan inovasi berkelanjutan.",
      "Mulai dari pengelasan dan pemotongan plasma hingga solusi laser, JASIC mendukung berbagai industri, termasuk manufaktur, fabrikasi, konstruksi, otomotif, perkapalan, energi, dan pengolahan logam.",
    ],

    type: "category" as const,
    categories: JASIC_CATEGORIES,
  },
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;

  const brandData = BRANDS[brand as keyof typeof BRANDS];

  if (!brandData) {
    return <div>Brand tidak ditemukan</div>;
  }

  return (
    <main>
      {/* Brand Introduction */}
      <section className="px-10 pt-10">
        {/* Logo + Desktop Contact Button */}
        <div className="flex items-start justify-between gap-6">
          {/* Logo */}
          <Image
            src={brandData.logo}
            alt={brandData.name}
            width={brandData.logoWidth}
            height={brandData.logoHeight}
            className="h-auto w-[var(--mobile-logo-width)] object-contain md:w-[var(--desktop-logo-width)]"
            style={
              {
                "--mobile-logo-width": `${brandData.mobileLogoWidth}px`,
                "--desktop-logo-width": `${brandData.logoWidth}px`,
              } as React.CSSProperties
            }
          />

          {/* Desktop Contact Button */}
          {brandData.type === "product" && (
            <div className="hidden md:block">
              <ContactButton />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-8 max-w-[600px]">
          <p className="b2 mb-4 leading-[1.2] text-justify text-black">
            {brandData.description[0]}
          </p>

          <p className="b2 leading-[1.2] text-justify text-black">
            {brandData.description[1]}
          </p>
        </div>
      </section>

      {/* Product / Category */}
      <section className="mt-16">
        {/* Category Brand */}
        {brandData.type === "category" && (
          <CategoryList categories={brandData.categories} />
        )}

        {/* Product Brand */}
        {brandData.type === "product" && (
          <>
            <ProductList products={brandData.products} />

            {/* Mobile Contact Button */}
            <div className="mt-16 px-10 md:hidden">
              <ContactButton className="w-full justify-center" />
            </div>
          </>
        )}
      </section>
    </main>
  );
}