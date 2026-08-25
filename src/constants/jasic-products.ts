import type { Product } from "@/types/products";

export const JASIC_PRODUCTS = {
  "smaw-stick": {
    title: "SMAW (STICK)",

    products: [
      {
        image: "/image/jasic/smaw-stick/arc-400.jpg",
        title: "ARC 400 JET 20",
        description:
          "270 Amp Inverter, 1/3 phase 230 / 380V",
        pdf: "/pdf/jasic/smaw-stick/arc-400.pdf",
      },

      {
        image: "/image/jasic/smaw-stick/arc-400-500.jpg",
        title: "ARC 400/500",
        description:
          "400 Amp, Inverter, 2 phase 380V with cellulosic capability",
        pdf: "/pdf/jasic/smaw-stick/arc-400-500.pdf",
      },

      {
        image: "/image/jasic/smaw-stick/arc-200.jpg",
        title: "ARC 200",
        description:
          "50/60 Hz Input Power Source, DC Output",
        pdf: "/pdf/jasic/smaw-stick/arc-200.pdf",
      },

    ] satisfies Product[],
  },

"tig-gtaw": {
    title: "TIG (GTAW)",

    products: [
      {
        image: "/image/jasic/tig-gtaw/tig-200.jpg",
        title: "TIG 200 PFC",
        description:
          "200 Amp, 1 ph 230V, HF TIG with pulse",
        pdf: "/pdf/jasic/tig-gtaw/tig-200.pdf",
      },

      {
        image: "/image/jasic/tig-gtaw/tig-315.jpg",
        title: "TIG 315 AC/DC",
        description:
          "300 Amp, 1 ph 380V, AC/DC TIG HF with pulse",
        pdf: "/pdf/jasic/tig-gtaw/tig-315.pdf",
      },

    ] satisfies Product[],
  },

  "mig-gmaw": {
    title: "MIG (GMAW)",

    products: [
      {
        image: "/image/jasic/mig-gmaw/mig-350.jpg",
        title: "MIG 350",
        description:
          "350 Amp. 3 ph 380V. MIG 1,0 – 1,2 mm wire",
        pdf: "/pdf/jasic/mig-gmaw/mig-350.pdf",
      },

      {
        image: "/image/jasic/mig-gmaw/mig-500.jpg",
        title: "MIG 500",
        description:
          "500 Amp. 3 ph 380V. MIG 1,2 – 1,6 mm wire",
        pdf: "/pdf/jasic/mig-gmaw/mig-500.pdf",
      },

      {
        image: "/image/jasic/mig-gmaw/max-20.jpg",
        title: "MAX 20- MIG 350/500",
        description:
          "High Output Power, Stable Arc",
        pdf: "/pdf/jasic/mig-gmaw/max-20.pdf",
      },

    ] satisfies Product[],
  },

  "plasma-cutting": {
    title: "Plasma Cutting",

    products: [
      {
        image: "/image/jasic/plasma-cutting/max-20-cut.jpg",
        title: "MAX 20- CUT 160",
        description:
          "160 Amp rating, 380V 3 phase cutting capacity up to 60 mm",
        pdf: "/pdf/jasic/plasma-cutting/max-20-cut.pdf",
      },

    ] satisfies Product[],
  },

  "saw-series": {
    title: "SAW Series",

    products: [
      {
        image: "/image/jasic/saw-series/max-20-mz.jpg",
        title: "MAX 20-MZ 1000",
        description:
          "1000A output, 415V, 3-phase",
        pdf: "/pdf/jasic/saw-series/max-20-mz.pdf",
      },

    ] satisfies Product[],
  },

  "laser-3in1": {
    title: "Laser 3 IN 1 Welding/Cutting/Cleaning",

    products: [
      {
        image: "/image/jasic/laser-3in1/ls-20000f.jpg",
        title: "LS-20000F",
        description:
          "2000 W laser power, AC230V 1 phase welding, cutting & cleaning machine",
        pdf: "/pdf/jasic/laser-3in1/ls-20000f.pdf",
      },

    ] satisfies Product[],
  },
};
