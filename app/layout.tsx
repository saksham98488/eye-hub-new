import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optical Hub - Premium E-Commerce Website",
  description: "A modern, high-end e-commerce website for an Optical Hub brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Navbar cartCount={2} />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

