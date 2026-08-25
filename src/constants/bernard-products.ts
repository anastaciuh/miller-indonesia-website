import type { Product } from "@/types/products";

export const BERNARD_PRODUCTS = {
  "fcaw-gmaw": {
    title: "FCAW (GMAW) Gun",

    products: [
      {
        image: "/image/bernard/fcaw-gmaw/bernard-q300.jpg",
        title: "Bernard Q300 Gun",
        description:
          "300 amp rating air cooled, wire up to 1,2 mm",
        pdf: "/pdf/bernard/fcaw-gmaw/bernard-q300.pdf",
      },

      {
        image: "/image/bernard/fcaw-gmaw/bernard-q400.jpg",
        title: "Bernard Q400 Gun",
        description:
          "400 amp rating air cooled, wire up to 1,6mm.",
        pdf: "/pdf/bernard/fcaw-gmaw/bernard-q400.pdf",
      },

    ] satisfies Product[],
  },

  "fcaw-self-shielded": {
    title: "FCAW Self Shielded Gun",

    products: [
      {
        image: "/image/bernard/fcaw-self-shielded/bernard-duraflux.jpg",
        title: "Bernard DuraFlux-Gun FLX3515AM",
        description:
          "300 amp rating, wire up to 2.0mm.",
        pdf: "/pdf/bernard/fcaw-self-shielded/bernard-duraflux.pdf",
      },

    ] satisfies Product[],
  },
};
