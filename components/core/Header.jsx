"use client";
import { cn } from "@/lib/utils";
import clsx from "clsx";


import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

import LangSwitcher from "@/components/LangSwitcher";
import { activeRoutes } from "@/constants/routes";

// icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "../ui/image";
import { endgameLogosPng } from "@/constants/assetsRoutes";

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentPath = usePathname();

  // classes
  const headerClasses = clsx(
    "h-fit",
    "px-8 py-4 sticky -top-[1px] w-full",
    "flex justify-between items-center",
    "bg-[#090909] text-text shadow-md",

    `header_${currentLang} z-50`,
    {
      "font-semibold": true,
      active: true,
    }
  );

  //

  const menuClasses = clsx(
    "w-screen  md:p-0 md:w-fit",
    "absolute top-[40px] -right-8 md:static",
    "flex flex-col lg:flex-row ",
    "gap-4 md:gap-2 lg:gap-8",
    "border-t-2 border-t-gray md:border-none",
    "shadow-md md:shadow-none",
    {
      "block md:flex": state.open,
      "hidden md:flex": !state.open,
    }
  );

  const menuItems = clsx(
    "flex flex-col justify-end items-center md:flex-row",
    "gap-1 md:gap-4"
  );

  const menuItemClasses = clsx(
    "w-full h-full text-center px-8 py-4 md:p-0 md:w-fit",
    "text-lg md:text-base",
    " hover:text-blue-300"
  );

  return (
    <header className={headerClasses + "z-50"} id="header_home">
      {/* route={routes.route} ?????*/}
      <a href="/" className="h-10 flex gap-2">
        <Image
          className=''
          src={endgameLogosPng+"logo_ENDGAME_main_darkBg.png"}
          alt="endgame logo"
          fit="contain"
          />
      </a>
      {/* menu container */}
      <div className="relative w-fit flex">
        {/* menu icons */}
        <div className="block md:hidden">
          {!state.open ? (
            <MenuOutlinedIcon
              sx={{ fontSize: 28 }}
              onClick={() => setState({ open: !state.open })}
            />
          ) : (
            <CloseOutlinedIcon
              sx={{ fontSize: 24 }}
              onClick={() => setState({ open: !state.open })}
            />
          )}
        </div>
        {/* /menu icons */}

        {/* menu nav */}
        <div className={menuClasses}>
          <ul className={menuItems}>
            {activeRoutes.map((route, index, page) => (
              <li key={index} className={menuItemClasses}
                onClick={() => setState({ open: false })}
              >
                <Link
                  href={route.route}
                  className={
                    currentPath == route.route
                      ? " font-semibold text-primary"
                      : " font-normal"
                  }
                >
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitcher/>
        </div>
        {/* /menu nav */}
      </div>
      {/* menu container */}
    </header>
  );
}
