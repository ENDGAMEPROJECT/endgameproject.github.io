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

const NewsCard = ({ newsItem }) => {
  const {
    category,
    date,
    title_en,
    title_es,
    description_en,
    description_es,
    keywords,
    Newsname,
  } = newsItem;

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
        {type && (
          <Badge variant="primary" size={"lg"} type="activity">
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
      <CardBody>
        <CardContent className="gap-1">
          <CardTitle level="h5" className="text-pretty">
            {title_translation}
          </CardTitle>
          {date?.[0] && (
            <div className="flex">
              <CardSubtitle
                level="h5"
                className="text-accent flex gap-4 items-center"
              >
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
      {Newsname && (
        <CardFooter className="p-0 flex-wrap">
          <Button asChild variant="outline" size="sm" radius="rounded_sm">
            {/* <Link rel="noopener noreferrer" target="_blank" href={NewsDetail}> */}
            <Link rel="noopener noreferrer" href={`/Newss/${Newsname}`}>
              {t("Newss.News.action-button")}
              <ArrowForwardSharpIcon />
            </Link>
          </Button>
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default NewsCard;
