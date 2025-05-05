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
    <li className="w-full p-6 sm:p-4 bg-black"> 
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
        <Heading level="h5" className="text-primary !text-20 text-pretty">{title_translation}</Heading>
        <Text>{description_translation}</Text>
      </div>
    </li>
  );
};

export default MissionCard;
