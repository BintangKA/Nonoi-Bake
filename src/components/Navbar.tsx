"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang Kami", href: "/tentang-kami" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
    sticky z-50 border-b border-white/20
    bg-white backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]
    transition-all duration-500

    ${
      isScrolled
        ? "top-0 w-full mx-auto rounded-none"
        : "top-0 w-full md:top-5 md:max-w-3xl lg:max-w-6xl xl:max-w-7xl md:mx-auto md:rounded-full md:border"
    }
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 font-poppins">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/logo.svg"
                alt="Nonoi Logo"
                width={120}
                height={40}
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors
                ${
                  isActive(item.href)
                    ? "text-orange-600"
                    : "text-gray-800 hover:text-orange-600"
                }`}
              >
                {item.name}

                <motion.span
                  layoutId="nav-indicator"
                  className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500
                  ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/628125614541"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700"
            >
              Hubungi Kami
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="mx-4 border-t border-gray-100" />

              <div className="flex flex-col space-y-2 py-6 px-6">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 font-semibold rounded-2xl transition
              ${
                isActive(item.href)
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-800 hover:bg-gray-50 hover:text-orange-600"
              }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <a
                    href="https://wa.me/628125614541"
                    className="block text-center bg-orange-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-100"
                  >
                    Hubungi Kami
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
