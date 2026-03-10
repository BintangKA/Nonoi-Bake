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
  title: "Nonoi Bake",
  description: "Fresh bakery from Nonoi Bake",
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
