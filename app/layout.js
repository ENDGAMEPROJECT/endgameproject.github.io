"use client";

import React from "react";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { routes } from "@/constants/routes";

// import i18n (needs to be bundled ;))
import "./i18n";

import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-space",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-dmSans",
});

export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    // <html className={` ${sourceSans.variable} ${inter.variable} `}>
          <html className={` ${dmSans.variable} ${spaceGrotesk.variable} `}>
      <title>ENDGAME</title>
      <body className="bg-background text-text">
        <Header route={"/"} />
        <main className="min-h-[70dvh] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
