"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Cookies di sini benar-benar tidak tertandingi. Kesegaran dan kualitasnya luar biasa—saya bisa merasakan dedikasi di setiap gigitannya.",
    author: "Almeriano",
    rating: 5,
  },
  {
    text: "Lapis legitnya adalah yang terbaik yang pernah saya coba. Teksturnya sangat lembut dan tingkat kemanisannya pas. Sangat cocok untuk hantaran keluarga atau dinikmati sendiri.",
    author: "Optra",
    rating: 5,
  },
  {
    text: "Pelayanannya sangat ramah dan proses pemesanannya praktis. Pengirimannya selalu tepat waktu, dan kue sampai dalam keadaan masih hangat, seolah baru saja keluar dari oven.",
    author: "Abdullah Zuhdi",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <section className="container mx-auto px-6 py-10 font-poppins overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#5A1426] rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="flex flex-col h-full justify-between z-10">
          <div>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    size={18}
                    fill={i < testimonials[index].rating ? "#fbbf24" : "none"}
                    className={
                      i < testimonials[index].rating
                        ? "text-yellow-400"
                        : "text-gray-500/50"
                    }
                  />
                </motion.div>
              ))}
            </div>

            <div className="min-h-50 md:min-h-40 relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white text-xl md:text-2xl leading-relaxed font-medium italic">
                    &quot;{testimonials[index].text}&quot;
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-pink-300 mt-6 font-semibold tracking-wide uppercase text-sm"
                  >
                    — {testimonials[index].author}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ffffff",
                color: "#5A1426",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              aria-label="Testimoni Sebelumnya"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <ArrowLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ffffff",
                color: "#5A1426",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              aria-label="Testimoni Berikutnya"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </div>

        <div className="relative text-white/10 lg:text-white/20 select-none pointer-events-none">
          <div className="flex items-center gap-2 mb-4">
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-pink-400 rounded-full"
            ></motion.span>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/90">
              Kata Pelanggan
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-none font-koulen flex flex-col uppercase text-[#F4CCCF]">
            <motion.span whileInView={{ x: [20, 0], opacity: [0, 1] }}>
              Baru Dipanggang
            </motion.span>
            <motion.span
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-[#F4CCCF]"
            >
              Menggugah Selera
            </motion.span>
            <motion.span whileInView={{ x: [-20, 0], opacity: [0, 1] }}>
              Sentuhan Emas
            </motion.span>
            <motion.span whileInView={{ x: [20, 0], opacity: [0, 1] }}>
              Alami & Sehat
            </motion.span>
            <motion.span whileInView={{ x: [-20, 0], opacity: [0, 1] }}>
              Resep Artisan
            </motion.span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
