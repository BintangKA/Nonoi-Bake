"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Variants } from "motion/react";

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = (duration: number, yDistance: number = 20) => ({
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, yDistance, 0],
      opacity: 1,
      transition: {
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
        opacity: { duration: 1 },
      },
    },
  });

  return (
    <header className="relative w-full min-h-dvh -top-20 bg-[#F6F0EB] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8 order-2 md:order-1 mt-12 md:mt-0"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#B4284C] font-koulen"
          >
            <motion.span variants={wordVariants}>Kelezatan </motion.span>

            <motion.span
              variants={wordVariants}
              className="relative inline-block text-[1.1em] sm:text-inherit lg:text-5xl tracking-widest italic"
            >
              Manis{" "}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="w-full md:w-1/3 flex justify-center items-center relative order-1 md:order-2"
        ></motion.div>
      </div>

      <motion.div
        variants={floatingAnimation(6, -15)}
        initial="initial"
        animate="animate"
        className="absolute top-40 md:top-10 right-70 md:right-50 lg:right-70 -rotate-30 z-0"
      >
        <Image
          src="/images/lapislegit_illus.png"
          alt="lapis legit illustration"
          width={1440}
          height={200}
          className="w-full h-auto object-cover drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={floatingAnimation(5, 20)}
        initial="initial"
        animate="animate"
        className="absolute -bottom-8 left-5 md:-bottom-5 md:left-15 rotate-15 z-0"
      >
        <Image
          src="/images/cookies_illus.png"
          alt="cookies illustration"
          width={1440}
          height={200}
          className="w-full h-auto object-cover drop-shadow-xl"
        />
      </motion.div>

      <motion.div
        variants={floatingAnimation(7, -10)}
        initial="initial"
        animate="animate"
        className="absolute bottom-25 right-5 lg:bottom-15 lg:right-40 -rotate-5 z-5"
      >
        <Image
          src="/images/lemonbuttercake_illus.png"
          alt="lemon butter cake illustration"
          width={1440}
          height={200}
          className="w-full h-auto object-cover drop-shadow-2xl"
        />
      </motion.div>

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
