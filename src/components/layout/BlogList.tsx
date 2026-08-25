"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import BlogCard from "@/components/layout/BlogCard";

import type { Blog } from "@/constants/blog.ts";


type BlogListProps = {
  blogs: Blog[];
};


export default function BlogList({
  blogs,
}: BlogListProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  const startX = useRef(0);
  const scrollStart = useRef(0);


  // =========================
  // CHECK SCROLL POSITION
  // =========================

  const updateScrollButtons = () => {
    if (!containerRef.current) return;

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = containerRef.current;

    setCanScrollLeft(
      scrollLeft > 5
    );

    setCanScrollRight(
      scrollLeft + clientWidth <
        scrollWidth - 5
    );
  };


  // =========================
  // MOUSE DRAG
  // =========================

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!containerRef.current) return;

    setIsDragging(true);

    startX.current = e.pageX;

    scrollStart.current =
      containerRef.current.scrollLeft;
  };


  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      !isDragging ||
      !containerRef.current
    ) {
      return;
    }

    const distance =
      e.pageX - startX.current;

    containerRef.current.scrollLeft =
      scrollStart.current - distance;
  };


  const handleMouseUp = () => {
    setIsDragging(false);
  };


  const handleMouseLeave = () => {
    setIsDragging(false);
  };


  // =========================
  // BUTTON SCROLL
  // =========================

  const handleScroll = (
    direction: "left" | "right"
  ) => {
    if (!containerRef.current) return;

    const firstCard =
      containerRef.current.querySelector(
        "article"
      );

    if (!firstCard) return;

    const cardWidth =
      firstCard.clientWidth;

    const gap = 32;

    const scrollAmount =
      cardWidth + gap;

    containerRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,

      behavior: "smooth",
    });
  };


  // =========================
  // LISTEN TO SCROLL
  // =========================

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) return;

    updateScrollButtons();

    container.addEventListener(
      "scroll",
      updateScrollButtons
    );

    window.addEventListener(
      "resize",
      updateScrollButtons
    );

    return () => {
      container.removeEventListener(
        "scroll",
        updateScrollButtons
      );

      window.removeEventListener(
        "resize",
        updateScrollButtons
      );
    };
  }, [blogs]);


  return (
    <div>

      {/* ================================================== */}
      {/* TITLE + BUTTON */}
      {/* ================================================== */}

      <div className="mb-8 flex items-center justify-between px-6 md:px-15">

        <div className="h1 font-black text-black">
          Blog
        </div>


        <div className="flex gap-4">

          {/* LEFT */}

          <button
            type="button"
            onClick={() =>
              handleScroll("left")
            }
            disabled={!canScrollLeft}
            className={`relative h-[40px] w-[40px] transition-opacity ${
              canScrollLeft
                ? "cursor-pointer opacity-100"
                : "cursor-default opacity-30"
            }`}
          >
            <Image
              src="/component/button-left.png"
              alt="Previous"
              fill
              className="object-contain"
            />
          </button>


          {/* RIGHT */}

          <button
            type="button"
            onClick={() =>
              handleScroll("right")
            }
            disabled={!canScrollRight}
            className={`relative h-[40px] w-[40px] transition-opacity ${
              canScrollRight
                ? "cursor-pointer opacity-100"
                : "cursor-default opacity-30"
            }`}
          >
            <Image
              src="/component/button-right.png"
              alt="Next"
              fill
              className="object-contain"
            />
          </button>

        </div>

      </div>


      {/* ================================================== */}
      {/* BLOG CAROUSEL */}
      {/* ================================================== */}

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`w-full overflow-x-auto overflow-y-hidden ${
          isDragging
            ? "cursor-grabbing"
            : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          userSelect: "none",
        }}
      >

        <div className="flex w-max min-w-max gap-8 px-6 md:px-15">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              {...blog}
            />
          ))}

        </div>

      </div>

    </div>
  );
}