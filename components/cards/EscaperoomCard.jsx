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
import Text from "@/components/ui/Text";
import Image from "@/components/ui/Image";
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
import Heading from "../ui/Heading";



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
    <Link
      href={`/escaperooms/${escaperoomname}`}
      rel="noopener noreferrer"
      className="flex gap-4 items-center w-full"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <CustomCard className="gap-0 mx-auto w-full flex flex-col">
        <HighlightedHeader
          level="h3"
          string={title_translation}
          // className={}
        />
        <div className="h-[50dvh] flex justify-center items-center border border-myPrimary bg-background200 group">
          <Image
            className="group-hover:opacity-[.30] transition duration-300 ease-in-out"
            src={image}
            alt={title_translation}
            fit="cover"
          />
          {/* Esto habrá que cambiarlo, juegar en el embed habría que pasarlo al detalle pq 
          ahora con 1 ok pero luego con 3 va a ser un lío */}
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
        </div>
        {seeDetails ==true? <Button
          className={
            ButtonVariants({
              variant: "tertiary",
              size: "lg",
              radius: "rounded_sm",
            }) + " w-full justify-end  bg-myBackground text-myText hover:text-myPrimary"
          }
        >
          {t("escaperooms.escaperoom.action-button")}
          <ArrowForwardSharp className="w-7 h-7" />
        </Button>: null}
        
      </CustomCard>
    </Link>
  );
};

export default EscaperoomCard;
