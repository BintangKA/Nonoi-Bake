"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";

const images = [
  "/images/cookies_set.jpg",
  "/images/cookies_florentines.jpg",
  "/images/egg_tart.jpg",
  "/images/kaastengel.jpg",
];

export default function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <header className="relative w-full min-h-dvh -top-20 bg-[#F6F0EB] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col md:flex-row items-center relative z-10">
        {/* TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8 order-2 md:order-1 mt-12 md:mt-0"
        >
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#B4284C] font-koulen leading-tight">
            <motion.span variants={wordVariants}>Kelezatan </motion.span>

            <motion.span
              variants={wordVariants}
              className="relative inline-block text-[1.1em] sm:text-inherit lg:text-5xl tracking-widest italic"
            >
              Manis
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-orange-200"
                viewBox="0 0 300 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15C50 5 150 5 295 15"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>

            <br />

            <motion.span variants={wordVariants}>
              untuk Momen Istimewa!
            </motion.span>
          </motion.h1>

          <motion.button
            whileHover="hover"
            whileTap="tap"
            className="bg-black text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-xl hover:bg-[#6d0f1b] transition-colors mx-auto md:mx-0"
          >
            <span>Pesan Sekarang</span>

            <motion.span
              variants={{
                hover: { rotate: 45, scale: 1.1, y: -3 },
                tap: { scale: 0.95, rotate: 20 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              ↗
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
          className="w-full md:w-1/3 flex justify-center items-center relative order-1 md:order-2"
        >
          {/* FRAME */}
          <div
            className="relative w-[75%] sm:w-[60%] md:w-full max-w-md lg:max-w-lg aspect-square md:aspect-4/5 bg-white rounded-3xl border-[6px] border-gray-200 shadow-2xl overflow-hidden"
          >
            {/* IMAGE AREA */}
            <div className="relative w-full h-full overflow-hidden">
              {/* FLOATING */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={images[index]}
                    initial={{ x: 120 }}
                    animate={{ x: 0 }}
                    exit={{ x: -120 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                    }}
                    className="absolute inset-0"
                  >
                    {/* PARALLAX LAYER */}
                    <motion.div
                      initial={{ x: 60, scale: 1.15 }}
                      animate={{ x: 0, scale: 1 }}
                      exit={{ x: -60, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      className="w-full h-full"
                    >
                      <Image
                        src={images[index]}
                        alt="cookies"
                        fill
                        sizes="(max-width: 768px) 75vw, (max-width: 1024px) 40vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND WAVE */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-0"
      >
        <Image
          src="/images/wave_hero.png"
          alt="wave"
          width={1440}
          height={200}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </header>
  );
}
