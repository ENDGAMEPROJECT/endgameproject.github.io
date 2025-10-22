import React from "react";

import { useTranslation } from "react-i18next";
import { translator } from "@/lib/utils.js";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Components
import { Badge, badgeVariants } from "../ui/badge";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";

import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

// icons
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';


const Card = React.forwardRef(
  (
    {title_en, title_es, subtitle, description_en, description_es, date, category, route},
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    
    const description_translation = translator(currentLang, description_en, description_es)
    const title_translation = translator(currentLang, title_en, title_es)

    return (
      <CustomCard
        className={'p-6 bg-cover bg-center bg-no-repeat text-text bg-background-300 rounded-md'}
        style={{
          backgroundImage: "url('assets/fondos/background_image.png')",
        }}
      >
        <header className="flex w-full justify-between items-center mb-2">
          <span className="w-fit flex justify-start gap-2">
            <Badge variant="secondary" className={'bg-background-600/50 text-white'}>
              {date}
            </Badge>
            <Badge variant="secondary" className={'bg-background-600/50 text-white'}>
              {category}
            </Badge>
          </span>
          <Button href={route} variant="ghost" size="lg" className="flex w-fit items-center px-10 py-0">
            Ir al curso<LaunchSharpIcon className="h-8 min-w-6"/>
          </Button>
        </header>
        {/* <Image
            className={"h-40"}
            src={img || "placeholder.jpg"}
            alt={title || "Image"}
            fit="cover"
          /> */}
        <CardBody>
          <CardContent>
            <CardTitle level="h4">{title_translation}</CardTitle>
            <CardSubtitle level="h6">{subtitle}</CardSubtitle>
            <CardDescription description={description_translation}/>
            {/* <div className={tagContainerClasses}>{renderTags(tags)}</div> */}
          </CardContent>
        </CardBody>
      </CustomCard>
    );
  }
);

Card.displayName = "CourseCard";

export default Card;
