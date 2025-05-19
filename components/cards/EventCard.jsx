"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
  CardSubtitle,
} from "@/components/ui/customCard";

import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import EventSharp from "@mui/icons-material/EventSharp";

const EventCard = ({ event }) => {
  let {
    category,
    type,
    country,
    date,
    title_en,
    title_es,
    title_sr,
    title_fi,
    description_en,
    description_es,
    description_sr,
    description_fi,
    keywords,
    eventname,
  } = event;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  //only english is compulsory, the rest are optional
  if (!title_es) {
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

  //set title depending on the language, if the language is not supported, set it to english
  const title_translation =
    currentLang === "es"
      ? title_es
      : currentLang === "sr"
      ? title_sr
      : currentLang === "fi"
      ? title_fi
      : title_en;
  const description_translation =
    currentLang === "es"
      ? description_es
      : currentLang === "sr"
      ? description_sr
      : currentLang === "fi"
      ? description_fi
      : description_en;

  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CustomCard className="bg-black p-4">
      <CardHeader>
        {type && (
          <Badge variant="type" size={"lg"} type="activity">
            {type}
          </Badge>
        )}
        {category && (
          <Badge variant="primary" size={"lg"} type="activity">
            {category}
          </Badge>
        )}
        {country && (
          <Badge variant="primary" size={"lg"} type="activity">
            {country}
          </Badge>
        )}
      </CardHeader>
      <CardBody className="h-full justify-start">
        <CardContent className="gap-1 h-full justify-start">
          <CardTitle level="h5" className="text-pretty">
            {/* flex: grow */}
            {title_translation}
          </CardTitle>
          {date?.[0] && (
            <div className="flex">
              <CardSubtitle
                level="h5"
                className="text-accent flex gap-4 items-center"
              >
                <EventSharp className="h-7 w-7" />
                {dateFormatted + (event.hour ? " - " + event.hour : "")}
              </CardSubtitle>
            </div>
          )}
          {description_translation && (
            <CardDescription description={description_translation} />
          )}
          {Array.isArray(keywords) && (
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  size="sm"
                  className="text-accent-400 bg-accent/15"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </CardBody>
      {eventname && (
        <CardFooter className="p-0 flex-wrap">
          <Button
            asChild
            variant="outline"
            size="sm"
            radius="rounded_sm"
            className="hover:bg-black hover:border-accent-400 hover:text-accent-300"
          >
            {/* <Link rel="noopener noreferrer" target="_blank" href={eventDetail}> */}
            <Link rel="noopener noreferrer" href={`/events/${eventname}`}>
              {t(
                event.type === "Event"
                  ? "events.event.action-button"
                  : "events.new.action-button"
              )}
              <ArrowForwardSharpIcon />
            </Link>
          </Button>
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default EventCard;
