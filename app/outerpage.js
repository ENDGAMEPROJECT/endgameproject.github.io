"use client";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import CookieConsentBanner from "../components/CookieConsentBanner";
import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import { Space_Grotesk, DM_Sans } from "next/font/google";



const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space",
});
const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-dmSans",
});


const Outerpage = ({ children }) => {
    const { webTheme } = useContext(ThemeContext);

    return (
        <html className={` ${dmSans.variable} ${spaceGrotesk.variable} ${webTheme}`}>
            <GoogleAnalytics gaId="G-N132LLPSLM" />
            <title>ENDGAME</title>
            <body className="bg-background300 min-h-[70dvh] mx-auto">
                <Header route={"/"} />
                {/* <main className="min-h-[70dvh] mx-auto"> */}
                {children}
                {/* </main> */}
                <Footer />
                <CookieConsentBanner />
            </body>
        </html>
    )
}

export default Outerpage



