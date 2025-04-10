"use client";

import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";


// Data
import { useTranslation } from "react-i18next";

// Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

// Icons
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const deleteSpaces = (string) => {
  let cleanStr = "";
  for (const char of [...string]) {
    if (char != " ") {
      cleanStr += char;
    }
  }
  return cleanStr;
};

const Card = React.forwardRef(
  (
    {
      title,
      description_en,
      description_es,
      date,
      category,
      author,
      doi,
      researchLine,
      keywords,
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    // fondo researchline cards - project cards
    let backgroundColor;

    // coge solo la primera researchline para ponerle el fondo
    switch (researchLine && researchLine[0]) {
      case "data":
        backgroundColor = "bg-data_bg";
        break;
      case "videoconference":
        backgroundColor = "bg-videoconference_bg";
        break;
      case "ai":
        backgroundColor = "bg-ai_bg";
        break;
      case "computing":
        backgroundColor = "bg-networks_bg";
        break;
      case "e-learning":
        backgroundColor = "bg-eLearning_bg";
        break;
      default:
        backgroundColor = "bg-gray-600/50"; // Valor por defecto si no hay coincidencia
        break;
    }

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

    return (
      // const publicationCard = (
      <CustomCard
        className=
          " p-4 sm:py-4 whitespace-nowrap rounded-md font-body text-sm text-text bg-background-300 border-none shadow-md hover:scale-[101%] transition-all overflow-hidden"
        >
        <CardHeader className="flex flex-wrap">
          {Array.isArray(researchLine)
            ? researchLine.map((researchline, index) => {
                let researchLineColorStyles;
                let backgroundIcon;
                let iconSpacing;
                // coge solo la primera researchline para ponerle el fondo
                switch (deleteSpaces(researchline)) {
                  case "data":
                    researchLineColorStyles = "bg-data-500/40 text-data-300";
                    backgroundIcon = "ENDGAME_icon_placeholder.svg";
                    iconSpacing = "mb-[2px]"
                    break;
                  case "videoconference":
                    researchLineColorStyles = "bg-videoconference-600/60 text-videoconference-200"; 
                    backgroundIcon =
                      "ENDGAME_icon_placeholder.svg";
                    break;
                  case "ai":
                    researchLineColorStyles = "bg-ai-700/40 text-ai-400";
                    backgroundIcon = "ENDGAME_icon_placeholder.svg";
                    iconSpacing = "mb-.5"
                    break;
                  case "computing":
                    researchLineColorStyles = "bg-networks-600/60 text-networks-200";
                    backgroundIcon = "ENDGAME_icon_placeholder.svg";
                    iconSpacing = "mb-.5"
                    break;
                  case "e-learning":
                    researchLineColorStyles = "bg-eLearning-600/60 text-eLearning-200";
                    backgroundIcon = "ENDGAME_icon_placeholder.svg";
                    iconSpacing = "mb-1"
                    break;
                  default:
                    researchLineColorStyles = "bg-gray-500"; // Valor por defecto si no hay coincidencia
                    iconSpacing = "mb-1"
                    break;
                }

                return (
                  <Badge
                    key={index}
                    className={`pt-1.5 ${researchLineColorStyles} text-white border-none tracking-widest`}
                  >
                    <Image
                      className={`pr-2 !w-6 ${iconSpacing}`}
                      src={backgroundIcon}
                      alt={"Research line icon"}
                      fit="contain"
                    />
                    <div className="pb-0.5">
                      {t(
                        `projects.researchLines.${deleteSpaces(researchline)}`
                      )}{" "}
                    </div>{" "}
                  </Badge>
                );
              })
            : null}
        </CardHeader>
        <CardBody>
          <CardContent className="gap-1">
            <CardTitle level="h5" className="text-pretty">{title}</CardTitle>
            <div className="flex">
              <Text type="small" className="font-bold text-sm">
                {t(`research.filter.${category}`)}
              </Text>
              <span className="mx-2 mb-2">·</span>
              <Text type="small">{date && date[0]}</Text>
            </div>
            <Text className="text-gray-300/90 mb-4 lg:pr-16" type="small">
              {author}
            </Text>
            <div className="flex flex-wrap gap-1.5">
              {Array.isArray(keywords)
                ? keywords.map((keyword, index) => {
                    return (
                      <Badge
                        key={index}
                        size="sm"
                        className="bg-[#000000] border-none text-gray-300 capitalize"
                      >
                        {keyword}
                      </Badge>
                    );
                  })
                : null}
            </div>
          </CardContent>
        </CardBody>
        <CardFooter>
          {doi ? (
            <Button asChild variant="outline" size="sm" radius="rounded_sm">
              <Link rel="noopener noreferrer" target="_blank" href={doi}>
                {t("research.action-button")}
                <ArrowForwardSharpIcon />
              </Link>
            </Button>
          ) : null}
        </CardFooter>
        {/*
          {console.log(date && date[0])} */}
      </CustomCard>
    );
  }
);

Card.displayName = "PublicationCard";

export default Card;
