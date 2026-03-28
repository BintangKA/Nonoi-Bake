"use client";

import { CakeSlice, Wheat, HeartHandshake, Truck } from "lucide-react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";

const services = [
  {
    icon: CakeSlice,
    title: "Selalu Segar",
    desc: "Setiap produk dipanggang setiap hari untuk memastikan rasa dan tekstur terbaik.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Wheat,
    title: "Bahan Premium",
    desc: "Kami hanya menggunakan bahan berkualitas tinggi untuk menciptakan kelezatan autentik.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: HeartHandshake,
    title: "Dibuat dengan Hati",
    desc: "Setiap resep diracik dengan penuh dedikasi dan cinta untuk para pelanggan kami.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    desc: "Nikmati produk favorit Anda yang dikirim langsung dalam kondisi segar ke rumah Anda.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-white pb-10 relative overflow-hidden font-poppins">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 uppercase tracking-[0.3em] font-bold text-sm"
          >
            Mengapa Memilih Kami
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex justify-center"
          >
            <ShinyText
              text="KEUNGGULAN NONOI BAKE"
              speed={3}
              delay={0}
              color="#111827"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-4xl md:text-6xl font-black font-koulen"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white p-6 md:p-8 lg:p-10 rounded-4xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(234,88,12,0.1)] transition-all duration-500 text-center"
              >
                <div
                  className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-6 md:mb-8 rounded-2xl md:rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-10 ${service.color}`}
                >
                  <Icon
                    size={32}
                    className="md:w-9 md:h-9 lg:w-10 lg:h-10"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>

                <motion.div className="w-0 h-1 bg-orange-500 mx-auto mt-5 md:mt-6 rounded-full group-hover:w-12 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
