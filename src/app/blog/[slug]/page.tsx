import Image from "next/image";
import { notFound } from "next/navigation";

import { BLOGS } from "@/constants/blog";


type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = BLOGS.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }


  return (
    <main className="bg-white">

      <section className="container-custom px-5 pt-8 md:px-15 md:pt-10">

        {/* ================================================== */}
        {/* TITLE */}
        {/* ================================================== */}

        {/* MOBILE H2 */}

        <h1 className="h2 font-black text-black md:hidden">
          {blog.title}
        </h1>


        {/* DESKTOP H1 */}

        <h1 className="hidden h1 max-w-[750px] font-black text-black md:block">
          {blog.title}
        </h1>


        {/* ================================================== */}
        {/* AUTHOR */}
        {/* ================================================== */}

        {/* MOBILE H4 */}

        <h2 className="h4 mt-4 font-bold text-[#8B8B8B] md:hidden">
          By {blog.author}
        </h2>


        {/* DESKTOP H2 */}

        <h2 className="hidden h2 mt-8 font-bold text-[#8B8B8B] md:block">
          By {blog.author}
        </h2>


        {/* ================================================== */}
        {/* IMAGE */}
        {/* ================================================== */}

        <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-lg md:mt-8 md:aspect-[16/7]">

          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />

        </div>


        {/* ================================================== */}
        {/* DIVIDER */}
        {/* ================================================== */}

        <div className="my-6 h-px w-full bg-[#E3E3E3] md:my-8" />


        {/* ================================================== */}
        {/* BODY */}
        {/* ================================================== */}

        <p className="b1 font-normal text-[#8B8B8B]">
          {blog.description}
        </p>

      </section>

    </main>
  );
}