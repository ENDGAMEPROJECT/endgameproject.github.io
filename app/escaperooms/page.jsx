"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";
import Heading from "@/components/ui/Heading";

export default function Page() {

  const { t, i18n } = useTranslation();

  return (
    <main className="standard_margin">
      <Heading level="h1">{t("escaperooms.title")}</Heading>
    </main>
  );
}
