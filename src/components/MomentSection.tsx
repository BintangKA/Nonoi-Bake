"use client";

import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { motion } from "framer-motion";
import { Variants } from "motion/react";
import CircularText from "@/components/ui/CircularText";

export default function MomentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="relative py-10  bg-white ">
      <div className="absolute inset-0 bg-size-[14px_24px] bg-[linear-gradient(to_right,#ea580c10_1px,transparent_1px),linear-gradient(to_bottom,#ea580c10_1px,transparent_1px)] opacity-40" />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:items-end mb-10"
        >
          <div className="container md:text-right">
            <div className="flex items-center justify-between gap-2">
              <CircularText
                text="NONOI*BAKE*NONOI*BAKE*"
                onHover="speedUp"
                spinDuration={20}
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-koulen text-gray-900 leading-[1.1] max-w-[70%] text-right">
                Hidangan Manis yang <br />
                Membuat{" "}
                <span className="text-orange-600">
                  Setiap Perayaan Berkesan
                </span>
              </h2>
            </div>
          </div>
          <div className="max-w-2xl text-right">
            {" "}
            <p className="mt-6 text-gray-600 font-inter text-base sm:text-lg md:text-xl leading-relaxed">
              Cocok dinikmati dalam berbagai acara spesial seperti Natal, Tahun
              Baru, Idul Fitri, pernikahan, arisan, hingga perayaan ulang tahun
              bersama orang terdekat.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-4 grid-rows-10 md:grid-cols-12 md:grid-rows-6 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-4 md:col-span-3 md:row-span-4 group relative overflow-hidden rounded-2xl shadow-lg border border-orange-50"
          >
            <Image
              src="/images/cookies1.jpg"
              alt="Premium Cookies"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 col-start-3 md:col-span-3 md:row-span-2 md:col-start-4 bg-[#fdfaf6] p-6 shadow-sm border border-pink-100 rounded-2xl flex flex-col justify-between hover:bg-[#f8f3f0] transition-colors duration-300"
          >
            <div className="bg-[#6d0f1b] size-3 rounded-full self-end animate-pulse"></div>
            <div>
              <h1 className="text-5xl lg:text-6xl text-gray-900 font-semibold font-poppins tracking-tighter">
                <Counter value={20} suffix="+" />
              </h1>
              <p className="text-gray-700 font-inter mt-2 text-sm md:text-base font-medium opacity-80">
                Varian rasa otentik yang memanjakan lidah Anda.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 col-start-3 row-start-3 md:col-span-3 md:row-span-2 md:col-start-7 group relative overflow-hidden rounded-2xl shadow-lg border border-orange-50"
          >
            <Image
              src="/images/cakes2.jpg"
              alt="Custom Cake"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 row-start-5 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-3 group relative overflow-hidden rounded-2xl shadow-lg border border-orange-50"
          >
            <Image
              src="/images/cheese-cake.jpg"
              alt="Small Treats"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-2 col-start-3 row-start-5 md:col-span-3 md:row-span-2 md:col-start-7 md:row-start-3 bg-[#6d0f1b] p-6 shadow-md rounded-2xl flex flex-col justify-between"
          >
            <div className="bg-white/40 size-3 rounded-full self-end"></div>
            <div>
              <h1 className="text-5xl lg:text-6xl text-white font-semibold font-poppins tracking-tighter">
                <Counter value={96.8} decimals={1} suffix="%" />
              </h1>
              <p className="text-white font-inter mt-2 text-sm font-medium opacity-90">
                Tingkat kepuasan pelanggan pada setiap gigitan.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-4 row-span-2 row-start-9 md:col-span-6 md:row-span-2 md:col-start-4 md:row-start-5 bg-[#fcf4f4] p-8 shadow-sm border border-pink-100 rounded-2xl flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                className="text-[#6d0f1b]"
              >
                <path
                  d="M50 10L60 40L90 40L65 55L75 85L50 70L25 85L35 55L10 40L40 40L50 10Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="bg-[#6d0f1b]/20 size-3 rounded-full self-end"></div>
            <div>
              <h1 className="text-5xl lg:text-6xl text-gray-900 font-semibold font-poppins tracking-tighter">
                <Counter value={4000} suffix="+" />
              </h1>
              <p className="text-gray-700 font-inter mt-3 text-lg font-medium max-w-md">
                Pesanan telah kami antarkan untuk merayakan kebahagiaan di
                seluruh penjuru kota.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 col-start-3 row-start-7 md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-3 group relative overflow-hidden rounded-2xl shadow-lg border border-orange-50"
          >
            <Image
              src="/images/cookies4.jpg"
              alt="Special Pastry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 row-start-7 md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-5 bg-[#eadede] p-6 shadow-sm border border-gray-200 rounded-2xl flex flex-col justify-between"
          >
            <div className="bg-[#6d0f1b] size-3 rounded-full self-end"></div>
            <div>
              <h1 className="text-5xl lg:text-6xl text-gray-900 font-semibold font-poppins tracking-tighter">
                <Counter value={1500} suffix="+" />
              </h1>
              <p className="text-gray-700 font-inter mt-2 text-sm font-medium opacity-80">
                Momen spesial yang berhasil kami sempurnakan.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
