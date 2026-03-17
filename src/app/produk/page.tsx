"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    title: "Lapis Legit",
    description:
      "Kue lapis tradisional dengan lapisan yang lembut, aroma butter yang kaya, dan rasa manis yang pas. Dibuat dengan bahan pilihan untuk menghadirkan cita rasa klasik yang istimewa",
    price: 510000,
    image: "/images/produk/lapis_legit.png",
  },
  {
    id: "2",
    title: "Soft Cookies",
    description:
      "Cookies lembut dengan tekstur chewy dan dipenuhi choco chips premium. Dipanggang segar untuk menghadirkan perpaduan rasa manis dan buttery yang sempurna di setiap gigitan.",
    price: 15000,
    image: "/images/produk/soft_cookie.jpg",
  },
  {
    id: "3",
    title: "Nastar Set",
    description:
      "Kue nastar klasik dengan kulit yang lembut dan isian selai nanas yang manis segar. Dibuat dengan resep pilihan untuk menghadirkan rasa autentik yang selalu dirindukan.",
    price: 120000,
    image: "/images/produk/nastar_set.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) return "Selamat pagi";
  if (hour >= 11 && hour < 15) return "Selamat siang";
  if (hour >= 15 && hour < 18) return "Selamat sore";
  return "Selamat malam";
}

export default function Products() {
  const phoneNumber = "628125614541";

  function handleOrder(product: Product) {
    const greeting = getGreeting();

    const message = `
${greeting}

Saya ingin memesan produk berikut:

Produk : ${product.title}

Apakah produk ini masih tersedia?
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-koulen text-center text-4xl sm:text-5xl md:text-6xl mb-12"
      >
        Produk Unggulan Kami
      </motion.h2>

      {/* Grid Products */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-4xl p-4 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg sm:h-72 md:h-80">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Klik ikon pesan untuk order via WhatsApp
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="pt-5 flex flex-col grow">
              <div className="grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#3a0d18] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 line-clamp-4 italic">
                  {item.description}
                </p>
              </div>

              {/* Price + Button */}
              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-widest">
                    Harga
                  </span>
                  <p className="text-lg md:text-2xl font-black text-gray-900">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleOrder(item)}
                  className="h-11 w-11 md:h-14 md:w-14 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all"
                >
                  <MessageCircle size={22} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
