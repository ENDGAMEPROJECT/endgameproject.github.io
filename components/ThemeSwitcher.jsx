"use client";

import { useEffect, useState } from "react";
import ContrastIcon from '@mui/icons-material/Contrast';
import clsx from "clsx";

import { Button, ButtonVariants } from "@/components/ui/button";


export default function ThemeSwitcher() {
    const [oscuro, setOscuro] = useState(true);


    useEffect(() => {
        const html = document.querySelector("html")
        if (html.classList.contains("dark")){
            html.classList.remove("dark")
        } else{
            html.classList.add("dark")
        }
    }, [oscuro])

    return (
        <div className="relative inline-block">
            <Button
                onClick={() => setOscuro(!oscuro)}
                variant="primary"
                size="lg"
                className={clsx(
                    "border font-medium h-[2.6rem] bg-myBackground hover:bg-myBackground text-myText border border-myText hover:text-myText ",
                )}
            // className="w-fit flex items-center gap-2 px-3 py-2 md:px-4 text-text rounded-sm hover:bg-grey100 dark:hover:bg-grey900"
            >
                <ContrastIcon sx={{ fontSize: 18 }} className="mr-1" />
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
