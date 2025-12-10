"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { translator } from "@/lib/utils.js";

import { escaperooms } from "@/constants/escaperooms";
import HighlightedHeader from "@/components/ui/highlightedHeader";
import Link from "next/link";
import Text from "../components/ui/text";
import Heading from "@/components/ui/heading";
import { Badge } from "./ui/badge";
import { Button, ButtonVariants } from "@/components/ui/button";
import ResourceCard from "@/components/cards/ResourceCard";
import EscaperoomCard from "@/components/cards/EscaperoomCard";

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
    longdescription_en:
      "In this session, experts will dissect the impact of misinformation and teach practical strategies for analyzing media critically.",
    longdescription_es:
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
    title_en, title_es, title_fi, title_sr,
    duration_en, duration_es, duration_fi, duration_sr,
    level_en, level_es, level_fi, level_sr,
    moreInfo_es, moreInfo_en, moreInfo_fi, moreInfo_sr,
    claim_en, claim_es, claim_fi, claim_sr,
    longdescription_en, longdescription_es, longdescription_fi, longdescription_sr,
    theme_en, theme_es, theme_fi, theme_sr,
    category,
    keywords,
  } = escaperoom;

  const currentLang = i18n.language;

  const title = translator(currentLang, title_en, title_es, title_sr, title_fi)
  const duration = translator(currentLang, duration_en, duration_es, duration_sr, duration_fi)
  const longdescription = translator(currentLang, longdescription_en, longdescription_es, longdescription_sr, longdescription_fi) 
  const theme = translator(currentLang, theme_en, theme_es, theme_sr, theme_fi)
  const level_translation = translator(currentLang, level_en, level_es, level_sr, level_fi)
  const claim_translation = translator(currentLang, claim_en, claim_es, claim_sr, claim_fi)
  const moreInfo_translation = translator(currentLang, moreInfo_en, moreInfo_es, moreInfo_sr, moreInfo_fi)


  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);
  const keywordsFormatted = keywords
    .map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1))
    .join(", ");
  const resourcesFormatted = escaperoom.resources
    .map((resource, key) => <ResourceCard resource={resource} key={key} />);

  const externalLink = escaperoom.externalLink;
  const externalLinkText =
    currentLang === "es" ? 
    "Jugar a la escaperoom" : 
    currentLang === "sr" ? "Igraj escaperoom"
     : "Play escaperoom";

  return (
    <div className="flex flex-col gap-4 items-center">
      <Badge variant="primary" type="" size="xl" className="text-base bg-primary/15">
        {categoryFormatted}
      </Badge>
      {/* <Heading level="h5" className="w-full text-center text-primary">
        {escaperoomname}
      </Heading> */}
      <HighlightedHeader
        string={claim_translation}
        variant={""}
        level="h2"
        className={'py-12 justify-start w-full'}
      // className="mt-0 pt-0 justify-center px-[2.5%] md:px-[5%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%] color-primary"
      >
        {title}
      </HighlightedHeader>
      <EscaperoomCard escaperoom={escaperoom} seeDetails={false}/>
      <Button
        asChild
        variant="primary"
        size="xl"
        type='primary'
        className="mt-4 font-medium bg-myBackground text-primary300 border-primary300 hover:bg-myPrimary hover:text-myTextInverse hover:border-myPrimary uppercase"
      >
        <Link href={externalLink} target="_blank" rel="noopener noreferrer">
          {externalLinkText}
          <NorthEastSharp />
        </Link>
      </Button>

      {/* *********ESCAPE ROOM INFO********* */}
      <section className="mb-4 w-full">
        <header className="mb-4 w-full flex justify-between border-b border-myPrimary">
          <Heading level="h5" className="text-myPrimary">{t("escaperoomfull.escaperoomInfo")}
          </Heading>
        </header>
        <div className="w-full md:grid md:grid-cols-[2fr_1fr] flex flex-col gap-4">
          <Text className="text-base w-full">{longdescription}</Text>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-primary/20 border border-myPrimary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={t("escaperoomfull.littleBoxes.theme")} variant={""} level="h6" className={"w-fit capitalize"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-myPrimary">{theme}</Heading>
              </div>
            </div>
            <div className="bg-primary/20 border border-myPrimary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={t("escaperoomfull.littleBoxes.duration")} variant={""} level="h6" className={"w-fit capitalize"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-myPrimary">{duration}</Heading>
              </div>
            </div>
            <div className="bg-primary/20 border border-myPrimary flex flex-col items-center py-2 gap-1">
              <HighlightedHeader string={t("escaperoomfull.littleBoxes.level")} variant={""} level="h6" className={"w-fit capitalize"}></HighlightedHeader>
              <div className="h-full flex items-center">
                <Heading level="h4" className="text-center capitalize text-myPrimary">{level_translation}</Heading>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* *********RELATED MATERIALS********* */}
      <section className="mb-4 w-full">
        <header className="mb-4 w-full flex justify-between border-b border-myPrimary">
          <Heading level="h5" className="text-myPrimary">{t("escaperoomfull.relatedMaterials")}
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
