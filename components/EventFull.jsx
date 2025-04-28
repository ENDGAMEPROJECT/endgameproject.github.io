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
    category,
    keywords,
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
  const keywordsFormatted = keywords
    .map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1))
    .join(", ");

  const externalLink = event.externalLink || "#";
  const externalLinkText =
    currentLang === "es" ? "Más información" : "More information";

  return (
    <div className="flex flex-col gap-8 items-center">
      <Badge variant="primary" type="activity" size="xl" className="text-base">
        {categoryFormatted}
      </Badge>
      <Heading level="h5" className="w-full text-center text-accent-400">
        {eventname}
      </Heading>
      <HighlightedHeader
        string={title}
        variant={"activity"}
        level="h1"
        // className="px-[5%] md:px-[10%] lg:px-[30%] xl:px-[40%] 2xl:px-[45%] color-accent"
        className="mt-0 pt-0 justify-center px-[2.5%] md:px-[5%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] color-accent"
      >
        {title}
      </HighlightedHeader>
        <Heading level="h4">{dateFormatted}</Heading>
      <Button asChild variant="outline" size='lg' className='text-accent-300 border-accent-300'>
        <Link href={externalLink} target="_blank" rel="noopener noreferrer">
          {externalLinkText}
          <NorthEastSharp />
        </Link>
      </Button>
      <Badge variant="secondary" type='activity' size='lg'>{keywordsFormatted}</Badge>
      {Array.isArray(keywords) && (
        <div className="flex flex-wrap gap-1.5">
          {keywords.map((keyword, index) => (
            <Badge
              key={index}
              variant="secondary"
              size="lg"
              type='activity'
            >
              {keyword}
            </Badge>
          ))}
        </div>
      )}
      <Text className="text-base">{description}</Text>
    </div>
  );
};

export default EventFull;
