"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react"; // Pastikan package name sesuai, biasanya 'framer-motion'
import { useEffect, useState, useRef } from "react";

const highlights = [
  "DIPANGGANG SETIAP HARI",
  "MANIS & LEMBUT",
  "RENYAH & KEEMASAN",
  "HANGAT & LEZAT",
  "FRESH DARI OVEN",
  "TEKSTUR LEMBUT AWAN",
];

function Counter() {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  useEffect(() => {
    const controls = animate(count, 4, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count]);

  return <span>{display}+</span>;
}

export default function AboutView() {
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full -top-21 h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/tiramisu2.jpg"
          alt="Bakery Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white text-6xl md:text-9xl font-extrabold tracking-widest font-koulen"
        >
          TENTANG KAMI
        </motion.h1>

        {/* Scroll Indicator */}
        <div
          className="absolute left-10 bottom-16 text-white flex flex-col items-center gap-3 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="w-8 h-12 border border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              whileHover={{ scale: 1.2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-center leading-relaxed">
            Scroll <br /> The Page
          </p>
        </div>

        <div className="absolute right-10 bottom-16 text-white text-sm tracking-widest uppercase">
          Beranda → Tentang Kami
        </div>
      </section>

      {/* MARQUEE HIGHLIGHTS WITH ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative -top-21 w-full py-8 bg-[#f8f3f0] overflow-hidden border-y border-gray-200 flex"
      >
        <motion.div
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          // Memperlambat saat di-hover
          whileHover={{ transition: { duration: 60 } }}
        >
          {[...highlights, ...highlights].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, color: "#ea580c" }} // Orange-600 on hover
              className="text-[#6d0f1b] font-bold text-2xl tracking-[0.2em] uppercase flex items-center gap-20 transition-colors duration-300 cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* ABOUT CONTENT SECTION */}
      <section
        className="pb-20 pt-10 relative overflow-hidden font-poppins"
        ref={aboutSectionRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 font-koulen">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-orange-600 uppercase"
            >
              <span className="w-2 h-2 bg-red-500 inline-block"></span>
              Kisah Kami
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mt-4 text-gray-900"
            >
              “Sentuhan Kasih dalam Setiap
              <br />
              <span className="text-orange-600">Kelezatan yang Sempurna.</span>”
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-yellow-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>

              <div className="relative z-10">
                <Image
                  src="/images/about.png"
                  alt="Tentang Nonoi Bake"
                  width={600}
                  height={500}
                  className="w-full rounded-4xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-50 block"
                >
                  <p className="text-orange-600 font-black text-4xl leading-none">
                    <Counter />
                  </p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                    Tahun <br /> Berkarya
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-gray-700">
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900">
                  Bagi kami, membuat kue adalah seni menghadirkan kebahagiaan di
                  setiap meja makan.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  Nonoi hadir untuk mendefinisikan ulang cita rasa kue premium.
                  Dengan dedikasi tinggi, kami mengkurasi bahan-bahan terbaik
                  dan menjaga teknik pembuatan tradisional demi mempertahankan
                  keaslian rasa yang tak terlupakan.
                </p>

                <p className="text-lg leading-relaxed text-gray-600 border-l-4 border-orange-200 pl-4 italic">
                  Setiap produk yang keluar dari dapur kami merupakan hasil dari
                  ketelitian, pengalaman, dan gairah kami dalam dunia baking.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/628125614541"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-orange-600 text-white py-4 px-10 rounded-2xl hover:bg-orange-700 transition duration-300 font-bold shadow-lg shadow-orange-100 group"
                >
                  Hubungi Kami
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
