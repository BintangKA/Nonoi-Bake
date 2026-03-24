"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Berapa ukuran kue lapis yang tersedia?",
    answer:
      "Kue lapis kami tersedia dalam ukuran standar 18 cm x 18 cm, cocok untuk dinikmati bersama keluarga atau sebagai hadiah spesial.",
  },
  {
    question: "Apakah bisa melakukan pengiriman ke luar kota?",
    answer:
      "Tentu bisa! Kami melayani pengiriman ke luar kota, bahkan kue kami sudah pernah dikirim hingga ke luar negeri (Amerika) dengan kondisi tetap aman. Kami menggunakan pengemasan khusus agar kualitas kue tetap terjaga selama perjalanan.",
  },
  {
    question: "Berapa lama daya tahan kue?",
    answer:
      "Suhu ruangan: hingga 1 minggu.\nDalam kulkas: hingga 3 bulan (disarankan disimpan dalam wadah tertutup agar tetap segar).",
  },
  {
    question: "Apakah memiliki toko fisik?",
    answer:
      "Saat ini kami masih berbasis home-made (rumahan) dan belum memiliki toko fisik.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="font-koulen text-4xl tracking-wide">
          Pertanyan Umum?
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-6">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              <AnimatePresence mode="wait">
                <motion.span
                  key={active === index ? "minus" : "plus"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-gray-500 inline-block"
                >
                  {active === index ? "−" : "+"}
                </motion.span>
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 max-w-2xl text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
