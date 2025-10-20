"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";
import { escaperooms } from "@/constants/escaperooms";
import Heading from "@/components/ui/Heading";
import EscaperoomCard from "@/components/cards/EscaperoomCard";

export default function Escaperooms() {
  const { t, i18n } = useTranslation();

  return (
    <main className="standard_margin ">
      <Heading level="h1">{t("escaperooms.title")}</Heading>

      {/* <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-6"> */}
      <div className="mt-20 flex">
        {escaperooms.map((escaperoom, key) => {
          return <EscaperoomCard escaperoom={escaperoom} key={key} />;
        })}
      </div>
    </main>
  );
}
