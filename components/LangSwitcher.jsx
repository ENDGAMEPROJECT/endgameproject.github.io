"use client";

import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import clsx from "clsx";

const lngs = {
  en: {
    nativeName: "English",
    abbreviation: "EN",
  },
  es: {
    nativeName: "Spanish",
    abbreviation: "ES",
  },
  // fi: {
  //   nativeName: "Finnish",
  //   abbreviation: "FI",
  // },
  // sr: {
  //   nativeName: "Serbian",
  //   abbreviation: "SR",
  // },
};

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div
      className={
        "flex flex-nowrap justify-center md:justify-end items-center gap-2 px-8 py-4 md:p-0 md:w-fit"
      }
    >
      <LanguageIcon className="icon" sx={{ fontSize: 18 }} />
      {Object.keys(lngs).map((lng) => (
        <a
          key={lng}
          className={clsx("lang-link", "cursor-pointer", {
            "font-bold text-primary": i18n.language === lng,
            "font-normal": i18n.language !== lng,
          })}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].abbreviation}
          {lng == "en" && <span className="font-normal"> / </span>}
          {/* {lng == "fi" && <span className="font-normal"> / </span>}
          {lng == "es" && <span className="font-normal"> / </span>} */}
        </a>
      ))}
    </div>
  );
}
