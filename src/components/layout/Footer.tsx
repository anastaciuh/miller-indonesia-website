"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const PRODUCT_BRANDS = [
  { href: "/products/miller", label: "Miller" },
  { href: "/products/interweld", label: "Interweld" },
  { href: "/products/hypertherm", label: "Hypertherm" },
  { href: "/products/interflex", label: "Interflex" },
  { href: "/products/jasic", label: "Jasic" },
  { href: "/products/weldcraft", label: "Weldcraft" },
  { href: "/products/hobart", label: "Hobart" },
  { href: "/products/stanley-tools", label: "Stanley Tools" },
  { href: "/products/bernard", label: "Bernard" },
  { href: "/products/gosave", label: "GoSave" },
];

export default function Footer() {
  const [isProductsOpen, setIsProductsOpen] =
    useState(false);

  const [isCompanyOpen, setIsCompanyOpen] =
    useState(false);

  // ==================================================
  // PRESSED FOOTER LINK
  // ==================================================

  const [pressedFooterLink, setPressedFooterLink] =
    useState<string | null>(null);

  // ==================================================
  // FOOTER LINK CLASS
  // ==================================================

  const footerLinkClass = (href: string) => {
    const isPressed =
      pressedFooterLink === href;

    return `w-fit transition-none ${
      isPressed
        ? "font-bold underline underline-offset-4"
        : "font-normal no-underline"
    }`;
  };

  // ==================================================
  // RESET FOOTER LINK STATE
  // ==================================================

  const resetFooterLink = () => {
    setPressedFooterLink(null);
  };

  return (
    <footer className="w-full bg-[#0C182A] text-white mt-32">

      {/* ================================================== */}
      {/* DESKTOP FOOTER */}
      {/* ================================================== */}

      <div className="hidden md:block">

        <div className="container-custom px-15 py-12">

          <div className="grid grid-cols-3">

            {/* ================================================== */}
            {/* CONNECT WITH US + CONTACT */}
            {/* ================================================== */}

            <div className="border-r border-white pr-12">

              {/* CONNECT WITH US */}

              <div className="mb-12">

                <h4 className="mb-5 font-black h3">
                  Connect With Us
                </h4>

                <div className="flex items-center gap-5">

                  {/* INSTAGRAM */}

                  <a
                    href="https://www.instagram.com/millerweldingindonesia?igsi=MXR5NHZ2M3V6NDhvdQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/images/home/instagram.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </a>

                  {/* LINKEDIN */}

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Image
                      src="/images/home/linkedin.png"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </a>

                </div>

              </div>


              {/* CONTACT US */}

              <div>

                <h4 className="mb-5 font-black h3">
                  Contact Us
                </h4>

                <div className="space-y-3 b2">

                  <p>
                    donz.dgm@gmail.com
                  </p>

                  <p>
                    +6281314223938 (Dony Miller)
                  </p>

                </div>

              </div>

            </div>


            {/* ================================================== */}
            {/* PRODUCTS */}
            {/* ================================================== */}

            <div className="px-14">

              <h3 className="mb-6 font-black h3">
                Products
              </h3>

              <div className="grid grid-cols-2 gap-x-10 gap-y-5 b2">

                {PRODUCT_BRANDS.map((brand) => (
                  <Link
                    key={brand.href}
                    href={brand.href}
                    className={footerLinkClass(
                      brand.href
                    )}
                    onPointerDown={() =>
                      setPressedFooterLink(
                        brand.href
                      )
                    }
                    onPointerUp={
                      resetFooterLink
                    }
                    onPointerCancel={
                      resetFooterLink
                    }
                    onPointerLeave={
                      resetFooterLink
                    }
                  >
                    {brand.label}
                  </Link>
                ))}

              </div>

            </div>


            {/* ================================================== */}
            {/* COMPANY INFORMATION */}
            {/* ================================================== */}

            <div className="pl-14">

              <h3 className="mb-6 font-black h3">
                Company Information
              </h3>

              <div className="flex flex-col gap-5 b2">

                <Link
                  href="/blog"
                  className={footerLinkClass(
                    "/blog"
                  )}
                  onPointerDown={() =>
                    setPressedFooterLink(
                      "/blog"
                    )
                  }
                  onPointerUp={
                    resetFooterLink
                  }
                  onPointerCancel={
                    resetFooterLink
                  }
                  onPointerLeave={
                    resetFooterLink
                  }
                >
                  Blog
                </Link>

                <Link
                  href="/service-center"
                  className={footerLinkClass(
                    "/service-center"
                  )}
                  onPointerDown={() =>
                    setPressedFooterLink(
                      "/service-center"
                    )
                  }
                  onPointerUp={
                    resetFooterLink
                  }
                  onPointerCancel={
                    resetFooterLink
                  }
                  onPointerLeave={
                    resetFooterLink
                  }
                >
                  Service Centre
                </Link>

                <Link
                  href="/contact"
                  className={footerLinkClass(
                    "/contact"
                  )}
                  onPointerDown={() =>
                    setPressedFooterLink(
                      "/contact"
                    )
                  }
                  onPointerUp={
                    resetFooterLink
                  }
                  onPointerCancel={
                    resetFooterLink
                  }
                  onPointerLeave={
                    resetFooterLink
                  }
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================== */}
        {/* DESKTOP BOTTOM BLUE BAR */}
        {/* ================================================== */}

        <div className="w-full bg-[#168BC7]">

          <div className="container-custom flex h-[36px] items-center px-15">

            <div className="flex items-center gap-3 text-[10px]">

              <Image
                src="/images/home/logo-desktop.png"
                alt="Miller Indonesia"
                width={110}
                height={25}
                className="h-auto w-[110px]"
              />

              <span className="h-5 w-px bg-white/80" />

              <span className="b2">
                Distributor Miller Welding Machine &amp;
                Hypertherm Plasma Cutting
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================================================== */}
      {/* MOBILE FOOTER */}
      {/* ================================================== */}

      <div className="md:hidden">

        <div className="px-5 py-12">

          {/* ================================================== */}
          {/* CONNECT WITH US */}
          {/* ================================================== */}

          <div className="mb-8">

            <h3 className="mb-5 font-black h4">
              Connect With Us
            </h3>

            <div className="flex items-center gap-5">

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/millerweldingindonesia?igsi=MXR5NHZ2M3V6NDhvdQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/images/home/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/images/home/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>

            </div>

          </div>


          {/* ================================================== */}
          {/* CONTACT US */}
          {/* ================================================== */}

          <div className="mb-8">

            <h3 className="mb-5 font-black h4">
              Contact Us
            </h3>

            <div className="space-y-3 font-normal h4">

              <p>
                donz.dgm@gmail.com
              </p>

              <p>
                +62 81314223938 (Dony Miller)
              </p>

            </div>

          </div>


          {/* ================================================== */}
          {/* PRODUCTS ACCORDION */}
          {/* ================================================== */}

          <div className="border-y border-white">

            <button
              type="button"
              onClick={() => {
                setIsProductsOpen(
                  !isProductsOpen
                );
              }}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isProductsOpen}
            >

              <span className="font-black h4">
                Products
              </span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isProductsOpen
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />

            </button>


            {/* PRODUCT LIST */}

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isProductsOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <div className="grid grid-cols-2 gap-x-8 gap-y-5 pb-5 pt-2 h4">

                  {PRODUCT_BRANDS.map(
                    (brand) => (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        className={footerLinkClass(
                          brand.href
                        )}
                        onPointerDown={() =>
                          setPressedFooterLink(
                            brand.href
                          )
                        }
                        onPointerUp={() => {
                          resetFooterLink();

                          // Reset accordion
                          setIsProductsOpen(
                            false
                          );
                        }}
                        onPointerCancel={() => {
                          resetFooterLink();
                        }}
                        onPointerLeave={
                          resetFooterLink
                        }
                      >
                        {brand.label}
                      </Link>
                    )
                  )}

                </div>

              </div>

            </div>

          </div>


          {/* ================================================== */}
          {/* COMPANY INFORMATION ACCORDION */}
          {/* ================================================== */}

          <div className="border-b border-white">

            <button
              type="button"
              onClick={() => {
                setIsCompanyOpen(
                  !isCompanyOpen
                );
              }}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isCompanyOpen}
            >

              <span className="font-black h4">
                Company Information
              </span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isCompanyOpen
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />

            </button>


            {/* COMPANY LIST */}

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isCompanyOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <div className="flex flex-col gap-5 pb-5 pt-2 h4">

                  <Link
                    href="/blog"
                    className={footerLinkClass(
                      "/blog"
                    )}
                    onPointerDown={() =>
                      setPressedFooterLink(
                        "/blog"
                      )
                    }
                    onPointerUp={() => {
                      resetFooterLink();

                      // Reset accordion
                      setIsCompanyOpen(
                        false
                      );
                    }}
                    onPointerCancel={
                      resetFooterLink
                    }
                    onPointerLeave={
                      resetFooterLink
                    }
                  >
                    Blog
                  </Link>

                  <Link
                    href="/service-center"
                    className={footerLinkClass(
                      "/service-center"
                    )}
                    onPointerDown={() =>
                      setPressedFooterLink(
                        "/service-center"
                      )
                    }
                    onPointerUp={() => {
                      resetFooterLink();

                      // Reset accordion
                      setIsCompanyOpen(
                        false
                      );
                    }}
                    onPointerCancel={
                      resetFooterLink
                    }
                    onPointerLeave={
                      resetFooterLink
                    }
                  >
                    Service Centre
                  </Link>

                  <Link
                    href="/contact"
                    className={footerLinkClass(
                      "/contact"
                    )}
                    onPointerDown={() =>
                      setPressedFooterLink(
                        "/contact"
                      )
                    }
                    onPointerUp={() => {
                      resetFooterLink();

                      // Reset accordion
                      setIsCompanyOpen(
                        false
                      );
                    }}
                    onPointerCancel={
                      resetFooterLink
                    }
                    onPointerLeave={
                      resetFooterLink
                    }
                  >
                    Contact Us
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================== */}
        {/* MOBILE BOTTOM BLUE BAR */}
        {/* ================================================== */}

        <div className="w-full bg-[#138CCC]">

          <Image
            src="/images/home/footer-mobile.png"
            alt="Miller Indonesia"
            width={390}
            height={80}
            className="h-auto w-full"
          />

        </div>

      </div>

    </footer>
  );
}