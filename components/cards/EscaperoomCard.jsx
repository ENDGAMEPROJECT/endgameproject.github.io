"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// assets
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";

// Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "@/components/ui/Text";
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

const EscaperoomCard = ({ escaperoom }) => {
  const {
    category,
    theme,
    title_en,
    title_es,
    description_en,
    description_es,
    keywords,
    escaperoomname,
  } = escaperoom;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const title_translation =
    currentLang === "es" && title_es ? title_es : title_en;
  const description_translation =
    currentLang === "es" && description_es ? description_es : description_en;

  return (
    <Link
      href={`/escaperooms/${escaperoomname}`}
      rel="noopener noreferrer"
      className="flex gap-4 items-center"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <CustomCard className="mb-8 gap-0 mx-auto md:w-full flex flex-col">
        <HighlightedHeader
          level="h3"
          string={title_translation}
          // className={}
        />
        <div className="h-[50dvh] flex justify-center items-center border border-primary bg-black">
          <Heading
            level="h4"
            className={
              "text-primary bg-primary/20 border border-primary px-4 py-2"
            }
          >
            15d : 20h : 10m : 56s
          </Heading>
        </div>
        <Button
          className={
            ButtonVariants({
              variant: "tertiary",
              size: "lg",
              radius: "rounded_sm",
            }) + " w-full justify-end  bg-black text-primary hover:text-primary"
          }
        >
          {t("escaperooms.escaperoom.action-button")}
          <ArrowForwardSharp className="w-7 h-7" />
        </Button>
      </CustomCard>
    </Link>
  );
};

export default EscaperoomCard;
