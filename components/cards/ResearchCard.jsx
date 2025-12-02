"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// UI Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/text";
import { Button } from "../ui/button";

// Custom Card Components
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  Cardsubtitle,
  CardFooter,
  CardHeader,
  CardSubtitle,
} from "@/components/ui/customCard";

// Icons
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';

const ResearchCard = ({ publication }) => {
  // Desestructuración del objeto `publication`
  let {
    category,
    type,
    country,
    authors,
    date,
    title_en,
    title_es,
    title_sr,
    title_fi,
    subtitle_en,
    subtitle_es,
    subtitle_sr,
    subtitle_fi,
    keywords,
    publicationname,
    externalLinkJoin,
    downloadLinkJoin,
  } = publication;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Fallback de títulos y descripciones
  title_es ??= title_en;
  title_sr ??= title_en;
  title_fi ??= title_en;

  subtitle_es ??= subtitle_en;
  subtitle_sr ??= subtitle_en;
  subtitle_fi ??= subtitle_en;

  // Selección de traducción según idioma
  const title_translation =
    currentLang === "es"
      ? title_es
      : currentLang === "sr"
      ? title_sr
      : currentLang === "fi"
      ? title_fi
      : title_en;

  const subtitle_translation =
    currentLang === "es"
      ? subtitle_es
      : currentLang === "sr"
      ? subtitle_sr
      : currentLang === "fi"
      ? subtitle_fi
      : subtitle_en;

  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    // 📦 Contenedor principal de la tarjeta
    <CustomCard className="bg-myBackground p-4">
      <CardHeader>
        {type && (
          <Badge variant="type" size="lg" type="info">
            {type}
          </Badge>
        )}
        {country && (
          <Badge variant="primary" size="lg" type="info" className="bg-secondary/15">
            {country}
          </Badge>
        )}
      </CardHeader>

      <CardBody className="h-full justify-start">
        <CardContent className="gap-1 h-full justify-start">
          <CardTitle level="h5" className="text-pretty">
            {title_translation}
          </CardTitle>

          {date?.[0] && (
            <div className="flex items-center !text-secondary200">
              <Text type="small" className="font-bold text-sm !text-current">
                {/* {t(`research.filter.${category}`)} */}
                {category}
              </Text>
              <span className="mx-2">·</span>
              <Text type="small" className="!text-current">
                {date}
              </Text>
            </div>
          )}

          <Text className="text-gray-300/90 text-balance mb-4 lg:pr-16" type="small">
            {authors}
          </Text>

          {Array.isArray(keywords) && (
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  size="sm"
                  className="text-secondary400 bg-secondary/15"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </CardBody>
      

      {publicationname && (
        <CardFooter className="p-0 flex-wrap">
          {/* Leer online BTN */}
          {externalLinkJoin && (
            <Button
              asChild
              variant="outline"
              size="sm"
              radius="rounded_sm"
              className="hover:bg-myBackground hover:border-secondary400 hover:text-secondary300"
            >
              <Link
                rel="noopener noreferrer"
                href={externalLinkJoin}
                target="_blank"
              >
                {t(
                  publication.type === "publication"
                    ? "research.buttons.read"
                    : "research.buttons.read"
                )}
                <ArrowForwardSharpIcon />
              </Link>
            </Button>
          )}
          {downloadLinkJoin && (
            <Button
              asChild
              variant="primary"
              size="sm"
              radius="rounded_sm"
              type='info'
              className="hover:bg-myBackground hover:bg-secondary-400 hover:text-black"
            >
              <Link download={downloadLinkJoin}
                rel="noopener noreferrer"
                href={`/documents/${downloadLinkJoin}`}
              >
                {t(
                  publication.type === "publication"
                    ? "research.buttons.download"
                    : "research.buttons.download"
                )}
                <SaveAltSharpIcon />
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default ResearchCard;
