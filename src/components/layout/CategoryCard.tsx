"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { Category } from "@/types/category";

type CategoryCardProps = Category;

export default function CategoryCard({
  image,
  title,
  description,
  href,
}: CategoryCardProps) {
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = false;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - startX.current) > 5) {
      isDragging.current = true;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const card = (
    <article
      className="w-[420px] shrink-0 select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
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

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        draggable={false}
      >
        {card}
      </Link>
    );
  }

  return card;
}