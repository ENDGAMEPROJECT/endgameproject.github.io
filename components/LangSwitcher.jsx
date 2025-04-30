"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import clsx from "clsx";

import { Button, ButtonVariants } from "@/components/ui/button";

const lngs = {
  en: { nativeName: "English", abbreviation: "EN" },
  es: { nativeName: "Español", abbreviation: "ES" },
  fi: { nativeName: "Suomeksi", abbreviation: "FI" },
  sr: { nativeName: "Srpski", abbreviation: "SR" },
};

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <Button
        onClick={() => setOpen(!open)}
        variant="secondary"
        size="lg"
        className={clsx(
          "border font-medium px-2 py-1.5 ",
          {
            "!text-primary  border-primary bg-opacity-100": open,
            "text-text border border-text bg-opacity-0": !open,
          }
        )}
        // className="w-fit flex items-center gap-2 px-3 py-2 md:px-4 text-text rounded-sm hover:bg-grey-100 dark:hover:bg-grey-900"
      >
        <LanguageIcon sx={{ fontSize: 18 }} className="mr-1" />
        <span>{lngs[i18n.language]?.abbreviation || "EN"}</span>
      </Button>

      {open && (
        <ul className="absolute right-0 z-10 mt-1 w-fit bg-black dark:bg-black border border-primary rounded-sm shadow">
          {Object.entries(lngs).map(
            ([lngKey, { abbreviation, nativeName }]) => (
              <li
                key={lngKey}
                onClick={() => handleSelect(lngKey)}
                className={clsx(
                  "w-full whitespace-nowrap px-5 py-3 cursor-pointer hover:bg-grey-800 dark:hover:bg-grey-900",
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
      )}
    </div>
  );
}
