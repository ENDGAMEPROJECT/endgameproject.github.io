// import React from "react";
import { Badge, badgeVariants } from "../ui/badge";
import { Button, ButtonVariants} from "../ui/button";
import Heading from "../ui/heading";
import Text from "../ui/text";
import { useTranslation } from "react-i18next";
import ArrowForwardSharp from "@mui/icons-material/ArrowForwardSharp";
import Link from "next/link";

const ResourceCard = ({ resource }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    let {
        resourceName = "Resource Name",
        resourceName_es = "Nombre del recurso",
        resourceName_sr = "Naziv resursa",                      // TODO: review translations
        resourceName_fi = "Resurssin nimi",                     // TODO: review translations
        additionalInfo = "More info about this resource",
        additionalInfo_es = "Más información sobre este recurso",
        additionalInfo_sr = "Više informacija o ovom resursu",          // TODO: review translations
        additionalInfo_fi = "Lisätietoja tästä resurssista",            // TODO: review translations
        tag = "Resource tag",
        resourceLink = "https://endgameproject.github.io"
    } = resource || {};

    // Fallback de títulos y descripciones
    resourceName_es ??= resourceName;
    resourceName_sr ??= resourceName;
    resourceName_fi ??= resourceName;

    additionalInfo_es ??= additionalInfo;
    additionalInfo_sr ??= additionalInfo;
    additionalInfo_fi ??= additionalInfo;

    // Selección de traducción según idioma
    const resourceName_translation =
        currentLang === "es"
            ? resourceName_es
            : currentLang === "sr"
                ? resourceName_sr
                : currentLang === "fi"
                    ? resourceName_fi
                    : resourceName;

    const additionalInfo_translation =
        currentLang === "es"
            ? additionalInfo_es
            : currentLang === "sr"
                ? additionalInfo_sr
                : currentLang === "fi"
                    ? additionalInfo_fi
                    : additionalInfo;

    const buttonContent_translation =
        currentLang === "es"
            ? "Leer recurso"
            : currentLang === "sr"
                ? "Pročitati žalbu"                 // TODO: review translations
                : currentLang === "fi"
                    ? "Lue aineisto"             // TODO: review translations
                    : "Read resource";

    const howtouse_translation =
        currentLang === "es"
            ? "Modo de empleo"
            : currentLang === "sr"
                ? "Uputstvo za upotrebu"                 // TODO: review translations
                : currentLang === "fi"
                    ? "Käyttötapa"             // TODO: review translations
                    : "How to use";

    

    return (
        <li className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:items-start items-center">
                <Heading level="h5" >{resourceName_translation}</Heading>
                <Text className="text-base w-fit">{additionalInfo_translation}</Text>
            </div>
            <div className="flex gap-2">
                <Badge variant="secondary" size="md" className="bg-primary/25">
                    {tag}
                </Badge>
                <Badge variant="secondary" size="md" className="bg-primary/50">
                    {howtouse_translation}
                </Badge>
            </div>
            <div className="h-full w-fit">
                <Button
                    variant="primary"
                    size="md"
                    type='primary'
                    className="bg-myPrimary text-myTextInverse"
                >
                    <Link rel="noopener noreferrer" href={resourceLink} className="flex items-center gap-1">
                        {buttonContent_translation}
                        <ArrowForwardSharp /> 
                    </Link>
                </Button>
            </div>
        </li>

    );
};

export default ResourceCard;
