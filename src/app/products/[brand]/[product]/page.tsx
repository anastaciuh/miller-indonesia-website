type ProductPageProps = {
  params: Promise<{ brand: string; product: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { brand, product } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <p className="text-sm uppercase tracking-wide text-zinc-500 capitalize">
        {brand.replace(/-/g, " ")}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight capitalize">
        {product.replace(/-/g, " ")}
      </h1>
    </main>
  );
}
