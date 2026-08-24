import Image from "next/image";

import {
  MessageCircle,
  Mail,
  Smartphone,
} from "lucide-react";

import ContactButton from "@/components/layout/ContactButton";

export default function ContactPage() {
  return (
    <main className="bg-white">

      <section className="container-custom px-6 pt-8 md:px-15 md:pt-10">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

          <div>

            {/* MOBILE H2 */}

            <h1 className="h2 text-black pb-4 md:hidden">
              Contact Us
            </h1>


            {/* DESKTOP H1 */}

            <h1 className="hidden h1 text-black pb-4 md:block">
              Contact Us
            </h1>


            <p className="b1 font-normal mt-3 max-w-[650px] text-[#8B8B8B]">
              Konsultasikan kebutuhan Anda dengan tim ahli kami.
              Dapatkan informasi produk, demo mesin, uji coba
              peralatan, spesifikasi teknis, katalog, brosur,
              hingga penawaran harga terbaik.
            </p>

          </div>


          {/* DESKTOP CONTACT BUTTON */}

          <div className="hidden shrink-0 md:block">
            <ContactButton />
          </div>

        </div>



        {/* ================================================== */}
        {/* CONTACT INFORMATION */}
        {/* ================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-16">

          {/* WHATSAPP */}

          <div>

            <div className="flex items-center gap-2">

              <MessageCircle
                size={18}
                strokeWidth={2.5}
                className="text-black"
              />


              {/* MOBILE H4 */}

              <h2 className="h4 font-bold text-black md:hidden">
                Whatsapp
              </h2>


              {/* DESKTOP H3 */}

              <h2 className="hidden h3 font-bold text-black md:block">
                Whatsapp
              </h2>

            </div>


            <div className="b1 font-normal mt-3 pl-7 text-[#8B8B8B]">
              <p>Donny Miller</p>
              <p>+6281314223938</p>
            </div>

          </div>



          {/* EMAIL */}

          <div>

            <div className="flex items-center gap-2">

              <Mail
                size={18}
                strokeWidth={2.5}
                className="text-black"
              />


              {/* MOBILE H4 */}

              <h2 className="h4 font-bold text-black md:hidden">
                E-mail
              </h2>


              {/* DESKTOP H3 */}

              <h2 className="hidden h3 font-bold text-black md:block">
                E-mail
              </h2>

            </div>


            <p className="b1 font-normal mt-3 pl-7 text-[#8B8B8B]">
              donz.dgm@gmail.com
            </p>

          </div>



          {/* SOCIAL MEDIA */}

          <div>

            <div className="flex items-center gap-2">

              <Smartphone
                size={18}
                strokeWidth={2.5}
                className="text-black"
              />


              {/* MOBILE H4 */}

              <h2 className="h4 font-bold text-black md:hidden">
                Social Media
              </h2>


              {/* DESKTOP H3 */}

              <h2 className="hidden h3 font-bold text-black md:block">
                Social Media
              </h2>

            </div>


            <div className="mt-3 flex flex-col gap-2 pl-7">

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/millerweldingindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="b1 font-normal flex items-center gap-2 text-[#8B8B8B]"
              >
                <Image
                  src="/images/home/instagram-grey.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />

                @millerweldingindonesia
              </a>



              {/* LINKEDIN */}

              <a
                href="#"
                className="b1 font-normal flex items-center gap-2 text-[#8B8B8B]"
              >
                <Image
                  src="/images/home/linkedin-grey.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />

                @DonzMiller
              </a>

            </div>

          </div>

        </div>



        {/* ================================================== */}
        {/* MOBILE CONTACT BUTTON */}
        {/* ================================================== */}

        <div className="mt-16 md:hidden">
          <ContactButton className="w-full justify-center" />
        </div>

      </section>

    </main>
  );
}