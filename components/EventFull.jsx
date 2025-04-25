"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { events } from "@/constants/events";


/* eventinfo is like this:
{
    eventname: "WorskhopSpain",
    category: "webinar",
    date: "10/04/25",
    title_en: "Understanding the importance of media literacy in today’s fast-paced digital landscape",
    title_es: "Comprendiendo la Alfabetización Mediática en la Era Digital",
    description_en:
      "In this session, experts will dissect the impact of misinformation and teach practical strategies for analyzing media critically.",
    description_es:
      "En esta sesión, expertos analizarán el impacto de la desinformación y compartirán estrategias prácticas para evaluar los medios de forma crítica.",
    keywords: ["webinar", "hola", "tag", "misinformation"],
    externalLink: "#",
  },
*/

const EventFull = ({ eventname }) => {
    const { t, i18n } = useTranslation();

    //get event information from events.js
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const eventData = events.find((event) => event.eventname === eventname);
        setEvent(eventData);
    }
    , [eventname]);

    
    if (!event) {
        return <div>Loading...</div>;
    }

    const { title_en, title_es, description_en, description_es, date, category, keywords } = event;
    const currentLang = i18n.language;
    const title = currentLang === "es" ? title_es : title_en;
    const description = currentLang === "es" ? description_es : description_en;
    const dateFormatted = new Date(date).toLocaleDateString(currentLang, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1);
    const keywordsFormatted = keywords.map((keyword) => keyword.charAt(0).toUpperCase() + keyword.slice(1)).join(", ");

    const externalLink = event.externalLink || "#";
    const externalLinkText = currentLang === "es" ? "Más información" : "More information";

    const externalLinkClass = "text-primary hover:underline";
    const externalLinkStyle = {
        textDecoration: "none",
        color: "#0092A2",
        fontWeight: "bold",
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">{dateFormatted}</p>
            <p className="text-sm text-gray-500">{categoryFormatted}</p>
            <p className="text-sm text-gray-500">{keywordsFormatted}</p>
            <p className="text-base">{description}</p>
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className={externalLinkClass} style={externalLinkStyle}>
                {externalLinkText}
            </a>
        </div>
    );

}

export default EventFull;