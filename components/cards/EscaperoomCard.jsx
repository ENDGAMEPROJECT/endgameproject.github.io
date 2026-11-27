"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { translator } from "@/lib/utils.js";

// assets
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import PlayArrowSharp from "@mui/icons-material/PlayArrowSharp";
import AccessTimeSharp from "@mui/icons-material/AccessTimeSharp";


// Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "@/components/ui/text";
import Image from "@/components/ui/image";
import { Button, ButtonVariants } from "../ui/button";

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
import HighlightedHeader from "../ui/highlightedHeader";
import Heading from "../ui/heading";



const EscaperoomCard = ({ escaperoom, seeDetails = true }) => {
  const {
    category,
    theme_en,
    theme_es,
    title_en,
    title_es,
    description_en,
    description_es,
    keywords,
    tags_en, tags_es, tags_sr, tags_fi,
    escaperoomname,
    image,
    longdescription_en, longdescription_es, longdescription_sr, longdescription_fi,
    duration_en, duration_es, duration_sr, duration_fi,
  } = escaperoom;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title_translation = translator(currentLang, title_en, title_es);
  const description_translation = translator(
    currentLang,
    description_en ?? longdescription_en,
    description_es ?? longdescription_es,
    longdescription_sr,
    longdescription_fi
  );
  const tags = translator(currentLang, tags_en, tags_es, tags_sr, tags_fi);
  const duration = translator(currentLang, duration_en, duration_es, duration_sr, duration_fi);

  return (
    <CustomCard className="gap-0 mx-auto w-full flex flex-col !h-auto mb-4">
      <HighlightedHeader
        level="h3"
        string={title_translation}
        // className={}
      />
      <Link
        href={escaperoom.externalLink}
        rel="noopener noreferrer"
        target="_blank"
        className="relative w-full aspect-[16/10] max-h-[60dvh] flex justify-center items-center overflow-hidden border border-myPrimary bg-background200 group"
      >
        <Image
          className="group-hover:opacity-[.30] transition duration-300 ease-in-out"
          src={image}
          alt={title_translation}
          fit="cover"
        />
      
        <Button
          asChild
          variant="outline"
          size="xl"
          className="absolute opacity-100 md:opacity-0 md:group-hover:opacity-100 text-primary400 border-primary400 bg-primary/15 hover:bg-myPrimary hover:border-myPrimary hover:text-myTextInverse"
        >
          <div>{t("escaperooms.escaperoom.play-button")}
            <PlayArrowSharp />
          </div>
        </Button>
      </Link>

      {seeDetails && (
      <div className="flex flex-col gap-3 p-4 bg-myBackground">
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                size="sm"
                className="text-primary400 bg-primary/15"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {description_translation && (
          <Text type="small" className="line-clamp-3">
            {description_translation}
          </Text>
        )}
        <div className="flex items-center justify-between gap-4">
          {duration ? (
            <Text type="small" className="flex items-center gap-1.5 font-bold">
              <AccessTimeSharp className="w-4 h-4 text-myPrimary" />
              {duration}
            </Text>
          ) : <span />}
          <Button
            asChild
            className={
              ButtonVariants({
                variant: "tertiary",
                size: "lg",
                radius: "rounded_sm",
              }) + " px-0 bg-transparent text-myText hover:text-myPrimary"
            }
          >
            <Link href={`/escaperooms/${escaperoomname}`}>
              {t("escaperooms.escaperoom.action-button")}
              <ArrowForwardSharp className="w-7 h-7" />
            </Link>
          </Button>
        </div>
      </div>
      )}

    </CustomCard>
  );
};

export default EscaperoomCard;
