"use client";

import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import ContrastIcon from '@mui/icons-material/Contrast';
import clsx from "clsx";

import { Button, ButtonVariants } from "@/components/ui/button";


export default function ThemeSwitcher() {
    const { webTheme, setWebTheme } = useContext(ThemeContext);


    const changeTheme = () => {
        let newTheme;
        webTheme == "light" ?  newTheme = "dark": newTheme = "light";
        setWebTheme(newTheme)
    } 

    return (
        <div className="relative inline-block">
            <Button
                onClick={() => changeTheme()}
                className={
                ButtonVariants({
                  variant: "secondary",
                  size: "lg",
                  radius: "rounded_sm",
                }) + "  !w-8 !min-w-4 border-red border font-medium h-[2.6rem] bg-myBackground hover:bg-myBackground text-myText border border-myText hover:text-myText"
              }
                
            // className="w-fit flex items-center gap-2 px-3 py-2 md:px-4 text-text rounded-sm hover:bg-grey100 dark:hover:bg-grey900"
            >
                <ContrastIcon sx={{ fontSize: 20 }} className="" />
                {/* <span>{lngs[i18n.language]?.abbreviation || "EN"}</span> */}
            </Button>

            {/* {open && (
                <ul className="absolute right-0 z-10 mt-1 w-fit bg-black dark:bg-black border border-primary rounded-sm shadow">
                    {Object.entries(lngs).map(
                        ([lngKey, { abbreviation, nativeName }]) => (
                            <li
                                key={lngKey}
                                onClick={() => handleSelect(lngKey)}
                                className={clsx(
                                    "w-full whitespace-nowrap px-5 py-3 cursor-pointer hover:bg-grey800 dark:hover:bg-grey900",
                                    {
                                        "font-bold text-primary": i18n.language === lngKey,
                                        "font-normal": i18n.language !== lngKey,
                                    }
                                )}
                            >
                                {`${nativeName} - ${abbreviation}`}
                            </li>
                        )
                    )}
                </ul>
            )} */}
        </div>
    );
}
