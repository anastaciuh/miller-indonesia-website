"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import CategoryCard from "@/components/layout/CategoryCard";

type Category = {
  image: string;
  title: string;
  description: string;
};

type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList({
  categories,
}: CategoryListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    startX.current = e.pageX;
    scrollStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const distance = e.pageX - startX.current;

    containerRef.current.scrollLeft =
      scrollStart.current - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* TITLE + BUTTON */}
      <div className="mb-8 flex items-center justify-between px-10">
        <div className="h1 font-black text-black">
          Product Category
        </div>

        <div className="flex gap-4">
          {/* LEFT */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="relative h-[40px] w-[40px]"
          >
            <Image
              src="/component/button-left.jpg"
              alt="Previous"
              fill
              className="object-contain"
            />
          </button>

          {/* RIGHT */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="relative h-[40px] w-[40px]"
          >
            <Image
              src="/component/button-right.jpg"
              alt="Next"
              fill
              className="object-contain"
            />
          </button>
        </div>
      </div>

      {/* CATEGORY CAROUSEL */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`w-screen overflow-x-auto overflow-y-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
        }}
      >
        <div className="flex w-max min-w-max gap-8">
          {/* Extra space kiri */}
          <div className="w-[2px] shrink-0" />

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}

          {/* Extra space kanan */}
          <div className="w-[2px] shrink-0" />
        </div>
      </div>
    </div>
  );
}