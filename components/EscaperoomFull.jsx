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
import ResourceCard from "@/components/cards/ResourceCard";

// icons
import NorthEastSharp from "@mui/icons-material/NorthEastSharp";
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";

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

const pruebaArray = {
  resourceName : "Ey yo",
  resourceName_es : "Nombre del recurso",
  resourceName_sr : "Naziv resursa",                      // TODO: review translations
  resourceName_fi : "Resurssin nimi",                     // TODO: review translations
  additionalInfo : "More info about this resource",
  additionalInfo_es : "Más información sobre este recurso",
  additionalInfo_sr : "Više informacija o ovom resursu",          // TODO: review translations
  additionalInfo_fi : "Lisätietoja tästä resurssista",            // TODO: review translations
  tag : "Resource tag",
}


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
    claim,
    description_en,
    description_es,
    longdescription_en,
    longdescription_es,
    theme_en,
    category,
    keywords,
  } = escaperoom;

  const currentLang = i18n.language;
  const title = currentLang === "es" ? title_es : title_en;
  const description = currentLang === "es" ? description_es : description_en;
  const longdescription = currentLang === "es" ? longdescription_es : longdescription_en;
  const theme = currentLang === "es" ? theme_en : theme_en; // falta traduccion en constants

  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);
  const keywordsFormatted = keywords
    .map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1))
    .join(", ");
  const resourcesFormatted = escaperoom.resources
    .map((resource) => <ResourceCard resource={resource} />);

  const externalLink = escaperoom.externalLink || "#";
  const externalLinkText =
    currentLang === "es" ? "Ir a la escaperoom" : "Play escaperoom";

  return (
    <div className="flex flex-col gap-4 items-center">
      <Badge variant="primary" type="" size="xl" className="text-base">
        {categoryFormatted}
      </Badge>
      {/* <Heading level="h5" className="w-full text-center text-primary">
        {escaperoomname}
      </Heading> */}
      <HighlightedHeader
        string={claim}
        variant={""}
        level="h2"
        className={'py-12 justify-start w-full'}
      // className="mt-0 pt-0 justify-center px-[2.5%] md:px-[5%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] color-primary"
      >
        {title}
      </HighlightedHeader>
      <Button
        asChild
        variant="outline"
        size="xl"
        type='primary'
        className="mt-4 font-medium text-primary-300 border-primary-300 hover:bg-primary hover:text-black hover:border-primary uppercase"
      >
        <Link href={externalLink} target="_blank" rel="noopener noreferrer">
          {externalLinkText}
          <NorthEastSharp />
        </Link>
      </Button>

      {/* *********ESCAPE ROOM INFO********* */}
      <section className="mb-4 w-full">
        <header className="mb-4 w-full flex justify-between border-b border-primary">
          <Heading level="h5" className="text-primary">Escaperoom info
          </Heading>
        </header>
        <div className="w-full md:grid md:grid-cols-[2fr_1fr] flex flex-col gap-4">
          <Text className="text-base w-full">{longdescription}</Text>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-primary/20 border border-primary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={"Theme"} variant={""} level="h6" className={"w-fit"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-primary">{theme}</Heading>
              </div>
            </div>
            <div className="bg-primary/20 border border-primary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={"Duration"} variant={""} level="h6" className={"w-fit"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-primary">45 min</Heading>
              </div>
            </div>
            <div className="bg-primary/20 border border-primary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={"Level"} variant={""} level="h6" className={"w-fit"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-primary">Medium</Heading>
              </div>
            </div>
            <div className="bg-primary/20 border border-primary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={"Other"} variant={""} level="h6" className={"w-fit"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-primary">More info?</Heading>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* *********RELATED MATERIALS********* */}
      <section className="mb-4 w-full">
        <header className="mb-4 w-full flex justify-between border-b border-primary">
          <Heading level="h5" className="text-primary">Related materials
          </Heading>
        </header>
        <div className="w-full flex flex-col gap-4">
          {resourcesFormatted}
        </div>
      </section>

      {/* <Heading level="h4" className='capitalize'>{theme}</Heading> */}
      {/* <Badge variant="secondary" type="" size="lg">
        {keywordsFormatted}
        </Badge> */}
      {/* {Array.isArray(keywords) && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary" size="lg" type="">
              {keyword}
            </Badge>
          ))}
        </div>
      )} */}


    </div>
  );
};

export default escaperoomFull;
