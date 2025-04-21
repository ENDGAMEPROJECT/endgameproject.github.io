"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";
import Heading from "@/components/ui/Heading";

export default function Page() {
  const { t, i18n } = useTranslation();
  // const currentLang = i18n.language;

  return (
    <main className="standard_margin">
      <Heading level="h1">{t("events.title")}</Heading>

    </main>
  );
}
