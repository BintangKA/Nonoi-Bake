"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Variants } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socials = [
    { icon: Instagram, href: "https://instagram.com/nonoi_bake" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Hubungi Kami", href: "https://wa.me/628125614541" },
  ];
  return (
    <footer className="relative bg-[#3a0d18] pt-24 pb-12 overflow-hidden font-poppins text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-75 bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <motion.div variants={itemVariants} className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/icon.svg"
                alt="Nonoi Bake Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-pink-100/60 leading-relaxed max-w-xs">
              Membangun kebahagiaan melalui resep tradisional dan bahan premium
              sejak 2020. Setiap gigitan adalah sebuah cerita.
            </p>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    color: "#fb7185",
                    backgroundColor: "white",
                  }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 bg-white/5"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 font-koulen tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-4 text-pink-100/60">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-pink-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 font-koulen tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-6 text-pink-100/60">
              <li className="flex gap-4 items-start">
                <MapPin className="text-pink-400 shrink-0" size={20} />
                Jl. Indraprasta No.237,
                <br />
                Tegalrejo, Kota Yogyakarta,
                <br />
                Daerah Istimewa Yogyakarta
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-pink-400 shrink-0" size={20} />
                <span>+62 812 5614 541</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-pink-400 shrink-0" size={20} />
                <span>hello@nonoibake.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-8 font-koulen tracking-wider">
              Newsletter
            </h4>
            <p className="text-pink-100/60 mb-6 text-sm italic">
              Dapatkan info promo dan menu baru langsung di email-mu.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-400/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 bg-pink-600 hover:bg-pink-500 text-white px-6 rounded-xl text-sm font-bold shadow-lg transition-colors"
              >
                Daftar
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-pink-100/30 text-sm tracking-widest uppercase">
            © {currentYear}{" "}
            <span className="text-pink-100/60 font-bold">NONOI BAKE</span>. Hak
            Cipta Dilindungi.
          </p>
          <div className="flex gap-8 text-xs font-bold tracking-widest text-pink-100/30 uppercase">
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 left-0 right-0 text-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[15rem] font-black font-koulen whitespace-nowrap">
          NONOI BAKE NONOI BAKE
        </h2>
      </div>
    </footer>
  );
}
