"use client";

import React, { useState, useEffect } from "react";
import { publications } from "@/constants/publications";
import { useTranslation } from "react-i18next";
import { Card, CardVariants } from "@/components/core/Cards";
import { Button, ButtonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function RecentPublications(props) {
  // Inicializa el estado con un array vacío
  const [papers, setPapers] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    // Asegúrate de que publications sea un array válido
    if (Array.isArray(publications)) {
      setPapers(publications);
    } else {
      console.error("publications no es un array:", publications);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-auto p-4 flex gap-4 grid grid-cols-2">
        {papers
          .filter((paper) => paper.category === "article-journal")
          .slice(0, 4) // Limita los resultados a los primeros 4
          .map(({ doi, title, author, date, category }, index) => (
            <Card
              cardType={"publication"}
              className={CardVariants({})}
              key={doi || index} // Usar DOI si está disponible, o el índice como fallback
              date={date}
              title={title}
              author={author}
              category={category} // Usa category o journal
              doi={doi}
              buttonText={"leer publicación"}
            />
          ))}
      </div>

      <Button
        className={
          ButtonVariants({
            variant: "default",
            size: "lg",
            radius: "rounded_sm",
          }) + " w-fit mt-4 my-auto"
        }
        {...props}
      >
        <Link href="/research" rel="noopener noreferrer">
          {t("front.latestPublicationsButton")}
        </Link>
      </Button>
    </div>
  );
}
