import React from "react";
import Image from "../ui/image";
import Heading from "../ui/heading";
import Text from "../ui/text";
import { useTranslation } from "react-i18next";

const MissionCard = ({ mission }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { icon, title, title_es, description, description_es } = mission;

  const title_translation = lang === "es" && title_es ? title_es : title;
  const description_translation =
    lang === "es" && description_es ? description_es : description;

  return (
    <li className="w-full p-4 bg-black">
      <Image
        className="!h-20 opacity-50 p-2"
        src={icon || "placeholder.jpg"}
        alt={title_translation || "Image"}
        fit="contain"
      />
      <div className="mt-4 place-content-center text-center">
        <Heading level="h5" className="text-primary !text-20">{title_translation}</Heading>
        <Text>{description_translation}</Text>
      </div>
    </li>
  );
};

export default MissionCard;
