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

  title: "Toko Kue Jogja | Nonoi Bake Bakery Premium",

  description:
    "Nonoi Bake adalah toko kue di Jogja yang menyediakan berbagai pilihan kue premium seperti lapis legit, cookies, dan kue spesial untuk berbagai acara.",

  keywords: [
    "toko kue jogja",
    "bakery jogja",
    "lapis legit jogja",
    "cookies jogja",
    "kue premium jogja",
    "nonoi bake bakery",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Nonoi Bake | Toko Kue Jogja",
    description:
      "Toko kue di Jogja yang menyediakan lapis legit, cookies, dan berbagai kue premium untuk acara spesial.",
    url: "https://nonoi-bake.vercel.app",
    siteName: "Nonoi Bake",
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nonoi Bake Toko Kue Jogja",
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
        className={`${inter.variable} ${poppins.variable} ${koulen.variable} antialiased`}
      >
        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
