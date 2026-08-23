import ProductCard from "@/components/layout/ProductCard";

import type { Product } from "@/types/products";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({
  products,
}: ProductListProps) {
  return (
    <section className="px-10">
      {/* Product Category Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="h1 font-black text-black">
          Product 
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            description={product.description}
            pdf={product.pdf}
          />
        ))}
      </div>
    </section>
  );
}