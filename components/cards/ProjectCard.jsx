"use client";

import clsx from "clsx";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import { researchlines } from "@/constants/researchlines";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "../ui/image";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/customCard";
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';

const Card = React.forwardRef(
  (
    {
      title,
      description_en,
      description_es,
      route,
      researchLine,
      logo,
      projectType = "european-project",
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const descriptionRef = useRef(null);

    let description_translation = description_en;
    if (currentLang === "es" && description_es) {
      description_translation = description_es;
    }

    let backgroundColor = "bg-gray-600/50";
    if (researchLine && researchLine[0]) {
      const colors = {
        data: "bg-data_bg",
        videoconference: "bg-videoconference_bg",
        ai: "bg-ai_bg",
        computing: "bg-networks_bg",
        "e-learning": "bg-eLearning_bg",
      };
      backgroundColor = colors[researchLine[0]] || backgroundColor;
    }

    return (
      <CustomCard className="py-6 flex flex-col items-start sm:flex-row gap-3 sm:gap-6 bg-transparent border-transparent shadow-none border-b-gray-400 border-b rounded-none ">
        <div
          className={`w-full min-w-[184px] sm:w-1/2 h-[237px] bg-cover sm:bg-center ${backgroundColor} rounded-md`}
        >
          <Image
            className="brightness-0 invert p-8"
            src={logo}
            fit="contain"
            layout="bottom-right"
            badgeVariant="secondary"
            badgeSize="md"
            badgeContent={t(`projects.type.${projectType}`)}
          />
        </div>

        <CardBody>
          <CardContent className="gap-5 my-0.5 lg:mt-0 lg:gap-[22px]">

              {title && (
                <Link
                  href={route}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex flex-row w-full gap-2 justify-between items-center"
                >
                  <CardTitle
                    level="h3"
                    className="hover:text-blue-400 transition-all mb-0"
                  >
                    {title}
                  </CardTitle>

                  <LaunchSharpIcon
                    className="mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                </Link>
              )}
              {/* </CardTitle> */}

              {description_translation && (
                <CardDescription lines={4} description={description_translation}/>
              )}

          </CardContent>
          <CardFooter className="BADGES-RESEARCHLINE flex flex-wrap gap-2 justify-start">
              {Array.isArray(researchLine) &&
                researchLine.map((item, index) => {
                  const colors = {
                    data: "bg-data-500",
                    videoconference: "bg-videoconference-500",
                    ai: "bg-ai-700",
                    computing: "bg-networks-500",
                    "e-learning": "bg-eLearning-500",
                  };
                  return (
                    <Badge
                      key={index}
                      className={`${
                        colors[item] || "bg-gray-500"
                      } text-white border-none tracking-widest`}
                      variant="default"
                      size="lg"
                    >
                      {t(`projects.researchLines.${item}`)}
                    </Badge>
                  );
                })}
            </CardFooter>
        </CardBody>
      </CustomCard>
    );
  }
);

Card.displayName = "ProjectCard";

export default Card;



// {filteredItems.map(
//   (
//     {
//       year,
//       title,
//       description_en,
//       description_es,
//       researchLine,
//       logo,
//       route,
//       projectType,
//     },
//     index
//   ) => (
//     <ProjectCard
//       key={index}
//       year={year}
//       researchLine={researchLine}
//       title={title}
//       logo={logo}
//       route={route}
//       description_en={description_en}
//       description_es={description_es}
//       projectType={projectType}
//     ></ProjectCard>
//   )
// )}