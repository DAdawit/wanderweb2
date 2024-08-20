import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Common/NavBar";
import Footer from "@/Common/Footer";
import MoveToTop from "@/Common/MoveToTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WanderWeb",
  description:
    "Welcome to WanderWeb, where exceptional web development meets creative innovation. Transform your digital presence with our cutting-edge solutions tailored to elevate your brand and captivate your audience.",
  keywords:
    "WanderWeb, web development, digital transformation, creative innovation, brand elevation",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <MoveToTop />
      </body>
    </html>
  );
}
