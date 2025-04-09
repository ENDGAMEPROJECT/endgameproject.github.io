"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTranslation } from "react-i18next";


export default function FilterText( {pathname, search, changeSearch} ) {

  // esta funcion le quita la barra a pathname (ej, /research), para que
  // en la hoja de traducciones se coja bien el nombre de la página, sin la barra
  let pathnameFormatted = pathname.replace("/", "")

  const { t } = useTranslation();
  return (
    <div className={pathname === "/research" ? "filter flex flex-wrap md:w-1/2" : "filter flex flex-wrap w-full " }>
    <Label htmlFor="search">{t(`${pathnameFormatted}.filter.fieldTitle1`)}</Label>
    <Input
      id="search"
      className="w-full"
      key={" "}
      type={"text"}
      value={search || ""}
      onChange={(e) =>
        changeSearch(
          e.target.value === "" ? undefined : e.target.value
        )
      }
    />
  </div>
  )
}
