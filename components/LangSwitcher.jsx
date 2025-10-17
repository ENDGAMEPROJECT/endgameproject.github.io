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
          "border font-medium px-2 py-1.5 bg-myBackground hover:bg-myBackground",
          {
            "!text-myText  border border-myPrimary bg-opacity-100 hover:bg-myBackground": open,
            "text-myText border border-myText bg-opacity-0 hover:text-myText": !open,
          }
        )}
      >
        <LanguageIcon sx={{ fontSize: 18 }} className="mr-1" />
        <span>{lngs[i18n.language]?.abbreviation || "EN"}</span>
      </Button>

      {open && (
        <ul className="absolute right-0 z-10 mt-1 w-fit bg-myBackground border border-myPrimary rounded-sm shadow">
          {Object.entries(lngs).map(
            ([lngKey, { abbreviation, nativeName }]) => (
              <li
                key={lngKey}
                onClick={() => handleSelect(lngKey)}
                className={clsx(
                  "w-full whitespace-nowrap px-5 py-3 cursor-pointer hover:bg-grey800 dark:hover:bg-grey900",
                  {
                    "font-bold text-myText": i18n.language === lngKey,
                    "font-normal text-myText": i18n.language !== lngKey,
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
