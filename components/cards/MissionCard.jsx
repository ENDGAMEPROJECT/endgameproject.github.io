import React from "react";
import Image from "../ui/image";
import Heading from "../ui/Heading";
import Text from "../ui/text";
import { useTranslation } from "react-i18next";

const MissionCard = ({ mission }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  let {
    icon,
    title,
    title_es,
    title_sr,
    title_fi,
    description,
    description_es,
    description_sr,
    description_fi,
  } = mission;

  // Fallback de títulos y descripciones
  title_es ??= title;
  title_sr ??= title;
  title_fi ??= title;

  description_es ??= description;
  description_sr ??= description;
  description_fi ??= description;

  // Selección de traducción según idioma
  const title_translation =
    currentLang === "es"
      ? title_es
      : currentLang === "sr"
      ? title_sr
      : currentLang === "fi"
      ? title_fi
      : title;

  const description_translation =
    currentLang === "es"
      ? description_es
      : currentLang === "sr"
      ? description_sr
      : currentLang === "fi"
      ? description_fi
      : description;

  // const title_translation = lang === "es" && title_es ? title_es : title;
  // const description_translation =
  //   lang === "es" && description_es ? description_es : description;

  return (
    <li className="w-full p-6 sm:p-4 bg-background200 text-balance">
      {/* w-full p-4 bg-black flex items-center sm:flex-col */}
      <Image
        className="!h-20  opacity-50 p-2"
        //  max-w-[200px]
        src={icon || "placeholder.jpg"}
        alt={title_translation || "Image"}
        fit="contain"
      />
      <div className="mt-4 place-content-center text-center">
        {/* mt-4 w-[120%] sm:place-content-center sm:text-center sm:w-full */}
        <Heading level="h5" className="text-myPrimary !text-20 text-pretty">
          {title_translation}
        </Heading>
        <Text>{description_translation}</Text>
      </div>
    </li>
  );
};

export default MissionCard;
