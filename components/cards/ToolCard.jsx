import React from "react";

import { useTranslation } from "react-i18next";
import Link from "next/link";

// Components
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
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GitHub } from "@mui/icons-material";

const Card = React.forwardRef(
  (
    {title, img, route, description_en, description_es, github},
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    let description_translation = description_en;
    if (currentLang === "es" && description_es) {
      description_translation = description_es;
    }

    return (
      <CustomCard className="p-3 rounded-2xl border border-white">
        {img && (
          <Image
            src={process.env.PUBLIC_URL + img || "placeholder.jpg"}
            alt={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
            className={"!h-[250px] p-6 bg-primary-500 rounded-md"}
            fit="contain"
          />
        )}
        <CardBody className="h-fit sm:h-full sm:-mb-20"> {/* no quitar margin, está ajustando la altura */}
          <CardContent className="h-fit md:h-full">
            <CardTitle>{title}</CardTitle>
            <CardDescription description={description_translation}/>
          </CardContent>
        </CardBody>

        <CardFooter className="align-end justify-between">
          {github && (
            <Button variant="ghost" size="sm" className="gap-1">
              <GitHub className="h-5"/>
              <Link target="_blank" href={github}>
                Github
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" className="">
            <Link target="_blank" href={route}>
              {" "}
              {t("tools.toolCards.button")}
            </Link>
          </Button>
        </CardFooter>

      </CustomCard>
    );
  }
);

Card.displayName = "ToolCard";

export default Card;