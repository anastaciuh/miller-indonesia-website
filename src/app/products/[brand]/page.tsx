import Image from "next/image";

import CategoryList from "@/components/layout/CategoryList";
import ProductList from "@/components/layout/ProductList";
import ContactButton from "@/components/layout/ContactButton";

import { HYPERTHERM_PRODUCTS } from "@/constants/hyperterm";

const BRANDS = {
  miller: {
    name: "Miller",
    logo: "/image/logo/miller.jpg",
    logoWidth: 276,
    logoHeight: 113,
    description: [
      "Miller® berkomitmen menghadirkan solusi yang bermakna. Kami memimpin industri pengelasan melalui produk-produk canggih yang berfokus pada solusi serta memenuhi kebutuhan penting dalam keselamatan dan kesehatan kerja pengelasan.",

      "Kami mengutamakan kemitraan dan kualitas kerja. Produk kami dirancang bersama para pengguna untuk berbagai aplikasi di bidang manufaktur, fabrikasi, konstruksi, penerbangan, olahraga otomotif, pendidikan, pertanian, dan kelautan.",
    ],
    type: "category",
  },

  hypertherm: {
    name: "Hypertherm",
    logo: "/image/logo/hypertherm.jpg",
    logoWidth: 447,
    logoHeight: 87,
    description: [
      "Plasma merupakan salah satu metode pemotongan logam yang paling populer di dunia karena mampu memberikan keseimbangan terbaik antara kualitas potongan, kecepatan pemotongan, dan biaya.",

      "Sistem plasma Hypertherm dipercaya dan digunakan oleh lebih banyak bisnis dan pengguna dibandingkan merek lainnya. Jelajahi berbagai sistem pemotongan, gouging, dan penandaan plasma dari seri Powermax® Air Plasma kami.",
    ],
    type: "product",
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
              className="object-contain"
            />

            {/* Desktop Contact Button */}
            {brandData.type === "product" && (
              <div className="hidden md:block">
                <ContactButton />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mt-8 max-w-[742px]">
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
          {brandData.type === "category" && <CategoryList />}

          {brandData.type === "product" && (
            <>
              <ProductList products={HYPERTHERM_PRODUCTS} />

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