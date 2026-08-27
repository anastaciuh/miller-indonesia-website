import Image from "next/image";

import { notFound } from "next/navigation";

import { BLOG_DETAILS } from "@/constants/blog-details";


type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = BLOG_DETAILS.find(
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

        <h1 className="h2 font-black text-black md:hidden">
          {blog.title}
        </h1>


        <h1 className="hidden leading-12 h1 max-w-[750px] font-black text-black md:block">
          {blog.title}
        </h1>


        {/* ================================================== */}
        {/* AUTHOR */}
        {/* ================================================== */}

        <h2 className="h4 mt-4 font-bold text-[#8B8B8B] md:hidden">
          By {blog.author}
        </h2>


        <h2 className="hidden h3 mt-2 font-bold text-[#8B8B8B] md:block">
          By {blog.author}
        </h2>


        {/* ================================================== */}
        {/* MAIN IMAGE */}
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
        {/* CONTENT */}
        {/* ================================================== */}

        <div className="space-y-6">

          {blog.content.map((block, index) => {

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="h3 mb-2 font-bold text-black"
                >
                  {block.text}
                </h2>
              );
            }


            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="b1 whitespace-pre-line font-normal text-[#8B8B8B]"
                >
                  {block.text}
                </p>
              );
            }


            if (block.type === "image") {
              return (
                <div
                  key={index}
                  className="w-full overflow-hidden"
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1200}
                    height={700}
                    className="h-auto w-full object-contain"
                  />
                </div>
              );
            }


            return null;
          })}

        </div>

      </section>

    </main>
  );
}