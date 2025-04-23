"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// Components
import { Badge } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
  CardSubtitle,
} from "@/components/ui/customCard";

import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

const EventCard = ({ event }) => {
  const {
    category,
    date,
    title_en,
    title_es,
    description_en,
    description_es,
    keywords,
    externalLink,
  } = event;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title_translation =
    currentLang === "es" && title_es ? title_es : title_en;
  const description_translation =
    currentLang === "es" && description_es ? description_es : description_en;

  return (
    <CustomCard className="bg-black p-4">
      <CardHeader>
        {category && (
          <Badge className="capitalize text-white bg-gray-700 border-none">
            {category}
          </Badge>
        )}
      </CardHeader>
      <CardBody>
        <CardContent className="gap-1">
          <CardTitle level="h5" className="text-balance">
            {title_translation}
          </CardTitle>
          {date?.[0] && (
            <div className="flex">
              <CardSubtitle className='text-accent'>{date}</CardSubtitle>
            </div>
          )}
          {description_translation && (
            <Text className="text-gray-300/90 mb-4 lg:pr-16" type="small">
              {description_translation}
            </Text>
          )}
          {Array.isArray(keywords) && (
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  size="sm"
                  className="bg-accent/10 border-none text-gray-300 capitalize"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </CardBody>
      {externalLink && (
        <CardFooter className='p-0'>
          <Button asChild variant="outline" size="sm" radius="rounded_sm">
            <Link rel="noopener noreferrer" target="_blank" href={externalLink}>
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
