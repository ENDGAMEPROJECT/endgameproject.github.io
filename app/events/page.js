"use client";
import * as React from "react";

import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { getPageMetadata } from "@/constants/metadata";

// Data
import { events } from "@/constants/events";

// Components
import Heading from "@/components/ui/heading";
import EventCard from "@/components/cards/EventCard";

export default function Events() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const metadata = getPageMetadata('events', currentLang);

  return (
    <>
      <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <main className="standard_margin ">
      <Heading level="h1" className={"text-accent"}>
        {t("events.title")}
      </Heading>
      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map(( event , key) => {
          return <EventCard event={event} key={key} />;
        })}
      </div>
    </main>
    </>
  );
}
