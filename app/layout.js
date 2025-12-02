"use client";

import React from "react";
import "./globals.css";
import { useState, useEffect, useContext } from "react";
import { routes } from "@/constants/routes";
import { ThemeContextProvider } from "@/components/ThemeContext";
import { ThemeContext } from "@/components/ThemeContext";
import Outerpage from "./outerpage";

// import i18n (needs to be bundled ;))
import "./i18n";




export default function RootLayout({ children }) {
  //disable SSR whole project, this will make the project to be rendered only on client side
  const [isClient, setIsClient] = useState(false);
  const { webTheme } = useContext(ThemeContext);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    // <html className={` ${sourceSans.variable} ${inter.variable} `}>
    <ThemeContextProvider>
      <Outerpage>
        {children}
      </Outerpage>
    </ThemeContextProvider>
  );
}
