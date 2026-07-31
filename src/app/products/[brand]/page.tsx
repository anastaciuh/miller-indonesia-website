type BrandPageProps = {
  params: Promise<{ brand: string }>;
};

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight capitalize">
        {brand.replace(/-/g, " ")}
      </h1>
    </main>
  );
}
