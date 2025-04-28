"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";

// Data
import { events } from "@/constants/events";

// Components
import Heading from "@/components/ui/Heading";
import EventCard from "@/components/cards/EventCard";

export default function Events() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <main className="standard_margin ">
      <Heading level="h1" className={"text-accent-500"}>
        {t("events.title")}
      </Heading>
      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map(( event , key) => {
          return <EventCard event={event} key={key} />;
        })}
      </div>
    </main>
  );
}
