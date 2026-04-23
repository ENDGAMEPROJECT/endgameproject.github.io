"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { translator } from "@/lib/utils.js";

// assets
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import PlayArrowSharp from "@mui/icons-material/PlayArrowSharp";


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
    escaperoomname,
    image
  } = escaperoom;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title_translation = translator(currentLang, title_en, title_es);
  // const description_translation = translator(currentLang, description_en, description_es);

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
        className="h-[50dvh] flex justify-center items-center border border-myPrimary bg-background200 group"
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
          className="group-hover:opacity-[1] absolute opacity-[0]  text-primary400 border-primary400 bg-primary/15 hover:bg-myPrimary hover:border-myPrimary hover:text-myTextInverse"
        >
          <div>{t("escaperooms.escaperoom.play-button")}
            <PlayArrowSharp />
          </div>
        </Button>
      </Link>
      {seeDetails ==true? <Button
        asChild
        className={
          ButtonVariants({
            variant: "tertiary",
            size: "lg",
            radius: "rounded_sm",
          }) + " w-full justify-end  bg-myBackground text-myText hover:text-myPrimary"
        }
      >
        <Link href={`/escaperooms/${escaperoomname}`}>
          {t("escaperooms.escaperoom.action-button")}
          <ArrowForwardSharp className="w-7 h-7" />
        </Link>
      </Button>: null}

    </CustomCard>
  );
};

export default EscaperoomCard;
