"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { events } from "@/constants/events";
import HighlightedHeader from "@/components/ui/highlightedHeader";
import Link from "next/link";
import Text from "../components/ui/text";
import Heading from "./ui/heading";
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

  let {
    title_en,
    title_es,
    title_sr,
    title_fi,
    description_en,
    description_es,
    description_sr,
    description_fi,
    date,
    hour,
    category,
    keywords,
    externalLinkJoin,
  } = event;

  //only english is compulsory, the rest are optional
  if(!title_es) {
    title_es = title_en;
  }
  if (!title_sr) {
    title_sr = title_en;
  }
  if (!title_fi) {
    title_fi = title_en;
  }
  if (!description_es) {
    description_es = description_en;
  }
  if (!description_sr) {
    description_sr = description_en;
  }
  if (!description_fi) {
    description_fi = description_en;
  }

  const currentLang = i18n.language;

  //set title depending on the language, if the language is not supported, set it to english
  const title = currentLang === "es" ? title_es : currentLang === "sr" ? title_sr : currentLang === "fi" ? title_fi : title_en;
  const description = currentLang === "es" ? description_es : currentLang === "sr" ? description_sr : currentLang === "fi" ? description_fi : description_en;

  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Badge variant="primary" type="activity" size="xl">
        {categoryFormatted}
      </Badge>
      <HighlightedHeader
        string={title}
        variant={"activity"}
        level="h2"
        // className="px-[5%] md:px-[10%] lg:px-[30%] xl:px-[40%] 2xl:px-[45%] color-accent"
        className=" color-accent py-6"
      >
        {title}
      </HighlightedHeader>
      <Heading level="h4" className='flex items-center gap-4'>
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
        size="xl"
        className="text-accent-400 border-accent-400 hover:bg-accent hover:border-accent hover:text-black"
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
