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
  isNew?: boolean;
  rating?: number;
};

const products: Product[] = [
  {
    id: "1",
    title: "Keranjang Ramadhan for Eid by Nonoi Bake",
    description: `Containing:
• 1 Box Classic Lemon Cake
• 1 Jar Putri Salju Cookies
• 1 Jar Chocolate Chip Cookies
• Happy Eid Greeting Card`,
    price: 210000,
    image: "/images/produk/keranjang_ramadhan.jpg",
  },
  {
    id: "2",
    title: "Cookies Set",
    description: `Containing:
• 1 Jar red cookies
• 1 Jar green cookies
• 1 Jar Chocolate Chip Cookies`,
    price: 85000,
    image: "/images/produk/cookies_set.jpg",
  },
  {
    id: "3",
    title: "Lapis Legit",
    description:
      "Traditional Indonesian layered cake with rich butter flavor and soft texture.",
    price: 350000,
    image: "/images/produk/lapis_legit.jpg",
  },
  {
    id: "4",
    title: "Soft Cookies",
    description:
      "Soft baked cookies with premium chocolate chips and buttery flavor.",
    price: 95000,
    image: "/images/produk/soft_cookie.jpg",
  },
  {
    id: "5",
    title: "Kaastengel",
    description:
      "Classic Dutch-Indonesian cheese cookies with rich cheddar flavor.",
    price: 95000,
    image: "/images/produk/kaastengel.jpg",
  },
  {
    id: "6",
    title: "Nastar Set",
    description:
      "Traditional pineapple cookies with buttery crust and sweet filling.",
    price: 95000,
    image: "/images/produk/nastar_set.jpg",
  },
  {
    id: "7",
    title: "Lapis Legit Keju",
    description: "Layered butter cake with additional premium cheese topping.",
    price: 375000,
    image: "/images/produk/lapis_legit_keju.jpg",
  },
  {
    id: "8",
    title: "Egg Tart",
    description:
      "baked astri that combines crispy skin with soft and creamy vla filling",
    price: 105000,
    image: "/images/produk/egg_tart.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-koulen text-center text-6xl mb-5"
      >
        Produk Unggulan
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2.5rem] p-3 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full"
          >
            {/* Image Container dengan Zoom Effect */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg sm:h-72 md:h-80">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Klik ikon pesan untuk order via WhatsApp
                </p>
              </div>
            </div>

            {/* Konten Teks */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 whitespace-pre-line line-clamp-4 italic border-l-2 border-gray-100 pl-3">
                  {item.description}
                </p>
              </div>

              {/* Bagian Harga & Tombol */}
              <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-widest">
                    Harga
                  </span>
                  <p className="text-2xl font-black text-gray-900">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleOrder(item)}
                  className="h-14 w-14 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all group/btn"
                >
                  <MessageCircle
                    size={24}
                    className="group-hover/btn:rotate-12 transition-transform"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
