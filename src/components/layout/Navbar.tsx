"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, ChevronUp } from "lucide-react";

const PRODUCT_BRANDS = [
  { href: "/products/miller", label: "Miller" },
  { href: "/products/hypertherm", label: "Hypertherm" },
  { href: "/products/jasic", label: "Jasic" },
  { href: "/products/hobart", label: "Hobart" },
  { href: "/products/bernard", label: "Bernard" },
  { href: "/products/interweld", label: "Interweld" },
  { href: "/products/interflex", label: "Interflex" },
  { href: "/products/weldcraft", label: "Weldcraft" },
  { href: "/products/stanley-tools", label: "Stanley Tools" },
  { href: "/products/gosave", label: "GoSave" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isProductsOpen, setIsProductsOpen] =
    useState(false);

  const [pressedLink, setPressedLink] =
    useState<string | null>(null);

  const [pressedBrand, setPressedBrand] =
    useState<string | null>(null);


  // ==================================================
  // DESKTOP UNDERLINE
  // ==================================================

  const desktopNavRef =
    useRef<HTMLDivElement>(null);

  const desktopLinkRefs = useRef<
    Record<string, HTMLAnchorElement | null>
  >({});

  const [underlineStyle, setUnderlineStyle] =
    useState({
      left: 0,
      width: 0,
    });

  const [underlineReady, setUnderlineReady] =
    useState(false);


  // ==================================================
  // RESET NAVBAR STATE WHEN PAGE CHANGES
  // ==================================================

  useEffect(() => {
    setIsProductsOpen(false);
    setPressedBrand(null);
    setPressedLink(null);
  }, [pathname]);


  // ==================================================
  // MOBILE MENU ITEM
  // ==================================================

  const menuItemClass = (href: string) => {
    const isPressed =
      pressedLink === href;

    return `block px-4 py-4 transition-colors duration-200 ease-out ${
      isPressed
        ? "bg-white text-[#0C182A]"
        : "bg-transparent text-white"
    }`;
  };


  // ==================================================
  // MOBILE BRAND
  // ==================================================

  const brandClass = (href: string) => {
    const isActive =
      pathname === href ||
      pressedBrand === href;

    return `w-fit text-white transition-all duration-200 ease-out ${
      isActive
        ? "font-bold underline underline-offset-4"
        : "font-normal no-underline"
    }`;
  };


  // ==================================================
  // DESKTOP ACTIVE LINK
  // ==================================================

  const isDesktopLinkActive = (
    href: string
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };


  // ==================================================
  // FIND ACTIVE DESKTOP LINK
  // ==================================================

  const getActiveDesktopHref = () => {
    if (pathname === "/") {
      return "/";
    }

    // Products is NOT a page.
    // It only opens the dropdown.

    if (pathname.startsWith("/blog")) {
      return "/blog";
    }

    if (
      pathname.startsWith("/service-center")
    ) {
      return "/service-center";
    }

    if (pathname.startsWith("/contact")) {
      return "/contact";
    }

    return null;
  };


  // ==================================================
  // UPDATE UNDERLINE POSITION
  // ==================================================

  useEffect(() => {
    const updateUnderline = () => {
      const activeHref =
        getActiveDesktopHref();

      if (!activeHref) {
        setUnderlineReady(false);
        return;
      }

      const activeLink =
        desktopLinkRefs.current[
          activeHref
        ];

      const nav =
        desktopNavRef.current;

      if (!activeLink || !nav) {
        return;
      }

      const linkRect =
        activeLink.getBoundingClientRect();

      const navRect =
        nav.getBoundingClientRect();

      setUnderlineStyle({
        left:
          linkRect.left -
          navRect.left,
        width:
          linkRect.width,
      });

      setUnderlineReady(true);
    };

    requestAnimationFrame(
      updateUnderline
    );

    window.addEventListener(
      "resize",
      updateUnderline
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateUnderline
      );
    };
  }, [pathname]);


  // ==================================================
  // RENDER
  // ==================================================

  return (
    <nav className="w-full">

      {/* ================================================== */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================== */}

      <div className="hidden md:block">

        {/* TOP NAVBAR */}

        <div className="w-full bg-[#168BC7]">

          <div className="container-custom flex items-center px-10">

            <div className="flex items-center gap-3 h-[40px]">

              <Image
                  src="/images/home/logo-desktop.png"
                  alt="Miller Indonesia"
                  width={1920}
                  height={48}
                  className="h-auto w-[145px]"
                  priority
              />

              <span className="h-6 w-[1px] bg-white/80" />

              <span className="b2 text-white">
                Distributor Miller Welding Machine Hypertherm Plasma Cutting
              </span>

            </div>

          </div>

        </div>


        {/* BOTTOM NAVBAR */}

        <div className="w-full bg-[#0C182A]">

          <div
            ref={desktopNavRef}
            className="container-custom relative flex items-center gap-12 px-15 h-[40px]"
          >

            {/* HOME */}

            <Link
              href="/"
              ref={(el) => {
                desktopLinkRefs.current["/"] =
                  el;
              }}
              onClick={() => {
                setIsProductsOpen(false);
              }}
              className={`text-white transition-all duration-200 ${
                isDesktopLinkActive("/")
                  ? "font-bold"
                  : "font-normal"
              }`}
              aria-label="Home"
            >

              <House
                size={20}
                strokeWidth={3}
                className="text-white"
              />

            </Link>


            {/* PRODUCTS */}

            <button
              type="button"
              onClick={() => {
                setIsProductsOpen(
                  (open) => !open
                );
              }}
              className="text-white transition-all duration-200 b1"
              aria-expanded={
                isProductsOpen
              }
            >
              Products
            </button>


            {/* BLOG */}

            <Link
              href="/blog"
              ref={(el) => {
                desktopLinkRefs.current[
                  "/blog"
                ] = el;
              }}
              onClick={() => {
                setIsProductsOpen(false);
              }}
              className={`text-white b1 transition-all duration-200 ${
                isDesktopLinkActive(
                  "/blog"
                )
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              Blog
            </Link>


            {/* SERVICE */}

            <Link
              href="/service-center"
              ref={(el) => {
                desktopLinkRefs.current[
                  "/service-center"
                ] = el;
              }}
              onClick={() => {
                setIsProductsOpen(false);
              }}
              className={`text-white b1 transition-all duration-200 ${
                isDesktopLinkActive(
                  "/service-center"
                )
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              Service
            </Link>


            {/* CONTACT */}

            <Link
              href="/contact"
              ref={(el) => {
                desktopLinkRefs.current[
                  "/contact"
                ] = el;
              }}
              onClick={() => {
                setIsProductsOpen(false);
              }}
              className={`text-white b1 transition-all duration-200 ${
                isDesktopLinkActive(
                  "/contact"
                )
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              Contact us
            </Link>


            {/* ================================================== */}
            {/* ANIMATED UNDERLINE */}
            {/* ================================================== */}

            <span
              className={`pointer-events-none absolute bottom-0 h-[2px] bg-white transition-[left,width,opacity] duration-300 ease-out ${
                underlineReady
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={{
                left:
                  underlineStyle.left,
                width:
                  underlineStyle.width,
              }}
            />

          </div>


          {/* ================================================== */}
          {/* DESKTOP PRODUCT DROPDOWN */}
          {/* ================================================== */}

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              isProductsOpen
                ? "max-h-[250px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <div className="container-custom grid grid-cols-2 gap-x-32 px-15 py-6">

              {/* COLUMN 1 */}

              <div className="flex flex-col gap-5">

                {PRODUCT_BRANDS
                  .slice(0, 5)
                  .map((brand) => {

                    const isActive =
                      pathname ===
                        brand.href ||
                      pressedBrand ===
                        brand.href;

                    return (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        onClick={() => {
                          setPressedBrand(
                            null
                          );

                          setIsProductsOpen(
                            false
                          );
                        }}
                        className={`w-fit text-white transition-all duration-200 ${
                          isActive
                            ? "font-bold underline underline-offset-4"
                            : "font-normal"
                        }`}
                      >
                        {brand.label}
                      </Link>
                    );
                  })}

              </div>


              {/* COLUMN 2 */}

              <div className="flex flex-col gap-5">

                {PRODUCT_BRANDS
                  .slice(5, 10)
                  .map((brand) => {

                    const isActive =
                      pathname ===
                        brand.href ||
                      pressedBrand ===
                        brand.href;

                    return (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        onClick={() => {
                          setPressedBrand(
                            null
                          );

                          setIsProductsOpen(
                            false
                          );
                        }}
                        className={`w-fit text-white transition-all duration-200 ${
                          isActive
                            ? "font-bold underline underline-offset-4"
                            : "font-normal"
                        }`}
                      >
                        {brand.label}
                      </Link>
                    );
                  })}

              </div>

            </div>

          </div>

        </div>

      </div>


    {/* ================================================== */}
    {/* MOBILE NAVBAR */}
    {/* ================================================== */}

    <div className="relative z-60 md:hidden">

    <div 
    className="w-full bg-[#168BC7]"
    style={{
      paddingTop: "env(safe-area-inset-top)",
    }}
    >

      <div className="container-custom px-6">

        <div className="flex h-[72px] items-center gap-3">

          {/* LOGO */}

          <Image
            src="/images/home/logo-mobile.png"
            alt="Miller Indonesia"
            width={1920}
            height={48}
            className="h-auto w-[105px] shrink-0"
            priority
          />

          {/* DIVIDER */}

          <span className="h-10 w-px shrink-0 bg-white/80" />

          {/* DESCRIPTION */}

          <span className="b2 max-w-[150px] text-white leading-[1.25]">
            Distributor Miller Welding
            Machine &amp; Hypertherm
            Plasma Cutting
          </span>

        </div>

      </div>

    </div>


      {/* ================================================== */}
      {/* HAMBURGER */}
      {/* ================================================== */}

      <button
        type="button"
        onClick={() => {
          setIsMenuOpen(
            (open) => !open
          );
        }}
        className="absolute right-3 top-1/2 z-60 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-transparent"
        aria-label={
          isMenuOpen
            ? "Close menu"
            : "Open menu"
        }
        aria-expanded={isMenuOpen}
      >

        <span
          className="relative block h-6 w-6"
          aria-hidden
        >

          {/* TOP */}

          <span
            className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isMenuOpen
                ? "top-2.75 rotate-45"
                : "top-1"
            }`}
          />


          {/* MIDDLE */}

          <span
            className={`absolute left-0 top-2.75 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isMenuOpen
                ? "scale-x-0 opacity-0"
                : "opacity-100"
            }`}
          />


          {/* BOTTOM */}

          <span
            className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isMenuOpen
                ? "top-2.75 -rotate-45"
                : "top-4.5"
            }`}
          />

        </span>

      </button>

      </div>


      {/* ================================================== */}
      {/* MOBILE MENU */}
      {/* ================================================== */}

      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-[#0C182A] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >

        <div className="px-10 pt-32 h4 font-normal">

          {/* HOME */}

          <div className="border-b border-white py-2">

            <Link
              href="/"
              onClick={() => {
                setIsMenuOpen(false);
                setIsProductsOpen(false);
                setPressedBrand(null);
              }}
              onPointerDown={() =>
                setPressedLink("/")
              }
              onPointerUp={() =>
                setPressedLink(null)
              }
              onPointerCancel={() =>
                setPressedLink(null)
              }
              onPointerLeave={() =>
                setPressedLink(null)
              }
              className={menuItemClass("/")}
            >
              Home
            </Link>

          </div>


          {/* PRODUCTS */}

          <div className="border-b border-white">

            <button
              type="button"
              onClick={() => {
                setIsProductsOpen(
                  (open) => !open
                );
              }}
              className="flex w-full items-center justify-between px-4 py-6 text-white"
              aria-expanded={
                isProductsOpen
              }
            >

              <span>
                Products
              </span>

              <ChevronUp
                size={18}
                className={`transition-transform duration-300 ${
                  isProductsOpen
                    ? "rotate-0"
                    : "rotate-180"
                }`}
              />

            </button>


            {/* PRODUCT BRANDS */}

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isProductsOpen
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <div
                  className={`grid grid-cols-2 gap-y-7 pb-7 pl-12 transition-all duration-300 ${
                    isProductsOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-3 opacity-0"
                  }`}
                >

                  {PRODUCT_BRANDS.map(
                    (brand) => (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        className={brandClass(
                          brand.href
                        )}
                        onClick={() => {
                          // Reset everything
                          // before navigating
                          setPressedBrand(
                            null
                          );

                          setIsProductsOpen(
                            false
                          );

                          setIsMenuOpen(
                            false
                          );
                        }}
                        onPointerDown={() =>
                          setPressedBrand(
                            brand.href
                          )
                        }
                        onPointerUp={() =>
                          setPressedBrand(
                            null
                          )
                        }
                        onPointerCancel={() =>
                          setPressedBrand(
                            null
                          )
                        }
                        onPointerLeave={() =>
                          setPressedBrand(
                            null
                          )
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


          {/* BLOG */}

          <div className="border-b border-white py-2">

            <Link
              href="/blog"
              onClick={() => {
                setIsMenuOpen(false);
                setIsProductsOpen(false);
                setPressedBrand(null);
              }}
              onPointerDown={() =>
                setPressedLink("/blog")
              }
              onPointerUp={() =>
                setPressedLink(null)
              }
              onPointerCancel={() =>
                setPressedLink(null)
              }
              onPointerLeave={() =>
                setPressedLink(null)
              }
              className={menuItemClass(
                "/blog"
              )}
            >
              Blog
            </Link>

          </div>


          {/* SERVICE */}

          <div className="border-b border-white py-2">

            <Link
              href="/service-center"
              onClick={() => {
                setIsMenuOpen(false);
                setIsProductsOpen(false);
                setPressedBrand(null);
              }}
              onPointerDown={() =>
                setPressedLink(
                  "/service-center"
                )
              }
              onPointerUp={() =>
                setPressedLink(null)
              }
              onPointerCancel={() =>
                setPressedLink(null)
              }
              onPointerLeave={() =>
                setPressedLink(null)
              }
              className={menuItemClass(
                "/service-center"
              )}
            >
              Service
            </Link>

          </div>


          {/* CONTACT */}

          <div className="py-2">

            <Link
              href="/contact"
              onClick={() => {
                setIsMenuOpen(false);
                setIsProductsOpen(false);
                setPressedBrand(null);
              }}
              onPointerDown={() =>
                setPressedLink(
                  "/contact"
                )
              }
              onPointerUp={() =>
                setPressedLink(null)
              }
              onPointerCancel={() =>
                setPressedLink(null)
              }
              onPointerLeave={() =>
                setPressedLink(null)
              }
              className={menuItemClass(
                "/contact"
              )}
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}