"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// UI Components
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button } from "../ui/button";

// Custom Card Components
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
  CardSubtitle,
} from "@/components/ui/customCard";

// Icons
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import EventSharp from "@mui/icons-material/EventSharp";

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
    description_en,
    description_es,
    description_sr,
    description_fi,
    keywords,
    publicationname,
  } = publication;

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Fallback de títulos y descripciones
  title_es ??= title_en;
  title_sr ??= title_en;
  title_fi ??= title_en;

  description_es ??= description_en;
  description_sr ??= description_en;
  description_fi ??= description_en;

  // Selección de traducción según idioma
  const title_translation =
    currentLang === "es"
      ? title_es
      : currentLang === "sr"
      ? title_sr
      : currentLang === "fi"
      ? title_fi
      : title_en;

  const description_translation =
    currentLang === "es"
      ? description_es
      : currentLang === "sr"
      ? description_sr
      : currentLang === "fi"
      ? description_fi
      : description_en;

  const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    // 📦 Contenedor principal de la tarjeta
    <CustomCard className="bg-black p-4">

      {/* 🔖 Cabecera de la tarjeta con etiquetas */}
      <CardHeader>
        {type && (
          <Badge variant="type" size="lg" type="info">
            {type}
          </Badge>
        )}
        {country && (
          <Badge variant="primary" size="lg" type="info">
            {country}
          </Badge>
        )}
      </CardHeader>

      {/* 📄 Cuerpo de la tarjeta */}
      <CardBody className="h-full justify-start">
        <CardContent className="gap-1 h-full justify-start">

          {/* 📝 Título */}
          <CardTitle level="h5" className="text-pretty">
            {title_translation}
          </CardTitle>

          {/* 📅 Fecha y metainformación */}
          {date?.[0] && (
            <div className="flex">
              {/* 📍 Categoría y fecha corta */}
                <Text type="small" className="font-bold text-sm !text-secondary-200">
                  {/* {t(`research.filter.${category}`)} */}
                  {category}
                </Text>
                <span className="mx-2 mb-2 text-secondary-200">·</span>
                <Text type="small" className='!text-secondary-200'>
                  {date}
                </Text>
            </div>
          )}

          {/* 👥 Autores */}
          <Text className="text-gray-300/90 mb-4 lg:pr-16" type="small">
            {authors}
          </Text>

          {/* 🏷️ Palabras clave */}
          {Array.isArray(keywords) && (
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  size="sm"
                  className="text-secondary-400 bg-secondary/15"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </CardBody>

      {/* 🔗 Pie de la tarjeta con botón de enlace */}
      {publicationname && (
        <CardFooter className="p-0 flex-wrap">
          <Button
            asChild
            variant="outline"
            size="sm"
            radius="rounded_sm"
            className="hover:bg-black hover:border-secondary-400 hover:text-secondary-300"
          >
            <Link
              rel="noopener noreferrer"
              href={`/publications/${publicationname}`}
            >
              {t(
                publication.type === "publication"
                  ? "research.button"
                  : "research.button"
              )}
              <ArrowForwardSharpIcon />
            </Link>
          </Button>
        </CardFooter>
      )}
    </CustomCard>
  );
};

export default ResearchCard;
