import Image from "next/image";
import { FileText } from "lucide-react";
import type { Product } from "@/types/products";

type ProductCardProps = Product;

export default function ProductCard({
  image,
  title,
  description,
  pdf,
}: ProductCardProps) {
  return (
    <article className="w-full">
      {/* Product Image */}
      <div className="relative aspect-[1.4/1] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="mt-6 mb-6">
        <h3 className="h3 leading-[1.2] text-black">
          {title}
        </h3>

        <p className="mt-3 b2 leading-[1.35] text-dark-gray">
          {description}
        </p>

        {/* Full Specification */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-light-gray px-4 py-2 text-[18px] font-medium text-black transition hover:bg-gray-200"
          >
          <FileText size={20} strokeWidth={2} />
          <span>Full Specification</span>
        </a>
      </div>
    </article>
  );
}