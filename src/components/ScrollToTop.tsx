"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { MessageCircle } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = "628125614541"; 
  const message = "Halo, saya ingin bertanya tentang produk Anda";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3 ">
        <AnimatePresence>
          {showButton && (
            <motion.button
              key="scrollTop"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 40, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.7 }}
              transition={{ duration: 0.35 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full shadow-lg bg-[#3a0d18] text-white hover:bg-[#641327]"
            >
              <ArrowUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* 💬 WHATSAPP (DI BAWAH) */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600"
        >
          <MessageCircle size={26} />
        </motion.a>
      </div>
    </>
  );
}
