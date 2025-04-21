import React from "react";
import Image from "../ui/image";
import Heading from "../ui/heading";
import Text from "../ui/text";
import { useTranslation } from "react-i18next";

const MissionCard = ({ mission }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { icon, title, title_es, description, description_es } = mission;

  const translatedTitle = lang === "es" && title_es ? title_es : title;
  const translatedDescription =
    lang === "es" && description_es ? description_es : description;

  return (
    <li className="w-full p-4 bg-grey-950">
      <Image
        className="!h-20 opacity-50 p-2"
        src={icon || "placeholder.jpg"}
        alt={translatedTitle || "Image"}
        fit="contain"
      />
      <div className="mt-4 place-content-center text-center">
        <Heading level="h5" className="!text-primary">{translatedTitle}</Heading>
        <Text>{translatedDescription}</Text>
      </div>
    </li>
  );
};

export default MissionCard;
