import Image from "next/image";
import Link from "next/link";

import type { Blog } from "@/constants/blog";


type BlogCardProps = Blog & {
  className?: string;
};


export default function BlogCard({
  slug,
  image,
  author,
  title,
  description,
  className = "w-[300px] shrink-0 md:w-[360px]",
}: BlogCardProps) {
  return (
    <article className={className}>

      <Link
        href={`/blog/${slug}`}
        className="block"
      >

        {/* ================================================== */}
        {/* IMAGE */}
        {/* ================================================== */}

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-[#E3E3E3]">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>


        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="mt-5">

          {/* MOBILE B2 */}

          <p className="b2 font-normal text-[#8B8B8B] md:hidden">
            By {author}
          </p>


          {/* DESKTOP B1 */}

          <p className="hidden b1 font-normal text-[#8B8B8B] md:block">
            By {author}
          </p>


          {/* MOBILE H4 */}

          <h2 className="h4 mt-4 font-bold text-black md:hidden">
            {title}
          </h2>


          {/* DESKTOP H3 */}

          <h2 className="hidden h3 mt-4 leading-6 font-bold text-black md:block">
            {title}
          </h2>


          {/* MOBILE B2 */}

          <p className="b2 mt-3 font-normal text-[#8B8B8B] md:hidden">
            {description}
          </p>


          {/* DESKTOP B1 */}

          <p className="hidden b1 mt-3 font-normal text-[#8B8B8B] md:block">
            {description}
          </p>

        </div>

      </Link>

    </article>
  );
}