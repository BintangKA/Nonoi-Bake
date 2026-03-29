"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Wheat, Banknote, Heart } from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    title: "Pilih Menu",
    desc: "Pilih dari berbagai varian kue, cookies, roti, dan hampers favorit Anda. Semua produk kami dipanggang segar setiap hari menggunakan bahan berkualitas terbaik.",
    icon: Wheat,
  },
  {
    step: "STEP 02",
    title: "Lakukan Pembayaran",
    desc: "Setelah memilih produk, lakukan pembayaran dengan metode yang tersedia. Prosesnya cepat, mudah, dan aman untuk memastikan pesanan Anda segera diproses.",
    icon: Banknote,
  },
  {
    step: "STEP 03",
    title: "Nikmati Kelezatan",
    desc: "Pesanan Anda akan dipersiapkan dengan penuh perhatian dan siap diantar atau diambil. Nikmati kelezatan bakery kami bersama keluarga dan orang tercinta.",
    icon: Heart,
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-6 py-20 font-poppins overflow-x-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="lg:sticky lg:top-40 h-fit sm:mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-gray-900 uppercase"
          >
            <span className="w-2 h-2 bg-[#6d0f1b] inline-block"></span>
            Proses Sederhana
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#6d0f1b] mt-8 leading-tight font-koulen"
          >
            KESEGARAN YANG <br />
            DIBUAT DENGAN <br />
            KESEMPURNAAN
          </motion.h2>

          <motion.a
            href="https://wa.me/628125614541?text=Halo%20saya%20ingin%20pesan%20kue"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="mt-12 inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#6d0f1b] transition-colors"
          >
            Pesan Kotakmu Sekarang
            <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
              ↗
            </span>
          </motion.a>
        </div>

        <div className="relative pl-12 lg:pl-20 mx-auto">
          <div className="absolute left-0 top-0 w-1 h-full bg-gray-100 rounded-full" />

          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-1 h-full bg-[#6d0f1b] rounded-full z-10"
          />

          <div className="space-y-24">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-13.5 lg:-left-21.5 top-10 w-4 h-4 bg-white border-4 border-[#6d0f1b] rounded-full z-20 shadow-sm" />

                <item.icon size={32} className="text-[#6d0f1b] mb-4" />
                <p className="text-[#6d0f1b] font-bold text-xs tracking-widest mb-2">
                  {item.step}
                </p>
                <h3 className="text-3xl font-black text-gray-900 mb-4 font-koulen uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
