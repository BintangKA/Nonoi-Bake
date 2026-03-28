"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BlurText from "@/components/ui/BlurText";
import CircularGallery from "@/components/ui/CircularGallery";

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <header className="relative w-full min-h-dvh -top-20 bg-[#F6F0EB] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 flex flex-col items-center justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center space-y-6 md:space-y-8"
        >
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#B4284C] font-koulen leading-tight flex flex-col items-center">
            <BlurText
              text="Kelezatan Manis Untuk Moment Istimewa!"
              delay={30}
              animateBy="letters"
              direction="top"
            />
          </motion.h1>
        </motion.div>

        <div className="w-full h-auto mt-10 relative">
          <CircularGallery
            bend={3}
            textColor="#B4284C"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>

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
          priority
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </header>
  );
}
