"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { escaperooms } from "@/constants/escaperooms";
import HighlightedHeader from "@/components/ui/highlightedHeader";
import Link from "next/link";
import Text from "../components/ui/text";
import Heading from "../components/ui/Heading";
import { Badge } from "./ui/badge";
import { Button, ButtonVariants } from "@/components/ui/button";

// icons
import NorthEastSharp from "@mui/icons-material/NorthEastSharp";

/* escaperoominfo is like this:
{
    escaperoomname: "WorskhopSpain",
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

const escaperoomFull = ({ escaperoomname }) => {
  const { t, i18n } = useTranslation();

  //get escaperoom information from escaperooms.js
  const [escaperoom, setescaperoom] = useState(null);

  useEffect(() => {
    const escaperoomData = escaperooms.find(
      (escaperoom) => escaperoom.escaperoomname === escaperoomname
    );
    setescaperoom(escaperoomData);
  }, [escaperoomname]);

  if (!escaperoom) {
    return <div>Loading...</div>;
  }

  const {
    title_en,
    title_es,
    description_en,
    description_es,
    theme_en,
    category,
    keywords,
  } = escaperoom;

  const currentLang = i18n.language;
  const title = currentLang === "es" ? title_es : title_en;
  const description = currentLang === "es" ? description_es : description_en;
  const theme = currentLang === "es" ? theme_en : theme_en; // falta traduccion en constants

  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);
  const keywordsFormatted = keywords
    .map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1))
    .join(", ");

  const externalLink = escaperoom.externalLink || "#";
  const externalLinkText =
    currentLang === "es" ? "Más información" : "More information";

  return (
    <div className="flex flex-col gap-8 items-center">
      <Badge variant="primary" type="" size="xl" className="text-base">
        {categoryFormatted}
      </Badge>
      {/* <Heading level="h5" className="w-full text-center text-primary">
        {escaperoomname}
      </Heading> */}
      <HighlightedHeader
        string={title}
        variant={""}
        level="h2"
        className={'py-6'}
        // className="mt-0 pt-0 justify-center px-[2.5%] md:px-[5%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] color-primary"
      >
        {title}
      </HighlightedHeader>
      <Heading level="h4" className='capitalize'>{theme}</Heading>
      {/* <Badge variant="secondary" type="" size="lg">
        {keywordsFormatted}
        </Badge> */}
      {Array.isArray(keywords) && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary" size="lg" type="">
              {keyword}
            </Badge>
          ))}
        </div>
      )}
        <Button
          asChild
          variant="outline"
          size="xl"
          type='primary'
          className="mt-4 text-primary-300 border-primary-300 hover:bg-primary hover:text-black hover:border-primary"
        >
          <Link href={externalLink} target="_blank" rel="noopener noreferrer">
            {externalLinkText}
            <NorthEastSharp />
          </Link>
        </Button>
      <Text className="text-base">{description}</Text>
    </div>
  );
};

export default escaperoomFull;
