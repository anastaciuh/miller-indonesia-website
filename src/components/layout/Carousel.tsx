"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  mobile: string;
  desktop: string;
};

type CarouselProps = {
  images: CarouselImage[];
  interval?: number;
};

export default function Carousel({
  images,
  interval = 3500,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] =
    useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (current) =>
        (current + 1) % images.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) =>
        (current - 1 + images.length) %
        images.length
    );
  };


  // ==================================================
  // AUTO SLIDE
  // ==================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (current) =>
          (current + 1) % images.length
      );
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);


  return (
    <div className="relative w-full overflow-hidden">

      {/* ================================================== */}
      {/* SLIDES */}
      {/* ================================================== */}

      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.desktop}
            className="relative min-w-full aspect-[3/2] md:aspect-[16/5]"
          >

            {/* MOBILE IMAGE */}

            <Image
              src={image.mobile}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover md:hidden"
            />


            {/* DESKTOP IMAGE */}

            <Image
              src={image.desktop}
              alt={`Slide ${index + 1}`}
              fill
              className="hidden object-cover md:block"
            />

          </div>
        ))}
      </div>


      {/* ================================================== */}
      {/* PREVIOUS BUTTON */}
      {/* ================================================== */}

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <Image
          src="/component/button-left.jpg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </button>


      {/* ================================================== */}
      {/* NEXT BUTTON */}
      {/* ================================================== */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <Image
          src="/component/button-right.jpg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </button>

    </div>
  );
}