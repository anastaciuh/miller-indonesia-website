import Image from "next/image";

import Carousel from "@/components/layout/Carousel";

import CategoryList from "@/components/layout/CategoryList";

import BlogList from "@/components/layout/BlogList";

import SeeMoreButton from "@/components/layout/SeeMoreButton";

import { HOME_CAROUSEL_IMAGES } from "@/constants/home";

import { HOME_CATEGORIES } from "@/constants/categories-home";

import { BLOGS } from "@/constants/blog";


export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ================================================== */}
      {/* HERO CAROUSEL */}
      {/* ================================================== */}

      <div className="container-custom">

        <Carousel
          images={HOME_CAROUSEL_IMAGES}
        />

      </div>


      {/* ================================================== */}
      {/* MILLER INDONESIA */}
      {/* ================================================== */}

      <section className="container-custom px-6 pt-8 md:px-15 md:pt-10">

        {/* MOBILE H1 */}

        <h1 className="h1 font-black text-black md:hidden">
          Miller Indonesia
        </h1>


        {/* DESKTOP H1 */}

        <h1 className="hidden h1 font-black text-black md:block">
          Miller Indonesia
        </h1>


        {/* MOBILE H3 */}

        <h2 className="h3 mt-2 font-bold text-black md:hidden">
          Distributor Miller Welding &amp;
          Hypertherm Plasma Cutting
        </h2>


        {/* DESKTOP H2 */}

        <h2 className="hidden h2 leading-6 font-bold text-black md:block">
          Distributor Miller Welding &amp;
          Hypertherm Plasma Cutting
        </h2>


        <p className="b1 mt-8 max-w-[850px] font-normal text-[#8B8B8B]">
          Miller Indonesia merupakan distributor terpercaya solusi pengelasan dan pemotongan yang melayani
          berbagai industri di Indonesia. Dengan pengalaman yang luas, kami menyediakan produk dan solusi
          berkualitas untuk sektor minyak dan gas, pembangkit listrik, kilang, fabrikasi, perpipaan, serta
          berbagai industri lainnya.
        </p>

      </section>


      {/* ================================================== */}
      {/* PRODUCTS */}
      {/* ================================================== */}

      <section className="mt-16 md:mt-20">

      <CategoryList
        categories={HOME_CATEGORIES}
        title="Product"
      />  

      </section>


      {/* ================================================== */}
      {/* BLOGS */}
      {/* ================================================== */}

      <section className="mt-16 md:mt-20">

        <BlogList
          blogs={BLOGS}
        />

      </section>


      {/* ================================================== */}
      {/* SERVICE CENTRE */}
      {/* ================================================== */}

      <section className="container-custom mt-24 md:mt-20 md:px-15">

        {/* ================================================== */}
        {/* MOBILE */}
        {/* ================================================== */}

        <div className="relative aspect-[8/13] w-full overflow-hidden md:hidden">

          {/* MOBILE IMAGE */}

          <Image
            src="/images/home/home-service-mobile.jpg"
            alt="Miller Indonesia Service Centre"
            fill
            className="object-cover"
          />


          {/* SERVICE CARD */}

          <div className="absolute bottom-8 left-6 right-6 rounded-lg bg-white p-6">

            <h2 className="h1 font-black text-black">
              Service Centre
            </h2>


            <p className="b1 mt-3 font-normal text-[#8B8B8B]">
              Service Center kami siap memberikan dukungan, mulai dari informasi produk, demonstrasi mesin,
              perbaikan dan perawatan, konsultasi teknis, hingga bantuan layanan agar mesin Anda tetap bekerja
              secara optimal.
            </p>


            <SeeMoreButton
              href="/service-center"
              className="mt-6 w-full"
            />

          </div>

        </div>


        {/* ================================================== */}
        {/* DESKTOP */}
        {/* ================================================== */}

        <div className="relative hidden min-h-[400px] overflow-hidden rounded-lg md:block">

          {/* DESKTOP IMAGE */}

          <Image
            src="/images/home/home-service-desktop.jpg"
            alt="Miller Indonesia Service Centre"
            fill
            className="object-cover"
          />


          {/* SERVICE CARD */}

          <div className="absolute bottom-8 right-8 w-[420px] rounded-lg bg-white p-6">

            <h2 className="h1 font-black text-black">
              Service Centre
            </h2>


            <p className="b1 mt-3 font-normal text-[#8B8B8B]">
              Service Center kami siap memberikan dukungan, mulai dari informasi produk, demonstrasi mesin,
              perbaikan dan perawatan, konsultasi teknis, hingga bantuan layanan agar mesin Anda tetap bekerja
              secara optimal.
            </p>


            <SeeMoreButton
              href="/service-center"
              className="mt-6 w-fit"
            />

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* CONTACT US */}
      {/* ================================================== */}

      <section className="container-custom mt-16 md:mt-32">

        {/* ================================================== */}
        {/* MOBILE */}
        {/* ================================================== */}

        <div className="md:hidden">

          {/* CONTENT */}

          <div className="px-6">

            <h2 className="h1 font-black text-black">
              Contact Us
            </h2>


            <p className="b1 mt-4 font-normal text-[#8B8B8B]">
              Konsultasikan kebutuhan Anda dengan
              tim ahli kami. Dapatkan informasi
              produk, demo mesin, spesifikasi teknis,
              katalog, brosur, hingga penawaran
              harga terbaik.
            </p>


            <SeeMoreButton
              href="/contact"
              className="mt-6 w-full"
            />

          </div>


          <div className="mt-24 bg-white">

            <Image
              src="/images/home/frame.jpg"
              alt="Contact Miller Indonesia"
              width={1200}
              height={1400}
              className="h-auto w-full object-cover"
            />

          </div>

        </div>


        {/* ================================================== */}
        {/* DESKTOP */}
        {/* ================================================== */}

        <div className="relative hidden min-h-[420px] md:block">

          {/* IMAGE AREA */}

          <div className="absolute bottom-0 right-0 h-[125%] w-[75%] overflow-hidden">

            <Image
              src="/images/home/home-contact-desktop.png"
              alt="Contact Miller Indonesia"
              fill
              className="object-contain object-right-bottom"
            />

          </div>


          {/* CONTENT */}

          <div className="relative z-10 w-[500px] px-15 pt-10">

            <h2 className="h1 font-black text-black">
              Contact Us
            </h2>


            <p className="b1 mt-4 font-normal text-[#8B8B8B]">
              Konsultasikan kebutuhan Anda dengan
              tim ahli kami. Dapatkan informasi
              produk, demo mesin, spesifikasi teknis,
              katalog, brosur, hingga penawaran
              harga terbaik.
            </p>


            <SeeMoreButton
              href="/contact"
              className="mt-6 w-fit"
            />

          </div>

        </div>

      </section>

    </main>
  );
}