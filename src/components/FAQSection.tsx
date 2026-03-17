"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Apakah Nonoi Bake menerima pesanan custom?",
    answer:
      "Ya, kami menerima pesanan custom untuk berbagai acara seperti ulang tahun, pernikahan, atau acara spesial lainnya.",
  },
  {
    question: "Berapa lama waktu pembuatan pesanan?",
    answer:
      "Waktu pembuatan biasanya 1–3 hari tergantung jenis produk dan jumlah pesanan.",
  },
  {
    question: "Apakah bahan yang digunakan berkualitas?",
    answer:
      "Kami hanya menggunakan bahan premium dan segar untuk memastikan rasa dan kualitas terbaik.",
  },
  {
    question: "Apakah tersedia layanan delivery?",
    answer:
      "Ya, kami menyediakan layanan pengantaran untuk area tertentu agar pesanan sampai dengan aman.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda bisa melakukan pemesanan melalui WhatsApp atau langsung melalui halaman menu di website kami.",
  },
  {
    question: "Apakah produk Nonoi Bake halal?",
    answer:
      "Semua produk kami dibuat menggunakan bahan halal dan proses yang higienis.",
  },
  {
    question: "Apakah ada promo atau diskon khusus?",
    answer:
      "Kami sering memberikan promo pada momen tertentu. Ikuti media sosial kami agar tidak ketinggalan informasi.",
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
