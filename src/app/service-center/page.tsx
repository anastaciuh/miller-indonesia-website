import type { Metadata } from "next";

import {
  Clock3,
  Wrench,
} from "lucide-react";

import Carousel from "@/components/layout/Carousel";

export const metadata: Metadata = {
  title: "Service Centre",

  description:
    "Service Centre Miller Welding Indonesia melayani servis, maintenance, troubleshooting, perbaikan mesin las Miller, pemeriksaan menyeluruh, dan penggantian sparepart sesuai kebutuhan.",

  alternates: {
     canonical: "/service-center",
  },

  openGraph: {
    title: "Service Centre | Miller Welding Indonesia",
    description:
      "Service Centre Miller Welding Indonesia melayani servis, maintenance, troubleshooting, perbaikan mesin las Miller, pemeriksaan menyeluruh, dan penggantian sparepart sesuai kebutuhan.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Service Centre | Miller Welding Indonesia",
    description:
      "Service Centre Miller Welding Indonesia melayani servis, maintenance, troubleshooting, perbaikan mesin las Miller, pemeriksaan menyeluruh, dan penggantian sparepart sesuai kebutuhan.",
  },
};

const SERVICE_IMAGES = [
  {
    mobile: "/images/home/mobile-1.jpg",
    desktop: "/images/home/desktop-1.jpg",
  },

  {
    mobile: "/images/home/mobile-2.jpg",
    desktop: "/images/home/desktop-2.jpg",
  },

  {
    mobile: "/images/home/mobile-3.jpg",
    desktop: "/images/home/desktop-3.jpg",
  },

  {
    mobile: "/images/home/mobile-4.jpg",
    desktop: "/images/home/desktop-4.jpg",
  },
];

export default function ServiceCenterPage() {
  return (
    <main className="bg-white">
      <div className="container-custom">
        {/* ================================================== */}
        {/* SERVICE CAROUSEL */}
        {/* ================================================== */}

        <Carousel images={SERVICE_IMAGES} />

        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <section className="px-6 pt-8 md:px-15 md:pt-10">
          {/* ================================================== */}
          {/* SERVICE CENTRE */}
          {/* ================================================== */}

          <div>
            {/* MOBILE H2 */}

            <h1 className="page-title text-black">
              Service Centre
            </h1>

            {/* DESCRIPTION */}

            <p className="b1 mt-3 max-w-[850px] font-normal text-[#8B8B8B]">
              Mesin Las Miller Bermasalah? Performa mesin mulai
              menurun? Arc tidak stabil? Atau sudah waktunya
              perawatan berkala? Serahkan pada Ahlinya! Kami
              melayani service, maintenance, troubleshooting,
              perbaikan mesin las Miller, dan menyediakan sparepart dengan penanganan
              profesional untuk mengembalikan performa mesin
              Anda agar bekerja maksimal.
            </p>
          </div>

          {/* ================================================== */}
          {/* SERVICE INFORMATION */}
          {/* ================================================== */}

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:gap-16">
            {/* ================================================== */}
            {/* JASA SERVIS */}
            {/* ================================================== */}

            <div>
              <div className="flex items-center gap-2">
                <Wrench
                  size={18}
                  strokeWidth={2.5}
                  className="text-black"
                />

                {/* MOBILE H4 */}

                <h2 className="h4 font-bold text-black md:hidden">
                  Jasa Servis:
                </h2>

                {/* DESKTOP H3 */}

                <h2 className="hidden h3 font-bold text-black md:block">
                  Jasa Servis:
                </h2>
              </div>

              <ul className="b1 mt-3 list-disc pl-8 font-normal text-[#8B8B8B]">
                <li>
                  Service profesional
                </li>

                <li>
                  Pemeriksaan menyeluruh
                </li>

                <li>
                  Penggantian sparepart sesuai kebutuhan
                </li>
              </ul>
            </div>

            {/* ================================================== */}
            {/* JAM OPERASIONAL */}
            {/* ================================================== */}

            <div>
              <div className="flex items-center gap-2">
                <Clock3
                  size={18}
                  strokeWidth={2.5}
                  className="text-black"
                />

                {/* MOBILE H4 */}

                <h2 className="h4 font-bold text-black md:hidden">
                  Jam Operasional:
                </h2>

                {/* DESKTOP H3 */}

                <h2 className="hidden h3 font-bold text-black md:block">
                  Jam Operasional:
                </h2>
              </div>

              <div className="b1 mt-3 pl-7 font-normal text-[#8B8B8B]">
                <p>
                  Senin - Jumat
                </p>

                <p>
                  08:00 - 16:30 WIB
                </p>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* MAP */}
          {/* ================================================== */}

          <div className="mt-10 md:mt-14">
            {/* MOBILE H3 */}

            <h2 className="h3 font-bold text-black md:hidden">
              Lihat di Peta
            </h2>

            {/* DESKTOP H2 */}

            <h2 className="hidden h2 font-bold text-black md:block">
              Lihat di Peta
            </h2>

            {/* MOBILE B1 */}

            <p className="b1 mt-3 font-normal text-[#8B8B8B] md:hidden">
              PT. Duta Graha Miller, Jl. Rajawali Selatan Raya No.1 4, RT.4/RW.6, Gn. Sahari Utara, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720
            </p>

            {/* DESKTOP B1 */}

            <p className="hidden b1 mt-3 font-normal text-[#8B8B8B] md:block">
              PT. Duta Graha Miller, Jl. Rajawali Selatan Raya No.1 4, RT.4/RW.6, Gn. Sahari Utara, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720
            </p>

            {/* ================================================== */}
            {/* GOOGLE MAPS */}
            {/* ================================================== */}

            <div className="mt-6 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps?q=PT+Duta+Graha+Miller&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[260px] w-full border-0 md:h-[380px]"
                title="PT Duta Graha Miller"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}