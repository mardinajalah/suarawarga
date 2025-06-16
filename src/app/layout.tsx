"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/page/Navbar";
import Footer from "@/components/page/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categorys: string[] = ["Home","Berita", "Jaga", "Udik", "Pandangan"];
  const pathname = usePathname();

  const show =
    pathname === "/" ||
    categorys
      .map((c) => `/${c.toLowerCase()}`)
      .includes(pathname.toLowerCase());

  return (
    <html lang="en">
      <head>
        <title>suarawarga</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {show && <Navbar lists={categorys} />}
          {children}
          {show && <Footer />}
        </div>
      </body>
    </html>
  );
}
