import type { Metadata } from "next";
import { Inter, Poppins, Koulen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-koulen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nonoi-bake.vercel.app"),

  title: "Toko Kue Premium Jogja | Fresh Cake",

  description:
    "Toko kue premium dengan bahan terbaik. Pesan lapis legit, cookies, dan berbagai kue spesial untuk acara istimewa.",

  keywords: ["bakery", "toko kue", "lapis legit", "cookies", "toko kue jogja"],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Fresh Cake",
    description: "Toko kue premium dengan bahan terbaik.",
    url: "https://nonoi-bake.vercel.app",
    siteName: "Fresh Cake",
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Cake Bakery",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${koulen.variable} antialiased relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
