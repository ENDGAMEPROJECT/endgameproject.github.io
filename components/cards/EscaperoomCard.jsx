"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "@/components/ui/Text";
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
    <CustomCard className="bg-black p-4">
      <CardHeader>
        {category && (
          <Badge variant='primary' size={'lg'} >
            {category}
          </Badge>
        )}
      </CardHeader>
      <CardBody>
        <CardContent className="gap-1">
          <CardTitle level="h5" className="text-balance">
            {title_translation}
          </CardTitle>
          {theme?.[0] && (
            <div className="flex">
              <CardSubtitle className='text-primary'>{theme}</CardSubtitle>
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
                  variant='secondary'
                  size="sm"
                  className='text-primary-400 bg-primary/15'
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </CardBody>
      {escaperoomname && (
        <CardFooter className='p-0'>
          <Button asChild variant="outline" size="sm" radius="rounded_sm">
            {/* <Link rel="noopener noreferrer" target="_blank" href={escaperoomDetail}> */}
            <Link rel="noopener noreferrer" href={`/escaperooms/${escaperoomname}`}>
              {t("escaperooms.escaperoom.action-button")}
              <ArrowForwardSharpIcon />
            </Link>
          </Button>
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default EscaperoomCard;
