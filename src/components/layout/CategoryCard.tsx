import Image from "next/image";
import type { Category } from "@/types/category";

type CategoryCardProps = Category;

export default function CategoryCard({
  image,
  title,
  description,
}: CategoryCardProps) {
  return (
    <article className="w-[420px] shrink-0">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full object-contain"
        draggable={false}
      />

      <div className="mt-8 px-5">
        <h3 className="h3 font-bold text-black">
          {title}
        </h3>

        <p className="mt-4 b2 leading-[1.2] text-dark-gray">
          {description}
        </p>
      </div>
    </article>
  );
}