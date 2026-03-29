"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomerSection() {
  return (
    <section className="relative min-h-150 w-full bg-[#FAF9F6] flex items-center py-10 ">
      {/* Background Decor */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-40 z-0" />
      <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-orange-400 rounded-full blur-[10px] opacity-60 z-0" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A2B33] leading-[1.1] mb-6 font-koulen">
            Kebahagiaan dalam <br /> Setiap Gigitan
          </h1>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base font-poppins opacity-90">
            <p>
              Kami menghadirkan berbagai pilihan kue dan cookies yang dibuat
              dengan bahan berkualitas dan resep terbaik. Setiap produk
              dipanggang dengan penuh perhatian untuk menghasilkan rasa yang
              lezat dan tak terlupakan.
            </p>
            <p>
              Baik untuk momen spesial, hadiah untuk orang tersayang, ataupun
              sekadar menemani waktu santai Anda, setiap hidangan kami dibuat
              untuk membawa kebahagiaan dalam setiap kesempatan.
            </p>
          </div>
        </motion.div>

        <div className="relative flex justify-center md:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative z-10 w-full max-w-112.5 aspect-4/5 md:aspect-square"
          >
            <Image
              src="/images/family1.jpg"
              alt="Family Photo Main"
              fill
              className="object-cover rounded-4xl shadow-2xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.3,
              delay: 0.4,
            }}
            className="absolute -top-10 -right-4 md:-right-12 z-20 w-32 h-32 md:w-56 md:h-56"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/family2.jpg"
                alt="Family Photo Overlay"
                fill
                className="object-cover rounded-3xl border-8 border-white shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
