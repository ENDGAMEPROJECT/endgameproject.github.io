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
  const {
    category,
    date,
    title_en,
    title_es,
    description_en,
    description_es,
    keywords,
    eventname,
  } = event;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title_translation =
    currentLang === "es" && title_es ? title_es : title_en;
  const description_translation =
    currentLang === "es" && description_es ? description_es : description_en;

  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CustomCard className="bg-black p-4">
      <CardHeader>
        {category && (
          <Badge variant="primary" size={"lg"} type="activity">
            {category}
          </Badge>
        )}
      </CardHeader>
      <CardBody>
        <CardContent className="gap-1">
          <CardTitle level="h5" className="text-pretty">
            {title_translation}
          </CardTitle>
          {date?.[0] && (
            <div className="flex">
              <CardSubtitle level="h5" className="text-accent flex gap-4 items-center">
                <EventSharp className="h-7 w-7" />
                {dateFormatted}
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
          <Button asChild variant="outline" size="sm" radius="rounded_sm">
            {/* <Link rel="noopener noreferrer" target="_blank" href={eventDetail}> */}
            <Link rel="noopener noreferrer" href={`/events/${eventname}`}>
              {t("events.event.action-button")}
              <ArrowForwardSharpIcon />
            </Link>
          </Button>
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default EventCard;
