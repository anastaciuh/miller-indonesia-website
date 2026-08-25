"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import CategoryCard from "@/components/layout/CategoryCard";

type Category = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

type CategoryListProps = {
  categories: Category[];
};

export default function CategoryList({
  categories,
}: CategoryListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

    setCanScrollLeft(scrollLeft > 5);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 5
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

  // =========================
  // BUTTON SCROLL
  // =========================

  const handleScroll = (
    direction: "left" | "right"
  ) => {
    if (!containerRef.current) return;

    const firstCard =
      containerRef.current.querySelector("article");

    if (!firstCard) return;

    const cardWidth = firstCard.clientWidth;
    const gap = 32;

    const scrollAmount = cardWidth + gap;

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
    const container = containerRef.current;

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
  }, [categories]);

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
            onClick={() => handleScroll("right")}
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

      {/* CATEGORY CAROUSEL */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`w-screen overflow-x-auto overflow-y-hidden ${
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