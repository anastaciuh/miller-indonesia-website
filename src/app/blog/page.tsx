import BlogCard from "@/components/layout/BlogCard";

import { BLOGS } from "@/constants/blog";


export default function BlogPage() {
  return (
    <main className="bg-white">

      <section className="container-custom px-5 pt-8 md:px-10 md:pt-12">

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">

          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.slug}
              {...blog}
              className="w-full"
            />
          ))}

        </div>

      </section>

    </main>
  );
}