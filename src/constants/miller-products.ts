import type { Product } from "@/types/products";

export const MILLER_PRODUCTS = {
  "engine-driven": {
    title: "Engine Driven",

    products: [
      {
        image: "/image/miller/engine-driven/big-blue-600x.jpg",
        title: "Big Blue 600X Deutz 2011L04",
        description:
          "Output rating 600 Amp Aux Power : 4000 watts, 1 phase 120/240V",
        pdf: "/pdf/miller/engine-driven/big-blue-600x.pdf",
      },

      {
        image: "/image/miller/engine-driven/big-blue-500x.jpg",
        title: "Big Blue 500X Deutz 2011L03",
        description:
          "Output rating 500 Amp Aux Power : 4000 watts, 1 phase 120/240V",
        pdf: "/pdf/miller/engine-driven/big-blue-500x.pdf",
      },

      {
        image: "/image/miller/engine-driven/big-blue-400x.jpg",
        title: "Big Blue 400X Pro Arc Reach, Kubota V1505",
        description:
          "Output rating 400 Amp Aux power : 10.000 watts, 1 phase 120/240V",
        pdf: "/pdf/miller/engine-driven/big-blue-400x.pdf",
      },

      {
        image: "/image/miller/engine-driven/big-blue-800x.jpg",
        title: "Big Blue 800X Duo Pro Airpak, Deutz TD2011L04i",
        description:
          "Output rating : 400 Amp each side Aux power : 15.000 watts, 1 phase, 120/240V",
        pdf: "/pdf/miller/engine-driven/big-blue-800x.pdf",
      },

      {
        image: "/image/miller/engine-driven/big-blue-450duo.jpg",
        title: "Big Blue 450 Duo CST, Mitsubishi S4L2, Dual Operator",
        description:
          "Output rating : 280 Amp each side Aux power : 10.000 watts, 1 phase, 120/240V",
        pdf: "/pdf/miller/engine-driven/big-blue-450duo.pdf",
      },
    ] satisfies Product[],
  },

  "induction-heating": {
    title: "Induction Heating",

    products: [
      {
        image: "/image/miller/induction-heating/proheat-35.jpg",
        title: "Proheat 35",
        description: "35KW output rating, Liquid cooled Induction heating",
        pdf: "/pdf/miller/induction-heating/proheat-35.pdf",
      },
    ] satisfies Product[],
  },

  "mig-gmaw": {
    title: "MIG (GMAW)",
    
    products: [
      {
        image: "/image/miller/mig-gmaw/deltaweld-402.jpg",
        title: "Deltaweld 402",
        description: "400 amp rating, 380/400/440V, 3 phase",
        pdf: "/pdf/miller/mig-gmaw/deltaweld-402.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/wirefeeder-20.jpg",
        title: "Wire Feeder 20 Series",
        description: "Bench type , wire up to 1,6mm",
        pdf: "/pdf/miller/mig-gmaw/wirefeeder-20.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/wirefeeder-70.jpg",
        title: "Wire Feeder 70 Series",
        description: "Bench type, wire up to 2,4mm",
        pdf: "/pdf/miller/mig-gmaw/wirefeeder-70.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/wirefeeder-suitcase-12.jpg",
        title: "Wire Feeder Suitcase 12 Arc reach",
        description: "Portable type, wire up to 1,6mm",
        pdf: "/pdf/miller/mig-gmaw/wirefeeder-suitcase-12.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/xmt-650.jpg",
        title: "XMT 650",
        description: "650 Amp rating, 380/460V, 3 phase",
        pdf: "/pdf/miller/mig-gmaw/xmt-650.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/xmt-350-os.jpg",
        title: "XMT 350 OS",
        description: "Inverter 300 amp rating, 208-575V, 1/3 phase",
        pdf: "/pdf/miller/mig-gmaw/xmt-350-os.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/xmt-400-arc.jpg",
        title: "XMT 400 Arc reach with Smartfeeder",
        description: "Inverter 300 Amp Rating with RMD",
        pdf: "/pdf/miller/mig-gmaw/xmt-400-arc.pdf",
      },

      {
        image: "/image/miller/mig-gmaw/deltaweld-350-500.jpg",
        title: "Deltaweld 350/ 500 with INTELLX wire feeder",
        description: "380/400 V, 3-phase, 50 Hz",
        pdf: "/pdf/miller/mig-gmaw/deltaweld-350-500.pdf",
      },
    ] satisfies Product[],
  },

  "stick-smaw": {
    title: "STICK (SMAW)",

    products: [
      {
        image: "/image/miller/stick-smaw/xmt-650.jpg",
        title: "XMT 650",
        description: "380/460V, 3 phase",
        pdf: "/pdf/miller/stick-smaw/xmt-650.pdf",
      },

      {
        image: "/image/miller/stick-smaw/cst-282.jpg",
        title: "CST 282",
        description: "280 Amp rating, 230 – 575V Autoline, 1/3 phase",
        pdf: "/pdf/miller/stick-smaw/cst-282.pdf",
      },

      {
        image: "/image/miller/stick-smaw/maxstar-161.jpg",
        title: "Maxstar 161 S",
        description: "Inverter 160 Amp rating, 120/240V 1 phase",
        pdf: "/pdf/miller/stick-smaw/maxstar-161.pdf",
      },

      {
        image: "/image/miller/stick-smaw/maxstar-210.jpg",
        title: "Maxstar 210STR",
        description: "Inverter, 210 Amp rating, 120-480V 1/3 Phase",
        pdf: "/pdf/miller/stick-smaw/maxstar-210.pdf",
      },
    ] satisfies Product[],
  },

  "submerged-arc": {
    title: "Submerged Arc (SAW)",

    products: [
      {
        image: "/image/miller/submerged-arc/dc-subarc-800.jpg",
        title: "DC subarc 800",
        description: "800 amp rating DC power source, 380/400/440V 3 phase",
        pdf: "/pdf/miller/submerged-arc/dc-subarc-800.pdf",
      },

      {
        image: "/image/miller/submerged-arc/dc-subarc-1250.jpg",
        title: "DC subarc 1250",
        description: "1250 amp rating DC power source 380/400/440V 3 phase",
        pdf: "/pdf/miller/submerged-arc/dc-subarc-1250.pdf",
      },

    ] satisfies Product[],
  },

  "tig-gtaw": {
    title: "TIG (GTAW)",

    products: [
      {
        image: "/image/miller/tig-gtaw/dynasty-210.jpg",
        title: "Dynasty 210 Series",
        description: "200 amp rating available in 2 models : standard and Deluxe",
        pdf: "/pdf/miller/tig-gtaw/dynasty-210.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/dynasty-280.jpg",
        title: "Dynasty 280 series",
        description: "250 amp rating available in 2 models : standard and Deluxe",
        pdf: "/pdf/miller/tig-gtaw/dynasty-280.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/dynasty-400.jpg",
        title: "Dynasty 400",
        description: "400 amp rating",
        pdf: "/pdf/miller/tig-gtaw/dynasty-400  .pdf",
      },

      {
        image: "/image/miller/tig-gtaw/dynasty-800.jpg",
        title: "Dynasty 800",
        description: "800 amp rating, water cooled",
        pdf: "/pdf/miller/tig-gtaw/dynasty-800.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/maxstar-161.jpg",
        title: "Maxstar 161 series",
        description: "160 amp rating available in Lift Arc TIG and High Frequency model",
        pdf: "/pdf/miller/tig-gtaw/maxstar-161.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/maxstar-210.jpg",
        title: "Maxstar 210 Series",
        description: "200 amp rating available in 2 models : standard and Deluxe.",
        pdf: "/pdf/miller/tig-gtaw/maxstar-210.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/maxstar-280.jpg",
        title: "Maxstar 280 series",
        description: "200 amp rating available in 2 models : standard and Deluxe.",
        pdf: "/pdf/miller/tig-gtaw/maxstar-280.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/maxstar-400.jpg",
        title: "Maxstar 400",
        description: "400 amp rating",
        pdf: "/pdf/miller/tig-gtaw/maxstar-400.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/maxstar-800.jpg",
        title: "Maxstar 800",
        description: "800 amp rating, water cooled",
        pdf: "/pdf/miller/tig-gtaw/maxstar-800.pdf",
      },

      {
        image: "/image/miller/tig-gtaw/syncrowave-300-400.jpg",
        title: "Syncrowave 300/400",
        description: "AC/DC HFTIG, 300/400 Amp",
        pdf: "/pdf/miller/tig-gtaw/syncrowave-300-400.pdf",
      },

    ] satisfies Product[],
  },
  
};
