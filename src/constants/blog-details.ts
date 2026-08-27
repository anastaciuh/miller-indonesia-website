export type BlogContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };


export type BlogDetail = {
  slug: string;
  title: string;
  image: string;
  author: string;
  content: BlogContentBlock[];
};


export const BLOG_DETAILS: BlogDetail[] = [
  {
    slug: "blog-1",

    title:
      "Miller CST 282 vs Maxstar 280, Mana yang Cocok untuk Kebutuhan Anda?",

    image: "/images/blog/blog-1.jpg",

    author: "Dony Miller",

    content: [
      {
        type: "heading",
        text:
          "Miller CST 282 : Mesin Las Portable untuk Pekerjaan Profesional",
      },

      {
        type: "paragraph",
        text:
          "Ketika pekerjaan pengelasan membutuhkan mesin yang kuat, fleksibel, dan mudah dibawa ke berbagai lokasi, pemilihan power source menjadi salah satu faktor penting. Miller CST 282 dirancang untuk menjawab kebutuhan tersebut dengan kemampuan pengelasan hingga 280 ampere, desain yang relatif compact, serta dukungan teknologi yang membuatnya cocok digunakan di berbagai kondisi kerja.",
      },

      {
        type: "paragraph",
        text:
          "✅ Arc stabil & responsif\n✅ Hemat daya dengan teknologi inverter\n✅ Tangguh untuk penggunaan harian\n✅ Kualitas premium dari Miller",
      },

      {
        type: "image",
        src: "/images/blog/table-blog1.jpeg",
        alt: "Perbandingan Miller CST 282 dan Miller Maxstar 280",
      },

      {
        type: "heading",
        text:
          "Miller Maxstar 280: Presisi TIG dan Performa Profesional",
      },

      {
        type: "paragraph",
        text:
          "Untuk pekerjaan yang membutuhkan kontrol arc, presisi, dan hasil pengelasan yang konsisten, Miller Maxstar 280 menawarkan kemampuan DC TIG dan Stick dalam satu power source. Maxstar 280 merupakan mesin las inverter yang dirancang untuk memberikan kombinasi kemampuan tinggi dan portabilitas. Mesin ini memiliki rentang arus 1–280 A dan dapat digunakan untuk pengelasan material dengan ketebalan hingga sekitar 3/8 inch atau 9,5 mm, tergantung proses dan kondisi pengelasan.",
      },

      {
        type: "paragraph",
        text:
          "✅ Arc stabil dan presisi\n✅ Ringan, tangguh, dan mudah dibawa ke berbagai lokasi kerja\n✅ Cocok untuk kebutuhan fabrikasi, maintenance, konstruksi, hingga industri\n✅ Kualitas terpercaya dari Miller",
      },

      {
        type: "heading",
        text: "Jadi, Mana yang Lebih Cocok?",
      },

      {
        type: "paragraph",
        text:
          "Pilih Miller CST 282 jika kebutuhan utama Anda adalah mesin yang portable untuk pekerjaan lapangan, konstruksi, pipe welding, dan Stick welding, dengan fleksibilitas untuk digunakan di berbagai lokasi.\n \nPilih Miller Maxstar 280 jika pekerjaan Anda lebih banyak membutuhkan TIG welding yang presisi, terutama untuk fabrikasi, stainless steel, process pipe, serta aplikasi industri yang membutuhkan kontrol pengelasan lebih baik.\n \nTidak ada satu mesin yang paling cocok untuk seluruh jenis pekerjaan. Pemilihan mesin sebaiknya mempertimbangkan proses pengelasan, jenis material, ketebalan material, kebutuhan mobilitas, sumber listrik, serta intensitas pekerjaan.",
      },

      {
        type: "paragraph",
        text:
          "Jika Anda masih bingung menentukan mesin yang sesuai, tim kami siap membantu memberikan rekomendasi berdasarkan kebutuhan pekerjaan Anda.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
      },

    ],
  },


  {
    slug: "blog-2",

    title: "Tenaga Besar untuk Pekerjaan Heavy Duty? Kenali Miller Big Blue Series",

    image: "/images/blog/blog-2.jpg",

    author: "Dony Miller",

    content: [
      {
        type: "heading",
        text: "Miller Big Blue 600X: Tenaga Besar untuk Pekerjaan Berat",
      },

      {
        type: "paragraph",
        text:
          "Ketika pekerjaan pengelasan membutuhkan mesin yang tangguh, bertenaga, dan siap digunakan di berbagai kondisi lapangan, Miller Big Blue 600X hadir sebagai solusi diesel engine-driven welder untuk kebutuhan profesional.\n \nDengan kemampuan output pengelasan yang besar dan mesin diesel yang dirancang untuk penggunaan berat, Big Blue 600X cocok digunakan untuk pekerjaan yang membutuhkan performa stabil, daya tahan, dan mobilitas tinggi. Mesin ini dapat menjadi pilihan untuk berbagai kebutuhan mulai dari konstruksi hingga pekerjaan maintenance di area industri.",
      },

      {
        type: "paragraph",
        text:
          "✅ Output las stabil & bertenaga\n✅ Mesin diesel andal untuk penggunaan jangka panjang\n✅ Cocok untuk SMAW, GTAW, GOUGING, dan aplikasi profesional lainnya\n✅ Siap digunakan di berbagai kondisi lapangan",
      },

      {
        type: "heading",
        text: "Miller Big Blue 800 Duo Air Pak: Satu Mesin, Berbagai Solusi",
      },
      
      {
          type: "paragraph",
          text:
          "Untuk proyek yang membutuhkan lebih dari sekadar mesin las, Miller Big Blue 800 Duo Air Pak menawarkan solusi yang lebih lengkap dengan menggabungkan diesel welder, generator, dan air compressor dalam satu unit.\n \nKombinasi tersebut membuat Big Blue 800 Duo Air Pak cocok digunakan pada proyek yang membutuhkan berbagai sumber daya sekaligus. Selain menyediakan kemampuan pengelasan dengan output tinggi, mesin ini juga dapat menyediakan kebutuhan listrik dan compressed air untuk mendukung equipment lainnya di lokasi kerja.",
      },

      {
          type: "paragraph",
          text:
          "✅ Output las tinggi dan stabil untuk pekerjaan heavy duty\n✅ Air compressor terintegrasi untuk kebutuhan pneumatic tools Dll\n✅ Generator berkapasitas besar untuk suplai listrik di lapangan\n✅ Mendukung proses SMAW, GTAW, GMAW, dan Gouging\n✅ Bisa digunakan untuk 2 welder sekaligus\n✅ Cocok untuk proyek konstruksi, migas, pertambangan, shipyard, dan fabrikasi",
        },
        
        {
          type: "heading",
          text: "Big Blue Series, untuk Kebutuhan Pekerjaan Anda",
        },

        {
            type: "paragraph",
            text:
            "Baik Miller Big Blue 600X maupun Big Blue 800 Duo Air Pak dirancang untuk menjawab kebutuhan pekerjaan profesional yang membutuhkan performa, ketahanan, dan fleksibilitas di lapangan\n \nPemilihan mesin dapat disesuaikan dengan kebutuhan proyek, mulai dari jenis pekerjaan, proses pengelasan, kebutuhan daya, hingga equipment tambahan yang diperlukan di lokasi kerja.\n \nJika Anda masih bingung menentukan mesin yang sesuai, tim kami siap membantu memberikan rekomendasi berdasarkan kebutuhan pekerjaan Anda.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-3",

    title: "Kenali Hypertherm Powermax85 SYNC",

    image: "/images/blog/blog-3.jpg",

    author: "Dony Miller",

    content: [
      {
        type: "heading",
        text: "Hypertherm Powermax85 SYNC: Performa Plasma Cutting untuk Pekerjaan Profesional",
      },

      {
        type: "paragraph",
        text:
          "Ketika pekerjaan membutuhkan proses pemotongan logam yang cepat, presisi, dan dapat diandalkan, Hypertherm Powermax85 SYNC hadir sebagai plasma cutting system profesional yang dirancang untuk berbagai kebutuhan pemotongan dan gouging.\n \nDengan output hingga 85 A dan recommended cut capacity hingga 25 mm, Powermax85 SYNC cocok digunakan untuk berbagai pekerjaan fabrikasi dan pemotongan logam. Sistem ini juga memiliki severance capacity hingga 38 mm, untuk hand cutting, sehingga memberikan fleksibilitas ketika menangani material dengan ketebalan yang lebih besar.\n \nSalah satu keunggulan utama Powermax85 SYNC adalah sistem SmartSYNC® torch yang menggunakan komunikasi RFID untuk membantu melakukan pengaturan proses secara otomatis. Dengan sistem tersebut, parameter seperti amperage dan mode operasi dapat diatur secara otomatis berdasarkan cartridge yang digunakan, sehingga membantu mengurangi kesalahan dalam proses setup.",
      },

      {
        type: "paragraph",
        text:
          "✅ Output hingga 85 A untuk kebutuhan pemotongan profesional\n✅ Recommended cut capacity hingga 25 mm\n✅ Severance capacity hingga 38 mm\n✅ SmartSYNC® torch dengan pengaturan proses otomatis\n✅ Single-piece cartridge yang mempermudah penggantian    Mendukung cutting dan gouging\n✅ Cocok untuk aplikasi handheld, mechanized, hingga robotic dengan konfigurasi yang sesuai\n✅ Cocok untuk fabrikasi, maintenance, konstruksi, dan berbagai pekerjaan industri ",
      },

        {
          type: "heading",
          text: "Dapatkan Hypertherm Powermax85 SYNC!",
        },

        {
            type: "paragraph",
            text:
            "Bagi Anda yang membutuhkan plasma cutter untuk pekerjaan fabrikasi, maintenance, konstruksi, maupun kebutuhan industri lainnya, Powermax85 SYNC dapat menjadi solusi untuk mendapatkan pemotongan yang cepat, konsisten, dan efisien.\n \nJika Anda masih bingung menentukan plasma cutter yang sesuai dengan kebutuhan pekerjaan, tim kami siap membantu memberikan rekomendasi berdasarkan kebutuhan anda.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-4",

    title: "MILLER INDONESIA – Distributor Miller Welding & Hypertherm Plasma Cutting",

    image: "/images/blog/blog-4.jpg",

    author: "Dony Miller",

    content: [

      {
        type: "paragraph",
        text:
          "Miller Indonesia merupakan salah satu perusahaan yang bergerak dalam distribusi produk welding dan cutting equipment di Indonesia. Berdiri sejak 2005, dengan pengalaman melayani pasar sejak 1995, Miller Indonesia telah menyediakan berbagai solusi untuk kebutuhan industri dan proyek profesional di Indonesia.\n \nProduk dan solusi yang tersedia mencakup berbagai kebutuhan mulai dari welding equipment, plasma cutting, hingga consumables dan equipment tools untuk mendukung berbagai pekerjaan industri. Miller Indonesia telah melayani berbagai kebutuhan proyek dan perusahaan di sektor:",
      },

      {
        type: "paragraph",
        text:
          "● Oil & Gas\n● Power Plant\n● Refinery\n● Fabrication\n● Pipeline\n● Konstruksi\n● Manufaktur\n● Berbagai kebutuhan industri lainnya\n \nSelain menyediakan produk, Miller Indonesia juga didukung oleh service center yang melayani kebutuhan service, maintenance, troubleshooting, dan perbaikan mesin las Miller.",
      },

        {
          type: "heading",
          text: "Konsultasi & Demo Mesin",
        },

        {
            type: "paragraph",
            text:
              "Miller Indonesia menyediakan layanan konsultasi, dan demo dan trial mesin untuk membantu Anda menentukan equipment yang sesuai dengan kebutuhan pekerjaan.\n \nTim kami juga siap membantu memberikan informasi mengenai spesifikasi teknis, aplikasi, katalog, brosur, hingga rekomendasi equipment sesuai kebutuhan proyek",
          },

          {
            type: "heading",
            text: "Kunjungi Miller Indonesia",
          },
  

        {
            type: "paragraph",
            text:
            "Memilih equipment welding dan cutting yang tepat bukan hanya tentang produk dengan spesifikasi terbaik. Dukungan teknis, konsultasi, demo, trial, hingga layanan purna jual juga menjadi bagian penting untuk memastikan equipment bekerja secara optimal sesuai kebutuhan.\n \n📍 Jl. Rajawali Selatan Raya No. 14, RT.4/RW.6, Gn. Sahari Utara, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720\n \nKonsultasikan kebutuhan welding dan cutting Anda bersama tim kami. Kami siap membantu memberikan informasi dan solusi yang sesuai dengan kebutuhan proyek Anda.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-5",

    title: "Mesin Las Miller Bermasalah? Serahkan pada Ahlinya!",

    image: "/images/blog/blog-5.jpg",

    author: "Dony Miller",

    content: [
      {
        type: "heading",
        text: "Hypertherm Powermax85 SYNC: Performa Plasma Cutting untuk Pekerjaan Profesional",
      },

      {
        type: "paragraph",
        text:
          "Performa mesin mulai menurun? Arc tidak stabil? Atau sudah waktunya melakukan perawatan berkala?\n \nMesin las yang digunakan secara rutin membutuhkan perawatan dan pemeriksaan berkala agar performanya tetap optimal. Masalah seperti arc yang tidak stabil, output yang menurun, atau mesin yang sulit digunakan dapat mengganggu produktivitas dan pekerjaan di lapangan.\n \nMiller Indonesia menyediakan layanan service, maintenance, troubleshooting, dan perbaikan mesin las Miller dengan pemeriksaan dan penanganan sesuai kondisi mesin.\n \nLayanan Service Center:",
      },

      {
        type: "paragraph",
        text:
          "✅ Service dan maintenance mesin las\n✅ Pemeriksaan kondisi mesin secara menyeluruh\n✅ Troubleshooting dan perbaikan\n✅ Penggantian spare part sesuai kebutuhan\n✅ Penanganan mesin untuk kebutuhan industri maupun workshop",
      },

        {
          type: "heading",
          text: "Rawat Mesin, Jaga Performa",
        },

        {
            type: "paragraph",
            text:
            "Selain melakukan service ketika mesin mengalami masalah, perawatan rutin juga penting untuk menjaga performa dan memperpanjang usia penggunaan mesin.\n \nBeberapa hal sederhana yang dapat dilakukan antara lain menjaga mesin tetap bersih dari debu dan kotoran, memastikan sistem pendinginan tidak terhambat, memeriksa kabel dan koneksi secara berkala, serta melakukan maintenance sesuai kebutuhan dan intensitas penggunaan.\n \nNamun, apabila mesin mulai menunjukkan gejala seperti arc tidak stabil, output menurun, overheating, atau gangguan lainnya, sebaiknya lakukan pemeriksaan untuk mengetahui penyebabnya sebelum masalah berkembang menjadi kerusakan yang lebih serius.\n \nJangan tunggu mesin mengalami kerusakan parah. Rawat dan periksa mesin las Anda secara berkala agar tetap optimal dan siap digunakan kapan saja.\n \nKonsultasikan kondisi mesin Anda terlebih dahulu. Tim kami siap membantu memberikan informasi mengenai service, maintenance, dan penanganan yang sesuai dengan kebutuhan mesin Anda.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-6",

    title: "Kesalahan Umum Saat Menggunakan Mesin Las dan Tips untuk Hasil Pengelasan Optimal ",

    image: "/images/blog/blog-6.jpg",

    author: "Dony Miller",

    content: [
        {
          type: "paragraph",
          text:
            "Dalam pekerjaan welding, hasil yang optimal tidak hanya ditentukan oleh kemampuan mesin. Setting parameter, pemilihan consumable, kondisi equipment, hingga teknik operator memiliki pengaruh besar terhadap kualitas hasil pengelasan. Berikut beberapa kesalahan yang umum terjadi di lapangan dan tips untuk menghindarinya.",
        },

      {
        type: "heading",
        text: "1. Mengabaikan Duty Cycle Mesin",
      },

      {
        type: "paragraph",
        text:
          "Salah satu kesalahan yang sering terjadi adalah menggunakan mesin secara terus-menerus tanpa memperhatikan duty cycle pada kondisi output tertentu. Penggunaan di atas kemampuan duty cycle dapat menyebabkan thermal protection aktif atau meningkatkan beban pada komponen mesin.\n \n 💡Tips:\nSelalu sesuaikan output dan durasi pengelasan dengan duty cycle yang tercantum pada spesifikasi mesin. Untuk pekerjaan dengan intensitas tinggi, pilih power source yang memiliki kapasitas sesuai dengan kebutuhan produksi.",
      },

      {
        type: "heading",
        text: "2. Setting Parameter Tidak Sesuai Material dan Proses ",
      },

      {
        type: "paragraph",
        text:
          "Pengaturan amperage, voltage, wire speed, maupun parameter lainnya harus disesuaikan dengan  jenis material, ketebalan, proses welding, dan consumable  yang digunakan.\n \n 💡Tips:\nGunakan parameter rekomendasi dari manufacturer sebagai starting point, kemudian lakukan adjustment berdasarkan material dan kondisi aktual pekerjaan.",
      },

      {
        type: "heading",
        text: "3. Mengabaikan Kondisi Consumable ",
      },

      {
        type: "paragraph",
        text:
          "Consumable yang sudah aus, rusak, terkontaminasi, atau tidak sesuai dapat memengaruhi stabilitas arc dan kualitas hasil welding. Pada proses tertentu, kondisi contact tip, nozzle, tungsten, electrode, maupun wire sangat berpengaruh terhadap performa proses.\n \n 💡Tips:\nLakukan pemeriksaan consumable secara berkala dan gunakan consumable yang sesuai dengan proses, material, serta spesifikasi equipment.",
      },
      
      {
          type: "heading",
          text: "4. Mengabaikan Kebersihan Equipment ",
        },
        
        {
            type: "paragraph",
            text:
            "Debu, kotoran, dan material asing yang menumpuk pada equipment dapat mengganggu sistem pendinginan dan mempercepat penurunan performa komponen.\n \nHal ini terutama perlu diperhatikan pada equipment yang digunakan di lingkungan  workshop, konstruksi, pertambangan, dan area industri .\n \n 💡Tips:\nBersihkan equipment secara berkala dan pastikan ventilation serta cooling system tidak terhalang. Interval pembersihan dapat disesuaikan dengan kondisi lingkungan dan intensitas penggunaan.",
        },
        
        {
          type: "heading",
          text: "5. Mengabaikan Maintenance Berkala ",
        },
  
        {
          type: "paragraph",
          text:
            "Maintenance sering baru dilakukan setelah muncul masalah. Padahal, pemeriksaan berkala dapat membantu menemukan potensi masalah sebelum berkembang menjadi kerusakan yang lebih serius.\n \n 💡Tips:\nBuat jadwal preventive maintenance berdasarkan  intensitas penggunaan, kondisi lingkungan, dan rekomendasi manufacturer . Dokumentasikan hasil pemeriksaan agar kondisi equipment dapat dipantau dari waktu ke waktu.",
        },

        {
            type: "heading",
            text: "Jaga Equipment, Jaga Produktivitas ",
        },


        {
            type: "paragraph",
            text:
            "Dengan memahami karakteristik equipment, menggunakan parameter yang tepat, dan melakukan maintenance secara berkala, berbagai masalah yang umum terjadi di lapangan dapat diminimalkan.\n \nJika performa mesin mulai berubah, arc tidak stabil, atau membutuhkan pemeriksaan dan maintenance,  Miller Indonesia  siap membantu melakukan troubleshooting dan penanganan equipment sesuai kebutuhan.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-7",

    title: "Cari Mesin Second yang Aman dan Terpercaya? Miller Indonesia Solusinya",

    image: "/images/blog/blog-7.jpg",

    author: "Dony Miller",

    content: [

      {
        type: "paragraph",
        text:
          "Membeli mesin welding second dapat menjadi alternatif untuk mendapatkan equipment berkualitas dengan investasi yang lebih efisien. Namun, kondisi dan riwayat penggunaan mesin perlu diperhatikan agar equipment tetap dapat bekerja sesuai kebutuhan.\n \nMembeli dari distributor terpercaya memberikan beberapa keuntungan, seperti:",
      },

      {
        type: "paragraph",
        text:
          "✅ Kondisi mesin lebih terjamin & equipment dapat diperiksa terlebih dahulu sebelum ditawarkan. \n✅ Pemeriksaan dan testing, yang dapat membantu memastikan fungsi dan performa mesin sesuai kondisi yang dijelaskan. \n✅ Informasi lebih jelas \n✅ Dukungan teknis, tersedia konsultasi untuk membantu menentukan mesin yang sesuai dengan kebutuhan pekerjaan. ",
      },

        {
            type: "paragraph",
            text:
            "Dengan memilih mesin second dari sumber yang terpercaya, Anda dapat memperoleh equipment yang sesuai kebutuhan dengan risiko pembelian yang lebih rendah.\n \nMiller Indonesia menyediakan pilihan equipment second serta dukungan konsultasi untuk membantu Anda menemukan mesin yang sesuai dengan kebutuhan pekerjaan.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},

{
    slug: "blog-8",

    title: "FAQ Garansi & Service Equipment",

    image: "/images/blog/blog-8.jpg",

    author: "Dony Miller",

    content: [

      {
        type: "paragraph",
        text:
          "Setelah membeli equipment, dukungan service dan maintenance menjadi bagian penting untuk menjaga performa mesin tetap optimal. Miller Indonesia menyediakan layanan service, maintenance, troubleshooting, dan perbaikan equipment yang dapat ditangani oleh tim service center.",
      },

      {
        type: "heading",
        text: "Apakah equipment yang diservis harus produk Miller?",
      },

      {
        type: "paragraph",
        text:
          "✔️ Tidak selalu. Miller Indonesia dapat membantu menangani kebutuhan service dan troubleshooting berbagai welding equipment dan equipment terkait, sesuai dengan jenis mesin, kondisi kerusakan, dan kemampuan penanganan service center.",
      },

      {
        type: "heading",
        text: "Apa saja layanan yang tersedia di Service Center Miller Indonesia?",
      },

      {
        type: "paragraph",
        text:
          "✔️ Miller Indonesia menyediakan layanan service, maintenance, troubleshooting, dan perbaikan equipment untuk membantu menjaga performa mesin tetap optimal.",
      },

      {
        type: "heading",
        text: "Equipment apa saja yang dapat ditangani?",
      },

      {
        type: "paragraph",
        text:
          "✔️ Service Center Miller Indonesia dapat menangani berbagai welding equipment dan equipment terkait, sesuai dengan jenis, model, kondisi mesin, serta kemampuan teknis yang tersedia.",
      },
      
      {
        type: "heading",
        text: "Kapan equipment sebaiknya dibawa untuk diperiksa?",
      },

      {
        type: "paragraph",
        text:
          "✔️ Tidak perlu menunggu mesin mengalami kerusakan total. Jika mulai muncul gejala seperti arc tidak stabil, output berubah, overheating, suara atau kondisi mesin tidak normal, sebaiknya segera lakukan pemeriksaan untuk mengetahui penyebabnya.",
      },

      {
        type: "heading",
        text: "Apakah bisa konsultasi terlebih dahulu sebelum melakukan service?",
      },

      {
        type: "paragraph",
        text:
          "✔️ Bisa. Customer dapat menghubungi tim Miller Indonesia terlebih dahulu untuk mengkonsultasikan kondisi dan kebutuhan equipment sebelum menentukan langkah service atau maintenance.",
      },

        {
            type: "paragraph",
            text:
            "Sampaikan brand, tipe/model, serial number, serta kendala yang terjadi kepada tim kami agar dapat membantu menentukan langkah pemeriksaan yang sesuai. Konsultasikan kebutuhan service dan maintenance equipment Anda bersama tim Miller Indonesia.\n \n📩 Hubungi kami untuk informasi harga, spesifikasi lengkap, dan penawaran terbaik.\n \n📞Dony Miller\n📱 +6281314223938",
        },
    ],
},
];