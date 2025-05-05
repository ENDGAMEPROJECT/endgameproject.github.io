"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { events } from "@/constants/events";
import HighlightedHeader from "@/components/ui/highlightedHeader";
import Link from "next/link";
import Text from "../components/ui/text";
import Heading from "../components/ui/Heading";
import { Badge } from "./ui/badge";
import { Button, ButtonVariants } from "@/components/ui/button";

// icons
import NorthEastSharp from "@mui/icons-material/NorthEastSharp";
import EventSharp from "@mui/icons-material/EventSharp";

/* eventinfo is like this:
{
    eventname: "WorskhopSpain",
    category: "webinar",
    date: "10/04/25",
    title_en: "Understanding the importance of media literacy in today’s fast-paced digital landscape",
    title_es: "Comprendiendo la Alfabetización Mediática en la Era Digital",
    description_en:
      "In this session, experts will dissect the impact of misinformation and teach practical strategies for analyzing media critically.",
    description_es:
      "En esta sesión, expertos analizarán el impacto de la desinformación y compartirán estrategias prácticas para evaluar los medios de forma crítica.",
    keywords: ["webinar", "hola", "tag", "misinformation"],
    externalLink: "#",
  },
*/

const EventFull = ({ eventname }) => {
  const { t, i18n } = useTranslation();

  //get event information from events.js
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventData = events.find((event) => event.eventname === eventname);
    setEvent(eventData);
  }, [eventname]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const {
    title_en,
    title_es,
    description_en,
    description_es,
    date,
    hour,
    category,
    keywords,
    externalLinkJoin,
  } = event;

  const currentLang = i18n.language;
  const title = currentLang === "es" ? title_es : title_en;
  const description = currentLang === "es" ? description_es : description_en;
  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Badge variant="primary" type="activity" size="xl" className="text-base">
        {categoryFormatted}
      </Badge>
      <HighlightedHeader
        string={title}
        variant={"activity"}
        level="h2"
        // className="px-[5%] md:px-[10%] lg:px-[30%] xl:px-[40%] 2xl:px-[45%] color-accent"
        className=" color-accent"
      >
        {title}
      </HighlightedHeader>
      <Heading level="h5" className='flex items-center gap-4'>
        <EventSharp className="h-7 w-7"/>
        {dateFormatted + " - " + hour}
      </Heading>

      {Array.isArray(keywords) && (
        <div className="flex justify-center flex-wrap gap-1.5">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary" size="lg" type="activity">
              {keyword}
            </Badge>
          ))}
        </div>
      )}
      <Text className="text-base" type="pre">
        {description}
      </Text>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="text-accent-300 border-accent-300"
      >
        <Link href={externalLinkJoin} target="_blank" rel="noopener noreferrer">
          {t("events.event.join")}
          <NorthEastSharp />
        </Link>
      </Button>
    </div>
  );
};

export default EventFull;
