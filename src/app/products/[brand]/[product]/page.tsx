import Image from "next/image";
import Link from "next/link";

import ProductList from "@/components/layout/ProductList";
import ContactButton from "@/components/layout/ContactButton";

import { BRAND_PRODUCTS } from "@/constants/brand-products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    brand: string;
    product: string;
  }>;
}) {
  const { brand, product } = await params;

  const brandData =
    BRAND_PRODUCTS[brand as keyof typeof BRAND_PRODUCTS];

  if (!brandData) {
    return <div>Brand tidak ditemukan</div>;
  }

  const productData =
    brandData[product as keyof typeof brandData];

  if (!productData) {
    return <div>Product tidak ditemukan</div>;
  }

  return (
    <main>
      {/* ========================= */}
      {/* PRODUCT HEADER */}
      {/* ========================= */}

      <section className="px-10 pt-10">
        <div className="flex items-center justify-between">
          {/* BACK + PRODUCT CATEGORY */}

          <div className="flex items-center">
            <Link
              href={`/products/${brand}`}
              className="relative h-[40px] w-[40px] shrink-0"
            >
              <Image
                src="/component/button-left.jpg"
                alt="Back"
                fill
                className="object-contain"
              />
            </Link>

            <h1 className="h1 ml-6 font-black text-black">
              {productData.title}
            </h1>
          </div>

          {/* DESKTOP CONTACT BUTTON */}

          <div className="hidden md:block">
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